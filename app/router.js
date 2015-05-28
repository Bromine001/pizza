import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tables', function() {
    this.route('table', {path: ':table_id'});
  });
  this.route('pizzas', function() {
    this.route('new');
  });
  this.route('pizza', function() {});

  this.route('partials', function() {
    this.route('-order');
  });
});

export default Router;
