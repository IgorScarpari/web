"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;
var docBacklinkRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'content'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'referrer [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command', 'link']]
};
var _default = docBacklinkRole;
exports.default = _default;