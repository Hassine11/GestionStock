import mongoose, { SchemaTypes } from 'mongoose' ;


const CatégoriesSchema = new mongoose.Schema({

Name : { 
type : String,
},
})

const Catégories = mongoose.model('Catégories',CatégoriesSchema);
export default Catégories