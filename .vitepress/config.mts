import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RuneEra",
  description: "RPG colony management game",

  head: [
    ['link', { rel: 'icon', href: '/resources/img/logo.ico' }],
  ],

  themeConfig: {
    logo: '/resources/img/logo.png',
    sidebar: {
      '/wiki': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'About the Game', link: '/about' },
            { text: 'Screenshots', link: '/screenshots' }
          ]
        },
        {
          text: 'Game Systems',
          items: [
            { text: 'Guild Management', link: '/systems/guild' },
            { text: 'World Exploration', link: '/systems/world' },
            { text: 'Rune Magic System', link: '/systems/runes' },
            { text: 'Combat & Equipment', link: '/systems/combat' }
          ]
        },
        {
          text: 'Game World',
          items: [
            { text: 'Biomes & Environment', link: '/world/biomes' },
            { text: 'Factions', link: '/world/factions' },
            { text: 'Items & Crafting', link: '/world/items' },
            { text: 'Dungeons & Bosses', link: '/world/dungeons' }
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Progress Updates', link: '/development/progress' },
            { text: 'Roadmap', link: '/development/roadmap' },
            { text: 'Community', link: '/development/community' }
          ]
        }
      ]
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki' },
    ]
  }
})
