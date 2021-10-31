const Contact = require("../models/Contact");

//create contacts
exports.addContact = async (req, res) => {
  try {
    const findContact = await Contact.findOne({ email: req.body.email });
    if (findContact) {
      return res.status(400).send({ msg: "email is existing" });
    }
    // console.log(req.body);
    const newContact = new Contact({ ...req.body });
    await newContact.save();
    res
      .status(200)
      .send({ msg: "contact added with succ", contact: newContact });
  } catch (error) {
    res.status(400).send({ msg: "contact can not be added", error });
  }
};

//get contact by id
exports.getContact = async (req, res) => {
  try {
    const findContact = await Contact.findById(req.params.id);
    res
      .status(200)
      .send({ msg: "this is the contact ", contact: findContact });
  } catch (error) {
    res.status(400).send({ msg: "can not get the contact", error });
  }
};

//delete contacts called Mary
exports.RemoveMaryContact = async (req, res) => {
  try {
    const deleteMary = await Contact.deleteMany({ firstname: /mary/i });
    res.status(200).send({
      msg: "contacts found and deleted with succ",
    });
  } catch (error) {
    res.status(400).send({ msg: "can not find contact", error });
  }
};

//search contacts who likes burritos
exports.likeBurritosContact = async (req, res) => {
  try {
    const food = "burritos";
    // let { limit } = req.query;
    // console.log("the result is limited to two contact", limit);
    const burritosContacts = await Contact.find({
      favoriteFoods: { $in: food },
    })
      .limit(2)
      .sort({ firstname: 1 })
      .select("-age");

    if (burritosContacts.length) {
      return res.status(200).send({
        msg: "contacts that like burritos , sorted by name ,limited to two and hided age ",
        burritosContacts,
      });
    }
    res.status(400).send({ msg: "There is no contact who likes burritos" });
  } catch (error) {
    res
      .status(400)
      .send({ msg: "can not find contact who like  burritos", error });
  }
};

//delete one contact
exports.deleteOneContact = async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "contact deleted succ" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete the contact", error });
  }
};

//update contact 
exports.editOneContact = async (req, res) => {
  try {
    // const r = await Contact.updateOne(
    //   { _id: req.params.id },
    //   { $set: { ...req.body } }
    // );
    // console.log(req.params);
    // let s = await Contact.findById(req.params.id);
    // console.log(s);
    const r = await Contact.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    console.log(r);
    if (r.modifiedCount) {
      return res.status(200).send({ msg: "contact updated succ" });
    }
    res.status(200).send({ msg: "there is no modification" });
  } catch (error) {
    res.status(400).send({ msg: "contact can not be updated", error });
  }
};

//get all the contact in the db
exports.getAllContact = async (req, res) => {
  try {
    const listContact = await Contact.find();
    res.status(200).send({ msg: "contacts are", contacts: listContact });
  } catch (error) {
    res.status(400).send({ msg: "can not get all contacts", error });
  }
};