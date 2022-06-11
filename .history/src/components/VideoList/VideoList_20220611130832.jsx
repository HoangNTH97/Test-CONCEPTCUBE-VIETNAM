import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './VideoList.module.scss';
import VideoItem from './VideoItem/VideoItem';

const cx = classNames.bind(styles);

const videoList = [];

VideoList.propTypes = {};

function VideoList(props) {
    useEffect(() => {
        const fetchProducts = async () => {};

        fetchProducts();
    }, []);
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
