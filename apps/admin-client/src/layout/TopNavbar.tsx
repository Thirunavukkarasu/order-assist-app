import { useAuth0 } from "@auth0/auth0-react";
import { startCase } from "lodash";
import { useLocation } from "react-router-dom";

export default function TopNavbar(){
    const location = useLocation();
    const heading = startCase(location?.pathname);
    const { user, logout } = useAuth0();
    
    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

    return(
        <>
            <div className="h-16 bg-gray-50 border-b flex flex-row justify-between py-5 px-5">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{heading}</h2>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <h4>{user?.name}</h4>
                    <img
                        src={user?.picture}
                        alt="Profile"
                        className="w-8 h-8 rounded-2xl"
                    />
                    <button onClick={() => logoutWithRedirect()}>Logout</button>
                </div>
        </div>
      </>
    )
}