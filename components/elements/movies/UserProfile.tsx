import React from "react";
import defaultUserImage from "@/assets/default.jpeg";
import Image from "next/image";

const UserProfile = () => {
  const img = "";
  return (
    <div>
      <div>
        <Image
          alt=""
          src={img ? img : defaultUserImage}
          className="w-40 h-40 rounded cursor-pointer hover:opacity-80 transition"
        />
        {img && <>Test</>}
      </div>

      <div>UserProfile</div>
    </div>
  );
};

export default UserProfile;
