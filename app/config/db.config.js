module.exports = {
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"itd102_db",
    //งานช่วง2
    dailect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //หน่วยเป็นมิลลิวินาที
        idle: 10000,
    }
};