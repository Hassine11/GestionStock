import mongoose from 'mongoose';


const UsersSchema = new mongoose.Schema({
    Email : {
        type : String,
        unique : true,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Password : {
        type : String ,
        required : true
    },
    CIN : {
        type : Number,
        max : 8,
        min : 8,
        required :true
    },
    role : {
        type : String ,
        default : "admin"
    }
})

const Users = mongoose.model('Users',UsersSchema);
export default Users ;