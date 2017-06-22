'use strict';

module.exports = function buildAlibabaPreset(context, options) {
	return {
		presets: [
			[
				require('babel-preset-env'),
				{
					targets: {
						// React parses on ie 9, so we should too
						ie: 9,
						// We currently minify with uglify
						// Remove after https://github.com/mishoo/UglifyJS2/issues/448
						uglify: true,
					},
					// Disable polyfill transforms
					useBuiltIns: false,
					// Do not transform modules to CJS
					modules: false,
				}
			],
			require('babel-preset-es2017'),
			require('babel-preset-react'),
		],
		plugins: [
			[require('babel-plugin-transform-react-jsx'), { useBuiltIns: true }],
			[require('babel-plugin-transform-react-jsx-source')],
			[require('babel-plugin-transform-react-jsx-self')],
			// https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-decorators
			require('babel-plugin-transform-decorators'),
			// https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-function-bind
			require('babel-plugin-transform-function-bind'),
			// https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-dynamic-import
			require('babel-plugin-syntax-dynamic-import'),
			require('babel-plugin-transform-class-properties'),
			[require('babel-plugin-transform-runtime'), {helpers: false, polyfill: false, regenerator: true }],

			[require('babel-plugin-transform-es2015-template-literals'), { spec: true }],
			require('babel-plugin-transform-es3-member-expression-literals'),
			require('babel-plugin-transform-es3-property-literals'),
			require('babel-plugin-transform-jscript'),
			require('babel-plugin-transform-exponentiation-operator'),
			require('babel-plugin-syntax-trailing-function-commas'),
			[require('babel-plugin-transform-regenerator'), { async: false }],
			[require('babel-plugin-transform-object-rest-spread'), { useBuiltIns: true }],
		],
	};
};
