import classNames from 'classnames/bind';
import { useEffect, useState, useMemo } from 'react';

import listMovieApi from '../../api/listMovieApi';
import Tutorial from '../Tutorial/Tutorial';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    const [videoList, setvideoList] = useState([]);

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
                setvideoList(result.data.movies);
            })
            .catch((error) => console.log('error', error));
    }, []);

    const dataList = useMemo(() => {
        if (videoList && videoList.length > 0) {
            return videoList.map((item) => ({
                bg: item.background_image,
                title: item.title,
            }));
        }
        return [];
    }, [videoList]);

    console.log(dataList);

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
                {videoList.map((item, index) => (
                    <VideoItem key={index} data={item} />
                ))}
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
