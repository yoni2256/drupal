/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/'use strict';

var _wp = wp,
    blocks = _wp.blocks,
    data = _wp.data;
var withSelect = data.withSelect;
var getBlockType = blocks.getBlockType;


function BlockTitle(_ref) {
  var name = _ref.name;


  if (!name) {
    return null;
  }

  var blockType = getBlockType(name);

  if (!blockType) {
    return null;
  }

  return blockType.title;
}

Object.defineProperty(wp.blockEditor, 'BlockTitle', {
  get: withSelect(function (select, ownProps) {
    var _select = select('core/block-editor');
    var getBlockName = _select.getBlockName;

    console.log('BlockTitle');

    var clientId = ownProps.clientId;

    return {
      name: getBlockName(clientId) + ' - from Drupal!!!'
    };
  })(BlockTitle)
});