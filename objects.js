function Color(r, b, g, a){
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
}
function Vector(x, y){
  this.x = x;
  this.y = y;
}
function PongObject(l, w, color, bounceOnCollision, collectOnCollision, onLoad, onCollect, onUnload, update){
  this.l = l;
  this.w = w;
  this.color = color;
  this.bounceOnCollision = bounceOnCollision;
  this.CollectOnCollision = collectOnCollision;
  this.onLoad = onLoad;
  this.onCollect = onCollect;
  this.onUnload = onUnload;
  this.update = update;
}
function ball(x, y, t){
  var l = 0, w = 0, color = new Color(0, 0, 0, 255), bounceOnCollision = true, collectOnCollision = false, onLoad, onCollect, onUnload, update;
  PongObject.call(this, l, w, color, bounceOnCollision, collectOnCollision, onLoad, onCollect, onUnload, update);
  this.trajectory = t;
  this.x = x;
  this.y = y;
  this.onLoad = function(){void(0);}
  this.onCollect = function(){void(0);}
  this.onUnload = function(){this.x = 0; this.y = 0; this.color = newColor(0,0,0,0);};
  this.update = function(){
    this.x += t.x;
    this.y += t.y;
  }
}
