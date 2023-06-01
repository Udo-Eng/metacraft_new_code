import { createContext, useState } from "react";

export const AuthUserContext = createContext({
  isLogin: false,
  login: (user) => {},
  logout: () => {},
  user: {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  },
});

export const Provider = ({ children }) => {
  let initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [isLogin, setIsLogin] = useState(false);

  function loginHandler(user) {
    // Perform some network requests and obtain the Users details

    setUser({
      firstName: "Airspire",
      lastName: "Technologies",
      email: "aaat@yahoo.com",
      telephone: "08123456789",
    });

    setIsLogin(true);
  }

  function logoutHandler() {
    setUser(initialUserState);

    setIsLogin(false);
    
  }

  const initialUserAuthContext = {
    isLogin: isLogin,
    login: loginHandler,
    logout: logoutHandler,
    user: user,
  };

  return (
    <AuthUserContext.Provider value={initialUserAuthContext}>
      {children}
    </AuthUserContext.Provider>
  );
};
