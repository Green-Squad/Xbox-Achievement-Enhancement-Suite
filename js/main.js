// Compare Page
if (document.getElementsByClassName('gameTitle')[0]) {
  // Get game title
  game = document.getElementsByClassName('gameTitle')[0].getElementsByTagName('span')[0].textContent;
  // Insert XAES content
  insertCompare();
  // Add achievement guide buttons
  achievementGuide();
}

// Single Page
if (document.getElementById('newProfileViewMygamertagWrapper')) {
  // Get game title
  game = document.getElementById('newProfileViewMygamertagWrapper').textContent;
  // Insert XAES content
  insertSingle();
  // Add achievement guide buttons
  achievementGuideSingle();
}
game = game.trim();

function insertCompare() {
  var parser = new DOMParser();
  var compareHtml =  ['<div id="xaes-box" class="border-bottom">',
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

  var compareDOM = parser.parseFromString(compareHtml, "text/html");
  var newElems = compareDOM.firstChild.getElementsByTagName('div')[0];
  var afterElem = document.getElementsByClassName('achievementData')[0];
  insertAfter(newElems, afterElem);
}

function insertSingle() {
  var parser = new DOMParser();
  var singleHtml = ['<div id="xaes-box" class="border-top">',
                      '<h1>Xbox Achievement Enhancement Suite</h1>',
                      '<h3>Filter achievements.</h3>',
                      '<span id="toggle-images" class="btn btn-primary" style="float: right;">Toggle Images</span>',
                      '<div class="btn-group">',
                        '<span class="btn btn-primary active">',
                          '<input type="radio" name="filter" id="single-all" value="single-all" checked="checked">',
                          '<label for="single-all">All</label>',
                        '</span>',
                        '<span class="btn btn-primary">',
                          '<input type="radio" name="filter" id="unlocked" value="unlocked">',
                          '<label for="unlocked">Unlocked</label>',
                        '</span>',
                        '<span class="btn btn-primary">',
                          '<input type="radio" name="filter" id="locked" value="locked">',
                          '<label for="locked">Locked</label>',
                        '</span>',
                      '</div>',
                      '<h3>Filter by achievement name or description.</h3>',
                      '<input type ="text" id="filter-titles-single" placeholder="Just start typing">',
                    '</div>'
                  ].join('');

  var singleDOM = parser.parseFromString(singleHtml, "text/html");
  var newElems = singleDOM.firstChild.getElementsByTagName('div')[0];
  var afterElem = document.getElementsByClassName('filterArea')[0];
  insertAfter(newElems, afterElem);
}

// Event listeners
var xaesBoxButtons = document.getElementById('xaes-box').getElementsByClassName('btn-group')[0].getElementsByClassName('btn');
for (var i = 0; i < xaesBoxButtons.length; i++) {
  xaesBoxButtons[i].addEventListener('click', function() {
    $($(this).children('input[type=radio]')).trigger('change').prop("checked", true);
    $('#xaes-box .btn').removeClass('active');
    $(this).addClass('active');
  });
}

var toggleImagesElement = document.getElementById('toggle-images');
if (toggleImagesElement) {
  toggleImagesElement.addEventListener('click', function() {
    toggleImages();
  });
}

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
   } else if (value == 'unlocked') {
     hideAchievements('unlocked');
   } else if (value == 'locked') {
     hideAchievements('locked');
   } else if (value == 'single-all') {
     showAchievements();
   }
});


$('#filter-titles').on('input', function() {
  matchTitle($('#filter-titles').val());
});

$('#filter-titles-single').on('input', function() {
  matchTitleSingle($('#filter-titles-single').val());
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

function matchTitleSingle(query) {
  query = query.toLowerCase();
  $.each($('.bodyContent li'), function() {
    var title = $(this).children('.achievementInfo')
                .children('.achievementName')
                .children('a').text().toLowerCase();
    var description = $(this).children('.achievementInfo')
                      .children('.achievementDescription')
                      .text().toLowerCase();
    if(!title.match(query) && !description.match(query)) {
      $(this).addClass('text-level-hide');
    } else {
      $(this).removeClass('text-level-hide');
    }
  });
}

function achievementGuide() {
  $.each($('.achievementImage'), function() {
    var title = $(this).children('.achievementDescription')
                .children('.achievementTitle').text();
    var guide = '<a href="http://google.com/#q=' + $.trim(title) +
                ' achievement guide ' + game +
                '" class="btn btn-primary guide">Guide</a>';
    $($(this).children('.achievementDescription')).append(guide);
  });
}

function achievementGuideSingle() {
  $.each($('li .achievementInfo'), function() {
    var title = $(this).children('.achievementName')
                .children('a').text();
    var guide = '<a href="http://google.com/#q=' + $.trim(title) +
                ' achievement guide ' + game +
                '" class="btn btn-primary guide">Guide</a>';
    $(this).append(guide);
  });
}

var hideAchievements = function(status) {
  var achievementDetailButtons = document.getElementsByClassName('achievementDetailButton');
  var statusRegex = new RegExp("\\b" + status + "\\b");
  for (var i = 0; i < achievementDetailButtons.length; i++) {
    var achievementStatus = achievementDetailButtons[i].childNodes[1].childNodes[3].childNodes[3].textContent.trim().toLowerCase();
    if (statusRegex.test(achievementStatus)) {
      achievementDetailButtons[i].classList.remove('radio-level-hide');
    } else {
      achievementDetailButtons[i].classList.add('radio-level-hide');
    }
  }
}

var  showAchievements = function() {
  var achievementDetailButtons = document.getElementsByClassName('achievementDetailButton');
  for (var i = 0; i < achievementDetailButtons.length; i++) {
    achievementDetailButtons[i].classList.remove('radio-level-hide');
  }
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function toggleImages() {
  var images = document.getElementsByClassName('brandedArt');
  for (var i = 0; i < images.length; i++) {
    images[i].classList.toggle('hidden');
  }
}
