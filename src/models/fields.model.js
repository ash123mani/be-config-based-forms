import { model, Schema } from "mongoose";


const FieldsSchema = new Schema({
  nodeId: { type: Schema.Types.ObjectId, required: true },
  elementType: { type: String, required: true },
  basicInfo: {
    name: { type: String, required: true },
    apiIdentifier: { type: String, required: true }
  }
})

export const FieldsModel = model("Fields", FieldsSchema);

