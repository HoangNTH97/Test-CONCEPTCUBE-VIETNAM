import React from 'react';
import PropTypes from 'prop-types';
import LateralMenuItem from './LateralMenuItem/LateralMenuItem';
import { AddIcon, AddIcon2, LikeIcon, PageIcon, ShareIcon } from '../../Icon/icons';

ModalLateralMenu.propTypes = {};

function ModalLateralMenu() {
    return (
        <div>
            <LateralMenuItem icon={<PageIcon />}>Page</LateralMenuItem>
            <LateralMenuItem icon={<LikeIcon />}>Like</LateralMenuItem>
            <LateralMenuItem icon={<AddIcon2 />}>Add</LateralMenuItem>
            <LateralMenuItem icon={<ShareIcon />}>Share</LateralMenuItem>
        </div>
    );
}

export default ModalLateralMenu;
