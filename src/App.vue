<template>
  <div id="app" class="container-fluid">
    <!-- <div class="spinner-border text-primary" v-show="!flag"></div> -->
    <TheHeader v-show="flag"/>
    <TheHome v-show="flag"/>
    <TheFooter v-show="flag"/>
  </div>
</template>

<script>
import TheHeader from './components/basic/TheHeader'
import TheHome from './components/TheHome'
import TheFooter from './components/basic/TheFooter'
// const TheHeader = () => import('./components/basic/TheHeader')
// const TheHome = () => import('./components/TheHome')
// const TheFooter = () => import('./components/basic/TheFooter')

export default {
  name: 'app',
  data() {
    return {
      flag: false,
    }
  },
  mounted () {
    let vm = this;
    window.addEventListener("load", function() {
      vm.flag = true;
      vm.$nextTick()
      .then(function () {
        setTimeout(function() {
          
          document.getElementById('school_logo').style.top = "0px"
        }, 1);
      })
    });
  },
  created () {
  },
  components: {
    TheHeader,
    TheHome,
    TheFooter,
  },
}
</script>

<style>


@media (min-width: 1377px)
{
  .container-fluid {
    max-width: 1360px;
    padding: 0;
  }
}

.video-container {
    width: 100%;
    height: 100%;
}
    
.video-container iframe,
.video-container object,
.video-container embed {    
    width: 100%;
    height: 100%;
}
.v--modal-top-right {
  font-size: 70px;
  right: 30px !important;
  
}
.v--modal-top-right span {
  cursor: pointer;
}
.v--modal-top-right span:hover {
  color: #006400;
}
#app {
  font-family: 'Open Sans', sans-serif;
  background: #fff;
  color: #1D262D;
  padding: 0;
}
#slider1 .slide {
  position: relative;
}
#slider1 .slide h1 {
  position: absolute;
  top: 120px;
  left: 70px;
  font-family: 'PT Serif', serif;
  font-size: 48px;
  line-height: 64px;
  color: #F7F7F7;
}
#slider1 ol {
  right: 1% !important;
  top: 30% !important;
  bottom: auto;
  flex-direction: column;
  left: auto;
  transform: translate(0,-50%);
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1;
}
#slider1 ol li {
  margin-bottom: 5px !important;
  height: .75rem;
  width: 1.5rem;
  cursor: pointer;
  margin: .125rem;
  opacity: .5;
  position: relative;
  transition: opacity .15s;
}
#slider1 ol li.carousel__indicator--active {
  opacity: 1;
}
#our_pupils .sub_content {
  padding: 0px 80px 0px 133px;
}
#our_pupils .pupil_image {
  display: inline-block;
  border: 2px solid #006400;
  padding: 10px;
  border-radius: 50%;
  margin-bottom: 25px;
}
#our_pupils .name_old, #our_pupils .vallage {
  margin-left: 50px;
}
#our_pupils .name_old {
  margin-bottom: 17px;
}
#our_pupils .name_old p{
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 5px;
  font-weight: bold;
}
#our_pupils .vallage p {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #729182;
  margin: 0;
}
#our_pupils .message p {
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: justify;
}
#our_pupils .message {
  margin-bottom: 60px;
}
#our_pupils .big_number p{
  font-weight: bold;
  font-size: 160px;
  line-height: 195px;
  color: #E6E6E6;
}
#our_pupils .big_number p sup {
  font-size: 36px;
  top: -2.5em;
}
#our_pupils button[data-slide=prev], #our_pupils button[data-slide=next] {
  background-color: #fff;
  border: 1px solid #C1C1C1;
  width: 4.5rem;
  height: 4.5rem;
  top: 60%;
}
#our_pupils button[data-slide=prev]::before, #our_pupils button[data-slide=next]::before{
  display: none;
}

#our_pupils button[data-slide=prev] {
  background: url(./assets/left-arrow.png) no-repeat center center;
  right: 16rem;
  left: unset;
}
#our_pupils button[data-slide=next] {
  right: 10rem;
  background: url(./assets/right-arrow.png) no-repeat center center;
}
#about_fund p {
  width: 760px;
  margin: auto;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #F7F7F7;
}
#about_fund button[data-slide=prev], #about_fund button[data-slide=next] {
  background-color: transparent;
  width: 4rem;
  height: 4rem;
  top: 78%;
}
#about_fund button[data-slide=prev]::before, #about_fund button[data-slide=next]::before{
  display: none;
}
#about_fund button[data-slide=prev] {
  background: url(./assets/left-fund-arrow.png) no-repeat center center;  
  left: 3rem;
}
#about_fund button[data-slide=next] {
  right: 3rem;
  background: url(./assets/right-fund-arrow.png) no-repeat center center;
}

.ymap_size {
  width: 100%;
  height: 350px;
}


/* ------------------ Resoponsive -------------------- */

