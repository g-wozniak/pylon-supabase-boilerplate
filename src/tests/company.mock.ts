import {Company} from '../app/db.aliases'
import {ICompanyRepository} from '../app/repositories/company.repo'
import {jest} from 'bun:test'

export const mockCompanyRepository = (companies: Company[] = []): ICompanyRepository => ({
   findCompanyById: jest.fn().mockResolvedValue((id: number) => {
      return companies.find((company) => company.id === id)
   })
})
