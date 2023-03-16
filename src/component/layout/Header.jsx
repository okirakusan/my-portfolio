import { BsFillMoonStarsFill } from "react-icons/bs";

export const Header = (props) => {
  return (
    <header className="py-4 px-8 md:py-6 md:px-20 lg:px-40 bg-white dark:bg-gray-900  position: fixed w-screen z-10">
      <nav className="md:mb-4 lg:mb-6 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">developedbyed</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={props.onClick}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
