import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Cette email existe déjà'],
      required: [true, 'Le mail est requis'],
    },
    username: {
      type: String,
      required: [true, "Le nom d'utilisateur est requis"],
    },
    image: {
      type: String,
    },
    googleId: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Property',
      },
    ],
  },
  { timestamps: true },
)

const User = models.User || model('User', UserSchema)

export default User
