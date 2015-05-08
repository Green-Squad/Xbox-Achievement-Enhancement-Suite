$(function() {

// compare page

var html = ['<div id="xaes-box">',
              '<h1>Xbox Achievement Enhancement Suite</h1>',
              '<h3>Filter by which person has the achievement unlocked.</h3>',
              '<div class="btn-group">',
                '<span class="btn btn-primary active">',
                  '<input type="radio" name="filter" id="all" value="all" checked="checked">',
                  '<label for="all">All</label>',
                '</span>',
                '<span class="btn btn-primary">',
                  '<input type="radio" name="filter" id="one-person" value="one-person">',
                  '<label for="one-person">Only One Person</label>',
                '</span>',
                '<span class="btn btn-primary">',
                  '<input type="radio" name="filter" id="neither-person" value="neither-person">',
                  '<label for="neither-person">Neither Person</label>',
                '</span>',
                '<span class="btn btn-primary">',
                  '<input type="radio" name="filter" id="left-person" value="left-person">',
                  '<label for="left-person">Left Person</label>',
                '</span>',
                '<span class="btn btn-primary">',
                  '<input type="radio" name="filter" id="right-person" value="right-person">',
                  '<label for="right-person">Right Person</label>',
                '</span>',
              '</div>',
              '<h3>Filter by achievement name or description.</h3>',
              '<input type ="text" id="filter-titles" placeholder="Just start typing">',
            '</div>'
          ].join('');


$('.achievementData').after(html);

$('#xaes-box .btn').click(function() {
  $($(this).children('input[type=radio]')).trigger('change').prop("checked", true);
  $('#xaes-box .btn').removeClass('active');
  $(this).addClass('active');
});

$('input[type=radio]').change(function() {
   var value = $(this).attr('value');
   if (value == 'all') {
     reset();
   } else if (value == 'one-person') {
     onlyOnePerson();
   } else if (value == 'neither-person') {
     neitherPerson();
   } else if (value == 'left-person') {
     leftPerson();
   } else if (value == 'right-person') {
     rightPerson();
   }
});


$('#filter-titles').on('input', function() {
  matchTitle($('#filter-titles').val());
});


// achievements that only one person  has
function onlyOnePerson() {
  $.each($('.item'), function() {
    if($(this).children('.achievementDetail').size() !== 1) {
      $(this).addClass('radio-level-hide');
    } else {
      $(this).removeClass('radio-level-hide');
    }
  });
}

// achievements that neither person  has
function neitherPerson() {
  $.each($('.item'), function() {
    if($(this).children('.noAchievementDetail').size() !== 2) {
      $(this).addClass('radio-level-hide');
    } else {
      $(this).removeClass('radio-level-hide');
    }
  });
}

// achievements that only the left person has
function leftPerson() {
  $.each($('.item'), function() {
    if($(this).children('.achievementDetail').size() !== 1 || $($(this).children().get(2)).hasClass('achievementDetail')) {
      $(this).addClass('radio-level-hide');
    } else {
      $(this).removeClass('radio-level-hide');
    }
  });
}

// achievements that only the right person has
function rightPerson() {
  $.each($('.item'), function() {
    if($(this).children('.achievementDetail').size() !== 1 || $($(this).children().get(1)).hasClass('achievementDetail')) {
      $(this).addClass('radio-level-hide');
    } else {
      $(this).removeClass('radio-level-hide');
    }
  });
}

// show all
function reset() {
  $.each($('.item'), function() {
    $(this).removeClass('radio-level-hide');
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
      $(this).addClass('text-level-hide');
    } else {
      $(this).removeClass('text-level-hide');
    }
  });
}
// achievements that match this regex description
// sort alphabetically by title
// sort by achievement score
// add link to achievement guide



});
