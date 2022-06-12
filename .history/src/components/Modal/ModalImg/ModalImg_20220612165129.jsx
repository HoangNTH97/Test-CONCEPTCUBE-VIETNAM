import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalImg.module.scss';
import img1 from '../../assets/image/modal_img1.jpg';
import img2 from '../../assets/image/modal_img2.jpg';
import img3 from '../../assets/image/modal_img3.jpg';

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
