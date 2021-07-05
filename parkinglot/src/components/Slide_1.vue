<template>
            <div class="slide" id="1">
            <div id="slider-wrapper">
                <div id="image-slider">
                  <ul>
                    <li class="active-img">
                        <div class="my-form">
                          <table>
                              <tr class="my-tableform">
                                  <td class="my_tdform">참치</td>
                                  <td class="my_tdform">고래</td>      
                              </tr>
                              <tr>
                                  <td class="my_tdform">상어</td>
                                  <td class="my_tdform">문어</td>
                              </tr>
                              <tr>
                                  <td class="my_tdform">오징어</td>
                                  <td class="my_tdform">고등어</td>
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
    left: 50vw;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.my-tableform{
  width: 100%;
  padding: 30px;
}
.my_tdform{
  position: relative;
    width: 50%;
    min-height: 1px;
    padding: 15px;
}
</style>