import http from './http';

export default{
    async getParkBoolValue(){
        return http.get('api/parking.json');
    }
}