const multer=require('multer')
const path=require('path')

const storage=multer.diskStorage({
    destination:'../client/public/uploads',
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({
    storage:storage,
    fileFilter:function(re,file,cb){
        const fileType=/jpeg|png|jpg/;
        const mimeType=fileType.test(file.mimetype);
        if (mimeType){
            cb(null,true)
        }else{cb(null,false)}
    }
    
});
module.exports= upload;