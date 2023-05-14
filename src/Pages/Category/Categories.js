import { useDispatch, useSelector } from "react-redux";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import { useEffect } from "react";
import { getCategories } from "../../Redux/Actions/CategoryAction";

const Categories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const data = useSelector((s) => s.categories);
  const loading = useSelector((s) => s.categories.loading);
  console.log(data);
  console.log(loading);
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer />
      <Pagination />
    </div>
  );
};
export default Categories;
