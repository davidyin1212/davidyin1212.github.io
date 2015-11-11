angular.module('portfolioApp').controller('ExpirenceController', function($scope, $routeParams, $location, $anchorScroll) {
  $scope.pageClass = "page-expirence";
  $scope.projects = [{
    name: 'StackAdapt',
    url: '#stackadapt/0',
    front_cover: 'http://static1.squarespace.com/static/517e1a0be4b01510f836315d/t/5591ca99e4b0cfb74f37524d/1435617947405/stackadapt_landing.jpg?format=1500w',
    technologies: ['Ruby', 'Rails', 'Javascript', 'PostgreSQL', 'AngularJS', 'Bootstrap', 'HTML/CSS'],
    imgs: ['http://static1.squarespace.com/static/517e1a0be4b01510f836315d/t/5591ca99e4b0cfb74f37524d/1435617947405/stackadapt_landing.jpg?format=1500w'],
    description: "Currently Working at StackAdapt as a Fullstack Developer. Working on StackAdapt’s Native Advertising platform. Working primarily in Go, MySQL, Aerospike, Redis, and Kafka for the backend platform side and Rails, Javascript, React, Bootstrap, and HTML/CSS for the application layer. ",
    date: '2015'
  },
  {
    name: 'H&H',
    url: '#hh/1',
    front_cover: '/assets/H&HCover.PNG',
    technologies: ['Ruby', 'Rails', 'Javascript', 'PostgreSQL', 'AngularJS', 'Bootstrap', 'HTML/CSS'],
    imgs: ['/assets/H&HDashboard.PNG', '/assets/H&HLanding.PNG', '/assets/H&HSearch.PNG'],
    description: "Web application created for H&H International that allows for their clients to look and order from current inventory of cars and also to track their own inventory. Allows clients to put down a deposit using their credit car directly (I used Stripe) and create a customer profile for later use. App has dynamic and responsive searching. Employees can look at what cars are orded by which clients and update their stauses as well as add new cars to the inventory. App manages permission groups using both permissions as well as user groups and allows access to different areas of the app based upon user permissions. \nStack is Ruby on Rails for the backend server using Stripe for payments, Devise for authentication, and Pundit for permissions and authorization. These create the required JSON endpoints and are consumed by the front-end built using AngularJS. Also used Bootstrap as well as followed Google's material design principles. \nDesign Choices: \nHigh responsiveness required the use of AngularJS and it's assets were integrated into the rails asset pipeline. This increased site responsiveness. \nDecided to use permissons and user groups exposed through the API to drive template rendering that way we can have good permission driven rendering and allow certain capabilities to people with the proper permission. This is also enforced in the back-end as well with the use of Pundit so that unathorized access to specific JSON endpoints (depending on user) would not be allowed. \nResponsive search bar that would update search quries immediatly on text input rather than clicking search. Done by filtering results based upon input on each user input change. \nUsers can only be created by Admin's to the system. This was a contraint that the client wanted since user create is exposed by Rails via there MVC architecture it was pretty easy to do this.",
    link: {name: "Live Site: Still in alpha and requires more end to end testing as well as load testing", url: "https://powerful-citadel-2565.herokuapp.com"},
    github: "https://github.com/davidyin1212/H-H",
    date: '2015'
  },
  {
    name: 'NexJ',
    url: '#nexj/2',
    front_cover: 'http://health.blog.yorku.ca/files/2012/12/cwp-participant-1.jpg',
    technologies: ['Java', 'Spring', 'Microsoft SQL Server', 'HTML/CSS'],
    imgs: ['http://health.blog.yorku.ca/files/2012/12/cwp-participant-1.jpg','http://www.nexj.com/wp-content/uploads/2012/11/nexj-systems-logo-web.jpg'],
    description: 'Application Developer at NexJ worked on their CRM platform using Java, Spring, HTML/CSS, Javascript, and Microsoft SQL Server stack.',
    date: '2015'
  },
  {
    name: 'LineUp',
    url: '#lineup/3',
    front_cover: '/assets/Lineup.PNG',
    technologies: ['Ruby', 'Rails', 'Javascript', 'PostgreSQL', 'Bootstrap', 'HTML/CSS'],
    imgs: ['/assets/Lineup.PNG'],
    description: 'For LineUp my job was to come up with a solution for creating a unified web application that allowed users to browse and schedule courses all in one place. \nMy primary responsibilities were to come up with the models and entity relationships between these models as well as the set up actions on said models. Further I was primarily responsible for creating an authentication service as well as doing most of the frontend work. I also was responsible for generating the calendar from combined model attributes and displaying that in the view. \nThe tech-stack is primarily Ruby on Rails for the backend server (using PostgreSQL for persistance), we used Javascript, jQuery, HTML/CSS along with the Bootstrap framework for the front end. \nThis was deployed using Heroku and I was primarily in charge of deployment as well and making sure we had our app properly provisioned.',
    link: {name: "Live Site: Lineup", url: "http://line-up-app.herokuapp.com"},
    github: "https://github.com/davidyin1212/CoursePlanner",
    date: '2015'
  },
  {
    name: 'Amazon',
    url: '#amazon/4',
    front_cover: 'http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png',
    technologies: ['Java', 'Spring', 'Javascript', 'Perl', 'Bootstrap', 'HTML/CSS'],
    imgs: ['http://www.channeladvisor.com/caapi/wp-content/uploads/2015/07/Amazon.png','http://media.corporate-ir.net/media_files/IROL/97/97664/images/amazon_logo_RGB.jpg'],
    description: 'For Amazon I worked on the CS-Tech team which focuses on Customer Service Angent Technologies. \nPrimarily on work on building a tool that would allow new-hires to be in the system before they started working, which was a feature that did not exist before my project. \nThe primary diffculties with this was to limit the amount of change required to the existing db schema and modularize as much as possible. To that end the decision was made to use Dynamo db (AWS no sql database) as the primary source of persistance with FK pairs to provide a way to relate the elements in dynamo to user and scheduling information which was held in the MySQL database. \nThe tech stack was Java on the Spring framework acting as a micro-service with API that allowed the application to request specific resouces it needed for the required views. The application was primarily done in pearl as the back end and a combination of Javascript, jQuery, and HTML/CSS in the front-end.',
    date: '2014'
  },
  {
    name: 'Interaxon',
    url: '#interaxon/5',
    front_cover: 'http://betakit.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-12.13.08-PM-1050x564.png',
    technologies: ['iOS', 'Android', 'Unity', 'C#'],
    imgs: ['http://betakit.com/wp-content/uploads/2014/06/Screen-Shot-2014-06-04-at-12.13.08-PM-1050x564.png','http://venturebeat.com/wp-content/uploads/2014/09/muse-app-results.png'],
    description: 'Worked with 4 other developers to create the first production ready application for Interaxon\'s brains sensing headband MUSE. \nKey challenges were tyring to figure out how to convey the concept of the headband which was realtivley complex to users. So a lot of iterations of the applications were made with user testing done every two weeks on the mobile app. \nCompany was very push oriented very high pace losts of work to be done. \nIn terms of technical difficutlies because of the app being developed cross platform instead of native (there was some native development as well though) we had to deal with a lot of issues with memory leaks, proper asset management (so that the app doesn\'t consume to much memory), as well accomdating for different screens. \nIn the end the product was launched successfully. \nTech stack primarily consisted of the UNITY game engine (C#) with some native work done in both iOS (objective-c) and Android (JAVA).',
    date: '2013-2014'
  }]
  $scope.selected = $routeParams.id;
  $scope.goToDescription = function() {
    $location.hash("description");
    $anchorScroll();
  }
});

angular.module('portfolioApp').filter('newlines', function() {
  return function(text) {
    return text.split(/\n/g);
  };
});

angular.module('portfolioApp').directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("body").animate({scrollTop: $elm.offset().top}, "slow");
        $(".mouse-scroll").fadeOut("fast", function() {
          $(".mouse-scroll").hide();
        })
      });
    },
    templateUrl: 'views/mouse-down.html' 
  };
});