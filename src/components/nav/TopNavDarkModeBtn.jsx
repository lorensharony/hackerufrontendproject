import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsBrightnessHigh, BsBrightnessHighFill } from "react-icons/bs";
import { toggleDark } from "../../features/theme/theme-slice";

const TopNavDarkModeBtn = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((s) => s.theme.isDark);
  return (
    <button
      className="btn border-0"
      onClick={() => {
        dispatch(toggleDark());
      }}
    >
      {isDark ? (
        <BsBrightnessHighFill size="2rem" color="black" />
      ) : (
        <BsBrightnessHigh size="2rem" color="white" />
      )}
    </button>
  );
};

export default TopNavDarkModeBtn;
