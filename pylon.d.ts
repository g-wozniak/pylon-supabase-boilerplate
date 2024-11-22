import '@getcronit/pylon'
import {DatabaseClient} from './src/types'
import {ClerkClient} from '@clerk/backend'
import {RequestState} from '@clerk/backend/internal'


declare module '@getcronit/pylon' {
  interface Bindings {
    SUPABASE_KEY: string
    SUPABASE_URL: string
    CLERK_SECRET_KEY: string
    CLERK_PUBLISHABLE_KEY: string
    APP_DOMAIN_NAME: string
  }

  interface Variables {
    dbClient: DatabaseClient
    authClient: ClerkClient
    authUser: RequestState | null
  }
}
