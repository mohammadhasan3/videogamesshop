import React from "react";
import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import GameModal from "../modals/GameModal";

const AddButton = ({ shop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <GameModal isOpen={isOpen} closeModal={closeModal} shop={shop} />
    </>
  );
};

export default AddButton;
