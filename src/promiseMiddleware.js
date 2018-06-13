const isPromise = (promise) => {
  return promise && typeof(promise.then) === "function";
}

export default () => {
  return ({dispatch}) => (next) => (action) => {
    console.log('all the action pass in promiseMiddleware', action);
    
    const {types, promise, ...rest} = action;
    
    // 这里相当于约定好了与异步处理相关的action需要有types、promise属性，且promise属性值是一个Promise对象，types属性值是一个数组且长度等于3。
    // 如果不是就交由下一个中间件进行处理，反之，对异步处理的action进行特殊处理
    if (!isPromise(promise) || !(action.types && action.types.length === 3)) {
      return next(action);
    }
    
    console.log('promise action', action);
  
    const [Pending, Resolved, Rejected] = types;
  
    dispatch({...rest, type: Pending});
    return action.promise.then(
      (result) => dispatch({...rest, result, type: Resolved}),
      (error) => dispatch({...rest, error, type: Rejected})
    );
  }
}