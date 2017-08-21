'use strict';
const express = require('express');
const apiRoutes = express.Router();
const dashboardData = require('./dashboard-data');

const { DELAYTIME } = require('../config')

// 获取dashboard列表数据
apiRoutes.get('/list_dashboard', function(req, res) {
  setTimeout(() => {
    res.json({
      status: 0,
      msg: '查询成功',
      result: dashboardData
    });
  }, DELAYTIME);
});

// 隐藏
apiRoutes.get('/hidden_dashboard', function(req, res){
  setTimeout(() => {
    res.json({
      result: 1,
      msg: '操作成功',
      status: 0
    });
  }, DELAYTIME);
});

// 删除
apiRoutes.get('/delete_dashboard', function(req, res){
  setTimeout(() => {
    res.json({
      result: 1,
      msg: '操作成功',
      status: 0
    });
  }, DELAYTIME);
});

// 排序
apiRoutes.get('/sort_dashboard', function(req, res){
  setTimeout(() => {
    res.json({
      result: 10,
      msg: '操作成功',
      status: 0
    });
  }, DELAYTIME);
});

// 增加
apiRoutes.get('/create_dashboard', function(req, res){
  setTimeout(() => {
    res.json({
      result: 10,
      msg: '操作成功',
      status: 0
    });
  }, DELAYTIME);
});

module.exports = apiRoutes;