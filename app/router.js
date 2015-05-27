import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tables', function() {
    this.route('table', {path: ':table_id'});
  });
  this.route('pizzas');
});

export default Router;
