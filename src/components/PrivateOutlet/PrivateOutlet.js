import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../CustomHooks/useAuth';

function PrivateOutlet() {
    const authenticated = useAuth();

    return authenticated ? <Outlet /> : <Navigate to='/login' />; 
}

export default PrivateOutlet;