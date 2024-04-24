// eslint-disable-next-line react/prop-types
const MainLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex w-full h-full max-w-screen-2xl">{children}</div>
    </div>
  );
};

export default MainLayout;
