import { isPromise } from '../../util'

const defaultTypes = ['PENDING', 'FULFILLED', 'REJECTED']

export default function promiseMiddleware (config = {}) {
  const promiseTypeSuffixes = config.promiseTypeSuffixes || defaultTypes

  return (_ref) => {
    const dispatch = _ref.dispatch

    return next => action => {
     
      if (!isPromise(action.payload)) {
         return next(action)
      }
    
      const { type, payload, meta, params,callback = {} } = action
      const { promise, data } = payload
      const [ PENDING, FULFILLED, REJECTED ] = (meta || {}).promiseTypeSuffixes || promiseTypeSuffixes

      /**
       * Dispatch the first async handler. This tells the
       * reducer that an async action has been dispatched.
       */
      next({
        type: `${type}_${PENDING}`,
        callback:callback,
        ...!!data ? { payload: data, params } : {},
        ...!!meta ? { meta } : {}
      })
      const isAction = resolved => resolved && (resolved.meta || resolved.payload)
      console.log(isAction,"isAction")
      const isThunk = resolved => typeof resolved === 'function'
      const getResolveAction = isError => ({
        type: `${type}_${isError ? REJECTED : FULFILLED}`,
        ...!!meta ? { meta } : {},
          callback:callback,
        ...!!isError ? { error: true } : {}
      })

      /**
       * Re-dispatch one of:
       *  1. a thunk, bound to a resolved/rejected object containing ?meta and type
       *  2. the resolved/rejected object, if it looks like an action, merged into action
       *  3. a resolve/rejected action with the resolve/rejected object as a payload
       */
      action.payload.promise = promise.then(
        (resolved = {}) => {
          
          const resolveAction = getResolveAction()
          return dispatch(isThunk(resolved) ? resolved.bind(null, resolveAction) : {
            ...resolveAction,
            ...isAction(resolved) ? resolved : {
              ...!!resolved && { payload: resolved,  callback:callback, params }
            }
          })
        },
        (rejected = {}) => {
          const resolveAction = getResolveAction(true)
          return dispatch(isThunk(rejected) ? rejected.bind(null, resolveAction) : {
            ...resolveAction,
            ...isAction(rejected) ? rejected : {
              ...!!rejected && { payload: rejected,   callback:callback,params }
            }
          })
        }
      )

      return action
    }
  }
}
