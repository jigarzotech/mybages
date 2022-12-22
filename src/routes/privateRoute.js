import { Route } from 'react-router-dom'
import Home from '../pages/home';
import MyCart from '../pages/MyCart';
import PrivateRoute from './privateRoute';
import { ROUTES } from './route'

export default function privateRoute() {
    return (
        <>
            <Route exact path={ROUTES.HOME}
                element={<PrivateRoute><Home /> </PrivateRoute>} />
            <Route exact path={ROUTES.MYCART}
                element={<PrivateRoute> <MyCart /> </PrivateRoute>} />

        </>
    )
}
