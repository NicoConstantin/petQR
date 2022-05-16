const mongoose = require('mongoose');
const { minLengthNames, maxLengthNames, petTypes } = require('../../utils/constants');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: minLengthNames,
        maxLength: maxLengthNames
    },
    type: {
        type: String,
        required: true,
        trim: true,
        enum: petTypes
    },
    breed: {
        type: String,
        required: true,
        // validate: (v)=>{
        //     //FALTA VALIDAR CON LAS RAZAS CORRESPONDIENTES SEGUN EL TIPO
        // }
    },
    age:{
        type: Number,
        required: false,
        min: 0,
        max: 99
    },
    profileImage: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: [String],
        required: false,
    },
    details: {
        type: [String],
        required: false
    },
    missing: {
        type: Boolean,
        required: true,
        default: false
    },
    retained: {
        type: Boolean,
        required: true,
        default: false
    },
    ubications: {
        type: [/*SCHEMA DE UBICACIONES*/]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    QR: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'QR'
    },
},{
    timestamps: true
});

const NFT = mongoose.model('NFT', NFTSchema);

module.exports = NFT