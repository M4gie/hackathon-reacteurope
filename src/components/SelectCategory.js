import React from "react";
import { Button } from "@progress/kendo-react-buttons";
import { useRecoilState } from "recoil";
import { categoriesState } from "../recoil/categories";
import { removeItem } from "../utils/array";

export default function SelectCategory(props) {
  const { category } = props;
  const [gameCategories, setGameCategories] = useRecoilState(categoriesState);

  function handleCategory(category) {
    if (gameCategories.includes(category) && gameCategories.length > 1) {
      const index = gameCategories.findIndex(
        (listItem) => listItem === category
      );
      const newCategories = removeItem(gameCategories, index);
      setGameCategories(newCategories);
    } else {
      setGameCategories([...gameCategories, category]);
    }
  }

  return (
    <Button
      type="button"
      key={category}
      primary={gameCategories.includes(category)}
      onClick={() => handleCategory(category)}
      {...props}
    >
      {category}
    </Button>
  );
}
