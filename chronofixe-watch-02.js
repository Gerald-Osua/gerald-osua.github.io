(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.centerpoint = function() {
	this.initialize(img.centerpoint);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.Edited_3C6A0067asset01 = function() {
	this.initialize(img.Edited_3C6A0067asset01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1000);


(lib.hours = function() {
	this.initialize(img.hours);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.minute_handshadow = function() {
	this.initialize(img.minute_handshadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.minutes = function() {
	this.initialize(img.minutes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.seconds = function() {
	this.initialize(img.seconds);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.seconds_handshadow = function() {
	this.initialize(img.seconds_handshadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.secs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seconds();
	this.instance.parent = this;
	this.instance.setTransform(1025,1039,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.secs, new cjs.Rectangle(25,39,1000,1000), null);


(lib.secshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seconds_handshadow();
	this.instance.parent = this;
	this.instance.setTransform(1000,1000,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.secshadow, new cjs.Rectangle(0,0,1000,1000), null);


(lib.minutes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.minutes();
	this.instance.parent = this;
	this.instance.setTransform(1080,1081,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.minutes_1, new cjs.Rectangle(80,81,1000,1000), null);


(lib.min_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.minute_handshadow();
	this.instance.parent = this;
	this.instance.setTransform(1000,1000,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.min_shadow, new cjs.Rectangle(0,0,1000,1000), null);


(lib.hours_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hours();
	this.instance.parent = this;
	this.instance.setTransform(1080,1081,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hours_1, new cjs.Rectangle(80,81,1000,1000), null);


(lib.hands_container = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.seconds_hand = new lib.secs();
	this.seconds_hand.name = "seconds_hand";
	this.seconds_hand.parent = this;
	this.seconds_hand.setTransform(835.9,834.1,1.6302,1.6302,0,0,0,525,538.9);
	this.seconds_hand.shadow = new cjs.Shadow("rgba(0,0,0,1)",14,14,25);

	this.timeline.addTween(cjs.Tween.get(this.seconds_hand).wait(1));

	// Layer_4
	this.minute_hand = new lib.minutes_1();
	this.minute_hand.name = "minute_hand";
	this.minute_hand.parent = this;
	this.minute_hand.setTransform(843.95,843.35,1.5014,1.5014,0,0,0,580,581);
	this.minute_hand.shadow = new cjs.Shadow("rgba(0,0,0,1)",18,18,25);

	this.timeline.addTween(cjs.Tween.get(this.minute_hand).wait(1));

	// Layer_1
	this.hour_hand = new lib.hours_1();
	this.hour_hand.name = "hour_hand";
	this.hour_hand.parent = this;
	this.hour_hand.setTransform(850.5,852.4,1.5314,1.5314,0,0,0,580,580.9);
	this.hour_hand.shadow = new cjs.Shadow("rgba(0,0,0,1)",25,25,25);

	this.timeline.addTween(cjs.Tween.get(this.hour_hand).wait(1));

	// Layer_2
	this.sec_shadow = new lib.secshadow();
	this.sec_shadow.name = "sec_shadow";
	this.sec_shadow.parent = this;
	this.sec_shadow.setTransform(874.05,879.85,1.6665,1.6665,0,0,0,500.1,500.1);

	this.timeline.addTween(cjs.Tween.get(this.sec_shadow).wait(1));

	// Layer_5
	this.min_shadow = new lib.min_shadow();
	this.min_shadow.name = "min_shadow";
	this.min_shadow.parent = this;
	this.min_shadow.setTransform(873.8,864.55,1.524,1.524,0,0,0,500.2,500.2);

	this.timeline.addTween(cjs.Tween.get(this.min_shadow).wait(1));

}).prototype = getMCSymbolPrototype(lib.hands_container, new cjs.Rectangle(7.8,6.2,1699.4,1706.8), null);


// stage content:
(lib.chronofixewatch02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.the_second_hand.gotoandstop(1);
		
		this.addEventListener("tick",fl_RotateContinuously_2.bind(this));
		
		function fl_RotateContinuously_2(){
			
			
			 var today = new Date();
		  var h = today.getHours();
		  var m = today.getMinutes();
		  var s = today.getSeconds(); 
			var dx = today.getDate(); 
			hrx= h;
			mnx= m;
			scnds= s;
			daydsp= dx;
		  
			this.hands_container.hour_hand.rotation = 180 + (hrx * 30) + (hrx * 0.5); 
			 this.hands_container.minute_hand.rotation = 180 + (mnx * 6);
			this.hands_container.min_shadow.rotation = 180 + (mnx * 6);
			this.hands_container.seconds_hand.rotation = 180 + (scnds * 6);
			this.day_dsp.text = daydsp;
			
			this.hands_container.sec_shadow.rotation = 180 + (scnds * 6);
			//this.hour_hand.rotation = 10 * hrx; 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 6
	this.instance = new lib.centerpoint();
	this.instance.parent = this;
	this.instance.setTransform(311,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// seconds
	this.hands_container = new lib.hands_container();
	this.hands_container.name = "hands_container";
	this.hands_container.parent = this;
	this.hands_container.setTransform(809.1,466.05,0.8959,0.8633,0,30.1271,24.1562,834.1,833.2);

	this.timeline.addTween(cjs.Tween.get(this.hands_container).wait(1));

	// Minutes
	this.day_dsp = new cjs.Text("1", "61px 'Tw Cen MT'");
	this.day_dsp.name = "day_dsp";
	this.day_dsp.textAlign = "center";
	this.day_dsp.lineHeight = 66;
	this.day_dsp.lineWidth = 170;
	this.day_dsp.parent = this;
	this.day_dsp.setTransform(1416.2917,751.999,1.4088,1.9001,0,31.4596,22.8554);

	this.timeline.addTween(cjs.Tween.get(this.day_dsp).wait(1));

	// Layer_2
	this.instance_1 = new lib.Edited_3C6A0067asset01();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(737.6,47.1,1182.4,1396);
// library properties:
lib.properties = {
	id: '81F699678336BF48B0564DB0F145A97C',
	width: 1920,
	height: 1000,
	fps: 24,
	color: "#424242",
	opacity: 0.00,
	manifest: [
		{src:"images/centerpoint.png", id:"centerpoint"},
		{src:"images/Edited_3C6A0067asset01.jpg", id:"Edited_3C6A0067asset01"},
		{src:"images/hours.png", id:"hours"},
		{src:"images/minute_handshadow.png", id:"minute_handshadow"},
		{src:"images/minutes.png", id:"minutes"},
		{src:"images/seconds.png", id:"seconds"},
		{src:"images/seconds_handshadow.png", id:"seconds_handshadow"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['81F699678336BF48B0564DB0F145A97C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;