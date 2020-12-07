import React from "react";
import { useState } from "react";

//Components
import Signup from "../modals/Signup";

//Styles
import { AuthButtonStyled } from "../../styles";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <Signup isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
