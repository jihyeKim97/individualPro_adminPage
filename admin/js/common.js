/*공통 JS*/
//페이지 로딩시 실행
$(document).ready(function() {
  //좌측 메뉴 높이 조절
  menuHeight = $(".menu_box").outerHeight(); //메뉴 높이
  heightAction();

  //메뉴 슬라이딩 셋팅
  for (var i = 0; i < $(".menu_box ul").length; i++) {

    if ($(".menu_box ul").eq(i).find(".on").length > 0) {
      var c = $(".menu_box ul").eq(i).find(".two_dapps").length;
      if (c > 0) {
        var h = c * 34 + 57;
        $(".menu_box ul").eq(i).css("height", h + "px");
      }

    } else {
      $(".menu_box ul").eq(i).css("height", "57px");
    }
  }


  //셀랙트 박스 클릭시
  $(".selectAction").on("click", function() {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });

  //셀렉트 박스 속성 선택시
  $("html").click(function(e) {
    if (!$(e.target).hasClass("selectAction")) {
      $(".selectAction").removeClass("on");
    }
    if ($(e.target).prop('tagName') != "SELECT") {
      $("select").removeClass("on");
    }
  });

  //셀랙트 박스 선택시 온표시
  $("select").on("click", function() {
    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
    } else {
      $(this).addClass("on");
    }
  });

  $(".dataList li").on("click", function() {

    var type = $(this).attr("type");

    //기본
    if (type == "value") {

      //이미지 여부 확인
      if ($(this).find("img").length > 0) {
        var imgSrc = $(this).find("img").attr("src");
        $(this).parent().parent().find(".logo_img").attr("src", imgSrc);
      }

      var dataValue = $(this).attr("dataValue");
      $(this).parent().parent().find(".text").html(dataValue);
      $(this).parent().parent().find("input").val(dataValue);

    } else if (type == "link") {
      var dataUrl = $(this).attr("dataUrl");
      window.location.href = dataUrl;
    }

  });

  $('.menu_box ul').on("click", function() {

    $('.menu_box ul').css("height", "57px");
    $('.menu_box ul .one_dapps').removeClass("on");
    $('.menu_box ul').addClass("off");

    var c = $(this).find(".two_dapps").length;
    if (c > 0) {
      var h = c * 34 + 57;
      $(this).css("height", h + "px");
    }

    $(this).find(".one_dapps").addClass("on");
    $(this).removeClass("off");

  });
  //탭
  $(function() {
    $(".tab ul li").click(function() {
      $(".tab ul li").removeClass('on');
      $(".tab .conBox").removeClass('on');
      $(this).addClass('on');
      $("#" + $(this).data('id')).addClass('on');
    });
  });

  //preview
  $(function() {
    $('.tag_box').find(' li > a').click(function() {
      $(this).parent().addClass('active');
      $(this).parent().siblings('li').removeClass('active');
    });
  });

  $(function() {
    $('.hash').find(' li > a').click(function() {
      $(this).parent().addClass('active');
      $(this).parent().siblings('li').removeClass('active');
    });
  })

  $(function() {
    $('.theme_list').find(' li > div').click(function() {
      $(this).parent().addClass('on');
      $(this).parent().siblings('li').removeClass('on');
    });
  })
  
  $(function() {
    $('.theme_list').find(' li > div').click(function() {
      $(this).parent().addClass('on');
      $(this).parent().siblings('li').removeClass('on');
    });
  })

  //input=file 1 file reader
  var fileTarget = $('.filebox_cr .upload-hidden_cr');
  fileTarget.on('change', function() {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.upload-name_cr').val(filename);
  });

  //input=file 2 file reader
  var fileTarget = $('.filebox .upload-hidden');
  fileTarget.on('change', function() {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split('/').pop().split('\\').pop();
    }
    $(this).siblings('.upload-name').val(filename);
  });

  //file read url
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#ph').attr('src', e.target.result);
        $('.img_regi .ph').css('background', '#eee');
        $('.img_regi .ph img').css('visibility', 'visible');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#img_file").change(function() {
    readURL(this);
  });

// //빈칸이 있는지 확인 하는 함수
//   $(function() {
//     $(".save_btn").click(function() {
//       var isRight = true;
//       $(".popup_edit").find("input[type=text]").each(function(index, item) {
//         // 아무값없이 띄어쓰기만 있을 때도 빈 값으로 체크되도록 trim() 함수 호출
//         if ($(this).val().trim() == '') {
//           alert(" 항목을 입력하세요.");
//           isRight = false;
//           return true;
//         }
//       });
//
//       if (!isRight) {
//         return;
//       }
//
//     });
//
//   });

});


window.onresize = function(event) {
  heightAction();
};

// preview 숨기기 기능
var flag = false;

function hide(div) {

  if (!flag) {
    document.getElementById(div).style.display = 'block';
    heightAction();
    flag = true;
  } else {
    document.getElementById(div).style.display = 'none';
    heightAction();
    flag = false;
  }
}


