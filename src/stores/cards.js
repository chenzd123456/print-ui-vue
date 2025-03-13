import { defineStore } from 'pinia'

const useCards = defineStore('cards', {
  state: () => ({
    cards: [
      {
        id: 1,
        title: 'Scan',
        content: 'Open Scan View',
        icon: '',
        expanded: false,
        routerName: 'ScanView',
      },
      {
        id: 2,
        title: 'Copy',
        content: '',
        icon: '',
        expanded: false,
        routerName: 'CopyView',
      },
      {
        id: 3,
        title: 'Setting',
        content: '',
        icon: '',
        expanded: false,
        routerName: 'SettingView',
      },
      {
        id: 4,
        title: 'About',
        content: '',
        icon: '',
        expanded: false,
        routerName: 'AboutView',
      },
    ],
  }),
})

export { useCards }
