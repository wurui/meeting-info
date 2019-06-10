define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
        /*
    	$('.J_del',$mod).on('click',function(e){

    		var _id=this.getAttribute('data-id');
    		OXJS.confirm('确认要删除该活动?',function(ok){
                if(ok){
                    $mod.OXDelete({
                        'user-event':{
                            _id:_id,
                            $deleter:'default'
                        }
                    },function(r){
                        var result=r && r['user-event']
                        if(r.error){
                            OXJS.toast('[删除失败]'+r.error)
                        }else{
                            OXJS.toast('操作成功！')
                            $mod.OXRefresh();

                        }
                    })

                }
    		})

    	});*/

        $('.J_apply',$mod).on('click',function(e){

            var _id=this.getAttribute('data-id'),
                title=this.getAttribute('data-title'),
                owner=this.getAttribute('data-owner'),
                txt=window.prompt('请备注个人信息');
           
            $mod.OXPost({
                    'user-apply':{
                        owner:owner,
                        target:_id,
                        subject:title,
                        content:txt,/*
                        file:[
                            {
                                "name":"名字",
                                "value":txt
                            }
                        ],*/

                        $inserter:'default'
                    }
                },function(r){
                    var result=r && r['user-apply']
                    if(r.error){
                        OXJS.toast('[操作失败]'+r.error)
                    }else{
                        OXJS.toast('操作成功！')
                        $mod.OXRefresh();
                    }
                })

        });

        $('.J_cancel',$mod).on('click',function(e){

            var _id=this.getAttribute('data-id');
            OXJS.confirm('确认要取消参加该活动?',function(ok){
                if(!ok){
                    return false;
                }
                $mod.OXDelete({
                    'user-apply':{
                        _id:_id,
                        $deleter:'default'
                    }
                },function(r){
                    var result=r && r['user-apply']
                    if(r.error){
                        OXJS.toast('[操作失败]'+r.error)
                    }else{
                        OXJS.toast('操作成功！')
                        $mod.OXRefresh();
                                            
                    }
                })
            })

        });

    }
  }
})
