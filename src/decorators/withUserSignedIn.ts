import {createDecorator, getContext, ServiceError} from '@getcronit/pylon'

export const withUserSignedIn = createDecorator(async () => {
   const authUser = getContext().get('authUser')
   if (!authUser || (authUser && authUser.status !== 'signed-in')) {
      throw new ServiceError('Access denied. User not signed in.', {
         code: 'access_denied',
         statusCode: 401
      })
   }
})
