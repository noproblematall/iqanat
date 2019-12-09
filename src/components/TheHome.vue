<template>
    <div>
      <section id="slider1" :style="{height: temp_height}">
        <!-- <img src="@/assets/top_image1.jpg" alt="Picture1" srcset=""> -->
        <carousel :data="data.basic_data" direction="right" indicator-type="disc" :interval="30000" :controls="false" :slideOnSwipe="false"></carousel>
        <!-- <div class="slider_back_container"> -->
        <img src="@/assets/slider1_back.png" alt="Flower" srcset="" class="slider1_back img-fluid">
        <!-- <img src="@/assets/flower.png" alt="" srcset="" class="flower"> -->
        <!-- </div> -->
      </section>

      <section id="school_instruction">
        <div class="instruction text-center">
          <h1 class="wow fadeInDown" id="intro_title">{{data.about_title}}</h1>
          <div class="content">
            <p v-html="data.about_content"></p>
          </div>
        </div>
      </section>

      <section id="video1">
        <div class="effect_container">
          <div class="effect_motion" :style="cssVar"></div>
          <!-- <img src="@/assets/Video1.jpg" alt="Video" srcset=""> -->
        </div>
        <img src="@/assets/play_button.png" alt="Play Button" width="120" srcset="">
        <div class="play_button" @click="modal_show('https://www.youtube.com/embed/Jfrjeg26Cwk')"></div>
      </section>

      <modal name="video_modal" @before-open="beforeOpen" @closed="video_close" width="80%" height="80%" :clickToClose="false">
        <div slot="top-right" id="video_close_button"> <span @click="modal_hide()"> X </span> </div>
        <div class="video-container embed-responsive  embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="url" id="video" allowfullscreen allowscriptaccess="always"
                allow="autoplay"></iframe>
        </div>
      </modal>

      <section id="intro">
        <h2>{{data.intro_title}}</h2> 
        <div class="content1">
          <p>{{data.intro_content}}</p>
        </div>
        <div class="content2">
          <h3>{{data.intro_small_title1}}</h3>
          <p>{{data.intro_small_content1}}</p>
        </div>
        <div class="content3">
          <p>{{data.intro_small_title2}}</p>
          <p>{{data.intro_small_content2}}</p>
        </div>
      </section>

      <section id="mission">
        <p v-html="data.mission"></p>
      </section>

      <section id="school_value">
        <h1 class="wow fadeInDown" id="school_value_title" data-wow-duration="1s" data-wow-delay="0.5s">{{data.value_title}}</h1>
        <div class="row the_block">
          <div class="col-md-4 the_number">
            <h2>01</h2>
          </div>
          <div class="col-md-8 sub_content">
            <h5>{{data.value_small_title1}}</h5>
            <p>{{data.value_small_content1}}</p>
          </div>
        </div>
        <div class="row the_block">
          <div class="col-md-4 the_number">
            <h2>02</h2>
          </div>
          <div class="col-md-8 sub_content">
            <h5>{{data.value_small_title2}}</h5>
            <p>{{data.value_small_content2}}</p>
          </div>
        </div>
        <div class="row the_block">
          <div class="col-md-4 the_number">
            <h2>03</h2>
          </div>
          <div class="col-md-8 sub_content">
            <h5>{{data.value_small_title3}}</h5>
            <p>{{data.value_small_content3}}</p>
          </div>
        </div>
        <div class="row the_block">
          <div class="col-md-4 the_number">
            <h2>04</h2>
          </div>
          <div class="col-md-8 sub_content">
            <h5>{{data.value_small_title4}}</h5>
            <p>{{data.value_small_content4}}</p>
          </div>
        </div>
        <div class="row the_block">
          <div class="col-md-4 the_number">
            <h2>05</h2>
          </div>
          <div class="col-md-8 sub_content">
            <h5>{{data.value_small_title5}}</h5>
            <p>{{data.value_small_content5}}</p>
          </div>
        </div>
      </section>

      <section id="our_pupils">
        <h1 class="wow fadeInDown" id="our_pupils_title" data-wow-duration="1s" data-wow-delay="0.5s">{{data.our_pupil_title}}</h1>
        <carousel :data="data.second_data" :controls="true" :interval="30000" :slideOnSwipe="false"></carousel>        
      </section>

      <section id="calendar">
        <h1 class="wow fadeInDown" id="calendar_title" data-wow-duration="1s" data-wow-delay="0.5s">{{data.calandar_title}}</h1>
        <div class="row sub_content">
          <img src="@/assets/calendar_ornament.png" alt="" width="45" height="45" srcset="">
          <div class="col-12 col-sm-6 left_content">
            <div class="block block_content1">
              <h4>01.09</h4>
              <p>{{data.calandar_content1}}</p>
            </div>
            <div class="block block_content2">
              <h4>26.12 - 24.01</h4>
              <p>{{data.calandar_content2}}</p>
            </div>
            <div class="block block_content3">
              <h4>20.03 - 24.01</h4>
              <p>{{data.calandar_content3}}</p>
            </div>
            <div class="block block_content4">
              <h4>26.05 - 25.08</h4>
              <p>{{data.calandar_content4}}</p>
            </div>
          </div>
          <div class="col-12 col-sm-6 right_content">
            <div class="block block_content5">
              <h4>01.09</h4>
              <p>{{data.calandar_content5}}</p>
            </div>
            <div class="block block_content6">
              <h4>26.12 - 24.01</h4>
              <p>{{data.calandar_content6}}</p>
            </div>
            <div class="block block_content7">
              <h4>20.03 - 24.01</h4>
              <p>{{data.calandar_content7}}</p>
            </div>
            <div class="block block_content8">
              <h4>26.05 - 25.08</h4>
              <p>{{data.calandar_content8}}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about_fund">
        <div class="text-center">
          <carousel :data="data.third_data" :controls="true" :indicators="false" :interval="9000000" :slideOnSwipe="false"></carousel>
          <a href="#" class="btn btn-primary">{{data.fund_button}}</a>
        </div>
      </section>

      <section id="proceed" class="wow fadeInUp" data-wow-delay="0.5s">
        <div class="content">
          <h1 v-html="data.proceed_title"></h1>
          <p>{{data.proceed_content}}</p>
          <div class="text-center"><a href="#" class="btn btn-primary">ПОДРОБНЕЕ</a></div>
        </div>
        <div class="clearfix"></div>
      </section>

      <section id="proceed_video" class="wow fadeInUp" data-wow-delay="0.5s">
        <div>
          <img class="video img-fluid" src="@/assets/proceed_video.jpg" alt="Video Picture" srcset="">
          <img src="@/assets/play_button.png" alt="Play Button" width="120" srcset="" class="play_button_img">
          <div class="play_button" @click="modal_show('https://www.youtube.com/embed/A-twOC3W558')"></div>
        </div>
      </section>

      <section id="information_arrive" class="wow fadeInUp" data-wow-delay="0.5s">
        <div class="content">
          <h1 v-html="data.arrive_title"></h1>
          <p>{{data.arrive_content}}</p>
        </div>
        <!-- <div class="clearfix"></div> -->
      </section>

      <section id="information_arrive_image">
        <div>
          <img class="image img-fluid wow fadeInUp" id="information_arrive_real_image" data-wow-delay="0.5s" src="@/assets/information.jpg" alt="Video Picture" srcset="">
        </div>
      </section>

      <section id="for_teacher" class="wow fadeInUp" data-wow-delay="0.5s">
        <div class="content">
          <h1 v-html="data.teacher_title"></h1>
          <p>{{data.teacher_content}}</p>
          <div class="text-center"><a href="#" class="btn btn-primary">{{data.teacher_button}}</a></div>
        </div>
        <div class="clearfix"></div>
      </section>

      <section id="for_teacher_video" class="wow fadeInUp" data-wow-delay="0.5s">
        <div>
          <!-- <img src="@/assets/play_button.png" alt="Play Button" srcset=""> -->
          <img class="video img-fluid" src="@/assets/proceed_video.jpg" alt="Video Picture" srcset="">
          <img src="@/assets/play_button.png" alt="Play Button" width="120" srcset="" class="play_button_img">
          <div class="play_button" @click="modal_show('https://www.youtube.com/embed/IP7uGKgJL8U')"></div>
        </div>
      </section>

    </div>
