import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

Button.propTypes = {};

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    disabled = false,
    text = false,
    getApp = false,
    login = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps, // này để sử dụng  1 số prop mà ta truyền thêm
    }; // tạo 1 cái props để sử dụng nội bộ, ta truyền các props ở ngoài vào và truyền prop xuống dưới (...props)

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link; // nếu xài to ở đây sẽ là Link nội bộ nên sẽ chuyển đến các trang nội bộ
    } else if (href) {
        props.href = href;
        Comp = 'a'; // dùng href sẽ chuyển được đến các trang bên ngoài
    }
    // nếu có các thuộc tính này thì nó sẽ tự động chuyển thành thẻ tương ứng

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        text,
        disabled,
        // khi props primary này được truyền thì nó sẽ add thêm 1 cái class primary vào
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
