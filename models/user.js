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
<<<<<<< Updated upstream
        type: Number,
=======
        type:String,
>>>>>>> Stashed changes
        required: true
      //  

    },

    password: {
        type: String,
        required: true
      //  

    },

<<<<<<< Updated upstream
    image:{
     type:String,
        required: false
        
    },
=======
    /*image:{
     type:String,
        required: false
      
    },*/
>>>>>>> Stashed changes
    wallet: {
        type: String ,
        required :false,
        

    },  
    
    role: {
        type: String,
        required :true,
        

    },
    
    adresse: {

        type: String,
<<<<<<< Updated upstream
        required: true

       

        

    },


  

   
=======
        required: true 

         },
>>>>>>> Stashed changes
},
    {
        timestamp: true
    }
);

export default mongoose.model('user', UserSchema);
