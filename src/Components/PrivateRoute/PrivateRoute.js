import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const location = useLocation();
  const user = useSelector((state) => state.user);

  if (user.loading) return `...<Loading />...`;
  return user.currentUser?.email ? (
    children
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
}
