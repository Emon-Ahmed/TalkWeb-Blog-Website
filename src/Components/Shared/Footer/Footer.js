import React from "react";
import {
  FcCallback,
  FcDepartment,
  FcGlobe,
  FcHome,
  FcReading,
  FcShop,
  FcBusinessContact,
  FcAddressBook,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="nav-bg">
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="w-25 col-md-3 col-sm-6">
              <div className="single-footer">
                <h3>About US</h3>
                <p>
                  Latest technologies and updates are our primary focus along
                  with critical issues and basics of Web Development.
                </p>
                <p className="fw-bold"> TalkWeb Community © 2022 </p>
              </div>
            </div>
            <div className="w-25 col-md-3 col-sm-6">
              <div className="single-footer">
                <h3>Support</h3>
                <ul className="link-area">
                  <li>
                    <span>
                      <FcHome className="icon-size me-1" />{" "}
                      <Link to="/">Home</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <FcReading className="icon-size me-1" />{" "}
                      <Link to="/posts">Blogs</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <FcShop className="icon-size me-1" />{" "}
                      <Link to="/products">Shop</Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      <FcBusinessContact className="icon-size me-1" />{" "}
                      <Link to="contact">Contact</Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-25 col-md-3 col-sm-6">
              <div className="single-footer">
                <h3>Contact</h3>
                <ul className="link-area">
                  <li>
                    <span>
                      <FcCallback className="icon-size me-1" /> +880 1921412932
                    </span>
                  </li>
                  <li>
                    <span>
                      <FcAddressBook className="icon-size me-1" />{" "}
                      talkweb@gmail.com
                    </span>
                  </li>

                  <li>
                    <span>
                      <FcDepartment className="icon-size me-1" /> Dhaka,
                      Bangaldesh
                    </span>
                  </li>
                  <li>
                    <span>
                      <FcGlobe className="icon-size me-1" />{" "}
                      talkweb-blog.web.app
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-25 col-md-3 col-sm-6">
              <div className="single-footer">
                <h3>Resent Post</h3>
                <ul className="link-area widget">
                  <li className="mb-1">
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--uYTFlCT9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5o37ui84g6i4im59lm3f.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--z4pwQEq8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h08gmycwjo4u9dka1x8i.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--FIIxduvZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xxsf4npqwyxjvcrlp9n4.png"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#">
                      <img
                        src="https://res.cloudinary.com/practicaldev/image/fetch/s--cQG5_V1T--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/usfyyu1szcgnd2faxfg6.png"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-area text-center">
                <p>&copy; 2022, All Right Reserved TalkWeb</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
