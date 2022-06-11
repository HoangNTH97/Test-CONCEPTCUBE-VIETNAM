import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './VideoList.module.scss';
import VideoItem from './VideoItem/VideoItem';
import listMovieApi from '../../api/listMovieApi';

const cx = classNames.bind(styles);

const videoList = [];

VideoList.propTypes = {};

function VideoList(props) {
    useEffect(() => {
        const fetchListMovies = async () => {
            const listMovies = await listMoviesApi.getAll();
        };

        fetchListMovies();
    }, []);
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
