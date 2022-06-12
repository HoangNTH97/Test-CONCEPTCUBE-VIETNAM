import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalImg.module.scss';

const cx = classnames.bind(styles);

ModalImg.propTypes = {};

function ModalImg(props) {
    return (
        <div className={cx('modal-img')}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
    );
}

export default ModalImg;
