import { observer } from 'mobx-react-lite';
import React from 'react';
import { Calendar } from './components/Calendar';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Modal } from './components/Modal';
import { Orders } from './components/Orders';
import { Reservation } from './components/Reservation';
import { modal } from './store/modal';

const App = observer(() => {
    return (
        <div className="app-wrapper">
            <Modal condition={modal.reservationModal}>
                <Reservation />
            </Modal>
            <Modal condition={modal.ordersModal}>
                <Orders/>
            </Modal>
            <div className="app">
                <Header />
                <Calendar />
                <Footer />
            </div>
        </div>
    );
});

export default App;
