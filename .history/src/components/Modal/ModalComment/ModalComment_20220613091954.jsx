import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalComment.module.scss';

const cx = classnames.bind(styles);

ModalComment.propTypes = {};

function ModalComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment')}>
                <h4 className={cx('title')}>Comments</h4>
                <div className={cx('input')}>
                    <input type="text" placeholder="Write a comment now......" />
                </div>
            </div>
        </div>
    );
}

export default ModalComment;
