import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Tutorial.module.scss';
import Button from '../Button/Button';
import tutorialImg from '../../assets/image/tutorial-img-1.jpg';
import playIcon from '../../assets/image/play-icon.svg';

const cx = classNames.bind(styles);

Tutorial.propTypes = {};

function Tutorial() {
    return (
        <div className={cx('tutorial')}>
            <div className={cx('introduce')}>
                <h2 className={cx('title')}>TUTORIAL</h2>
                <h1 className={cx('desc')}>
                    Let's look at 7 ways to use motion trend more effectively in the first tutorial.
                </h1>
                <Button primary>watch now</Button>
            </div>

            <div className={cx('live-video')}>
                <img src={tutorialImg} alt="" />
            </div>
        </div>
    );
}

export default Tutorial;
