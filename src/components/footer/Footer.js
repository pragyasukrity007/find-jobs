import React from "react";
import { Link, NavLink } from "react-router-dom";
import fb from "./assets/fb.png";
import tw from "./assets/tw.png";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png"
import youtube from "./assets/youtube.png"
import mail from "./assets/mail.png"

const Footer = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <hr className="border-black my-10 border-dotted" />
        <footer className="footer lg:d-flex text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
          <div className="lg:w-1/2 flex flex-col items-start">
            <NavLink
              to={"https://www.ltimindtree.com/"}
              target= "_blank"
              className="active btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-black border-none normal-case text-xl"
            >
              <img
                alt=""
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/04/full/1688478566-0773.jpg"
                style={{ width: "150px" }}
              />
            </NavLink>
          </div>
          <div className="lg:w-4/5 flex flex-col items-start">
            <div className="flex mt-4">
              <a href="/" className="mr-4">
                <img alt="" src={fb} style={{ width: "35px" }} />
              </a>
              <a href="/" className="mr-4">
                <img alt="" src={tw} style={{ width: "35px" }} />
              </a>
              <a href="/" className="mr-4">
                <img alt="" src={insta} style={{ width: "35px" }} />
              </a>
              <a href="/" className="mr-4">
                <img alt="" src={linkedin} style={{ width: "35px" }} />
              </a>
              <a href="/" className="mr-4">
                <img alt="" src={youtube} style={{ width: "35px" }} />
              </a>
              <a href="/" className="mr-4">
                <img alt="" src={mail} style={{ width: "35px" }} />
              </a>
            </div>
          </div>
          <div className="lg:w-2/6">
            <div className="inline-flex">
              <Link
                to={"/login"}
                className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l inline-flex mt--28"
              >
                Blogs |
              </Link>
              <Link
                to={"/register"}
                className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l inline-flex "
              >
                &nbsp; Career |
              </Link>
              <Link
                to={"/login"}
                className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l inline-flex "
              >
               &nbsp; Company |
              </Link>
              <Link
                to={"/login"}
                className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l inline-flex "
              >
                 &nbsp; Investor |
              </Link>
              <Link
                to={"/login"}
                className="btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-indigo-800/100 border-none normal-case text-l inline-flex "
              >
                &nbsp; Newsletter 
              </Link>
            </div>
          </div>
        </footer>

        <hr className="border-black my-10 border-t-4 mt-15" />
      </div>
    </div>
  );
};

export default Footer;
