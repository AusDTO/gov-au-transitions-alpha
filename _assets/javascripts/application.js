//= require_self

(function () {
  "use strict";

  function AlfaLoader() {

  };

  AlfaLoader.prototype = {
    /**
     * Loads al vaues in the url into the form to be pased on
     * NOTE:ths may be vunerble to XSS attacks.
     **/
    loadFormVarsFromUrl: function () {
      var values = this.getQueryString(),
        form = document.getElementById("transition"),
        i,
        element;

      if (!form) {
        return;
      }
      for (i in values) {
        if (values.hasOwnProperty(i)) {
          element = document.createElement("input");
          element.type = "hidden";
          element.name = i;
          element.value = values[i];
          form.appendChild(element);
        }
      }
    },

    getQueryString: function () {
      var query_string = {},
        query = window.location.search.substring(1),
        vars = query === "" ? [] : query.split("&"),
        i,
        pair,
        arr;

      for (i = 0; i < vars.length; i++) {
        pair = vars[i].split("=");

        if (typeof query_string[pair[0]] === "undefined") {
          query_string[pair[0]] = decodeURIComponent(pair[1]);
        } else if (typeof query_string[pair[0]] === "string") {
          arr = [ query_string[pair[0]], decodeURIComponent(pair[1]) ];
          query_string[pair[0]] = arr;
        } else {
          query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
      }
      return query_string;
    },

    initMapAutocomplete: function () {
      var input = document.querySelectorAll(".autocomplete-address");

      if (input.length) {
        this.setMapAutocomplete(input[0]);
      }
    },

    /**
     * Sets the map autocomplete functionality for the page if the correct
     * selector exists. At the moment just sets the firs selector if finds.
     **/
    setMapAutocomplete: function (input) {
      var autocomplete;

      autocomplete = new google.maps.places.Autocomplete(input, {
        types: [/*'(cities)',*/ '(regions)'],
        componentRestrictions: {'country': 'au'}
      });
      if (input.getAttribute("data-addmore") === "true") {
        autocomplete.addListener('place_changed', this.addMore.bind(this, input));
      }
    },

    addMore: function (input) {
      var add = document.createElement("a");

      add.href = "#";
      add.setAttribute("class", "something");
      add.appendChild(document.createTextNode("Add More (click here)!!"));
      input.parentNode.appendChild(add);

      add.addEventListener("click", function (e) {
        e.preventDefault();
        this.addNewLocationInput(add);
      }.bind(this));
    },

    addNewLocationInput: function (elmnt) {
      var input = document.createElement("input");

      input.type = "text";
      input.setAttribute("placeholder", "Please enter a suburb");
      input.setAttribute("data-addmore", "true");

      elmnt.parentNode.insertBefore(input, elmnt);
      elmnt.parentNode.removeChild(elmnt);
      this.setMapAutocomplete(input);
    },

    enableAccordions: function () {
      $('.js-accordion-trigger').bind('click', function(e){
        jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
        jQuery(this).parent().toggleClass('is-expanded');
        e.preventDefault();
      });
    }
  };

  var alfa = new AlfaLoader();
  alfa.loadFormVarsFromUrl();
  document.addEventListener("DOMContentLoaded", function () {
    alfa.enableAccordions();
  });
  window.initAutocomplete = function () {
    if (alfa) {
      alfa.initMapAutocomplete();
    }
  };
}());
