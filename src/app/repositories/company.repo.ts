import {DatabaseClient} from '../../types'
import {singleItemResult} from '../../adapters'
import {Company} from '../db.aliases'

export interface ICompanyRepository {
   findCompanyById(id: number): Promise<Company | null>
}

export class CompanyRepository implements ICompanyRepository {
   constructor(private _db: DatabaseClient) {}

   public async findCompanyById(id: number) {
      return singleItemResult(await this._db.from('companies')
         .select('*')
         .eq('id', id)
         .limit(1))
   }
}
