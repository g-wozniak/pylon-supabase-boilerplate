import {PostgrestSingleResponse} from '@supabase/supabase-js'

export function singleItemResult<TModel>(res: PostgrestSingleResponse<TModel[]>): TModel | null {
   if (res.status === 200 && res.data && res.data.length === 1) {
      return res.data[0]
   } else {
      return null
   }
}
