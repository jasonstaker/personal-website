export const site = {
  name: "Jason Staker", // or keep generic for now
  location: "Vancouver, BC",
  email: "you@example.com",
  links: {
    github: "https://github.com/yourname",
    linkedin: "https://www.linkedin.com/in/yourname/",
  },
} as const;

export const mailto = `mailto:${site.email}`;