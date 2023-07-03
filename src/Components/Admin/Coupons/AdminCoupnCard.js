import React from 'react'
import {Button, Card, Col, Modal, Row} from 'react-bootstrap'
import {Backspace, Check2Circle, Pencil, Trash2} from "react-bootstrap-icons";
import {DestroyCoupon, EditCoupon} from "../../../Controllers/CouponController";
import AdminEditCoupon from "./AdminEditCoupon";
import {format} from 'date-fns';

const AdminCouponCard = ({coupon: {_id, name, expire, discount}}) => {
    const {deleteHandler} = DestroyCoupon(_id);
    const formattedExpireDate = format(new Date(expire), 'MM-dd-yyyy');

    return (
        <div className="py-2">
            {/*<Modal show={showModal} onHide={()=>setShowModal(false)}>
                <Modal.Header>
                    <Modal.Title>
                        <div className='font'>تاكيد الحذف</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='font'>هل انتا متاكد من عملية الحذف للكوبون</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" onClick={handleClose}>
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" onClick={handelDelete}>
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>*/}

            <Card bg="light" className="mb-2">
                <div className="d-flex justify-content-between pt-2 p-2">
                    <div className="align-content-start"><h3>{name}</h3></div>
                    <div className="align-content-end">

                        {/* Edit Modal */}
                        <AdminEditCoupon id={_id}/>

                        <Button onClick={deleteHandler} size="sm" className="me-2" variant="outline-danger">
                            <Trash2/>
                        </Button></div>
                </div>
                <Card.Body>
                    <Card.Text>
                        <h1 className="text-primary">{discount} %</h1>
                    </Card.Text>
                    <Card.Text className="text-danger">
                        expire in {formattedExpireDate}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AdminCouponCard