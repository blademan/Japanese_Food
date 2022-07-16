import styles from './MealList.module.css';
import OneMeal from './MealItem/OneMeal';
import Card from '../UI/Card';

export default function MealList({ DUMMY_MEALS }) {
  const mealList = DUMMY_MEALS.map((meal) => (
    <OneMeal
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}
