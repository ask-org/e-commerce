import { NavbarType } from "@/types/Layout"
import Link from "next/link"

const navItems = [
	{
		navName: "Home",
		path: "/"
	},
	{
		navName: "About",
		path: "/about"
	},
	{
		navName: "Contact",
		path: "/contact"
	},
	{
		navName: "Services",
		path: "/services"
	},
]


const Navbar = () => {

	return (
		<div className="flex">
			{(navItems.map((val, i) => {
				return (
					<div key={i}>
						<Link href={val.path}>
							{val.navName}
						</Link>
					</div>
				)
			}))}
		</div>
	)
}

export default Navbar
