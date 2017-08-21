import { Message } from 'element-ui';

const STATUSCODE = {
  0: '正确',
  1: '数据库错误',
  2: '数据库无记录',
  3: '参数错误',
  4: '登录异常',
  5: '必填项为空',
  99: '系统错误'
};

export default (obj) => {
  if (parseInt(obj.status, 10) === 4) {
    if (process.env.NODE_ENV === 'production') {
      window.location.href = 'https://pmo.corpautohome.com/index.html';
    }
    if (process.env.NODE_ENV === 'testing-environment') {
      window.location.href = 'http://test.kanban.corpautohome.com/index.html';
    }
  }
  if (parseInt(obj.status, 10) === 0) {
    return;
  }
  Message({
    message: obj.msg || STATUSCODE[obj.status],
    type: 'error',
    duration: 2000
  });
};
