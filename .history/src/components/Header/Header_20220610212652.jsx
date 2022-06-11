import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}></div>
            </div>

            <div className={cx('search')}>
                <input type="text" placeholder="Search for motion trend......" />
            </div>

            <div className={cx('action')}></div>
        </header>
    );
}

export default Header;
