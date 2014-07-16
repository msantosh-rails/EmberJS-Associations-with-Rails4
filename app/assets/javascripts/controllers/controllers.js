App.AuthController = Ember.ObjectController.extend({
  currentUser: null,
  isAuthenticated: Em.computed.notEmpty("currentUser.email"),
  login: function(route) {
    var me;
    me = this;
    return $.ajax({
      url: "/users/sign_in.json",
      type: "POST",
      data: {
        "user[email]": route.currentModel.email,
        "user[password]": route.currentModel.password
      },
      success: function(data) {
//        console.log("Login Msg " + data.user.dummy_msg);
        me.set('currentUser', data.user);
        return route.transitionTo('home');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.status === 401) {
          return route.controllerFor('login').set("errorMsg", "That email/password combo didn't work.  Please try again");
        } else if (jqXHR.status === 406) {
          return route.controllerFor('login').set("errorMsg", "Request not acceptable (406):  make sure Devise responds to JSON.");
        } else {
          return p("Login Error: " + jqXHR.status + " | " + errorThrown);
        }
      }
    });
  },
  register: function(route) {
    var me;
    me = this;
    return $.ajax({
      url: "/users.json",
      type: "POST",
      data: {
        "user[first_name]": route.currentModel.first_name,
        "user[last_name]": route.currentModel.last_name,        
        "user[email]": route.currentModel.email,
        "user[password]": route.currentModel.password,
        "user[password_confirmation]": route.currentModel.password_confirmation,
        "user[phone]": route.currentModel.phone        
      },
      success: function(data) {
        me.set('currentUser', data.user);
        return route.transitionTo('home');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return route.controllerFor('registration').set("errorMsg", "That email/password combo didn't work.  Please try again");
      }
    });
  },
  logout: function() {
    var me;
//    console.info("Logging out...");
    me = this;
    return $.ajax({
      url: "/users/sign_out.json",
      type: "DELETE",
      dataType: "json",
      success: function(data, textStatus, jqXHR) {
        $('meta[name="csrf-token"]').attr('content', data['csrf-token']);
        $('meta[name="csrf-param"]').attr('content', data['csrf-param']);
        console.info("Logged out on server");
        me.set('currentUser', null);
        return me.transitionToRoute("home");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        return alert("Error logging out: " + errorThrown);
      }
    });
  }
});

App.NavbarController = Ember.ObjectController.extend({
  needs: ['auth'],
  isAuthenticated: Em.computed.alias("controllers.auth.isAuthenticated"),
  actions: {
    logout: function() {
//      console.info("NavbarController handling logout event...");
      return this.get("controllers.auth").logout();
    }
  }
});

App.WelcomeMsgController = Ember.ObjectController.extend({
  needs: ['auth'],
  isAuthenticated: Em.computed.alias("controllers.auth.isAuthenticated"),
  user: Em.computed.alias("controllers.auth.currentUser"),
  hiName: Em.computed.any("user.first_name", "user.email")
});

