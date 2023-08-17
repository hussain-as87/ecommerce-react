import React, {useEffect, useState} from 'react';
import {Dash, Plus} from 'react-bootstrap-icons';
import {DestroyCartItem, EditCartItemsQuantity} from '../../Controllers/CartController';
import noneImage from "../../assets/images/avatar.png"

const CartItem = ({item}) => {
    const {data, inc, dec, handlerOnChangeInput} = EditCartItemsQuantity(item?._id, item?.quantity);
    const {deleteHandler} = DestroyCartItem(item?._id);
    const [img, setImg] = useState(false);

    const {quantity} = data;
    useEffect(() => {
        // Check the validity of the image URL
        const checkImageValidity = async () => {
            try {
                const response = await fetch(item?.product?.imageCover);
                if (response.ok)
                setImg(true);
            } catch (error) {
                setImg(false);
            }
        };

        checkImageValidity();
    }, [item?.product?.imageCover]);
    return (
        <tr>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={img?item.product.imageCover:noneImage} width={100} alt=""/>
                </div>
                <div className="product__cart__item__text">
                    <h6>{item?.product?.title}</h6>
                    <div className="d-flex align-items-center">
                        <h5 className="me-2">${item?.price}</h5>
                        <div className="color ms-1 border" style={{ backgroundColor: item?.color }}></div>
                    </div>
                </div>
            </td>

            <td className="quantity__item">
                <div className="quantity">
                    <div className="pro-qty-2 d-inline">
                        <Dash size={20} onClick={dec}/>
                        <input
                            className="mx-2"
                            type="text"
                           disabled={true}
                            name="quantity"
                            onChange={handlerOnChangeInput}
                            value={quantity}
                            style={{width: '30px', height: '25px'}}
                        />
                        <Plus size={20} onClick={inc}/>
                    </div>
                </div>
            </td>

            <td className="cart__price">$ {item?.price * quantity}</td>
            <td className="cart__close" onClick={deleteHandler}>
                <i className="fa fa-close"/>
            </td>
        </tr>
    );
};

export default CartItem;
