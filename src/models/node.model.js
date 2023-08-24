import { model, Schema } from "mongoose";


const NodeSchema = new Schema({
  displayName: { type: String, required: true },
  name: { type: String, required: true }
})

export const NodeModel = model("Node", NodeSchema);
