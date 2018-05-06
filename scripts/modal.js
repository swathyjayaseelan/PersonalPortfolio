$(document).ready(function(){
  // Can also be used with $(document).ready()



  // MODAL
  var modalText = {
    payitforward: {
      title: 'PayItForward',
      tag: 'LOCATION BASED VOLUNTEER CONNECT.',
      detail: 'A location based web app to connect volunteers to opportunities and  hospitals to'+
       ' eligible donors in the nearby locality. It removes the extra effort volunteers have to put in to search for opportunities by automatically matching their preference and alerting them.'+
      ' ** A special feature is the donor search algorithm that searches for blood donors in the nearby locality and alerts them via sms message **',
      'tech':'HTML, CSS,  MongoDB, ExpressJS, AngularJS, NodeJS, Bootstrap, Twilio, Facebook APIs, Google Maps API',
      link: 'https://payitforwardversion1.herokuapp.com/#!/home'
    },
    easybuy: {
      title: 'EasyBuy',
      tag: 'ECOMMERCE WEBSITE.',
      detail: 'A responsive E-Commerce Website in Python with Django framework to sell books. Customer payment is handled with Stripe APIs.',
      link: 'http://swathyjayaseelan.pythonanywhere.com'

    },
    neighbourhood: {
      title: 'Neighbourhood Map',
      tag: 'INTERACTIVE SEARCH MAP.',
      detail: 'A single-page web application using the Knockout framework, that displays an interactive Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from Yelp API.',
      link: 'https://swathyjayaseelan.github.io/Neighbourhood-Map/'
    },
    trailer: {
      title: 'Movie Trailer Website',
      tag: 'WATCH TRAILERS NOW.',
      detail: 'A python app using Flask to display my favorite movies, including box art imagery and trailers with feature to review the movies. Hover over the image to read the story line.!.'
    },
    game: {
      title: 'Classic Arcade Game',
      tag: 'ARCADE GAME CLONE.',
      detail: 'An HTML5 Canvas powered video game using the best practices in Object Oriented JavaScript. Help the boy to get to the water without getting hit by the bugs.',
      link:'https://swathyjayaseelan.github.io/Classic-Arcade-Game/'
    },
    emotion: {
      title: 'Emotion Detector',
      tag: 'DEEPLEARNING MODEL DEPLOYMENT',
      detail: 'Deployed a deeplearning model to train and infer emotions captured on a live webcam within the browser using TensorFlow.js library.'
    },
    catalog : {
      title: 'Items Catalog',
      tag: 'CONTENT MANAGEMENT SYSTEM.',
      detail: 'A Python module using Flask framework to get a list of categories from SQLite database and present it in a web interface. Users can login using their Google+ accounts and add new items to category, update or delete the items that they have created. The pages that allow CRUD operations are protected so that only authenticated and authorized users can access and perform changes. It is hosted on AWS.'
    },
    resume : {
      title: 'Interactive Resume',
      tag: 'RESUME TEMPLATE.',
      detail: 'An interactive resume application that reads the resume content from a JSON file and dynamically displays that content within a template.',
      link: 'https://swathyjayaseelan.github.io/Interactive-Resume/'
    },
    developer : {
      title: 'AngularJS Developers Directory',
      tag: 'HIRE FREELANCERS',
      detail: 'An AngularJS application to display a list of freelance developers with CRUD functionality (add new developer to directory, view the details, update and remove a developer from directory) and integrated with feature to contact a developer.',
      link: 'https://swathyjayaseelan.github.io/AngularJS-developers-directory/'
    },
    tournament : {
      title: 'Tournament Database',
      tag: 'SWISS BASED NON-ELIMINATION TOURNAMENT.',
      detail: 'A database backed application that uses PostgreSQL database to record the players, matches and winners of a Swiss-based non-elimination tournament. Python is used to query the database and pair the players for matches based on the number of wins of each player.'
    },
    reporting : {
      title : 'Data Analysis Reporting Tool',
      tag: 'REPORTING TOOL.',
      detail: 'A large Postgresql database with over a million rows of articles and readers is explored by building complex SQL queries. An internal reporting tool is built to explore the data and report the findings like the most viewed articles, popular authors so that business decisions can be made.'
    }
  };

  $('#gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 700,
      threshold = slideWidth/3,
      dragStart,
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)');
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)');
    },700)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });

    console.log(id);
    let str = '<video class="carousel-wrap" autoplay loop muted><source src="styles/images/videos/'+ id+ '.mp4" type="video/mp4" ></video>';
    $('#modal .window').html(str);
    /*$.each($('#modal .slide'), function(index, value) {
      console.log(index);
      $(this).css({
        backgroundcolor: 'red',
        //background: "url('styles/images/videos/" + id + '-' + index + ".mp4') center center/cover",
        backgroundSize: 'cover'
      });

    });*/

  }
})
