import angular from 'angular';
import marked from 'marked';

const module = angular.module('js-angular-markdown', []);

module.component('markdown', {
    bindings: {
        'options': '<',
        'content': '<'
    },
    controller: class {
        constructor($element) {
            this.$element = $element;

            this.$element.css('display', 'block');
        }
        $onChanges() {
            this.$element.html(marked(this.content || '', angular.extend({}, this.options)));
        }
    }
});

export default module.name;
