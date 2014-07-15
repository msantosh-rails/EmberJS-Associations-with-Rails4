App.ProjectController = Ember.ObjectController.extend({

  isEditing: false,
user: function(){

	return this.get("userId");
}.property(),
  
users: function(){
        return this.store.find('user');
    }.property(),
  
  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving'),

  actions: {

    delete: function() {
      var self = this;
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('projects');
      });
    },

    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
    }
  }

});
