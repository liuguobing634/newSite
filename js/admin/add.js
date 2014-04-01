/**
 * Created by Administrator on 14-3-28.
 */

function changeType(var1) {
    if(var1.value == "服务中心")
    {
        location.href = '../admin/service-class-add.html';
    }
    else if(var1.value == "产品中心")
      {
        location.href = "../admin/add.html";
      }
}