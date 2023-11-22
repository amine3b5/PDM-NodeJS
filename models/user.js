import mongoose from 'mongoose';

const { Schema, model } = mongoose;
const UserSchema = new Schema({               // tetbadel  selon el  esm el model 
//  bech  nda5el les variables eli  fel  diagramme 
    email: {
    type: String,
    required: true
    //
    },

   first_name: {
        type: String,
        required: true
      //  
    },

    last_name: {
        type: String,
        required: true
      //  
    },
   
    phone: {
        type: Number,
        required: true
      //  

    },

    password: {
        type: String,
        required: true
      //  

    },

    image:{
        type:String,
        required: true
        
    },
    wallet: {
        type: String,
        

    },
    adresse: {
<<<<<<< Updated upstream
        type: String,
        required: true
=======
        type: String
>>>>>>> Stashed changes
        

    },

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

=======
>>>>>>> Stashed changes
  
  

   
},
    {
        timestamp: true
    }
);

export default mongoose.model('user', UserSchema);