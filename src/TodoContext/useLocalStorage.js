import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 600);
  }, []);

  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos);
  }

  item.sort((a, b) => {
    return a.text.localeCompare(b.text);
  });
  item.sort((a, b) => {
    return a.completed.toString().localeCompare(b.completed.toString());
  });

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage }