import {app} from '@getcronit/pylon'
import {useAuth} from './plugins/useAuth'
import {useDatabase} from './plugins/useDatabase'
import {CompanyClient} from './app/company.client'
import {useValidation} from './plugins/useValidation'

export const graphql = {
   Query: {
      ...CompanyClient.Query
   },
   Mutation: {
      ...CompanyClient.Mutation
   }
}

export const config = {
   plugins: [
      useValidation(),
      useDatabase(),
      useAuth()
   ]
}

export default app
