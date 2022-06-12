import classNames from 'classnames/bind';
import { useEffect } from 'react';

import listMovieApi from '../../api/listMovieApi';
import Tutorial from '../Tutorial/Tutorial';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    return (
        <div className={cx('video-list')}>
            <div className={cx('detail')}>
                <div className={cx('list-detail')}>
                    <h4>Motion trend pick</h4>
                    <h4>Latest</h4>
                    <h4>Recommended</h4>
                </div>
                <p>Selection criteria</p>
            </div>
            <div className={cx('video-top')}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </div>
            <Tutorial />
            <div className={cx('video-bottom')}>
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
                <VideoItem />
            </div>
        </div>
    );
}

export default VideoList;
