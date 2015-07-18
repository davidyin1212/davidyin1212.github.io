angular.module('portfolioApp').controller('ExpirenceController', function($scope, $routeParams) {
  $scope.pageClass = "page-expirence";
  $scope.projects = [{
    name: 'NexJ',
    url: '#nexj/0',
    imgs: ['http://www.nexj.com/wp-content/uploads/2012/10/scheduling-screenshots.jpg', 'http://www.nexj.com/wp-content/uploads/2012/11/nexj-systems-logo-web.jpg'],
    description: 'Currently working at NexJ working to develop top of the line CRM software to financial customers. <Work as a Fullstack Developer using Java, Microsoft SQL Server, jQuery, Javascript, HTML/CSS',
    date: '2015'
  },
  {
    name: 'LineUp',
    url: '#lineup/1',
    imgs: ['http://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/mac/launchpad/mac-launchpad-bb-201501?wid=814&hei=448&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1426290356125'],
    description: 'For LineUp my job was to come up with a solution for creating a unified web application that allowed users to browse and schedule courses all in one place. \n\nMy primary responsibilities were to come up with the models and entity relationships between these models as well as the set up actions on said models. Further I was primarily responsible for creating an authentication service as well as doing most of the frontend work. I also was responsible for generating the calendar from combined model attributes and displaying that in the view. \n\nThe tech-stack is primarily Ruby on Rails for the backend server (using PostgreSQL for persistance), we used Javascript, jQuery, HTML/CSS along with the Bootstrap framework for the front end. \n\nThis was deployed using Heroku and I was primarily in charge of deployment as well and making sure we had our app properly provisioned.',
    date: '2015'
  },
  {
    name: 'Amazon',
    url: '#amazon/2',
    imgs: ['http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png','http://media.corporate-ir.net/media_files/IROL/97/97664/images/amazon_logo_RGB.jpg'],
    description: 'For Amazon I worked on the CS-Tech team which focuses on Customer Service Angent Technologies. \n\nPrimarily on work on building a tool that would allow new-hires to be in the system before they started working, which was a feature that did not exist before my project. \n\nThe primary diffculties with this was to limit the amount of change required to the existing db schema and modularize as much as possible. To that end the decision was made to use Dynamo db (AWS no sql database) as the primary source of persistance with FK pairs to provide a way to relate the elements in dynamo to user and scheduling information which was held in the MySQL database. \n\nThe tech stack was Java on the Spring framework acting as a micro-service with API that allowed the application to request specific resouces it needed for the required views. The application was primarily done in pearl as the back end and a combination of Javascript, jQuery, and HTML/CSS in the front-end.',
    date: '2014'
  },
  {
    name: 'Interaxon',
    url: '#interaxon/3',
    imgs: ['http://betakit.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-12.13.08-PM-1050x564.png','http://venturebeat.com/wp-content/uploads/2014/09/muse-app-results.png'],
    description: 'Worked with 4 other developers to create the first production ready application for Interaxon\'s brains sensing headband MUSE. \n\nKey challenges were tyring to figure out how to convey the concept of the headband which was realtivley complex to users. So a lot of iterations of the applications were made with user testing done every two weeks on the mobile app. \n\nCompany was very push oriented very high pace losts of work to be done. \n\nIn terms of technical difficutlies because of the app being developed cross platform instead of native (there was some native development as well though) we had to deal with a lot of issues with memory leaks, proper asset management (so that the app doesn\'t consume to much memory), as well accomdating for different screens. \n\nIn the end the product was launched successfully. \n\nTech stack primarily consisted of the UNITY game engine (C#) with some native work done in both iOS (objective-c) and Android (JAVA).',
    date: '2013-2014'
  }]
  $scope.selected = $routeParams.id;
});