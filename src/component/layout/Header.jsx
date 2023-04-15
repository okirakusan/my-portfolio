import Link from "next/link";
import {
  BsChevronDown,
  BsChevronUp,
  BsFillMoonStarsFill,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NAV_ITEMS = [
  { href: "/catApi", label: "猫画像API" },
  { href: "/chatBotGpt", label: "chatBotGpt" },
  { href: "/priceRangeMenuSelector", label: "ランダム注文" },
];

export const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const maxScrollPos =
        document.documentElement.scrollHeight - window.innerHeight;
      if (window.innerWidth < 640) {
        setIsHeaderVisible(
          prevScrollPos > currentScrollPos ||
            currentScrollPos >= maxScrollPos ||
            currentScrollPos <= 0
        );
      } else {
        setIsHeaderVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={
        isHeaderVisible
          ? "dark:text-white op py-2 px-2 md:py-6 md:px-14 lg:px-40 bg-white dark:bg-gray-900  sm:h-28 lg:h-36 fixed bottom-0 sm:top-0 w-screen z-50"
          : " "
      }
    >
      <nav className="md:mb-4 lg:mb-6 flex justify-between items-center ">
        <Link href="/">
          <h1 className="relative translate-y-1 hover:opacity-60 font-burtons text-sm sm:text-3xl cursor-pointer">
            HOME
          </h1>
        </Link>
        <ul className="flex items-center justify-end">
          <li>
            <BsFillMoonStarsFill
              onClick={props.handleClick}
              className="hover:opacity-60 cursor-pointer text-lg sm:text-3xl md:mr-4"
            />
          </li>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.href} className="hidden sm:block">
                <Link href={item.href}>
                  <a className="hover:underline hover:opacity-80 text-xs sm:text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 sm:px-4 sm:py-2 border-none rounded-md ml-1 sm:ml-4 lg:ml-8">
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={handleMenuClick}
              className="sm:hidden text-xs sm:text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 sm:px-4 sm:py-2 border-none rounded-md ml-1 sm:ml-8"
            >
              Menu{" "}
              {isMenuOpen ? (
                <BsChevronUp className="inline-block ml-1" />
              ) : (
                <BsChevronDown className="inline-block ml-1" />
              )}
            </button>
            <div
              className={
                isMenuOpen
                  ? "sm:hidden h-3/5 w-4/12 fixed left-0 top-0 px-3 py-8 bg-teal-500 opacity-75   transition: 1.0s text-left z-20"
                  : "hidden"
              }
            >
              <ul className="min-h-full flex flex-col  items-center justify-end ">
                <li>MENU</li>
                {isMenuOpen &&
                  NAV_ITEMS.map((item) => {
                    return (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <a className="text-xl cursor-pointer  text-white px-2 py-1 sm:px-4 sm:py-2 border-none rounded-md ml-1 sm:ml-8">
                            {item.label}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                <li onClick={handleMenuClick}>閉じる</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
