import { useEffect, useState } from "react";
import style from "./styles/singleRecipy.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SingleRecipyDetialsComponent = () => {
  const [singleRecipy, setSingleRecipy] = useState({});
  const param = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${param.id}/information?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f`
      )
      .then((e) => {
        setSingleRecipy(e.data);
        console.log(e.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [param.id]);

  return (
    <div className={style.singleRecipy}>
      <div className="container">
        <h1>{singleRecipy.title}</h1>
        <div className={`image`}>
          <img
            src={singleRecipy.image}
            alt=""
            width="100%"
            // height={80}
            layout="responsive"
          />
        </div>
        <p dangerouslySetInnerHTML={{ __html: singleRecipy.summary }}></p>
        <p dangerouslySetInnerHTML={{ __html: singleRecipy.instructions }}></p>
        <div className="ingrediants">
          <h3>Recipy ingrediants</h3>
          <ul>
            {singleRecipy.extendedIngredients?.map((ingredient, index) => (
              <li key={ingredient.id}>
                <span>{index + 1} - </span>
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
