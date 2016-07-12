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
        vars = query.split("&"),
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

    /**
     * Sets the map autocomplete functionality for the page if the correct
     * selector exists. At the moment just sets the firs selector if finds.
     **/
    setMapAutocomplete: function () {
      var input = document.querySelectorAll(".autocomplete-address"),
        autocomplete;

      if (input.length) {
        autocomplete = new google.maps.places.Autocomplete(input[0], {
          types: [/*'(cities)',*/ '(regions)'],
          componentRestrictions: {'country': 'au'}
        });
        if (input[0].getAttribute("data-addmore") === "true") {
          autocomplete.addListener('place_changed', this.addMore.bind(this, input[0]));
        }
      }
    },

    addMore: function (input) {
      var add = document.createElement("a");

      add.href = "#";
      add.setAttribute("class", "something");
      add.appendChild(document.createTextNode("Add More (click here)!!"));
      input.parentNode.appendChild(add);

      add.addEventListener("click", function () {
        alert("adding a new address selector");
      });
    }
  };

  var alfa = new AlfaLoader();
  alfa.loadFormVarsFromUrl();
  // document.addEventListener("DOMContentLoaded", function () {
  //   //alfa.setMapAutocomplete();
  // });
  window.initAutocomplete = function () {
    if (alfa) {
      alfa.setMapAutocomplete();
    }
  };
}());
