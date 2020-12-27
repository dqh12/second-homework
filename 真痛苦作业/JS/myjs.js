window.onload = function() {
    var points = document.getElementsByClassName('point'); //点
    var button = document.getElementsByClassName("btn"); //a元素
    var wrap = document.getElementById('wrap'); //大的盒子
    var itemss = document.getElementsByClassName('item-2'); //文字的style
    var pointss = document.getElementById('point-22'); //竖直的条
    var listss = document.getElementsByClassName('list-style'); //展示的li
    var guding = document.getElementById('guding'); //下部的二维码
    var imgop = document.getElementById('imgop'); //二维码图片定义
    var yincang = document.getElementById('yincang'); //隐藏的二维码
    var dianerji = document.getElementById('dianerji'); //点击出现的二级菜单
    var dianerjii = document.getElementById('dianerjii'); //点击二级菜单消失er
    var imgg = document.getElementById('imgg'); //向上的图片
    var imggg = document.getElementById('imggg'); //图标
    var imgg1 = document.getElementById('imgg1'); //向下的图片
    var imggg1 = document.getElementById('imggg1'); //图标
    var h62 = document.getElementById('zhan'); //段落1
    var h63 = document.getElementById('zhansecond'); //段落2
    var h64 = document.getElementById('zhanthird'); //段落3
    var h65 = document.getElementById('zhanfourth'); //段落4
    var displayfirst = document.getElementById('displayfirst'); //下方的第一个点击事件
    var displaysecond = document.getElementById('displaysecond'); //下方的第二个点击事件
    var displaythird = document.getElementById('displaythird'); //下方的第三个点击事件
    var displayfourth = document.getElementById('displayfourth'); //下方的第四个点击事件
    var indexs = 0; //表示第几个li在展示 ---》第几个li有active这个类名
    var time = 0; //定时器
    var index = 0; //index表示第几张图片在展示 ---》第index张图片有active这个类名
    //第几个点在展示
    var docWidth = document.body.clientWidth; //获取屏幕的宽度
    var x = 800; //手机端的响应设置
    var clearActive = function() {
        for (var i = 0; i < points.length; i++) {
            button[i].className = 'btn';
        }
    }
    var goIndex = function() {
        clearActive();
        var l = -docWidth * index;
        wrap.style.left = l + 'px';
        button[index].className = 'btn active';
    }

    var goNext = function() {
        if (index < 4) {
            index++;
        } else {
            index = 0;
        }
        goIndex();
    }

    for (var i = 0; i < points.length; i++) {
        points[i].addEventListener('click', function() {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
        })
    }
    setInterval(function() {
        time++;
        if (time == 50) {
            goNext();
            time = 0;
        }
    }, 75)

    var clearActiver = function() {
        for (var i = 0; i < itemss.length; i++) {
            itemss[i].className = 'item-2';
        }
        for (var i = 0; i < listss.length; i++) {
            listss[i].className = 'list-style';
        }
    }
    var goIndexs = function() {
        clearActiver();
        itemss[indexs].className = 'item-2 active';
        var m = -40 * indexs;
        pointss.style.bottom = m + 'px';
        listss[indexs].className = 'list-style active';
    }
    for (var i = 0; i < itemss.length; i++) {
        itemss[i].addEventListener('click', function() {
            var itemIndex = this.getAttribute('data-indexs');
            indexs = itemIndex;
            goIndexs();
        })
    }
    var zhanshi = function() {
        yincang.style.zIndex = '10000000';
        yincang.style.opacity = '1';
    }
    var clear = function() {
        yincang.style.opacity = '0';
        yincang.style.zIndex = '-10';

    }
    guding.onmouseover = function() {
        zhanshi();
        imgop.style.filter = 'grayscale(100%)';
    }
    guding.onmouseout = function() {
        clear();
        imgop.style.filter = 'grayscale(0%)';
    }
    dianerji.onmouseover = function() {
        dianerji.style.color = 'rgb(11, 136, 252)';
        imgg.style.filter = 'grayscale(0%)';
        imggg.style.filter = 'grayscale(0%)';
    }
    dianerji.onmouseout = function() {
        dianerji.style.color = 'white';
        imgg.style.filter = 'grayscale(100%)';
        imggg.style.filter = 'grayscale(100%)';
    }
    dianerjii.onmouseover = function() {
        dianerjii.style.color = 'rgb(11, 136, 252)';
        imgg1.style.filter = 'grayscale(0%)';
        imggg1.style.filter = 'grayscale(0%)';
    }
    dianerjii.onmouseout = function() {
        dianerjii.style.color = 'white';
        imgg1.style.filter = 'grayscale(100%)';
        imggg1.style.filter = 'grayscale(100%)';
    }
    changemargin();

    function changemargin() {
        if (docWidth < x) {
            h62.addEventListener('click', function() {
                if (displayfirst.style.display == "block") {
                    displayfirst.style.display = "none";
                } else {
                    displayfirst.style.display = "block";
                }
            })
        }
    }
    changemargi();

    function changemargi() {
        if (docWidth < x) {
            h63.addEventListener('click', function() {
                if (displaysecond.style.display == "block") {
                    displaysecond.style.display = "none";
                } else {
                    displaysecond.style.display = "block";
                }
            })
        }
    }
    changemarg();

    function changemarg() {
        if (docWidth < x) {
            h64.addEventListener('click', function() {
                if (displaythird.style.display == "block") {
                    displaythird.style.display = "none";
                } else {
                    displaythird.style.display = "block";
                }
            })
        }
    }
    changemar();

    function changemar() {
        if (docWidth < x) {
            h65.addEventListener('click', function() {
                if (displayfourth.style.display == "block") {
                    displayfourth.style.display = "none";
                } else {
                    displayfourth.style.display = "block";
                }
            })
        }
    }

    changestyle();

    function changestyle() {
        document.getElementById('begin').addEventListener('click', function() {
            document.getElementById('secondcontainer').style.display = 'block';
            document.getElementById('begin').style.zIndex = -100;
            document.getElementById('down').style.zIndex = 100;
        })
    }
    changestylee();

    function changestylee() {
        document.getElementById('down').addEventListener('click', function() {
            document.getElementById('secondcontainer').style.display = 'none';
            document.getElementById('begin').style.zIndex = 100;
            document.getElementById('down').style.zIndex = -100;
        })
    }
}

