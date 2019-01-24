/*
    Schema to create, delete, modify users
*/

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

var userSchema = new mongoose.Schema({

    name: 'string',
    address: 'string',
    email: 'string',
    phone: 'string',
    bloodGroup: 'string'
});

var UserModel = mongoose.model('user', userSchema);



function createUser(name, address, email, phone, bloodGroup) {
    const newUserObject = new UserModel({
        name: name,
        address: address,
        email: email,
        phone: phone,
        bloodGroup: bloodGroup
    });
    newUserObject.save();
    console.log(newUserObject)

    // const createdUser = UserModel.findOne({email: email});
    // console.log('Created User is', createdUser);
}


function deleteUser(emailAddress) {
    UserModel.findOneAndDelete({ email: emailAddress }, (err, usr) => {
        if (err || !usr) {
            console.log('Error Deleting User');
        } else {
            console.log('User Deleted Successfully');
        }
    });
}


function modifyUser(userId, name, address, email, phone, bloodGroup) {
    UserModel.findOneAndUpdate({userId: ObjectId(userId)}, {
        name: name,
        email: email,
        address: address,
        phone: phone,
        bloodGroup: bloodGroup
    });
}

module.exports = {
    createUser: createUser,
    modifyUser: modifyUser,
    deleteUser: deleteUser
};