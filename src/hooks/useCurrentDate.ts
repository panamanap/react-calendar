import moment from 'moment';

export const useCurrentDate = () => {
    const currentDay = moment().date();
    const currentMonth = moment().month() + 1;
    const currentYear = moment().year();
    const currentMinute = moment().minute();
    const currentHour = moment().hour();

    let day = '';
    let month = '';
    let year = '';

    if (currentDay < 10) {
        day = `0${currentDay}`;
    } else day = currentDay.toString();
    if (currentMonth < 10) {
        month = `0${currentMonth}`;
    } else month = currentMonth.toString();
    if (currentYear < 10) {
        year = `0${currentYear}`;
    } else year = currentYear.toString();

    return [day, month, year, currentHour, currentMinute];
};
