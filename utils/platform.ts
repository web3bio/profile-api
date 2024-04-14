type SocialPlatform = {
  key: string;
  color?: string;
  icon?: string;
  label: string;
  urlPrefix?: string;
  ensText?: string[];
  dotbitText?: string[];
  system: PlatformSystem;
};

export enum PlatformSystem {
  web2 = 0,
  web3 = 1,
}

export enum PlatformType {
  ens = "ENS",
  dotbit = "dotbit",
  lens = "lens",
  ethereum = "ethereum",
  twitter = "twitter",
  nextid = "nextid",
  bitcoin = "bitcoin",
  keybase = "keybase",
  reddit = "reddit",
  github = "github",
  unstoppableDomains = "unstoppabledomains",
  ckb = "ckb",
  farcaster = "farcaster",
  space_id = "space_id",
  telegram = "telegram",
  instagram = "instagram",
  rss3 = "rss3",
  cyberconnect = "cyberconnect",
  opensea = "opensea",
  sybil = "sybil",
  discord = "discord",
  url = "url",
  website = "website",
  linkedin = "linkedin",
  dns = "dns",
  tron = "tron",
  hey = "hey",
  facebook = "facebook",
  threads = "threads",
  weibo = "weibo",
  youtube = "youtube",
  tiktok = "tiktok",
  bilibili = "bilibili",
  medium = "medium",
  mirror = "mirror",
  jike = "jike",
  nostr = "nostr",
  poap = "poap",
  dribbble = "dribbble",
  knn3 = "knn3",
  ethLeaderboard = "ethLeaderboard",
  the_graph = "the_graph",
  rpc_server = "rpc_server",
  twitter_hexagon = "twitter_hexagon",
  uniswap = "uniswap",
  degenscore = "degenscore",
  firefly = "firefly",
  solana = "solana",
  sns = "sns",
  mstdnjp = "mstdnjp",
  lobsters = "lobsters",
  hackernews = "hackernews",
  crossbell = "crossbell",
  minds = "minds",
}

