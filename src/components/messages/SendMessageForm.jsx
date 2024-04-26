import { BsFillSendFill } from "react-icons/bs";
import { useConversation } from "../../stores/useConversation";
import useApiCall from "../../hooks/useApiCall";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  message: yup.string().required("username is required"),
});

const SendMessageForm = () => {
  const { conversation, setMessage } = useConversation();
  const { apiCall, loading } = useApiCall();

  // use form hook for form management
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  async function sendMessage(data) {
    let response = await apiCall(
      "post",
      `/api/v1/send-message/${conversation._id}`,
      {
        body: data,
      }
    );
    console.log(response.data.message);
    setMessage(response.data.message);

    // scroll down message container
    const messageContainer = document.getElementById("messageContainer");
    messageContainer.scrollTop = messageContainer.scrollHeight;
    return reset();
  }
  return (
    <div className="w-full sticky bottom-1">
      <form
        className="flex items-center w-full px-4 py-3"
        onSubmit={handleSubmit(sendMessage)}>
        <input
          type="text"
          name="message"
          placeholder="Type here"
          className="w-full border-t border-none rounded-r-none input input-bordered"
          {...register("message")}
        />
        <button
          className="border-none rounded-l-none btn btn-square disabled:bg-opacity-95  disabled:cursor-no-drop"
          disabled={loading || !formState.isValid}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsFillSendFill />
          )}
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
