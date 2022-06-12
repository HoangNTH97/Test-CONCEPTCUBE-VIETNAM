import classnames from 'classnames/bind';

import avatarUser from '../../../assets/image/avatar_user.png';
import Button from '../../Button/Button';
import { AddIcon, FollowIcon, WhiteLikeIcon } from '../../Icon/icons';
import styles from './ModalHeader.module.scss';

const cx = classnames.bind(styles);

ModalHeader.propTypes = {};

function ModalHeader() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <div className={cx('avatar')}>
                    <img src={avatarUser} alt="" />
                </div>
                <div className={cx('info')}>
                    <div className={cx('title')}>
                        <h1>The first portfolio movement.</h1>
                    </div>
                    <div className={cx('desc')}>
                        <span>Kim Aeyong</span>
                        <p>Design, Music Video, Advertising</p>
                    </div>
                    <div className={cx('button')}>
                        <Button leftIcon={<WhiteLikeIcon />} outLine>
                            Like
                        </Button>
                        <Button leftIcon={<FollowIcon />} primarySmall>
                            Follow
                        </Button>
                        <Button leftIcon={<AddIcon />} primarySmall>
                            Add
                        </Button>
                    </div>
                </div>
            </div>

            <div className={cx('header-right')}>
                <Button outLine></Button>
            </div>
        </div>
    );
}

export default ModalHeader;
