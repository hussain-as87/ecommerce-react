import {Row} from "react-bootstrap";
import AdminOrdersCards from "./AdminOrdersCards";

const AdminOrdersContainer = () => {
  return <>
  <div className="admin-content-text">Management all orders</div>
      <Row className="justify-content-start">
          <AdminOrdersCards/>
          <AdminOrdersCards/>
          <AdminOrdersCards/>
          <AdminOrdersCards/>
      </Row>
  </>
}
export default AdminOrdersContainer