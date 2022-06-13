import { AddIcon2, LikeIcon, PageIcon } from '../../Icon/icons';
import LateralMenuItem from './LateralMenuItem/LateralMenuItem';

ModalLateralMenu.propTypes = {};

function ModalLateralMenu() {
    return (
        <div>
            <LateralMenuItem icon={<PageIcon />}>Page</LateralMenuItem>
            <LateralMenuItem icon={<LikeIcon />}>Like</LateralMenuItem>
            <LateralMenuItem icon={<AddIcon2 />}>Add</LateralMenuItem>
            <LateralMenuItem icon={<PageIcon />}>Share</LateralMenuItem>
        </div>
    );
}

export default ModalLateralMenu;
