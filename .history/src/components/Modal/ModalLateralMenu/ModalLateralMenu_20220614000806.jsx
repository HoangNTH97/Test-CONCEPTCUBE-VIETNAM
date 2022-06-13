import { AddIcon2, LikeIcon, PageIcon } from '../../Icon/icons';
import LateralMenuItem from './LateralMenuItem/LateralMenuItem';
import classnames from 'classnames/bind';

ModalLateralMenu.propTypes = {};

function ModalLateralMenu() {
    return (
        <div className={cx('lateral-menu')}>
            <LateralMenuItem icon={<PageIcon />}>Page</LateralMenuItem>
            <LateralMenuItem icon={<LikeIcon />}>Like</LateralMenuItem>
            <LateralMenuItem icon={<AddIcon2 />}>Add</LateralMenuItem>
            <LateralMenuItem icon={<PageIcon />}>Share</LateralMenuItem>
        </div>
    );
}

export default ModalLateralMenu;
