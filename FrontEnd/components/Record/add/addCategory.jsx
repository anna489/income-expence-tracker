import React, { useState } from "react";
import CategoryIcon from "./categoryIcon";

const AddCategory = ({ category, changeTransactionData }) => {
  const [cat, setCat] = useState(null);
  return (
    <div className="mt-2">
      <p>Category</p>
      <details className="dropdown w-full">
        <summary className="mt-1 btn flex justify-start  ">
          {cat && <CategoryIcon name={cat?.name} color={category?.color} />}
          {!cat && <p className="text-[#81858a]">Find or choose category</p>}
        </summary>
        <ul className="p-3 shadow menu dropdown-content z-[1] bg-[#F3F4F6] rounded-box w-52">
          <div>
            {category.map((el) => (
              <button
                className="w-full  gap-3 hover:opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("CategoryId", el.id);
                  changeTransactionData("category_id", el.id);
                  setCat(el);
                }}
              >
                <CategoryIcon name={el.name} color={el.color} />
              </button>
            ))}
          </div>
        </ul>
      </details>
    </div>
  );
};

export default AddCategory;
