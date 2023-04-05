const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Course = new Schema({
    _id: { type: Number, },
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 600 },
    videoId: { type: String, maxLength: 600, required: true },
    level: { type: String, maxLength: 600, required: true },
    image: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true }
}, { 
    timestamps: true ,
    _id: false,
})


mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true
})
Course.plugin(AutoIncrement)

module.exports = mongoose.model('Course', Course)