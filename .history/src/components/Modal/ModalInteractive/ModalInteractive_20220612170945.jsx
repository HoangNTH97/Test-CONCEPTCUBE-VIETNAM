import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalInteractive.module.scss';
import { FollowIcon, LikeIcon, ViewIcon } from '../../Icon/icons';

const cx = classnames.bind(styles);

ModalInteractive.propTypes = {};

function ModalInteractive(props) {
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
                <div className={cx('user')} style={{ backgroundColor: 'black' }}>
                    <FollowIcon />
                </div>
            </div>
        </div>
    );
}

export default ModalInteractive;
