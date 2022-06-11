import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames/bind';

import styles from './TutorialVideoList.module.scss';

const cx = className.bind(styles);

TutorialVideoList.propTypes = {};

function TutorialVideoList(props) {
    return <div className={cx('video-tutorial')}></div>;
}

export default TutorialVideoList;
