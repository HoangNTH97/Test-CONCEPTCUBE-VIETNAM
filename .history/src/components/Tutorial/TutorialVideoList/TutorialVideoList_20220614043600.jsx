import className from 'classnames/bind';

import likeIcon from '../../../assets/image/likeicon.svg';
import backgroundImage from '../../../assets/image/tutorial-img-1.jpg';
import viewIcon from '../../../assets/image/viewicon.svg';
import styles from './TutorialVideoList.module.scss';

const cx = className.bind(styles);

function TutorialVideoList() {
    return (
        <div className={cx('video-tutorial')}>
            <div className={cx('background')}>
                <img src={backgroundImage} alt="" />
            </div>
            <div className={cx('detail')}>
                <div className={cx('title')}>
                    <h2>Tutorial</h2>
                </div>
                <div className={cx('desc')}>
                    <p>A tutorial video with Motion Trend. Let's Learn Motion Trends.</p>
                </div>
                <div className={cx('video-interact')}>
                    <div className={cx('like')}>
                        <img src={likeIcon} alt="" />
                        <span>18</span>
                    </div>
                    <div className={cx('view')}>
                        <img src={viewIcon} alt="" />
                        <span>18</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TutorialVideoList;
