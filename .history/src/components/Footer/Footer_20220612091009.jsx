import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer className={cx('footer')}>
            <div className={cx('top')}>
                <div className={cx('info')}>
                    <h3>Contact</h3>
                    <h4>motiontrend@test.com</h4>
                </div>
                <div className={cx('logo-and-copyright')}></div>
            </div>
            <div className={cx('bottom')}></div>
        </footer>
    );
}

export default Footer;
