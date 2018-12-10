define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	$('.J_del',$mod).on('click',function(e){

    		var _id=this.getAttribute('data-id');
    		OXJS.confirm('确认要删除该聚会?',function(ok){
                if(ok){
                    $mod.OXDelete({
                        'user-event':{
                            _id:_id,
                            $deleter:'default'
                        }
                    },function(r){
                        var r=r && r[0];
                        if(r.error){
                            OXJS.toast('[删除失败]'+r.error)
                        }else{
                            OXJS.toast('操作成功！')
                            if(r && r.body && r.body.LINK){
                                location.href=r.body.LINK.list;
                            }
                        }
                    })

                }
    		})

    	});

        $('.J_apply',$mod).on('click',function(e){

            var _id=this.getAttribute('data-id'),
            title=this.getAttribute('data-title');
            var txt=window.prompt('如何称呼您?');
            if(!txt){
                return false
            }
            $mod.OXPost({
                    'user-apply':{
                        
                        target:_id,
                        subject:title,
                        file:[
                            {
                                "name":"名字",
                                "value":txt
                            }
                        ],

                        $inserter:'default'
                    }
                },function(r){
                    var r=r && r[0];
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
            OXJS.confirm('确认要取消参加该聚会?',function(ok){
                if(!ok){
                    return false;
                }
                $mod.OXDelete({
                    'user-apply':{
                        _id:_id,
                        $deleter:'default'
                    }
                },function(r){
                    var r=r && r[0];
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
