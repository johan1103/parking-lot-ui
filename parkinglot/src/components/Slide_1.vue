<template>
            <div class="slide" id="1">
            <div id="slider-wrapper">
                <div id="image-slider">
                  <ul>
                    <li class="active-img">
                        <div class="my-form">
                          <table class="my-tableform">
                              <tr>
                                  <td class="my_tdform">1번차</td>
                                  <td class="my_tdform">2번차</td>
                                  <td class="my_tdform">3번차</td>
                                  <td class="my_tdform">4번차</td>
                              </tr>
                          </table>
                        </div>
                        <div class="my-form_2">
                          <table class="my-tableform">
                              <tr>
                                  <td class="my_tdform">5번차</td>
                                  <td class="my_tdform">6번차</td>
                                  <td class="my_tdform">7번차</td>
                                  <td class="my_tdform">8번차</td>
                              </tr>
                          </table>
                        </div>
                      <div class="slide-caption">
                        <h6>New Arrival</h6>
                        <h2>Beautiful<br>Earth</h2>
                      </div>
                    </li>
                    <li>
                      <div class="slide-caption">
                        <h6>Latest One</h6>
                        <h2>Tech<br>Meeting</h2>
                      </div>
                    </li>
                    <li>
                      <div class="slide-caption">
                        <h6>Your Update</h6>
                        <h2>Smart<br>Devices</h2>
                      </div>
                    </li>                      
                  </ul>
                </div>
                <div id="thumbnail">
                  <ul>
                    <li class="active"><img src="assets/images/thumb-01.jpg" alt="Earth" /></li>
                    <li><img src="assets/images/thumb-02.jpg" alt="Meeting" /></li>
                    <li><img src="assets/images/thumb-03.jpg" alt="Smart" /></li>         
                  </ul>
                </div>
              </div>
          </div>
</template>

<script>
import parkingApi from '@/api/parking';

export default {
  data(){
    return{
      parkingValues: []
    }
  },
  created(){
    parkingApi.getParkBoolValue().then(response=>{
      this.parkingValues=[].concat(response.data)
    })
  }
}
</script>

<style>
.my-form {
    text-align: left;
    left: 19vw;
    position: absolute;
    top: 22vh;
}
.my-form_2 {
    text-align: left;
    left: 19vw;
    position: absolute;
    top: 66vh;
}
.my-tableform{
  width: 60%;
  padding: 30px;
}
.my_tdform{
  border: 10px solid #bbada0;
  width: 50vw;
  height: 20vh;
  text-align: center;
}
</style>