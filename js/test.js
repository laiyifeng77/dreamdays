define(function(require) {
	var Http = require('./base/Http');
	
	var h = new Http();
	
	var url = 'http://whistle.ruijie.com.cn:50210/cloud_game/index.php';
	
	var param = {
		m:'gameseed',
		a:'gameMembers',
		school_id:0,
		game_id:'644',
		uid:0,
		version:'123123',
		device_type:'web'
	}
	
	h.req(url,param,function(data){
		alert('success='+JSON.stringify(data));
	});
	
	
})