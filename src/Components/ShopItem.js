import { ShopImage, InfoText } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

//Components
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";

const ShopItem = ({ shop }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/shops/${shop.slug}`}
        className="d-flex justify-content-center"
      >
        <ShopImage src={shop.image} alt={shop.name} />
      </Link>

      <InfoText>{shop.name}</InfoText>

      {/* <UpdateButton shop={shop}>Update</UpdateButton>
      <DeleteButton shopId={shop.id} className="d-flex justify-content-center">
        Delete
      </DeleteButton> */}
    </div>
  );
};

export default observer(ShopItem);
