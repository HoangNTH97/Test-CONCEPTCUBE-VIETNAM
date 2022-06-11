import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import likeIcon from '../../../assets/image/likeicon.svg';
import viewIcon from '../../../assets/image/viewicon.svg';
import img1 from '../../../assets/image/1.jpg';

import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);
VideoItem.propTypes = {};

function VideoItem(props) {
    return (
        <div className={cx('video-item')}>
            <div className={cx('video-image')}>
                <img src="https://picsum.photos/id/237/200/300" alt="" />
            </div>
            <div className={cx('video-details')}>
                <div className={cx('video-info')}>
                    <div className={cx('video-avt')}></div>
                    <h2>Kim Aeyongt</h2>
                </div>
                <div className={cx('video-interact')}>
                    <div className={cx('like')}>
                        <img src={likeIcon} alt="" />
                        <h4>18</h4>
                    </div>
                    <div className={cx('view')}>
                        <img src={viewIcon} alt="" />
                        <h4>18</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
