import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../../styles";
import { BsXSquare } from "react-icons/bs";

//Stores
import gameStore from "../../stores/gameStore";

const GameModal = ({ isOpen, closeModal, oldGame, shop }) => {
  const [game, setGame] = useState(
    oldGame ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setGame({ ...game, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // gameStore.createGame(game);
    gameStore[oldGame ? "updateGame" : "createGame"](game, shop);
    closeModal();
  };

  const handleImage = (event) =>
    setGame({ ...game, image: event.target.files[0] });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Game Modal"
    >
      <h3>New Game</h3>
      <BsXSquare
        className="float-right"
        size="2em"
        onClick={closeModal}
      ></BsXSquare>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              type="text"
              className="form-control"
              name="name"
              value={game.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              type="number"
              min="1"
              name="price"
              value={game.price}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            type="text"
            name="description"
            value={game.description}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            type="file"
            name="image"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled>{oldGame ? "Update" : "Create"}</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default GameModal;
