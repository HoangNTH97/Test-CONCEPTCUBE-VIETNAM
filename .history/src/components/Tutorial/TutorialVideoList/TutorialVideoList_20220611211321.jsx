import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './TutorialVideoList.module.scss';
import backgroundImage from '../../../assets/image/tutorial-img-1.jpg';
import likeIcon from '../../../assets/image/likeicon.svg';
import viewIcon from '../../../assets/image/viewicon.svg';

const cx = className.bind(styles);

TutorialVideoList.propTypes = {};

function TutorialVideoList(props) {
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
                </div>
            </div>
        </div>
    );
}

export default TutorialVideoList;
