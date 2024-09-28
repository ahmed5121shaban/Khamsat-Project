import type { MenuItemType } from 'src/app/core/models'

export const bookingHomeMenuItems: MenuItemType[] = [
   {
  key: 'hotel-home',
   label: 'Hotel',
    url: '/hotels/home',
    icon: 'fa-solid fa-hotel',
   },
  // {
  //   key: 'flight-home',
  //   label: 'Flight',
  //   url: '/flights/home',
  //   icon: 'fa-solid fa-plane',
  // },
  // {
  //   key: 'tour-home',
  //   label: 'Tour',
  //   url: '/tours/home',
  //   icon: 'fa-solid fa-earth-americas',
  // },
  // {
  //   key: 'cabs-home',
  //   label: 'Cab',
  //   url: '/cabs/home',
  //   icon: 'fa-solid fa-car',
  // },
]

export const USER_PROFILE_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc-user-profile',
    label: 'My Profile',
    url: '/user/profile',
    parentKey: 'acc-user',
    icon: 'bi bi-person',
  },
  // {
  //   key: 'acc-user-bookings',
  //   label: 'My Bookings',
  //   url: '/user/bookings',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-ticket-perforated',
  // },
  // {
  //   key: 'acc-user-travelers',
  //   label: 'Travelers',
  //   url: '/user/travelers',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-people',
  // },
  // {
  //   key: 'acc-user-payment-details',
  //   label: 'Payment Details',
  //   url: '/user/payment-details',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-wallet',
  // },
  // {
  //   key: 'acc-user-wishlist',
  //   label: 'Wishlist',
  //   url: '/user/wishlist',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-heart',
  // },
  {
    key: 'acc-user-settings',
    label: 'Settings',
    url: '/user/settings',
    parentKey: 'acc-user',
    icon: 'bi bi-gear',
  },
  // {
  //   key: 'acc-user-delete',
  //   label: 'Delete Profile',
  //   url: '/user/delete-profile',
  //   parentKey: 'acc-user',
  //   icon: 'bi bi-trash',
  // },
]

export const AGENT_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'acc--dashboard',
    label: 'Overview',
    url: '/agent/dashboard',
    parentKey: 'acc-agent',
    icon: 'bi bi-house-door',
  },
  {
    key: 'acc-agent-bookings',
    label: 'Booking List',
    url: '/agent/bookings',
    parentKey: 'acc-agent',
    icon: 'bi bi-bookmark-heart',
  },
  {
    key: 'acc-agent-listings',
    label: 'Transaction',
    url: '/agent/listings',
    parentKey: 'acc-agent',
    icon: 'bi bi-journals',
  },

  {
    key: 'acc-agent-activities',
    label: 'Reports',
    url: '/agent/activities',
    parentKey: 'acc-agent',
    icon: 'fa-regular fa-file-lines',
  },
  {
    key: 'acc-agent-earnings',
    label: 'Reward',
    url: '/agent/earnings',
    parentKey: 'acc-agent',
    icon: 'bi bi-graph-up-arrow',
  },
  {
    key: 'acc-agent-reviews',
    label: 'Manage Stuff',
    url: '/agent/reviews',
    parentKey: 'acc-agent',
    icon: 'fa-solid fa-clipboard-user',
  },
  {
    key: 'acc-agent-settings',
    label: 'Edit Profile',
    url: '/agent/settings',
    parentKey: 'acc-agent',
    icon: 'bi bi-gear',
  },
  {
    key: 'acc-agent-settings',
    label: 'Messages',
    url: '/agent/settings',
    parentKey: 'acc-agent',
    icon: 'fa-regular fa-envelope',
  },
]

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    key: 'pages-title',
    label: 'Pages',
    isSection: true,
  },
  {
    key: 'bookings',
    label: 'Bookings',
    children: [
      {
        key: 'bookings-list',
        label: 'Booking List',
        url: '/admin/bookings/list',
        parentKey: 'bookings',
      },
      {
        key: 'bookings-detail',
        label: 'Booking Detail',
        url: '/admin/bookings/detail',
        parentKey: 'bookings',
      },
    ],
  },
  {
    key: 'guests',
    label: 'Guests',
    children: [
      {
        key: 'guests-list',
        label: 'Guest List',
        url: '/admin/guests/list',
        parentKey: 'guests',
      },
      {
        key: 'guests-detail',
        label: 'Guest Detail',
        url: '/admin/guests/detail',
        parentKey: 'guests',
      },
    ],
  },
  {
    key: 'agents',
    label: 'Agents',
    children: [
      {
        key: 'agents-list',
        label: 'Agent List',
        url: '/admin/agents/list',
        parentKey: 'agents',
      },
      {
        key: 'agents-detail',
        label: 'Agent Detail',
        url: '/admin/agents/detail',
        parentKey: 'agents',
      },
    ],
  },
  {
    key: 'reviews',
    label: 'Reviews',
    url: '/admin/reviews',
  },
  {
    key: 'earnings',
    label: 'Earnings',
    url: '/admin/earnings',
  },
  {
    key: 'admin-settings',
    label: 'Admin Settings',
    url: '/admin/settings',
  },
  {
    key: 'admin-auth',
    label: 'Authentication',
    children: [
      {
        key: 'auth-sign-up',
        label: 'Sign Up',
        url: '/auth/sign-up',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-sign-in',
        label: 'Sign in',
        url: '/auth/sign-in',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forgot Password',
        url: '/auth/forgot-password',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-two-factor-authentication',
        label: 'Two Factor Authentication',
        url: '/auth/two-factor-auth',
        parentKey: 'admin-auth',
      },
      {
        key: 'auth-not-found',
        label: 'Error 404',
        url: '/not-found',
        target: '_blank',
        parentKey: 'admin-auth',
      },
    ],
  },
]

export const HELP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'help-center',
    label: 'Help Center',
    isTitle: true,
    children: [
      {
        key: 'helps-center-page',
        label: 'Help Center',
        url: '/help/center',
        parentKey: 'help-center',
      },
      {
        key: 'helps-detail-page',
        label: 'Help Detail',
        url: '/help/detail',
        parentKey: 'help-center',
      },
    ],
  },
  {
    key: 'helps-privacy-policy',
    label: 'Privacy Policy',
    url: '/help/privacy-policy',
    isTitle: true,
  },
  {
    key: 'helps-service',
    label: 'Terms of Service',
    url: '/help/service',
    isTitle: true,
  },
]

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'Search',
    label: 'Search',
    url: '/hotels/list',
    parentKey: 'hotels',

  },
  {
    key: 'Manage Order',
    label: 'Manage Order',
    url: '/agent/dashboard',
    parentKey: 'hotels',
  },
  {
    key: 'Reporting',
    label: 'Reporting',
    url: '/agent/activities',
    parentKey: 'hotels',

  },
]
