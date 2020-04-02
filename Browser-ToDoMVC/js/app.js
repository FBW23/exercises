<<<<<<< HEAD
/*global blocks */

(function () {
	'use strict';

	let ENTER_KEY = 13;
	let ESCAPE_KEY = 27;

	let App = blocks.Application();

	let Todo = App.Model({
		title: App.Property(),

		completed: App.Property(),

		editing: blocks.observable(),

		init: function () {
			let collection = this.collection();

			// collection is undefined when a Todo is still not part of the Todos collection
			if (collection) {
				// save to Local Storage on each attribute change
				this.title.on('change', collection.save);
				this.completed.on('change', collection.save);
			}

			this.title.on('change', function (newValue) {
				this.title((newValue || '').trim());
			});
		},

		toggleComplete: function () {
			this.completed(!this.completed());
		},

		edit: function () {
			this.lastValue = this.title();
			this.editing(true);
		},

		closeEdit: function () {
			if (this.title()) {
				this.editing(false);
			} else {
				this.destroy();
			}
		},

		handleAction: function (e) {
			if (e.which === ENTER_KEY) {
				this.closeEdit();
			} else if (e.which === ESCAPE_KEY) {
				this.title(this.lastValue);
				this.editing(false);
			}
		}
	});

	let Todos = App.Collection(Todo, {
		remaining: blocks.observable(),

		init: function () {
			this
				// load the data from the Local Storage
				.reset(JSON.parse(localStorage.getItem('todos-jsblocks')) || [])
				// save to Local Storage on each item add or remove
				.on('add remove', this.save)
				.updateRemaining();
		},

		// set all todos as completed
		toggleAll: function () {
			let complete = this.remaining() === 0 ? false : true;
			this.each(function (todo) {
				todo.completed(complete);
			});
		},

		// remove all completed todos
		clearCompleted: function () {
			this.removeAll(function (todo) {
				return todo.completed();
			});
		},

		// saves all data back to the Local Storage
		save: function () {
			let result = [];

			blocks.each(this(), function (model) {
				result.push(model.dataItem());
			});

			localStorage.setItem('todos-jsblocks', JSON.stringify(result));

			this.updateRemaining();
		},

		// updates the observable
		updateRemaining: function () {
			this.remaining(this.reduce(function (memo, todo) {
				return todo.completed() ? memo : memo + 1;
			}, 0));
		}
	});

	App.View('Todos', {
		options: {
			// creates a route for the View in order to handle
			// /all, /active, /completed filters
			route: blocks.route('{{filter}}').optional('filter')
		},

		filter: blocks.observable(),

		newTodo: new Todo(),

		// holds all todos for the current view
		// todos are filtered if "Active" or "Completed" is clicked
		todos: new Todos().extend('filter', function (value) {
			let mode = this.filter();
			let completed = value.completed();
			let include = true;

			if (mode === 'active') {
				include = !completed;
			} else if (mode === 'completed') {
				include = completed;
			}

			return include;
		}),

		// filter the data when the route have changed
		// the callback is fired when "All", "Active" or "Completed" have been clicked
		routed: function (params) {
			if (params.filter !== 'active' && params.filter !== 'completed') {
				params.filter = 'all';
			}
			this.filter(params.filter);
		},

		addTodo: function (e) {
			if (e.which === ENTER_KEY && this.newTodo.title()) {
				this.todos.push(this.newTodo);
				// return all Todo values to their defaults
				this.newTodo.reset();
			}
		}
	});
})();
=======
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
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  Handlebars.registerHelper('eq', function (a, b, options) {
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
      // toggle = Show & hide
      // style display block / none
      // toggle(condition) ==> jquery
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
    create: function (e) {
      let $input = e.target;
      let val = $input.value.trim();

      if (e.which !== ENTER_KEY || !val) {
        return;
      }

      this.todos.push({
        id: util.uuid(),
        title: val,
        completed: false
      });

      $input.value = '';

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
      let $el = $(el);
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
>>>>>>> 0047ea6c9ea6b60d1f7097599079d652f7e1f859
