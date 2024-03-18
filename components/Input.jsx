const Input = ({ label, className, Tag = "input", ...props }) => {
  return (
    <div className={className}>
      {label && <label className={`text-md`}>{label}</label>}
      <Tag
        {...props}
        className="w-full px-3 py-2 mt-3 text-sm bg-transparent border-2 border-gray-500 outline-none appearance-none focus:border-orange-700 rounded-xl"
      ></Tag>
    </div>
  );
};

export default Input;