</template>

<script>
import { eventBus } from "../main";
// import basic_data from '@/data/basic_data.js';

  export default {
    data() {
      return {
        data:{},
        language: 'qa',
        // basic_data: basic_data,
        translateY: -100,
        url: '',
        temp_height: 'auto',
      }
    },
    methods: {
      lang_load() {
          return import(`@/data/data_${this.language}.js`);
      },
      modal_hide() {
        this.$modal.hide('video_modal');
      },
      modal_show(url) {
        this.$modal.show('video_modal',{ video_url: url });
      },
      beforeOpen(event) {
        this.url = event.params.video_url
      },
      video_close() {
        this.url = ''
      },
      set_y(win_width) {
        if(win_width > 1120){
          this.translateY = -130
        }
        else if(850 < win_width && win_width <= 1120){
          this.translateY = -120
        }else if(660 < win_width &&  win_width <= 850){
          this.translateY = -100
        }else if(500 < win_width && win_width <= 660){
          this.translateY = -85
        }else if(370 < win_width && win_width <= 500){
          this.translateY = -75
        }else if(win_width <= 370){
          this.translateY = -47
        }
      },
      get_height(width) {
        if(width >= 1360){
          return 647
        }else {
          return 647 * width / 1360
        }
      }
    },
    created () {
        let vm = this;
        let win_width = window.innerWidth
        vm.set_y(win_width)
        this.temp_height = this.get_height(win_width) + 'px'
        // console.log(this.temp_height)
        let lastScrollTop = 0;
        this.lang_load().then(res => {
            // console.log(res.default[0]);
            vm.data = res.default[1];
        })
        eventBus.$on('langWasChanged', (lang) => {
            this.data = lang.default[1];
        });
        eventBus.$on('menuWasClicked', () => {
          let win_width = window.innerWidth
          vm.set_y(win_width)
        })
        
        window.addEventListener("scroll", function(){
          let win_width = window.innerWidth
          let video1_pos = document.getElementById("video1").offsetTop;
          let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > lastScrollTop){
              if(win_width > 1000){
                if(Math.abs(window.pageYOffset - video1_pos) <= 500 ){
                  vm.translateY -= 3;
                  // console.log(vm.translateY);
                }
              }else {
                if(Math.abs(window.pageYOffset - video1_pos) <= 350 ){
                  vm.translateY -= 1;
                  // console.log(vm.translateY);
                }
              }
          } else {
            if(win_width > 1000){
              if(Math.abs(window.pageYOffset - video1_pos) <= 500 ){
                vm.translateY += 3;
                // console.log(vm.translateY);
              }
            }else {
              if(Math.abs(window.pageYOffset - video1_pos) <= 350 ){
                vm.translateY += 1;
                // console.log(vm.translateY);
              }
            }
          }
          lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);

        window.addEventListener("resize", function() {
          let win_width = window.innerWidth
          vm.set_y(win_width)
        });
    },
    mounted () {
      // let win_width = window.innerWidth;
      let vm = this
      this.$nextTick().then(function() {
        vm.temp_height = 'auto'
      })
    },
    computed: {
      cssVar() {
        return {
          '--translateY': this.translateY + 'px',
        }
      }
    },
  }
