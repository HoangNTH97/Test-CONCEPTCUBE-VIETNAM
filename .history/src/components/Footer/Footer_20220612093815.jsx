import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Footer.module.scss';
import { FbIcon, InstaIcon, YoutubeIcon } from '../Icon/icons';

const cx = classnames.bind(styles);

Footer.propTypes = {};

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('top')}>
                <div className={cx('info')}>
                    <h3>Contact</h3>
                    <h4>motiontrend@test.com</h4>
                </div>
                <div className={cx('media-and-copyright')}>
                    <h4 className={cx('copy-right')}>@ Motiontrend. All rights reserved.</h4>
                    <div className={cx('media')}>
                        <InstaIcon />
                        <FbIcon />
                        <YoutubeIcon />
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('menu')}>
                    <h4 className={cx('item')}></h4>
                </div>
                <div className={cx('logo')}></div>
            </div>
        </footer>
    );
}

export default Footer;
