const jwt = require('jsonwebtoken');

const secret = 'mysecretsShhhshhchild';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
   
   
   
   
    //remeber this  
    // allows my token to be sent 
    // via req.body, req.query, or header yo, for reall tho!!!
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid or no token');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
