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
function Object(l, w, color, bounceOnCollision, collectOnCollision, onLoad, onCollect){
  this.l = l;
  this.w = w;
  this.color = color;
  this.bounceOnCollision = bounceOnCollision;
  this.CollectOnCollision = collectOnCollision;
  this.onLoad = onLoad;
  this.onCollect = onCollect;
}
