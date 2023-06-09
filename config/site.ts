export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Taskill",
  description: "Taskill UI",
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Labels",
      href: "/labels",
    },
    {
      title: "Progress",
      href: "/progress",
    },
  ],
  links: {
    github: "https://github.com/ZaqueuCavalcante/taskill",
  },
}
