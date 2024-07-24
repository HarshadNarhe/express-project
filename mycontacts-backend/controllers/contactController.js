const asyncHandler = require("express-async-handler");
const contact = require("../models/contactModel");
//@desc Get all contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async (req, res)=> {
    const contacts = await contact.find();
    res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res)=> {
    console.log("The request body is :", req.body);
    const{name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields should be filled.");
    } 
    const contact = await contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res)=> {
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
});

//@desc update contact
//@route POST /api/contacts/
//@access public
const updateContact = asyncHandler(async (req, res)=> {
    res.status(200).json({message:`Update contacts for ${req.params.id}`});
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res)=> {
    res.status(201).json({message:`DELETE contacts for ${req.params.id}`});
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};