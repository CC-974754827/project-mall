import Mock from 'mockjs';

let Random = Mock.Random;
let allData = req => {
    let messageList = [];
    for(let i=0;i<100;i++){
        let message = {
            name: Random.cname(),
            img: Random.dataImage('125x125','角色'+Random.integer(1, 100)),
            origin:Random.ctitle(5,20),
        };
        messageList.push(message);
    }
    return messageList;
};
Mock.mock('http://www.zyl.com/getVarietyList',allData);