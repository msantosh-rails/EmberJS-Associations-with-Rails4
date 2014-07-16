// For more information see: http://emberjs.com/guides/routing/
/*App.Router.reopen({
  location: 'auto',
  rootURL: '/'
})*/

App.Router.map(function() {


//	this.resource('projects', { path: '/projects' });
	this.resource('projects', { path: '/projects' }, function() {
	    this.route('new');
	    this.resource('project', { path: '/projects/:id' }, function() {
	      this.route('edit');
    	    });
    	});
    			
    this.route('home');
    this.route('login');
    this.route('registration');    
    
	this.resource('users', { path: '/users' }, function() {
	    this.route('new');
	    this.resource('user', { path: '/users/:id' }, function() {
	      this.route('edit');
    	});

	});
});


App.IndexRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    return this.transitionTo('home');
  }
});

App.LoginRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    return controller.set("errorMsg", "");
  },
  actions: {
    login: function() {
    //  log.info("Logging in...");
      return this.controllerFor("auth").login(this);
    },
    cancel: function() {
      //log.info("cancelling login");
      return this.transitionTo('home');
    }
  }
});

App.RegistrationRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create();
  },
  actions: {
    register: function() {
//      log.info("Registering...");
      return this.controllerFor("auth").register(this);
    },
    cancel: function() {
//      log.info("cancelling registration");
      return this.transitionTo('home');
    }
  }
});

