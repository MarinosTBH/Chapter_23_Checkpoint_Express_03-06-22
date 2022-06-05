
function restricted(req,res,next) {
    
    const day = new Date().getDay() 
    const hour = new Date().getHours() 
  
    if(hour > 17 || hour < 8 || day === 6 || day ===0 ) {
      res.send("<div style='width:80%; margin:auto; text-align:center; font-size:20px; display : flex; align-items:center; justify-content:center; height:250px' role='alert'><p style='  padding: 50px;color: #721c24; background-color: #f8d7da; border-color: #f5c6cb;'><strong>We are sorry!</strong> You should come back in working days, maybe on monday ?</p></div>");
    } else {
      next();
    }
   }
  module.exports = restricted

