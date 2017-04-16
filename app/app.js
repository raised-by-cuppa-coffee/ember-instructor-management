import Ember from 'ember';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

// Setting custom inflector rules
import './models/custom-inflector-rules';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;
