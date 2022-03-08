import { OrdersState, UsersState } from './../types/types';
import { makeAutoObservable } from 'mobx';

class User {
    orders: OrdersState[] = [];
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

    addOrder = (email: string, name: string) => {
        this.orders?.push({
            id: this.id,
            name: name,
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
            price: this.price,
        });
    };
}

export const user = new User();
