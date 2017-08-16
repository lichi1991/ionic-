angular.module('starter.services', [])

    .provider('datePickerService', function () {
        var disabledDates = [
            new Date(1437719836326),
            new Date(),
            new Date(2015, 7, 10), //months are 0-based, this is August, 10th!
            new Date('Wednesday, August 12, 2015'), //Works with any valid Date formats like long format
            new Date("08-14-2015"), //Short format
            new Date(1439676000000) //UNIX format
        ];
        //方便的年月日设置方式，正和我意，可以随便改了。
        var weekDaysList = ["日", "一", "二", "三", "四", "五", "六"] //中文：;["S", "M", "T", "W", "T", "F", "S"];
        var monthList = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        //中文： ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var f = function (v) {
            if (v = 0) {
                return disabledDates;
            } else if (v == 1) {
                return weekDaysList;
            } else if (v == 2) {
                return monthList;
            }
        };
        this.$get = function () {
            return f;
        };
    })



.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '唐小丽',
    lastText: '你吃饭了吗?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: '老耿',
    lastText: '我欠你钱，下次还你',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: '小崔',
    lastText: '老耿欠你钱？',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: '安哥拉',
    lastText: '谢谢你!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }, {
    id: 4,
    name: '老陈',
    lastText: '今晚去打球！',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