function display() {
    if (document.getElementById("search").style.width == "250px") {
        document.getElementById("search").style.width = "0px";
    } else {
        document.getElementById("search").style.width = "250px";
    }
}


function zhanshi() {
    document.getElementById("container-5").style.height = "5760px";
    document.getElementById("xialabiao").style.height = "0px";
    document.getElementById("xiala").style.height = "0px";
}

function displayli() {
    document.getElementById('display').style.width = "100px";
    document.getElementById('display').style.height = "42px";
    document.getElementById('display').style.zIndex = "10";
    document.getElementById('dianerjii').style.zIndex = "10";
    document.getElementById('dianerji').style.zIndex = "-10";
}

function displaylii() {
    document.getElementById('display').style.width = "0px";
    document.getElementById('display').style.height = "0px";
    document.getElementById('display').style.zIndex = "-10";
    document.getElementById('dianerjii').style.zIndex = "-10";
    document.getElementById('dianerji').style.zIndex = "10";
}

function block() {
    if (document.getElementById("dropdown-container").style.display == "block") {
        document.getElementById("dropdown-container").style.display = "none";
    } else {
        document.getElementById("dropdown-container").style.display = "block";
    }
}

function blocktwo() {
    if (document.getElementById("dropdown-content").style.display == "block") {
        document.getElementById("dropdown-content").style.display = "none";
    } else {
        document.getElementById("dropdown-content").style.display = "block";
    }
}

function blockthree() {
    if (document.getElementById("dropdown-container2").style.display == "block") {
        document.getElementById("dropdown-container2").style.display = "none";
    } else {
        document.getElementById("dropdown-container2").style.display = "block";
    }
}

function blockfour() {
    if (document.getElementById("dropdown-content2").style.display == "block") {
        document.getElementById("dropdown-content2").style.display = "none";
    } else {
        document.getElementById("dropdown-content2").style.display = "block";
    }
}

function blockfive() {
    if (document.getElementById("dropdown-container3").style.display == "block") {
        document.getElementById("dropdown-container3").style.display = "none";
    } else {
        document.getElementById("dropdown-container3").style.display = "block";
    }
}