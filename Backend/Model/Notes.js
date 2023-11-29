import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
// import user from '../Model/User.js';
const { ObjectId } = mongoose.Schema.Types
const NotesSchema = new Schema({
  
    user:{
        type: ObjectId,
        ref: 'user'
    },
  
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
});
export default model('notes', NotesSchema);