//<li class="main-menu__item ng-scope"><button class="main-menu__control menu-list__control">Download Recording (CollabDown)</button></li>
var t = setInterval(function () {
  if (document.getElementsByClassName("main-menu__list menu-list").length > 0) {
	var down = document.createElement('li');
	down.className = 'main-menu__item ng-scope';
	var downButton = document.createElement('button');
	downButton.className = "main-menu__control menu-list__control";
	downButton.innerHTML = "Download Recording (CollabDown)";
	downButton.onclick = function() {
		window.open(document.getElementsByTagName("video")[0].src, "_blank");
	};

	down.appendChild(downButton);
	document.getElementsByClassName("main-menu__list menu-list")[0].appendChild(down);
    clearInterval(t);
  }
}, 500);
