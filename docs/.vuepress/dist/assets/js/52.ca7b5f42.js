(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{368:function(n,e,r){"use strict";r.r(e);var t=r(38),o=Object(t.a)({},function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("function BinarySearchTree(){\n  let Node = function(key){\n    this.key = key;\n    this.left = null;\n    this.right = null;\n  };\n\n  let root = null;\n\n  /**\n   * 获取树\n   */\n  this.getTree = function(){\n    return root;\n  };\n\n  /**\n   * 插入树\n   * @param {string} key 需要插入的值\n   */\n  this.insert = function(key){\n    let newNode = new Node(key);\n\n    if(root == null){\n      root = newNode;\n    } else {\n      insertNode(root,newNode);\n    };\n  };\n  /**\n   * 辅助insert函数插入新的节点\n   * @param {object} node 上级节点\n   * @param {string} node.key 节点值\n   * @param {object} node.left 左子节点指针\n   * @param {object} node.right 右子节点指针\n   * @param {object} newNode 新节点\n   * @param {string} newNode.key 新节点\n   * @param {object} newNode.left 左子节点指针\n   * @param {object} newNode.right 右子节点指针\n   */\n  function insertNode(node, newNode){\n    if(newNode.key < node.key){\n      if(node.left === null){\n        node.left = newNode;\n      } else {\n        insertNode(node.left,newNode);\n      }\n    } else {\n      if(node.right === null){\n        node.right = newNode;\n      } else {\n        insertNode(node.right, newNode);\n      }\n    }\n  }\n\n  /**\n   * 查找树\n   * @param {string} key 需要查找的值\n   * @return {boolean} 存在返回true、不存在返回false\n   */\n  this.search = function(key){};\n\n  /**\n   * 中序遍历，以上行顺序访问BST所有节点，从最小到最大\n   * @param {function} callback 回调函数\n   */\n  this.inOrderTraverse = function(callback){\n    inOrderTraverseNode(root, callback);\n  };\n  /**\n   * 中序便利辅助函数\n   * @param {object} node 节点\n   * @param {string} node.key 节点值\n   * @param {object} node.left 左子节点指针\n   * @param {object} node.right 右子节点指针\n   * @param {function} callback 回调函数\n   */\n  function inOrderTraverseNode(node, callback){\n    if(node !== null){\n      inOrderTraverseNode(node.left,callback);\n      callback(node.key);\n      inOrderTraverseNode(node.right,callback);\n    }\n  }\n  \n  /**\n   * 先序遍历，优先于后代节点的顺序访问每个节点\n   */\n  this.preOrderTraverse = function(callback){\n    preOrderTraverseNode(root,callback);\n  };\n  function preOrderTraverseNode(node,callback){\n    if(node !== null){\n      callback(node.key);\n      preOrderTraverseNode(node.left,callback);\n      preOrderTraverseNode(node.right,callback);\n    }\n  }\n\n  /**\n   * 后序遍历，先访问节点的后代节点，再访问节点本身\n   */\n  this.postOrderTraverse = function(callback){\n    postOrderTraverseNode(root,callback);\n  };\n  function postOrderTraverseNode(node,callback){\n    if(node.key !== null){\n      postOrderTraverseNode(node.left,callback);\n      postOrderTraverseNode(node.right,callback);\n      callback(node.key);\n    }\n  }\n\n  /**\n   * 返回树中最大值\n   * @return {number} \n   */\n  this.max = function(){};\n\n  /**\n   * 返回树中最小值\n   * @return {Number}\n   */\n  this.min = function(){};\n\n  /**\n   * 删除树中的某个值\n   * @param {Number} key 需要删除的值\n   */\n  this.remove = function(key){};\n}\n\nlet tree = new BinarySearchTree();\n\ntree.insert(11);\ntree.insert(7);\ntree.insert(15);\ntree.insert(5);\ntree.insert(3);\ntree.insert(9);\ntree.insert(8);\ntree.insert(10);\ntree.insert(13);\ntree.insert(12);\ntree.insert(14);\ntree.insert(20);\ntree.insert(18);\ntree.insert(25);\ntree.insert(6);\n\ntree.inOrderTraverse((val)=>{\n  console.log(val);\n});\n")])])])])},[],!1,null,null,null);e.default=o.exports}}]);