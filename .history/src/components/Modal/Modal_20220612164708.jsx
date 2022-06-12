import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './Modal.module.scss';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../Icon/icons';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalVideo from './ModalVideo/ModalVideo';
import img1 from '../../assets/image/modal_img1.jpg';
import img2 from '../../assets/image/modal_img2.jpg';
import img3 from '../../assets/image/modal_img3.jpg';
import ModalInteractive from './ModalInteractive/ModalInteractive';

const cx = classnames.bind(styles);
Modal.propTypes = {};

function Modal(props) {
    const [close, setClose] = useState(false);
    return (
        <div className={cx('modal', close ? 'modal-none' : '')}>
            <div onClick={() => setClose(true)} className={cx('close')}>
                <CloseIcon />
            </div>

            <div className={cx('container')}>
                <div className={cx('left-icon')}>
                    <ArrowLeftIcon />
                </div>
                <div className={cx('content')}>
                    <ModalHeader />
                    <ModalVideo />

                    <div className={cx('modal-img')}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>

                    <ModalInteractive />
                </div>
                <div className={cx('right-icon')}>
                    <ArrowRightIcon />
                </div>
            </div>
        </div>
    );
}

export default Modal;
