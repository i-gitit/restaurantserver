const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var feedbackSchema = new Schema(
  { 
      firstname: 
      { type:String},
      
      lastname:{
          type: String
      },

      telnum:{
          type: Number
      },

      email: {
          type: String
       },
       
       agree: {
           type: Boolean,
           default: false
       },

       contactType: { 
           type: String,
           default: 'Tel.' 
        },

        message: { 
            type:String
         }

  },{
    timestamps: true
});

var Feedbacks = mongoose.model('Feedback',feedbackSchema);
module.exports = Feedbacks;