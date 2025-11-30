import { createContext, useState, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  // جلب القيمة المخزنة لو كانت موجودة
  const stored = localStorage.getItem("data") || "";

  // الحالة الأساسية
  const [value, setValue] = useState(stored);

  // دالة التعديل + التخزين
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem("data", newValue);
  };

  return (
    <UserContext.Provider value={{ value, updateValue }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}
// eslint-disable-next-line react-refresh/only-export-components
export { useUser };
