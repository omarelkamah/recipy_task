import { Col, Row } from "antd";
import style from "./footer.module.scss";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className="mainFooter container">
          <Row gutter={20}>
            <Col xs={24} md={24} lg={15}>
              <div className="logo">
                <Link to="/">
                  <img
                    src={"/images/logo.png"}
                    width={158}
                    height={54}
                    alt=""
                  />
                </Link>
                <p>
                  ﻿ "On the other hand, we denounce with righteous indignation
                  and dislike men who are so beguiled and demoralized by the
                  charms of pleasure of the moment
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={3}>
              <div className="footerUl">
                <h4 className="footerHeading">Tastebite</h4>
                <ul>
                  <li>
                    <Link to="/">About us</Link>
                  </li>

                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/">Feedback</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={12} lg={3}>
              <div className="footerUl">
                <h4 className="footerHeading">Legal</h4>
                <ul>
                  <li>
                    <Link to="/request-qutation">Terms</Link>
                  </li>
                  <li>
                    <Link to="/">Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Cookies</Link>
                  </li>
                  <li>
                    <Link to="/">Copyright</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={24} lg={3}>
              <div className="footerUl">
                <h4 className="footerHeading">Follow</h4>
                <ul>
                  <li>
                    <Link to="/">Facebook</Link>
                  </li>

                  <li>
                    <Link to="/">Twitter</Link>
                  </li>
                  <li>
                    <Link to="/">Instagram</Link>
                  </li>
                  <li>
                    <Link to="/">Youtube</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottomFooter">
          <div className="bottomFooterWrapper">
            <p>© 2020 Tastebite - All rights reserved</p>
            <ul className="socialIcons">
              <li>
                <Link to="/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FiYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
