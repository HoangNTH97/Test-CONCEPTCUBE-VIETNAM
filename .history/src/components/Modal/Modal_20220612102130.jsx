import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Modal.module.scss';

const cx = classnames.bind(styles);
Modal.propTypes = {};

function Modal(props) {
    return (
        <div className={cx('modal-video')}>
            <div className={cx('modal-content')}></div>
        </div>
    );
}

export default Modal;
