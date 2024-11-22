import type {Plugin} from '@envelop/core'
import {getContext} from '@getcronit/pylon'
import {createClient} from '@supabase/supabase-js'

export const useDatabase = (): Plugin => {
   return {
      onExecute(args) {
         const ctx = getContext()
         const db = createClient(ctx.env.SUPABASE_URL, ctx.env.SUPABASE_KEY, {
            db: {
               schema: 'api'
            }
         })
         ctx.set('dbClient', db)
         return {
            onExecuteDone({result}) {}
         }
      }
   }
}
