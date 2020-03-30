// ! This is a helper function to delegate events from an element to any child with a specified selector.
// ? Use where required.
function delegateEvent(fromElement, eventName, targetSelector, callback) {
  fromElement.addEventListener(eventName, event => {
    let targetsList = [...event.currentTarget.querySelectorAll(targetSelector)];
    if (targetsList.includes(event.target)) {
      callback(event);
    }
  }); 
}
/*global jQuery, Handlebars, Router */
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',function() { 
  'use strict';
  Handlebars.registerHelper('eq', function(a, b, options) {
=======
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Handlebars.registerHelper('eq', function (a, b, options) {
>>>>>>> abe3dae2ca914ce469415b2b79dd31f26a6336c9
    return a === b ? options.fn(this) : options.inverse(this);
  });
  let ENTER_KEY = 13;
  let ESCAPE_KEY = 27;
  let util = {
    uuid: function () {
      /*jshint bitwise:false */
      let i, random;
      let uuid = '';
      for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
          uuid += '-';
        }
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
          16
        );
      }

      return uuid;
    },
    pluralize: function (count, word) {
      return count === 1 ? word : word + 's';
    },
    store: function (namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        let store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };
  let App = {
    init: function () {
      this.todos = util.store('todos-jquery');
      this.todoTemplate = Handlebars.compile(document.querySelector('#todo-template').innerHTML);
      this.footerTemplate = Handlebars.compile(document.querySelector('#footer-template').innerHTML);
      this.bindEvents();
      new Router({
        '/:filter': function (filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init('/all');
    },
<<<<<<< HEAD
    bindEvents: function() {
      document.querySelector('.new-todo').addEventListener('keyup', this.create.bind(this));
      document.querySelector('.toggle-all').addEventListener('change', this.toggleAll.bind(this));
      delegateEvent(document.querySelector('.footer'), 'click', '.clear-completed', this.destroyCompleted.bind(this));
      // document.querySelector('.footer').addEventListener(
      //   'click',
      //   '.clear-completed',
      //   this.destroyCompleted.bind(this)
      //  );
      // delegateEvent(fromElement, eventName, targetSelector, callback)
      delegateEvent(document.querySelector('.todo-list'), 'change', '.toggle', this.toggle.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'dblclick', 'label', this.editingMode.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'keyup', '.edit', this.editKeyup.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'focusout', '.edit', this.update.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'click', '.destroy', this.destroy.bind(this));
        // .addEventListener('change', '.toggle', this.toggle.bind(this)) 
        // .addEventListener('dblclick', 'label', this.editingMode.bind(this))
        // .addEventListener('keyup', '.edit', this.editKeyup.bind(this))
        // .addEventListener('focusout', '.edit', this.update.bind(this))
        // .addEventListener('click', '.destroy', this.destroy.bind(this));
    },
    render: function() {
      let todos = this.getFilteredTodos();
      document.querySelector('.todo-list').innerHTML = this.todoTemplate(todos);
      document.querySelector('.main').toggle(todos.length > 0);
      document.querySelector('.toggle-all').prop('checked', this.getActiveTodos().length === 0);
=======
    bindEvents: function () {
      document.querySelector('.new-todo').addEventListener('keyup', this.create.bind(this));
      document.querySelector('.toggle-all').addEventListener('change', this.toggleAll.bind(this));

      delegateEvent(document.querySelector('.footer'), 'click', '.clear-completed', this.destroyCompleted.bind(this));

      const todoList = document.querySelector('.todo-list');

      delegateEvent(todoList, 'change', '.toggle', this.toggle.bind(this));

      delegateEvent(todoList, 'dblclick', 'label', this.editingMode.bind(this));

      delegateEvent(todoList, 'keyup', '.edit', this.editKeyup.bind(this));

      delegateEvent(todoList, 'focusout', '.edit', this.update.bind(this));

      delegateEvent(todoList, 'click', '.destroy', this.destroy.bind(this));
    },
    render: function () {
      let todos = this.getFilteredTodos();
      document.querySelector('.todo-list').innerHTML = this.todoTemplate(todos);
      // toggle = Show & hide
      // style display block / none
      // toggle(condition) ==> jquery
      const main = document.querySelector('.main');
      if (todos.length > 0) { // condition
        main.style.display = 'block';
      } else {
        main.style.display = 'none'
      }
      // prop(property, value) ===> property = value
      document.querySelector('.toggle-all').checked = this.getActiveTodos().length === 0;
>>>>>>> abe3dae2ca914ce469415b2b79dd31f26a6336c9
      this.renderFooter();
      document.querySelector('.new-todo').focus();
      util.store('todos-jquery', this.todos);
    },
    renderFooter: function () {
      let todoCount = this.todos.length;
      let activeTodoCount = this.getActiveTodos().length;
      let template = this.footerTemplate({
        activeTodoCount: activeTodoCount,
        activeTodoWord: util.pluralize(activeTodoCount, 'item'),
        completedTodos: todoCount - activeTodoCount,
        filter: this.filter
      });
<<<<<<< HEAD
<<<<<<< HEAD
      $('.footer')
        .toggle(todoCount > 0)
        .html(template); 
    },
    toggleAll: function(e) {
      let isChecked = $(e.target).prop('checked');
      this.todos.forEach(function(todo) {
=======
=======
      // toggle = Show & hide
      // style display block / none
      // toggle(condition) ==> jquery
>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
      const footer = document.querySelector('.footer');
      if (todoCount > 0) { // condition
        footer.style.display = 'block';
      } else {
        footer.style.display = 'none'
      }
      footer.innerHTML = template;
    },
    toggleAll: function (e) {
      let isChecked = e.target.checked;

      this.todos.forEach(function (todo) {
>>>>>>> abe3dae2ca914ce469415b2b79dd31f26a6336c9
        todo.completed = isChecked;
      });
      this.render();
    },
    getActiveTodos: function () {
      return this.todos.filter(function (todo) {
        return !todo.completed;
      });
    },
    getCompletedTodos: function () {
      return this.todos.filter(function (todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function () {
      if (this.filter === 'active') {
        return this.getActiveTodos();
      }
      if (this.filter === 'completed') {
        return this.getCompletedTodos();
      }
      return this.todos;
    },
    destroyCompleted: function () {
      this.todos = this.getActiveTodos();
      this.render();
    },
    // accepts an element from inside the `.item` div and
    // returns the corresponding index in the `todos` array
    getIndexFromEl: function (el) {
      let id = el
        .closest('li')
        .dataset.id;
      let todos = this.todos;
      let i = todos.length;
      while (i--) {
        if (todos[i].id === id) {
          return i;
        }
      }
    },
<<<<<<< HEAD
    create: function(e) {
      let $input = $(e.target);
      let val = $input.val().trim();
=======
    create: function (e) {
      let $input = e.target;
      let val = $input.value.trim();

>>>>>>> abe3dae2ca914ce469415b2b79dd31f26a6336c9
      if (e.which !== ENTER_KEY || !val) {
        return;
      }
      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });
<<<<<<< HEAD
      $input.val('');
=======

      $input.value = '';

>>>>>>> abe3dae2ca914ce469415b2b79dd31f26a6336c9
      this.render();
    },
    toggle: function (e) {
      let i = this.getIndexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
    },
    editingMode: function (e) {
      let $input = $(e.target)
        .closest('li')
        .addClass('editing')
        .find('.edit');
      // puts caret at end of input
      let tmpStr = $input.val();
      $input.val('');
      $input.val(tmpStr);
      $input.focus();
    },
    editKeyup: function (e) {
      if (e.which === ENTER_KEY) {
        e.target.blur();
      }
      if (e.which === ESCAPE_KEY) {
        $(e.target)
          .data('abort', true)
          .blur();
      }
    },
    update: function (e) {
      let el = e.target;
<<<<<<< HEAD
<<<<<<< HEAD
      let $el = $(el);
      let val = $el.val().trim();
      if ($el.data('abort')) {
        $el.data('abort', false);
=======
      let $el = el;
      let val = $el.value.trim();

      if ($el.dataset.abort) {
        $el.dataset.abort = false;
>>>>>>> abe3dae2ca914ce469415b2b79dd31f26a6336c9
=======
      let $el = $(el);
      let val = $el.val().trim();

      if ($el.data('abort')) {
        $el.data('abort', false);
>>>>>>> 7dffd8616c6c5a293312fb1dd2cf29ec9c992012
      } else if (!val) {
        this.destroy(e);
        return;
      } else {
        this.todos[this.getIndexFromEl(el)].title = val;
      }
      this.render();
    },
    destroy: function (e) {
      this.todos.splice(this.getIndexFromEl(e.target), 1);
      this.render();
    }
  };
  App.init();
});