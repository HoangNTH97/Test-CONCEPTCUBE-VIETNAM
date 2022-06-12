import classNames from 'classnames/bind';
import { useRef } from 'react';
import logo from '../../assets/image/logoicon.png';
import searchIcon from '../../assets/image/white-search-icon.svg';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

Header.propTypes = {};

function Header() {
    const inputRef = useRef();

    return (
        <header className={cx('header')}>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="" />
                    </div>
                    <Button text>Discover</Button>
                    <Button text>Job</Button>
                </div>

                <div className={cx('search')}>
                    <input ref={inputRef} type="text" placeholder="Search for motion trend......" />
                </div>

                <div className={cx('action')}>
                    <img onClick={() => inputRef.current.focuc()} src={searchIcon} alt="" />
                    <Button text>Login</Button>
                    <Button text> Sign Up</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
