import {
  FaGamepad, FaCubes, FaGlobeAmericas, FaVrCardboard, FaChartLine, FaWallet,
  FaShieldAlt, FaProjectDiagram, FaCoins, FaExchangeAlt, FaRocket, FaLock,
  FaVoteYea, FaLayerGroup, FaEye, FaLightbulb, FaBullseye,
} from 'react-icons/fa';

export const stats = [
  { icon: FaGlobeAmericas, end: 190, decimals: 0, prefix: '$', suffix: 'B', label: 'Blockchain gaming market' },
  { icon: FaCubes, end: 10.7, decimals: 1, prefix: '$', suffix: 'B', label: 'NFT sales in Oct 2021' },
  { icon: FaWallet, end: 70, decimals: 0, prefix: '', suffix: 'M+', label: 'Active crypto wallets' },
  { icon: FaChartLine, end: 35, decimals: 0, prefix: '$', suffix: 'B', label: 'DeFi tokens in TVL' },
];

// strip that overlaps the bottom of the hero
export const features = [
  { icon: FaCubes, title: 'Decentralized Gaming Ecosystem', text: 'Play. Own. Earn.' },
  { icon: FaShieldAlt, title: 'NFTs & Digital Assets', text: 'Real Value. Digital Ownership.' },
  { icon: FaProjectDiagram, title: 'Web3 Economy', text: 'Build a Better Tomorrow.' },
  { icon: FaChartLine, title: 'Community Driven', text: 'Together We Grow.' },
];

export const services = [
  {
    icon: FaGamepad,
    title: 'Web3 Gaming',
    text: 'Single player and multiplayer web3 games connected to a wallet, with instant reward payments.',
    to: '/metaverse',
  },
  {
    icon: FaCubes,
    title: '3D NFT Marketplace',
    text: 'In-game NFT elements, characters, lands and art that add revenue to the creator on every trade.',
    to: '/business',
  },
  {
    icon: FaGlobeAmericas,
    title: 'ZMAX Metaverse',
    text: 'A space-themed interactive 3D universe to explore, collect assets and meet other players.',
    to: '/metaverse',
  },
  {
    icon: FaVrCardboard,
    title: 'VR & AR Gaming',
    text: 'Virtual and augmented reality experiences that take the ZMAX ecosystem to the next level.',
    to: '/metaverse',
  },
];

// Vision / Missions / Goals (short versions of the white-paper text)
export const mvItems = [
  { icon: FaEye, title: 'Vision', text: 'To be the only truly decentralized Metaverse, a space-themed world that merges with a cryptocurrency-based economy.' },
  { icon: FaLightbulb, title: 'Missions', text: 'Combine gaming and blockchain to build a reliable passive economy and give token holders an identity in this new gaming world.' },
  { icon: FaBullseye, title: 'Goals', text: 'Bring players, developers and creators onto one panel to build, explore and share a common economy.' },
];

// Token orbit: angle = position on the arc (90 = top, 180 = left, 0 = right).
// Every value comes from the Token page / white paper.
export const tokenNodes = [
  { angle: 90, icon: FaCoins, label: 'Token', text: 'ZOHOMAX (ZMAX)' },
  { angle: 130, icon: FaExchangeAlt, label: 'Role', text: 'Medium of exchange inside the ZMAX Metaverse' },
  { angle: 50, icon: FaVoteYea, label: 'Governance', text: 'Token holders vote and submit proposals' },
  { angle: 165, icon: FaRocket, label: 'Launch', text: 'Public launch on PancakeSwap v2 (Q3 2026)' },
  { angle: 15, icon: FaWallet, label: 'Private sale', text: 'Whitelist program, around $1 Million target' },
  { angle: 195, icon: FaLock, label: 'Liquidity reserve', text: '30% reserved for 4 years when the listing phase begins' },
  { angle: -15, icon: FaLayerGroup, label: 'Supply', text: '100% of token reserved into existence unless burning is required' },
];
