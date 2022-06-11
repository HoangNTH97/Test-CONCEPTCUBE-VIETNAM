import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './VideoList.module.scss';
import VideoItem from './VideoItem/VideoItem';

const cx = classNames.bind(styles);

const videoList = [];

VideoList.propTypes = {};

function VideoList(props) {
    const fetchData = () => {
        return axios.get('https://yts.torrentbay.to/api/v2/list_movies.json');
    };
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
