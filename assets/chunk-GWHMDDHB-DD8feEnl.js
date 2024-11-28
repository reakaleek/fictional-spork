import{_ as o,j as T,l as L,d as N,T as A,ak as ct,al as U,U as lt,i as J}from"./index-Ctgh0Yw0.js";function X(l,t){t&&l.attr("style",t)}o(X,"applyStyle");function Z(l){const t=T(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),c=t.append("xhtml:div"),e=l.label,s=l.isNode?"nodeLabel":"edgeLabel",r=c.append("span");return r.html(e),X(r,l.labelStyle),r.attr("class",s),X(c,l.labelStyle),c.style("display","inline-block"),c.style("white-space","nowrap"),c.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}o(Z,"addHtmlLabel");var nt=o((l,t,c,e)=>{let s=l||"";if(typeof s=="object"&&(s=s[0]),A(N().flowchart.htmlLabels)){s=s.replace(/\\n|\n/g,"<br />"),L.debug("vertexText"+s);const r={isNode:e,label:ct(U(s)),labelStyle:t.replace("fill:","color:")};return Z(r)}else{const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("style",t.replace("color:","fill:"));let a=[];typeof s=="string"?a=s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?a=s:a=[];for(const i of a){const n=document.createElementNS("http://www.w3.org/2000/svg","tspan");n.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),n.setAttribute("dy","1em"),n.setAttribute("x","0"),c?n.setAttribute("class","title-row"):n.setAttribute("class","row"),n.textContent=i.trim(),r.appendChild(n)}return r}},"createLabel"),R=nt,_=o(async(l,t,c,e)=>{const s=N();let r;const a=t.useHtmlLabels||A(s.flowchart.htmlLabels);c?r=c:r="node default";const i=l.insert("g").attr("class",r).attr("id",t.domId||t.id),n=i.insert("g").attr("class","label").attr("style",t.labelStyle);let y;t.labelText===void 0?y="":y=typeof t.labelText=="string"?t.labelText:t.labelText[0];const h=n.node();let x;t.labelType==="markdown"?x=lt(n,J(U(y),s),{useHtmlLabels:a,width:t.width||s.flowchart.wrappingWidth,classes:"markdown-node-label"},s):x=h.appendChild(R(J(U(y),s),t.labelStyle,!1,e));let f=x.getBBox();const g=t.padding/2;if(A(s.flowchart.htmlLabels)){const d=x.children[0],m=T(x),p=d.getElementsByTagName("img");if(p){const C=y.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...p].map(S=>new Promise(D=>{function B(){if(S.style.display="flex",S.style.flexDirection="column",C){const j=s.fontSize?s.fontSize:window.getComputedStyle(document.body).fontSize,F=parseInt(j,10)*5+"px";S.style.minWidth=F,S.style.maxWidth=F}else S.style.width="100%";D(S)}o(B,"setupImage"),setTimeout(()=>{S.complete&&B()}),S.addEventListener("error",B),S.addEventListener("load",B)})))}f=d.getBoundingClientRect(),m.attr("width",f.width),m.attr("height",f.height)}return a?n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):n.attr("transform","translate(0, "+-f.height/2+")"),t.centerLabel&&n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),n.insert("rect",":first-child"),{shapeSvg:i,bbox:f,halfPadding:g,label:n}},"labelHelper"),w=o((l,t)=>{const c=t.node().getBBox();l.width=c.width,l.height=c.height},"updateNodeBounds");function E(l,t,c,e){return l.insert("polygon",":first-child").attr("points",e.map(function(s){return s.x+","+s.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+c/2+")")}o(E,"insertPolygonShape");var ht=o(l=>{const t=new Set;for(const c of l)switch(c){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(c);break}return t},"expandAndDeduplicateDirections"),ot=o((l,t,c)=>{const e=ht(l),s=2,r=t.height+2*c.padding,a=r/s,i=t.width+2*a+c.padding,n=c.padding/2;return e.has("right")&&e.has("left")&&e.has("up")&&e.has("down")?[{x:0,y:0},{x:a,y:0},{x:i/2,y:2*n},{x:i-a,y:0},{x:i,y:0},{x:i,y:-r/3},{x:i+2*n,y:-r/2},{x:i,y:-2*r/3},{x:i,y:-r},{x:i-a,y:-r},{x:i/2,y:-r-2*n},{x:a,y:-r},{x:0,y:-r},{x:0,y:-2*r/3},{x:-2*n,y:-r/2},{x:0,y:-r/3}]:e.has("right")&&e.has("left")&&e.has("up")?[{x:a,y:0},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:a,y:-r},{x:0,y:-r/2}]:e.has("right")&&e.has("left")&&e.has("down")?[{x:0,y:0},{x:a,y:-r},{x:i-a,y:-r},{x:i,y:0}]:e.has("right")&&e.has("up")&&e.has("down")?[{x:0,y:0},{x:i,y:-a},{x:i,y:-r+a},{x:0,y:-r}]:e.has("left")&&e.has("up")&&e.has("down")?[{x:i,y:0},{x:0,y:-a},{x:0,y:-r+a},{x:i,y:-r}]:e.has("right")&&e.has("left")?[{x:a,y:0},{x:a,y:-n},{x:i-a,y:-n},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:i-a,y:-r+n},{x:a,y:-r+n},{x:a,y:-r},{x:0,y:-r/2}]:e.has("up")&&e.has("down")?[{x:i/2,y:0},{x:0,y:-n},{x:a,y:-n},{x:a,y:-r+n},{x:0,y:-r+n},{x:i/2,y:-r},{x:i,y:-r+n},{x:i-a,y:-r+n},{x:i-a,y:-n},{x:i,y:-n}]:e.has("right")&&e.has("up")?[{x:0,y:0},{x:i,y:-a},{x:0,y:-r}]:e.has("right")&&e.has("down")?[{x:0,y:0},{x:i,y:0},{x:0,y:-r}]:e.has("left")&&e.has("up")?[{x:i,y:0},{x:0,y:-a},{x:i,y:-r}]:e.has("left")&&e.has("down")?[{x:i,y:0},{x:0,y:0},{x:i,y:-r}]:e.has("right")?[{x:a,y:-n},{x:a,y:-n},{x:i-a,y:-n},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:i-a,y:-r+n},{x:a,y:-r+n},{x:a,y:-r+n}]:e.has("left")?[{x:a,y:0},{x:a,y:-n},{x:i-a,y:-n},{x:i-a,y:-r+n},{x:a,y:-r+n},{x:a,y:-r},{x:0,y:-r/2}]:e.has("up")?[{x:a,y:-n},{x:a,y:-r+n},{x:0,y:-r+n},{x:i/2,y:-r},{x:i,y:-r+n},{x:i-a,y:-r+n},{x:i-a,y:-n}]:e.has("down")?[{x:i/2,y:0},{x:0,y:-n},{x:a,y:-n},{x:a,y:-r+n},{x:i-a,y:-r+n},{x:i-a,y:-n},{x:i,y:-n}]:[{x:0,y:0}]},"getArrowPoints");function tt(l,t){return l.intersect(t)}o(tt,"intersectNode");var yt=tt;function rt(l,t,c,e){var s=l.x,r=l.y,a=s-e.x,i=r-e.y,n=Math.sqrt(t*t*i*i+c*c*a*a),y=Math.abs(t*c*a/n);e.x<s&&(y=-y);var h=Math.abs(t*c*i/n);return e.y<r&&(h=-h),{x:s+y,y:r+h}}o(rt,"intersectEllipse");var at=rt;function et(l,t,c){return at(l,t,t,c)}o(et,"intersectCircle");var xt=et;function st(l,t,c,e){var s,r,a,i,n,y,h,x,f,g,d,m,p,C,S;if(s=t.y-l.y,a=l.x-t.x,n=t.x*l.y-l.x*t.y,f=s*c.x+a*c.y+n,g=s*e.x+a*e.y+n,!(f!==0&&g!==0&&K(f,g))&&(r=e.y-c.y,i=c.x-e.x,y=e.x*c.y-c.x*e.y,h=r*l.x+i*l.y+y,x=r*t.x+i*t.y+y,!(h!==0&&x!==0&&K(h,x))&&(d=s*i-r*a,d!==0)))return m=Math.abs(d/2),p=a*y-i*n,C=p<0?(p-m)/d:(p+m)/d,p=r*n-s*y,S=p<0?(p-m)/d:(p+m)/d,{x:C,y:S}}o(st,"intersectLine");function K(l,t){return l*t>0}o(K,"sameSign");var gt=st,ft=it;function it(l,t,c){var e=l.x,s=l.y,r=[],a=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(d){a=Math.min(a,d.x),i=Math.min(i,d.y)}):(a=Math.min(a,t.x),i=Math.min(i,t.y));for(var n=e-l.width/2-a,y=s-l.height/2-i,h=0;h<t.length;h++){var x=t[h],f=t[h<t.length-1?h+1:0],g=gt(l,c,{x:n+x.x,y:y+x.y},{x:n+f.x,y:y+f.y});g&&r.push(g)}return r.length?(r.length>1&&r.sort(function(d,m){var p=d.x-c.x,C=d.y-c.y,S=Math.sqrt(p*p+C*C),D=m.x-c.x,B=m.y-c.y,j=Math.sqrt(D*D+B*B);return S<j?-1:S===j?0:1}),r[0]):l}o(it,"intersectPolygon");var dt=o((l,t)=>{var c=l.x,e=l.y,s=t.x-c,r=t.y-e,a=l.width/2,i=l.height/2,n,y;return Math.abs(r)*a>Math.abs(s)*i?(r<0&&(i=-i),n=r===0?0:i*s/r,y=i):(s<0&&(a=-a),n=a,y=s===0?0:a*r/s),{x:c+n,y:e+y}},"intersectRect"),pt=dt,u={node:yt,circle:xt,ellipse:at,polygon:ft,rect:pt},ut=o(async(l,t)=>{t.useHtmlLabels||N().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:e,bbox:s,halfPadding:r}=await _(l,t,"node "+t.classes,!0);L.info("Classes = ",t.classes);const a=e.insert("rect",":first-child");return a.attr("rx",t.rx).attr("ry",t.ry).attr("x",-s.width/2-r).attr("y",-s.height/2-r).attr("width",s.width+t.padding).attr("height",s.height+t.padding),w(t,a),t.intersect=function(i){return u.rect(t,i)},e},"note"),wt=ut,V=o(l=>l?" "+l:"","formatClass"),I=o((l,t)=>`${t||"node default"}${V(l.classes)} ${V(l.class)}`,"getClassesFromNode"),G=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=s+r,i=[{x:a/2,y:0},{x:a,y:-a/2},{x:a/2,y:-a},{x:0,y:-a/2}];L.info("Question main (Circle)");const n=E(c,a,a,i);return n.attr("style",t.style),w(t,n),t.intersect=function(y){return L.warn("Intersect called"),u.polygon(t,i,y)},c},"question"),bt=o((l,t)=>{const c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),e=28,s=[{x:0,y:e/2},{x:e/2,y:0},{x:0,y:-e/2},{x:-e/2,y:0}];return c.insert("polygon",":first-child").attr("points",s.map(function(a){return a.x+","+a.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(a){return u.circle(t,14,a)},c},"choice"),vt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=4,r=e.height+t.padding,a=r/s,i=e.width+2*a+t.padding,n=[{x:a,y:0},{x:i-a,y:0},{x:i,y:-r/2},{x:i-a,y:-r},{x:a,y:-r},{x:0,y:-r/2}],y=E(c,i,r,n);return y.attr("style",t.style),w(t,y),t.intersect=function(h){return u.polygon(t,n,h)},c},"hexagon"),mt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,void 0,!0),s=2,r=e.height+2*t.padding,a=r/s,i=e.width+2*a+t.padding,n=ot(t.directions,e,t),y=E(c,i,r,n);return y.attr("style",t.style),w(t,y),t.intersect=function(h){return u.polygon(t,n,h)},c},"block_arrow"),St=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:-r/2,y:0},{x:s,y:0},{x:s,y:-r},{x:-r/2,y:-r},{x:0,y:-r/2}];return E(c,s,r,a).attr("style",t.style),t.width=s+r,t.height=r,t.intersect=function(n){return u.polygon(t,a,n)},c},"rect_left_inv_arrow"),Lt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:-2*r/6,y:0},{x:s-r/6,y:0},{x:s+2*r/6,y:-r},{x:r/6,y:-r}],i=E(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c},"lean_right"),_t=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:2*r/6,y:0},{x:s+r/6,y:0},{x:s-2*r/6,y:-r},{x:-r/6,y:-r}],i=E(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c},"lean_left"),Bt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:-2*r/6,y:0},{x:s+2*r/6,y:0},{x:s-r/6,y:-r},{x:r/6,y:-r}],i=E(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c},"trapezoid"),Ct=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:r/6,y:0},{x:s-r/6,y:0},{x:s+2*r/6,y:-r},{x:-2*r/6,y:-r}],i=E(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c},"inv_trapezoid"),Tt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:0,y:0},{x:s+r/2,y:0},{x:s,y:-r/2},{x:s+r/2,y:-r},{x:0,y:-r}],i=E(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c},"rect_right_inv_arrow"),kt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=s/2,a=r/(2.5+s/50),i=e.height+a+t.padding,n="M 0,"+a+" a "+r+","+a+" 0,0,0 "+s+" 0 a "+r+","+a+" 0,0,0 "+-s+" 0 l 0,"+i+" a "+r+","+a+" 0,0,0 "+s+" 0 l 0,"+-i,y=c.attr("label-offset-y",a).insert("path",":first-child").attr("style",t.style).attr("d",n).attr("transform","translate("+-s/2+","+-(i/2+a)+")");return w(t,y),t.intersect=function(h){const x=u.rect(t,h),f=x.x-t.x;if(r!=0&&(Math.abs(f)<t.width/2||Math.abs(f)==t.width/2&&Math.abs(x.y-t.y)>t.height/2-a)){let g=a*a*(1-f*f/(r*r));g!=0&&(g=Math.sqrt(g)),g=a-g,h.y-t.y>0&&(g=-g),x.y+=g}return x},c},"cylinder"),Nt=o(async(l,t)=>{const{shapeSvg:c,bbox:e,halfPadding:s}=await _(l,t,"node "+t.classes+" "+t.class,!0),r=c.insert("rect",":first-child"),a=t.positioned?t.width:e.width+t.padding,i=t.positioned?t.height:e.height+t.padding,n=t.positioned?-a/2:-e.width/2-s,y=t.positioned?-i/2:-e.height/2-s;if(r.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",n).attr("y",y).attr("width",a).attr("height",i),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(O(r,t.props.borders,a,i),h.delete("borders")),h.forEach(x=>{L.warn(`Unknown node property ${x}`)})}return w(t,r),t.intersect=function(h){return u.rect(t,h)},c},"rect"),It=o(async(l,t)=>{const{shapeSvg:c,bbox:e,halfPadding:s}=await _(l,t,"node "+t.classes,!0),r=c.insert("rect",":first-child"),a=t.positioned?t.width:e.width+t.padding,i=t.positioned?t.height:e.height+t.padding,n=t.positioned?-a/2:-e.width/2-s,y=t.positioned?-i/2:-e.height/2-s;if(r.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",n).attr("y",y).attr("width",a).attr("height",i),t.props){const h=new Set(Object.keys(t.props));t.props.borders&&(O(r,t.props.borders,a,i),h.delete("borders")),h.forEach(x=>{L.warn(`Unknown node property ${x}`)})}return w(t,r),t.intersect=function(h){return u.rect(t,h)},c},"composite"),Et=o(async(l,t)=>{const{shapeSvg:c}=await _(l,t,"label",!0);L.trace("Classes = ",t.class);const e=c.insert("rect",":first-child"),s=0,r=0;if(e.attr("width",s).attr("height",r),c.attr("class","label edgeLabel"),t.props){const a=new Set(Object.keys(t.props));t.props.borders&&(O(e,t.props.borders,s,r),a.delete("borders")),a.forEach(i=>{L.warn(`Unknown node property ${i}`)})}return w(t,e),t.intersect=function(a){return u.rect(t,a)},c},"labelRect");function O(l,t,c,e){const s=[],r=o(i=>{s.push(i,0)},"addBorder"),a=o(i=>{s.push(0,i)},"skipBorder");t.includes("t")?(L.debug("add top border"),r(c)):a(c),t.includes("r")?(L.debug("add right border"),r(e)):a(e),t.includes("b")?(L.debug("add bottom border"),r(c)):a(c),t.includes("l")?(L.debug("add left border"),r(e)):a(e),l.attr("stroke-dasharray",s.join(" "))}o(O,"applyNodePropertyBorders");var Dt=o((l,t)=>{let c;t.classes?c="node "+t.classes:c="node default";const e=l.insert("g").attr("class",c).attr("id",t.domId||t.id),s=e.insert("rect",":first-child"),r=e.insert("line"),a=e.insert("g").attr("class","label"),i=t.labelText.flat?t.labelText.flat():t.labelText;let n="";typeof i=="object"?n=i[0]:n=i,L.info("Label text abc79",n,i,typeof i=="object");const y=a.node().appendChild(R(n,t.labelStyle,!0,!0));let h={width:0,height:0};if(A(N().flowchart.htmlLabels)){const m=y.children[0],p=T(y);h=m.getBoundingClientRect(),p.attr("width",h.width),p.attr("height",h.height)}L.info("Text 2",i);const x=i.slice(1,i.length);let f=y.getBBox();const g=a.node().appendChild(R(x.join?x.join("<br/>"):x,t.labelStyle,!0,!0));if(A(N().flowchart.htmlLabels)){const m=g.children[0],p=T(g);h=m.getBoundingClientRect(),p.attr("width",h.width),p.attr("height",h.height)}const d=t.padding/2;return T(g).attr("transform","translate( "+(h.width>f.width?0:(f.width-h.width)/2)+", "+(f.height+d+5)+")"),T(y).attr("transform","translate( "+(h.width<f.width?0:-(f.width-h.width)/2)+", 0)"),h=a.node().getBBox(),a.attr("transform","translate("+-h.width/2+", "+(-h.height/2-d+3)+")"),s.attr("class","outer title-state").attr("x",-h.width/2-d).attr("y",-h.height/2-d).attr("width",h.width+t.padding).attr("height",h.height+t.padding),r.attr("class","divider").attr("x1",-h.width/2-d).attr("x2",h.width/2+d).attr("y1",-h.height/2-d+f.height+d).attr("y2",-h.height/2-d+f.height+d),w(t,s),t.intersect=function(m){return u.rect(t,m)},e},"rectWithTitle"),Mt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.height+t.padding,r=e.width+s/4+t.padding,a=c.insert("rect",":first-child").attr("style",t.style).attr("rx",s/2).attr("ry",s/2).attr("x",-r/2).attr("y",-s/2).attr("width",r).attr("height",s);return w(t,a),t.intersect=function(i){return u.rect(t,i)},c},"stadium"),At=o(async(l,t)=>{const{shapeSvg:c,bbox:e,halfPadding:s}=await _(l,t,I(t,void 0),!0),r=c.insert("circle",":first-child");return r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",e.width/2+s).attr("width",e.width+t.padding).attr("height",e.height+t.padding),L.info("Circle main"),w(t,r),t.intersect=function(a){return L.info("Circle intersect",t,e.width/2+s,a),u.circle(t,e.width/2+s,a)},c},"circle"),jt=o(async(l,t)=>{const{shapeSvg:c,bbox:e,halfPadding:s}=await _(l,t,I(t,void 0),!0),r=5,a=c.insert("g",":first-child"),i=a.insert("circle"),n=a.insert("circle");return a.attr("class",t.class),i.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",e.width/2+s+r).attr("width",e.width+t.padding+r*2).attr("height",e.height+t.padding+r*2),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",e.width/2+s).attr("width",e.width+t.padding).attr("height",e.height+t.padding),L.info("DoubleCircle main"),w(t,i),t.intersect=function(y){return L.info("DoubleCircle intersect",t,e.width/2+s+r,y),u.circle(t,e.width/2+s+r,y)},c},"doublecircle"),Pt=o(async(l,t)=>{const{shapeSvg:c,bbox:e}=await _(l,t,I(t,void 0),!0),s=e.width+t.padding,r=e.height+t.padding,a=[{x:0,y:0},{x:s,y:0},{x:s,y:-r},{x:0,y:-r},{x:0,y:0},{x:-8,y:0},{x:s+8,y:0},{x:s+8,y:-r},{x:-8,y:-r},{x:-8,y:0}],i=E(c,s,r,a);return i.attr("style",t.style),w(t,i),t.intersect=function(n){return u.polygon(t,a,n)},c},"subroutine"),Rt=o((l,t)=>{const c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),e=c.insert("circle",":first-child");return e.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),w(t,e),t.intersect=function(s){return u.circle(t,7,s)},c},"start"),Q=o((l,t,c)=>{const e=l.insert("g").attr("class","node default").attr("id",t.domId||t.id);let s=70,r=10;c==="LR"&&(s=10,r=70);const a=e.append("rect").attr("x",-1*s/2).attr("y",-1*r/2).attr("width",s).attr("height",r).attr("class","fork-join");return w(t,a),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(i){return u.rect(t,i)},e},"forkJoin"),Ht=o((l,t)=>{const c=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),e=c.insert("circle",":first-child"),s=c.insert("circle",":first-child");return s.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),e.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),w(t,s),t.intersect=function(r){return u.circle(t,7,r)},c},"end"),zt=o((l,t)=>{var Y;const c=t.padding/2,e=4,s=8;let r;t.classes?r="node "+t.classes:r="node default";const a=l.insert("g").attr("class",r).attr("id",t.domId||t.id),i=a.insert("rect",":first-child"),n=a.insert("line"),y=a.insert("line");let h=0,x=e;const f=a.insert("g").attr("class","label");let g=0;const d=(Y=t.classData.annotations)==null?void 0:Y[0],m=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",p=f.node().appendChild(R(m,t.labelStyle,!0,!0));let C=p.getBBox();if(A(N().flowchart.htmlLabels)){const b=p.children[0],v=T(p);C=b.getBoundingClientRect(),v.attr("width",C.width),v.attr("height",C.height)}t.classData.annotations[0]&&(x+=C.height+e,h+=C.width);let S=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(N().flowchart.htmlLabels?S+="&lt;"+t.classData.type+"&gt;":S+="<"+t.classData.type+">");const D=f.node().appendChild(R(S,t.labelStyle,!0,!0));T(D).attr("class","classTitle");let B=D.getBBox();if(A(N().flowchart.htmlLabels)){const b=D.children[0],v=T(D);B=b.getBoundingClientRect(),v.attr("width",B.width),v.attr("height",B.height)}x+=B.height+e,B.width>h&&(h=B.width);const j=[];t.classData.members.forEach(b=>{const v=b.getDisplayDetails();let P=v.displayText;N().flowchart.htmlLabels&&(P=P.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const M=f.node().appendChild(R(P,v.cssStyle?v.cssStyle:t.labelStyle,!0,!0));let k=M.getBBox();if(A(N().flowchart.htmlLabels)){const $=M.children[0],z=T(M);k=$.getBoundingClientRect(),z.attr("width",k.width),z.attr("height",k.height)}k.width>h&&(h=k.width),x+=k.height+e,j.push(M)}),x+=s;const W=[];if(t.classData.methods.forEach(b=>{const v=b.getDisplayDetails();let P=v.displayText;N().flowchart.htmlLabels&&(P=P.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const M=f.node().appendChild(R(P,v.cssStyle?v.cssStyle:t.labelStyle,!0,!0));let k=M.getBBox();if(A(N().flowchart.htmlLabels)){const $=M.children[0],z=T(M);k=$.getBoundingClientRect(),z.attr("width",k.width),z.attr("height",k.height)}k.width>h&&(h=k.width),x+=k.height+e,W.push(M)}),x+=s,d){let b=(h-C.width)/2;T(p).attr("transform","translate( "+(-1*h/2+b)+", "+-1*x/2+")"),g=C.height+e}let F=(h-B.width)/2;return T(D).attr("transform","translate( "+(-1*h/2+F)+", "+(-1*x/2+g)+")"),g+=B.height+e,n.attr("class","divider").attr("x1",-h/2-c).attr("x2",h/2+c).attr("y1",-x/2-c+s+g).attr("y2",-x/2-c+s+g),g+=s,j.forEach(b=>{T(b).attr("transform","translate( "+-h/2+", "+(-1*x/2+g+s/2)+")");const v=b==null?void 0:b.getBBox();g+=((v==null?void 0:v.height)??0)+e}),g+=s,y.attr("class","divider").attr("x1",-h/2-c).attr("x2",h/2+c).attr("y1",-x/2-c+s+g).attr("y2",-x/2-c+s+g),g+=s,W.forEach(b=>{T(b).attr("transform","translate( "+-h/2+", "+(-1*x/2+g)+")");const v=b==null?void 0:b.getBBox();g+=((v==null?void 0:v.height)??0)+e}),i.attr("style",t.style).attr("class","outer title-state").attr("x",-h/2-c).attr("y",-(x/2)-c).attr("width",h+t.padding).attr("height",x+t.padding),w(t,i),t.intersect=function(b){return u.rect(t,b)},a},"class_box"),q={rhombus:G,composite:It,question:G,rect:Nt,labelRect:Et,rectWithTitle:Dt,choice:bt,circle:At,doublecircle:jt,stadium:Mt,hexagon:vt,block_arrow:mt,rect_left_inv_arrow:St,lean_right:Lt,lean_left:_t,trapezoid:Bt,inv_trapezoid:Ct,rect_right_inv_arrow:Tt,cylinder:kt,start:Rt,end:Ht,note:wt,subroutine:Pt,fork:Q,join:Q,class_box:zt},H={},Ot=o(async(l,t,c)=>{let e,s;if(t.link){let r;N().securityLevel==="sandbox"?r="_top":t.linkTarget&&(r=t.linkTarget||"_blank"),e=l.insert("svg:a").attr("xlink:href",t.link).attr("target",r),s=await q[t.shape](e,t,c)}else s=await q[t.shape](l,t,c),e=s;return t.tooltip&&s.attr("title",t.tooltip),t.class&&s.attr("class","node default "+t.class),H[t.id]=e,t.haveCallback&&H[t.id].attr("class",H[t.id].attr("class")+" clickable"),e},"insertNode"),Wt=o((l,t)=>{H[t.id]=l},"setNodeElem"),$t=o(()=>{H={}},"clear"),Ut=o(l=>{const t=H[l.id];L.trace("Transforming node",l.diff,l,"translate("+(l.x-l.width/2-5)+", "+l.width/2+")");const c=8,e=l.diff||0;return l.clusterNode?t.attr("transform","translate("+(l.x+e-l.width/2)+", "+(l.y-l.height/2-c)+")"):t.attr("transform","translate("+l.x+", "+l.y+")"),e},"positionNode");export{R as a,pt as b,$t as c,Ot as i,Ut as p,Wt as s,w as u};