import React from "react";

class ClassForm extends React.Component {
  render() {
    return (
      <form className="form">
        <input placeholder="Enter your name" className="input" type="text" />
        <input placeholder="Enter your email" className="input" type="text" />
        <input placeholder="Password" className="input" type="password" />

        <button>Submit</button>
      </form>
    );
  }
}

export default ClassForm;
