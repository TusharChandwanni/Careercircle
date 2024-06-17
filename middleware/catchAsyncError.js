export const catchAsyncError =(theFunction) =>{
    return (re,res,next) =>{
      Promise.resolve(theFunction(re,res,next)).catch(next);
    };
};