import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './VideoItem.module.scss';

const cx = classNames.bind(styles);
VideoItem.propTypes = {};

function VideoItem(props) {
    return (
        <div className={cx('video-item')}>
            <img src="https://picsum.photos/id/237/200/300" alt="" />
        </div>
    );
}

export default VideoItem;
