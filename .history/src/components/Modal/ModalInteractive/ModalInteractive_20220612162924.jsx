import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from '/ModalInteractive.module.scss';

const cx = classnames.bind(styles);

ModalInteractive.propTypes = {};

function ModalInteractive(props) {
    return (
        <div className={cx('interactive')}>
            <div className={cx('title')}>
                <h2>The first portfolio movement.</h2>
            </div>
        </div>
    );
}

export default ModalInteractive;
