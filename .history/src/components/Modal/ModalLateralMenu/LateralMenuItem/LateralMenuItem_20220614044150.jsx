import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './LateralMenuItem.module.scss';

const cx = classnames.bind(styles);

LateralMenuItem.propTypes = {
    icon: PropTypes.object,
    children: PropTypes.string,
};

function LateralMenuItem({ icon, children }) {
    return (
        <div className={cx('box')}>
            <div className={cx('icon')}>{icon}</div>
            <p>{children}</p>
        </div>
    );
}

export default LateralMenuItem;
