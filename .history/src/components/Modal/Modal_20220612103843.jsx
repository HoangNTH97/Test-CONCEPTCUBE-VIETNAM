import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Modal.module.scss';
import { CloseIcon } from '../Icon/icons';

const cx = classnames.bind(styles);
Modal.propTypes = {};

function Modal(props) {
    return (
        <div className={cx('modal-video')}>
            <div className={cx('close')}>
                <CloseIcon />
            </div>

            <div className={cx('container')}>
                <div className={cx('content')}></div>
            </div>
        </div>
    );
}

export default Modal;
