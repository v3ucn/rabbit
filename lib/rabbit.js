(function (name, context, fn) {
    if (typeof module != 'undefined' && module.exports) {
        // Node 环境
        module.exports = fn();
    } else if (typeof context['define'] == 'function' && (context['define']['amd'] || context['define']['cmd'])) {
        // Require.js 或 Sea.js 环境
        define(fn);
    } else {
        // client 环境
        context[name] = fn();
    }
})('rabbit_init', this, function () {
    return function (color=null,pos=null) {
        

        var container = document.getElementById("rabbit_box");

    container.innerHTML = '<div class="rabbit"><div class="rabbit__leg rabbit__leg--one"></div><div class="rabbit__leg rabbit__leg--two"></div><div class="rabbit__tail"></div><div class="rabbit__body"></div><div class="rabbit__leg rabbit__leg--three"></div><div class="rabbit__leg rabbit__leg--four"></div><div class="rabbit__ear rabbit__ear--right"></div><div class="rabbit__head"></div><div class="rabbit__ear rabbit__ear--left"></div></div>';

    if(color != null){

        document.documentElement.style.setProperty("--theme-color",color);

    }
    if(pos != null){

        document.documentElement.style.setProperty("--pos",pos);

    }


    }
});