var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_typeof=typeof Symbol=='function'&&typeof Symbol.iterator=='symbol'?function(a){return typeof a}:function(a){return a&&typeof Symbol=='function'&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};function _objectWithoutProperties(a,b){var c={};for(var d in a)b.indexOf(d)>=0||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}import React from'react';import unquote from'unquote';var ATTRIBUTE_TO_JSX_PROP_MAP={accesskey:'accessKey',allowfullscreen:'allowFullScreen',allowtransparency:'allowTransparency',autocomplete:'autoComplete',autofocus:'autoFocus',autoplay:'autoPlay',cellpadding:'cellPadding',cellspacing:'cellSpacing',charset:'charSet',class:'className',classid:'classId',colspan:'colSpan',contenteditable:'contentEditable',contextmenu:'contextMenu',crossorigin:'crossOrigin',enctype:'encType',for:'htmlFor',formaction:'formAction',formenctype:'formEncType',formmethod:'formMethod',formnovalidate:'formNoValidate',formtarget:'formTarget',frameborder:'frameBorder',hreflang:'hrefLang',inputmode:'inputMode',keyparams:'keyParams',keytype:'keyType',marginheight:'marginHeight',marginwidth:'marginWidth',maxlength:'maxLength',mediagroup:'mediaGroup',minlength:'minLength',novalidate:'noValidate',radiogroup:'radioGroup',readonly:'readOnly',rowspan:'rowSpan',spellcheck:'spellCheck',srcdoc:'srcDoc',srclang:'srcLang',srcset:'srcSet',tabindex:'tabIndex',usemap:'useMap'},namedCodesToUnicode={amp:'&',apos:'\'',gt:'>',lt:'<',nbsp:'\xA0',quot:'\u201C'},DO_NOT_PROCESS_HTML_ELEMENTS=['style','script'],ATTR_EXTRACTOR_R=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,AUTOLINK_MAILTO_CHECK_R=/mailto:/i,BLOCK_END_R=/\n{2,}$/,BLOCKQUOTE_R=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,BLOCKQUOTE_TRIM_LEFT_MULTILINE_R=/^ *> ?/gm,BREAK_LINE_R=/^ {2,}\n/,BREAK_THEMATIC_R=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,CODE_BLOCK_FENCED_R=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,CODE_BLOCK_R=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,CODE_INLINE_R=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,CONSECUTIVE_NEWLINE_R=/^(?:\n *)*\n/,CR_NEWLINE_R=/\r\n?/g,FOOTNOTE_R=/^\[\^([0-9]*)\](:.*)\n/,FOOTNOTE_REFERENCE_R=/^\[\^([0-9]*)\]/,FORMFEED_R=/\f/g,GFM_TASK_R=/^\s*?\[(x|\s)\]/,HEADING_R=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,HEADING_SETEXT_R=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,HTML_BLOCK_ELEMENT_R=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,HTML_CHAR_CODE_R=/&([a-z]+);/g,HTML_COMMENT_R=/^<!--.*?-->/,HTML_CUSTOM_ATTR_R=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,HTML_SELF_CLOSING_ELEMENT_R=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,INTERPOLATION_R=/^\{.*\}$/,LINK_AUTOLINK_BARE_URL_R=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,LINK_AUTOLINK_MAILTO_R=/^<([^ >]+@[^ >]+)>/,LINK_AUTOLINK_R=/^<([^ >]+:\/[^ >]+)>/,LIST_ITEM_END_R=/ *\n+$/,LIST_LOOKBEHIND_R=/(?:^|\n)( *)$/,CAPTURE_LETTER_AFTER_HYPHEN=/-([a-z])?/gi,NP_TABLE_R=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,PARAGRAPH_R=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,REFERENCE_IMAGE_OR_LINK=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,REFERENCE_IMAGE_R=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,REFERENCE_LINK_R=/^\[([^\]]*)\] ?\[([^\]]*)\]/,SQUARE_BRACKETS_R=/(\[|\])/g,SHOULD_RENDER_AS_BLOCK_R=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,TAB_R=/\t/g,TABLE_SEPARATOR_R=/^ *\| */,TABLE_TRIM_PIPES=/(^ *\||\| *$)/g,TABLE_CELL_END_TRIM=/ *$/,TABLE_CENTER_ALIGN=/^ *:-+: *$/,TABLE_LEFT_ALIGN=/^ *:-+ *$/,TABLE_RIGHT_ALIGN=/^ *-+: *$/,TEXT_BOLD_R=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,TEXT_EMPHASIZED_R=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,TEXT_STRIKETHROUGHED_R=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,TEXT_ESCAPED_R=/^\\([^0-9A-Za-z\s])/,TEXT_PLAIN_R=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,TRIM_NEWLINES_AND_TRAILING_WHITESPACE_R=/(^\n+|\n+$|\s+$)/g,HTML_LEFT_TRIM_AMOUNT_R=/^([ \t]*)/,UNESCAPE_URL_R=/\\([^0-9A-Z\s])/gi,LIST_BULLET='(?:[*+-]|\\d+\\.)',LIST_ITEM_PREFIX='( *)((?:[*+-]|\\d+\\.)) +',LIST_ITEM_PREFIX_R=/^( *)((?:[*+-]|\d+\.)) +/,LIST_ITEM_R=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,LIST_R=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,LINK_INSIDE='(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*',LINK_HREF_AND_TITLE='\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+[\'"]([\\s\\S]*?)[\'"])?\\s*',LINK_R=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,IMAGE_R=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,BLOCK_SYNTAXES=[BLOCKQUOTE_R,CODE_BLOCK_R,CODE_BLOCK_FENCED_R,HEADING_R,HEADING_SETEXT_R,HTML_BLOCK_ELEMENT_R,HTML_COMMENT_R,HTML_SELF_CLOSING_ELEMENT_R,LIST_ITEM_R,LIST_R,NP_TABLE_R,PARAGRAPH_R];function containsBlockSyntax(a){return BLOCK_SYNTAXES.some(function(b){return b.test(a)})}function slugify(a){return a.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,'a').replace(/[çÇ]/g,'c').replace(/[ðÐ]/g,'d').replace(/[ÈÉÊËéèêë]/g,'e').replace(/[ÏïÎîÍíÌì]/g,'i').replace(/[Ññ]/g,'n').replace(/[øØœŒÕõÔôÓóÒò]/g,'o').replace(/[ÜüÛûÚúÙù]/g,'u').replace(/[ŸÿÝý]/g,'y').replace(/[^a-z0-9- ]/gi,'').replace(/ /gi,'-').toLowerCase()}function parseTableAlignCapture(a){if(TABLE_RIGHT_ALIGN.test(a))return'right';return TABLE_CENTER_ALIGN.test(a)?'center':TABLE_LEFT_ALIGN.test(a)?'left':null}function parseTableRow(a,b,c){var d=c.inTable;c.inTable=!0;var e=b(a.trim(),c);c.inTable=d;var f=[[]];return e.forEach(function(a,b){a.type==='tableSeparator'?b!==0&&b!==e.length-1&&f.push([]):(a.type==='text'&&(e[b+1]==null||e[b+1].type==='tableSeparator')&&(a.content=a.content.replace(TABLE_CELL_END_TRIM,'')),f[f.length-1].push(a))}),f}function parseTableAlign(a){var b=a.replace(TABLE_TRIM_PIPES,'').split('|');return b.map(parseTableAlignCapture)}function parseTableCells(a,b,c){var d=a.trim().split('\n');return d.map(function(a){return parseTableRow(a,b,c)})}function parseTable(a,b,c){c.inline=!0;var d=parseTableRow(a[1],b,c),e=parseTableAlign(a[2],b,c),f=parseTableCells(a[3],b,c);return c.inline=!1,{align:e,cells:f,header:d,type:'table'}}function getTableStyle(a,b){return a.align[b]==null?{}:{textAlign:a.align[b]}}function normalizeAttributeKey(a){var b=a.indexOf('-');return b!==-1&&a.match(HTML_CUSTOM_ATTR_R)===null&&(a=a.replace(CAPTURE_LETTER_AFTER_HYPHEN,function(a,b){return b.toUpperCase()})),a}function attributeValueToJSXPropValue(a,b){return a==='style'?b.split(/;\s?/).reduce(function(a,b){var c=b.slice(0,b.indexOf(':')),d=c.replace(/(-[a-z])/g,function(a){return a[1].toUpperCase()});return a[d]=b.slice(c.length+1).trim(),a},{}):a==='href'?sanitizeUrl(b):(b.match(INTERPOLATION_R)&&(b=b.slice(1,b.length-1)),b==='true'||b!=='false'&&b)}function normalizeWhitespace(a){return a.replace(CR_NEWLINE_R,'\n').replace(FORMFEED_R,'').replace(TAB_R,'    ')}function parserFor(a){function b(d,e){for(var f=[],g='';d;)for(var l=0;l<c.length;){var h=c[l],j=a[h],k=j.match(d,e,g);if(k){var i=k[0];d=d.substring(i.length);var m=j.parse(k,b,e);m.type==null&&(m.type=h),f.push(m),g=i;break}l++}return f}var c=Object.keys(a);return process.env.NODE_ENV!=='production'&&c.forEach(function(b){var c=a[b].order;process.env.NODE_ENV==='production'||typeof c=='number'&&isFinite(c)||console.warn('markdown-to-jsx: Invalid order for rule `'+b+'`: '+c)}),c.sort(function(b,c){var d=a[b].order,e=a[c].order;return d===e?b<c?-1:1:d-e}),function(a,c){return b(normalizeWhitespace(a),c)}}function inlineRegex(a){return function(b,c){return c.inline?a.exec(b):null}}function simpleInlineRegex(a){return function(b,c){return c.inline||c.simple?a.exec(b):null}}function blockRegex(a){return function(b,c){return c.inline||c.simple?null:a.exec(b)}}function anyScopeRegex(a){return function(b){return a.exec(b)}}function reactFor(a){return function b(c,d){if(d=d||{},Array.isArray(c)){for(var e=d.key,f=[],g=!1,h=0;h<c.length;h++){d.key=h;var j=b(c[h],d),k=typeof j=='string';k&&g?f[f.length-1]+=j:f.push(j),g=k}return d.key=e,f}return a(c,b,d)}}function sanitizeUrl(a){try{var b=decodeURIComponent(a);if(b.match(/^\s*javascript:/i))return process.env.NODE_ENV!=='production'&&console.warn('Anchor URL contains an unsafe JavaScript expression, it will not be rendered.',b),null}catch(b){return process.env.NODE_ENV!=='production'&&console.warn('Anchor URL could not be decoded due to malformed syntax or characters, it will not be rendered.',a),null}return a}function unescapeUrl(a){return a.replace(UNESCAPE_URL_R,'$1')}function parseInline(a,b,c){var d=c.inline||!1,e=c.simple||!1;c.inline=!0,c.simple=!0;var f=a(b,c);return c.inline=d,c.simple=e,f}function parseSimpleInline(a,b,c){var d=c.inline||!1,e=c.simple||!1;c.inline=!1,c.simple=!0;var f=a(b,c);return c.inline=d,c.simple=e,f}function parseBlock(a,b,c){return c.inline=!1,a(b+'\n\n',c)}function parseCaptureInline(a,b,c){return{content:parseInline(b,a[1],c)}}function captureNothing(){return{}}function renderNothing(){return null}function ruleOutput(a){return function(b,c,d){return a[b.type].react(b,c,d)}}function cx(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.filter(Boolean).join(' ')}function get(a,b,c){for(var d=a,e=b.split('.');e.length&&(d=d[e[0]],d!==void 0);)e.shift();return d||c}function getTag(a,b){var c=get(b,a);return c?typeof c=='function'||(typeof c=='undefined'?'undefined':_typeof(c))==='object'&&'render'in c?c:get(b,a+'.component',a):a}var PARSE_PRIORITY_MAX=1,PARSE_PRIORITY_HIGH=2,PARSE_PRIORITY_MED=3,PARSE_PRIORITY_LOW=4,PARSE_PRIORITY_MIN=5;export function compiler(a,b){function d(a,c){for(var d=get(b.overrides,a+'.props',{}),e=arguments.length,g=Array(e>2?e-2:0),h=2;h<e;h++)g[h-2]=arguments[h];return f.apply(void 0,[getTag(a,b.overrides),_extends({},c,d,{className:cx(c&&c.className,d.className)||void 0})].concat(g))}function c(a){var c=!1;b.forceInline?c=!0:!b.forceBlock&&(c=SHOULD_RENDER_AS_BLOCK_R.test(a)===!1);var e=k(j(c?a:a.replace(TRIM_NEWLINES_AND_TRAILING_WHITESPACE_R,'')+'\n\n',{inline:c})),f=void 0;return e.length>1?f=c?d('span',{key:'outer'},e):d('div',{key:'outer'},e):e.length===1?(f=e[0],typeof f=='string'&&(f=d('span',{key:'outer'},f))):f=d('span',{key:'outer'}),f}function e(a){var b=a.match(ATTR_EXTRACTOR_R);return b?b.reduce(function(a,b,d){var e=b.indexOf('=');if(e!==-1){var f=normalizeAttributeKey(b.slice(0,e)).trim(),g=unquote(b.slice(e+1).trim()),h=ATTRIBUTE_TO_JSX_PROP_MAP[f]||f,i=a[h]=attributeValueToJSXPropValue(f,g);(HTML_BLOCK_ELEMENT_R.test(i)||HTML_SELF_CLOSING_ELEMENT_R.test(i))&&(a[h]=React.cloneElement(c(i.trim()),{key:d}))}else b!=='style'&&(a[ATTRIBUTE_TO_JSX_PROP_MAP[b]||b]=!0);return a},{}):void 0}b=b||{},b.overrides=b.overrides||{},b.slugify=b.slugify||slugify,b.namedCodesToUnicode=b.namedCodesToUnicode?_extends({},namedCodesToUnicode,b.namedCodesToUnicode):namedCodesToUnicode;var f=b.createElement||React.createElement;if(process.env.NODE_ENV!=='production'){if(typeof a!='string')throw new Error('markdown-to-jsx: the first argument must be\n                             a string');if(Object.prototype.toString.call(b.overrides)!=='[object Object]')throw new Error('markdown-to-jsx: options.overrides (second argument property) must be\n                             undefined or an object literal with shape:\n                             {\n                                htmltagname: {\n                                    component: string|ReactComponent(optional),\n                                    props: object(optional)\n                                }\n                             }')}var g=[],h={},i={blockQuote:{match:blockRegex(BLOCKQUOTE_R),order:PARSE_PRIORITY_HIGH,parse:function d(a,b,c){return{content:b(a[0].replace(BLOCKQUOTE_TRIM_LEFT_MULTILINE_R,''),c)}},react:function e(a,b,c){return d('blockquote',{key:c.key},b(a.content,c))}},breakLine:{match:anyScopeRegex(BREAK_LINE_R),order:PARSE_PRIORITY_HIGH,parse:captureNothing,react:function e(a,b,c){return d('br',{key:c.key})}},breakThematic:{match:blockRegex(BREAK_THEMATIC_R),order:PARSE_PRIORITY_HIGH,parse:captureNothing,react:function e(a,b,c){return d('hr',{key:c.key})}},codeBlock:{match:blockRegex(CODE_BLOCK_R),order:PARSE_PRIORITY_MAX,parse:function c(a){var b=a[0].replace(/^ {4}/gm,'').replace(/\n+$/,'');return{content:b,lang:void 0}},react:function e(a,b,c){return d('pre',{key:c.key},d('code',{className:a.lang?'lang-'+a.lang:''},a.content))}},codeFenced:{match:blockRegex(CODE_BLOCK_FENCED_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return{content:a[3],lang:a[2]||void 0,type:'codeBlock'}}},codeInline:{match:simpleInlineRegex(CODE_INLINE_R),order:PARSE_PRIORITY_LOW,parse:function b(a){return{content:a[2]}},react:function e(a,b,c){return d('code',{key:c.key},a.content)}},footnote:{match:blockRegex(FOOTNOTE_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return g.push({footnote:a[2],identifier:a[1]}),{}},react:renderNothing},footnoteReference:{match:inlineRegex(FOOTNOTE_REFERENCE_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return{content:a[1],target:'#'+a[1]}},react:function e(a,b,c){return d('a',{key:c.key,href:sanitizeUrl(a.target)},d('sup',{key:c.key},a.content))}},gfmTask:{match:inlineRegex(GFM_TASK_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return{completed:a[1].toLowerCase()==='x'}},react:function e(a,b,c){return d('input',{checked:a.completed,key:c.key,readOnly:!0,type:'checkbox'})}},heading:{match:blockRegex(HEADING_R),order:PARSE_PRIORITY_HIGH,parse:function e(a,c,d){return{content:parseInline(c,a[2],d),id:b.slugify(a[2]),level:a[1].length}},react:function f(a,b,c){var e='h'+a.level;return d(e,{id:a.id,key:c.key},b(a.content,c))}},headingSetext:{match:blockRegex(HEADING_SETEXT_R),order:PARSE_PRIORITY_MAX,parse:function d(a,b,c){return{content:parseInline(b,a[1],c),level:a[2]==='='?1:2,type:'heading'}}},htmlComment:{match:anyScopeRegex(HTML_COMMENT_R),order:PARSE_PRIORITY_HIGH,parse:function a(){return{}},react:renderNothing},image:{match:simpleInlineRegex(IMAGE_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return{alt:a[1],target:unescapeUrl(a[2]),title:a[3]}},react:function e(a,b,c){return d('img',{key:c.key,alt:a.alt||void 0,title:a.title||void 0,src:sanitizeUrl(a.target)})}},link:{match:inlineRegex(LINK_R,!1),order:PARSE_PRIORITY_LOW,parse:function d(a,b,c){return{content:parseSimpleInline(b,a[1],c),target:unescapeUrl(a[2]),title:a[3]}},react:function e(a,b,c){return d('a',{key:c.key,href:sanitizeUrl(a.target),title:a.title},b(a.content,c))}},linkAngleBraceStyleDetector:{match:inlineRegex(LINK_AUTOLINK_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return{content:[{content:a[1],type:'text'}],target:a[1],type:'link'}}},linkBareUrlDetector:{match:inlineRegex(LINK_AUTOLINK_BARE_URL_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return{content:[{content:a[1],type:'text'}],target:a[1],title:void 0,type:'link'}}},linkMailtoDetector:{match:inlineRegex(LINK_AUTOLINK_MAILTO_R),order:PARSE_PRIORITY_MAX,parse:function d(a){var b=a[1],c=a[1];return AUTOLINK_MAILTO_CHECK_R.test(c)||(c='mailto:'+c),{content:[{content:b.replace('mailto:',''),type:'text'}],target:c,type:'link'}}},list:{match:function f(a,b,c){var d=LIST_LOOKBEHIND_R.exec(c),e=b._list||!b.inline;return d&&e?(a=d[1]+a,LIST_R.exec(a)):null},order:PARSE_PRIORITY_HIGH,parse:function j(a,b,c){var d=a[2],e=d.length>1,f=e?+d:void 0,g=a[0].replace(BLOCK_END_R,'\n').match(LIST_ITEM_R),h=!1,i=g.map(function(a,d){var e=LIST_ITEM_PREFIX_R.exec(a)[0].length,f=new RegExp('^ {1,'+e+'}','gm'),i=a.replace(f,'').replace(LIST_ITEM_PREFIX_R,''),j=d===g.length-1,k=i.indexOf('\n\n')!==-1,l=k||j&&h;h=l;var m=c.inline,n=c._list;c._list=!0;var o;l?(c.inline=!1,o=i.replace(LIST_ITEM_END_R,'\n\n')):(c.inline=!0,o=i.replace(LIST_ITEM_END_R,''));var p=b(o,c);return c.inline=m,c._list=n,p});return{items:i,ordered:e,start:f}},react:function f(a,b,c){var e=a.ordered?'ol':'ul';return d(e,{key:c.key,start:a.start},a.items.map(function(a,e){return d('li',{key:e},b(a,c))}))}},newlineCoalescer:{match:blockRegex(CONSECUTIVE_NEWLINE_R),order:PARSE_PRIORITY_LOW,parse:captureNothing,react:function a(){return'\n'}},paragraph:{match:blockRegex(PARAGRAPH_R),order:PARSE_PRIORITY_LOW,parse:parseCaptureInline,react:function e(a,b,c){return d('p',{key:c.key},b(a.content,c))}},ref:{match:inlineRegex(REFERENCE_IMAGE_OR_LINK),order:PARSE_PRIORITY_MAX,parse:function b(a){return h[a[1]]={target:a[2],title:a[4]},{}},react:renderNothing},refImage:{match:simpleInlineRegex(REFERENCE_IMAGE_R),order:PARSE_PRIORITY_MAX,parse:function b(a){return{alt:a[1]||void 0,ref:a[2]}},react:function e(a,b,c){return d('img',{key:c.key,alt:a.alt,src:sanitizeUrl(h[a.ref].target),title:h[a.ref].title})}},refLink:{match:inlineRegex(REFERENCE_LINK_R),order:PARSE_PRIORITY_MAX,parse:function d(a,b,c){return{content:b(a[1],c),fallbackContent:b(a[0].replace(SQUARE_BRACKETS_R,'\\$1'),c),ref:a[2]}},react:function e(a,b,c){return h[a.ref]?d('a',{key:c.key,href:sanitizeUrl(h[a.ref].target),title:h[a.ref].title},b(a.content,c)):d('span',{key:c.key},b(a.fallbackContent,c))}},table:{match:blockRegex(NP_TABLE_R),order:PARSE_PRIORITY_HIGH,parse:parseTable,react:function f(a,b,e){return d('table',{key:e.key},d('thead',null,d('tr',null,a.header.map(function(c,f){return d('th',{key:f,style:getTableStyle(a,f)},b(c,e))}))),d('tbody',null,a.cells.map(function(c,f){return d('tr',{key:f},c.map(function(f,g){return d('td',{key:g,style:getTableStyle(a,g)},b(f,e))}))})))}},tableSeparator:{match:function c(a,b){return b.inTable?TABLE_SEPARATOR_R.exec(a):null},order:PARSE_PRIORITY_HIGH,parse:function a(){return{type:'tableSeparator'}},react:function a(){return' | '}},text:{match:anyScopeRegex(TEXT_PLAIN_R),order:PARSE_PRIORITY_MIN,parse:function c(a){return{content:a[0].replace(HTML_CHAR_CODE_R,function(a,c){return b.namedCodesToUnicode[c]?b.namedCodesToUnicode[c]:a})}},react:function b(a){return a.content}},textBolded:{match:simpleInlineRegex(TEXT_BOLD_R),order:PARSE_PRIORITY_MED,parse:function d(a,b,c){return{content:b(a[2],c)}},react:function e(a,b,c){return d('strong',{key:c.key},b(a.content,c))}},textEmphasized:{match:simpleInlineRegex(TEXT_EMPHASIZED_R),order:PARSE_PRIORITY_LOW,parse:function d(a,b,c){return{content:b(a[2],c)}},react:function e(a,b,c){return d('em',{key:c.key},b(a.content,c))}},textEscaped:{match:simpleInlineRegex(TEXT_ESCAPED_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return{content:a[1],type:'text'}}},textStrikethroughed:{match:simpleInlineRegex(TEXT_STRIKETHROUGHED_R),order:PARSE_PRIORITY_LOW,parse:parseCaptureInline,react:function e(a,b,c){return d('del',{key:c.key},b(a.content,c))}}};b.disableParsingRawHTML!==!0&&(i.htmlBlock={match:anyScopeRegex(HTML_BLOCK_ELEMENT_R),order:PARSE_PRIORITY_HIGH,parse:function l(a,b,c){var d=a[3].match(HTML_LEFT_TRIM_AMOUNT_R),f=d[1],g=new RegExp('^'+f,'gm'),h=a[3].replace(g,''),i=containsBlockSyntax(h)?parseBlock:parseInline,j=a[1].toLowerCase(),k=DO_NOT_PROCESS_HTML_ELEMENTS.indexOf(j)!==-1;return{attrs:e(a[2]),content:k?a[3]:i(b,h,c),noInnerParse:k,tag:k?j:a[1]}},react:function e(a,b,c){return d(a.tag,_extends({key:c.key},a.attrs),a.noInnerParse?a.content:b(a.content,c))}},i.htmlSelfClosing={match:anyScopeRegex(HTML_SELF_CLOSING_ELEMENT_R),order:PARSE_PRIORITY_HIGH,parse:function b(a){return{attrs:e(a[2]||''),tag:a[1]}},react:function e(a,b,c){return d(a.tag,_extends({},a.attrs,{key:c.key}))}});var j=parserFor(i),k=reactFor(ruleOutput(i)),l=c(function(a){return a.replace(/<!--[\s\S]*?(?:-->)/g,'')}(a));return g.length&&l.props.children.push(d('footer',{key:'footer'},g.map(function(a){return d('div',{id:a.identifier,key:a.identifier},a.identifier,k(j(a.footnote,{inline:!0})))}))),l}export default function Markdown(a){var b=a.children,c=a.options,d=_objectWithoutProperties(a,['children','options']);return React.cloneElement(compiler(b,c),d)}if(process.env.NODE_ENV!=='production'){var PropTypes=require('prop-types');Markdown.propTypes={children:PropTypes.string.isRequired,options:PropTypes.object}}

//# sourceMappingURL=esm.js.map