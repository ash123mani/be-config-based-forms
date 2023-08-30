import { model, Schema } from 'mongoose';

const FieldsSchema = new Schema({
  nodeId: { type: Schema.Types.ObjectId, required: true },
  elementType: { type: String, required: true },
  basicInfo: {
    name: { type: String, required: true },
    apiIdentifier: { type: String, required: true },
    dataFields: { type: [Schema.Types.Mixed] }
  },
  validations: {
    required: { type: Boolean },
    errorMsg: { type: String },
    pattern: {
      value: { type: Boolean },
      pattern: { type: String },
      flags: { type: String },
      errorMsg: { type: String }
    }
  }
});

export const FieldsModel = model('Fields', FieldsSchema);
