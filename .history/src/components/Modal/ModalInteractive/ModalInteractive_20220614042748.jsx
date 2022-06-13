import classnames from 'classnames/bind';

import Button from '../../Button/Button';
import { AddIcon, BlackFollowIcon, LikeIcon, ViewIcon, WhiteLikeIcon } from '../../Icon/icons';
import styles from './ModalInteractive.module.scss';

const cx = classnames.bind(styles);

function ModalInteractive() {
    return (
        <div className={cx('interactive')}>
            <div className={cx('title')}>
                <h2>The first portfolio movement.</h2>
            </div>

            <div className={cx('interact')}>
                <div className={cx('like')}>
                    <LikeIcon />
                    <p>1,688</p>
                </div>
                <div className={cx('view')}>
                    <ViewIcon />
                    <p>18,178</p>
                </div>
                <div className={cx('user')}>
                    <BlackFollowIcon />
                    <p>332</p>
                </div>
            </div>

            <div className={cx('date')}>
                <p>Publishing date : 2020.10.15</p>
            </div>

            <div className={cx('button')}>
                <Button outLine leftIcon={<WhiteLikeIcon />}>
                    Like
                </Button>
                <Button primarySmall leftIcon={<AddIcon />}>
                    Add
                </Button>
            </div>
        </div>
    );
}

export default ModalInteractive;
