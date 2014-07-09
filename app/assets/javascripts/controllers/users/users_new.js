App.UsersNewController = Ember.Controller.extend({

  actions: {

    createUser: function() {

      var self = this;
      var fields = this.get('fields')

      if (App.User.valid(fields)) {
        var user = this.store.createRecord('user', fields)
        user.save().then(function(user) {
          self.transitionToRoute('user', user)
        });
      } else {
        this.set('showError', true)
      }
    }

  }

})
