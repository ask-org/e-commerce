import { NavBarItem } from "@/types/Layout"
import Link from "next/link"

const navItems: NavBarItem[] = [
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
		<div className="flex justify-around pt-5">
			<div>
				Logo
			</div>
			<div className="flex gap-5">
				{(navItems.map((val, i) => {
					return (
						<div key={i}>
							<Link href={val.path as string}>
								{val.navName}
							</Link>
						</div>
					)
				}))}
			</div>
			<div>

			</div>

		</div>
	)
}

export default Navbar