</script>

<style scoped>

#slider1 {
  position: relative;
  background-color: #D6E0DB;
}

#slider1 img {
  width: 100%;
}
#slider1 .slider1_back {
  position: absolute;
  left: 0;
  z-index: 5;
  bottom: 0;
}
#slider1 .flower {
  position: absolute;
  right: 0;
  bottom: 0;
}
#school_instruction {
  position: relative;
  margin-bottom: 120px;
}
#school_instruction div.content {
  padding-top: 50px;
  padding-left: 272px;
  padding-right: 188px;
}
#school_instruction .instruction h1 {
  position: absolute;
  top: -60px;
  left: calc(50% - 44px);
  z-index: 6;
  font-weight: 700;
  color: #006400;
  font-size: 42px;
  visibility: hidden;  
}
#school_instruction .instruction p b {
  font-weight: 700;
  color: #1D262D;
}
#school_instruction .instruction p {
  font-size: 20px;
  font-weight: 400;
  text-align: justify;
  line-height: 24px;
  color: #1D262D;
}

#video1 {
  position: relative;
  min-height: 700px;
  width: 100%;
  
}
#video1 div.effect_container {
  position: absolute;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
  overflow: hidden;
  
}
#video1 div.effect_motion {
  width: 100%;
  height: 160%;
  background: url(../assets/Video1.jpg) no-repeat center center;
  background-size: cover;
  background-attachment: scroll;
  /* --translateY: -129.774px; */
  transform: translateY(var(--translateY));
}
/* #video1 img:first-child {
  width: 100%;
} */
#video1 img {
  width: 120px;
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
  /* cursor: pointer; */
}
/* #video1 .img:hover + div.play_button {
  display: block;
} */

