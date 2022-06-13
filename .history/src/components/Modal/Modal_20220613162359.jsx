import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Modal.module.scss';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../Icon/icons';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalVideo from './ModalVideo/ModalVideo';
import ModalInteractive from './ModalInteractive/ModalInteractive';
import ModalDesc from './ModalDesc/ModalDesc';
import ModalImg from './ModalImg/ModalImg';
import ModalListVideo from './ModalListVideo/ModalListVideo';
import ModalComment from './ModalComment/ModalComment';

const cx = classnames.bind(styles);
Modal.propTypes = {};

function Modal({ onReceiveData }) {
    const [close, setClose] = useState(false);
    return (
        <div className={cx('modal', close ? 'modal-none' : '')}>
            <div
                onClick={() => {
                    setClose(true);
                    onReceiveData(close);
                }}
                className={cx('close')}
            >
                <CloseIcon />
            </div>

            <div className={cx('container')}>
                <div className={cx('left-icon')}>
                    <ArrowLeftIcon />
                </div>
                <div className={cx('content')}>
                    <ModalHeader />
                    <ModalVideo />
                    <ModalDesc />
                    <ModalImg />
                    <ModalInteractive />
                    <ModalListVideo />
                    <ModalComment />
                </div>
                <div className={cx('right-icon')}>
                    <ArrowRightIcon />
                </div>
            </div>
        </div>
    );
}

export default Modal;
