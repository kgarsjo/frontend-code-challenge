define([
  'marionette',
  'bug_tracker/views/templates/bug_item.tpl'
], function (Marionette, BugItemTpl) {
  'use strict';

  var BugItemView = Marionette.ItemView.extend({
    template: BugItemTpl,

    events: {
      'click .js_bug_edit': 'editBug',
      'click .js_bug_save': 'saveBug',
      'click .bug_remove': 'removeBug',
    },

    templateHelpers: function () {
      return {
        error: this.model.validationError,
      };
    },

    initialize: function () {
      if (!this.model) {
        throw new Error('BugItemView requires a model');
      }
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'invalid', this.showError);
    },

    // @TODO implement functions to handle 'editBug'
    // @TODO implement functions to handle 'saveBug'
    // @TODO implement functions to handle 'removeBug'

    // @TODO implement function to handle an 'invalid' event from the model

  });

  return BugItemView;
});
