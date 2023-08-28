import React from 'react'
import {Button, Card} from 'react-bootstrap'
import {Trash2} from "react-bootstrap-icons";
import {DestroyCoupon} from "../../../Controllers/CouponController";
import AdminEditCoupon from "./AdminEditCoupon";
import {format} from 'date-fns';

const AdminCouponCard = ({coupon: {_id, name, expire, discount}}) => {
    const {deleteHandler} = DestroyCoupon(_id);
    const formattedExpireDate = format(new Date(expire), 'MM-dd-yyyy');

    return (
        <div className="py-2">
            <Card className="mb-2">
                <div className="d-flex justify-content-between pt-2 p-2">
                    <div className="align-content-start"><h3>{name}</h3></div>
                    <div className="align-content-end">

                        {/* Edit Modal */}
                        <AdminEditCoupon id={_id}/>
                        <Button onClick={deleteHandler} size="sm" className="py-2" variant="outline-danger">
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