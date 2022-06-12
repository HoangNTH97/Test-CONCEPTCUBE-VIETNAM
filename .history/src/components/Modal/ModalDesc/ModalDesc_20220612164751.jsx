import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './ModalDesc.module.scss';

const cx = classNames.bind(styles);

ModalDesc.propTypes = {};

function ModalDesc(props) {
    return (
        <div className={cx('desc')}>
            <p>
                Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.
                Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.
                Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.
                Hello. I ’m Kim Aeyong. This is my first portfolio movement. Thank you very much.
            </p>
        </div>
    );
}

export default ModalDesc;
