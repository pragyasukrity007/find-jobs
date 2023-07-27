import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-10">
      <Breadcrumb>
        <h2 className="text-3xl font-bold mb-2">Login Page</h2>
      </Breadcrumb>
      <div class="flex justify-center">
        <Link
          to={"/"}
          className="btn w-1/5 font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-black border-none normal-case text-l bg-cyan-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;
