import React from "react";
import Image from "next/image";

const UserCard = ({ type, icon }: { type: string; icon: string }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="bg-gray-100 p-4 rounded-full">
        <Image src={icon} alt={`${type} Icon`} width={40} height={40} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{type}</h3>
    </div>
  );
};

export default UserCard;
