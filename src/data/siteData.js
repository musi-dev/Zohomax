import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaRedditAlien, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

// One place for every contact detail + social link on the site.
export const contact = {
  company: 'ZOHOMAX',
  email: 'zohomaxcoin@gmail.com',
  city: 'Malta',
  address: ['Edge Water Business Complex', 'Triq Elija Zammit Giljan,', 'STJ 3120, Malta.'],
};

export const socials = [
  { icon: FaFacebookF, label: 'Facebook', handle: '@zohomax.official', href: 'https://www.facebook.com/zohomax.official' },
  { icon: FaInstagram, label: 'Instagram', handle: '@zohomax_', href: 'https://www.instagram.com/zohomax_/' },
  { icon: FaXTwitter, label: 'X', handle: '@zohomax', href: 'https://x.com/zohomax' },
  { icon: FaTiktok, label: 'TikTok', handle: '@zohomax_', href: 'https://www.tiktok.com/@zohomax_' },
  { icon: FaYoutube, label: 'YouTube', handle: '@zohomax', href: 'https://www.youtube.com/@zohomax' },
  { icon: FaRedditAlien, label: 'Reddit', handle: 'u/zohomax', href: 'https://www.reddit.com/user/zohomax/' },
  { icon: FaLinkedinIn, label: 'LinkedIn', handle: 'ZOHOMAX', href: 'https://www.linkedin.com/company/zohomax/' },
];
