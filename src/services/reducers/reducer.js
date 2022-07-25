export default function reducer(state, action) {
  switch (action.type) {
    case "set_items": {
      return {
        ...state,
        items: [action.payload.items, ...state.items],
      };
    }
    default: {
      return state;
    }
  }
}
