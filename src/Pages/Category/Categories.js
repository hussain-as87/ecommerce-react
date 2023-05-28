import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import IndexCategoryForm from "../../Controllers/Category/IndexCategoryForm";


const Categories = () => {
    const {categories, loading, pageCount, getPage} = IndexCategoryForm()
    console.log(categories)
    return (
        <div style={{minHeight: "670px"}}>
            <CategoryContainer categories={categories.data} loading={loading}/>
            {pageCount > 1 && (<Pagination pageCount={pageCount} onPress={getPage}/>)}
        </div>
    );
};
export default Categories;
