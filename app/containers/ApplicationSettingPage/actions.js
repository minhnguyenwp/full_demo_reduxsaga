export const SELECT_MENU = 'SELECT_MENU';

export function selectMenu(menu) {
    return {
        type: SELECT_MENU,
        menu
    };
}
