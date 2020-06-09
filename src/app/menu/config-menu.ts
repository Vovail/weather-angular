export interface MenuItemConfig {
  label: string;
  path: string;
}

export const configMenu: MenuItemConfig[] = [
  { label: 'Today', path: '/' },
  { label: 'Hours', path: '/hours' },
  { label: '10 Days', path: '/tendays' },
];
