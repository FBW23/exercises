// ! This is a helper function to delegate events from an element to any child with a specified selector.
// ? Use where required.
// const toggles = document.querySelectorAll('.toggle-all');

// for (let i = 0; i < toggles.length; i++) {
//   toggles[i].addEventListener('change', this.toggleAll.bind(this));
// }
function delegateEvent(fromElement, eventName, targetSelector, callback) {
  fromElement.addEventListener(eventName, event => {
    let targetsList = [...event.currentTarget.querySelectorAll(targetSelector)];

    if (targetsList.includes(event.target)) {
      callback(event);
    }
  });
}

/*global jQuery, Handlebars, Router */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Handlebars.registerHelper('eq', function (a, b, options) {
    return a === b ? options.fn(this) : options.inverse(this);
  });

  let ENTER_KEY = 13;
  let ESCAPE_KEY = 27;

  //object with functions
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

  //object with the init and function
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
    // object method (function)
    bindEvents: function () {
      document.querySelector('.new-todo').addEventListener('keyup', this.create.bind(this));
      document.querySelector('.toggle-all').addEventListener('change', this.toggleAll.bind(this));
      delegateEvent(document.querySelector('.footer'), 'click', '.clear-completed', this.destroyCompleted.bind(this));
      // document.querySelector('.footer').addEventListener(
      //   'click',
      //   '.clear-completed',
      //   this.destroyCompleted.bind(this)
      // );
      delegateEvent(document.querySelector('.todo-list'), 'change', '.toggle', this.toggle.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'dblclick', 'label', this.editingMode.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'keyup', '.edit', this.editKeyup.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'focusout', '.edit', this.update.bind(this));
      delegateEvent(document.querySelector('.todo-list'), 'click', '.destroy', this.destroy.bind(this));

      // .addEventListener('change', '.toggle', this.toggleClass.bind(this))
      // .addEventListener('dblclick', 'label', this.editingMode.bind(this))
      // .addEventListener('keyup', '.edit', this.editKeyup.bind(this))
      // .addEventListener('focusout', '.edit', this.update.bind(this))
      // .addEventListener('click', '.destroy', this.destroy.bind(this));
    },
    render: function () {
      const main = document.querySelector('.main');

      let todos = this.getFilteredTodos();
      document.querySelector('.todo-list').innerHtml = this.todoTemplate(todos);

      const toggleFunction = (element) => {  //this is the function to replace the toogle on jquery, but I didnt manage to apply it correctly.

        element.style.display == "block" ? element.style.display = "none" :
          element.style.display = "block";
      }
      //this function is adding and removing the displays to the main with the 'todos' with the status active and with the length > 0
      toggleFunction(document.querySelector('.main')).todos.length > 0;

      document.querySelector('.toggle-all'). disabled = true.this.getActiveTodos().length === 0;
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

      document.querySelector('.footer')
        .toggle(todoCount > 0)
        .innerHTML = template;
    },
    toggleAll: function (e) {
      let isChecked = e.target.checked = true;

      this.todos.forEach(function (todo) {
        todo.completed = isChecked;
      });

      this.render();
    },

    getActiveTodos: function () {

      [...todos].filter(e => {
        return !e.completed
      });
      // return this.todos.filter(function (todo) {
      //   return !todo.completed;
      // });
    },
    getCompletedTodos: function () {
      //here is supposed to return the elements with the todo function applied...
      return this.todos.filter(function (todo) {
        return todo.completed;
      });
    },
    getFilteredTodos: function () {
      // if (this.filter === 'active') { what is this 'active'? class? value?
      if (this.classList.contains('active')) {
        return this.getActiveTodos();
      }

      //if (this.filter === 'completed') {
      if (this.classList.contains('completed')) {
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
      let id = //$
        querySelector(el)
          //.closest('li')
          .parentNode
          .data('id');
      let todos = this.todos;
      let i = todos.length;

      while (i--) {
        if (todos[i].id === id) {
          return i;
        }
      }
    },
    create: function (e) {
      let $input = document.querySelector(e.target);
      let val = $input.val().trim();

      if (e.which !== ENTER_KEY || !val) {
        return;
      }

      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });

      $input.val('');

      this.render();
    },
    toggle: function (e) {
      let i = this.getIndexFromEl(e.target);
      this.todos[i].completed = !this.todos[i].completed;
      this.render();
    },
    editingMode: function (e) {
      let $input = document.querySelector(e.target, '.edit')
        // .closest('li')
        .parentNode
        .classList.add('editing')
      // .find('.edit'); - replaced for the query selector. line 185

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
        document.querySelector(e.target)
          .data('abort', true)
          .blur();
      }
    },
    update: function (e) {
      let el = e.target;
      let $el = document.querySelector(el);
      let val = $el.val().trim();

      if ($el.data('abort')) {
        $el.data('abort', false);
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
