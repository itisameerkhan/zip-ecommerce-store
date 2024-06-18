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
  const response = await Store.find();
  res.json({
    success: true,
    message: "data fetched successfully",
    data: response,
  });
};
