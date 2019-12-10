const mongoose = require('mongoose');
const campGroundsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comments'
    }
  ]
});
const CampGrounds = mongoose.model('CampGrounds', campGroundsSchema);

module.exports = CampGrounds;
