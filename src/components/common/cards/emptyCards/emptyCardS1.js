import style from "./emptyCards.module.scss";

export const EmptyCardS1 = ({ title }) => {
  return (
    <div className={style.emptyCardS1}>
      <img src="/images/empty.png" alt="emptyImage" />
      <h3>{title}</h3>
    </div>
  );
};
