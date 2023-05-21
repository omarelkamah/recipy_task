import { AiFillHeart } from "react-icons/ai";
import style from "./recipyCard.module.scss";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";

export const RecipyCardSection = ({ item, love }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["RFavouriteItems"]);
  const [loved, setLoved] = useState(false);

  const mainObj = {
    image: item.image,
    id: item.id,
    title: item.title,
  };

  const handelAddToFavourite = () => {
    const checkCookie = cookies.RFavouriteItems || [];
    setLoved(!loved);

    if (loved || love) {
      setCookie("RFavouriteItems", [
        ...checkCookie?.filter((e) => e.id !== mainObj.id),
      ]);
    } else {
      const checkById = () => {
        return checkCookie?.filter((e) => e.id !== mainObj.id);
      };
      setCookie("RFavouriteItems", [...checkById(), mainObj]);
      console.log(mainObj, checkById());
    }

    // removeCookie("RFavouriteItems");
  };
  console.log(cookies);

  return (
    <div className={style.recipyCard}>
      <div className={`image ${love && "love"}`}>
        <img src={item.image} alt="" width="100%" height={200} />
        <button
          className={`favorite ${love || loved ? "love" : ""}`}
          onClick={handelAddToFavourite}
        >
          <AiFillHeart />
        </button>
      </div>
      <Link to={`/single-recipy/${item.id}`}>
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};
