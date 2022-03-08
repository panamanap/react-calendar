import { makeAutoObservable } from 'mobx';
import moment from 'moment';

class Date {
    day = moment().date();
    month = moment().month();
    year = moment().year();

    constructor() {
        makeAutoObservable(this);
    }

    prevMonth = () => {
        if (this.month < 1) {
            this.year -= 1;
            this.month = 11;
            return;
        }
        this.month -= 1;
    };

    nextMonth = () => {
        if (this.month > 10) {
            this.year += 1;
            this.month = 0;
            return;
        }
        this.month += 1;
    };
}

export const date = new Date();
