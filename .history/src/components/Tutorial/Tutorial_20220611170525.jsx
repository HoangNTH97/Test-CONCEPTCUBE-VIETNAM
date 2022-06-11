import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Tutorial.module.scss';

const cx = classNames.bind(styles);

Tutorial.propTypes = {};

function Tutorial() {
    return <div className={cx('tutorial')}></div>;
}

export default Tutorial;
