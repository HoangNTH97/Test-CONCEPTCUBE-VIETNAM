import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Carousel.module.scss';
import Button from '../Button/Button';
import prevArrow from '../../assets/image/prev_arrow.svg';
import nextArrow from '../../assets/image/next_arrow.svg';

const cx = classNames.bind(styles);

Carousel.propTypes = {};

const carouselList = [
    { title: 'Theme' },
    { title: 'Editing' },
    { title: 'Camera Action, Angle' },
    { title: 'Sound, Beat' },
    { title: 'Sound, Beat' },
    { title: 'Experimental' },
    { title: 'Elements' },
    { title: 'Car' },
    { title: 'Gun' },
    { title: 'Doll' },
];

function Carousel() {
    return (
        <div className={cx('carousel')}>
            <img className={cx('prev-arrow')} src={prevArrow} alt="" />
            {carouselList.map((index, item) => (
                <Button>{item.title}</Button>
            ))}
            <img className={cx('next-arrow')} src={nextArrow} alt="" />
        </div>
    );
}

export default Carousel;
