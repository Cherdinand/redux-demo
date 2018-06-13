export default () => {
  return (createStore) => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer);
    const originDispatch = store.dispatch;
    
    store.dispatch = (action) => {
      console.log('enhancer dispatch action', action);
      originDispatch(action);
    }
    
    return store;
  }
}