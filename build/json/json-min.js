YUI.add("json-parse",function(Y){Y.JSON=Y.JSON||{};var _UNICODE_EXCEPTIONS=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_ESCAPES=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,_VALUES=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,_BRACKETS=/(?:^|:|,)(?:\s*\[)+/g,_INVALID=/^[\],:{}\s]*$/,has=Object.prototype.hasOwnProperty,_revive=function(data,reviver){var walk=function(o,key){var k,v,value=o[key];if(value&&typeof value==="object"){for(k in value){if(has.call(value,k)){v=walk(value,k);if(v===undefined){delete value[k];}else{value[k]=v;}}}}return reviver.call(o,key,value);};return typeof reviver==="function"?walk({"":data},""):data;};Y.JSON.parse=function(s,reviver){if(typeof s==="string"){s=s.replace(_UNICODE_EXCEPTIONS,function(c){return"\\u"+("0000"+(+(c.charCodeAt(0))).toString(16)).slice(-4);});if(_INVALID.test(s.replace(_ESCAPES,"@").replace(_VALUES,"]").replace(_BRACKETS,""))){return _revive(eval("("+s+")"),reviver);}}throw new SyntaxError("parseJSON");};},"@VERSION@");YUI.add("json-stringify",function(B){var A=B.Lang.isArray;B.JSON=B.JSON||{};B.mix(B.JSON,{_SPECIAL_CHARS:/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_CHARS:{"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},dateToString:function(D){function C(E){return E<10?"0"+E:E;}return'"'+D.getUTCFullYear()+"-"+C(D.getUTCMonth()+1)+"-"+C(D.getUTCDate())+"T"+C(D.getUTCHours())+":"+C(D.getUTCMinutes())+":"+C(D.getUTCSeconds())+'Z"';},stringify:function(E,K,G){var F=B.JSON._CHARS,C=B.JSON._SPECIAL_CHARS,I=typeof K==="function"?K:null,D=[];if(I||typeof K!=="object"){K=undefined;}var J=function(N){if(!F[N]){F[N]="\\u"+("0000"+(+(N.charCodeAt(0))).toString(16)).slice(-4);}return F[N];};var M=function(N){return'"'+N.replace(C,J)+'"';};var L=B.JSON.dateToString;var H=function(R,W,T){var N=typeof I==="function"?I.call(R,W,R[W]):R[W],X=typeof N,Q,S,P,O,V,U;if(X==="string"){return M(N);}if(X==="boolean"||N instanceof Boolean){return String(N);}if(X==="number"||N instanceof Number){return isFinite(N)?String(N):"null";}if(N instanceof Date){return L(N);}if(X==="object"){if(!N){return"null";}for(Q=D.length-1;Q>=0;--Q){if(D[Q]===N){return"null";}}D[D.length]=N;U=[];if(T>0){if(A(N)){for(Q=N.length-1;Q>=0;--Q){U[Q]=H(N,Q,T-1)||"null";}}else{O=A(K)?K:B.Object.keys(K||N);for(Q=0,P=0,S=O.length;Q<S;++Q){if(typeof O[Q]==="string"){V=H(N,O[Q],T-1);if(V){U[P++]=M(O[Q])+":"+V;}}}}}D.pop();return A(N)?"["+U.join(",")+"]":"{"+U.join(",")+"}";}return undefined;};G=G>=0?G:1/0;return H({"":E},"",G);}});},"@VERSION@");YUI.add("json",function(A){},"@VERSION@",{use:["json-parse","json-stringify"]});