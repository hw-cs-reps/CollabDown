// CollabDown by Humaid AlQassimi. Released under the BSD 2-Clause license.

// angle-double-down icon from font-awesome
// Font Awesome font is licensed under the SIL OFL 1.1 license <http://scripts.sil.org/OFL>
const svg = `<svg class="svg-icon medium default" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>`;

// We wait until the main menu is present before we try to append.
var t = setInterval(function () {
  if (document.getElementsByClassName("main-menu__list menu-list").length > 0) {
	
	// Create the list element for the main menu.
	var down = document.createElement('li');
	down.className = 'main-menu__item ng-scope';
	var downButton = document.createElement('button');
	downButton.className = "main-menu__control menu-list__control";
	downButton.innerHTML = `<span class="menu-list__inner-wrap">
	<span class="menu-list__icon ng-isolate-scope" name="help" size="medium">
	`+svg+`</span>
	<span class="ng-scope">Download Recording <small>(CollabDown)</small></span>
	</span>`;

	// When clicking the button, open the video source in a new window.
	downButton.onclick = function() {
		window.open(document.getElementsByTagName("video")[0].src, "_blank");
	};
	down.appendChild(downButton);
	
	// Add the download button to the main menu list.
	document.getElementsByClassName("main-menu__list menu-list")[0].prepend(down);

    clearInterval(t);
  }
}, 500);
