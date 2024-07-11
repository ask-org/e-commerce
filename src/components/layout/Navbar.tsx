import { NavBarItem } from "@/types/Layout";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";

const navItems: NavBarItem[] = [
  {
    navName: "Home",
    path: "/",
  },
  {
    navName: "Collections",
    path: "/about",
  },
  {
    navName: "New Release",
    path: "/contact",
  },
  {
    navName: "Popular",
    path: "/services",
  },
];

const Navbar = () => {
  return (
    <nav className=" flex  px-10  justify-between items-center pt-5">
      {/* logo section  */}
      <section>
        <h1 className="text-2xl font-bold">Logo</h1>
      </section>

      {/* nav-items  */}
      <section className="flex items-center    gap-14 font-medium text-md text-[#222222]">
        {navItems.map((navitem, index) => {
          return (
            <ul key={index}>
              <li>
                <Link href={navitem.path as string}>{navitem.navName}</Link>
              </li>
            </ul>
          );
        })}
      </section>

      {/* login and cart section  */}

      <section className="flex gap-4 text-lg">
        <button>
          <CiSearch />
        </button>
        <button>
          <RiShoppingCartLine />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
