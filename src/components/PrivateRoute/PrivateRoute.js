import { Navigate } from 'react-router-dom';
import useAuth  from '../CustomHooks/useAuth';

function PrivateRoute({children}) {
    const loggedIn = useAuth();

    return loggedIn ? children : <Navigate to='/login' />;
}

export default PrivateRoute