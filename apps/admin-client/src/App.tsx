import { useAuth0 } from "@auth0/auth0-react";
import AuthLayout from "layout/AuthLayout";
import UnAuthLayout from "layout/UnAuthLayout";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {isAuthenticated ? <AuthLayout/> : <UnAuthLayout/>}
    </div>
  );
}

export default App;
