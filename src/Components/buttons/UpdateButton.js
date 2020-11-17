import { useState } from "react";

// Styling
import { UpdateButtonStyled } from "../../styles";

//Modals
import GameModal from "../modals/GameModal";
const UpdateButton = ({ game }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <GameModal isOpen={isOpen} closeModal={closeModal} oldGame={game} />
    </>
  );
};

export default UpdateButton;
