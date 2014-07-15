App.ProjectEditRoute = Ember.Route.extend({

  activate:   function() { this.controllerFor('project').set('isEditing', true) },
  deactivate: function() { this.controllerFor('project').set('isEditing', false) }

})
