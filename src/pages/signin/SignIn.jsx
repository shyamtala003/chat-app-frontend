import { useForm } from "react-hook-form";
import MainLayout from "../../components/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../../components/formComponents/TextInput";
import PasswordInput from "../../components/formComponents/PasswordInput";
import ButtonWIthLoading from "../../components/global/ButtonWIthLoading";
import { useAuth } from "../../stores/useAuth";
import { toast } from "react-toastify";
import useApiCall from "../../hooks/useApiCall";

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
  const { setUseDetails } = useAuth();
  const { loading, apiCall } = useApiCall();

  // use form hook for form management
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // signin handler
  const onSubmit = async (data) => {
    try {
      let response = await apiCall("post", "/auth/v1/signin", { body: data });
      let { _id: userId, username, name, gender } = response.data;
      setUseDetails({ isLoggedIn: true, userId, username, gender, name });
      toast(response.message, { type: "success" });
      return reset();
    } catch (error) {
      return toast(error.response.data.message, { type: "warning" });
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col self-center w-full h-full px-4 py-8 mx-auto bg-gray-600 rounded-r-none md:h-auto md:max-w-lg backdrop-blur-lg bg-clip-padding backdrop-filter bg-opacity-10 md:rounded-2xl">
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
          <ButtonWIthLoading loading={loading}>Login</ButtonWIthLoading>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignIn;
