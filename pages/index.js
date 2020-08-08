import { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/index.module.scss";

function Index({ allPostsData }) {
	const [searchTerm, setSearchTerm] = useState("");
	const handleSearch = () => {
		setSearchTerm(event.target.value);
	};

	return (
		<>
			<Layout handleSearch={handleSearch} isHome>
				{allPostsData
					.filter((post) => {
						return (
							post.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
							post.keywords.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
						);
					})
					.map(({ id, title, date }) => {
						return (
							<div key={id} className={styles.each}>
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
