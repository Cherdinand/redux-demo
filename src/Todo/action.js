let id = 0;

export const addItem = (value) => {
  return {
    type: "AddItem",
    payload: {
      checked: false,
      id: ++id,
      value,
    }
  }
}

export const toggleCheck = (item) => {
  return {
    type: "ToggleCheck",
    payload: {
      id: item.id
    }
  }
}

export const removeItem = (item) => {
  return {
    type: "RemoveItem",
    payload: {
      id: item.id
    }
  }
}

export const toggleAll = (checked) => {
  return {
    type: "ToggleAll",
    payload: { checked }
  }
}