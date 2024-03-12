import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Circle Analytics Blog</title>
				<meta name="description" content="An analytics blog produced by Circle Logstics Inc to provide market insights and freight industry analytics" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap" />
				<link rel="icon" href="/images/favicon.ico" sizes="any" type="image/x-icon" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
