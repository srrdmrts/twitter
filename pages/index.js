import React from "react"
import Layout from "../components/layout/"
import Tweet from "../components/tweet"

function HomePage() {
	return <Layout>
		<Tweet
			name={"Sırrı Demirtaş"}
			slug={"sirridemirtas"}
			datetime={new Date("2020-11-09")}
		>{`Hello World!
			Every    Body`}
		</Tweet>

		<Tweet
			name={"Sırrı Demirtaş"}
			slug={"sirridemirtas"}
			datetime={new Date("2020-11-09")}
		>{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eos beatae ipsam molestias.`}
		</Tweet>
	</Layout>
}

export default HomePage