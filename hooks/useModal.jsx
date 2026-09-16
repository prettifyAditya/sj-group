"use client";
import { setIsModal, setModalData } from "@/store/slice/modalSlice";
import { useDispatch, useSelector } from "react-redux";

export const useModal = () => {
  const dispatch = useDispatch();

  const openModal = (type, data = null) => {
    dispatch(setIsModal(type));
    dispatch(setModalData(data));
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    dispatch(setIsModal(null));
    dispatch(setModalData(null));
    document.body.classList.remove("overflow-hidden");
  };

  return { openModal, closeModal };
};
