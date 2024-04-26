const RadioGroupInput = ({ name, register, errors, valueArray = [] }) => {
  return (
    <div className="mt-2">
      <div className="flex gap-4">
        {valueArray.map((value, index) => (
          <label
            key={value + index}
            className="inline-flex justify-start gap-3 cursor-pointer label"
          >
            <input
              type="radio"
              name={name}
              value={value}
              className="border-2 border-white radio checked:bg-green-300"
              {...register(name)}
            />
            <span className="text-white capitalize label-text">{value}</span>
          </label>
        ))}
      </div>
      <div
        className={`mt-2 collapse ${
          errors[name]?.message ? "collapse-open" : "collapse-close"
        }`}
      >
        <p className="text-red-300 collapse-content p-0 pl-3 pb-2">
          {errors[name]?.message}
        </p>
      </div>
    </div>
  );
};

export default RadioGroupInput;
