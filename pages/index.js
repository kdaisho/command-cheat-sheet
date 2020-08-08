import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/index.module.scss";

function Index({ allPostsData }) {
	return (
		<>
			<Head>
				<title>Command Cheat Sheet</title>
			</Head>
			<Layout isHome>
				<img src="images/profile.jpg" className={styles.profile} alt="author" />
				<h1>Command Cheat Sheet</h1>
				<p>Find your command</p>
				{allPostsData.map(({ id, title, date }) => {
					return (
						<div key={id}>
							<Link href="/posts/[id]" as={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<p>{date}</p>
						</div>
					);
				})}
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}

export default Index;
