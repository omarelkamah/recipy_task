import style from "./style/header.module.scss";
import Menue from "./sections/menu";
import { AiFillHeart } from "react-icons/ai";
import { Dropdown } from "antd";
import { BiChevronDown } from "react-icons/bi";
import { SearchModal } from "./sections/searchModal";
import { Link } from "react-router-dom";

function HeaderApp() {
  const items = [
    {
      label: <a href="http">Link One</a>,
      key: "0",
    },
    {
      label: <a href="http">Link Two</a>,
      key: "1",
    },
  ];
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
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <>
                  <div className="flex">
                    HomePage
                    <BiChevronDown />
                  </div>
                </>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <div className="flex">
                  Recipe Page
                  <BiChevronDown />
                </div>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <div className="flex">
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
