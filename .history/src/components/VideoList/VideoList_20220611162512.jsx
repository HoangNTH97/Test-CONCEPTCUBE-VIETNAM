import classNames from 'classnames/bind';
import { useEffect } from 'react';

import listMovieApi from '../../api/listMovieApi';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    useEffect(() => {
        fetch('https://yts.torrentbay.to/api/v2/list_movies.json', {
            mode: 'no-cors',
        })
            .then((res) => res)
            .then((res) => {
                console.log(res);
            });
    }, []);
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
