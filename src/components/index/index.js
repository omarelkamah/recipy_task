import { Button, Col, Row } from "antd";
import { InputSearch } from "../common/inputSearch/inputSearch";
import { RecipyCardSection } from "../common/cards/recipyCard/recipyCard";
import style from "./styles/index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [numberOfRecipes, setNumberOfRecipes] = useState(24);

  const handelLoadMoreBtn = () => {
    setNumberOfRecipes(numberOfRecipes + 10);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f&number=${numberOfRecipes}`
      )
      .then((e) => {
        setRecipes(e.data.recipes);
        console.log(e.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [numberOfRecipes]);

  return (
    <section className={style.indexPage}>
      <div className="container">
        <h1>Search results</h1>
        <InputSearch number={recipes.length} showNumber={true} />
        <div className="recipyCards">
          <Row gutter={20}>
            {recipes?.map((recipy) => (
              <Col xs={24} md={12} lg={6} key={recipy.id}>
                <RecipyCardSection item={recipy} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="loadMoreBtn">
          <Button onClick={handelLoadMoreBtn}>Load More</Button>
        </div>
      </div>
    </section>
  );
}
