$(function() {

// compare page

var html = ['<div id="xaes-box">',
              '<h1>Xbox Achievement Enhancement Suite</h1>',
              '<h3>Filter by which person has the achievement unlocked.</h3>',
              '<button id="reset">All</button>',
              '<button id="one-person">Either Person</button>',
              '<button id="neither-person">Neither Person</button>',
              '<button id="left-person">Left Person</button>',
              '<button id="right-person">Right Person</button>',
              '<h3>Filter by achievement name or description.</h3>',
              '<input type ="text" id="filter-titles" placeholder="Just start typing">',
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

$('#filter-titles').on('input', function() {
  matchTitle($('#filter-titles').val());
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
function matchTitle(query) {
  query = query.toLowerCase();
  $.each($('.item'), function() {
    var title = $(this).children('.achievementImage')
                .children('.achievementDescription')
                .children('.achievementTitle').text().toLowerCase();
    var description = $(this).children('.achievementImage')
                      .children('.achievementDescription')
                      .children('.description').text().toLowerCase();
    if(!title.match(query) && !description.match(query)) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}
// achievements that match this regex description
// sort alphabetically by title
// sort by achievement score
// add link to achievement guide



});
