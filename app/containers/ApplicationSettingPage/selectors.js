import {createSelector} from 'reselect';

// Select Menu
const selectMenu = (state) => state.get('organization');
const makeSelectMenu = () => createSelector(
    selectMenu,
    (organizationState) => organizationState.get('menu')
);

export {
    selectMenu,
    makeSelectMenu
};
