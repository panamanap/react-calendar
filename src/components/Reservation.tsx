import React from 'react';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { modal } from '../store/modal';
import { user } from '../store/users';
import { checkValidation } from '../utils/checkValidation';
import { Button } from './UI/Button';
import { Input } from './UI/Input';

export const Reservation = () => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');

    const [a, b, c, currentHour, currentMinute] = useCurrentDate();

    const onCloseModal = () => {
        user.saveParams('', '');
        modal.openReservation(false);
    };

    const onSaveOrder = () => {
        const condition =
            modal.checkingTime

            console.log('condition', condition);
        checkValidation(email, name);

        if (condition) {
            checkValidation(email, name);
            user.addOrder(email, name);
            modal.openReservation(false);
            setEmail('');
            setName('');
            return;
        } else alert('Wrong time! Toggle switch states or wait');
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
                    <h3 className="modal__registration">Reservation</h3>
                    <p className="modal__close" onClick={onCloseModal}>
                        ✖
                    </p>
                </div>
                <div className="modal__form">
                    <Input
                        placeholder="Your email..."
                        setUserValue={setEmail}
                    />
                    <Input placeholder="Your name..." setUserValue={setName} />
                    <Button onClick={onSaveOrder}>Reserve</Button>
                </div>
            </div>
        </div>
    );
};
