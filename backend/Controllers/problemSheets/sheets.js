const ProblemSheetsModel = require("../../Models/problemsheetsModel");
// const Problem = require('../Models/sheetproblemModel');
const User = require("../../Models/userProfileModel");
const createProblemSheet = async (req, res) => {
  const { sheetId, sheetName, sheetDesc } = req.body;
  const ownerId = req.user._id;
  try {
    const newSheet = await ProblemSheetsModel.create({
      sheetId,
      ownerId,
      sheetName,
      sheetDesc,
      lastUpdated: new Date(),
    });
    const user = await User.findById(req.user._id);
    console.log(user);
    console.log(newSheet);
    user.createdSheetsIds.push(newSheet._id);
    await user.save();
    res
      .status(200)
      .json({ message: "Problem sheet has been created", sheet: newSheet });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateProblemSheet = async (req, res) => {
  const { sheetId, sheetName, sheetDesc, problemIds } = req.body;
  console.log(sheetId);
  try {
    const existingSheet = await ProblemSheetsModel.findOne({ sheetId });
    console.log(existingSheet);
    if (!req.user.createdSheetsIds.includes(existingSheet._id)) {
      return res
        .status(404)
        .json({ message: "You are not owner of this sheet" });
    }
    if (!existingSheet) {
      return res.status(404).json({ message: "Problem sheet not found." });
    }

    // Calculate the updated timestamp
    existingSheet.lastUpdated = new Date();

    // Update the problem sheet fields if they are provided in the request
    if (sheetName) existingSheet.sheetName = sheetName;
    if (sheetDesc) existingSheet.sheetDesc = sheetDesc;
    if (problemIds) existingSheet.problemIds = problemIds;

    // Save the updated problem sheet
    await existingSheet.save();

    res.status(200).json({
      message: "Problem sheet has been updated",
      sheet: existingSheet,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const getProblemSheetDetails = async (sheetId, res) => {
  try {
    console.log(sheetId);
    const problemSheet = await ProblemSheetsModel.findOne({ sheetId });
    console.log(problemSheet);

    if (!problemSheet) {
      return res.status(404).json({ message: "Problem sheet not found." });
    }

    res.status(200).json({ sheet: problemSheet });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

const updateViewCount = async (sheetId) => {
  try {
    const result = await ProblemSheetsModel.updateOne(
      { sheetId },
      {
        $inc: { countViews: 1 }, // Increment the view count by 1
      }
    );

    if (result.nModified === 0) {
      return { success: false, message: "Problem sheet not found." };
    }

    return { success: true, message: "View count updated successfully." };
  } catch (error) {
    console.error(error.message);
    return { success: false, message: "Something went wrong." };
  }
};

const updateStarCount = async (sheetId) => {
  try {
    const result = await ProblemSheetsModel.updateOne(
      { sheetId },
      {
        $inc: { countStars: 1 }, // Increment the star count by 1
      }
    );

    if (result.nModified === 0) {
      return { success: false, message: "Problem sheet not found." };
    }

    return { success: true, message: "Like count updated successfully." };
  } catch (error) {
    console.error(error.message);
    return { success: false, message: "Something went wrong." };
  }
};

const getAllSheetsByOwnerId = async (ownerId) => {
  try {
    // Find all sheets with the specified ownerId
    const sheets = await ProblemSheetsModel.find({ ownerId });
    return { success: true, sheets };
  } catch (error) {
    console.error(error.message);
    return { success: false, message: "Failed to retrieve sheets" };
  }
};

module.exports = {
  createProblemSheet,
  updateProblemSheet,
  getProblemSheetDetails,
  updateViewCount,
  updateStarCount,
  getAllSheetsByOwnerId,
};
