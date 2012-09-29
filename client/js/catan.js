CATAN.Notifications = [];

CATAN.Notify = function(data) {

	if(window.webkitNotifications) {

		if(window.webkitNotifications.checkPermission() == 0) {

			var timeout = data.timeout ? data.timeout : 10000,
				note;
			
			if(!data.type || data.type == "default") {
				var icon = data.icon ? data.icon : '',
					title = data.title ? data.title : T('Title'),
					subtitle = data.subtitle ? data.subtitle : "";
				note = window.webkitNotifications.createNotification(icon,title,subtitle);
			} else if(data.type == "html") {
				var url = data.url ? data.url : "http://google.com/" // replace with 404 page later
				note = window.webkitNotifications.createHTMLNotification(data.url);
			}

			note.show();

			setTimeout(function(){
				if(note != undefined) {
					note.cancel();
				}
			}, timeout);

			CATAN.Notifications.push(note);

		} else {
			window.webkitNotifications.requestPermission(this.Notify);
			this.chat.AddLine(data.subtitle, "forcechat");
		}

	} else {
		this.chat.AddLine(data.subtitle);
	}

}

CATAN.ClearNotifications = function() {
	var notifications = CATAN.Notifications;
	for(var i in notifications) {
		notifications[i].cancel();
	}
	CATAN.Notifications.length = 0;
}

CATAN.getName = function() {
	return (localStorage && localStorage.Name) ? localStorage.Name : T('DefaultName');
}

CATAN.getSchema = function() {
	return this.Schemas.get("Classic"); // static for now
}

CATAN.mouseRayTrace = function( event ) {

	//if(onTurn != true) return; // TODO: prevent tracing while not client's turn

	var camera = CATAN.Game.camera;
	var vector = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1, 0.5 );

	CATAN.Game.controls.projector.unprojectVector( vector, CATAN.Game.camera );

	var ray = new THREE.Ray( camera.position, vector.subSelf( camera.position ).normalize() );
	var intersects = ray.intersectObjects( CATAN.Game.collisionObjects );

	var hitObject = intersects[0];
	if(hitObject) {
	
		var ent = hitObject.object.Parent;

		if (ent.isVisible()) {
			return ent;
		};
		
		//CATAN.Game.lastSelection = hitObject.object;
		
	};

};

CATAN.endBuildMode = function() {
	var entities = CATAN.ents.getByName(["HexCorner","HexEdge"]);
	for(var i in entities) {
		var ent2 = entities[i];
		if(!ent2.hasOwner()) {
			ent2.hide();
		}
	}
}

CATAN.onSelectEntity = function(ent) {
	if(!CATAN.LocalPlayer.isTurn()) return;

	if(ent.isTile()) {
		CATAN.server.emit('movedRobber', {
			id: ent.getEntId()
		});
	} else {
		CATAN.server.emit('playerBuild', {
			id: ent.getEntId()
		});
	}
}