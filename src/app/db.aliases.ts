import {Database} from './db.types'

export type Company = Database['api']['Tables']['companies']['Row']
export type Company_Fields = keyof Company

