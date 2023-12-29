import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