@media (max-width: 1230px) {
  #slider1 .slide h1 {
    font-size: 40px;
    top: 100px;
    line-height: 50px;
  }
  /* ----------------------- */

  #our_pupils .sub_content {
    padding: 0 80px;
  }
}
@media (max-width: 1120px) {
  #slider1 .slide h1 {
    font-size: 30px;
    top: 80px;
    line-height: 40px;
  }
  /* -------------------------- */
  #our_pupils .sub_content {
    padding: 0 40px;
  }
  #our_pupils .name_old, #our_pupils .vallage {
    margin-left: 0;
  }
  #our_pupils .name_old p {
    font-size: 20px;
    line-height: 20px;
  }
  #our_pupils .message {
    margin-bottom: 20px;
  }
  #our_pupils .big_number p {
    font-size: 130px;
    line-height: 150px;
  }
  /* ---------------------------- */
  #about_fund p {
    width: 650px;
    font-size: 20px;    
  }
}
@media (max-width: 1000px) {
  #our_pupils .sub_content {
    padding: 0 0px;
  }
  #our_pupils .name_old, #our_pupils .vallage {
    margin-left: 0;
  }
  #our_pupils .message {
    margin-bottom: 20px;
  }
  #our_pupils .big_number p {
    font-size: 110px;
    line-height: 100px;
  }
  #our_pupils .big_number p sup {
    font-size: 30px;
    top: -2em;
  }
  #our_pupils button[data-slide=prev], #our_pupils button[data-slide=next] {
    width: 3.5rem;
    height: 3.5rem;
    top: unset !important;
    bottom: 20px;
  }
  #our_pupils button[data-slide=prev] {
    background: url(./assets/left-arrow.png) no-repeat center center;
    right: 6rem;
    left: unset;
  }
  #our_pupils button[data-slide=next] {
    right: 0rem;
    background: url(./assets/right-arrow.png) no-repeat center center;
  }
}
@media (max-width: 850px) {
  #slider1 .slide h1 {
    font-size: 20px;
    top: 70px;
    line-height: 30px;
  }
  /* ------------------------ */
  #our_pupils .message {
    margin-bottom: 15px;
  }
  #our_pupils .message p {
    font-size: 16px;
  }
  /* ------------------------- */
  #about_fund p {
    width: 500px;
    font-size: 16px;
    line-height: 24px;
  }
  #about_fund button[data-slide=prev], #about_fund button[data-slide=next] {
    width: 2rem;
    height: 2rem;
    background-size: contain;
  }
  #about_fund button[data-slide=prev] {
    left: 1rem;
  }
  #about_fund button[data-slide=next] {
    right: 1rem;
  }
  .ymap_size {
    width: 100%;
    height: 300px;
  }
}
@media (max-width: 768px) {
  #our_pupils .pupil_image {
    float: left;
    margin-bottom: 0;
  }
  #our_pupils .pupil_info {
    float: right;
    margin-top: 20px;
  }
  #our_pupils .message {
    margin-top: 15px;
  }
}
@media (max-width: 660px) {
  #slider1 .slide h1 {
    font-size: 18px;
    top: 50px;
    line-height: 25px;
    left: 35px;
  }
  #slider1 ol li {
    margin: 0 !important;
  }
  #slider1 ol li::before {
    width: .4rem;
    height: .4rem;    
  }
  /* ------------------------- */
  #about_fund p {
    width: 350px;
    font-size: 14px;
    line-height: 20px;
  }
  #about_fund button[data-slide=prev] {
    left: 1rem;
  }
  #about_fund button[data-slide=next] {
    right: 1rem;
  }
}
@media (max-width: 500px) {
  #slider1 .slide h1 {
    font-size: 16px;
    top: 40px;
    line-height: 20px;
    left: 25px;
  }
  #slider1 ol {
    top: 50% !important;
  }
  /* ------------------------ */
  
  #our_pupils .sub_content > .col-md-4 {
    text-align: center;
  }
  #our_pupils .pupil_image {float:unset;}
  #our_pupils .pupil_image {
    padding: 5px;
    margin-bottom: 15px;
  }
  #our_pupils .pupil_image img {
    width: 130px;
  }
  #our_pupils .pupil_info {
    margin-top: 5px;
    float: unset;
  }
  #our_pupils .name_old {
    margin-bottom: 10px;
  }
  #our_pupils .name_old p {
    font-size: 16px;
    line-height: 16px;
  }
  #our_pupils .vallage p {
    line-height: 18px;
  }
  #our_pupils .message p {
    line-height: 20px;
  }
  #our_pupils .big_number p {
    display: none;
  }
  #our_pupils button[data-slide=prev], #our_pupils button[data-slide=next] {
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: unset !important;
    bottom: -50px;
  }
  #our_pupils button[data-slide=prev] {
    left: 20%;
  }
  #our_pupils button[data-slide=next] {
    right: 20%;
  }
/* ------------------------------- */
  #about_fund p {
    width: 250px;
    font-size: 14px;
    line-height: 16px;
  }
  #about_fund button {display: none;}
  #about_fund p{line-height: 19px;}
}
@media (max-width: 370px) {
  /* #slider1 .slide h1 {
    font-size: 14px;
    top: 20px;
    line-height: 15px;
    left: 20px;
  } */
  /* ----------------------- */
  
  #our_pupils .pupil_info {
    /* float: left; */
  }
}
</style>
