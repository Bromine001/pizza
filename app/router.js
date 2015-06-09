import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: 'hash'
});

Router.map(function() {
  this.route('tables', function() {
    this.route('table', {path: ':table_id'});
  });
  this.route('pizzas', function() {
    this.route('new');
  });
 
});

export default Router;
