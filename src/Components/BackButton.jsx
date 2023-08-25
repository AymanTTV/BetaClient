import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button
      className="absolute top-4 left-4 text-[#00df9a] hover:text-[#00a47b] cursor-pointer"
      onClick={goBack}
    >
      <ArrowLeftIcon className="w-5 h-5 mr-1 inline-block" /> HeadBack
    </button>
  );
}
