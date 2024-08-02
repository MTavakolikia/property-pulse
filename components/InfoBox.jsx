import Link from "next/link";
import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  textColor = " text-gray-800",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor}  p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children} </p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
