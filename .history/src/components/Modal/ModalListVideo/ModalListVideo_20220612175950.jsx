import classnames from 'classnames/bind';
import Slider from 'react-slick';

import avatar from '../../../assets/image/avatar_user.png';
import VideoItem from '../../VideoList/VideoItem/VideoItem';
import styles from './ModalListVideo.module.scss';

const cx = classnames.bind(styles);

ModalListVideo.propTypes = {};

function ModalListVideo(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
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
        <div className={cx('modal-list-video')}>
            <div className={cx('infomation')}>
                <div className={cx('avatar')}>
                    <img src={avatar} alt="" />
                </div>
                <h4>Kim Aeyong</h4>
            </div>
            <div className={cx('list-video')}>
                <Slider {...settings}>
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                    <VideoItem />
                </Slider>
            </div>
        </div>
    );
}

export default ModalListVideo;
