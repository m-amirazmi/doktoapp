import { createContext, useContext, useEffect, useState } from "react";
import { apis } from "../utils/apis";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  async function register(data) {
    try {
      await apis.register(data);
      const admin = await apis.adminCreate(data);
      await isLoggedIn();
      return admin;
    } catch (error) {
      console.log("REGISTER", error);
    }
  }

  async function login(data) {
    try {
      const { data: user } = await apis.login(data);
      const { data: admin } = await apis.adminFindOne(user.user._id);
      await isLoggedIn();
      setCurrentUser(admin.data[0]);
      return admin.data[0];
    } catch (error) {
      console.log("LOGIN", error);
    }
  }

  async function isLoggedIn() {
    try {
      const { data: loggedIn } = await apis.loggedIn();
      if (!loggedIn.error) {
        const { data: admin } = await apis.adminFindOne(loggedIn.user);
        setCurrentUser(admin.data[0]);
      }
    } catch (error) {}
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  const value = { currentUser, register, login, isLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
