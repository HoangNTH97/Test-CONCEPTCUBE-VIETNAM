import classnames from 'classnames/bind';
import { useState } from 'react';

import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../Icon/icons';
import styles from './Modal.module.scss';
import ModalComment from './ModalComment/ModalComment';
import ModalDesc from './ModalDesc/ModalDesc';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalImg from './ModalImg/ModalImg';
import ModalInteractive from './ModalInteractive/ModalInteractive';
import ModalListVideo from './ModalListVideo/ModalListVideo';
import ModalVideo from './ModalVideo/ModalVideo';

const cx = classnames.bind(styles);
Modal.propTypes = {};

function Modal({ handleOpen }) {
    const [close, setClose] = useState(handleOpen);
    return (
        <div className={cx('modal', close ? 'modal-none' : '')}>
            <div
                onClick={() => {
                    setClose(true);
                }}
                className={cx('close')}
            >
                <CloseIcon />
            </div>

            <div className={cx('container')}>
                <div className={cx('left-icon')}>
                    <ArrowLeftIcon />
                </div>
                <div className={cx('content')}>
                    <ModalHeader />
                    <ModalVideo />
                    <ModalDesc />
                    <ModalImg />
                    <ModalInteractive />
                    <ModalListVideo />
                    <ModalComment />
                </div>
                <div className={cx('right-icon')}>
                    <ArrowRightIcon />
                </div>
            </div>
        </div>
    );
}

export default Modal;
