import { useForm } from "react-hook-form";
import MainLayout from "../../components/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../../components/formComponents/TextInput";
import PasswordInput from "../../components/formComponents/PasswordInput";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("username is required")
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
    register,
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

        <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name={"username"}
            placeholder={"username"}
            register={register}
            errors={errors}
          />

          <PasswordInput
            name={"password"}
            placeholder={"password"}
            register={register}
            errors={errors}
          />
          <button className="mt-4 text-green-300 btn">Login</button>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignIn;
