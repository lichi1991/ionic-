angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,datePickerService) {

    //初始化交房日期
    $scope.scheduleDate = new Date();
    //初始化日期变量
    var disabledDates = datePickerService(0);
    var weekDaysList = datePickerService(1);
    var monthList = datePickerService(2);
    $scope.datepickerObjectEnd = {
        titleLabel: '选择楼盘装修日期',  //可选
        todayLabel: '今天',  //可选
        closeLabel: '关闭',  //可选
        setLabel: '确定',  //可选
        setButtonType: 'button-assertive',  //可选
        todayButtonType: 'button-assertive',  //可选
        closeButtonType: 'button-assertive',  //可选
        inputDate: new Date(),  //可选，输入值
        mondayFirst: true,  //可选,星期一开头
        disabledDates: disabledDates, //可选
        weekDaysList: weekDaysList, //可选
        monthList: monthList, //可选
        templateType: 'modal', //可选i.e.的模式 modal or popup(兼容模式？)
        showTodayButton: 'true', //可选
        modalHeaderColor: 'bar-positive', //可选
        modalFooterColor: 'bar-positive', //可选
        from: new Date(2008, 8, 2), //可选
        to: new Date(2030, 8, 25),  //可选
        callback: function (val) {  //Mandatory
            datePickerCallbacke(val);
        },
        dateFormat: 'yyyy-MM-dd', //可选
        closeOnSelect: true, //可选,设置选择日期后是否要关掉界面。呵呵，原本是false。
    };
    // 日期选择后的回调函数
    var datePickerCallbacke = function (val) {
        if (typeof (val) === 'undefined') {
        } else {
            console.log('Selected date is : ', val);
            $scope.scheduleDate = val;//更新日期。
        }
    };

})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
