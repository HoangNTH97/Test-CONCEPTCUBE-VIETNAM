import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-top')}></div>
            <div className={cx('footer-bottom')}></div>
        </footer>
    );
}

export default Footer;
