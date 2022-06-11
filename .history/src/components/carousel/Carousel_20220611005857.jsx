import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';
import Button from '../Button/Button';
import prevArrow from '../../assets/image/prev_arrow.svg';
import nextArrow from '../../assets/image/next_arrow.svg';

const cx = classNames.bind(styles);

Carousel.propTypes = {};

function Carousel({ title = 'theme' }) {
    return (
        <div className={cx('carousel')}>
            <img src={prevArrow} alt="" />
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
            <Button primary>{title}</Button>
        </div>
    );
}

export default Carousel;
