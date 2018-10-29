import React from "react";
import { Link } from "react-router-dom";
import SignedInLines from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  // console.log("auth", auth);
  const links = auth.uid ? (
    <SignedInLines profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo left">
          ToDo List
        </Link>
        {links}
      </div>
    </nav>
  );
};

const masStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(masStateToProps)(Navbar);
