import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalComment.module.scss';
import Button from '../../Button/Button';
import profile1 from '../../../assets/image/commant-profile-1.jpg';
import { DeleteIcon, MoreIcon, ReportIcon1 } from '../../Icon/icons';

const cx = classnames.bind(styles);

ModalComment.propTypes = {};

function ModalComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-left')}>
                <h4 className={cx('comment-title')}>Comments</h4>
                <div className={cx('comment-input')}>
                    <input type="text" placeholder="Write a comment now......" />
                    <Button primarySmall className={cx('btn')}>
                        icon
                    </Button>
                </div>
                <div className={cx('comment-list')}>
                    <div className={cx('comment-item')}>
                        <div className={cx('comment-inf')}>
                            <div className={cx('info')}>
                                <img src={profile1} alt="" />
                                <div className={cx('inf')}>
                                    <h5>Kim Aeyong</h5>
                                    <p>2020. 07. 26</p>
                                </div>
                            </div>
                            <div className={cx('remove')}>
                                <DeleteIcon />
                                <ReportIcon1 />
                            </div>
                        </div>
                        <div className={cx('comment-content')}>
                            <p>
                                Amazing work you have here. feels like an alternative reality with
                                that much saturation.. love it! Amazing work you have here feels
                                like an alternative reality with that much saturation.. love it!
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('comment-more')}>
                    <Button outLine={} rightIcon={<MoreIcon />}>More comments</Button>
                </div>
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

                <div className={cx('btn')}></div>

                <div className={cx('report')}></div>
            </div>
        </div>
    );
}

export default ModalComment;
