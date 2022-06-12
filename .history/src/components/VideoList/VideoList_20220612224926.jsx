import classNames from 'classnames/bind';
import { useEffect } from 'react';

import listMovieApi from '../../api/listMovieApi';
import Tutorial from '../Tutorial/Tutorial';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    useEffect(() => {
        fetch('https://yts.torrentbay.to/api/v2/list_movies.json')
            .then((res) => res)
            .then((res) => console.log(res));
    }, []);

    return (
        <div className={cx('video-list')}>
            <div className={cx('detail')}>
                <div className={cx('list-detail')}>
                    <a href="!#" className={cx('active')}>
                        Motion trend pick
                    </a>
                    <a href="!#">Latest</a>
                    <a href="!#">Recommended</a>
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