#video1 div.play_button {
  /* display: none; */
  position: absolute;
  top: calc(50% - 42px);
  left: calc(50% - 42px);
  cursor: pointer;
  width: 84px;
  height: 84px;
  background: #D6E0DB url(../assets/triangle.png) no-repeat center center;
  border-radius: 50%;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, .5);
  /* -webkit-animation: play_pulse 1.5s infinite; */
}
#video1 div.play_button:hover {
  -webkit-animation: play_pulse 1.2s infinite;
}
/* #video1 .effect_container:hover + div.play_button {
  -webkit-animation: play_pulse_strong .8s infinite;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, .9);
}
#video1 div.play_button:hover {
  -webkit-animation: none;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, 0.7);
} */
/* #for_teacher_video div.play_button:hover {
  -webkit-animation: none;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, 0.7);
}
#proceed_video div.play_button:hover {
  -webkit-animation: none;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, 0.7);
}
#proceed_video img:hover + div.play_button {
  -webkit-animation: play_pulse_strong .8s infinite;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, .9);
}
#for_teacher_video img:hover + div.play_button {
  -webkit-animation: play_pulse_strong .8s infinite;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, .9);
} */
@-webkit-keyframes play_pulse {
  0% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 70px rgba(214, 224, 219, 0);
  }
  100% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(214, 224, 219, 0);
  }
}
@-webkit-keyframes play_pulse_strong {
  0% {
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 70px rgba(214, 224, 219, 0);
  }
  100% {
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
    box-shadow: 0 0 0 0 rgba(214, 224, 219, 0);
  }
}
#intro {
  padding: 83px 256px 95px 212px;
  background-color: #F7F7F7;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
#intro h2 {
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: #006400;
  margin-bottom: 63px;  
}
#intro .content1, #intro .content2 {
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: justify;
}
#intro .content2 h3 {
  font-family: 'PT Serif', serif;
  color: #006400;
  font-style: italic;
  font-size: 24px;
  font-weight: 400;
}
#intro .content2 {
  margin-bottom: 63px;
}
#intro .content3 p {
  font-family: 'PT Serif', serif;
  font-size: 20px;
  line-height: 23px;
  font-style: italic;
  font-weight: 400;
}
#mission {
  padding: 93px 229px 101px 229px;
  background-color: #006400;
}
#mission p {
  font-weight: 300;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #F7F7F7;
}
/* #mission p b {font-weight: 600;} */
#school_value {padding: 94px 261px 95px 271px;}
#school_value {background: url(../assets/number_back.png) no-repeat left center;}
#school_value h1 {
  text-align: center;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #006400;
  margin-bottom: 93px;
  visibility: hidden;
}
#school_value .the_block {
  margin-bottom: 30px;
}
#school_value .the_block .sub_content h5{
  font-weight: 700;
  /* font-weight: bold; */
  font-size: 20px;
  line-height: 27px;
  text-align: justify;
}
#school_value .the_block .sub_content p{
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: justify;
}
#school_value .the_number h2 {
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  color: #EDEDED;
  text-align: center;
}
#our_pupils {
  padding: 66px;
  background: url(../assets/our_pup_back.jpg) left top no-repeat;
  background-size: contain;
}

#our_pupils h1 {
  text-align: center;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #006400;
  margin-bottom: 130px;
  visibility: hidden;
}
#calendar {
  background: url(../assets/calendar_back.png) no-repeat center center;
  padding: 80px 100px;
  height: 1330px;
  /* background-size: contain; */
}
#calendar h1 {
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #006400;
  text-align: center;
  visibility: hidden;
}
#calendar .sub_content {
  margin-top: 100px;
  position: relative;
}
#calendar .sub_content img {
  position: absolute;
  left: calc(50% - 22.5px);
  top: -5px;
}
#calendar .left_content {
  padding-right: 70px;
}
#calendar .right_content {
  padding-left: 70px;
}
#calendar .left_content .block{
  text-align: right;
}
#calendar .right_content .block{
  text-align: left;
}
#calendar .block h4{
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #006400;
}
#calendar .block p {
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
}
#calendar .block_content1 {
  margin-top: 130px;
}
#calendar .block_content2 {
  margin-top: 180px;
}
#calendar .block_content3 {
  margin-top: 163px;
}
#calendar .block_content4 {
  margin-top: 187px;
}
#calendar .block_content6 {
  margin-top: 187px;
}
#calendar .block_content7 {
  margin-top: 180px;
}
#calendar .block_content8 {
  margin-top: 180px;
}
#about_fund {
  width: 100%;
  height: 600px;
  background: url(../assets/about_fund.jpg);
  margin-bottom: 130px;
}
#about_fund div {
  padding-top: 100px;
}

