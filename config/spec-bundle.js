// https://raw.githubusercontent.com/AngularClass/angular2-webpack-starter/master/config/spec-bundle.js
Error.stackTraceLimit = Infinity;

require('core-js/es6');
require( 'core-js/es7/reflect');

// Typescript emit helpers polyfill
require( 'ts-helpers');

require( 'zone.js/dist/zone');
require( 'zone.js/dist/long-stack-trace-zone');
require( 'zone.js/dist/async-test');
require( 'zone.js/dist/fake-async-test');
require( 'zone.js/dist/sync-test');
require( 'zone.js/dist/proxy');
require( 'zone.js/dist/jasmine-patch');


require( 'rxjs');

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

require( '../src/client/app/app.module.ts');

jasmine.pp = function(obj) {
  return JSON.stringify(obj, undefined, 2);
};
var testContext = require.context('../src/client/app', true, /\.spec.ts/);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

var modules = requireAll(testContext);

