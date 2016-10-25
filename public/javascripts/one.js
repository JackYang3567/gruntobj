//获取URL中的参数值
//name为URL中参数名，返回相应的参数值
function getURLPara(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null)
        return unescape(r[2]);
    return null;
}
//获取URL中的参数值End