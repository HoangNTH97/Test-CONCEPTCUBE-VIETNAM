import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './VideoList.module.scss';
import VideoItem from './VideoItem/VideoItem';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    return <VideoItem />;
}

export default VideoList;
