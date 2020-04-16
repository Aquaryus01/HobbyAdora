export interface MenuItemModel {
    name: string;
    url?: string;
    action?: () => {};
    children: MenuItemModel[];
}
