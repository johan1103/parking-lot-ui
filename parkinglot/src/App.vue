<template>
  <div class="black_bg" v-if ="personal_menu == true">
    <div>
      <div class="sequence">
    
        <div class="seq-preloader">
          <svg width="39" height="16" viewBox="0 0 39 16" xmlns="http://www.w3.org/2000/svg" class="seq-preload-indicator"><g fill="#F96D38"><path class="seq-preload-circle seq-preload-circle-1" d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"/><path class="seq-preload-circle seq-preload-circle-2" d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"/><path class="seq-preload-circle seq-preload-circle-3" d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"/></g></svg>
        </div>
        
      </div>
      
          <div class="logo">
              <h1>Earth</h1>
              <h2>E</h2>
          </div>
          <nav>
            <ul>
              <li><a href="#1"><img src="assets/images/icon-1.png" alt=""> <em>Homepage</em></a></li>
              <li><a href="#2"><img src="assets/images/icon-2.png" alt=""> <em>About Us</em></a></li>
              <li><a href="#3"><img src="assets/images/icon-3.png" alt=""> <em>Our Gallery</em></a></li>
              <li><a href="#4"><img src="assets/images/icon-4.png" alt=""> <em>Contact Us</em></a></li>
              <li><a href="#5"><img src="assets/images/icon-4.png" alt=""> <em>Contact Us_2</em></a></li>
            </ul>
          </nav>
          <!-- 슬라이드 개인정보메뉴 -->
          
            <div class="VirtualView" id="VirtualView">
              <div class="hideMenuBody" id="hideMenuBodyId">
                <div>Menu 1</div>
                <div>Menu 2</div>
                <div>Menu 3</div>
                <div>Menu 4</div>
                <div>Menu 5</div>
                <div onclick="closeLeftMenu(); return false;">Close</div>
              </div>

              <div class="circleBt" id="circleBt" onclick="showLeftMenu(this); return false; personal_menu=true;">
                <div style="margin-top: 13px;"></div>
                <div></div>
                <div></div>
              </div>
            </div>
          <!--  ---------------------------->
          <div class="slides">
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
          </div>
        </div>
  </div>
</template>

<script>
import Slide1 from '@/components/Slide_1.vue';
import Slide2 from '@/components/Slide_2.vue';
import Slide3 from '@/components/Slide_3.vue';
import Slide4 from '@/components/Slide_4.vue';
import Slide5 from '@/components/Slide_5.vue';

export default {
  name: 'App',
  data(){
    return{
      personal_menu : true,
    }
  },
  methods :{
  },
  components: {
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.black_bg{
  width: 100%;
  height: 100%;
  background:cornflowerblue;
  position: fixed;
  z-index: 99989;
}
</style>