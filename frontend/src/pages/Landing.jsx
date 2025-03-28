import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router";

function Landing() {
  const router = useNavigate();
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <img src="./hogo.png" alt="" />
        </div>
        <div className="navList">
          <p
            onClick={() => {
              router("/af41sd32");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/home");
            }}
          >
            Home
          </p>
          <div
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved{" "}
            <br />
            Ones
          </h1>
          <p>Connect, Chat, Chill on hangoutON</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div className="mobileDiv">
          <img className="mobilePic" src="/mobile2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
