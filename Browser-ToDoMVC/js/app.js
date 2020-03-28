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
  'use strict';

  Handlebars.registerHelper('eq', function(a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });

  let ENTER_KEY = 13;
  let ESCAPE_KEY = 27;

  let util = {
    uuid: function() {
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
    pluralize: function(count, word) {
      return count === 1 ? word : word + 's';
    },
    store: function(namespace, data) {
      if (arguments.length > 1) {
        return localStorage.setItem(namespace, JSON.stringify(data));
      } else {
        let store = localStorage.getItem(namespace);
        return (store && JSON.parse(store)) || [];
      }
    }
  };

  let App = {
    init: function() {
      this.todos = util.store('todos-jquery');
      this.todoTemplate = Handlebars.compile(document.querySelector('#todo-template').innerHTML);
      this.footerTemplate = Handlebars.compile(document.querySelector('#footer-template').innerHTML);
      this.bindEvents();

      new Router({
        '/:filter': function(filter) {
          this.filter = filter;
          this.render();
        }.bind(this)
      }).init('/all');
    },
    bindEvents: function() {
      document.querySelector('.new-todo').addEventListener('keyup', this.create.bind(this));
      document.querySelector('.toggle-all').addEventListener('change', this.toggleAll.bind(this));
      document.querySelector('.footer').addEventListener(
        'click',
        // '.clear-completed',
        this.destroyCompleted.bind(this),
        true
      );
      // $('.todo-list')
      //   .on('change', '.toggle', this.toggle.bind(this))
      //   .on('dblclick', 'label', this.editingMode.bind(this))
      //   .on('keyup', '.edit', this.editKeyup.bind(this))
      //   .on('focusout', '.edit', this.update.bind(this))
      //   .on('click', '.destroy', this.destroy.bind(this));
      let todoList = document.querySelector('.todo-list');
      delegateEvent(todoList, 'change', '.toggle', todoList.classList.toggle.bind(this))
      delegateEvent(todoList, 'dblclick', 'label', this.editingMode.bind(this))
      delegateEvent(todoList, 'keyup', '.edit', this.editKeyup.bind(this))
      delegateEvent(todoList, 'focusout', '.edit', this.update.bind(this))
      delegateEvent(todoList, 'click', 'destroy', this.destroy.bind(this)) 
    },
    render: function() {
      let todos = this.getFilteredTodos();
      document.querySelector('.todo-list').innerHTML = this.todoTemplate(todos);
      document.querySelector('.main').classList.toggle(todos.length > 0);
      document.querySelector('.toggle-all').prop = 'checked', this.getActiveTodos().length === 0;
      this.renderFooter();
      document.querySelector('.new-todo').focus();
      util.store('todos-jquery', this.todos);
    },
    renderFooter: function() {
      let todoCount = this.todos.length;
      let activeTodoCount = this.getActiveTodos().length;
      let template = this.footerTemplate({
        activeTodoCount: activeTodoCount,
        activeTodoWord: util.pluralize(activeTodoCount, 'item'),
        completedTodos: todoCount - activeTodoCount,
        filter: this.filter
      });

      document.querySelector('.footer').classList
        .toggle(todoCount > 0)
        .innerHTML = template;
    },
    toggleAll: function(e) {
      let isChecked = $(e.target).prop('checked');

      this.todos.forEach(function(todo) {
        todo.completed = isChecked;
      });

      this.render();
    },
    getActiveTodos: function() {
      return this.todos.filter(function(todo) {
        return !todo.completed;
      });
    },
    getCompletedTodos: function() {
      return this.todos.filter(function(todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function() {
      if (this.filter === 'active') {
        return this.getActiveTodos();
      }

      if (this.filter === 'completed') {
        return this.getCompletedTodos();
      }

      return this.todos;
    },
    destroyCompleted: function() {
      this.todos = this.getActiveTodos();
      this.render();
    },
    // accepts an element from inside the `.item` div and
    // returns the corresponding index in the `todos` array
    getIndexFromEl: function(el) {
      let id = el
        .closest('li')
        .dataset = 'id';
      let todos = this.todos;
      let i = todos.length;

      while (i--) {
        if (todos[i].id === id) {
          return i;
        }
      }
    },
    create: function(e) {
      let input = e.target;
      let val = input.value.trim();

      if (e.which !== ENTER_KEY || !val) {
        return;
      }

      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });

      input.value = '';

      this.render();
    },
    toggle: function(e) {
      let i = this.getIndexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
    },
    editingMode: function(e) {
      let input = e.target
        .closest('li')
        .classList.add('editing')
        .classList.contains('.edit');
      // puts caret at end of input
      let tmpStr = document.querySelector(input).value;
      input.value = '';
      input.value = tmpStr;
      input.focus();
    },
    editKeyup: function(e) {
      if (e.which === ENTER_KEY) {
        e.target.blur();
      }

      if (e.which === ESCAPE_KEY) {
        e.target
          .dataset ==='abort';
          e.target.blur();
      }
    },
    update: function(e) {
      let el = e.target;
      let $el = el;
      let val = $el.value.trim();
      
      if ($el.dataset === 'abort') {
        $el.data('abort', false);
      } else if (!val) {
        this.destroy(e);
        return;
      } else {
        this.todos[this.getIndexFromEl(el)];
      }

      this.render();
    },
    destroy: function(e) {
      this.todos.splice(this.getIndexFromEl(e.target), 1);
      this.render();
    }
  };

  App.init();
