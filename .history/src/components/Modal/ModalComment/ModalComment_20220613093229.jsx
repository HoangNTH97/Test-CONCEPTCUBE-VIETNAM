import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalComment.module.scss';

const cx = classnames.bind(styles);

ModalComment.propTypes = {};

function ModalComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-left')}>
                <h4 className={cx('comment-title')}>Comments</h4>
                <div className={cx('comment-input')}>
                    <input type="text" placeholder="Write a comment now......" />
                </div>
                <div className={cx('comment-list')}>
                    <div className={cx('comment-item')}>
                        <div className={cx('comment-inf')}>
                            <div className={cx('info')}></div>
                            <div className={cx('remove')}></div>
                        </div>
                        <div className={cx('comment-content')}>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className={cx('comment-more')}></div>
            </div>

            <div className={cx('comment-right')}>
                <div className={cx('Owner')}>
                    <div className={cx('avatar')}></div>
                    <div className={cx('location')}>
                        <p>Korea, Republic of</p>
                    </div>
                </div>

                <div className={cx('interactive')}></div>

                <div className={cx('field')}>
                    <p>Creative field</p>
                </div>
            </div>
        </div>
    );
}

export default ModalComment;
