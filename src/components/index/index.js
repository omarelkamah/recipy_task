import { Button, Col, Row } from "antd";
import { InputSearch } from "../common/inputSearch/inputSearch";
import { RecipyCardSection } from "../common/cards/recipyCard";
import style from "./styles/index.module.scss";
import { useEffect } from "react";
import { getIndexPage } from "../../store/slices/index/indexSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { recipes } = useSelector(({ index }) => index);
  useEffect(() => {
    dispatch(getIndexPage());
  }, [dispatch]);
  console.log(recipes.length);

  return (
    <section className={style.indexPage}>
      <div className="container">
        <h1>Search results</h1>
        <InputSearch number={recipes.length} />
        <div className="recipyCards">
          <Row gutter={20}>
            {recipes.length > 0 &&
              recipes?.map((recipy) => (
                <Col xs={24} md={12} lg={6} key={recipy.id}>
                  <RecipyCardSection item={recipy} />
                </Col>
              ))}
          </Row>
        </div>
        <div className="loadMoreBtn">
          <Button>Load More</Button>
        </div>
      </div>
    </section>
  );
}
