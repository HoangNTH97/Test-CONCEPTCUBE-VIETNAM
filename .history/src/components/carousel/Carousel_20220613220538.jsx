import classNames from 'classnames/bind';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import nextArrow from '../../assets/image/next_arrow.svg';
import prevArrow from '../../assets/image/prev_arrow.svg';
import Button from '../Button/Button';
import styles from './Carousel.module.scss';

const cx = classNames.bind(styles);

Carousel.propTypes = {};

const carouselList = [
    { title: 'Theme' },
    { title: 'Editing' },
    { title: 'Camera Action, Angle' },
    { title: 'Sound, Beat' },
    { title: 'Experimental' },
    { title: 'Elements' },
    { title: 'Car' },
    { title: 'Sound, Beat' },
    { title: 'Gun' },
    { title: 'Doll' },
];

function Carousel() {
    const arrowRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 9,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('carousel')}>
                <img
                    className={cx('prev-arrow')}
                    src={prevArrow}
                    alt=""
                    onClick={() => arrowRef.current.slickPrev()}
                />
                <img
                    className={cx('next-arrow')}
                    src={nextArrow}
                    alt=""
                    onClick={() => arrowRef.current.slickNext()}
                />

                <Slider {...settings} ref={arrowRef}>
                    {carouselList.map((item, index) => (
                        <Button key={index} primaryLarge>
                            {item.title}
                        </Button>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Carousel;
