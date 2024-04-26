import { useForm } from "react-hook-form";
import PasswordInput from "../../components/formComponents/PasswordInput";
import MainLayout from "../../components/layouts/MainLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextInput from "../../components/formComponents/TextInput";
import RadioGroupInput from "../../components/formComponents/RadioGroupInput";
import ButtonWIthLoading from "../../components/global/ButtonWIthLoading";
import useApiCall from "../../hooks/useApiCall";
import { toast } from "react-toastify";
import { useAuth } from "../../stores/useAuth";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 characters"),
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
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(30, "Password must not exceed 30 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  gender: yup.string().required("Gender is required"),
});

const SignUp = () => {
  const { loading, apiCall } = useApiCall();
  const { setUseDetails } = useAuth();

  // use form hook for form management
  const {
    handleSubmit,
    register,
    formState: { errors, defaultValues },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      gender: null,
    },
  });

  // signup handler
  const onSubmit = async (data) => {
    try {
      let response = await apiCall("post", "/auth/v1/signup", { body: data });
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
          Sign Up to <span className="text-green-300">ChatApp</span>
        </h2>

        <form className="flex flex-col mt-6" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name={"name"}
            placeholder={"Name"}
            register={register}
            errors={errors}
            defaultValue={defaultValues?.name}
          />
          <TextInput
            name={"username"}
            label="@"
            placeholder={"Usenrname"}
            register={register}
            errors={errors}
            defaultValue={defaultValues?.username}
          />
          <PasswordInput
            name={"password"}
            placeholder={"Password"}
            register={register}
            errors={errors}
          />
          <PasswordInput
            name={"confirmPassword"}
            placeholder={"Confirm password"}
            register={register}
            errors={errors}
          />
          <RadioGroupInput
            name={"gender"}
            register={register}
            valueArray={["male", "female"]}
            errors={errors}
          />
          <ButtonWIthLoading loading={loading}>Sign Up</ButtonWIthLoading>
        </form>
      </div>
    </MainLayout>
  );
};

export default SignUp;
