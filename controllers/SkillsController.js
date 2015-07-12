angular.module('portfolioApp').controller('SkillsController', function($scope) {
  $scope.oneAtATime = false;
  $scope.totalDevLength = 5;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.skills = [
    {
      title: 'Web Developer',
      years: 3,
      skills: [
        {
          title: 'Frameworks',
          years: 0,
          skills: [
            {
              title: 'AngularJS',
              years: 1,
              skills:[]
            },
            {
              title: 'Bootstrap',
              years: 1,
              skills:[]
            },
            {
              title: 'Rails',
              years: 2,
              skills:[]
            },
            {
              title: 'Spring',
              years: 0.5,
              skills:[]
            },
            {
              title: 'NodeJS',
              years: 0.5,
              skills:[]
            }
          ]
        },
        {
          title: 'Languages',
          years: 0,
          skills: [
            {
              title: 'Java',
              years: 5,
              skills: []
            },
            {
              title: 'Javascript',
              years: 2,
              skills: []
            },
            {
              title: 'jQuery',
              years: 2,
              skills: []
            },
            {
              title: 'HTML/CSS',
              years: 2,
              skills: []
            },
            {
              title: 'Ruby',
              years: 2,
              skills: []
            },
            {
              title: 'Python',
              years: 2,
              skills: []
            },
            {
              tittle: 'C/C++',
              years: 2,
              skills: []
            },
            {
              title: 'C#',
              years: 1,
              skills: []
            }
          ]
        },
        {
          title: 'Databases (MySQL, PostgreSQL, DynamoDB)',
          years: 3,
          skills: []
        },
        {
          title: 'Database Optimization',
          years: 2,
          skills: []
        },
        {
          title: 'Zookeeper',
          years: 0.5,
          skills: []
        },
        {
          title: 'Heroku',
          years: 2,
          skills: []
        },
        {
          title: 'AWS',
          years: 1,
          skills: []
        }
      ]
    },
    {
      title: 'Mobile Developer',
      years: 2,
      skills: [
        {
          title: 'Android',
          years: 1,
          skills: []
        },
        {
          title: 'iOS',
          years: 1,
          skills: []
        },
        {
          title: 'Cross-Platform',
          years: 1,
          skills: []
        }
      ]
    },
    {
      title: 'Additional Skills/Interests',
      years: 0,
      skills: [
        {
          title: 'Regular Expression',
          years: 3,
          skills: []
        },
        {
          title: 'Machine Learning',
          years: 0.5,
          skills: []
        },
        {
          title: 'Operating Systems',
          years: 1,
          skills: []
        },
        {
          title: 'Distributed Systems',
          years: 1,
          skills: []
        },
        {
          title: 'Computer Networks',
          years: 1,
          skills: []
        }

      ]
    }
  ]; 

  $scope.getProgressLength = function(years) {
    return (years/$scope.totalDevLength) * 100;
  }

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
