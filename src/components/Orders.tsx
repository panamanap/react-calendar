import React from 'react';
import { modal } from '../store/modal';
import { user } from '../store/users';

export const Orders = () => {
    const onCloseModal = () => {
        modal.openOrders(false);
    };

    return (
        <div className="modal-wrapper" onClick={onCloseModal}>
            <div
                className="wrapper"
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className="modal__header">
                    <h3 className="modal__registration">Orders</h3>
                    <p className="modal__close" onClick={onCloseModal}>
                        ✖
                    </p>
                </div>
                <div className="modal__orders">
                    <div className='modal__title'>
                        <p>Name</p>
                        <p>Price</p>
                    </div>
                    {user.usersData.map((user) => (
                        <div className="modal__user" key={user.name}>
                            <p>{user.name}</p>
                            <p>{user.price}p.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
