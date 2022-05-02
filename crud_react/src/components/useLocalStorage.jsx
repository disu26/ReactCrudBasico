import React from "react";

/**
 * Función para manejar el local storage y almacenar la información del CRUD.
 * 
 * @param {*} itemName : Nombre del ítem a guardar.
 * @param {*} initialValue : Valor inicial del ítem.
 * @returns el item guardado y la función para actualizarlo.
 * 
 * @author Dímar Andrey Suárez Hidalgo <dimar260212@gmail.com>
 */
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }

    setItem(parsedItem);
  }, []);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
  };
}

export { useLocalStorage };
