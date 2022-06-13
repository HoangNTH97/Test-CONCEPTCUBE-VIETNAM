import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '../Icon/icons';
import styles from './Modal.module.scss';
import ModalComment from './ModalComment/ModalComment';
import ModalDesc from './ModalDesc/ModalDesc';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalImg from './ModalImg/ModalImg';
import ModalInteractive from './ModalInteractive/ModalInteractive';
import ModalLateralMenu from './ModalLateralMenu/ModalLateralMenu';
import ModalListVideo from './ModalListVideo/ModalListVideo';
import ModalVideo from './ModalVideo/ModalVideo';

const cx = classnames.bind(styles);
Modal.propTypes = {
    handleOpen: PropTypes.func,
    open: PropTypes.bool,
};

function Modal({ handleOpen, open, videoList }) {
    return (
        <div className={cx('modal', open ? 'modal-none' : '')}>
            <div
                onClick={() => {
                    handleOpen(true);
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
                    <ModalListVideo videoList={videoList} />
                    <ModalComment />
                    <div className={cx('lateral')}>
                        <ModalLateralMenu />
                    </div>
                </div>
                <div className={cx('right-icon')}>
                    <ArrowRightIcon />
                </div>
            </div>
        </div>
    );
}

export default Modal;
