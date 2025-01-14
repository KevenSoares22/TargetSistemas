import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';  // Importando o contexto de autenticação

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();  // Pegando o estado de autenticação

  if (!isAuthenticated) {
    return <Navigate to="/login" />;  // Redireciona para login caso não esteja autenticado
  }

  return element;  // Permite o acesso à página se estiver autenticado
};

export default ProtectedRoute;
