import React from 'react';
import PropTypes from 'prop-types';

import styles from './VideoList.module.scss';
import VideoItem from './VideoItem/VideoItem';

VideoList.propTypes = {};

function VideoList(props) {
    return <VideoItem />;
}

export default VideoList;
