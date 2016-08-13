# Angular markdown component

Markdown component for angular 1.5, uses [marked](https://github.com/chjj/marked) as rendered.

## Usage

1. `npm install --save-dev js-angular-markdown`
2. Import `js-angular-markdown` library and use default imported value as angular module dependency.
3. Use markdown element in you templates.

**Important** this component uses [UMD](https://github.com/umdjs/umd) and requires angular package.

## Example usage

```javascript
import angular from 'angular';
import markdown from 'js-angular-markdown';

const module = angular.module('example', [markdown]);

module.component('example', {
    template: `
        <markdown content="$ctrl.content" options="$ctrl.options"></markdown>
    `,
    controller: class {
        constructor(){
            this.content = '# Hello!';
            this.options = {}; // It's totally optional. See available options in https://github.com/chjj/marked
        }
    }
});

export default module.name;

```

## License

MIT, see more in LICENSE file.
