import { useState } from "react";
import  CategoryContext from "./CategoryContext";

const CategoryProvider = (props) => {

  const [categoryResults, setCategoryResults] = useState([]);
  

  return (
    <CategoryContext.Provider value={{ categoryResults, setCategoryResults}}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;