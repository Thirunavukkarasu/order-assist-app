import { useAuth0 } from "@auth0/auth0-react";
import AuthLayout from "layout/AuthLayout";
import UnAuthLayout from "layout/UnAuthLayout";
import { useEffect } from "react";

function App() {
  const { isLoading, error, isAuthenticated, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        localStorage.setItem("access_token", accessToken);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently, isAuthenticated]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {isAuthenticated ? <AuthLayout /> : <UnAuthLayout />}
    </div>
  );
}

export default App;
