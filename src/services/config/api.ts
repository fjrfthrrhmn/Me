export const API_CONFIG = {
  github: {
    base: 'https://api.github.com/users/',
    user: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    // token: process.env.GITHUB_TOKEN,
  },
  monkeytype: {
    base: 'https://api.monkeytype.com/users/',
    user: process.env.NEXT_PUBLIC_MONKEYTYPE_USERNAME,
    key: process.env.NEXT_PUBLIC_MONKEYTYPE_KEY,
  },
};
