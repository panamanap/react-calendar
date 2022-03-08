import { observer } from 'mobx-react-lite';
import React from 'react';
import { CSSTransition } from 'react-transition-group';

interface ModalProps {
    condition: boolean;
}

export const Modal: React.FC<ModalProps> = observer(({ condition, children }) => {
    return (
        <CSSTransition
            in={condition}
            timeout={300}
            unmountOnExit
            classNames="transition"
        >
            {children}
        </CSSTransition>
    );
});
