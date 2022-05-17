import BgImg from "../images/bgimg.png";
import MyForm from "./MyForm";
const Display = () => {
  return (
    <>
      <div className="form">
        <div className="form__bgimg">
          <img srcSet={BgImg} alt="bg form logo" />
        </div>
        <div className="form__input">
          <h2 className="form__input--create">Create an Account</h2>
          <MyForm />
        </div>
      </div>
    </>
  );
};
export default Display;
