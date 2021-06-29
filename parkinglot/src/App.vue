<template>
  <div>
    <h1>GOOGLE</h1>
    <div class="menu">
      <a v-for="freeee in menuList" :key="freeee">{{freeee}}</a>
    </div>
    <div class="black-bg" v-if="모달창열렸니 == true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지 내용</p>
      <button v-on:click="모달창열렸니 = false">창닫기</button>
      </div>
    </div>
    <div>
      <button v-on:click="모달창열렸니 = true">상세보기</button>
    </div>
    
      <h4 v-for="(whatever,i) in products" :key="i">
        <img src="https://picsum.photos/200/300" class="room-image">
        <h4>{{products[i]}}</h4>
        <div>40 </div>
        <button v-on:click="increase(i)" v-on:mouseover="print_massage()">허위매물신고</button> <span>신고수 : {{신고수[i]}}</span>
      </h4>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      menuList : ['Home', 'Shop', 'About'],
      products :['역삼동원롬','천호동원룸','마포구원룸'],
      신고수 : [0,0,0],
      모달창열렸니 : true,
    }
  },
  methods :{
    increase(i){
      this.신고수[i] +=1;
    },
    print_massage(){
     <div>안녕</div>
    }
  },
  components: {
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
  margin-top: 60px;
}
body{
  margin :0
}
div{
  box-sizing:border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20%;
  background-position: absolute;
}
.white-bg{
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.menu{
  background:violet;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding: 10px;
}
.room-image{
  width: 30%;
  margin-top: 40px;
}
</style>