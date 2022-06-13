import React from 'react';
import PropTypes from 'prop-types';
import LateralMenuItem from './LateralMenuItem/LateralMenuItem';
import { AddIcon, LikeIcon, PageIcon } from '../../Icon/icons';

ModalLateralMenu.propTypes = {};

function ModalLateralMenu() {
    return (
        <div>
            <LateralMenuItem icon={<PageIcon />}>Page</LateralMenuItem>
            <LateralMenuItem icon={<LikeIcon />}>Like</LateralMenuItem>
            <LateralMenuItem icon={<AddIcon />}>Add</LateralMenuItem>
            <LateralMenuItem icon={<PageIcon />}>Share</LateralMenuItem>
        </div>
    );
}

export default ModalLateralMenu;
