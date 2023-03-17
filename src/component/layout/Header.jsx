import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = (props) => {
  return (
    <header className="py-4 px-8 md:py-6 md:px-20 lg:px-40 bg-white dark:bg-gray-900  position: fixed w-screen z-10">
      <nav className="md:mb-4 lg:mb-6 flex justify-between dark:text-white">
        <Link href="/">
          <h1 className="font-burtons text-xl cursor-pointer">developedbyed</h1>
        </Link>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={props.onClick}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <Link href="/catApi">
              <a className="cursor-pointer bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                猫画像API
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
