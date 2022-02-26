var MyView = fish.View.extend({
  manage: true,  // 视图 Dom 元素
  el: '#app-1',
  // 视图模板函数
  template: fish.compile('<p>{{name}}</p>'),
  // 填充模板数据
  serialize: {
    name: 'Lilei'
  },
  // 视图事件处理,(采用事件委托，比自己写on效率要好。并且onClick自动绑定本视图this)
  events: {
    'click': 'onClick'
  },

  // 视图初始化
  initialize: function() {
    // do something
    console.log('enter initialize...');
  },
  // 视图渲染结束处理
  afterRender: function() {
    // do something
    console.log('enter afterRender...');
  },
  // 视图移除处理
  cleanup: function() {
    // do something
    console.log('enter cleanup...');
  },

  onClick: function() {
    fish.success('click');
  }
});
new MyView().render();
