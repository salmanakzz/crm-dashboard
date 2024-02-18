import mongoose, { Schema } from "mongoose";

export interface UserAttributes {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  age: string;
  mobile: string;
  role: string;
  imgUrl: string;
}

const UserSchema: Schema<UserAttributes> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  },
  imgUrl: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model<UserAttributes>("User", UserSchema);

export default UserModel;
