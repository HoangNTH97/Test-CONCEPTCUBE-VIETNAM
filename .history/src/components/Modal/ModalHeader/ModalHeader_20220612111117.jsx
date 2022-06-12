import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalHeader.module.scss';

const cx = classnames.bind(styles);

ModalHeader.propTypes = {};

function ModalHeader() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <div className={cx('avatar')}></div>
                <div className={cx('info')}>
                    <h1>The first portfolio movement.</h1>
                </div>
            </div>
        </div>
    );
}

export default ModalHeader;
