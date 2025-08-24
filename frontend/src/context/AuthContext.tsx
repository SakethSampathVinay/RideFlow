import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const getInitialBookings = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    if (!storedCart) return [];
    const parsedCart = JSON.parse(storedCart);
    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error("Failed to parse bookings from localStorage", error);
    return [];
  }
};

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [bookings, setBookings] = useState(getInitialBookings);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const login = (email: string, password: string) => {
    if (email === "user@gmail.com" && password === "user123") {
      const fakeUser = { name: "Vinay", username: "user" };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      setIsAuthenticated(true);
      navigate("/");
      toast.success("Login Successfully");
      return true;
    } else {
      console.error("Error in Login: Invalid credentials");
      setIsAuthenticated(false);
      toast.error("Invalid email or password");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
    toast.info("Logged out successfully");
  };

  const addBooking = (booking: any) => {
    setBookings((preBooking: any[]) => [...preBooking, booking]);
  };

  useEffect(() => {
    localStorage.setItem("cart", window.JSON.stringify(bookings));
  }, [bookings]);

  const contextValue = useMemo(
    () => ({
      user,
      bookings,
      login,
      logout,
      addBooking,
      navigate,
      isAuthenticated,
    }),
    [user, bookings]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
