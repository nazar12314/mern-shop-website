const Item = require("../models/itemModel");

const createItemController = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    await item.save();
    res.status(201).json({ message: "Item created successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllItemsController = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleItemController = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findOne({ _id: id });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteSingleItemController = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfuly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const patchSingleItemController = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createItemController,
  getAllItemsController,
  getSingleItemController,
  deleteSingleItemController,
  patchSingleItemController,
};
