import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("hostelUser");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("hostelUser");
      }
    }
  }, []);

  const login = (email, password) => {
    const savedUsers =
      JSON.parse(localStorage.getItem("hostelUsers")) || [];

    const foundUser = savedUsers.find(
      (item) =>
        item.email === email &&
        item.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    localStorage.setItem(
      "hostelUser",
      JSON.stringify(foundUser)
    );

    setUser(foundUser);

    return {
      success: true,
      user: foundUser,
    };
  };

  const register = (userData) => {
    const users =
      JSON.parse(localStorage.getItem("hostelUsers")) || [];

    const alreadyExists = users.some(
      (item) => item.email === userData.email
    );

    if (alreadyExists) {
      return {
        success: false,
        message: "Email already registered",
      };
    }

    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role || "Student",
    };

    users.push(newUser);

    localStorage.setItem(
      "hostelUsers",
      JSON.stringify(users)
    );

    return {
      success: true,
      user: newUser,
    };
  };

  const logout = () => {
    localStorage.removeItem("hostelUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}