import Store from "../models/storeModel.js";

/*
METHOD: POST
FUNCTION: set data into database
*/

export const setData = async (req, res, next) => {
  try {
    const response = await Store.create(req.body);

    res.json({
      success: true,
      message: "Data inserted into database successfully",
      data: response,
    });
  } catch (e) {
    next(e);
  }
};

/* 
METHOD: GET
FUNCTION: get data from database
*/
export const getData = async (req, res) => {
  try {
    const response = await Store.find();
    res.json({
      success: true,
      message: "data fetched successfully",
      data: response,
    });
  } catch (e) {
    next(e);
  }
};

export const getDataById = async (req, res, next) => {
  console.log(req.body);
  try {
    const response = await Store.findById(req.body.id);
    console.log(response);
    res.json({
      success: true,
      message: "data by id fetched successfully",
      data: response,
    });
  } catch (e) {
    next(e);
  }
};
