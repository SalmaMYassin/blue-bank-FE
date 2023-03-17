// assets
import { IconUser } from '@tabler/icons';

// constant
const icons = { IconUser };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const account = {
    id: 'account',
    title: 'Account',
    type: 'group',
    children: [
        {
            id: 'account',
            title: 'Account',
            type: 'item',
            url: '/account',
            icon: icons.IconUser,
            breadcrumbs: false
        }
    ]
};

export default account;
