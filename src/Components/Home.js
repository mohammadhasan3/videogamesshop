import logo from "../logo3.jpg";
import { TitleHeader, LogoImage } from "../styles";

const Home = () => {
  return (
    <div>
      <TitleHeader>
        Your number one destination for all things gaming
      </TitleHeader>

      <LogoImage src={logo} alt="Company Logo" />
    </div>
  );
};

export default Home;
