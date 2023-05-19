import { Col, Row } from "antd";
import { RecipyCardSection } from "../common/cards/recipyCard";
import style from "./styles/favourtie.module.scss";

export const FavouriteComponent = () => {
  return (
    <div className={style.favourite}>
      <div className="container">
        <h1>Your Favourite Recipeies</h1>
        <Row gutter={20}>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection love={true} />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection />
          </Col>
          <Col xs={24} md={12} lg={6}>
            <RecipyCardSection />
          </Col>
        </Row>
      </div>
    </div>
  );
};
