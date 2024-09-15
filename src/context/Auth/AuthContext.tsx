import { createContext, useEffect, useState } from "react";
import { User } from "../../interfaces/user";
import API from "../../api/API";

export const AuthContext = createContext({} as AuthContextType);

type AuthContextType = {
  isAuthenticated: boolean;
  logout: () => void;
  login: (login: string, password: string) => void;
  user: object | null;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    //   const fakeUser = { username: username, token: 'fake_token' };
    //   setUser(fakeUser);
    //localStorage.setItem('authUser', JSON.stringify(fakeUser));

    try {
        setLoading(true)
      const  req = await API.useAPI().login(email, password)
      console.log('login aswner', req)

      
        setUser({ email: 'email', password: 'password'})
        console.log(`if true`, user)
      
      console.log(`set user? `, user)

      localStorage.setItem('authUser', JSON.stringify({
        email,password, token: req.data
      }))

      console.log(` whatt`, localStorage.getItem('authUser'))

    } catch(err){
        console.log(err)
    }

    setLoading(false)
    console.log(`logged user`, email, password)
    setUser({email, password})
    console.log(`at the end? `,user )
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user, 
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
