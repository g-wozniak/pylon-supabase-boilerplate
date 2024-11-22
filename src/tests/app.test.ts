import sinon from 'sinon'

import {describe, expect, test, beforeEach, jest, mock} from 'bun:test'

import app from '../index'
import {CompanyRepository} from '../app/repositories/company.repo'

describe('GraphQL API', () => {

   beforeEach(() => {

      mock.module('src/app/repositories/company.repo.ts', () => ({
         findCompanyById: jest.fn().mockResolvedValue((id: number) => {
            return {
               id: id,
               name: `Company ${id}`
            }
         })
      }))

   })

   test('getCompany', async () => {
      sinon.stub(CompanyRepository.prototype, 'findCompanyById').resolves({
         id: 1,
         name: 'Company 1',
         created_at: new Date().toDateString(),
      })

      // app.use(graphqlHandler(graphql))

      const res = await app.request('/graphql', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            query: `query GetCompany($id: Number!) {
                  getCompany(id: $id) {
                     id
                     name
                  }
               }`,
            variables: {
               id: 1
            }
         })
      })
      expect(res.status).toBe(200)
      const data = await res.json<any>()
      expect(data).toEqual({
         data: {
            getCompany: {
               id: 1,
               name: 'Company 1'
            }
         }
      })
   })
})
