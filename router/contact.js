const express = require("express");
const router = express.Router();
const {addContact,getContact,RemoveMaryContact,likeBurritosContact,deleteOneContact,editOneContact,getAllContact,} = require("../controllers/contact.controllers");

//test 
router.use("/test", (req, res) => {
  res.send("test api");
});

//CRUD
//add contact 
router.post("/", addContact);
//get all contacts
router.get("/", getAllContact);
//find people who like burrittos. sort them by name, limit the results to two documents, and hide their age
router.get("/food", likeBurritosContact);
//find one contact
router.get("/:id", getContact);
//find people called Mary and remove them
router.delete("/deletename/:name", RemoveMaryContact);
//delete one contact
router.delete("/:id", deleteOneContact);
//update contact
router.put("/:id", editOneContact);

module.exports = router;