import style from "./inputSearch.module.scss";
import { MdClear } from "react-icons/md";
import { Input } from "antd";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const InputSearch = ({ number, setIsModalOpen, showNumber }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef("");
  const navigate = useNavigate();

  const handelClear = (value) => {
    setInputValue("");
    inputRef.current.focus();
  };

  const handelChange = (e) => {
    setInputValue(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${inputValue}`);

    setIsModalOpen && setIsModalOpen(false);
  };

  return (
    <form onSubmit={handelSubmit}>
      <div className={style.inputsearch}>
        <Input
          type="text"
          ref={inputRef}
          placeholder="Type Your Search"
          value={inputValue}
          onChange={(e) => handelChange(e)}
        />
        <div className="recipiesNumber">
          {showNumber ? `(${number} Recipes)` : ""}
        </div>
        <div className="clear" onClick={handelClear}>
          <MdClear />
        </div>
      </div>
    </form>
  );
};
