module.exports = {
  port: 9000,

  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60,
  },
};
