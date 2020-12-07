import { useState } from "react";
import Modal from "react-modal";

//Stores
import authStore from "../../stores/authStore";
//Styles
import { CreateButtonStyled } from "../../styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Signup = ({ closeModal, isOpen }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group row">
          <div className="col-6">
            <label>First Name</label>
            <input
              name="firstName"
              value={user.firstName}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <input
              name="lastName"
              value={user.lastName}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Sign up
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default Signup;
