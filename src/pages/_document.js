import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.svg" />

				{/* <!-- Meta --> */}
				<meta name="author\WinVerma" content="Win" />
				<meta name="theme-color" content="#3b82f6" />
				<meta name="description" content="MindXppress is a quiz/trivia game. You can select different game modes and topics. You can also use different wildcards to help you answer the questions." />
				<meta name="robots" content="index, nofollow" />

				{/* <!-- Open Graph --> */}
				<meta property="og:title" content="MindXpress" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="" />
				<meta property="og:url" content="" />
				<meta property="og:description" content="MindXpress is a quiz/trivia game with questions made by IA. You can select different game modes and topics, you can also use different wildcards to help you answer the questions." />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
