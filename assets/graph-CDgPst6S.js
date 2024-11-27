import{a as O,c as j,h as u,k as l,f as c,d as a,i as f,v as p,r as F}from"./_baseUniq-Be0Q5R1n.js";import{ay as y,az as P,aA as m,aB as E,aC as C}from"./index-98a2u0gp.js";var M=y(function(d){return O(j(d,1,P,!0))}),A="\0",o="\0",L="";class D{constructor(e={}){this._isDirected=u(e,"directed")?e.directed:!0,this._isMultigraph=u(e,"multigraph")?e.multigraph:!1,this._isCompound=u(e,"compound")?e.compound:!1,this._label=void 0,this._defaultNodeLabelFn=m(void 0),this._defaultEdgeLabelFn=m(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children[o]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(e){return this._label=e,this}graph(){return this._label}setDefaultNodeLabel(e){return E(e)||(e=m(e)),this._defaultNodeLabelFn=e,this}nodeCount(){return this._nodeCount}nodes(){return l(this._nodes)}sources(){var e=this;return c(this.nodes(),function(t){return C(e._in[t])})}sinks(){var e=this;return c(this.nodes(),function(t){return C(e._out[t])})}setNodes(e,t){var s=arguments,i=this;return a(e,function(r){s.length>1?i.setNode(r,t):i.setNode(r)}),this}setNode(e,t){return u(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=t),this):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=o,this._children[e]={},this._children[o][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)}node(e){return this._nodes[e]}hasNode(e){return u(this._nodes,e)}removeNode(e){var t=this;if(u(this._nodes,e)){var s=function(i){t.removeEdge(t._edgeObjs[i])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],a(this.children(e),function(i){t.setParent(i)}),delete this._children[e]),a(l(this._in[e]),s),delete this._in[e],delete this._preds[e],a(l(this._out[e]),s),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this}setParent(e,t){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(f(t))t=o;else{t+="";for(var s=t;!f(s);s=this.parent(s))if(s===e)throw new Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this}_removeFromParentsChildList(e){delete this._children[this._parent[e]][e]}parent(e){if(this._isCompound){var t=this._parent[e];if(t!==o)return t}}children(e){if(f(e)&&(e=o),this._isCompound){var t=this._children[e];if(t)return l(t)}else{if(e===o)return this.nodes();if(this.hasNode(e))return[]}}predecessors(e){var t=this._preds[e];if(t)return l(t)}successors(e){var t=this._sucs[e];if(t)return l(t)}neighbors(e){var t=this.predecessors(e);if(t)return M(t,this.successors(e))}isLeaf(e){var t;return this.isDirected()?t=this.successors(e):t=this.neighbors(e),t.length===0}filterNodes(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var s=this;a(this._nodes,function(n,h){e(h)&&t.setNode(h,n)}),a(this._edgeObjs,function(n){t.hasNode(n.v)&&t.hasNode(n.w)&&t.setEdge(n,s.edge(n))});var i={};function r(n){var h=s.parent(n);return h===void 0||t.hasNode(h)?(i[n]=h,h):h in i?i[h]:r(h)}return this._isCompound&&a(t.nodes(),function(n){t.setParent(n,r(n))}),t}setDefaultEdgeLabel(e){return E(e)||(e=m(e)),this._defaultEdgeLabelFn=e,this}edgeCount(){return this._edgeCount}edges(){return p(this._edgeObjs)}setPath(e,t){var s=this,i=arguments;return F(e,function(r,n){return i.length>1?s.setEdge(r,n,t):s.setEdge(r,n),n}),this}setEdge(){var e,t,s,i,r=!1,n=arguments[0];typeof n=="object"&&n!==null&&"v"in n?(e=n.v,t=n.w,s=n.name,arguments.length===2&&(i=arguments[1],r=!0)):(e=n,t=arguments[1],s=arguments[3],arguments.length>2&&(i=arguments[2],r=!0)),e=""+e,t=""+t,f(s)||(s=""+s);var h=g(this._isDirected,e,t,s);if(u(this._edgeLabels,h))return r&&(this._edgeLabels[h]=i),this;if(!f(s)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[h]=r?i:this._defaultEdgeLabelFn(e,t,s);var _=G(this._isDirected,e,t,s);return e=_.v,t=_.w,Object.freeze(_),this._edgeObjs[h]=_,N(this._preds[t],e),N(this._sucs[e],t),this._in[t][h]=_,this._out[e][h]=_,this._edgeCount++,this}edge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):g(this._isDirected,e,t,s);return this._edgeLabels[i]}hasEdge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):g(this._isDirected,e,t,s);return u(this._edgeLabels,i)}removeEdge(e,t,s){var i=arguments.length===1?b(this._isDirected,arguments[0]):g(this._isDirected,e,t,s),r=this._edgeObjs[i];return r&&(e=r.v,t=r.w,delete this._edgeLabels[i],delete this._edgeObjs[i],v(this._preds[t],e),v(this._sucs[e],t),delete this._in[t][i],delete this._out[e][i],this._edgeCount--),this}inEdges(e,t){var s=this._in[e];if(s){var i=p(s);return t?c(i,function(r){return r.v===t}):i}}outEdges(e,t){var s=this._out[e];if(s){var i=p(s);return t?c(i,function(r){return r.w===t}):i}}nodeEdges(e,t){var s=this.inEdges(e,t);if(s)return s.concat(this.outEdges(e,t))}}D.prototype._nodeCount=0;D.prototype._edgeCount=0;function N(d,e){d[e]?d[e]++:d[e]=1}function v(d,e){--d[e]||delete d[e]}function g(d,e,t,s){var i=""+e,r=""+t;if(!d&&i>r){var n=i;i=r,r=n}return i+L+r+L+(f(s)?A:s)}function G(d,e,t,s){var i=""+e,r=""+t;if(!d&&i>r){var n=i;i=r,r=n}var h={v:i,w:r};return s&&(h.name=s),h}function b(d,e){return g(d,e.v,e.w,e.name)}export{D as G};
