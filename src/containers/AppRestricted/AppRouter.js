import React, {Fragment} from 'react'
import { Route } from 'react-router'
import Landing from '../../components/layout/Landing'

const routes = [
    {
        role: ['superadmin', 'admin'],
        path: 'landing',
        component: Landing
    }
]

const AppRouter = ({...props}) => {
    const {url} = props
    return (
        <Fragment>
            {
                routes.map(singleRoute => {
                    const {path, exact, ...props} = singleRoute
                    return(
                        <Route
                            exact={exact ? true : false}
                            key={singleRoute.path}
                            path={`${url}/${singleRoute.path}`}
                            {...props}
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default AppRouter
