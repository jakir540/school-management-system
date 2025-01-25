import React from "react";

const UserCard = ({ type, icon }: { type: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="bg-gray-100 p-4 rounded-full">
        <i className={`fas ${icon} text-2xl text-gray-700`}></i>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{type}</h3>
    </div>
  );
};

export default UserCard;
