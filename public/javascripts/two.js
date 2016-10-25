//复选框全选与取消全选
//class="check_one" 引用于成员复选框中，class="check_all"引用于全选复选框
$(function(){
    $('.check_all').click(function(){
        if($(this).prop('checked')){
            $('.check_one').prop('checked',true);
        }else{
            $('.check_one').prop('checked',false);
        }
    });
});

$(function(){
    $('.check_one').click(function(){
        if($('.check_one:checked').length == $('.check_one').length)
        {
            $('.check_all').prop('checked',true);
        }
        else
        {
            $('.check_all').prop('checked',false);
        }
    });
});
//复选框全选与取消全选End