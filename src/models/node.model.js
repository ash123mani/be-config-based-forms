import { model, Schema } from "mongoose";


const NodeSchema = new Schema({
  name: { type: String, name: true }
})

export const NodeModel = model("Node", NodeSchema);
