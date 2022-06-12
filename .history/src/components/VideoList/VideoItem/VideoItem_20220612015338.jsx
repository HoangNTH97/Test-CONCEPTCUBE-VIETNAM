import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import likeIcon from '../../../assets/image/likeicon.svg';
import viewIcon from '../../../assets/image/viewicon.svg';
import img1 from '../../../assets/image/1.jpg';
import avt1 from '../../../assets/image/profile-img-1.jpg';

import styles from './VideoItem.module.scss';
import { EditIcon, LikeIcon } from '../../Icon/icons';

const cx = classNames.bind(styles);
VideoItem.propTypes = {};

function VideoItem() {
    return (
        <div className={cx('video-item')}>
            <div className={cx('video-image')}>
                <img src={img1} alt="" />
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
                        <LikeIcon />
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
