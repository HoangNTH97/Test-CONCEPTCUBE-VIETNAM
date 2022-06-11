import React, { useRef } from 'react';
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
    const carouselRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={cx('carousel')}>
            <img
                className={cx('prev-arrow')}
                src={prevArrow}
                alt=""
                onClick={() => carouselRef.current.slickPrev()}
            />
            <img className={cx('next-arrow')} src={nextArrow} alt="" />

            <Slider {...settings} ref={carouselRef}>
                {carouselList.map((item, index) => (
                    <Button key={index} primary>
                        {item.title}
                    </Button>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
