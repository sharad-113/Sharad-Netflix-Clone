import { Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (!user) {
    return children;
  } else if (user) {
    return <Navigate to={loggedInPath} />;
  } else return null;
}

export function ProtectedRoute({ user, children }) {
  if (user) return children;
  else if (!user) {
    return <Navigate to="/signin" />;
  } else return null;
}
