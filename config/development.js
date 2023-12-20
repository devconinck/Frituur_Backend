module.exports = {
  port: 8080,

  cors: {
    origins: ['http://localhost:3000'],
    maxAge: 3 * 60 * 60,
  },
};
