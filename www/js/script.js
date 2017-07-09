(function () {
    if (window.location.href.toString().indexOf('cygnan-com.appspot.com') != -1) {
        window.location.href = 'http://cygnan.com';
    }
})();

$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered.
    $(".modal").modal();
})

$(document).ready(function () {
    // 描画速度 [frame/s]
    var FPS = 5;

    // FPS（描画速度）から計算されるインターバル（周期） [ms]
    var INTERVAL = 1000 / FPS;

    // map関数用の配列
    var E = [
        "posgithub",
        "postwitter",
        "poskeybase",
        "possoundcloud",
        "posemail"
    ];

    // 角速度 [rad/s]
    var W = Math.floor(2 * Math.PI * (4 / 360) * 1000) / 1000;

    var CENTER_X = 15 / 2 - 9 / 2;
    var CENTER_Y = 15 / 2 - 9 / 2;
    var RADIUS = 15;

    // 初期位相 [rad]
    var PH = {
        "posgithub": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 0,
        "postwitter": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 1,
        "poskeybase": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 2,
        "possoundcloud": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 3,
        "posemail": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 4
    }

    var t = 0;

    // 2フレーム目でopacityを1にする
    var OPENING = setInterval(function () {
        if (t == INTERVAL / 1000) {
            E.map(function (e) {
                var idname = '#' + e; /* For IE11 */
                $(idname).css(
                    { opacity: 1 }
                )
            })
            $("#listbox").animate(
                { opacity: 1 }
            )
            clearInterval(OPENING);
        }
    }, INTERVAL);

    OPENING;

    setInterval(function () {
        E.map(function (e) {
            var x = Math.floor(Math.cos(W * t + PH[e]) * 1000) / 1000 * RADIUS + CENTER_X;
            var y = Math.floor(Math.sin(W * t + PH[e]) * 1000) / 1000 * RADIUS * (-1) + CENTER_Y;
            var idname = '#' + e; /* For IE11 */
            $(idname).css(
                {
                    left: x + "rem",
                    top: y + "rem"
                }
            )
        })

        // 次また、(INTERVAL / 1000)[s]（ INTERVAL[ms] ）後に実行されるので
        // (INTERVAL / 1000)[s]だけ t[s] に足しておく。
        t += INTERVAL / 1000;
    }, INTERVAL)
});
