import React from "react";

function WhiteButton(props) {
  const { name } = props;
  return (
    <div className="mt-3 sm:mt-0 sm:ml-3">
      <button
        type="button"
        href="#"
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
      >
        {name}
      </button>
    </div>
  );
}

export default WhiteButton;
