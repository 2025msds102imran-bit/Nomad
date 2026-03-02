import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(3);

  return (
    <NotificationContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </NotificationContext.Provider>
  );
};
