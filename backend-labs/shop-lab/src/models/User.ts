import { Schema, model } from "mongoose"

const UserSchema = new Schema(
  {
    displayName: {
      type: String,
      required: true
    },
    photoURL: {
      type: String
    },
    darkTheme: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)

const User = model("User", UserSchema)
export default User
