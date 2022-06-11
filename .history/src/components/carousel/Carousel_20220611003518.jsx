import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

Carousel.propTypes = {};

function Carousel({ title = 'theme' }) {
    return (
        <div className={cx('carousel')}>
            <Button primary>{title}</Button>
        </div>
    );
}

export default Carousel;
