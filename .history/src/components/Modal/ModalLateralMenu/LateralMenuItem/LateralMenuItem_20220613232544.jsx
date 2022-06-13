import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './LateralMenuItem.module.scss';

const cx = classnames.bind(styles);

LateralMenuItem.propTypes = {};

function LateralMenuItem(props) {
    return <div className={cx('box')}></div>;
}

export default LateralMenuItem;
