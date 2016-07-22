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
        arr,
        decoded;

      for (i = 0; i < vars.length; i++) {
        pair = vars[i].split("=");

        if (typeof query_string[pair[0]] === "undefined") {
          decoded = decodeURIComponent(pair[1]);
          if (decoded.indexOf(",") > 0) {
            query_string[pair[0]] = decoded.split(",");
          } else {
            query_string[pair[0]] = decoded;
          }
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
      add.setAttribute("class", "addmore");
      add.appendChild(document.createTextNode("Add more"));
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
    },

    addBusinessLogic: function () {
      var query = this.getQueryString(),
          form = document.getElementById("transition");

      if (!form) {
        return;
      }
      // this conditon ensures that the live value is always an array
      if (query["live"] && typeof query["live"] === 'string') {
        query["live"] = [query["live"]];
      }
      // Q2 needs to show variant Q3 page for live [home, family] and Q4 for all other cases.
      if (form.getAttribute("data-current-question") === "q2"
          && query["live"]
          && query["live"].indexOf("home") === -1
          && query["live"].indexOf("family") === -1) {
        form.action = "/q4/";
      }
      if (form.getAttribute("data-current-question") === "q3"
          && query["live"]
          && query["live"].indexOf("nursinghome") === -1
          && query["live"].indexOf("retirementvillage") === -1
          && query["live"].indexOf("dontknow") === -1) {
        form.action = "/q5/";
      }

    }
  };

  var alfa = new AlfaLoader();
  alfa.loadFormVarsFromUrl();
  document.addEventListener("DOMContentLoaded", function () {
    alfa.enableAccordions();
    alfa.addBusinessLogic();
  });
  window.initAutocomplete = function () {
    if (alfa) {
      alfa.initMapAutocomplete();
    }
  };
}());
