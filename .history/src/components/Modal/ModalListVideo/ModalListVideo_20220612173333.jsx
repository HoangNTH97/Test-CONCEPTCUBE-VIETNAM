import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalListVideo.module.scss';
import avatar from '../../../assets/image/avatar_user.png';
import VideoList from '../../VideoList/VideoList';
import VideoItem from '../../VideoList/VideoItem/VideoItem';

const cx = classnames.bind(styles);

ModalListVideo.propTypes = {};

function ModalListVideo(props) {
    return (
        <div className={cx('modal-list-video')}>
            <div className={cx('infomation')}>
                <div className={cx('avatar')}>
                    <img src={avatar} alt="" />
                </div>
                <h4>Kim Aeyong</h4>
            </div>
            <div className={cx('list-video')}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </div>
        </div>
    );
}

export default ModalListVideo;
