module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '75c84b031fcedce7e73ac83355050fce'),
  },
});
