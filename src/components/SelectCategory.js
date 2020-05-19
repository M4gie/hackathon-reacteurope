import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoriesState } from "../recoil/categories";
import { removeItem } from "../utils/array";
import Button from "./Button";

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
    <CategoryButton
      small
      type="button"
      primary={gameCategories.includes(category)}
      onClick={() => handleCategory(category)}
      {...props}
    >
      {category}
    </CategoryButton>
  );
}

const CategoryButton = styled(Button)`
  margin-right: 6px;
  margin-left: 6px;
  padding-right: 10px;
  padding-left: 10px;
`;
