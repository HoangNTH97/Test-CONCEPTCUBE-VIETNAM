import classNames from 'classnames/bind';
import { useEffect, useState, useMemo } from 'react';
import Modal from '../Modal/Modal';

import Tutorial from '../Tutorial/Tutorial';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

VideoList.propTypes = {};

function VideoList(props) {
    const [dataList, setDataList] = useState([]);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch(
            'https://api.allorigins.win/raw?url=https://yts.torrentbay.to/api/v2/list_movies.json?limit=50',
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                setDataList(result.data.movies);
            })
            .catch((error) => console.log('error', error));
    }, []);

    const videoList = useMemo(() => {
        if (dataList && dataList.length > 0) {
            return dataList.map((item) => ({
                bg: item.background_image,
                title: item.title,
            }));
        }
        return [];
    }, [dataList]);

    const handleClose = (data) => {
        setOpen(data);
    };

    return (
        <div className={cx('video-list')}>
            <Modal handleOpen={handleOpen} />
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
                    <VideoItem
                        onClick={() => setClose(true)}
                        key={index}
                        background={item.bg}
                        title={item.title}
                    />
                ))}
            </div>
            <Tutorial />
            <div className={cx('video-bottom')}>
                {videoList.map((item, index) => (
                    <VideoItem key={index} background={item.bg} title={item.title} />
                ))}
            </div>
        </div>
    );
}

export default VideoList;
