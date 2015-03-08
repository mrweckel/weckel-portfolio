this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/about.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="page-photo-container">\n  <div id="about-photo-container">\n    <div class="photo-overlay">\n      <div id="photo-text">\n        <h3>I tell stories with code.</h3>\n        <h3>Sometimes, it makes my hair fall out.</h3>\n    </div>\n    </div>\n    <figure id="about-photo"></figure>\n  </div>\n\n<div id="icon-container">\n  <ul class="social-icons">\n    <li>\n      <a class="email" href="mailto:matt.weckel@gmail.com"></a>\n    </li>\n    <li>\n      <a class="linkedin" href="https://www.linkedin.com/in/mattweckel"></a>\n    </li>\n    <li>\n      <a class="github" href="https://github.com/mrweckel"></a>\n    </li>\n    <li>\n      <a class="vimeo" href="https://vimeo.com/mattweckel"></a>\n    </li>\n    <li>\n      <a class="instagram" href="https://instagram.com/mrweckel/"></a>\n    </li>\n    <li>\n      <a class="twitter" href="https://twitter.com/mrweckelnyc"></a>\n    </li>\n     <li>\n      <a class="challenge-post" href="http://challengepost.com/mrweckel?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"></a>\n    </li>\n  </ul>\n</div>\n\n<a href="#/" id="arrow-right" ></a>\n</div>';

}
return __p
};

this["JST"]["assets/templates/arrows.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="arrow-up"></div>\n<div id="arrow-right"></div>\n<div id="arrow-left"></div>\n';

}
return __p
};

this["JST"]["assets/templates/client.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="login-container">\n  <form name="clientLogIn" id="login-form">\n    <input type="email"/>\n    <input type="password"/>\n    <div id="login-submit">\n      <input type="submit" value="Submit" id="login-submit"/>\n    </div>\n  </form>\n</div>\n\n<a href="#/" id="arrow-left" ></a>';

}
return __p
};

this["JST"]["assets/templates/fun.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="fun-container">\n  <h3>The fun part is under construction.</h3>\n</div>\n\n<a href="#/" id="arrow-down" ></a>';

}
return __p
};

this["JST"]["assets/templates/index.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<site-navigation></site-navigation>\n\n<div id="weckel">\n    <h1 id="weckel-text">{ {  Weckel. } }</p>\n</div>\n\n<div id="mobile">\n  <portfolio-mobile></portfolio-mobile>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/portfolio-mobile.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="portfolio-container" ng-controller="ContentController as contentCtrl" ng-class="{slide: contentCtrl.page != 0}">\n  <div id="gallery-container">\n\n    <div id="gallery"\n         ng-repeat="project in contentCtrl.projects">\n\n      <a href ng-click="contentCtrl.setPage(project.id)">\n        <div class="thumb-overlay" >\n          <h3>{{project.title}}</h3>\n          <p>{{project.id}}</p>\n        </div>\n        <img class = "content-thumbs" ng-src="{{project.images[0].thumb}}"/>\n      </div>\n     </a>\n\n    <a href="#/" id="arrow-up" ></a>\n\n\n  </div>\n\n  <div id="sidebar-wrapper">\n    <project-sidebar ng-class="{active : contentCtrl.page != 0}"></project-sidebar>\n  </div>\n\n</div>';

}
return __p
};

this["JST"]["assets/templates/portfolio.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="portfolio-container" ng-controller="ContentController as contentCtrl" ng-class="{slide: contentCtrl.page != 0}">\n  <div id="gallery-container">\n\n    <div id="gallery"\n         ng-repeat="project in contentCtrl.projects">\n\n      <a href ng-click="contentCtrl.setPage(project.id)">\n        <div class="thumb-overlay" >\n          <h3>{{project.title}}</h3>\n          <p>{{project.id}}</p>\n        </div>\n        <img class = "content-thumbs" ng-src="{{project.images[0].thumb}}"/>\n      </div>\n     </a>\n\n    <a href="#/" id="arrow-up" ></a>\n\n\n  </div>\n\n  <div id="sidebar-wrapper">\n    <project-sidebar ng-class="{active : contentCtrl.page != 0}"></project-sidebar>\n  </div>\n\n</div>';

}
return __p
};

this["JST"]["assets/templates/project-sidebar.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div ng-click="contentCtrl.setPage(0)" class="close-btn">\n\n</div>\n\n<div id="project-mobile">\n\n  <ferrari ng-show="contentCtrl.isSelected({{contentCtrl.projects[0].id}})"></ferrari>\n\n  <food-finder ng-show="contentCtrl.isSelected({{contentCtrl.projects[1].id}})"></food-finder>\n\n  <make-it-wearable ng-show="contentCtrl.isSelected({{contentCtrl.projects[2].id}})"></make-it-wearable>\n\n  <mastermind ng-show="contentCtrl.isSelected({{contentCtrl.projects[3].id}})"></mastermind>\n\n  <dreams ng-show="contentCtrl.isSelected({{contentCtrl.projects[4].id}})"></dreams>\n\n  <static ng-show="contentCtrl.isSelected({{contentCtrl.projects[5].id}})"></static>\n\n  <youtube ng-show="contentCtrl.isSelected({{contentCtrl.projects[6].id}})"></youtube>\n\n  <pitchstart ng-show="contentCtrl.isSelected({{contentCtrl.projects[7].id}})"></pitchstart>\n\n  <dumbo ng-show="contentCtrl.isSelected({{contentCtrl.projects[8].id}})"></dumbo>\n\n</div>';

}
return __p
};

