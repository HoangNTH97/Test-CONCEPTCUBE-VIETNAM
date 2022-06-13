import classNames from 'classnames/bind';
import { useEffect, useState, useMemo } from 'react';
import Modal from '../Modal/Modal';

import Tutorial from '../Tutorial/Tutorial';
import VideoItem from './VideoItem/VideoItem';
import styles from './VideoList.module.scss';

const cx = classNames.bind(styles);

function VideoList() {
    const [dataList, setDataList] = useState([]);

    const [open, setOpen] = useState(true);

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
            <Modal videoList={videoList} handleOpen={handleClose} open={open} />

            <div className={cx('video-top')}>
                {videoList.map((item, index) => (
                    <VideoItem
                        onClick={() => setOpen(false)}
                        key={index}
                        background={item.bg}
                        title={item.title}
                    />
                ))}
            </div>
            <Tutorial />
            <div className={cx('video-bottom')}>
                {videoList.map((item, index) => (
                    <VideoItem
                        onClick={() => setOpen(false)}
                        key={index}
                        background={item.bg}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoList;