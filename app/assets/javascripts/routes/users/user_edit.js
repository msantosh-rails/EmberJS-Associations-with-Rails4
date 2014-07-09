App.UserEditRoute = Ember.Route.extend({

  activate:   function() { this.controllerFor('user').set('isEditing', true) },
  deactivate: function() { this.controllerFor('user').set('isEditing', false) }

})
