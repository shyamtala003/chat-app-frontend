const PasswordInput = ({ name, placeholder, register, errors, style = "" }) => {
  return (
    <>
      <label className="flex items-center gap-2 mt-1 input input-bordered">
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

export default PasswordInput;