#about_fund div a {
  font-weight: 700;
  margin-top: 75px;
  padding: 15px 20px;
  background-color: #006400;
  border: none;
  font-size: 20px;
}
#proceed {
  padding:0 105px;
  visibility: hidden;
}
#proceed .content {
  width: 800px;
  height: auto;
  float: right;
  padding: 83px 80px 75px 285px;
  background: url(../assets/proceed_back.png) no-repeat left center;
  box-shadow: 5px 5px 50px rgba(214, 224, 219, 0.32419);
  background-size: contain;
}
#proceed .content h1 {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #006400;
}
#proceed .content p {
  margin-bottom: 85px;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
}
#proceed .content a {
  font-weight: 700;
  padding: 15px 20px;
  background-color: #006400;
  border: none;
  margin-left: 85px;
}
#proceed_video {
  visibility: hidden;
}
#proceed_video div{
  position: relative;
  display: inline-block;
  top: -180px;
  left: 100px;

}
#proceed_video div.play_button {
  position: absolute;
  top: calc(50% - 42px);
  left: calc(50% - 42px);
  cursor: pointer;
  width: 84px;
  height: 84px;
  background: #D6E0DB url(../assets/triangle.png) no-repeat center center;
  border-radius: 50%;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, .5);
  /* -webkit-animation: play_pulse 1.3s infinite; */
}
#proceed_video div.play_button:hover {
  -webkit-animation: play_pulse 1.2s infinite;
}
#proceed_video img.play_button_img {
  position: absolute;
  left: calc(50% - 60px);
  top: calc(50% - 60px);
  cursor: pointer;
}

#information_arrive {
  margin-top: -100px;
  padding:0 105px;
  visibility: hidden;
}
#information_arrive .content {
  width: 800px;
  height: auto;
  /* float: left; */
  padding: 83px 285px 75px 80px;
  background: url(../assets/information_back.png) no-repeat right top;
  box-shadow: 5px 5px 50px rgba(214, 224, 219, 0.32419);
}
#information_arrive .content h1 {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #006400;
}
#information_arrive .content p {
  margin-bottom: 85px;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
}

#information_arrive_image div {
  position: relative;
  top: -285px;
  /* right: 0px; */
}
#information_arrive_image img {
  position: absolute;
  right: 100px;
  visibility: hidden;
}

#for_teacher {
  padding:0 105px;
  margin-top: 235px;
  visibility: hidden;
}
#for_teacher .content {
  width: 800px;
  height: auto;
  float: right;
  padding: 83px 80px 75px 285px;
  background: url(../assets/proceed_back.png) no-repeat left center;
  box-shadow: 5px 5px 50px rgba(214, 224, 219, 0.32419);
  background-size: contain;
}
#for_teacher .content h1 {
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #006400;
}
#for_teacher .content p {
  margin-bottom: 85px;
  font-weight: normal;
  font-size: 22px;
  line-height: 27px;
}
#for_teacher .content a {
  font-weight: 700;
  padding: 15px 20px;
  background-color: #006400;
  border: none;
  margin-left: 85px;
}
#for_teacher_video {
  visibility: hidden;
}
#for_teacher_video div{
  position: relative;
  display: inline-block;
  top: -190px;
  left: 100px;
}
#for_teacher_video div.play_button {
  position: absolute;
  top: calc(50% - 42px);
  left: calc(50% - 42px);
  cursor: pointer;
  width: 84px;
  height: 84px;
  background: #D6E0DB url(../assets/triangle.png) no-repeat center center;
  border-radius: 50%;
  box-shadow: 0 0 20px 0 rgba(214, 224, 219, .5);
  /* -webkit-animation: play_pulse 1.5s infinite; */
}
#for_teacher_video div.play_button:hover {
  -webkit-animation: play_pulse 1.2s infinite;
}
#for_teacher_video img.play_button_img {
  position: absolute;
  left: calc(50% - 60px);
  top: calc(50% - 60px);
  cursor: pointer;
}

/* ---------------- Resoponsive --------------------- */
@media (max-width: 1340px) {
  #proceed {
    padding: 0 35px;
  }
  /* --------------------------- */
  #proceed_video div {
    left: 35px;
  }
  /* ------------------------- */
  #information_arrive {
    padding: 0 35px;
  }
  /* ---------------------------- */
  #information_arrive_image img {
    right: 35px;
  }
  /* --------------------------- */
  #for_teacher {
    padding: 0 35px;
  }
  /* --------------------------- */
  #for_teacher_video div {
    left: 35px;
  }
}

@media (max-width: 1230px) {
  #school_instruction {
    margin-bottom: 60px;
  }
  #school_instruction div.content {
    padding: 50px 130px;
  }