// 이미지 미리보기 기능
$("#Preview_img").on('change', function() {
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

// //이미지가 잇을때 FILE_PATH로 이미지를 넣고 없을땐 DEFAULT이미지로 변경
function imagedefault(id) {
  id.src = "../images/base_skill_img.png";
}

//초기 메뉴 높이 값
var menuHeight = 0;

function heightAction() {

  var conHeight = $(".body_box").outerHeight(); //콘텐츠 높이
  var winHeight = $("body").outerHeight(); //창 크기
  var heaHeight = $(".header_box").outerHeight(); //헤더 높이
  var tmpHeight = menuHeight;

  //스크롤이 있다면
  if (conHeight > (winHeight - heaHeight)) {
    tmpHeight = conHeight;
    //스크롤이 없다면
  } else {
    tmpHeight = (winHeight - heaHeight) - 20;
  }
  //메뉴가 제일 높다만
  if (menuHeight > tmpHeight) {
    tmpHeight = menuHeight;
  }

  $(".menu_box").css("height", tmpHeight + "px")
}

//팝업 초기 값
function popupOpen(id, w, h, title) {
  $("#" + id).dialog({
    resizable: false, //리사이징 옵션
    draggable: false, //드레그 옵션
    title: title,
    modal: true,
    width: w,
    height: h
  });
}

//컴펌 초기 값
function confirmOpen(id, title, contensText, btnText, returnAction) {

  var okMsg = "승인";
  var noMsg = "취소";

  if (btnText != null && btnText.length == 2) {
    okMsg = btnText[0];
    noMsg = btnText[1];
  }

  $("#" + id).html(contensText);

  $("#" + id).dialog({
    resizable: false, //리사이징 옵션
    draggable: false, //드레그 옵션
    title: title,
    modal: true,
    width: 410,
    height: "auto",
    buttons: [{
        class: "ok",
        text: okMsg,
        click: returnAction
      },
      {
        class: "no",
        text: noMsg,
        click: function() {
          $(this).dialog("close");
        }
      }
    ],
    open: function(event, ui) {
      $(".ui-dialog-titlebar-close").hide();
    }
  });
}

//모달 이미지만 변경 ver 1
function modalVer01(id, title, contensText, btnText, returnAction) {

  var okMsg = "승인";
  var noMsg = "취소";

  if (btnText != null && btnText.length == 2) {
    okMsg = btnText[0];
    noMsg = btnText[1];
  }

  $("#" + id).html(contensText);

  $("#" + id).dialog({
    resizable: false, //리사이징 옵션
    draggable: false, //드레그 옵션
    title: title,
    modal: true,
    width: 410,
    height: "auto",
    buttons: [{
        class: "ok",
        text: okMsg,
        click: returnAction
      },
      {
        class: "no",
        text: noMsg,
        click: function() {
          $(this).dialog("close");
        }
      }
    ],
    open: function(event, ui) {
      $(".ui-dialog-titlebar-close").hide();
    }
  });
}

//모달 이미지만 변경 ver 2
function modalVer02(id, title, contensText, btnText, returnAction) {

  var okMsg = "확인";

  $("#" + id).html(contensText);

  $("#" + id).dialog({
    resizable: false, //리사이징 옵션
    draggable: false, //드레그 옵션
    title: title,
    modal: true,
    width: 410,
    height: "auto",
    buttons: [{
      class: "ok",
      text: okMsg,
      click: function() {
        $(this).dialog("close");
      }
    }],
    open: function(event, ui) {
      $(".ui-dialog-titlebar-close").hide();
    }
  });
}

//타이틀이 없는 팝업 값
function noTitlePopupOpen(id, w, h) {

  $("#" + id).dialog({
    resizable: false, //리사이징 옵션
    draggable: false, //드레그 옵션
    modal: true,
    width: w,
    height: h,
    dialogClass: "no-titlebar"
  });
}


//달력
var initDaterangepicker = function(opens) {
  $('#schDateRange').daterangepicker({
    "autoApply": true,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "locale": {
      "format": "YYYY-MM-DD",
      "separator": " ~ ",
      //"applyLabel": "Apply",
      //"cancelLabel": "Cancel",
      //"fromLabel": "From",
      //"toLabel": "To",
      "customRangeLabel": "Custom",
      //"weekLabel": "W",
      //"daysOfWeek": ["Su","Mo","Tu","We","Th","Fr","Sa"],
      //"monthNames": ["January","February","March","April","May","June","July","August","September","October","November","December"],
      "firstDay": 1
    },
    "alwaysShowCalendars": true,
    "startDate": moment().subtract(6, 'days'),
    "endDate": moment(),
    "minDate": "2020-03-01",
    "maxDate": "9999-12-31",
    "opens": opens
  }, function(start, end, label) {
    //	  $('#schStartDt').val(start.format('YYYYMMDD'));
    //	  $('#schEndDt').val(end.format('YYYYMMDD'));
  });
  $('#schDateRange2').daterangepicker({
    "autoApply": true,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "locale": {
      "format": "YYYY-MM-DD",
      "separator": " ~ ",
      //"applyLabel": "Apply",
      //"cancelLabel": "Cancel",
      //"fromLabel": "From",
      //"toLabel": "To",
      "customRangeLabel": "Custom",
      //"weekLabel": "W",
      //"daysOfWeek": ["Su","Mo","Tu","We","Th","Fr","Sa"],
      //"monthNames": ["January","February","March","April","May","June","July","August","September","October","November","December"],
      "firstDay": 1
    },
    "alwaysShowCalendars": true,
    "startDate": moment().subtract(6, 'days'),
    "endDate": moment(),
    "minDate": "2020-03-01",
    "maxDate": "9999-12-31",
    "opens": opens
  }, function(start, end, label) {
    //	  $('#schStartDt').val(start.format('YYYYMMDD'));
    //	  $('#schEndDt').val(end.format('YYYYMMDD'));
  });

}
