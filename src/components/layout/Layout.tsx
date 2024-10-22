import Navbar from "./Navbar"

type LayoutProps = {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<Navbar />
			{children}

		</div>
	)
}
export default Layout
