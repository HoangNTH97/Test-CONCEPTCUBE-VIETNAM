import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalComment.module.scss';

const cx = classnames.bind(styles);

ModalComment.propTypes = {};

function ModalComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment')}></div>
        </div>
    );
}

export default ModalComment;
