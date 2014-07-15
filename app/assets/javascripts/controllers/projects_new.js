App.ProjectsNewController = Ember.Controller.extend({
users: function(){
        return this.store.find('user');
    }.property(),
    
  actions: {

    createProject: function() {

      var self = this;
      var fields = this.get('fields')

      if (App.Project.valid(fields)) {
        var project = this.store.createRecord('project', fields)
        project.save().then(function(project) {
          self.transitionToRoute('projects')
        });
      } else {
        this.set('showError', true)
      }
    }

  }

})
