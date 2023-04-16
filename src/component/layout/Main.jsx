export const Main = (props) => {
  return (
    <main className=" bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-30 min-h-screen sm:pt-28 lg:pt-36 pb-20 sm:pb-36 overflow-auto">
      {props.children}
    </main>
  );
};