/* ---------------------- */
  #intro {
    padding: 80px 150px;
  }
  /* --------------------- */
  #mission {
    padding: 90px 150px;
  }
  /* ------------------------ */
  #school_value {padding: 90px 100px;}

  /* -------------------------- */
  #our_pupils {
    padding: 50px;
  }
  #our_pupils h1 {
    margin-bottom: 100px;
  }
  /* ---------------------------- */
  #proceed .content {
    width: 650px;
    padding: 70px 60px 60px 250px;
  }
  #proceed .content p {
    font-size: 20px;
  }
  /* ------------------------------ */
  #information_arrive .content {
    width: 650px;
    padding: 70px 250px 60px 60px;
  }
  #information_arrive .content p {
    font-size: 20px;
    margin-bottom: 30px;
  }
  /* ----------------------------- */
  #for_teacher .content {
    width: 650px;
    padding: 70px 60px 60px 250px;
  }
  #for_teacher .content p {
    font-size: 20px;
  }
}
@media (max-width: 1120px) {
  #school_instruction div.content {
    padding: 50px 100px;
  }
  #school_instruction .instruction h1 {
    position: static;
    font-size: 38px;
  }
  /* -------------------------- */
  #video1 {
    min-height: 600px;
  }
  /* ----------------------------- */
  #intro {
    padding: 80px 100px;
  }
  /* -------------------------------- */
  #mission {
    padding: 80px 120px;
  }
  /* ------------------------------- */
  #school_value {padding: 60px 80px;}
  #school_value h1 {font-size: 38px;margin-bottom: 80px;}
  /* -------------------------- */
  #our_pupils {
    padding: 40px;
  }
  #our_pupils h1 {
    font-size: 36px;
    margin-bottom: 50px;
  }
  /* ---------------------------- */
  #calendar {
    padding: 40px 20px;
    height: 1253px;
  }
  #calendar h1 {
    font-size: 36px;
  }
  /* ------------------------------ */
  #about_fund {
    height: 500px;
    margin-bottom: 90px;
  }
  #about_fund div {
    padding-top: 80px;
  }
  /* ---------------------------- */
  #proceed .content {
    width: 650px;
    padding: 50px 40px 50px 230px;
  }
  #proceed .content h1 {
    font-size: 38px;
    line-height: 45px;
  }

  /* --------------------------- */
  #proceed_video > div {
    width: 500px;
    top: -145px;
  }
  /* ------------------------------ */
  #information_arrive .content {
    width: 650px;
    padding: 50px 230px 50px 40px;
  }
  #information_arrive .content h1 {
    font-size: 38px;
    line-height: 45px;
  }
  /* -------------------------------- */
  #information_arrive_image img {
    width: 500px;
    top: 50px;
  }
  /* ----------------------------- */
  #for_teacher .content {
    width: 650px;
    padding: 50px 40px 50px 230px;
  }
  #for_teacher .content h1 {
    font-size: 38px;
    line-height: 45px;
  }
  /* ------------------------------- */
  #for_teacher_video > div {
    width: 500px;
    top: -145px;
  }
}
@media (max-width: 990px) {
  #proceed {
    padding: 0 20px;
  }
  #proceed .content {
    width: 100%;
    padding: 50px 50px;
    background: none;
    float: unset;
  }
  #proceed .content h1 {
    font-size: 36px;
  }
  #proceed .content p {
    margin-bottom: 50px;
  }
  #proceed .content a {
    margin: 0;
  }
  /* ----------------------------- */
  #proceed_video {
    text-align: center;
  }
  #proceed_video div {
    position: unset;
    margin-top: 30px;
    box-shadow: 5px 5px 50px rgba(214, 224, 219, 0.32419);
  }
  #proceed_video img.play_button_img {
  position: absolute;
  left: calc(50% - 60px);
  top: calc(50% - 30px);
  cursor: pointer;
}
  /* -------------------------------- */
  #information_arrive {
    margin-top: 60px;
    padding: 0 20px;
  }
  #information_arrive .content {
    width: 100%;
    padding: 50px 50px;
    background: none;
  }
  #information_arrive .content h1 {
    font-size: 36px;
  }
  /* -------------------------- */
  #information_arrive_image div {
    position: unset;
    margin-top: 30px;
    text-align: center;
  }
  #information_arrive_image img {
    position: unset;
    
    box-shadow: 5px 5px 50px rgba(214, 224, 219, 0.32419);
  }
  /* ------------------------------------ */
  #for_teacher {
    margin-top: 30px;
    padding: 0 20px;
  }
  #for_teacher .content {
    width: 100%;
    padding: 50px 50px;
    background: none;
    float: unset;
  }
  #for_teacher .content h1 {
    font-size: 36px;
  }
  #for_teacher .content p {
    margin-bottom: 50px;
  }
  #for_teacher .content a {
    margin: 0;
  }
  /* ----------------------------- */
  #for_teacher_video {
    text-align: center;
    top: 0;    
  }
  #for_teacher_video div {
    position: unset;
    margin-top: 30px;
    box-shadow: 5px 5px 50px rgba(214, 224, 219, 0.32419);
  }
  #for_teacher_video img.play_button_img {
  position: absolute;
  left: calc(50% - 60px);
  top: calc(50% - 30px);
  cursor: pointer;
}
}
@media (max-width: 850px) {
  
  #school_instruction div.content {
    padding: 20px 60px;
  }
  #school_instruction .instruction h1 {
    font-size: 34px;
  }
  /* ------------------------- */
    #video1 {
      min-height: 500px;
    }
    /* --------------------------- */
  #intro {
    padding: 70px 50px;
  }
