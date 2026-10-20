// All content images come from Unsplash (free to use).
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  vr: u('photo-1593508512255-86ab42a8e620'),
  vrAlt: u('photo-1622979135225-d2ba269cf1ac'),
  gaming: u('photo-1511512578047-dfb367046420'),
  space: u('photo-1446776811953-b23d57bd21aa'),
  crypto: u('photo-1639762681485-074b7f938ba0'),
  nft: u('photo-1639322537228-f710d846310a'),
  network: u('photo-1451187580459-43490279c0fa'),
  circuit: u('photo-1518770660439-4636190af475'),
  cyber: u('photo-1550751827-4bd374c3f58b'),
  gallery: u('photo-1518998053901-5348d3961a04'),
  teamwork: u('photo-1522071820081-009f0129c71c'),
  founder: u('photo-1560250097-0b93528c311a', 600),
};

export const PORTRAITS = [
  u('photo-1560250097-0b93528c311a', 700),
  u('photo-1507003211169-0a1dd7228f2d', 700),
  u('photo-1472099645785-5658abf4ff4e', 700),
  u('photo-1519085360753-af0119f7cbe7', 700),
  u('photo-1500648767791-00dcc994a43e', 700),
  u('photo-1438761681033-6461ffad8d80', 700),
];
