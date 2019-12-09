<template>
    <header>
        <div class="desktop_header">
            <div class="nav_bar">
                <div class="logo"><a href="/" id="school_logo"><img src="@/assets/logo.png" width="120" alt="" srcset=""></a></div>
                <div class="menu_container">
                    <div class="lang_menu">
                        <ul>
                            <li @click="select('qa',1)" :class="{ lang_active : lang_active == 1 }">QAZ</li>
                            <li @click="select('en',2)" :class="{ lang_active : lang_active == 2 }">ENG</li>
                            <li @click="select('cy',3)" :class="{ lang_active : lang_active == 3 }">КАЗ</li>
                            <li @click="select('ru',4)" :class="{ lang_active : lang_active == 4 }">РУС</li>
                        </ul>
                    </div>
                    <div class="menu">
                        <ul>
                            <li v-for="item in data.header_menu" :key="item.id"><a @click="activate(item.id)" :class="{ active : active_el == item.id }" :href="item.hash">{{item.menu}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="nav_bar_fixed" :style="fixed_display">
                <div class="logo"><a href="/" ><img src="@/assets/logo.png" width="60" alt="" srcset=""></a></div>
                <div class="fixed_menu">
                    <ul>
                        <li v-for="item in data.header_menu" :key="item.id"><a @click="activate(item.id)" :class="{ fixed_active : active_el == item.id }" :href="item.hash">{{item.menu}}</a></li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
        <div class="mobile_header">
            <div class="mobile_nav">
                <div class="logo"><a href="/" ><img src="@/assets/logo.png" width="60" alt="" srcset=""></a></div>
                <div class="menu_icon" @click="toggle_bar()" id="menu_icon">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="sub_menu" id="sub_menu">
                <ul>
                    <li v-for="item in data.header_menu" :key="item.id"><a @click="activate(item.id)" :class="{ fixed_active : active_el == item.id }" :href="item.hash">{{item.menu}}</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { eventBus } from "../../main";
    export default {
        data() {
            return {
                active_el: 1,
                language: 'qa',
                data: {},
                lang_active: 1,
                visibility: 'hidden',
                transform: 'translateY(-100%)',
                flag: false,
            }
        },
        methods: {
            activate(num) {
                this.active_el = num;
                eventBus.clickMenu();
                this.flag = false;
                document.getElementById('menu_icon').classList.remove("change")
            },
            select(lang, num) {
                this.language = lang;
                this.lang_active = num;
            },
            lang_load() {
                return import(`@/data/data_${this.language}.js`);
            },
            toggle_bar() {
                document.getElementById('menu_icon').classList.toggle("change")
                this.flag = !this.flag                
            }
        },
        watch: {
            language() {
                let vm = this;
                this.lang_load().then(res => {
                    // console.log(res.default[0]);
                    vm.data = res.default[0];
                    eventBus.changeLanguage(res);
                })
            },
            flag() {
                if(this.flag){
                    document.getElementById('sub_menu').style.visibility = 'visible';
                }else{
                    document.getElementById('sub_menu').style.visibility = 'hidden';
                }
            }
        },
        computed: {
            fixed_display() {
                return {
                    'visibility': this.visibility,
                    'transform': this.transform,
                }
            },
            
        },
        mounted () {
            // window.addEventListener('load', () => {
            //     // run after everything is in-place
            //     document.getElementById('school_logo').style.top = "0px"
            // })
        },
        created () {
            let vm = this;
            this.lang_load().then(res => {
                // console.log(res.default[0]);
                vm.data = res.default[0];
            })

            window.addEventListener("scroll", function(){
                if(window.pageYOffset > 350){
                    vm.visibility = 'visible'
                    vm.transform = 'translateY(0px)'
                }else{
                    vm.visibility = 'hidden'
                    vm.transform = 'translateY(-100%)'
                }
            })
        },
    }
</script>

<style scoped>

/* ----------------- Desktop header --------------------- */
header {
    background-color: #F7F7F7;
    /* position: relative; */
}
ul {
    padding: 0;
    margin: 0;
}
.nav_bar {
    /* display: none; */
    height: 120px;
    padding: 25px 44px;
    font-size: 18px;
}
.nav_bar .logo {
    position: relative;
}
.nav_bar .logo a {
    position: absolute;
    z-index: 10;
    top: -200px;
    transition: top .8s linear;
}
.nav_bar .menu_container {
    float: right;
    text-align: right;
}
.lang_menu {
    margin-bottom: 10px;
}
.lang_active {
    color: #1D262D !important;
}
.lang_menu ul li {
    list-style-type: none;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    padding: 0 11px;
    cursor: pointer;
    color: #727D91;
}
.lang_menu ul li:last-child {
    padding-right: 0;
}
.menu ul li {
    list-style-type: none;
    display: inline-block;
    color: #729182 !important;
    padding: 0 30px;
    border-right: 1px solid #B3B0B0;
    cursor: pointer;
    font-weight: 700;
}
.menu ul li a {
    color: #729182 !important;
}
.menu ul li:last-child {
    padding-right: 0;
    border-right: none;
}
.menu ul li a:hover {
    color: #006400 !important;
    font-weight: 700;
    text-decoration: none !important;
}
.menu ul li a.active {
    color: #006400 !important;
    font-weight: 700;
}

.nav_bar_fixed {
    position: fixed;
    max-height: 100px;
    top: 0;
    left: calc((100% - 1360px)/2);
    width: 1360px;
    padding: 12px 28px 12px 75px;
    font-size: 18px;
    background: rgba(29, 38, 45, 0.85);
    z-index: 12;
    transition: all .3s linear;
}
.nav_bar_fixed .logo {
    float: left;
}
.nav_bar_fixed .logo a {
    font-weight: 700;
    line-height: 22px;
    color: #F7F7F7;
}
.nav_bar_fixed .logo a:hover {
    text-decoration: none;
}
.fixed_active {
    color: #fff !important;
}
.nav_bar_fixed .fixed_menu {
    float: right;
    text-align: right;
    margin-top: 23px;
}
.nav_bar_fixed .fixed_menu ul li {
    list-style-type: none;
    display: inline-block;
    color: #B3B0B0;
    padding: 0 30px;
    /* border-right: 1px solid #B3B0B0; */
    cursor: pointer;
    font-weight: 700;
}
.nav_bar_fixed .fixed_menu ul li a {
    color: #B3B0B0;
}
.nav_bar_fixed .fixed_menu ul li:last-child {
    padding-right: 0;
    border-right: none;
}
.nav_bar_fixed .fixed_menu ul li a:hover {
    color: #FFF !important;
    font-weight: 700;
    text-decoration: none !important;
}
.mobile_header {
    display: none;
}

@media (max-width: 1377px)
{
  .nav_bar_fixed {
      width: 100%;
      left: 0;
      padding: 12px 28px 12px 28px;
  }
}
@media (max-width: 1120px)
{
    .nav_bar {
        padding: 20px 35px;
        font-size: 16px;
    }
    .nav_bar .logo a img {
        width: 100px;
    }
    #school_logo {
        top: 20px !important;
    }
    .menu ul li {
        padding: 0 20px;
    }
    .nav_bar_fixed {
        width: 100%;
        left: 0;
        padding: 12px 28px 12px 28px;
        font-size: 16px;
    }
    .nav_bar_fixed .fixed_menu ul li {
        padding: 0 20px;
    }
}
/* ------------------------- Mobile header --------------------------- */
@media (max-width: 920px) {
    .desktop_header {
        display: none;
    }
    .mobile_header {
        display: block;        
    }
    .mobile_header .mobile_nav {
        position: relative;
        z-index: 12;
        height: 100px;
        padding: 15px 30px;
    }
    .mobile_header .logo a {
        position: absolute;
        /* float: left; */
        color: #006400;
        font-weight: 700;
    }
    /* .mobile_header .logo a img {
    } */
    .mobile_header .menu_icon {
        float: right;
        cursor: pointer;
        margin-top: 15px;
    }
    .bar1, .bar2, .bar3 {
        width: 35px;
        height: 5px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }
    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(-9px, 6px);
        transform: rotate(-45deg) translate(-9px, 6px);
    }
    .change .bar2 {opacity: 0;}
    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(-8px, -8px);
        transform: rotate(45deg) translate(-8px, -8px);
    }
    #sub_menu {
        position: absolute;
        top: 100px;
        z-index: 12;
        width: 100%;
        padding: 15px 30px;
        visibility: hidden;
        background: rgba(29, 38, 45, 0.95);
    }
    #sub_menu ul {
        list-style: none;
    }
    #sub_menu ul li {
        padding: 5px 0;
        cursor: pointer;        
    }
    #sub_menu ul li:hover a {
        color: #fff !important;
    }
    #sub_menu ul li a {
        color: #B3B0B0;
        display: block;
    }
    #sub_menu ul li a:hover {
        text-decoration: none;
    }
}

@media (max-width: 500px){
    .mobile_header .mobile_nav {
        height: 70px;
        padding: 5px 20px 5px 20px;
    }
    .mobile_header .logo a {
        top: 25px;
    }
    .bar1, .bar2, .bar3 {margin: 4px 0;background-color: #006400;}
    #sub_menu {top: 70px;}
}



</style>