import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import { BaseLayout } from '@/components/Layouts/BaseLayout'
import { LoadingCircle } from '@/components/PageComponents/LoadingScreens/BasicCircle.jsx'
import * as links from "@/components/Navigation/Links.js";

export default function MainDash() {
  const { data, status } = useSession();
  if (status === "unauthenticated" || status === null)
    return (
      <>
        <h1>You must be signed in to view this page.</h1>
        <p>Login here: <a href="https://blog.circle-analytics.com">Home</a> </p>
      </>
    );

  if (status === "loading")
    return (
      <LoadingCircle />
    );
  if (status === "authenticated") {
    return (
      <>
        <BaseLayout
          navLinks={[
            links.L1,
            links.L2,
            links.L3,
          ]}
          dropdownLinks={[
            {
              key: 10,
              name: "Archive",
              links: [
                links.L1001,
              ],
            },
          ]}
          title={`${data.user.name}'s Dashboard`}
          meta={{ name: "Dashboard", content: "Dashboard" }}
        >
          <div className='min-h-screen'>
            <h1>Dashboard Test Page</h1>
            <h1>
              {" "}
              Hello There! If this is working you should see your name here:{" "}
              {data.user.name}
            </h1>
            <h1>
              {" "}
              and the email address you signed in with here: {data.user.email}
            </h1>
          </div>
        </BaseLayout>
      </>
    );
  }
}