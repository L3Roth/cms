module.exports = ({ env }) => ({
  //host: env('HOST', 'pia.digital-tracht.de'),
  port: env.int('PORT', 80),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
