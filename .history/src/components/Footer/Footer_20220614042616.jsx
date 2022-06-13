import classnames from 'classnames/bind';

import logo from '../../assets/image/blacklogoicon.png';
import { ArrowDownIcon, FbIcon, InstaIcon, YoutubeIcon } from '../Icon/icons';
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('top')}>
                <div className={cx('info')}>
                    <h3>Contact</h3>
                    <h4>motiontrend@test.com</h4>
                </div>
                <div className={cx('media-and-copyright')}>
                    <h4 className={cx('copy-right')}>@ Motiontrend. All rights reserved.</h4>
                    <div className={cx('media')}>
                        <a href="">
                            <InstaIcon />
                        </a>
                        <a href="">
                            <FbIcon />
                        </a>

                        <a href="">
                            <YoutubeIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('menu')}>
                    <a href="" className={cx('item')}>
                        Introduction
                    </a>
                    <a href="" className={cx('item')}>
                        Terms of Service
                    </a>
                    <a href="" className={cx('item')}>
                        Language
                        <ArrowDownIcon />
                    </a>
                    <a href="" className={cx('item')}>
                        Customer Service
                    </a>
                </div>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
