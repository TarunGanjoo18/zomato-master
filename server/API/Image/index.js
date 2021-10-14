import express from "express";
import passport from "passport";
import multer from "multer";
// database model
import {ImageModel} from "../../database/allModels"



const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });


/*
Route     /
Des       Get Image details
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
  try {
    const image = await ImageModel.findById(req.params._id);

    return res.json({ image });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


Router.post("/new",async (req, res) => {
  try {
    const newImages = await ImageModel.create(req.body.imageData);
    return res.json({ images: newImages });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


// Confused
// Router.post("/", upload.single("file"), async (req, res) => {
//   try {
//     const file = req.file;


//     return res.status(200).json({ uploadImage });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });


export default Router;
