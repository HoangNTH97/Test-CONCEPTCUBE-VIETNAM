import classNames from 'classnames/bind';

import playIcon from '../../assets/image/play-icon.svg';
import tutorialImg from '../../assets/image/tutorial-img-1.jpg';
import Button from '../Button/Button';
import styles from './Tutorial.module.scss';
import TutorialVideoList from './TutorialVideoList/TutorialVideoList';

const cx = classNames.bind(styles);

function Tutorial() {
    return (
        <div className={cx('tutorial')}>
            <div className={cx('introduce')}>
                <p className={cx('title')}>TUTORIAL</p>
                <p className={cx('desc')}>
                    Let's look at 7 ways to use motion trend more effectively in the first tutorial.
                </p>
                <Button className={cx('watch-btn')} primaryLarge>
                    watch now
                </Button>
            </div>

            <div className={cx('live-video')}>
                <div className={cx('video')}>
                    <img className={cx('img')} src={tutorialImg} alt="" />
                    <img className={cx('icon')} src={playIcon} alt="" />
                    <div className={cx('live')}>live</div>
                </div>
            </div>

            <div className={cx('list-video')}>
                <TutorialVideoList />
                <TutorialVideoList />
                <TutorialVideoList />
            </div>
        </div>
    );
}

export default Tutorial;
