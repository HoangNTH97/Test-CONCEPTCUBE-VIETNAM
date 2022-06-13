import classnames from 'classnames/bind';

import playIcon from '../../../assets/image/iconModal/uploadplayicon.svg';
import viddeoImg from '../../../assets/image/modal_video.jpg';
import styles from './ModalVideo.module.scss';
const cx = classnames.bind(styles);

function ModalVideo() {
    return (
        <div className={cx('video')}>
            <div className={cx('video-img')}>
                <img src={viddeoImg} alt="" />
            </div>
            <img className={cx('play-btn')} src={playIcon} alt="" />
        </div>
    );
}

export default ModalVideo;
