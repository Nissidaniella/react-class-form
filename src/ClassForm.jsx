import React from "react";

class ClassForm extends React.Component {
  render() {
    return (
      <div className="form-ui">
        <form className="form">
          <div className="form-body">
            <div className="welcome-lines">
              <div className="welcome-line-1">ZELT</div>
              <div className="welcome-line-2">
                Enter your e-mail and password below to log in to your account
                and use the benefits of our website.
              </div>
            </div>
            <div className="input-area">
              <div className="form-inp">
                <input placeholder="Email Address" type="text" />
              </div>
              <div className="form-inp">
                <input placeholder="Password" type="password" />
              </div>
            </div>
            <div className="submit-button-cvr">
              <button className="submit-button" type="submit">
                Log In
              </button>
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot password?</a>
            </div>
            <div className="bar"></div>
          </div>
        </form>
      </div>
    );
  }
}

export default ClassForm;