/* ------------------------------- */
  #mission {
    padding: 60px 90px;
  }
  #mission p {
    font-size: 24px;
  }
  /* ------------------------------- */
  #school_value {padding: 60px 60px;}
  #school_value h1 {font-size: 34px;margin-bottom: 60px;}
  #school_value .the_block {
    margin-bottom: 15px;
  }
  #school_value .the_block .sub_content p {
    font-size: 18px;
  }
/* -------------------------------- */
  #our_pupils h1 {
    font-size: 34px;
    margin-bottom: 40px;
  }
/* ----------------------------- */
  #calendar {
    padding: 40px 20px;
    height: 1150px;
  }
  #calendar h1 {
    font-size: 28px;
  }
  #calendar .sub_content {
    margin-top: 50px;
  }
  #calendar .left_content {
    padding-right: 35px;
  }
  #calendar .right_content {
    padding-left: 35px;
  }
  /* ------------------------------ */
  #about_fund {
    height: 400px;
    margin-bottom: 50px;
  }
  #about_fund div {
    padding-top: 60px;
  }
  #about_fund div a {
    margin-top: 50px;
    padding: 10px 15px;
    font-size: 16px;

  }
}
@media (max-width: 660px) {
  #school_instruction div.content {
    padding: 20px 20px;
  }
  #school_instruction .instruction h1 {
    font-size: 28px;
  }
  #school_instruction .instruction p {
    font-size: 18px;
  }
  /* ---------------------------- */
    #video1 {
      min-height: 350px;
    }
  /* ------------------------------ */
  #intro {
    padding: 50px 20px;
  }
  #intro h2 {
    margin-bottom: 40px;
  }
  #intro .content2 {
    margin-bottom: 40px;
  }
  #intro .content3 p {
    font-size: 18px;
  }
  /* -------------------------- */
  #mission {
    padding: 40px 50px;
  }
  #mission p {
    font-size: 20px;
    line-height: 30px;
  }
  /* -------------------------- */
  #school_value {padding: 60px 40px;}
  #school_value h1 {font-size: 34px;margin-bottom: 30px;}
  #school_value .the_block {
    margin-bottom: 10px;
  }
/* -------------------------------- */
  #our_pupils h1 {
    font-size: 28px;
    margin-bottom: 30px;
  }
/* ------------------------------- */
  #calendar {
    height: 1130px;
  }
  #calendar h1 {
    font-size: 26px;
    line-height: 30px;
  }
  #calendar .sub_content {
    margin-top: 30px;
  }
  #calendar .left_content {
    padding-right: 30px;
  }
  #calendar .right_content {
    padding-left: 30px;
  }
  #calendar .block h4 {
    font-size: 18px;
  }
  #calendar .block p {
    font-size: 16px;
  }
  /* ------------------------------ */
  #about_fund {
    height: 350px;
    margin-bottom: 50px;
  }
  #about_fund div {
    padding-top: 50px;
  }
  #about_fund div a {
    margin-top: 50px;
    padding: 5px 10px;
    font-size: 14px;

  }
}
@media (max-width: 578px) {
  #slider1 .slider1_back  {
    display: none;
  }
  /* ---------------------------------- */
  #school_instruction {
    margin-bottom: 30px;
  }
  #school_instruction .instruction h1 {
    font-size: 24px;
    margin-top: 30px;
  }
  #school_instruction .instruction p {
    font-size: 16px;
    line-height: 20px;
    /* text-align: left; */
  }

  /* ----------------------------- */
  #video1 {
    min-height: 300px;
  }
  #video1 img {
    width: 90px;
    top: calc(50% - 45px);
    left: calc(50% - 45px);
  }
  #video1 div.play_button {
    width: 60px;
    height: 60px;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
  }
  /* ------------------------------ */
  
  #intro h2 {
    margin-bottom: 30px;
    font-size: 16px;
  }
  #intro .content1, #intro .content2 {
    font-size: 16px;
    line-height: 20px;
  }
  #intro .content2 {
    margin-bottom: 30px;
  }
  #intro .content2 h3 {
    font-size: 18px;
    font-weight: bold;
  }
  #intro .content3 p {
    font-size: 14px;
    margin-bottom: 2px;
    
  }
  /* -------------------------- */
  #mission {
    padding: 30px 20px;
  }
  #mission p {
    font-size: 16px;
    line-height: 22px;
  }
