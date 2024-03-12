import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from './Button'

export default function LoginButton() {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <>
        <Button
          type="submit"
          variant="solid"
          color="blue"
          className="my-10 w-full"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        type="submit"
        variant="solid"
        color="blue"
        className="my-10px w-full"
        onClick={(e) => {
          e.preventDefault()
          signIn('google', {
            callbackUrl: '/',
          })
        }}
      >
        Sign in with google
      </Button>
    </>
  )
}
