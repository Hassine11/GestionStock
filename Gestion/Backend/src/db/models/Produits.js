import mongoose, { SchemaTypes } from 'mongoose' ;


const ProduitsSchema = new mongoose.Schema({

Code : {
    type : String,
    unique : true 
},
Name : { 
type : String,
},
Catégorie : {
    type: SchemaTypes.ObjectId,
    ref : 'Catégories'
},
PrixAchat : {
    type : Number,
    required : true
},
PrixVente :{
   type: Number,
   required: true
},
TVA  : {
    type : Number 
},
Quantité : {
    type : Number
}
})

const Produits = mongoose.model('Produits',ProduitsSchema);
export default Produits