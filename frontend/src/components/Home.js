import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => (
  <div>
    <Navbar />
    <div className="container">
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            required
          />
        </div>
        <button className="btn btn-danger" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
);

export default Home;
