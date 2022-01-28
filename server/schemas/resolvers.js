import { AuthenticationError } from 'apollo-server-express';
import { User } from '../models';
import { signToken } from '../utils/auth';

let resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        let userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('this is the Not logged in error');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      
      let user = await User.create(args);
      let token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      
      let user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Email not found. Maybe try one more time?');
      }

      let correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('That is not the password. Take a breath, try again.');
      }

      let token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { content }, { user }) => {
      if (user) {
        let updatedUser = await User.findByIdAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: content } },
          { new: true, runValidations: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('Yo, don!');
    },
    removeBook: async (parent, { bookId }, context) => {
      if (user) {
        let modifiedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true, runValidations: true  }
        );

        return modifiedUser;
      }

      throw new AuthenticationError('Not logged in, You need to be!');
    },
  },
};

export default resolvers;
