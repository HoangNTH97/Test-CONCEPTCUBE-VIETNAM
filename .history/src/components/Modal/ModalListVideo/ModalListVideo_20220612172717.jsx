import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalListVideo.module.scss';

const cx = classnames.bind(styles);

ModalListVideo.propTypes = {};

function ModalListVideo(props) {
    return (
        <div className={cx('list-video')}>
            <div className={cx('infomation')}></div>
        </div>
    );
}

export default ModalListVideo;
