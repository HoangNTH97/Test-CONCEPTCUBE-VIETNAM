import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalListVideo.module.scss';

const cx = classnames.bind(styles);

ModalListVideo.propTypes = {};

function ModalListVideo(props) {
    return (
        <div className={cx('list-video')}>
            <div className={cx('infomation')}>
                <div className={cx('avatar')}></div>
                <h4>Kim Aeyong</h4>
            </div>
        </div>
    );
}

export default ModalListVideo;
