import { Col, Row } from "antd";
import { RecipyCardSection } from "../common/cards/recipyCard/recipyCard";
import style from "./styles/favourtie.module.scss";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { EmptyCardS1 } from "../common/cards/emptyCards/emptyCardS1";

export const FavouriteComponent = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["RFavouriteItems"]);

  const [myFavoriteItems, setMyFavoriteItems] = useState(
    cookies.RFavouriteItems || []
  );

  useEffect(() => {
    setMyFavoriteItems(cookies.RFavouriteItems || []);
  }, [cookies.RFavouriteItems]);

  return (
    <div className={style.favourite}>
      <div className="container">
        <h1>Your Favourite Recipeies</h1>
        <Row gutter={20}>
          {myFavoriteItems.length !== 0 ? (
            myFavoriteItems?.map((recipy) => (
              <Col xs={24} md={12} lg={6} key={recipy.id}>
                <RecipyCardSection item={recipy} love={true} />
              </Col>
            ))
          ) : (
            <EmptyCardS1 title="Your Favourite Recipeies Is Empty !!!!!" />
          )}
        </Row>
      </div>
    </div>
  );
};
