import styles from "../styles/card.module.css";
function Cards(props) {
  const { recipes } = props;
  console.log(recipes);

  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div className={styles.card} key={recipe._id}>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <p>${recipe.price}</p>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
