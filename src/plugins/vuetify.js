import { createVuetify } from 'vuetify'

import { aliases, mdi } from 'vuetify/iconsets/mdi'

const customTheme = {
  dark: false,
  colors: {
    background: '#F5F7FA',
    surface: '#FFFFFF',
    primary: '#1976D2',
    secondary: '#424242',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: { customTheme },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
})
