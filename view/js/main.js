// SIDEBAR COLLAPSE
$(document).ready(function () {
  
  // let flag = localStorage.getItem('flag');
  // if(flag && flag!==null){
  //   $(".navbar").toggleClass("active");
  //   $(".main_container").toggleClass("active");
  // }

  $(".sidetoggle").click(function () {
    // if(flag===null || flag){
    //   localStorage.setItem("flag",false);
    // }
    // else if(!flag){
    //   localStorage.setItem("flag",true);
    // }
    $(".navbar").toggleClass("active")
    $(".main_container").toggleClass("active")
  });

})

// FOR TEXTAREA NUMBER INPUT
jQuery.fn.ForceNumericOnly =
    function () {
        return this.each(function () {
            $(this).keydown(function (e) {
                var key = e.charCode || e.keyCode || 0;
                return (
                    key == 8 || //BACKSPACE
                    key == 9 || //TAB
                    key == 13 || //ENTER
                    key == 46 || //DELETE
                    key == 188 || //COMMA
                    (key >= 35 && key <= 40) || //END,HOME,ARROWS
                    (key >= 48 && key <= 57) || //0-9
                    (key >= 96 && key <= 105)); //0-9
            });
        });
    };
$(".onlynumber").ForceNumericOnly();


// SMS CHAR COUNT
var wordCounter = {
    init: function() {
      this.DOM();
      this.events();
    },
    DOM: function() {
      this.textbox = $("#smsArea");
      this.wordCount = $("#wordCount");
      this.charCount = $("#charCount");
    },
    events: function() {
      this.textbox.on("input", this.count.bind(this));
    },
    count: function() {
      var words = this.textbox.val().split(" "),
        chars = this.textbox.val();
  
      //DELETE EMPTY STRINGS
      for (var i = 0; i < words.length; i++) {
        while (words[i] === "") {
          words.splice(i, 1);
        }
      }
      //COUNT WORDS
      if (words.length === 1) {
        this.wordCount.text(words.length + " word");
      } else {
        this.wordCount.text(words.length + " words");
      }
      //COUNT CHARACTERS
      if (chars.length < 0) {
        words = [];
      } else if (chars.length === 1) {
        this.charCount.text(chars.length + " character");
      } else {
        this.charCount.text(chars.length + " characters");
      }
    }
  }
  wordCounter.init();


  // REMAINING CHAR
  $(document).ready(function () {
    var len = 0;
    var maxchar = 160;

    $('#smsArea').keyup(function () {
        len = this.value.length
        if (len > maxchar) {
            return false;
        } else if (len > 0) {
            $("#remainingC").html("" + (maxchar - len));
        } else {
            $("#remainingC").html("" + (maxchar));
        }
    })
});

// MATERIALIZE SELECT OPTION INITIALIZATION
$(document).ready(function(){
  $('select').formSelect();
});

// MATERIALIZE TAB INITIALIZTION

$(document).ready(function(){
  $('.tabs').tabs({
    duration:500
  });

});

// =============================================================
// KEEP SELECTED TAB ON PAGE AFTER REFRESH
$('#myTab li a').click(function(e){
  e.preventDefault();
  $(this).tab('show');
  window.scrollTo(0, -200);
});

$('#myTab > li > a').on('shown.bs.tab', function(e){
  var id = $(e.target).attr("href").substr(1);
  window.location.hash = id;
});

var hash = window.location.hash;
$('#myTab li a[href="' + hash + '"]').tab('show');
// ==================XXXXXXXXXXXXXXXXX==========================

// INPUT DATE VALUE ALWAYS TODAY
document.getElementById('dateFrom').valueAsDate = new Date();
document.getElementById('dateTo').valueAsDate = new Date();
document.getElementById('MdateFrom').valueAsDate = new Date();
document.getElementById('MdateTo').valueAsDate = new Date();