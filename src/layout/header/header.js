import style from "./style/header.module.scss";
import Menue from "./sections/menu";
import { AiFillHeart } from "react-icons/ai";
import { Dropdown, Menu } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { SearchModal } from "./sections/searchModal";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
  </Menu>
);

function HeaderApp() {
  return (
    <header className={style.headerPages}>
      <div className={`container`}>
        <div className="header_center flexCenter">
          <div className="logo">
            <Link to="/">
              <img src="/images/logo.png" width={128} height={54} alt="" />
            </Link>
          </div>
          <Menue />

          <ul className="links">
            <li>
              <Dropdown overlay={menu}>
                <div className="flex">
                  HomePage
                  <BiChevronDown />
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menu}>
                <div className="flex">
                  Recipe Page
                  <BiChevronDown />
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown overlay={menu}>
                <div className="flex gap-1">
                  Pages
                  <BiChevronDown />
                </div>
              </Dropdown>
            </li>
            <li>
              <Link to="/">Buy</Link>
            </li>
          </ul>
          <ul className="flexCenter user">
            <li className="search">
              <SearchModal />
            </li>

            <li className="search">
              <Link to="/favourite" className="flex">
                <AiFillHeart />
              </Link>
            </li>

            <li>
              <Link to="/">
                <img src="/photos/user.png" width={30} height={30} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderApp;
