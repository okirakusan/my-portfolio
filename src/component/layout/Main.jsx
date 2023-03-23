export const Main = (props) => {
  return (
    <main className=" bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40 min-h-screen pt-28 lg:pt-36 ">
      {props.children}
    </main>
  );
};
