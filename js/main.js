$(function() {

// compare page

var html = ['<div id="xaes-box">',
              '<h1>Xbox Achievement Enhancement Suite</h1>',
              '<h3>Filter by which person has the achievement unlocked.</h3>',
              '<button id="one-person">Either Person</button>',
              '<button id="neither-person">Neither Person</button>',
              '<button id="left-person">Left Person</button>',
              '<button id="right-person">Right Person</button>',
              '<button id="reset">Reset</button>',
            '</div>'
          ].join('');


$('.achievementData').after(html);

$('#one-person').click(function() {
  onlyOnePerson();
});

$('#neither-person').click(function() {
  neitherPerson();
});

$('#left-person').click(function() {
  leftPerson();
});

$('#right-person').click(function() {
  rightPerson();
});

$('#reset').click(function() {
  reset();
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

// show all
function reset() {
  $.each($('.item'), function() {
    $(this).show();
  });
}

// achievements that match this regex title
// achievements that match this regex description
// sort alphabetically by title
// sort by achievement score
// add link to achievement guide



});
