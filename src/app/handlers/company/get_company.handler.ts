import {z} from 'zod'
import {ICompanyRepository} from '../../repositories/company.repo'

export type TGetCompanyRequest = {
   id: number
}

export const GetCompanyRequestSchema = z.object({
   id: z.number()
})

export class GetCompanyHandler {

   constructor(public body: TGetCompanyRequest, public repo: ICompanyRepository) {
   }

   public async execute() {
      const result = await this.repo.findCompanyById(this.body.id)
      if (!result) {
         return null
      }

      return {
         id: result.id,
         name: result.name
      }
   }
}
