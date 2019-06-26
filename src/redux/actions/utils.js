



export const handleError = (fn,  { rethrow = false, silent = false } = {}) => async (dispatch, ...rest) => {
    try {
      return await fn(dispatch, ...rest);
    } catch (err) {
  
      if (rethrow)
        throw err;
    }
  };