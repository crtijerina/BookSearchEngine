const { User } = require("../models").default;

module.exports = {
  async saveBook({ user, body }, res) {
    console.log(user);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: user._id },
        { $addToSet: { savedBooks: body } },
        { new: true, runValidators: true }
      );
      return res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  async deleteBook({ user, params }, res) {
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      {
        $pull: {
          savedBooks: { bookId: params.bookId },
        },
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "Sorry, No user found with this id." });
   }
    return res.json(updatedUser);
  },
};
