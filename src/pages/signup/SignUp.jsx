import MainLayout from "../../components/layouts/MainLayout";

const SignUp = () => {
  return (
    <MainLayout>
      <div className="flex flex-col self-center w-full h-full px-4 py-8 mx-auto bg-gray-600 rounded-r-none md:h-auto md:max-w-96 backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-10 md:rounded-2xl">
        <h2 className="text-2xl font-semibold text-center text-white">
          Sign Up to <span className="text-green-300">ChatApp</span>
        </h2>

        <form className="flex flex-col gap-4 mt-6">
          <label className="flex items-center gap-2 input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Name" />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            @
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" placeholder="Password" />
          </label>
          <label className="flex items-center gap-2 input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="password"
              className="grow"
              placeholder="Confrim password"
            />
          </label>
          <div className="flex gap-4">
            <label className="inline-flex justify-start gap-3 cursor-pointer label">
              <input
                type="radio"
                name="radio-10"
                className="border-2 border-white border-opacity-50 radio checked:bg-green-300"
              />
              <span className="label-text">Male</span>
            </label>

            <label className="inline-flex justify-start gap-3 cursor-pointer label">
              <input
                type="radio"
                name="radio-10"
                className="border-2 border-white border-opacity-50 radio checked:bg-green-300"
              />
              <span className="label-text">Female</span>
            </label>
          </div>

          <button className="mt-2 text-green-300 btn">Sign Up</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignUp;
