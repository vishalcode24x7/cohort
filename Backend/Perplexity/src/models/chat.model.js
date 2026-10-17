import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    title: {
      type: String,
      trim: true,
      default: 'New chat',
    },
  },
  {
    timestamps: true,
  },
);

const chatModel = mongoose.model('Chat', chatSchema);

export default chatModel;