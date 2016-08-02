import angular from 'angular';

import markdown from '../lib';

const module = angular.module('example', [markdown]);

module.controller('ExampleApplication', angular.noop);
