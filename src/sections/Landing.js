import "../App.css";
import MyButton from "../components/Button";
import profileImage from "../assets/profile.png";

export default function Landing() {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <p className="bg-grad text-white text-uppercase rounded-pill p-2 fs-6 d-inline fw-semibold">
          design · development · marketing
        </p>
        <p className="mt-4 text-muted fs-3 fw-light text-capitalize">
          I can help your business to
        </p>
        <h1 className="grad-text fw-bolder mb-5 d-inline">
          Get online and grow fast
        </h1>

        <div className="gap-3 d-flex flex-column justify-content-center flex-md-row mb-3 mt-5">
          <MyButton
            color={"primary"}
            href={"../assets/Fady_Malak Zaki_Resume.pdf"}
            iSdownload={true}
            content={"resume"}
          />

          <MyButton color={"outline-dark"} href={"#a"} content={"projects"} />
        </div>
      </div>
      <div className="row">
        <div className="containerImg col-11 col-md-4 d-flex justify-content-center bg-grad ms-auto me-auto rounded-5 mb-5 mt-5">
          <img className="profileImg" src={profileImage} alt="profile" />
        </div>
      </div>
    </div>
  );
}
