import mongoose from 'mongoose' ;


const ClientsSchema = new mongoose.Schema({

Email : {
    type : String,
    required : true,
    unique : true 
},
Name : {
    type : String,
    required : true
},
GSM : {
    type: Number,
    required : true,
    unique : true
},
Adresse : {
    type : String
},
Gouvernement : {
    type : String 
},
Fax :{
    type : String
}
})

const Clients = mongoose.model('Clients',ClientsSchema);
export default Clients