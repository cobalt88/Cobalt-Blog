import "focus-visible";
import "@/styles/tailwind.css";
import "@/styles/global.css";
import { SessionProvider } from "next-auth/react";

export default function App({ session, Component, pageProps }) {
	return (
		<>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}
