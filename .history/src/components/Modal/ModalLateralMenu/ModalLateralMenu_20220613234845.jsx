import React from 'react';
import PropTypes from 'prop-types';
import LateralMenuItem from './LateralMenuItem/LateralMenuItem';
import { PageIcon } from '../../Icon/icons';

ModalLateralMenu.propTypes = {};

function ModalLateralMenu() {
    return (
        <div>
            <LateralMenuItem icon={<PageIcon />}>Page</LateralMenuItem>
            <LateralMenuItem icon={<PageIcon />}>Like</LateralMenuItem>
            <LateralMenuItem icon={<PageIcon />}>Add</LateralMenuItem>
            <LateralMenuItem icon={<PageIcon />}>Share</LateralMenuItem>
        </div>
    );
}

export default ModalLateralMenu;