export const PlatformData: { [key in PlatformType]: SocialPlatform } = {
  [PlatformType.twitter]: {
    key: PlatformType.twitter,
    color: "#4A99E9",
    icon: "icons/icon-twitter.svg",
    label: "Twitter",
    urlPrefix: "https://twitter.com/",
    ensText: ["com.twitter", "vnd.twitter", "twitter"],
    dotbitText: ["profile.twitter"],
    system: PlatformSystem.web2,
  },
  [PlatformType.ens]: {
    key: PlatformType.ens,
    color: "#5298FF",
    icon: "icons/icon-ens.svg",
    label: "ENS",
    urlPrefix: "https://app.ens.domains/search/",
    system: PlatformSystem.web3,
  },
  [PlatformType.ethereum]: {
    key: PlatformType.ethereum,
    color: "#3741ba",
    icon: "icons/icon-ethereum.svg",
    label: "Ethereum",
    urlPrefix: "https://etherscan.io/address/",
    system: PlatformSystem.web3,
  },
  [PlatformType.farcaster]: {
    key: PlatformType.farcaster,
    color: "#8a63d2",
    icon: "icons/icon-farcaster.svg",
    label: "Farcaster",
    urlPrefix: "https://warpcast.com/",
    ensText: ["farcaster"],
    system: PlatformSystem.web2,
  },
  [PlatformType.github]: {
    key: PlatformType.github,
    color: "#000000",
    icon: "icons/icon-github.svg",
    label: "GitHub",
    urlPrefix: "https://github.com/",
    ensText: ["com.github", "vnd.github"],
    dotbitText: ["profile.github"],
    system: PlatformSystem.web2,
  },
  [PlatformType.keybase]: {
    key: PlatformType.keybase,
    color: "#4162E2",
    icon: "icons/icon-keybase.svg",
    label: "Keybase",
    urlPrefix: "https://keybase.io/",
    ensText: ["io.keybase"],
    system: PlatformSystem.web2,
  },
  [PlatformType.lens]: {
    key: PlatformType.lens,
    color: "#6bc674",
    icon: "icons/icon-lens.svg",
    label: "Lens",
    urlPrefix: "https://www.lensfrens.xyz/",
    system: PlatformSystem.web3,
  },
  [PlatformType.nextid]: {
    key: PlatformType.nextid,
    color: "#000000",
    icon: "icons/icon-nextid.svg",
    label: "Next.ID",
    urlPrefix: "https://web3.bio/",
    dotbitText: ["profile.nextid"],
    system: PlatformSystem.web3,
  },
  [PlatformType.bitcoin]: {
    key: PlatformType.bitcoin,
    color: "#F7931A",
    icon: "icons/icon-bitcoin.svg",
    label: "Bitcoin",
    urlPrefix: "https://explorer.btc.com/btc/address/",
    system: PlatformSystem.web3,
  },
  [PlatformType.reddit]: {
    key: PlatformType.reddit,
    color: "#ff4500",
    icon: "icons/icon-reddit.svg",
    label: "Reddit",
    urlPrefix: "https://www.reddit.com/user/",
    ensText: ["com.reddit"],
    dotbitText: ["profile.reddit"],
    system: PlatformSystem.web2,
  },
  [PlatformType.space_id]: {
    key: PlatformType.space_id,
    color: "#71EBAA",
    icon: "icons/icon-spaceid.svg",
    label: "SPACE ID",
    urlPrefix: "https://space.id/search?query=",
    system: PlatformSystem.web3,
  },
  [PlatformType.unstoppableDomains]: {
    key: PlatformType.unstoppableDomains,
    color: "#2E65F5",
    icon: "icons/icon-unstoppabledomains.svg",
    label: "Unstoppable Domains",
    urlPrefix: "https://unstoppabledomains.com/search?searchTerm=",
    system: PlatformSystem.web3,
  },
  [PlatformType.ckb]: {
    key: PlatformType.ckb,
    color: "#000000",
    icon: "icons/icon-ckb.svg",
    label: "Nervos",
    urlPrefix: "https://explorer.nervos.org/address/",
    system: PlatformSystem.web3,
  },
  [PlatformType.telegram]: {
    key: PlatformType.telegram,
    color: "#0088cc",
    icon: "icons/icon-telegram.svg",
    label: "Telegram",
    ensText: ["org.telegram", "vnd.telegram", "VND.TELEGRAM"],
    dotbitText: ["profile.telegram"],
    urlPrefix: "https://t.me/",
    system: PlatformSystem.web2,
  },
  [PlatformType.instagram]: {
    key: PlatformType.instagram,
    color: "#EA3377",
    icon: "icons/icon-instagram.svg",
    label: "Instagram",
    ensText: ["com.instagram"],
    dotbitText: ["profile.instagram"],
    urlPrefix: "https://www.instagram.com/",
    system: PlatformSystem.web2,
  },
  [PlatformType.weibo]: {
    key: PlatformType.weibo,
    color: "#df2029",
    label: "Weibo",
    dotbitText: ["profile.weibo"],
    urlPrefix: "https://weibo.com/",
    system: PlatformSystem.web2,
  },
  [PlatformType.dotbit]: {
    key: PlatformType.dotbit,
    color: "#0e7dff",
    icon: "icons/icon-dotbit.svg",
    label: ".bit",
    urlPrefix: "https://data.did.id/",
    system: PlatformSystem.web3,
  },
  [PlatformType.rss3]: {
    key: PlatformType.rss3,
    color: "#3070F6",
    label: "RSS3",
    urlPrefix: "https://rss3.io/",
    system: PlatformSystem.web3,
  },
  [PlatformType.cyberconnect]: {
    key: PlatformType.cyberconnect,
    color: "#000000",
    icon: "icons/icon-cyberconnect.svg",
    label: "CyberConnect",
    urlPrefix: "https://link3.to/",
    system: PlatformSystem.web3,
  },
  [PlatformType.opensea]: {
    key: PlatformType.opensea,
    color: "#407FDB",
    icon: "icons/icon-opensea.svg",
    label: "OpenSea",
    ensText: [],
    urlPrefix: "https://opensea.io/",
    system: PlatformSystem.web3,
  },
  [PlatformType.sybil]: {
    key: PlatformType.sybil,
    color: "#4125E1",
    icon: "icons/icon-sybil.svg",
    label: "Sybil",
    urlPrefix: "https://sybil.org/",
    system: PlatformSystem.web3,
  },
  [PlatformType.discord]: {
    key: PlatformType.discord,
    color: "#5865f2",
    icon: "icons/icon-discord.svg",
    label: "Discord",
    urlPrefix: "",
    ensText: ["com.discord"],
    dotbitText: ["profile.discord"],
    system: PlatformSystem.web2,
  },
  [PlatformType.url]: {
    key: PlatformType.url,
    color: "#121212",
    icon: "icons/icon-web.svg",
    label: "Website",
    urlPrefix: "",
    system: PlatformSystem.web2,
  },
  [PlatformType.website]: {
    key: PlatformType.website,
    color: "#121212",
    icon: "icons/icon-web.svg",
    label: "Website",
    urlPrefix: "",
    ensText: ["url"],
    dotbitText: ["profile.website"],
    system: PlatformSystem.web2,
  },
  [PlatformType.linkedin]: {
    key: PlatformType.linkedin,
    color: "#195DB4",
    icon: "icons/icon-linkedin.svg",
    label: "LinkedIn",
    ensText: ["com.linkedin"],
    urlPrefix: "https://www.linkedin.com/in/",
    dotbitText: ["profile.linkedin"],
    system: PlatformSystem.web2,
  },
  [PlatformType.dns]: {
    key: PlatformType.dns,
    color: "#000000",
    icon: "icons/icon-web.svg",
    label: "DNS",
    urlPrefix: "https://",
    system: PlatformSystem.web2,
  },
  [PlatformType.tron]: {
    key: PlatformType.tron,
    color: "#EB0029",
    icon: "icons/icon-tron.svg",
    label: "Tron",
    urlPrefix: "https://tronscan.org/#/address/",
    system: PlatformSystem.web3,
  },
  [PlatformType.hey]: {
    key: PlatformType.hey,
    color: "#E84F64",
    icon: "icons/icon-hey.svg",
    label: "Hey",
    urlPrefix: "https://hey.xyz/u/",
    ensText: ["lens"],
    system: PlatformSystem.web3,
  },
  [PlatformType.facebook]: {
    key: PlatformType.facebook,
    color: "#385898",
    icon: "icons/icon-facebook.svg",
    label: "Facebook",
    urlPrefix: "https://www.facebook.com/",
    dotbitText: ["profile.facebook"],
    system: PlatformSystem.web2,
  },
  [PlatformType.threads]: {
    key: PlatformType.threads,
    color: "#000000",
    icon: "icons/icon-threads.svg",
    label: "Threads",
    urlPrefix: "https://www.threads.net/",
    system: PlatformSystem.web2,
  },
  [PlatformType.youtube]: {
    key: PlatformType.youtube,
    color: "#FF0000",
    icon: "icons/icon-youtube.svg",
    label: "Youtube",
    urlPrefix: "https://www.youtube.com/",
    dotbitText: ["profile.youtube"],
    system: PlatformSystem.web2,
  },
  [PlatformType.tiktok]: {
    key: PlatformType.tiktok,
    color: "#000000",
    icon: "icons/icon-tiktok.svg",
    label: "TikTok",
    urlPrefix: "https://www.tiktok.com/",
    dotbitText: ["profile.tiktok"],
    system: PlatformSystem.web2,
  },
  [PlatformType.bilibili]: {
    key: PlatformType.bilibili,
    color: "#00aeec",
    icon: "icons/icon-bilibili.svg",
    label: "Bilibili",
    urlPrefix: "https://www.bilibili.com/",
    dotbitText: ["profile.bilibili"],
    system: PlatformSystem.web2,
  },
  [PlatformType.medium]: {
    key: PlatformType.medium,
    color: "#000000",
    icon: "icons/icon-medium.svg",
    label: "Medium",
    urlPrefix: "https://medium.com/",
    dotbitText: ["profile.medium"],
    system: PlatformSystem.web3,
  },
  [PlatformType.mirror]: {
    key: PlatformType.mirror,
    color: "#007aff",
    icon: "icons/icon-mirror.svg",
    label: "Mirror",
    urlPrefix: "https://mirror.xyz/",
    dotbitText: ["profile.mirror"],
    system: PlatformSystem.web3,
  },
  [PlatformType.jike]: {
    key: PlatformType.jike,
    color: "#ffe411",
    label: "Jike",
    urlPrefix: "https://web.okjike.com/",
    dotbitText: ["profile.jike"],
    system: PlatformSystem.web2,
  },
  [PlatformType.nostr]: {
    key: PlatformType.nostr,
    color: "#0ea5e9",
    icon: "icons/icon-nostr.svg",
    label: "Nostr",
    urlPrefix: "https://app.coracle.social/",
    dotbitText: ["profile.nostr"],
    system: PlatformSystem.web2,
  },
  [PlatformType.poap]: {
    key: PlatformType.poap,
    color: "#5E58A5",
    icon: "icons/icon-poap.svg",
    label: "POAP",
    urlPrefix: "https://app.poap.xyz/scan/",
    system: PlatformSystem.web3,
  },
  [PlatformType.dribbble]: {
    key: PlatformType.dribbble,
    color: "#AB5697",
    icon: "icons/icon-dribbble.svg",
    label: "Dribbble",
    urlPrefix: "https://dribbble.com/search/",
    dotbitText: ["profile.dribbble"],
    system: PlatformSystem.web2,
  },
  [PlatformType.knn3]: {
    key: PlatformType.knn3,
    color: "#000000",
    label: "KNN3",
    urlPrefix: "https://www.knn3.xyz/",
    system: PlatformSystem.web3,
  },
  [PlatformType.ethLeaderboard]: {
    key: PlatformType.ethLeaderboard,
    color: "#000000",
    label: ".eth LeaderBoard",
    urlPrefix: "https://ethleaderboard.xyz/",
    system: PlatformSystem.web3,
  },

  [PlatformType.the_graph]: {
    key: PlatformType.the_graph,
    color: "#000000",
    label: "The Graph",
    urlPrefix: "https://thegraph.com/",
    system: PlatformSystem.web3,
  },
  [PlatformType.rpc_server]: {
    key: PlatformType.rpc_server,
    color: "#000000",
    icon: "icons/icon-web.svg",
    label: "RPC Server",
    urlPrefix: "",
    system: PlatformSystem.web3,
  },
  [PlatformType.twitter_hexagon]: {
    key: PlatformType.twitter_hexagon,
    color: "#4A99E9",
    icon: "icons/icon-twitter.svg",
    label: "Twitter Hexagon",
    urlPrefix: "https://twitter.com/",
    system: PlatformSystem.web2,
  },
  [PlatformType.uniswap]: {
    key: PlatformType.uniswap,
    color: "#ff007a",
    label: "Uniswap",
    urlPrefix: "https://uniswap.org/",
    system: PlatformSystem.web3,
  },
  [PlatformType.degenscore]: {
    key: PlatformType.degenscore,
    color: "#a855f7",
    icon: "icons/icon-degenscore.svg",
    label: "DegenScore",
    urlPrefix: "https://degenscore.com/beacon/",
    system: PlatformSystem.web3,
  },
  [PlatformType.firefly]: {
    key: PlatformType.firefly,
    color: "#D543ED",
    icon: "icons/icon-firefly.svg",
    label: "Firefly",
    urlPrefix: "https://firefly.land/",
    system: PlatformSystem.web3,
  },
  [PlatformType.solana]: {
    key: PlatformType.solana,
    color: "#9945FF",
    icon: "icons/icon-solana.svg",
    label: "Solana",
    urlPrefix: "https://solscan.io/",
    system: PlatformSystem.web3,
  },
  [PlatformType.sns]: {
    key: PlatformType.sns,
    color: "#030119",
    icon: "icons/icon-sns.svg",
    label: "SNS",
    urlPrefix: "https://www.sns.id/search?search=",
    system: PlatformSystem.web3,
  },
  [PlatformType.mstdnjp]: {
    key: PlatformType.mstdnjp,
    color: "#595aff",
    icon: "icons/icon-mastodon.svg",
    label: "mstdn.jp",
    urlPrefix: "https://mstdn.jp/@",
    system: PlatformSystem.web3,
  },
  [PlatformType.lobsters]: {
    key: PlatformType.lobsters,
    color: "#ac130d",
    icon: "icons/icon-lobsters.svg",
    label: "Lobsters",
    urlPrefix: "https://lobste.rs/~",
    system: PlatformSystem.web2,
  },
  [PlatformType.hackernews]: {
    key: PlatformType.hackernews,
    color: "#ff6600",
    icon: "icons/icon-hackernews.svg",
    label: "Hacker News",
    urlPrefix: "https://news.ycombinator.com/user?id=",
    system: PlatformSystem.web2,
  },
  [PlatformType.crossbell]: {
    key: PlatformType.crossbell,
    color: "#FFCF55",
    icon: "icons/icon-crossbell.svg",
    label: "Crossbell",
    urlPrefix: "https://crossbell.io/@",
    system: PlatformSystem.web3,
  },
  [PlatformType.minds]: {
    key: PlatformType.minds,
    color: "#f7d354",
    icon: "icons/icon-minds.svg",
    label: "Minds",
    urlPrefix: "https://www.minds.com/",
    system: PlatformSystem.web2,
  },
};

export const supportedPlatforms = [
  PlatformType.ens,
  PlatformType.lens,
  PlatformType.farcaster,
  PlatformType.dotbit,
  PlatformType.unstoppableDomains,
];
