export const site = {
  name: "Jason Staker",
  location: "Vancouver, BC, Canada / Trabuco Canyon, CA, USA",
  email: "jason.staker@yahoo.com",
  links: {
    github: "https://github.com/jasonstaker/",
    linkedin: "https://www.linkedin.com/in/jason-staker-53b8a9280/",
  },
} as const;

export const mailto = `mailto:${site.email}`;
