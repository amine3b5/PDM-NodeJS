import mongoose from "mongoose";

const { Schema, model } = mongoose;

const veloSchema = new Schema({
  // Define the schema fields for the "velos" table
  image: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  prix: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  disponible: {
    type: String,
    required: true,
  },

  longitude: {
    type: String, 
    required: false,
  },
  latitude: {
    type: String, 
    required: false,
  }

 
},
{timestamps: true});

export default model("velos", veloSchema);
