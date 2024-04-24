import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <>
      <div className="flex items-center justify-between gap-1 px-4 pt-5 pb-3">
        <label className="flex items-center w-full input input-bordered rounded-3xl">
          <input type="text" className="w-full grow" placeholder="Search..." />
        </label>
        <button className="text-2xl btn btn-circle">
          <CiSearch />
        </button>
      </div>
      <div className="w-full mt-2 border-b-2 border-white border-opacity-20"></div>
    </>
  );
};

export default Searchbar;
