"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsMobile } from "../Slice/vitalInfo";

const ResolutionListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      dispatch(setIsMobile(isMobile));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return null;
};

export default ResolutionListener;
