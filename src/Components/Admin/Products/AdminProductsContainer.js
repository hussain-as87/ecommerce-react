import {Row} from "react-bootstrap";
import AdminProductsCards from "./AdminProductsCards";

const AdminProductsContainer = () => {
  return <>
  <div className="admin-content-text">Management all products</div>
      <Row className="justify-content-start">
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
          <AdminProductsCards/>
      </Row>
  </>
}
export default AdminProductsContainer