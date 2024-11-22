import {getContext} from '@getcronit/pylon'
import {GetCompanyHandler} from './handlers/company/get_company.handler'
import {CompanyRepository} from './repositories/company.repo'

export const CompanyClient = {
   Query: {
      getCompany: async (id: number) => {
         const db = getContext().get('dbClient')
         return await new GetCompanyHandler(
            {id}, new CompanyRepository(db)
         ).execute()
      }
   },
   Mutation: {

   }
}
