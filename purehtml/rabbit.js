function rabbit_init(color=null,pos=null){

    var container = document.getElementById("rabbit_box");

    container.innerHTML = '<div class="rabbit"><div class="rabbit__leg rabbit__leg--one"></div><div class="rabbit__leg rabbit__leg--two"></div><div class="rabbit__tail"></div><div class="rabbit__body"></div><div class="rabbit__leg rabbit__leg--three"></div><div class="rabbit__leg rabbit__leg--four"></div><div class="rabbit__ear rabbit__ear--right"></div><div class="rabbit__head"></div><div class="rabbit__ear rabbit__ear--left"></div></div>';

    if(color != null){

        document.documentElement.style.setProperty("--theme-color",color);

    }
    if(pos != null){

        document.documentElement.style.setProperty("--pos",pos);

    }

}