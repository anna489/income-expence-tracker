import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center  mt-[15%]">
      <div className="rounded border-4 h-[60%] w-[40%] flex ">
        <div className="p-10 items-center">
          <h1 className="font-bold text-3xl ">Edit Profile</h1>
          <img
            src="https://i.pinimg.com/474x/6b/07/e7/6b07e75b4407ff9f5ab9c94ed81f7f69.jpg "
            className=" h-[250px] w-[250px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 mt-10 "
          />
        </div>
        <div className="m-10   ">
          <div className="mt-5">
            <input
              type="text"
              className="border p-4 rounded "
              placeholder="Name..."
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border p-4 rounded "
              placeholder="Last Name..."
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border p-4 rounded "
              placeholder="Email...    "
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="border p-4 rounded "
              placeholder="Phone...     "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
