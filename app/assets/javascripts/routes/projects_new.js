App.ProjectsNewRoute = Ember.Route.extend({

  setupController: function(controller,model) {
    controller.set('fields', {});
	this._super(controller, model);
        this.controllerFor('users').set('content', this.store.find('user'));
//    controller.set('content', model);
   controller.set('showError', false);
  }

})
