"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

type IProps = {
  checked: boolean;
  onChange: () => void;
};

const CustomCheckbox = ({ checked, onChange }: IProps) => {
  return (
    <div
      className={` flex justify-center items-center w-5 h-5 border border-borderColor rounded-sm cursor-pointer ${checked ? "bg-borderColor" : "bg-primary"}`}
      onClick={onChange}
    >
      {checked && <FaCheck color="white" size={12} />}
    </div>
  );
};

export default CustomCheckbox;
