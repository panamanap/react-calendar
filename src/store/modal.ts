import { makeAutoObservable } from 'mobx';
class Modal {
    reservationModal = false;
    ordersModal = false;
    checkingTime = false;

    constructor() {
        makeAutoObservable(this);
    }

    openReservation = (value: boolean) => {
        this.reservationModal = value;
    };

    openOrders = (value: boolean) => {
        this.ordersModal = value
    }

    checkTime = (value: boolean) => {
        this.checkingTime = value;
        console.log('aaaaa', this.checkingTime);
    };
}

export const modal = new Modal();
