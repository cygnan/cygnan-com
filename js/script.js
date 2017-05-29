$(document).ready(function () {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered.
    $(".modal").modal();
})

$(document).ready(function () {
    // 描画速度 [frame/s]
    const FPS = 5;

    // FPS（描画速度）から計算されるインターバル（周期） [ms]
    const INTERVAL = 1000 / FPS;

    // map関数用の配列
    const E = [
        "posgithub",
        "postwitter",
        "poskeybase",
        "possoundcloud",
        "posemail"
    ];

    // 角速度 [rad/s]
    const W = 2 * Math.PI * (2 / 180);

    const CENTER_X = 30 / 2 - 18 / 2;
    const CENTER_Y = 30 / 2 - 18 / 2;
    const RADIUS = 30;

    // 初期位相 [rad]
    const PH = {
        "posgithub": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 0,
        "postwitter": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 1,
        "poskeybase": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 2,
        "possoundcloud": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 3,
        "posemail": Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 4
    }

    let t = 0;


    setInterval(function () {
        if (t <= 0.2) {
            E.map(
                e => $('#' + e).css(
                    { opacity: 1 }
                )
            )
        }

        E.map(function (e) {
            let x = Math.floor(Math.cos(W * t + PH[e]) * 1000) / 1000 * RADIUS + CENTER_X;
            let y = Math.floor(Math.sin(W * t + PH[e]) * 1000) / 1000 * RADIUS * (-1) + CENTER_Y;

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