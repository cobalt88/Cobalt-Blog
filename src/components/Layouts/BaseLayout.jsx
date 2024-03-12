import NavBar from '../Navigation/NavBar'
import { Footer } from '../PageComponents/Footer'
import Head from 'next/head'
import { useSession } from "next-auth/react";
import * as links from '@/components/Navigation/Links'

export function BaseLayout(props) {
  const { data, status } = useSession();
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta>{props.meta}</meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar links={status === "authenticated" ? [links.L1, links.L2, links.L3] : [links.L1, links.L3]} dropdownLinks={
        [
          {
            key: 10,
            name: "Archive",
            links: [links.L1001, links.L1002],
          },
        ]} />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </>
  )
}

