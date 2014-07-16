App.User = DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  status: DS.attr('string', { defaultValue: 'new' }),
  notes: DS.attr('string'),
//  projects: DS.hasMany("project", {async: true}),
    projectsCount: function() {
//    alert(this.get('projects'));
        return this.get('projects.length');
    }.property('count'),
    
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName')
  }.property('firstName', 'lastName')

}),

App.User.reopenClass({
  
  valid: function(fields) {
    return fields.firstName && fields.lastName
  }

});
