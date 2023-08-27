import { model, Schema } from "mongoose";


const NodeSchema = new Schema({
  name: { type: String, required: true },
  apiIdentifier: { type: String, required: true }
})

export const NodeModel = model("Node", NodeSchema);
