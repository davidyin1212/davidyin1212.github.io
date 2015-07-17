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
    description: 'For LineUp my job was to come up with a solution for creating an unified web application that allowed users to browse and schedule courses all in one place. My primary responsibilties were to come up with the models and entity relationships between these models as well as the set up actions on the models. Further I was primarily also responsible for creating an authentication service as well as doing most of the frontend work. I also was responsible for generating the calendar from combined model attributes and displaying that in the view. The tech-stack is primarily Ruby on Rails for the backend server (using PostgreSQL for persistance), we used Javascript, jQuery, HTML/CSS along with the Bootstrap framework the the front end stuff. This was deployed using heroku and I was primarily in charge of deployment as well and making sure we had our app properly provisioning.',
    date: '2015'
  },
  {
    name: 'Amazon',
    url: '#amazon/2',
    imgs: ['http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png','http://media.corporate-ir.net/media_files/IROL/97/97664/images/amazon_logo_RGB.jpg'],
    description: 'For Amazon I worked on the CS-Tech team which focuses on Customer Service Angent Technologies. Primarily on work on building a tool that would allow new-hires to be in the system before they started working, which was a feature that did not exist before my project. The primary diffculties with this was to limit the amount of change required to the existing db schema and modularize as much as possible. To that end the decision was made to use Dynamo db (AWS no sql database) as the primary source of persistance with FK pairs to provide a way to relate the elements in dynamo to user and scheduling information which was held in the MySQL database. The tech stack was Java on the Spring framework acting as a micro-service with API that allowed the application to request specific resouces it needed for the required views. The application was primarily done in pearl as the back end and a combination of Javascript, jQuery, and HTML/CSS in the front-end.',
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