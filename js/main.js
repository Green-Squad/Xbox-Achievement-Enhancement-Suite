$(function() {

// compare page

var html = '<h1>Xbox Achievement Enhancement Suite</h1>';
html += '<button id="a">Only One</button><button id="b">Neither</button><button id="c">Left</button><button id="d">Right</button>';

var html = ['<div id="xaes-box">',
              '<h1>Xbox Achievement Enhancement Suite</h1>',
              '<h3>Filter by which person has the achievement unlocked.</h3>',
              '<button id="a">Either Person</button>',
              '<button id="b">Neither Person</button>',
              '<button id="c">Left Person</button>',
              '<button id="d">Right Person</button>',
            '</div>'
          ].join('');


$('.achievementData').after(html);

$('#a').click(function() {
  onlyOnePerson();
});

$('#b').click(function() {
  neitherPerson();
});

$('#c').click(function() {
  leftPerson();
});

$('#d').click(function() {
  rightPerson();
});



// achievements that only one person  has
function onlyOnePerson() {
  $.each($('.item'), function() {
    if($(this).children('.achievementDetail').size() !== 1) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

// achievements that neither person  has
function neitherPerson() {
  $.each($('.item'), function() {
    if($(this).children('.noAchievementDetail').size() !== 2) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

// achievements that only the left person has
function leftPerson() {
  $.each($('.item'), function() {
    if($(this).children('.achievementDetail').size() !== 1 || $($(this).children().get(2)).hasClass('achievementDetail')) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

// achievements that only the right person has
function rightPerson() {
  $.each($('.item'), function() {
    if($(this).children('.achievementDetail').size() !== 1 || $($(this).children().get(1)).hasClass('achievementDetail')) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

// achievements that match this regex title
// achievements that match this regex description
// sort alphabetically by title
// sort by achievement score
// add link to achievement guide



});
