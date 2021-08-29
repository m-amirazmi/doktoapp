import { createContext, useContext, useEffect, useState } from "react";
import { apis } from "../utils/apis";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function register(data) {
    setLoading(true);
    try {
      await apis.register(data);
      const admin = await apis.adminCreate(data);
      await isLoggedIn();
      setLoading(false);
      return admin;
    } catch (error) {
      console.log("REGISTER", error);
    }
  }

  async function login(data) {
    setLoading(true);
    try {
      const { data: user } = await apis.login(data);
      const { data: admin } = await apis.adminFindOne(user.user._id);
      await isLoggedIn();
      setCurrentUser(admin.data[0]);
      setLoading(false);
      return admin.data[0];
    } catch (error) {
      console.log("LOGIN", error);
    }
  }

  async function isLoggedIn() {
    setLoading(true);
    try {
      const { data: loggedIn } = await apis.loggedIn();
      if (!loggedIn.error) {
        const { data: admin } = await apis.adminFindOne(loggedIn.user);
        await setCurrentUser(admin.data[0]);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  const value = { currentUser, register, login, isLoggedIn };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
