//  we'll surround the code in a simple IIFE ("Immediately Invoked Function Execution"). It receives our app 'namespace' object as argument. We call our IIFE with window.app if it exists - and if it doesn't we initialize it as an empty object.
(function(app) {
  // ng.core.Component() tells Angular that this class definition object is an Angular component. The configuration object passed to the ng.core.Component() method has two fields, a selector and a template.
  app.AppComponent = ng.core
    .Component({
      // The selector specifies a simple CSS selector for a host HTML element
      // Angular creates and displays an instance of our AppComponent wherever it encounters a my-app element in the host HTML.
      selector: 'my-app',
      // The template property holds the component's companion template. A template is a form of HTML that tells Angular how to render a view.
      template: '<h1>My First Angular 2 App</h1>'
    })
    // When we're ready to build a substantive application, we can expand this object with properties and application logic.
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));