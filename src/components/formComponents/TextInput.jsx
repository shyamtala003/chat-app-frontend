const TextInput = ({
  name,
  label,
  placeholder,
  register,
  errors,
  style = "",
}) => {
  return (
    <>
      <label className="flex items-center gap-2 mt-1 input input-bordered">
        {label ? (
          label
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
        )}
        <input
          type="text"
          className={`grow` + style}
          placeholder={placeholder}
          {...register(name)}
        />
      </label>

      <div
        className={`mt-2 collapse ${
          errors[name]?.message ? "collapse-open" : "collapse-close"
        }`}
      >
        <p className="text-red-300 collapse-content p-0 pl-3 pb-2">
          {errors[name]?.message}
        </p>
      </div>
    </>
  );
};

export default TextInput;
