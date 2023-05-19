import { AiFillHeart } from "react-icons/ai";
import style from "./recipyCard.module.scss";
import { Link } from "react-router-dom";

export const RecipyCardSection = ({ item, love }) => {
  return (
    <div className={style.recipyCard}>
      <div className={`image ${love && "love"}`}>
        <img
          src={item.image}
          alt=""
          width="100%"
          height={200}
          layout="responsive"
        />
        <div className={`favorite ${love && "love"}`}>
          <AiFillHeart />
        </div>
      </div>
      <Link to={`/single-recipy/${item.id}`}>
        <h3>{item.title}</h3>
      </Link>
    </div>
  );
};
