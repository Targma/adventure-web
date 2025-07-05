import { defineConfig } from 'vitepress'

// Import lightbox plugin
import lightbox from "vitepress-plugin-lightbox"

export default defineConfig({
  title: "RuneEra",
  description: "RPG colony management game",

  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },

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
            { text: 'Introduction', link: '/wiki/introduction' },
            { text: 'About the Game', link: '/wiki/about-game' },
          ]
        },
        {
          text: 'Universe',
          items: [
            { text: 'Tier', link: '/wiki/universe/tier' },
            { text: 'Map', link: '/wiki/universe/map' },
            { text: 'Area', link: '/wiki/universe/area' },
            { text: 'Factions', link: '/wiki/universe/factions' },
            { text: 'Dungeons', link: '/wiki/universe/dungeons' },
            { text: 'Difficulty', link: '/wiki/universe/difficulty' },
          ]
        },
        {
          text: 'Systems',
          items: [
            { text: 'Humanoids', link: '/wiki/systems/humanoids' },
            { text: 'Health & Vitality', link: '/wiki/systems/health-vitality' },
            { text: 'Diseases', link: '/wiki/systems/diseases' },
            { text: 'Curses', link: '/wiki/systems/curses' },
            { text: 'Stress', link: '/wiki/systems/stress' },
            { text: 'Inventory', link: '/wiki/systems/inventory' },
            { text: 'Items', link: '/wiki/systems/items' },
            { text: 'Equipment', link: '/wiki/systems/equipment' },
            { text: 'Abilities', link: '/wiki/systems/abilities' },
            { text: 'Combat', link: '/wiki/systems/combat' },
            { text: 'Social', link: '/wiki/systems/social' },
            { text: 'Arrest', link: '/wiki/systems/arrest' },
            { text: 'Recruit', link: '/wiki/systems/recruit' },
            { text: 'Jobs', link: '/wiki/systems/jobs' },
            { text: 'Farming & Gathering', link: '/wiki/systems/farming-gathering' },
            { text: 'Husbandry', link: '/wiki/systems/husbandry' },

            { text: 'Settlement', link: '/wiki/systems/settlement' },
            { text: 'Zone', link: '/wiki/systems/zone' },
            { text: 'Room', link: '/wiki/systems/room' },
            { text: 'Mana', link: '/wiki/systems/mana' },
            { text: 'Portal', link: '/wiki/systems/portal' },

            { text: 'Adventure master', link: '/wiki/systems/adventure-master' },
            { text: 'Quests', link: '/wiki/systems/quests' },
            { text: 'Events', link: '/wiki/systems/events' },
          ]
        },
        {
          text: 'Alpha build',
          items: [
            { text: 'Performance', link: '/wiki/alpha-build/performance' },
            { text: 'Download', link: '/wiki/alpha-build/download' },
          ]
        },
        {
          text: 'Development',
          items: [
            { text: 'Technical Foundation', link: '/wiki/development/technical-foundation' },
            { text: 'Roadmap', link: '/wiki/development/roadmap' },
            { text: 'Modding', link: '/wiki/development/modding' },
          ]
        }
      ]
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/introduction' },
      { text: 'Screenshots', link: '/screenshots' },
    ]
  },

})
