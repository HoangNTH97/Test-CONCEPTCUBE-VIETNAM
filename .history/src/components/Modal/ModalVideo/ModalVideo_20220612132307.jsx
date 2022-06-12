import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalVideo.module.scss';
import viddeoImg from '../../../assets/image/modal_video.jpg';
import playIcon from '../../../assets/image/iconModal/uploadplayicon.svg';
const cx = classnames.bind(styles);

ModalVideo.propTypes = {};

function ModalVideo(props) {
    return (
        <div className={cx('video')}>
            <img src={viddeoImg} alt="" />
            <img src={playIcon} alt="" />
        </div>
    );
}

export default ModalVideo;
