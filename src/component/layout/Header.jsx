import Link from "next/link";
import {
  BsChevronDown,
  BsChevronUp,
  BsFillMoonStarsFill,
  BsArrowUp,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NAV_ITEMS = [
  { href: "/catApi", label: "猫画像API" },
  { href: "/chatBotGpt", label: "chatBotGpt" },
  { href: "/priceRangeMenuSelector", label: "ランダム注文" },
];

export const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const maxScrollPos =
        document.documentElement.scrollHeight - window.innerHeight;
      const isScrolledDown = currentScrollPos > 0;
      setIsVisible(isScrolledDown && currentScrollPos >= maxScrollPos);
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

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  return (
    <header
      className={
        isHeaderVisible
          ? "bg-opacity-0 sm:bg-opacity-80 dark:text-white op py-2 px-2 md:py-6 md:px-14 lg:px-40 bg-white dark:bg-gray-900  sm:h-28 lg:h-36 fixed bottom-0 sm:top-0 w-screen z-50"
          : " "
      }
    >
      <nav className="md:mb-4 lg:mb-6 flex justify-between items-center ">
        <Link href="/">
          <h1 className="hidden sm:block relative translate-y-1 hover:opacity-60 hover:underline font-burtons text-sm sm:text-3xl cursor-pointer">
            HOME
          </h1>
        </Link>
        <ul className="flex  items-center justify-between sm:justify-end w-full">
          <li className="ml-2 sm:ml-0 sm:mr-2 md:mr-6 lg:mr-10">
            <BsFillMoonStarsFill
              onClick={props.handleClick}
              className="hover:opacity-60 cursor-pointer text-2xl sm:text-3xl "
            />
          </li>
          <li className="hidden sm:block">
            <Link href="https://github.com/okirakusan/my-portfolio">
              <a target="_blank" className="w-10 h-10  inline-block">
                <Image
                  src="/github-icon.svg"
                  alt="github-icon"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                  className=" bg-white rounded-full cursor-pointer  hover:opacity-60"
                />
              </a>
            </Link>
          </li>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.href} className="hidden sm:block">
                <Link href={item.href}>
                  <a className="hover:underline hover:opacity-80 text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-4 lg:ml-8">
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={handleMenuClick}
              className="sm:hidden mr-2  text-lg  bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1  border-none rounded-md  "
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
              <ul className="min-h-full flex flex-col  items-center justify-around ">
                <li className="text-black font-bold">＜MENU＞</li>
                {isMenuOpen &&
                  NAV_ITEMS.map((item) => {
                    return (
                      <li key={item.href}>
                        <Link href={item.href}>
                          <a className="text-sm cursor-pointer  hover:opacity-80 border-none underline text-white px-2 py-1 sm:px-4 sm:py-2  rounded-md ml-1 sm:ml-8">
                            {item.label}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                <li>
                  <Link href="https://github.com/okirakusan/my-portfolio">
                    <a target="_blank" className="w-7 h-7  inline-block">
                      <Image
                        src="/github-icon.svg"
                        alt="github-icon"
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="contain"
                        className=" bg-white rounded-full cursor-pointer  hover:opacity-60"
                      />
                    </a>
                  </Link>
                </li>
                <li
                  onClick={handleMenuClick}
                  className="text-black underline font-bold"
                >
                  閉じる
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      <button
        className={
          isVisible
            ? "fixed bottom-14 left-56 sm:bottom-10 sm:left-60 text-white bg-teal-500 opacity-60 rounded-full p-2 shadow-md"
            : "hidden"
        }
        onClick={handleScrollToTop}
      >
        <BsArrowUp className="text-2xl sm:text-7xl" />
      </button>
    </header>
  );
};
