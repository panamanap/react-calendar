import React from 'react';
import { useCurrentDate } from '../hooks/useCurrentDate';
import { modal } from '../store/modal';

export const Footer = () => {
    const [day, month, year] = useCurrentDate();

    const onOpenOrders = () => {
        modal.openOrders(true)
    }
    return (
        <footer className="footer">
            <p className="footer__developer">Developed: Nazar Polyukhovich</p>
            <p className="footer__reservation-list" onClick={onOpenOrders}>Reservation list</p>
            <p>
                Today: {day}.{month}.{year}
            </p>
        </footer>
    );
};
