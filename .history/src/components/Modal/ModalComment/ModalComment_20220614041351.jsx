import classnames from 'classnames/bind';

import profile1 from '../../../assets/image/commant-profile-1.jpg';
import profile2 from '../../../assets/image/profile-2.jpg';
import profile3 from '../../../assets/image/profile-3.jpg';
import profile4 from '../../../assets/image/profile-4.jpg';
import Button from '../../Button/Button';
import {
    BlackFollowIcon,
    DeleteIcon,
    EnterIcon,
    IllustratorIcon,
    LikeIcon,
    LocationIcon,
    MoreIcon2,
    PhotoshopIcon,
    PremiereIcon,
    ReportIcon1,
    ViewIcon,
} from '../../Icon/icons';
import styles from './ModalComment.module.scss';

const cx = classnames.bind(styles);

const commentList = [
    {
        id: 1,
        name: 'Kim Aeyong',
        time: '2020. 07. 26',
        avt: profile1,
        comment:
            'Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that muchsaturation.. love it!',
    },
    {
        id: 2,
        name: 'Kim Jimin',
        time: '2020. 07. 26',
        avt: profile2,
        comment:
            'Amazing work you have here. feels like an alternative reality with that much saturation.. love it!',
    },
    {
        id: 3,
        name: 'Im Junghan',
        time: '2020. 07. 26',
        avt: profile3,
        comment:
            'Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!',
    },
    {
        id: 4,
        name: 'Cayley',
        time: '2020. 07. 26',
        avt: profile4,
        comment:
            'Amazing work you have here. feels like an alternative reality with that much saturation.. love it!',
    },
    {
        id: 5,
        name: 'Kim Aeyong',
        time: '2020. 07. 26',
        avt: profile1,
        comment:
            'Amazing work you have here. feels like an alternative reality with that much saturation.. love it! Amazing work you have here feels like an alternative reality with that much saturation.. love it!',
    },
];

ModalComment.propTypes = {};

function ModalComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comment-left')}>
                <h4 className={cx('comment-title')}>Comments</h4>
                <div className={cx('comment-input')}>
                    <input type="text" placeholder="Write a comment now......" />
                    <Button primarySmall className={cx('btn')}>
                        <EnterIcon />
                    </Button>
                </div>
                <div className={cx('comment-list')}>
                    {commentList.map((item, index) => (
                        <div className={cx('comment-item')}>
                            <div className={cx('comment-inf')}>
                                <div className={cx('info')}>
                                    <img src={item.avt} alt="" />
                                    <div className={cx('inf')}>
                                        <h5>{item.name}</h5>
                                        <p>{item.time}</p>
                                    </div>
                                </div>
                                <div className={cx('remove')}>
                                    <DeleteIcon />
                                    <ReportIcon1 />
                                </div>
                            </div>
                            <div className={cx('comment-content')}>
                                <p>{item.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={cx('comment-more')}>
                    <Button className={cx('more')} outLine rightIcon={<MoreIcon2 />}>
                        More comments
                    </Button>
                </div>
            </div>

            <div className={cx('comment-right')}>
                <div className={cx('comment-right--info')}>
                    <div className={cx('owner')}>
                        <p>Owner</p>
                        <div className={cx('location')}>
                            <div className={cx('avatar')}>
                                <img src={profile1} alt="" />
                            </div>
                            <div className={cx('desc')}>
                                <h5>Kim Aeyong</h5>
                                <p>
                                    <LocationIcon />
                                    Korea, Republic of
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('interactive')}>
                    <div className={cx('interactive-item')}>
                        <div className={cx('title')}>
                            <h5>The first portfolio movement.</h5>
                        </div>

                        <div className={cx('feel')}>
                            <div className={cx('like')}>
                                <LikeIcon />
                                <p>18</p>
                            </div>
                            <div className={cx('view')}>
                                <ViewIcon />
                                <p>18</p>
                            </div>
                            <div className={cx('user')}>
                                <BlackFollowIcon />
                                <p>18</p>
                            </div>
                        </div>

                        <p className={cx('date')}>Publishing date : 2020.10.15</p>
                    </div>
                </div>

                <div className={cx('field')}>
                    <div className={cx('field-item')}>
                        <p>Creative field</p>
                        <div className={cx('field-icon')}>
                            <a href="https://apps.microsoft.com/store/detail/tutorial-for-premiere-pro-cc-pr/9NBG0Z62PPGL?hl=vi-vn&gl=VN">
                                <PremiereIcon />
                            </a>
                            <a href="https://apps.microsoft.com/store/detail/adobe-photoshop-express-image-editor-adjustments-filters-effects-borders/9WZDNCRFJ27N">
                                <PhotoshopIcon />
                            </a>
                            <a href="https://apps.microsoft.com/store/detail/tutorial-for-adobe-illustrator/9MX4B94D0MLZ">
                                <IllustratorIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('btn')}>
                    <div className={cx('btn-list')}>
                        <Button className={cx('btn-item')} outLine>
                            Editing
                        </Button>
                        <Button className={cx('btn-item')} outLine>
                            Camera action, Angle
                        </Button>
                        <Button className={cx('btn-item')} outLine>
                            Sound, Beat
                        </Button>
                        <Button className={cx('btn-item')} outLine>
                            Graphical{' '}
                        </Button>
                        <Button className={cx('btn-item')} outLine>
                            Experimental
                        </Button>
                        <Button className={cx('btn-item')} outLine>
                            Editing
                        </Button>
                    </div>
                </div>

                <div className={cx('report')}>
                    <div className={cx('report-item')}>
                        <Button leftIcon={<ReportIcon1 />} className={cx('report-btn')} outLine>
                            Report
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalComment;
