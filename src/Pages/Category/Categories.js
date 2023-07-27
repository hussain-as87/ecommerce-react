import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import {GetCategories} from "../../Controllers/CategoryController";


const Categories = () => {
    const {categories, loading, pageCount, getPage} = GetCategories()
    console.log(categories)
    return (
        <div style={{minHeight: "670px"}}>
            <CategoryContainer categories={categories.data} loading={loading}/>
            {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
        </div>
    );
};
export default Categories;
