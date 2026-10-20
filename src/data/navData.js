// `children` become the dropdown (desktop) and the accordion (mobile drawer).
export const navLinks = [
  { to: '/', label: 'Home' },
  {
    to: '/about',
    label: 'About',
    children: [
      { to: '/about', label: 'About ZMAX' },
      { to: '/team', label: 'Our Team' },
      { to: '/disclaimer', label: 'Disclaimer' },
    ],
  },
  {
    to: '/business',
    label: 'Business',
    children: [
      { to: '/business', label: 'Business Model' },
      { to: '/business', label: '3D NFT Marketplace' },
      { to: '/business', label: 'Fund Raising' },
    ],
  },
  {
    to: '/metaverse',
    label: 'Metaverse',
    children: [
      { to: '/metaverse', label: 'ZMAX Metaverse' },
      { to: '/metaverse', label: 'Play-To-Earn Gaming' },
      { to: '/metaverse', label: 'VR & AR Gaming' },
    ],
  },
  {
    to: '/token',
    label: 'Token',
    children: [
      { to: '/token', label: 'ZMAX Token' },
      { to: '/token', label: 'Token Economy' },
      { to: '/contact', label: 'Join the Whitelist' },
    ],
  },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/team', label: 'Team' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export const ecosystemLinks = [
  { to: '/metaverse', label: 'Play-To-Earn Gaming' },
  { to: '/business', label: '3D NFT Marketplace' },
  { to: '/metaverse', label: 'ZMAX Metaverse' },
  { to: '/metaverse', label: 'VR & AR Gaming' },
  { to: '/token', label: 'ZMAX Token' },
  { to: '/business', label: 'Fund Raising' },
];

export const companyLinks = [
  { to: '/about', label: 'About ZMAX' },
  { to: '/team', label: 'Our Team' },
  { to: '/roadmap', label: 'Roadmap' },
  { to: '/faq', label: 'FAQ' },
  { to: '/disclaimer', label: 'Disclaimer' },
];


export const accountLinks = [
  { to: '/register', label: 'Sign Up' },
  { to: '/login', label: 'Login' },
];

export const whitepaper = {
  label: 'White Paper',
  url: '/assets/ZOHOMAX white paper - 2026.pdf', 
};