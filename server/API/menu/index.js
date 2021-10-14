import express from "express";
import passport from "passport";

// Database Model
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route :     /list
Des :        Get all list menu based on id 
Params :   _id
Access :   Public
Method:   Get
*/
Router.get("/list/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// for new data
Router.post("/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    if (menuData._id) {
      const updateMenu = await MenuModal.findByIdAndUpdate(
        menuData._id,
        {
          $push: {
            menus: { $each: menuData.menus },
          },
        },
        { new: true }
      );

      return res.json({ menu: updateMenu });
    }

    const createNewMenu = await MenuModel.create(menuData);

    return res.json({ menu: createNewMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// for new recommendation
Router.post("/recommendation/new", async (req, res) => {
  try {
    const { menuData } = req.body;

    const updateMenu = await MenuModel.findByIdAndUpdate(
      menuData._id,
      {
        $push: {
          recommended: { $each: menuData.recommended },
        },
      },
      { new: true }
    );

    return res.json({ menu: updateMenu });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});


/*
Route :     /image
Des :        Get all list menu images based on id 
Params :   _id
Access :   Public
Method:   Get
*/
Router.get("/image/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const menus = await ImageModel.findById(_id);

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;