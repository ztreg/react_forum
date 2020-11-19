import React from 'react'
import { Route, useHistory } from 'react-router-dom'


export default function ProtectedRoute({component: Component, auth, ...rest}) {
  const history = useHistory()
  return (
    <Route {...rest} render={(props) => (
      auth === true ? <Component {...props} /> : history.push('/signup')
    )}

    
    />
  )
}
