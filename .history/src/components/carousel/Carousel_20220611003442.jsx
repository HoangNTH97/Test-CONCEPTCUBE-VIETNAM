import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

Carousel.propTypes = {};

function Carousel(props) {
    return <div className={cx('carousel')}></div>;
}

export default Carousel;
