import React from "react";
import { getIcons } from "../../utils";

const AddCategory = ({ category, changeTransactionData }) => {
  return (
    <div className="mt-2">
      <p>Category</p>
      <details className="dropdown w-full">
        <summary className="m-1 btn flex p-1  ">
          <p className="text-[#94A3B8]">Find or choose category</p>
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52">
          <div className="border rounded-full ">
            {category.map((el) => {
              <button
                className="w-full font-normal mb-4 flex items-center gap-3 hover:opacity-50"
                onClick={(el) => {
                  el.preventDefault();
                  console.log(el.id);
                  changeTransactionData("categoryId", el.id);
                }}
              >
                {getIcons(el.avatarimg, el.color)}
                {el.name}
              </button>;
            })}
          </div>
        </ul>
      </details>
    </div>
  );
};

export default AddCategory;
