goog.provide("closuretest.module");

goog.require("goog.dom");
goog.require("goog.events.EventTarget");

/**
 * @extends {goog.events.EventTarget}
 * @constructor
 */
closuretest.module.TestTarget = function () {
  closuretest.module.TestTarget.superClass_.constructor.apply(this, arguments);
};
goog.inherits(closuretest.module.TestTarget, goog.events.EventTarget);

/**
 * @override
 */
closuretest.module.TestTarget.prototype.disposeInternal = function () {
  closuretest.module.TestTarget.superClass_.disposeInternal.apply(this, arguments);
};

/**
 * @param {string} text
 */
closuretest.module.TestTarget.prototype.hello = function (text) {
  console.log(text);
};

var test = new closuretest.module.TestTarget();
test.hello("ohai!");
