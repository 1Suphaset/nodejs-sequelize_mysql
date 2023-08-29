const db = require("../model");
const Tutorial = db.tutorials
const Op = db.sequelize.Op

exports.Create = (req,res) => {
   
};

exports.FindAll = (req,res) => {
    const title = req.body.title
    var condition = title ?{title: {[Op.like]: `%${title}%`}} : null  //ถ้ามีtitleส่งค่าเข้ามาให้titleนี้เหมือนกับหรือไกล้เคียง

    Tutorial.FindAll({where: condition})
        .then(data => {
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "Some error occurred!!"
            })
        })
};

exports.FindOne = (req,res) => {
    
};

exports.FindAllpublished = (req,res) => {
  
};

exports.update = (req,res) => {
   
};

exports.delete = (req,res) => {
  
};

exports.deleteAll = (req,res) => {
   
};