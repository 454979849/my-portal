/**
 * Created by Administrator on 5/18/2017.
 */
'use strict'

/**
 * 测试数据
 */
/* var datas = [
  {id: "1", parentId: "0", name: "name1"},
      {id: "2", parentId: "1", name: "name1_1"},
          {id: "7", parentId: "2", name: "name1_1_1"},
          {id: "8", parentId: "2", name: "name1_1_2"},
              {id: "10",  parentId: "8", name: "name1_1_2_1"},
              {id: "11", parentId: "8", name: "name1_1_2_2"},
              {id: "12", parentId: "8", name: "name1_1_2_3"},
                  {id: "14", parentId: "12", name: "name1_1_2_3_1"},
                      {id: "18", parentId: "14", name: "name1_1_2_3_1_1"},
                      {id: "19", parentId: "14", name: "name1_1_2_3_1_2"},
                      {id: "20", parentId: "14", name: "name1_1_2_3_1_3"},
                      {id: "21", parentId: "14", name: "name1_1_2_3_1_4"},
                  {id: "15", parentId: "12", name: "name1_1_2_3_2"},
                  {id: "16", parentId: "12", name: "name1_1_2_3_3"},
                  {id: "17", parentId: "12", name: "name1_1_2_3_4"},
              {id: "13", parentId: "8", name: "name1_1_2_4"},
          {id: "9", parentId: "2", name: "name1_1_3"},
      {id: "3", parentId: "1", name: "name1_2"},
      {id: "4", parentId: "1", name: "name1_3"},
      {id: "5", parentId: "1", name: "name1_4"},
      {id: "6", parentId: "1", name: "name1_5"},
];*/
function covertToTree(datas, fields) {
  var nodeTree = {}
  var nodeMap = {}

  for (var idx in datas) {
    var data = datas[idx]

    // 数据的合法性校验，id和parentId不允许相同
    if (data.id == data.parentId) {
      throw {
        message: '结点ID[id: ' + data.id + ', parentId: ' + data.parentId + ', name: ' + data.name + ']与父结点ID相同导致循环依赖，不合法的数据！',
        data: data
      }
    }

    var currentNode = nodeTree[data.id]
    var parentNode = nodeTree[data.parentId]
    var currentNodePointer = nodeMap[data.id]

    if (typeof currentNode === 'undefined') {
      currentNode = {
        id: data.id,
        parentId: data.parentId,
        name: data.name,
        children: []
      }
    } else {
      currentNode.name = data.name
      delete nodeTree[data.id]
    }

    if (fields && fields != null &&
      fields.length && fields.length > 0) {
      for (var idx in fields) {
        var field = fields[idx]
        currentNode[field] = data[field] ? data[field] : ''
      }
    }

    // 当前结点已初始化过并在nodeMap中有记录，说明结点的ID重复了
    if (typeof currentNodePointer !== 'undefined') {
      throw {
        message: '存在id[id: ' + data.id + ', name: ' + data.name + '][id: ' + currentNodePointer.id + ', name: ' + currentNodePointer.name + ']相同的数据，数据不合法！',
        data: data
      }
    } else {
      nodeMap[data.id] = currentNode
    }

    if (typeof parentNode === 'undefined') {
      parentNode = nodeMap[data.parentId]

      if (typeof parentNode === 'undefined') {
        parentNode = {
          id: data.parentId,
          name: null,
          parentId: null,
          children: []
        }

        nodeTree[parentNode.id] = parentNode
      } else {
        // 校验是否存在循环依赖的问题
        if (!recursionCheckNode(currentNode, parentNode.id)) {
          parentNode.children.push(currentNode)

          throw {
            message: '各节点之间存在循环依赖（例如：节点A的父结点指向节点B,节点B的父结点指向节点C,节点C的父结点又指向了节点A而形成了循环依赖），数据不合法！',
            data: parentNode
          }
        }
      }
    }

    parentNode.children.push(currentNode)
  }

  var count = 0
  var tree

  for (var node in nodeTree) {
    count++
    tree = nodeTree[node]
  }

  if (count > 1) {
    throw {
      message: '存在节点所依赖的父结点不存在的数据，数据不合法！具体请查看date中的记录',
      data: nodeTree
    }
  }

  var tree = tree.children[0]
  // 遍历树，并给各个结点增加level层级字段
  setLevel(tree, 1, '1', '')
  return tree
}

/**
 * 递归检查是否存在循环依赖的情况
 * @param node
 * @param id
 * @returns {boolean}
 */
function recursionCheckNode(node, id) {
  if (node.children && node.children.length > 0) {
    for (var i in node.children) {
      var child = node.children[i]

      if (child.id == id) {
        return false
      }

      if (!recursionCheckNode(child, id)) {
        return false
      }
    }
  }
  // 没有循环依赖的问题，返回true
  return true
}

function setLevel(treeNode, currentLevel, currentIdx, parentSn) {
  treeNode.level = currentLevel
  treeNode.sn = parentSn == '' ? currentIdx : parentSn + '.' + currentIdx
  treeNode.showChildren = false
  treeNode.selected = false
  treeNode.show = true

  if (typeof treeNode.checkStatus === 'undefined') {
    treeNode.checkStatus = 'unchecked'
  }

  if (treeNode.children && treeNode.children.length &&
    treeNode.children.length > 0) {
    for (var idx in treeNode.children) {
      setLevel(treeNode.children[idx], currentLevel + 1, parseInt(idx) + 1, treeNode.sn)
    }
  }
}

export default covertToTree

