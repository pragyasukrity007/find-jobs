import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar px-0">
      <div className="navbar-start">
        <NavLink
          to={"https://www.ltimindtree.com/"}
          target="_blank"
          className="font-bold text-left p-0 bg-transparent text-black border-none normal-case text-4xl"
        >
          <span className="text-red-700/100">E</span>
          <span className="text-indigo-800/100">Tech</span>
          <p className="text-xs text-indigo-800/100 !important">LTIMINDTREE</p>
        </NavLink>
      </div>
      <div className="navbar-end">
        <Link
          to={"/login"}
          className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l"
        >
          Jobs |
        </Link>
        <Link
          to={"/register"}
          className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l"
        >
          &nbsp; Companies
        </Link>
      </div>

      <div className="navbar-end">
        <Link
          to={"/login"}
          className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l"
        >
          Log In |
        </Link>
        <Link
          to={"/register"}
          className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l"
        >
          &nbsp; Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
