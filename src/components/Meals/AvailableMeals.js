import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://food-order-app-c3155-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Unable to get menu data");
      }
      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });

        setIsLoading(false);
      }

      setMeals(loadedMeals);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setFetchError(error.message);
    });
  }, []);

  const availableMeals = meals.map((item) => (
    <MealItem
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      key={item.id}
    />
  ));

  return (
    <section className={styles.meals}>
      {isLoading && <p className={styles["meals-loading"]}>Loading</p>}
      {fetchError && <p className={styles["error-loading"]}>{fetchError}</p>}
      <ul>{availableMeals}</ul>
    </section>
  );
};

export default AvailableMeals;
