// 检查座机电话和手机电话号码的合法性
// 使用时在文本框中加入：onblur="checkPhone(this.id);"
function checkPhone(id){
    var sMobile = $("#"+id).val();
    if(!(/^(0?1[358]\d{9})|((0(10|2[1-3]|[3-9]\d{2}))?[1-9]\d{6,7})$/.test(sMobile))){
        $("#hit_phone").css("display","inline");
        $("#hit_phone").html('<font color="red">手机号不正确</font>');
        return false;
    } else $("#hit_phone").empty();

    return true;
}
// 检查座机电话和手机电话号码的合法性End