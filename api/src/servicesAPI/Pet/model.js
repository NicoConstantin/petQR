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
        validate: (v)=>{
        }
    },
    amountEmitted:{
        type: Number,
        required: true,
        immutable: true,
        sparse: true,
        unique: false,
        enum: AMOUNTS_EMIT
    },
    rarity: {
        type: String,
        required: true,
        trim: true,
        immutable: true,
        sparse: true,
        unique: false,
        enum: NFTS_RARITIES.map(i=>i.rarity)
    },
    rarityNumber: {
        type: Number,
        required: true,
        immutable: true,
        sparse: true,
        unique: false,
        enum: NFTS_RARITIES.map(i=>i.rarityNumber)
    },
    price: {
        type: Number,
        required: true,
        sparse: true,
        unique: false,
        min: 0.0000001,
    },
    textureLeft: {
        type: String,
        required: true,
        trim: true,
        sparse: true,
        unique: false,
        match: regexIPFS,
        immutable: true
    },
    textureRight: {
        type: String,
        required: true,
        trim: true,
        sparse: true,
        unique: false,
        match: regexIPFS,
        immutable: true
    },
    imageNFT: {
        type: String,
        required: true,
        trim: true,
        sparse: true,
        unique: false,
        match: regexIPFS,
        immutable: true
    },
    blockchain: {
        type: String,
        required: true,
        trim: true,
        sparse: true,
        unique: false,
        default: 'Polygon',
        immutable: true,
        enum: BLOCKCHAINS
    },
    // collectionNFT: {
    //     //POINTER REVISAR
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: false,
    //     sparse: true,
    //     unique: false,
    //     immutable:true,
    //     ref: 'CollectionNFT'
    // },
    royalties: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        sparse: true,
        unique: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        immutable:true,
        sparse: true,
        unique: false,
        ref: 'User'
    },
    teaser: {
        type: String,
        required: false,
        match: regexIPFS,
        sparse: true,
        unique: false,
    },
    QR: {
        type: String,
        required: true,
        trim: true,
        match: regexIPFS,
        immutable: false,
        sparse: true,
        unique: false,
    },
    minted: {
        type: String,
        required: false,
        trim: true,
        match: regexOpenSea,
        immutable: false,
        sparse: true,
        unique: false,
    }
},{
    timestamps: true
});

const NFT = mongoose.model('NFT', NFTSchema);

module.exports = NFT