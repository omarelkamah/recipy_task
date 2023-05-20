import { Drawer } from "antd";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Menue = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
    console.log(visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="menuPage">
        <div className="menuPageBtn" onClick={showDrawer}>
          <HiMenuAlt1 />
        </div>
        <Drawer
          placement={"right"}
          closable={false}
          onClose={onClose}
          visible={visible}
          key={"right"}
          className={"menuPageDrawer"}
        >
          <div className="menuPageHeader" onClick={onClose}>
            <HiMenuAlt1 />
          </div>

          <div className="content">
            <ul>
              <li>
                <Link to="/">HomePage</Link>
              </li>
              <li>
                <Link to="/">Recipe Page</Link>
              </li>
              <li>
                <Link to="/">Pages</Link>
              </li>
              <li>
                <Link to="/">Buy</Link>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Menue;
