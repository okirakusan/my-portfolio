import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NAV_ITEMS = [
  { href: "/catApi", label: "猫画像API" },
  { href: "/chatGpt-clone", label: "ChatGPTクローン" },
];

export const Header = (props) => {
  return (
    <header className="py-4 px-8 md:py-6 md:px-20 lg:px-40 bg-white dark:bg-gray-900  position: fixed w-screen z-10">
      <nav className="md:mb-4 lg:mb-6 flex justify-between items-center dark:text-white">
        <Link href="/">
          <h1 className="relative translate-y-1 font-burtons text-base sm:text-3xl cursor-pointer">
            developedbyed
          </h1>
        </Link>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={props.handleClick}
              className=" cursor-pointer text-xl sm:text-3xl"
            />
          </li>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <a className="text-xs sm:text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 sm:px-4 sm:py-2 border-none rounded-md ml-2 sm:ml-8">
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
