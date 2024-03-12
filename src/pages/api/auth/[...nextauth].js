import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export async function userPermissions(token) {
  const url = process.env.MONGO_GRAPH_ENDPOINT

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apiKey: process.env.MONGO_GRAPH_API_KEY,
      },
      body: JSON.stringify({
        query: `query($email: String!){
          users(query: {Email: $email}) {
            PrimaryRole {
              RoleID
            }
            SecondaryRoles{
              RoleID
            }
          }
        }`,
        variables: {
          email: token.email,
        },
      }),
    })

    const data = await res.json()
    console.log('data:', data)
    return data ? data.data.users[0] : { message: 'No data' }
  } catch (err) {
    console.error(err)
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 60 * 60, // 1 hours
    updateAge: 24 * 60 * 60, // 24 hours
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString('hex')
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // the following validation block should be turned on after sign-up page is complete
      // if (account.provider === 'google') {
      //   const data = await userPermissions(credentials)
      //   if (data.email === email) {
      //     return true
      //   } else {
      //     return false
      //   }
      // }
      return true
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, token, user }) {
      const data = await userPermissions(token)
      session.user.name = token.name
      session.user.email = token.email
      session.primaryRole = data.PrimaryRole.RoleID
      session.secondaryRoles = data.SecondaryRoles.map((role) => role.RoleID)
      return session
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
})
