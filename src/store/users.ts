import { USER_DATA, ORDERS_DATA } from './../utils/constants';
import { OrdersState, UsersState } from './../types/types';
import { makeAutoObservable } from 'mobx';

class User {
    // localOrders = JSON.parse(localStorage.getItem(ORDERS_DATA) || '');   
    // localUsers = JSON.parse(localStorage.getItem(USER_DATA) || '');                          
    orders: OrdersState[] =[];
    usersData: UsersState[] = [];
    id: string = '';
    price: number = 0;

    constructor() {
        makeAutoObservable(this);
    }                           

    saveParams = (id: string, price: string) => {
        this.id = id;
        this.price = parseInt(price);
    };

    addOrder = (email: string, name: string, time: string) => {
        this.orders?.push({
            id: this.id,
            name: name,
            time: time,
        });
        if (this.usersData.some((user) => user.name === name)) {
            const index = this.usersData.findIndex(
                (user) => user.name === name && user.email === email
            );
            this.usersData[index].price += this.price;
            return;
        }
        this.usersData?.push({
            email,
            name,
            time,
            price: this.price,
        });
        localStorage.setItem(
            USER_DATA,
            JSON.stringify({ name: USER_DATA, arr: this.usersData })
        );
        localStorage.setItem(
            ORDERS_DATA,
            JSON.stringify({ name: ORDERS_DATA, arr: this.orders })
        );
    };
}

export const user = new User();
