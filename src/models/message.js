import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});


messageSchema.pre('remove', function(next) {
  this.model('Message').deleteMany({ user: this._id }, next);
});

const Message = mongoose.model('Message', messageSchema);

export default Message;
