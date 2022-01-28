const { User } = require('../models');

module.exports = {
    async saveBook({ user, body }, res) {
        console.log(user);
        try {let updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: body } },
            { new: true, runValidators: true }
},

async deleteBook({ user, params }, res)

);
if (!updatedUser) {
    return res.status(404).json({ message: "No user found with this id!" });
}
return res.json(updatedUser);