this["JST"]["assets/templates/projects/dreams.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-development" ng-src="{{dreams.project.images[0].full[0]}}"/>\n\n<h1>{{dreams.project.title}}</h1>\n<hr/>\n\n<div class="two-buttons">\n  <a href="{{dreams.project.url}}">\n    <div class="btn-a">\n      <p>Visit The Site</p>\n    </div>\n  </a>\n\n  <a href="{{dreams.project.github}}">\n    <div class="btn-b">\n      <p>Peep the code</p>\n    </div>\n  </a>\n</div>\n\n<div id="clear"></div>\n\n<p>An interactive experience that allows a user to view their media in a new way. The biggest thing to happen to home videos since Saget.</p>\n\n<p>Position: Full Stack Developer</p>\n\n<img class= "content-full-development" ng-src="{{dreams.project.images[0].full[1]}}"/>\n<img class= "content-full-development" ng-src="{{dreams.project.images[0].full[2]}}"/>\n\n<footer id="sidebar">\n  <p>Technologies Used:</p>\n  <p>Javascript, Ruby on Rails, HTML, CSS, JQuery, JQuery UI, PostgreSQL, YouTube API, Google Oauth2, Jasmine, Rspec</p>\n</footer>';

}
return __p
};

this["JST"]["assets/templates/projects/dumbo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-film" ng-src="{{dumbo.project.images[0].full[0]}}"/>\n\n<h1>{{dumbo.project.title}}</h1>\n<hr/>\n\n<a class="no-style" href="{{dumbo.project.video_url}}">\n  <div class="btn">\n    <p>Watch the Film</p>\n  </div>\n</a>\n\n<p>Crossing Dumbo is a web series chronicling the awesome people of DUMBO. I am still waiting for the episode about me. </p>\n\n<p>Position: Director</p>\n\n<img class= "content-full-film" ng-src="{{dumbo.project.images[0].full[1]}}"/>\n<img class= "content-full-film" ng-src="{{dumbo.project.images[0].full[2]}}"/>\n\n<footer id="empty">\n</footer>';

}
return __p
};

this["JST"]["assets/templates/projects/ferrari.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-film" ng-src="{{ferrari.project.images[0].full[0]}}"/>\n\n<h1>{{ferrari.project.full_title}}</h1>\n\n<hr></hr>\n\n<a class="no-style" href="{{ferrari.project.video_url}}">\n  <div class="btn">\n    <p>Watch the Film</p>\n  </div>\n</a>\n\n<p>Killer short film commissioned by popular website Gear Patrol and produced by LonelyLeap Digital Creative Agency.</p>\n\n<p>Position: Film Editor</p>\n\n<img class= "content-full-film" ng-src="{{ferrari.project.images[0].full[1]}}"/>\n<img class= "content-full-film" ng-src="{{ferrari.project.images[0].full[2]}}"/>\n\n<footer id="empty">\n</footer>\n';

}
return __p
};

this["JST"]["assets/templates/projects/food-finder.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-development" ng-src="{{food.project.images[0].full[0]}}"/>\n\n<h1>{{food.project.title}}</h1>\n<hr/>\n\n<div class="two-buttons">\n  <a href="{{food.project.url}}">\n    <div class="btn-a">\n      <p>Visit The Site</p>\n    </div>\n  </a>\n\n  <a href="{{food.project.github}}">\n    <div class="btn-b">\n      <p>Peep the code</p>\n    </div>\n  </a>\n</div>\n\n<p>A social network of Devbootcamp students that rate and suggest local restaurants. Like Yelp, but not really, but kind of.</p>\n\n<p>Position: Full Stack Developer</p>\n\n<img class= "content-full-development" ng-src="{{food.project.images[0].full[1]}}"/>\n<img class= "content-full-development" ng-src="{{food.project.images[0].full[2]}}"/>\n\n<footer id="sidebar">\n  <p>Technologies Used:</p>\n  <p>Javascript, HTML, CSS, Sinatra, Bootstrap</p>\n</footer>';

}
return __p
};

