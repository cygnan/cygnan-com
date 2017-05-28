$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered.
    $('.modal').modal();
})

$(document).ready(function () {
    // 描画速度 [frame/s]
    const FPS = 5;

    // 角速度 [rad/s]
    const W = 2 * Math.PI * (0.5 / 180);

    const CENTER_X = 30 / 2 - 18 / 2;
    const CENTER_Y = 30 / 2 - 18 / 2;
    const RADIUS = 30;

    // 初期位相 [rad]
    const PH = {
        "posgithub": (2 * Math.PI / 5) * 0,
        "postwitter": (2 * Math.PI / 5) * 1,
        "poskeybase": (2 * Math.PI / 5) * 2,
        "possoundcloud": (2 * Math.PI / 5) * 3,
        "posemail": (2 * Math.PI / 5) * 4
    }

    // map関数用の配列
    const E = [
        "posgithub",
        "postwitter",
        "poskeybase",
        "possoundcloud",
        "posemail"
    ];

    // FPS（描画速度）から計算されるインターバル（周期） [ms]
    const INTERVAL = 1000 / FPS

    let t = 0;

    setInterval(function () {
        E.map(function (e) {
            let x = Math.cos(W * t + PH[e]) * RADIUS + CENTER_X;
            let y = Math.sin(W * t + PH[e]) * RADIUS * (-1) + CENTER_Y;

            $('#' + e).css(
                {
                    left: x + "vmin",
                    top: y + "vmin"
                }
            )
        })

        // 次また、INTERVAL / 1000[s]（ INTERVAL[ms] ）後に実行されるので
        // INTERVAL[s]だけ t[s] に足しておく。
        t += INTERVAL / 1000;
    }, INTERVAL)
});

/*
var $point = $('#pos-github'),
    startPosition = 0, // 開始位置（角度）
    duration = 5000, // 1週の時間
    radiusX = 30,
    radiusY = 30,
    angle = 0,
    radian = 0,
    xPosition = 0,
    yPosition = 0

var start = function () {
    $point.animate(
        {
            count: 2
        },
        {
            duration: duration,
            easing: 'linear',
            step: function (now) {
                angle = now * 180;
                radian = ((angle + startPosition + 90) / 180) * Math.PI; // +90することで0度の基点を3時の角度に設定
                xPosition = radiusX + (radiusX * Math.sin(radian));
                yPosition = radiusY + (radiusY * Math.cos(radian)) * -1; // -1を乗算して時計回りにする

                $point.css({
                    left: xPosition,
                    top: yPosition
                });
            },
            complete: function () {
                start();
                this.count = 0;
            }
        }
    );
};

start();
*/
