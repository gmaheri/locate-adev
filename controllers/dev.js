const Dev = require('../models/Dev');

//Get all Devs

exports.getDev = async (req, res, next) => {
  try {
    const dev = await Dev.find();

    return res.status(200).json({
      success : true,
      count : dev.length,
      data : dev
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({error : 'Server error'})

  }
};
