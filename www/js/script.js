(() => {
    const URL = window.location.href.toString();

    if (URL.indexOf('cygnan.com') == -1 && URL.indexOf('localhost') == -1) {
        window.location.href = 'https://cygnan.com';
    }
})();

$(document).ready(() => {
    // the 'href' attribute of .modal-trigger must specify the modal ID that wants to be triggered.
    $('.modal').modal();
});

$(document).ready(() => {
    // 描画速度 [frame/s]
    const FPS = 5;

    // FPS（描画速度）から計算されるインターバル（周期） [ms]
    const INTERVAL = 1000 / FPS;

    // map関数用の配列
    const E = [
        'posgithub',
        'postwitter',
        'poskeybase',
        'posflickr',
        'posmastodon'
    ];

    // 角速度 [rad/s]
    const W = Math.floor(2 * Math.PI * (4 / 360) * 1000) / 1000;

    const CENTER_X = 15 / 2 - 9 / 2;
    const CENTER_Y = 15 / 2 - 9 / 2;
    const RADIUS = 15;

    // 初期位相 [rad]
    const PH = {
        'posgithub': Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 0,
        'postwitter': Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 1,
        'poskeybase': Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 2,
        'posflickr': Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 3,
        'posmastodon': Math.floor((2 * Math.PI / 5) * 1000) / 1000 * 4
    };

    let t = 0;

    // 2フレーム目でopacityを1にする
    const OPENING = setInterval(() => {
        if (t == INTERVAL / 1000) {
            E.map(e => {
                let idname = '#' + e; /* For IE11 */
                
                $(idname).css(
                    { opacity: 1 }
                );
            });

            $('#listbox').animate(
                { opacity: 1 }
            );

            clearInterval(OPENING);
        }
    }, INTERVAL);

    OPENING;

    setInterval(() => {
        E.map(e => {
            let x = Math.floor(Math.cos(W * t + PH[e]) * 1000) / 1000 * RADIUS + CENTER_X;

            let y = Math.floor(Math.sin(W * t + PH[e]) * 1000) / 1000 * RADIUS * (-1) + CENTER_Y;

            let idname = '#' + e; /* For IE11 */

            $(idname).css({
                left: x + 'rem',
                top: y + 'rem'
            });
        });

        // 次また、(INTERVAL / 1000)[s]（ INTERVAL[ms] ）後に実行されるので
        // (INTERVAL / 1000)[s]だけ t[s] に足しておく。
        t += INTERVAL / 1000;
    }, INTERVAL);
});

(function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-103150060-1', 'auto');
ga('set', 'forceSSL', true);
ga('send', 'pageview');
