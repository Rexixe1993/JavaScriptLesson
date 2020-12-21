import http from 'k6/http';
import {check} from 'k6';

var a = 1000000000000;
export default function () {
    var url = 'https://data.mobage.tw/api/wj/feedback';
    var payload = JSON.stringify({
        lid: a.toString(),
        zone: '8001',
        user_id: '800100267266',
    });
    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    a++;

    let res = http.post(url, payload, params);

    check(res,{
        "is status 200": (r) => r.status ===200,
    });


}