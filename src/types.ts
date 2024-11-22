import {SupabaseClient} from '@supabase/supabase-js'
import {Database} from './app/db.types'

export type DatabaseClient = SupabaseClient<Database>

export type DatabaseSearchResultItem<TModel extends Record<string, any>> = TModel | null

export type TConfiguration = {
   cors: {
      whitelisted: string[]
   }
}
