<template>
    <footer id="footer">
        <div class="content_top">
            <div class="row">
                <div class="col-md-4 col-12">
                    <img src="@/assets/logo_footer.png" alt="Footer Logo" srcset="">
                </div>
                <div class="col-md-8 col-12 address">
                    <p>{{data.footer_address}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-12 footer_menu">
                    <ul>
                        <li v-for="item in data.footer_menu" :key="item.id"><a :href="item.hash">{{item.menu}}</a></li>
                    </ul>
                </div>
                <div class="col-md-8 col-12 social">
                    <div>
                        <b>{{data.footer_gmail_question}}</b>
                        <p v-html="data.footer_gmail_gmail"></p>
                    </div>
                    <div>
                        <b>{{data.footer_facebook_question}}</b>
                        <p v-html="data.footer_facebook_facebook"></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <img src="@/assets/map.png" alt="Map" srcset=""> -->
        <yandex-map :coords="coords" zoom="7" ymap-class="ymap_size" v-if="flag">
            <ymap-marker 
                :coords="coords" 
                marker-id="123" 
                hint-content="IQanat High School" 
                />
        </yandex-map>
        <div class="content_bottom">
            <div class="row">
                <div class="col-md-4 col-12 not_display"></div>
                <div class="col-md-4 col-12 copyright">
                    <p>{{data.footer_rest_copy}}</p>
                    <p>{{data.footer_rest_all_right}}</p>
                </div>
                <div class="col-md-4 col-12 text-right">
                    <p>{{data.footer_rest_designer}}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import { eventBus } from "../../main";
    export default {
        data() {
            return {
                language: 'qa',
                data: {},
                coords: [54, 39],
                flag: false,
            }
        },
        methods: {
            lang_load() {
                return import(`@/data/data_${this.language}.js`);
            }
        },
        mounted () {
            
        },
        created () {
            let vm = this;
            this.lang_load().then(res => {
                vm.data = res.default[2];
            })
            eventBus.$on('langWasChanged', (lang) => {
                this.data = lang.default[2];
            });
            window.addEventListener('scroll', function(){
                vm.flag = true;
            });
        },
    }
</script>

<style scoped>
    footer {
        background-color: #1D262D;
        margin-top: -100px;
        color: #F7F7F7;
    }
    footer div.content_top{
        padding: 32px 50px 45px;        
    }
    footer .address {
        margin-top: 30px;
        font-size: 18px;
        line-height: 22px;
    }
    footer .footer_menu {
        margin-top: 40px;
    }
    footer .footer_menu ul {
        list-style: none;
        padding-left: 77px;
    }
    footer .footer_menu ul a {
        font-size: 16px;
        color: #fff;
    }
    footer .footer_menu ul a:hover {
        text-decoration: none;
    }
    footer .social b, footer .social p {
        font-size: 18px;
    }
    footer .social {
        margin-top: 40px;
    }
    footer div.content_bottom {
        padding: 24px 40px 45px 40px;
    }
    footer div.content_bottom p {
        font-size: 14px;
        margin: 0;
    }
/* ---------------- Responsive ------------------ */
@media (max-width: 1060px) {
    footer .not_display {
        display: none;
    }
}
@media (max-width: 990px) {
    footer {
        margin-top: 30px;
    }
    footer div.content_top {
        padding: 20px;
    }
    footer .address {
        font-size: 16px;
    }
    
}
@media (max-width: 990px) {
    footer .footer_menu ul {
        padding: 0;
    }
    footer .footer_menu {
        margin-top: 10px;
    }
    footer .social {
        margin-top: 10px;
    }
    footer div.content_bottom {
        padding: 20px 20px;
    }
    footer div.content_bottom >div div:last-child p {
        text-align: left !important;
        margin-top: 10px;
    }
}

@media (max-width: 578px) {
    footer {margin-top: 0; text-align: center;}
    footer img {margin-top: 30px;}
    footer ul {display: none;}
    footer div.copyright {margin-bottom: 30px;}
    footer div.content_bottom > div div:last-child p {text-align: center !important;}
}
</style>