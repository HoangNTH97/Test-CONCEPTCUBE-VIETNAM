import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import logo from '../../assets/image/logoicon.png';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>
                <Button>Discover</Button>
                <Button>Job</Button>
            </div>

            <div className={cx('search')}>
                <input type="text" placeholder="Search for motion trend......" />
            </div>

            <div className={cx('action')}></div>
        </header>
    );
}

export default Header;
