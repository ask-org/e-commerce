import Layout from "@/src/components/layout/Layout"
import Banner from "@/src/components/pageComponents/Home/Banner"
import CardWrapper from "@/src/components/utils/Card/CardWrapper"

const Home = () => {
	return <div>
		<Layout>
			<div className="flex flex-col gap-4">
				<Banner />
				<CardWrapper />
			</div>
		</Layout>
	</div>
}
export default Home 
