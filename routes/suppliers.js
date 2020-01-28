const express = require("express");
const router = express.Router();
const Supplier = require("../model/supplier");


router.get("/specific", (req, res) => {
  res.send("we are on supplier specific");
});

router.post("", async (req, res) => {
  try {
    req.body.name = req.body.name.trim();
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).json(supplier);
  } catch (e) {
    console.log(e);
  }
});

router.get("", async (req, res) => {
  try {
    res.json(await Supplier.find());
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await Supplier.findById(req.params.id));
  } catch (e) {
    console.log(e);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(
      await Supplier.findOneAndUpdate({ _id: req.params.id }, req.body, {
        returnNewDocument: true
      })
    );
  } catch (e) {
    console.log(e);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Supplier.findOneAndDelete({ _id: req.params.id}));
  } catch (e) {
    console.log(e);
  }
});

router.get("/isExist/:name", async (req, res) => {
  try {
    existedSupplier = await Supplier.find({ name: req.params.name.trim()});
    if (existedSupplier.length) res.json(true);
    else res.json(false);
    
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
