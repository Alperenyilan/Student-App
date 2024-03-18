import React from "react";

const Form = ({ onSubmit, title, className, children }) => {
  return (
    <div className="absolute flex flex-col items-center w-full max-w-md p-6 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 bg-slate-900 rounded-xl">
      <h1 className="mb-8 text-4xl text-slate-100">
        {title.split(" ")[0]}{" "}
        <span className="text-orange-600">{title.split(" ")[1]}</span>
      </h1>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </div>
  );
};

export default Form;
