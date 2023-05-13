import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import { useEffect } from "react";
import getCategories from "../../Redux/Actions/CategoryAction";

const Categories = () => {

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};
export default Categories;
