import { useForm } from "react-hook-form";
import MainLayout from "../../components/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username must not contain special characters and spaces"
    )
    .min(6, "Username must be at least 6 characters")
    .max(24, "Username must not exceed 24 characters"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must not exceed 30 characters"),
});

const SignIn = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <MainLayout>
      <div className="flex flex-col self-center w-full h-full px-4 py-8 mx-auto bg-gray-600 rounded-r-none md:h-auto md:max-w-96 backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-10 md:rounded-2xl">
        <h2 className="text-2xl font-semibold text-center text-white">
          Login to <span className="text-green-300">ChatApp</span>
        </h2>

        <form
          className="flex flex-col gap-4 mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="flex items-center gap-2 input input-bordered">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              // {...control("username")}
            />
          </label>
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
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
              placeholder="Password"
              // {...control("password")}
            />
          </label>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button className="mt-2 text-green-300 btn">Login</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignIn;
