// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const overview = {
    id: 'overview',
    title: 'Overview',
    type: 'group',
    children: [
        {
            id: 'overview',
            title: 'Overview',
            type: 'item',
            url: '/overview',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default overview;
