const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, res, callback) {

        callback(__dirname, "../my-uploads");
    },
    filename: function(req, res, callback) {
        const uniquePrefix = date.now();
        callback(null, file.uniquePrefix + "-" + file.originalname);
    },
});

const fileFilter = (req, res, callback) => {

    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {

        callback(null, true);
    } else{
        callback(null, false)
    }
};

const options = {
    
    storage: storage,
    
    fileFilter: fileFilter,
    limits:{
        filesize : 1024*1024*5,
    },
};

const uploads = multer(options);

const single = (formkey) =>{
    return function (req, res, next){
          let uploadedItem';      
         if(method=="single"){
        
        const uploadedItem = uploads.single(formKey);

       }
       else if(method=="multiple"){
           
       }
       return uploadedItem(req, res, funciton(err){
        
            if(err instanceof multer.MultiError){
                return res.status(500).send({message: err.send})
            }else if(err){
                return res.status(501).send({message: err.message});
            }
            return next();
        });''
    };
};

// const multiple = (formKeys) => {
//     return funciton(req, res, next) {

//         const uploadedItem = uploads.any("profile_Pic")

//         return uploadedItem(req, res, funciton(err){
//             if(err instanceof multer.MultiError){
//                 return res.status(500).send({message: err.send})
//             }else if(err){
//                 return res.status(501).send({message: err.message});
//             }
//             return next();
//         });''
    }
}
module.exports = uploads;