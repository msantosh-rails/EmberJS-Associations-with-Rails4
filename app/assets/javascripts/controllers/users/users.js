App.UsersController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName'],

  users: function() {
    return this.get('search') ? this.get('searchedUsers') : this
  }.property('search', 'searchedUsers'),

  searchedUsers: function() {
    var search = this.get('search').toLowerCase()
    return this.filter(function(user) {
      return user.get('fullName').toLowerCase().indexOf(search) != -1
    })
  }.property('search', 'this.@each.fullName')

})
