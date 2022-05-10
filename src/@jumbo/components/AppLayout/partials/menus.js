import React from 'react';
import { PostAdd, Group, Bookmark  } from '@material-ui/icons';
import IntlMessages from '../../../utils/IntlMessages';

const dashboardsMenus = [
  {
    name: <IntlMessages id={'pages.samplePage'} />,
    type: 'item',
    icon: <PostAdd />,
    link: '/dashboard',
  },

];

const MenuStat = [
  {
    name: <IntlMessages id={'pages.statUsers'} />,
    type: 'item',
    icon: <Group />,
    link: '/statistique/users',
  },
  {
    name: <IntlMessages id={'pages.statProjet'} />,
    type: 'item',
    icon: <Bookmark />,
    link: '/statistique/projets',
  },

];

export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'section',
    children: dashboardsMenus
  },
  {
    name: <IntlMessages id={'sidebar.statistique'} />,
    type: 'section',
    children: MenuStat
  },
];

export const horizontalDefaultNavs = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: dashboardsMenus
  },
  {
    name: <IntlMessages id={'sidebar.statistique'} />,
    type: 'collapse',
    children: MenuStat
  },
];

export const minimalHorizontalMenus = [
  {
    name: <IntlMessages id={'sidebar.main'} />,
    type: 'collapse',
    children: dashboardsMenus
  },
  {
    name: <IntlMessages id={'sidebar.statistique'} />,
    type: 'collapse',
    children: MenuStat
  },
];

