import mongoose from 'mongoose'
import uuidV4 from 'uuid/v4'
import dbConnection from '../database'

const Types = mongoose.Schema.Types
const TagSchema = mongoose.Schema({
  slug: {
    type: Types.String,
    lowercase: true,
    index: true,
    required: [true, "tag's slug cannot be empty"],
    unique: [true, 'tag with this slug has exists']
  },
  uuid: {
    type: Types.String,
    default: uuidV4()
  },
  title: Types.String
}, {
  versionKey: false
})

export default dbConnection.model('tag', TagSchema)
