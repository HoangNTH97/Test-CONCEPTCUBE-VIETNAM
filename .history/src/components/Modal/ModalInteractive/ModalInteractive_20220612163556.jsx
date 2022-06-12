import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from '/ModalInteractive.module';
import { LikeIcon } from '../../Icon/icons';

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
                    <LikeIcon /> 1,688
                </div>
                <div className={cx('view')}></div>
                <div className={cx('user')}></div>
            </div>
        </div>
    );
}

export default ModalInteractive;
