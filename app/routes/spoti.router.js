module.exports = async app => {
    const cancion = require("../controllers/track.controller.js");
  
    let router = require("express").Router();
    router.get("/", await cancion.findAllTracks);
  
    router.post("/", await cancion.createTrack);
  
    app.use('/v1/canciones', router);
 }