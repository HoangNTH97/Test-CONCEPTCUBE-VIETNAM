import classNames from 'classnames/bind';
import { useEffect } from 'react';

import listMovieApi from '../../api/listMovieApi';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    const fetchListMovie = async () => {
        const listMovie = await listMovieApi.getAll();
    };
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
