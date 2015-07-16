angular.module('portfolioApp').controller('ExpirenceController', function($scope, $routeParams) {
  $scope.pageClass = "page-expirence";
  $scope.projects = [{
    name: 'NexJ',
    url: '#nexj/0',
    imgs: ['http://www.nexj.com/wp-content/uploads/2012/10/scheduling-screenshots.jpg', 'http://www.nexj.com/wp-content/uploads/2012/11/nexj-systems-logo-web.jpg'],
    description: 'Currently working at NexJ working to develop top of the line CRM software to financial customers. Work as a Fullstack Developer using Java, Microsoft SQL Server, JQuery, Javascript, HTML/CSS',
    date: '2015'
  },
  {
    name: 'LineUp',
    url: '#lineup/1',
    imgs: ['http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/launchpad/mac-launchpad-bb-201501?wid=814&hei=448&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1426290356125'],
    description: '2 Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.',
    date: '2015'
  },
  {
    name: 'Amazon',
    url: '#amazon/2',
    imgs: ['http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png','http://media.corporate-ir.net/media_files/IROL/97/97664/images/amazon_logo_RGB.jpg'],
    description: '3 Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.',
    date: '2014'
  },
  {
    name: 'Interaxon',
    url: '#interaxon/3',
    imgs: ['http://betakit.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-12.13.08-PM-1050x564.png','http://venturebeat.com/wp-content/uploads/2014/09/muse-app-results.png'],
    description: '4 Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.',
    date: '2013-2014'
  }]
  $scope.selected = $routeParams.id;
});