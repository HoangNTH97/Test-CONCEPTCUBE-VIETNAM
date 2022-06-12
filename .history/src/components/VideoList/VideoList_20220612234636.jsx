import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import listMovieApi from '../../api/listMovieApi';
import Tutorial from '../Tutorial/Tutorial';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            'https://api.allorigins.win/raw?url=https://yts.torrentbay.to/api/v2/list_movies.json?quality=3D',
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setData(result.data.movies);
            })
            .catch((error) => console.log('error', error));
    }, []);

    const backgroundList = [
        {
            img: data.background_image,
        },
    ];

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
