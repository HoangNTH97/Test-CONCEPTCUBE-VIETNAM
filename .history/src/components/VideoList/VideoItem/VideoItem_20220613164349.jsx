import classNames from 'classnames/bind';

import likeIcon from '../../../assets/image/likeicon.svg';
import avt1 from '../../../assets/image/profile-img-1.jpg';
import viewIcon from '../../../assets/image/viewicon.svg';
import Modal from '../../Modal/Modal';

import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);

VideoItem.propTypes = {};

function VideoItem({ className, background, title }) {
    const classes = cx('video-item', {
        [className]: className,
    });

    console.log(title);

    return (
        <div className={classes}>
            <Modal />
            <div className={cx('video-image')}>
                <img src={background} alt="film" />
                <div className={cx('title')}>
                    <p>{title}</p>
                </div>
            </div>
            <div className={cx('video-details')}>
                <div className={cx('video-info')}>
                    <div className={cx('video-avt')}>
                        <img src={avt1} alt="" />
                    </div>
                    <p>Kim Aeyongt</p>
                </div>
                <div className={cx('video-interact')}>
                    <div className={cx('like')}>
                        <img src={likeIcon} alt="" />
                        <p>18</p>
                    </div>
                    <div className={cx('view')}>
                        <img src={viewIcon} alt="" />
                        <p>18</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
