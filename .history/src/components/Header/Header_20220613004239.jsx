import classNames from 'classnames/bind';
import logo from '../../assets/image/logoicon.png';
import searchIcon from '../../assets/image/white-search-icon.svg';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                </div>
                <Button text>Discover</Button>
                <Button text>Job</Button>
            </div>

            <div className={cx('search')}>
                <input type="text" placeholder="Search for motion trend......" />
            </div>

            <div className={cx('action')}>
                <img src={searchIcon} alt="" />
                <Button text>Login</Button>
                <Button text> Sign Up</Button>
            </div>
        </header>
    );
}

export default Header;
