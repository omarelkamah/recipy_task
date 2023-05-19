import style from "./styles/singleRecipy.module.scss";

export const SingleRecipyDetialsComponent = () => {
  return (
    <div className={style.singleRecipy}>
      <div className="container">
        <h1>Recipy Name</h1>
        <div className={`image`}>
          <img
            src="/photos/product.jpg"
            alt=""
            width="100%"
            // height={80}
            layout="responsive"
          />
        </div>
        <p>
          Forget going out to eat or ordering takeout every time you crave
          American food. Try making Almost Guilt Free Mac and Cheese at home.
          For $2.72 per serving, this recipe covers 31% of your daily
          requirements of vitamins and minerals. One portion of this dish
          contains about 38g of protein, 31g of fat, and a total of 585
          calories. This recipe serves 8. This recipe is liked by 4 foodies and
          cooks. From preparation to the plate, this recipe takes roughly 45
          minutes. Only a few people really liked this main course. If you have
          cellantani pasta, flour, goat cheese, and a few other ingredients on
          hand, you can make it. It is brought to you by Foodista. With a
          spoonacular score of 68%, this dish is good. If you like this recipe,
          you might also like recipes such as Almost Guilt Free Mac and Cheese,
          Guilt-Free Mac 'n' Cheese, and Guilt-Free No-Bake Cheesecake.
        </p>
        <p>
          Forget going out to eat or ordering takeout every time you crave
          American food. Try making Almost Guilt Free Mac and Cheese at home.
          For $2.72 per serving, this recipe covers 31% of your daily
          requirements of vitamins and minerals. One portion of this dish
          contains about 38g of protein, 31g of fat, and a total of 585
          calories. This recipe serves 8. This recipe is liked by 4 foodies and
          cooks. From preparation to the plate, this recipe takes roughly 45
          minutes. Only a few people really liked this main course. If you have
          cellantani pasta, flour, goat cheese, and a few other ingredients on
          hand, you can make it. It is brought to you by Foodista. With a
          spoonacular score of 68%, this dish is good. If you like this recipe,
          you might also like recipes such as Almost Guilt Free Mac and Cheese,
          Guilt-Free Mac 'n' Cheese, and Guilt-Free No-Bake Cheesecake.
        </p>
      </div>
    </div>
  );
};
