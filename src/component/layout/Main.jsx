export const Main = (props) => {
  return (
    <main className=" bg-white px-10 min-h-screen dark:bg-gray-900 md:px-20 lg:px-40">
      {props.children}
    </main>
  );
};
