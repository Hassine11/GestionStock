import mongoose from 'mongoose' ;


const FacturesSchema = new mongoose.Schema({

Code : {
    type : String,
    unique : true 
},
Payment : [{type:String}],

GSM : {
    type: Number,
    required : true,
    unique : true
},
Client : {
    type : SchemaTypes.ObjectId,
    ref : 'Clients'
},
Produits :{
   type: SchemaTypes.ObjectId,
   ref : 'Produits'
},
TotaleHT : {
    type : Number
},
TotaleTVA: {
    type : Number
},
})

const Factures = mongoose.model('Factures',FacturesSchema);
export default Factures