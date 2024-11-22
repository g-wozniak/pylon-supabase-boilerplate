import {TConfiguration} from './types'

export const configuration: TConfiguration = {
   cors: {
      whitelisted: [
         'http://localhost:3000',
         'http://localhost:3001',
         'https://www.kuecrm.com',
         'https://app.kuecrm.com',
         'https://www.kuecrm.dev',
         'https://app.kuecrm.dev'
      ]
   }
}
