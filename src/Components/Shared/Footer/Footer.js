import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="single-footer">
              <h2>About US</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                voluptates? Quia autem error dolores natus fugiat nemo quo
                blanditiis veritatis doloremque unde!
              </p>
              <ul className="footer-social link-area list-inline d-flex">
                <li className="social">
                  <a href="#home">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="#home">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="#home">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="#home">
                    <i class="fab fa-pinterest"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="#home">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer">
              <h2>Support</h2>
              <ul className="link-area">
                <li>
                  <a href="#">
                    {" "}
                    <i class="fa fa-long-arrow-right"></i>Policies
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i class="fa fa-long-arrow-right"></i>Careers
                  </a>
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-long-arrow-right"></i>Stitemaps
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-long-arrow-right"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer">
              <h2>Contact</h2>
              <ul className="link-area">
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-phone"></i>+88123456789
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-envelope"></i>talkweb@gmail.com
                  </a>
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-map"></i>321, westhood lane, London
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i className="fa fa-globe"></i>http://stalkweb.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-footer">
              <h2>Resent Post</h2>
              <ul className="link-area widget">
                <li>
                  <a href="#">
                    <img
                      src="https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://images.unsplash.com/photo-1598209279122-8541213a0387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a3RtfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright-area text-center">
              <p>&copy; 2022, All Right Reserved TalkWeb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
