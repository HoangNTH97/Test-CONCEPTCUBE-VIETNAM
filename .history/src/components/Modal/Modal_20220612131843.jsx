import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Modal.module.scss';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../Icon/icons';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalVideo from './ModalVideo/ModalVideo';

const cx = classnames.bind(styles);
Modal.propTypes = {};

function Modal(props) {
    const [close, setClose] = useState(false);
    return (
        <div className={cx('modal', close ? 'modal-none' : '')}>
            <div onClick={() => setClose(true)} className={cx('close')}>
                <CloseIcon />
            </div>

            <div className={cx('container')}>
                <div className={cx('left-icon')}>
                    <ArrowLeftIcon />
                    <ModalVideo />
                </div>
                <div className={cx('content')}>
                    <ModalHeader />
                </div>
                <div className={cx('right-icon')}>
                    <ArrowRightIcon />
                </div>
            </div>
        </div>
    );
}

export default Modal;
