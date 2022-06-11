import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);
VideoItem.propTypes = {};

function VideoItem(props) {
    return <div className={cx('video-item')}></div>;
}

export default VideoItem;
