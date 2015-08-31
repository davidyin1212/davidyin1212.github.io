angular.module('portfolioApp').controller('ExpirenceController', function($scope, $routeParams) {
  $scope.pageClass = "page-expirence";
  $scope.projects = [{
    name: 'NexJ',
    url: '#nexj/0',
    front_cover: 'http://www.nexj.com/wp-content/uploads/2012/10/scheduling-screenshots.jpg',
    items: [
      {type: 'img', src: 'http://www.nexj.com/wp-content/uploads/2012/10/scheduling-screenshots.jpg'}, 
      {type: 'text', src: 'Currently working at NexJ working to develop top of the line CRM software to financial customers.'},
      {type: 'img', src: 'http://www.nexj.com/wp-content/uploads/2012/11/nexj-systems-logo-web.jpg'}, 
      {type: 'text', src: 'Work as a Fullstack Developer using Java, Microsoft SQL Server, JQuery, Javascript, HTML/CSS.'}
    ],
    date: '2015'
  },
  {
    name: 'LineUp',
    url: '#lineup/1',
    front_cover: '/assets/Lineup.PNG',
    items: [
      {type: 'img', src: '/assets/Lineup.PNG'}, 
      {type: 'text', src: 'For LineUp my job was to come up with a solution for creating a unified web application that allowed users to browse and schedule courses all in one place. \nMy primary responsibilities were to come up with the models and entity relationships between these models as well as the set up actions on said models. Further I was primarily responsible for creating an authentication service as well as doing most of the frontend work. I also was responsible for generating the calendar from combined model attributes and displaying that in the view. \nThe tech-stack is primarily Ruby on Rails for the backend server (using PostgreSQL for persistance), we used Javascript, jQuery, HTML/CSS along with the Bootstrap framework for the front end. \nThis was deployed using Heroku and I was primarily in charge of deployment as well and making sure we had our app properly provisioned.'}
    ],
    date: '2015'
  },
  {
    name: 'Amazon',
    url: '#amazon/2',
    front_cover: 'http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png',
    items: [
      {type: 'img', src: 'http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png'}, 
      {type: 'text', src: 'For Amazon I worked on the CS-Tech team which focuses on Customer Service Angent Technologies. Primarily on work on building a tool that would allow new-hires to be in the system before they started working, which was a feature that did not exist before my project. The primary diffculties with this was to limit the amount of change required to the existing db schema and modularize as much as possible.'},
      {type: 'img', src: 'http://media.corporate-ir.net/media_files/IROL/97/97664/images/amazon_logo_RGB.jpg'}, 
      {type: 'text', src: 'To that end the decision was made to use Dynamo db (AWS no sql database) as the primary source of persistance with FK pairs to provide a way to relate the elements in dynamo to user and scheduling information which was held in the MySQL database. The tech stack was Java on the Spring framework acting as a micro-service with API that allowed the application to request specific resouces it needed for the required views. The application was primarily done in pearl as the back end and a combination of Javascript, jQuery, and HTML/CSS in the front-end.'}
    ],
    date: '2014'
  },
  {
    name: 'Interaxon',
    url: '#interaxon/3',
    front_cover: 'http://betakit.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-12.13.08-PM-1050x564.png',
    items: [
      {type: 'img', src: 'http://betakit.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-12.13.08-PM-1050x564.png'}, 
      {type: 'text', src: 'Worked with 4 other developers to create the first production ready application for Interaxon\'s brains sensing headband MUSE. \nKey challenges were tyring to figure out how to convey the concept of the headband which was realtivley complex to users. So a lot of iterations of the applications were made with user testing done every two weeks on the mobile app.\nCompany was very push oriented very high pace losts of work to be done. \n'},
      {type: 'img', src: 'http://venturebeat.com/wp-content/uploads/2014/09/muse-app-results.png'}, 
      {type: 'text', src: 'In terms of technical challenges because of the app being developed cross platform instead of native (there was some native development as well though) we had to deal with a lot of issues with memory leaks, proper asset management (so that the app doesn\'t consume to much memory), as well accomdating for different screens. \nIn the end the product was launched successfully. \nTech stack primarily consisted of the UNITY game engine (C#) with some native work done in both iOS (objective-c) and Android (JAVA).'}
    ],
    date: '2013-2014'
  }]
  $scope.selected = $routeParams.id;
});

angular.module('portfolioApp').filter('newlines', function() {
  return function(text) {
    return text.split(/\n/g);
  };
});