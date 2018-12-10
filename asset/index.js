define(['oxjs'],function(OXJS){
  return {
    init:function($mod){
    	$('.J_del',$mod).on('click',function(e){

    		var _id=this.getAttribute('data-id');
    		OXJS.confirm('确认要删除该聚会?',function(){
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
    		})

    	})

    }
  }
})
