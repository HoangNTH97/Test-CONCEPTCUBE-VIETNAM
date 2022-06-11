import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './VideoList.module.scss';
import VideoItem from './VideoItem/VideoItem';
import listMovieApi from '../../api/listMovieApi';

const cx = classNames.bind(styles);

const videoList = [];

VideoList.propTypes = {};

function VideoList(props) {
    useEffect(() => {
        const fetchListVideos = async () => {
            const listVideos = await listMovieApi.getAll();
        };

        fetchListVideos();
    }, []);
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
