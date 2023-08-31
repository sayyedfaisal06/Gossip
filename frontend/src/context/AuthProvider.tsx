import React, { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  auth: any;
  persist: boolean;
  setAuth: React.Dispatch<React.SetStateAction<any>>;
  setPersist: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<AuthContextType>({
  auth: {},
  persist: false,
  setAuth: () => {},
  setPersist: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState({});
  const isPersisted: boolean = JSON.parse(
    localStorage.getItem("persist") || "false"
  );
  const [persist, setPersist] = useState(isPersisted);

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