/* -------------------------- */
  #school_value {padding: 50px 20px;background-image: none;}
  #school_value h1 {font-size: 24px;margin-bottom: 20px;}
  #school_value .the_block .sub_content h5 {
    font-size: 18px;
    text-align: center;
  }
  #school_value .the_block .sub_content p {text-align: center;}
  #school_value .the_number h2{
    font-size: 50px;
  }
  /* -------------------------- */
  #our_pupils {
    padding: 40px 20px;
  }
  #our_pupils h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  #our_pupils {background-image: none;background: linear-gradient(180.72deg, rgba(19,92,58,0.05) 6.89%, rgba(78,77,79,0.05) 103.89%); padding-bottom: 80px;}
  #our_pupils ol li {display: none;}
  /* ------------------------------ */
  #about_fund {
    height: 300px;
    margin-bottom: 50px;
  }
  #about_fund div {
    padding-top: 30px;
  }
  #about_fund div a {
    margin-top: 30px;
    padding: 10px 25px;
    font-size: 14px;

  }
/* ------------------------------------- */
  #proceed .content {
    padding: 0;
    box-shadow: unset;
  }
  #proceed .content h1 {
    font-size: 32px;
    line-height: 35px;
  }
  #proceed .content p {
    margin-bottom: 50px;
    font-size: 20px;
  }
  #proceed .content a {
    padding: 10px 15px;
    font-size: 18px;
  }
  /* ----------------------------- */
  #proceed_video img.play_button_img {
    width: 90px;
    left: calc(50% - 45px);
    top: calc(50% - 30px);
  }
  #proceed_video div.play_button {
    width: 60px;
    height: 60px;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    margin-top: 15px;
  }
  #proceed_video div {
    width: 100%;
    box-shadow: unset;
  }
  #for_teacher_video img.play_button_img {
    width: 90px;
    left: calc(50% - 45px);
    top: calc(50% - 30px);
  }
  #for_teacher_video div.play_button {
    width: 60px;
    height: 60px;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    margin-top: 15px;
  }
  /* -------------------------------- */
  #information_arrive {
    margin-top: 30px;
    padding: 0 20px;
  }
  #information_arrive .content {
    width: 100%;
    padding: 0;
    box-shadow: unset;
  }
  #information_arrive .content h1 {
    font-size: 24px;
    line-height: 35px;
  }
  /* -------------------------- */

  #information_arrive_image img {
    box-shadow:unset;
    width: 100%;
  }
  /* ------------------------------------ */
  #for_teacher {
    margin-top: 30px;
    padding: 0 20px;
  }
  #for_teacher .content {
    padding: 0;
    box-shadow: unset;
  }
  #for_teacher .content h1 {
    font-size: 24px;
    line-height: 35px;
  }

  /* ----------------------------- */
  
  #for_teacher_video div {
    box-shadow: unset;
    width: 100%;
  }
  /* ------------------------------ */
  #calendar {
    height: 1130px;
    background: url(../assets/calendar_back1.png) no-repeat left center;
  }
  #calendar img {display: none;}
  #calendar .block h4{font-size: 24px;}
  #calendar .block p{margin-bottom: 0; font-size: 20px;}
  #calendar .block_content1 {margin-top: 0px;}
  #calendar .block_content2 {margin-top: 65px;}
  #calendar .block_content3 {margin-top: 58px;}
  #calendar .block_content4 {margin-top: 62px;}
  #calendar .block_content5 {margin-top: 58px;}
  #calendar .block_content6 {margin-top: 42px;}
  #calendar .block_content7 {margin-top: 75px;}
  #calendar .block_content8 {margin-top: 50px;}
  #calendar h1 {
    font-size: 24px;
    line-height: 32px;
  }
  #calendar .sub_content {
    margin-top: 30px;
  }
  #calendar .left_content {
    padding-right: 0px;
    padding-left: 40px;
    text-align: left;
  }
  #calendar .right_content {
    padding-left: 40px;
    text-align: left;
  }
  #calendar .left_content .block{text-align: left;}
  

}
@media (max-width: 370px) {
  #video1 {
    min-height: 200px;
  }
  /* ------------------- */

}
</style>