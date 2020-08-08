import Link from "next/link";
import Head from "next/head";
import styles from "./layout.module.scss";

const Layout = ({ children, isHome }) => {
	const siteTitle = "Command Cheat Sheet";

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Find your command when you forgot it" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<div className={styles.container}>
					<h1>My Command Sheet</h1>
					<div className={styles.search}>
						<label htmlFor="search">Search</label>
						<input id="search" type="text" />
					</div>
				</div>
			</header>
			<div className={styles.container}>
				<main>{children}</main>
				<div className="my-8">
					{isHome ? (
						<div>&copy; Copyright {new Date().getFullYear()} daishodesign.com</div>
					) : (
						<Link href="/">
							<a>🏠 Back to home</a>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Layout;
