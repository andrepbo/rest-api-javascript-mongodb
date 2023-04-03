const mongoose = require("mongoose");
const { serviceSchema } = require("./Service");

const { Schema, model } = mongoose;

const partySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    desciption: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    services: {
      type: [serviceSchema],
    },
  },
  { timestamps: true }
);

const Party = model("Party", partySchema);

module.exports = Party;
