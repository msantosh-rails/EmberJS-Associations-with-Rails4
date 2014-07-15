App.Project = DS.Model.extend({
  projectName: DS.attr('string'),
  technology: DS.attr('string'),
  userId: DS.attr('number')
//  user   : DS.belongsTo('user')
//  user: DS.belongsTo('user', {async: true})

})

App.Project.reopenClass({

  valid: function(fields) {
    return fields.projectName && fields.technology
  }

});
