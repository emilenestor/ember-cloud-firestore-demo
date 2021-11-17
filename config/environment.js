'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-cloud-firestore-demo',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },
    
    'ember-cloud-firestore-adapter': {
      firebaseConfig: {
        // apiKey: '<api_key>',
        // authDomain: '<auth_domain>',
        // databaseURL: '<database_url>',
        // projectId: '<project_id>',
        // storageBucket: '<storage_bucket>',
        // messagingSenderId: '<messaging_sender_id>',
      },
      firestore: {
        // emulator: {
        //   hostname: 'localhost',
        //   port: 8080,
        // },
      },
      auth: {
        // emulator: {
        //   hostname: 'localhost',
        //   port: 9099,
        // },
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
