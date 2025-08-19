var obj = JSON.parse($response.body)

var expireTime = 2071102838000
if (obj.status === 0) {
    var obj2 = {
        "expireTime": expireTime,
        "vipRightsLevel": 30,
        "payExpireTime": expireTime,
        "experienceExpireTime": expireTime,
        "subscribeStatus": 1,
        "freeExpireTime": expireTime,
        "vipUser": true,
        "experienceCardExpireTime": 0,
         "experienceCardStartTime": 0,
    }
    data = Object.assign(obj.data, obj2);
    obj.data = data
}

$done({
    body: JSON.stringify(obj),
})