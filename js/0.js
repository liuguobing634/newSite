var titles = new Array('title1', 'title2', 'title3');

var fobiteColor = "#AACCA3";
var img_count;

var s = document.createElement("script");
s.type = "text/javascript";
s.src = "js/jquery-1.11.0.min.js";
var head = document.getElementsByTagName("head")[0];
head.appendChild(s);

function change_title(var1) {
    for (var k = 0; k < 3; k++) {
        document.getElementById(titles[k]).className = "un_title";
    }
    var1.className = "title";
}

function spadd() {
    var sl = $("#sl");
   var val = parseInt(sl.val());
    sl.val(val+1);
    if(parseInt(sl.val()) == 2) {
        var js_button = $("#js");
        if(js_button) {
            js_button.css({"color":"#000000","cursor":"pointer"});
            js_button.bind("click",spminute);
        }
    }

}

function spminute() {
    var sl = $("#sl");
    if (parseInt(sl.val())>1){
        sl.val(sl.val()-1);
    }
    if(parseInt(sl.val())<=1){
        sl.val(1);
        var js_button = $("#js");
        if(js_button) {
            js_button.css({"color":fobiteColor,"cursor":"not-allowed"});
            js_button.unbind("click",spminute);
        }
    }

}

var _top;
var search_text;
var username;
var question;
var banners;
var b_i = 0;

var banner_p;
var banner_bs;
var right_bottoms;
var r_bi = 0;
function on_load() {

    _top = document.getElementById('top');
    _top.style.left = getPageSize()[2] + getPageScroll()[0] - 90 + 'px';
    _top.style.display = "none";
    on_top();
    search_text = $("#search-text");
    username = $("#username");
    question = $("#wytw");
    if(search_text) {
        //search_text.bind("click",function(){changeInputColor( search_text)});
        search_text.bind("click",{obj:search_text},changeInputColor);
    }
    if(username) {
       username.bind("click",{obj:username},changeInputColor);
    }
    if(question) {
        question.bind("click",{obj:question},changeInputColor);
    }

	
	banners = $("#banner").children(".banner-bk");
	if(banners) {
		banner_bs = $("#banner").children("p").children("b");
		right_bottoms = $(".product_01").children(".right_bottom");
		window.setInterval("changeBanner()",5000);
		window.setInterval("changeRightBottom()",4000);
	}

	
}

function changeRightBottom() {
	right_bottoms.eq(r_bi).fadeOut();
	r_bi++;
	if(r_bi>2)
		r_bi=0;
	right_bottoms.eq(r_bi).fadeIn();
}

function changeBannerByBtn(j) {
	banners.eq(b_i).fadeOut();
	banners.eq(b_i).css("z-index","-2");
	banner_bs.eq(b_i).removeClass("on");
	b_i = j;
	banners.eq(b_i).fadeIn();
	banners.eq(b_i).css("z-index","-1");
	banner_bs.eq(b_i).addClass("on");
}

function changeBanner() {
	j = b_i + 1;
	if(j>3)
		j=0;
	changeBannerByBtn(j);
}

function changeInputColor(var1) {
    /*var1.css("color","#000000");
    var1.val("");
    var1.unbind("click");*/
    var1.data.obj.css("color","#000000");
    var1.data.obj.val("");
    var1.data.obj.unbind("click");
}

function last_pic() {
    var products2 = $("#pros").children("a");
    products2.eq(0).before(products2.slice(9));/*slice不包含后一项 */
}

function next_pic() {
    var products2 = $("#pros").children("a");
    products2.eq(11).after(products2.slice(0,3));/*会将原来的删除，即这样就是替换*//*slice不包含后一项 */
}
//让top按钮一直保持在窗口中央
function on_top() {

    $(window).scroll(function () {
        _top.style.top = getPageScroll()[1] + getPageSize()[3] - 370 + "px";
        if (getPageScroll()[0] + getPageSize()[2] < 1200) {
            _top.style.left = getPageSize()[2] + getPageScroll()[0] - 90 + 'px';
        }

        if (getPageScroll()[1] > getPageSize()[3] && _top.style.display == "none") {
            _top.style.display = "";
        }
        if (getPageScroll()[1] < getPageSize()[3] && _top.style.display == "") {
            _top.style.display = "none";
        }
    })
    $(window).resize( function () {
        _top.style.top = getPageScroll()[1] + getPageSize()[3] - 400 + "px";
        _top.style.left = getPageSize()[2] + getPageScroll()[0] - 90 + 'px';
    });
    //_top.style.top = document.documentElement.clientHeight + document.documentElement.scrollTop  + "px";}
}

//下面是获取滚动条和窗口大小信息的

//getPageSize()  
function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less t
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight)
    return arrayPageSize;
}

function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
        xScroll = self.pageXOffset;
        yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
        xScroll = document.documentElement.scrollLeft;
        yScroll = document.documentElement.scrollTop;
    } else if (document.body) {// all other Explorers
        yScroll = document.body.scrollTop;
        xScroll = document.body.scrollLeft;
    }
    arrayPageScroll = new Array(xScroll, yScroll)
    return arrayPageScroll;
}  

