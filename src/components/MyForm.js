import "../sass/myform.scss";
const MyForm = () => {
  return (
    <>
      <div className="detail">
        <label>Your Email Address</label>
        <input type="email" placeholder="" />
      </div>
      <div className="detail">
        <label>Your password</label>
        <input type="password" />
      </div>
      <div className="detail">
        <label>Confirm your password</label>
        <input type="password" />
      </div>
      <div className="detail">
        <label>Your Full Name</label>
        <input type="password" />
      </div>
      <div className="detail">
        <label>Your Phone Number</label>
        <input className="detail__phone" type="number" />
      </div>
      <div className="tnc">
        <input type="checkbox" />
        <label> I read and agree terms and conditions</label>
      </div>
      <input className="accbtn" type="submit" value="Create account" />
    </>
  );
};
export default MyForm;
