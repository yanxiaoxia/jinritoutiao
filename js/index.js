var toutiao = angular.module('toutiao',['ngAnimate','ngRoute']);
toutiao.controller('indexCtrl',['$scope',function($scope){
	/*if(localStorage.x){
		$scope.isFirstOpen = false;
	}else{
		$scope.isFirstOpen = true;
	}*/

    /*引导页消失*/
	/*$scope.enter = function(){
		localStorage.x = true;
		$scope.isFirstOpen = false;
	}*/
	$scope.titles = [
    {name: '推荐',href: '#/shouye/tuijian'},
    {name: '热点',href: '#/shouye/redian'},
    {name: '太原',href: '#/shouye/taiyuan'},
    {name: '视频',href: '#/shouye/shipin'},
    {name: '社会',href: '#/shouye/shehui'},
    {name: '订阅',href: '#/shouye/dingyue'},
    ];

$scope.shipins = [
    {name: '推荐',href: '#/shipin/tuijian'},
    {name: '逗比剧',href: '#/shipin/doubiju'},
    {name: '音乐台',href: '#/shipin/yinyueju'},
    {name: '看天下',href: '#/shipin/tianxia'},
    {name: '小品',href: '#/shipin/xiaopin'}
    ];
}])

toutiao.directive('ttTitle',[function(){
	return {
		restrict: 'E',
		replace : true,
		templateUrl: 'views/templates/title.html',
		link: function($scope,el){

		}
	}
}])
toutiao.directive('ngView',[function(){
	return {
		restrict: 'E',
		replace : true,
		templateUrl: 'views/templates/huati/tuijian.html',
		link: function($scope,el){
           var mySwiper = new Swiper('.swiper-container',{
            slidesPerView : 4,
            slidesPerGroup : 4,
            autoplay: 3000,
            pagination : '.swiper-pagination',
        })
       }
   }
}])


toutiao.controller('shouyeCtrl',['$scope',function($scope){

}])
toutiao.controller('tuijianCtrl',['$scope',function($scope){
   $scope.tuijian = [
    {
       title: '习近平提出培育中美两国共同“朋友圈”',
       content:'',
       fromImg: 'image/shouye/toutiao.png',
       fromName: '专题',
       comment: '5万评论',
       time: '刚刚'
   },
   {
       title: '三十岁的女人肌肤保养秘籍',
       content: {
          img1: 'image/shouye/s1.png',
          img2: 'image/shouye/s2.png',
          img3: 'image/shouye/s3.png'
      },
      fromImg: 'image/shouye/temai.png',
      fromName: '美妆课堂',
      comment: '5评论',
      time: '1分钟前'
  },
  {
   title: '《翻译官》收视率暴涨，却暴露了黄轩一直想要隐藏的秘密',
   content: {
      img1: 'image/shouye/s4.png',
      img2: 'image/shouye/s5.png',
      img3: 'image/shouye/s6.png'
  },
  fromImg: 'image/shouye/yueyutu.png',
  fromName: '娱乐越狱兔',
  comment: '16评论',
  time: '3分钟前'
},
{
   title: '宽松T恤百搭美装，感受轻松的美衣，绝不容许错过',
   content: {
      img1: 'image/shouye/s7.png',
      img2: 'image/shouye/s8.png',
      img3: 'image/shouye/s9.png'
  },
  fromImg: 'image/shouye/TMF.png',
  fromName: 'TMF最时尚',
  comment: '0评论',
  time: '5分钟前'
},
{
   title: '谁帮我骂醒这个痴心想挽回的女人，聊天记录曝光',
   content: {
      img1: 'image/shouye/s10.png',
      img2: 'image/shouye/s11.png',
      img3: 'image/shouye/s12.png'
  },
  fromImg: 'image/shouye/qinggan.png',
  fromName: '情感日记欣赏',
  comment: '481评论',
  time: '1小时前'
},
]
}])
toutiao.controller('redianCtrl',['$scope',function($scope){

}])
toutiao.controller('shipinCtrl',['$scope',function($scope){
    $scope.shipin = [
    {
       video: 'image/shipin/1.png',
       fromImg: 'image/shipin/touxiang1.png',
       fromName: '杨紫后援会',
       play: '1511次播放',
       pingnum: '1'
   },
   {
       video: 'image/shipin/2.png',
       fromImg: 'image/shipin/touxiang2.png',
       fromName: '智选常州',
       play: '679次播放',
       pingnum: '1'
   },
   {
       video: 'image/shipin/3.png',
       fromImg: 'image/shipin/touxiang3.png',
       fromName: '欧曳',
       play: '1万次播放',
       pingnum: '6'
   },
   {
       video: 'image/shipin/4.png',
       fromImg: 'image/shipin/touxiang4.png',
       fromName: '醍醐灌顶',
       play: '29万次播放',
       pingnum: '542'
   },
   {
       video: 'image/shipin/5.png',
       fromImg: 'image/shipin/touxiang5.png',
       fromName: '绿林漫步',
       play: '576次播放',
       pingnum: '2'
   },
   
]
}])
toutiao.controller('huatiCtrl',['$scope',function($scope){

}])
toutiao.controller('wodeCtrl',['$scope',function($scope){

}])

toutiao.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'views/templates/shouye/tuijian.html'
	}).when('/shouye',{
		controller: 'tuijianCtrl',
		templateUrl: 'views/templates/shouye/tuijian.html'
	}).when('/shouye/tuijian',{
		controller: 'tuijianCtrl',
		templateUrl: 'views/templates/shouye/tuijian.html'
	}).when('/shouye/redian',{
        controller: 'redianCtrl',
        templateUrl: 'views/templates/shouye/redian.html'
    })
	.when('/shipin',{
		controller: 'shipinCtrl',
		templateUrl: 'views/templates/shipin/tuijian.html'
	}).when('/huati',{
		controller: 'huatiCtrl',
		templateUrl: 'views/templates/huati/tuijian.html'
	}).when('/wode',{
		controller: 'wodeCtrl',
		templateUrl: 'views/templates/wode.html'
	}).otherwise({
		redirectTo: '/'
	})
}])