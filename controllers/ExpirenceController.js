angular.module('portfolioApp').controller('ExpirenceController', function($scope, $routeParams) {
  $scope.projects = [{
    name: 'NexJ',
    url: '#nexj/0',
    imgs: ['http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/launchpad/mac-launchpad-bb-201501?wid=814&hei=448&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1426290356125'],
    description: 'Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.'
  },
  {
    name: 'LineUp',
    url: '#lineup/1',
    imgs: ['http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/launchpad/mac-launchpad-bb-201501?wid=814&hei=448&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1426290356125'],
    description: 'Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.'
  },
  {
    name: 'Amazon',
    url: '#amazon/2',
    imgs: ['http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/launchpad/mac-launchpad-bb-201501?wid=814&hei=448&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1426290356125'],
    description: 'Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.'
  },
  {
    name: 'Interaxon',
    url: '#interaxon/3',
    imgs: ['http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/launchpad/mac-launchpad-bb-201501?wid=814&hei=448&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1426290356125'],
    description: 'Lorem ipsum dolor sit amet, legimus admodum quo in, cu sed consul putent fabellas, suscipit patrioque expetendis te usu. His vitae elaboraret te. Ludus adolescens no eum, molestie reprehendunt ius no. Eu doctus similique cum, qui id harum mentitum, eu eam tation apeirian petentium. Mea ex legimus laoreet aliquando, his commodo placerat consectetuer in, id eam facer prodesset. Percipit voluptatibus ad usu.'
  }]
  $scope.selected = $routeParams.id;
});