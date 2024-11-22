import type {Plugin} from '@envelop/core'
import {getContext} from '@getcronit/pylon'
import {createClerkClient} from '@clerk/backend'
import {configuration} from '../configuration'

export const useAuth = (): Plugin => {
   return {
      onExecute(args) {
         const ctx = getContext()
         ctx.set('authUser', null)

         const clerk = createClerkClient({
            secretKey: ctx.env.CLERK_SECRET_KEY,
            publishableKey: ctx.env.CLERK_PUBLISHABLE_KEY
         })

         ctx.set('authClient', clerk)

         const auth = ctx.req.header('Authorization')
         const sessionId = ctx.req.header('X-Session')

         if (auth && sessionId) {
            let token = auth.replace('Bearer ', '')
            if (token.length > 0) {
               try {
                  clerk.authenticateRequest(ctx.req.raw, {
                     secretKey: ctx.env.CLERK_SECRET_KEY,
                     domain: ctx.env.APP_DOMAIN_NAME,
                     authorizedParties: configuration.cors.whitelisted
                  }).then(result => {
                     ctx.set('authUser', result)
                  })
               } catch (e) {
                  if (e instanceof Error) {
                     console.error(e.message)
                  }
               }
            }
         }

         return {
            onExecuteDone({result}) {}
         }
      }
   }
}
