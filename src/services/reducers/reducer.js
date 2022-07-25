export default function reducer(state, action) {
  switch (action.type) {
    case "set_items": {
      return {
        ...state,
        items: [action.payload.items, ...state.items],
      };
    }
    case "update_items": {
      return {
        ...state,
        items: action.payload.items
      };
    }
    case "remove_item": {
      return {
        ...state,
        items: action.payload.items
      };
    }
    default: {
      return state;
    }
  }
}