this["JST"]["assets/templates/projects/mastermind.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-development" ng-src="{{mastermind.project.images[0].full[0]}}"/>\n\n<h1>{{mastermind.project.title}}</h1>\n\n<hr></hr>\n\n<div class="two-buttons">\n  <a href="{{mastermind.project.url}}">\n    <div class="btn-a">\n      <p>Visit The Site</p>\n    </div>\n  </a>\n\n  <a href="{{mastermind.project.github}}">\n    <div class="btn-b">\n      <p>Peep the code</p>\n    </div>\n  </a>\n</div>\n\n\n<div id="clear"></div>\n\n<p>A tribute to the greatest artist of our generation using pure OOJS. Just a little something to hold you over until Expendables 4.</p>\n\n<p>Position: Front End Developer</p>\n\n<img class= "content-full-development" ng-src="{{mastermind.project.images[0].full[1]}}"/>\n<img class= "content-full-development" ng-src="{{mastermind.project.images[0].full[2]}}"/>\n\n<footer id="sidebar">\n  <p>Technologies Used:</p>\n  <p>JavaScript, HTML, CSS</p>\n</footer>';

}
return __p
};

this["JST"]["assets/templates/projects/pitchstart.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-development" ng-src="{{pitchstart.project.images[0].full[0]}}"/>\n\n<h1>{{pitchstart.project.title}}</h1>\n\n<hr></hr>\n\n<a class="no-style" href="{{pitchstart.project.github}}">\n  <div class="btn">\n    <p>Peep the code</p>\n  </div>\n</a>\n\n<p>Web application that allows people to post pitches that they want feedback on. Alternate title: "Putting yourself out there to fail miserably in front of friends, families, and strangers."</p>\n\n<p>Position: Full Stack Developer</p>\n\n<img class= "content-full-development" ng-src="{{pitchstart.project.images[0].full[1]}}"/>\n<img class= "content-full-development" ng-src="{{pitchstart.project.images[0].full[2]}}"/>\n\n<footer id="sidebar">\n  <p>Technologies Used:</p>\n  <p>Javascript, Ruby on Rails, HTML, CSS, Bootstrap, JQuery, AJAX, JQuery UI, PostgreSQL, YouTube API, Google Oauth2, Jasmine, Rspec</p>\n</footer>\n';

}
return __p
};

this["JST"]["assets/templates/projects/static.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-film" ng-src="{{static.project.images[0].full[0]}}"/>\n\n<h1>{{static.project.title}}</h1>\n\n<hr></hr>\n\n<a class="no-style" href="{{static.project.video_url}}">\n  <div class="btn">\n    <p>Watch the Film</p>\n  </div>\n</a>\n\n<p>Music video commissioned by NYC rockstars, The Dirty Pearls. One of the first videos online to make use of the Xbox Kinect. I\'m talking pre-SDK people!</p>\n\n<p>Position: Director</p>\n\n<img class= "content-full-film" ng-src="{{static.project.images[0].full[1]}}"/>\n<img class= "content-full-film" ng-src="{{static.project.images[0].full[2]}}"/>\n\n<footer id="empty">\n</footer>\n';

}
return __p
};

this["JST"]["assets/templates/projects/wearable.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-film" ng-src="{{wearable.project.images[0].full[0]}}"/>\n\n<h1>{{wearable.project.title}}</h1>\n<hr/>\n\n<a class="no-style" href="{{wearable.project.video_url}}">\n  <div class="btn">\n    <p>Watch the Film</p>\n  </div>\n</a>\n\n<p>Episode one of the "Make It Wearable" series from Intel and The Creators\' Project over at VICE. One of the biggest inspirations on me joining a bootcamp and committing to a career in tech.</p>\n\n<p>Position: Film Editor</p>\n\n<img class= "content-full-film" ng-src="{{wearable.project.images[0].full[1]}}"/>\n<img class= "content-full-film" ng-src="{{wearable.project.images[0].full[2]}}"/>\n\n<footer id="empty">\n</footer>';

}
return __p
};

this["JST"]["assets/templates/projects/youtube.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img class= "content-full-film" ng-src="{{youtube.project.images[0].full[0]}}"/>\n\n<h1>{{youtube.project.title}}</h1>\n\n<hr></hr>\n\n<a class="no-style" href="{{youtube.project.video_url}}">\n  <div class="btn">\n    <p>Watch the Film</p>\n  </div>\n</a>\n\n<p>Behind the Scenes at the YouTube Music Awards. Skip to 11:44 to see Jason Schwartzman pull an etch-a-sketch out of his nether region.</p>\n\n<p>Position: Film Editor</p>\n\n<img class= "content-full-film" ng-src="{{youtube.project.images[0].full[1]}}"/>\n<img class= "content-full-film" ng-src="{{youtube.project.images[0].full[2]}}"/>\n\n<footer id="empty">\n</footer>\n\n';

}
return __p
};

this["JST"]["assets/templates/site-navigation.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '    <div id="portfolio"\n         ng-class="{\n           active: pgCtrl.isSelected(1) }">\n       <a href="#portfolio">Portfolio</a>\n    </div>\n\n    <div id="about">\n        <a href="#about">About</a>\n    </div>\n\n    <div id="client">\n        <a href="#client">Log In</a>\n    </div>\n\n    <div id="fun">\n        <a href="#fun">Fun</a>\n    </div>\n';

}
return __p
};