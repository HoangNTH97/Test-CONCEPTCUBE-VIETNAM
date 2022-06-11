import classNames from 'classnames/bind';
import { useEffect } from 'react';

import listMovieApi from '../../api/listMovieApi';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    useEffect(() => {
        fetch('https://yts.torrentbay.to/api/v2/list_movies.json?quality=3D')
            .then((response) => response.json())
            .then((jsonData) => {
                console.log(jsonData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className={cx('video-list')}>
            <VideoItem />
        </div>
    );
}

export default VideoList;
