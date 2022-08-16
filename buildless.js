var bold = "bold";
var semibold = "640";
var light = "200";

var buildlessConfig = {
};

function rgba(r,g,b,a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function rgb(r,g,b) {
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function hsl(h,s,l) {
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

window.onload = () => {
    buildless.build();
    setInterval(buildless.update, 0);
};

var buildless = {
    tags: ["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],
    attributes: ["target","download","ping","rel","relList","hreflang","type","referrerPolicy","text","coords","charset","name","rev","shape","origin","protocol","username","password","host","hostname","port","pathname","search","hash","href","toString","hrefTranslate","title","lang","translate","dir","hidden","accessKey","draggable","spellcheck","autocapitalize","contentEditable","isContentEditable","inputMode","offsetParent","offsetTop","offsetLeft","offsetWidth","offsetHeight","innerText","outerText","onbeforexrselect","onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextlost","oncontextmenu","oncontextrestored","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformdata","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onsecuritypolicyviolation","onseeked","onseeking","onselect","onslotchange","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","onwheel","onauxclick","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","onselectstart","onselectionchange","onanimationend","onanimationiteration","onanimationstart","ontransitionrun","ontransitionstart","ontransitionend","ontransitioncancel","oncopy","oncut","onpaste","dataset","nonce","autofocus","tabIndex","style","attachInternals","blur","click","focus","inert","enterKeyHint","virtualKeyboardPolicy","onpointerrawupdate","onbeforematch","namespaceURI","prefix","localName","tagName","id","className","classList","slot","attributes","shadowRoot","part","assignedSlot","innerHTML","outerHTML","scrollTop","scrollLeft","scrollWidth","scrollHeight","clientTop","clientLeft","clientWidth","clientHeight","attributeStyleMap","onbeforecopy","onbeforecut","onbeforepaste","onsearch","elementTiming","onfullscreenchange","onfullscreenerror","onwebkitfullscreenchange","onwebkitfullscreenerror","role","ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDescription","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRelevant","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText","children","firstElementChild","lastElementChild","childElementCount","previousElementSibling","nextElementSibling","after","animate","append","attachShadow","before","closest","computedStyleMap","getAttribute","getAttributeNS","getAttributeNames","getAttributeNode","getAttributeNodeNS","getBoundingClientRect","getClientRects","getElementsByClassName","getElementsByTagName","getElementsByTagNameNS","getInnerHTML","hasAttribute","hasAttributeNS","hasAttributes","hasPointerCapture","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText","matches","prepend","querySelector","querySelectorAll","releasePointerCapture","remove","removeAttribute","removeAttributeNS","removeAttributeNode","replaceChildren","replaceWith","requestFullscreen","requestPointerLock","scroll","scrollBy","scrollIntoView","scrollIntoViewIfNeeded","scrollTo","setAttribute","setAttributeNS","setAttributeNode","setAttributeNodeNS","setPointerCapture","toggleAttribute","webkitMatchesSelector","webkitRequestFullScreen","webkitRequestFullscreen","getAnimations","nodeType","nodeName","baseURI","isConnected","ownerDocument","parentNode","parentElement","childNodes","firstChild","lastChild","previousSibling","nextSibling","nodeValue","textContent","ELEMENT_NODE","ATTRIBUTE_NODE","TEXT_NODE","CDATA_SECTION_NODE","ENTITY_REFERENCE_NODE","ENTITY_NODE","PROCESSING_INSTRUCTION_NODE","COMMENT_NODE","DOCUMENT_NODE","DOCUMENT_TYPE_NODE","DOCUMENT_FRAGMENT_NODE","NOTATION_NODE","DOCUMENT_POSITION_DISCONNECTED","DOCUMENT_POSITION_PRECEDING","DOCUMENT_POSITION_FOLLOWING","DOCUMENT_POSITION_CONTAINS","DOCUMENT_POSITION_CONTAINED_BY","DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC","appendChild","cloneNode","compareDocumentPosition","contains","getRootNode","hasChildNodes","insertBefore","isDefaultNamespace","isEqualNode","isSameNode","lookupNamespaceURI","lookupPrefix","normalize","removeChild","replaceChild","addEventListener","dispatchEvent","removeEventListener","alt","noHref","error","src","currentSrc","crossOrigin","networkState","preload","buffered","readyState","seeking","currentTime","duration","paused","defaultPlaybackRate","playbackRate","played","seekable","ended","autoplay","loop","controls","controlsList","volume","muted","defaultMuted","textTracks","webkitAudioDecodedByteCount","webkitVideoDecodedByteCount","onencrypted","onwaitingforkey","srcObject","NETWORK_EMPTY","NETWORK_IDLE","NETWORK_LOADING","NETWORK_NO_SOURCE","HAVE_NOTHING","HAVE_METADATA","HAVE_CURRENT_DATA","HAVE_FUTURE_DATA","HAVE_ENOUGH_DATA","addTextTrack","canPlayType","captureStream","load","pause","play","preservesPitch","sinkId","remote","disableRemotePlayback","setSinkId","cite","link","vLink","aLink","bgColor","background","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onmessageerror","onoffline","ononline","onpagehide","onpageshow","onpopstate","onrejectionhandled","onstorage","onunhandledrejection","onunload","onportalactivate","clear","disabled","form","formAction","formEnctype","formMethod","formNoValidate","formTarget","value","willValidate","validity","validationMessage","labels","checkValidity","reportValidity","setCustomValidity","width","height","getContext","toBlob","toDataURL","transferControlToOffscreen","align","span","ch","chOff","vAlign","options","dateTime","open","returnValue","close","show","showModal","compact","getSVGDocument","elements","acceptCharset","action","autocomplete","enctype","encoding","method","noValidate","length","requestSubmit","reset","submit","color","noShade","size","version","srcdoc","sandbox","allowFullscreen","contentDocument","contentWindow","csp","allow","featurePolicy","scrolling","frameBorder","longDesc","marginHeight","marginWidth","loading","allowPaymentRequest","srcset","sizes","useMap","isMap","naturalWidth","naturalHeight","complete","decoding","lowsrc","hspace","vspace","border","x","y","decode","fetchPriority","accept","defaultChecked","checked","dirName","files","indeterminate","list","max","maxLength","min","minLength","multiple","pattern","placeholder","readOnly","required","step","defaultValue","valueAsDate","valueAsNumber","selectionStart","selectionEnd","selectionDirection","webkitdirectory","incremental","select","setRangeText","setSelectionRange","stepDown","stepUp","webkitEntries","showPicker","htmlFor","control","media","as","imageSrcset","imageSizes","sheet","integrity","areas","httpEquiv","content","scheme","low","high","optimum","data","archive","code","declare","standby","codeBase","codeType","reversed","start","label","defaultSelected","selected","index","valueType","position","noModule","async","defer","event","selectedOptions","selectedIndex","add","item","namedItem","assign","assignedElements","assignedNodes","caption","tHead","tFoot","tBodies","rows","frame","rules","summary","cellPadding","cellSpacing","createCaption","createTBody","createTFoot","createTHead","deleteCaption","deleteRow","deleteTFoot","deleteTHead","insertRow","colSpan","rowSpan","headers","cellIndex","axis","noWrap","abbr","scope","cols","wrap","textLength","rowIndex","sectionRowIndex","cells","deleteCell","insertCell","kind","srclang","default","track","NONE","LOADING","LOADED","ERROR","videoWidth","videoHeight","poster","webkitDecodedFrameCount","webkitDroppedFrameCount","playsInline","webkitSupportsFullscreen","webkitDisplayingFullscreen","onenterpictureinpicture","onleavepictureinpicture","disablePictureInPicture","cancelVideoFrameCallback","requestVideoFrameCallback","getVideoPlaybackQuality","requestPictureInPicture","webkitEnterFullScreen","webkitEnterFullscreen","webkitExitFullScreen","webkitExitFullscreen"],
    styles: ["accentColor","additiveSymbols","alignContent","alignItems","alignSelf","alignmentBaseline","all","animation","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction","appRegion","appearance","ascentOverride","aspectRatio","backdropFilter","backfaceVisibility","background","backgroundAttachment","backgroundBlendMode","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundRepeatX","backgroundRepeatY","backgroundSize","basePalette","baselineShift","blockSize","border","borderBlock","borderBlockColor","borderBlockEnd","borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth","borderBlockStart","borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth","borderBlockStyle","borderBlockWidth","borderBottom","borderBottomColor","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStyle","borderBottomWidth","borderCollapse","borderColor","borderEndEndRadius","borderEndStartRadius","borderImage","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderInline","borderInlineColor","borderInlineEnd","borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth","borderInlineStart","borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth","borderInlineStyle","borderInlineWidth","borderLeft","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRadius","borderRight","borderRightColor","borderRightStyle","borderRightWidth","borderSpacing","borderStartEndRadius","borderStartStartRadius","borderStyle","borderTop","borderTopColor","borderTopLeftRadius","borderTopRightRadius","borderTopStyle","borderTopWidth","borderWidth","bottom","boxShadow","boxSizing","breakAfter","breakBefore","breakInside","bufferedRendering","captionSide","caretColor","clear","clip","clipPath","clipRule","color","colorInterpolation","colorInterpolationFilters","colorRendering","colorScheme","columnCount","columnFill","columnGap","columnRule","columnRuleColor","columnRuleStyle","columnRuleWidth","columnSpan","columnWidth","columns","contain","containIntrinsicBlockSize","containIntrinsicHeight","containIntrinsicInlineSize","containIntrinsicSize","containIntrinsicWidth","content","contentVisibility","counterIncrement","counterReset","counterSet","cursor","cx","cy","d","descentOverride","direction","display","dominantBaseline","emptyCells","fallback","fill","fillOpacity","fillRule","filter","flex","flexBasis","flexDirection","flexFlow","flexGrow","flexShrink","flexWrap","float","floodColor","floodOpacity","font","fontDisplay","fontFamily","fontFeatureSettings","fontKerning","fontOpticalSizing","fontPalette","fontSize","fontStretch","fontStyle","fontSynthesis","fontSynthesisSmallCaps","fontSynthesisStyle","fontSynthesisWeight","fontVariant","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariationSettings","fontWeight","forcedColorAdjust","gap","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnGap","gridColumnStart","gridGap","gridRow","gridRowEnd","gridRowGap","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","height","hyphens","imageOrientation","imageRendering","inherits","initialValue","inlineSize","inset","insetBlock","insetBlockEnd","insetBlockStart","insetInline","insetInlineEnd","insetInlineStart","isolation","justifyContent","justifyItems","justifySelf","left","letterSpacing","lightingColor","lineBreak","lineGapOverride","lineHeight","listStyle","listStyleImage","listStylePosition","listStyleType","margin","marginBlock","marginBlockEnd","marginBlockStart","marginBottom","marginInline","marginInlineEnd","marginInlineStart","marginLeft","marginRight","marginTop","marker","markerEnd","markerMid","markerStart","mask","maskType","maxBlockSize","maxHeight","maxInlineSize","maxWidth","maxZoom","minBlockSize","minHeight","minInlineSize","minWidth","minZoom","mixBlendMode","negative","objectFit","objectPosition","offset","offsetDistance","offsetPath","offsetRotate","opacity","order","orientation","orphans","outline","outlineColor","outlineOffset","outlineStyle","outlineWidth","overflow","overflowAnchor","overflowClipMargin","overflowWrap","overflowX","overflowY","overrideColors","overscrollBehavior","overscrollBehaviorBlock","overscrollBehaviorInline","overscrollBehaviorX","overscrollBehaviorY","pad","padding","paddingBlock","paddingBlockEnd","paddingBlockStart","paddingBottom","paddingInline","paddingInlineEnd","paddingInlineStart","paddingLeft","paddingRight","paddingTop","page","pageBreakAfter","pageBreakBefore","pageBreakInside","pageOrientation","paintOrder","perspective","perspectiveOrigin","placeContent","placeItems","placeSelf","pointerEvents","position","prefix","quotes","r","range","resize","right","rowGap","rubyPosition","rx","ry","scrollBehavior","scrollMargin","scrollMarginBlock","scrollMarginBlockEnd","scrollMarginBlockStart","scrollMarginBottom","scrollMarginInline","scrollMarginInlineEnd","scrollMarginInlineStart","scrollMarginLeft","scrollMarginRight","scrollMarginTop","scrollPadding","scrollPaddingBlock","scrollPaddingBlockEnd","scrollPaddingBlockStart","scrollPaddingBottom","scrollPaddingInline","scrollPaddingInlineEnd","scrollPaddingInlineStart","scrollPaddingLeft","scrollPaddingRight","scrollPaddingTop","scrollSnapAlign","scrollSnapStop","scrollSnapType","scrollbarGutter","shapeImageThreshold","shapeMargin","shapeOutside","shapeRendering","size","sizeAdjust","speak","speakAs","src","stopColor","stopOpacity","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","suffix","symbols","syntax","system","tabSize","tableLayout","textAlign","textAlignLast","textAnchor","textCombineUpright","textDecoration","textDecorationColor","textDecorationLine","textDecorationSkipInk","textDecorationStyle","textDecorationThickness","textEmphasis","textEmphasisColor","textEmphasisPosition","textEmphasisStyle","textIndent","textOrientation","textOverflow","textRendering","textShadow","textSizeAdjust","textTransform","textUnderlineOffset","textUnderlinePosition","top","touchAction","transform","transformBox","transformOrigin","transformStyle","transition","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction","unicodeBidi","unicodeRange","userSelect","userZoom","vectorEffect","verticalAlign","visibility","webkitAlignContent","webkitAlignItems","webkitAlignSelf","webkitAnimation","webkitAnimationDelay","webkitAnimationDirection","webkitAnimationDuration","webkitAnimationFillMode","webkitAnimationIterationCount","webkitAnimationName","webkitAnimationPlayState","webkitAnimationTimingFunction","webkitAppRegion","webkitAppearance","webkitBackfaceVisibility","webkitBackgroundClip","webkitBackgroundOrigin","webkitBackgroundSize","webkitBorderAfter","webkitBorderAfterColor","webkitBorderAfterStyle","webkitBorderAfterWidth","webkitBorderBefore","webkitBorderBeforeColor","webkitBorderBeforeStyle","webkitBorderBeforeWidth","webkitBorderBottomLeftRadius","webkitBorderBottomRightRadius","webkitBorderEnd","webkitBorderEndColor","webkitBorderEndStyle","webkitBorderEndWidth","webkitBorderHorizontalSpacing","webkitBorderImage","webkitBorderRadius","webkitBorderStart","webkitBorderStartColor","webkitBorderStartStyle","webkitBorderStartWidth","webkitBorderTopLeftRadius","webkitBorderTopRightRadius","webkitBorderVerticalSpacing","webkitBoxAlign","webkitBoxDecorationBreak","webkitBoxDirection","webkitBoxFlex","webkitBoxOrdinalGroup","webkitBoxOrient","webkitBoxPack","webkitBoxReflect","webkitBoxShadow","webkitBoxSizing","webkitClipPath","webkitColumnBreakAfter","webkitColumnBreakBefore","webkitColumnBreakInside","webkitColumnCount","webkitColumnGap","webkitColumnRule","webkitColumnRuleColor","webkitColumnRuleStyle","webkitColumnRuleWidth","webkitColumnSpan","webkitColumnWidth","webkitColumns","webkitFilter","webkitFlex","webkitFlexBasis","webkitFlexDirection","webkitFlexFlow","webkitFlexGrow","webkitFlexShrink","webkitFlexWrap","webkitFontFeatureSettings","webkitFontSmoothing","webkitHighlight","webkitHyphenateCharacter","webkitJustifyContent","webkitLineBreak","webkitLineClamp","webkitLocale","webkitLogicalHeight","webkitLogicalWidth","webkitMarginAfter","webkitMarginBefore","webkitMarginEnd","webkitMarginStart","webkitMask","webkitMaskBoxImage","webkitMaskBoxImageOutset","webkitMaskBoxImageRepeat","webkitMaskBoxImageSlice","webkitMaskBoxImageSource","webkitMaskBoxImageWidth","webkitMaskClip","webkitMaskComposite","webkitMaskImage","webkitMaskOrigin","webkitMaskPosition","webkitMaskPositionX","webkitMaskPositionY","webkitMaskRepeat","webkitMaskRepeatX","webkitMaskRepeatY","webkitMaskSize","webkitMaxLogicalHeight","webkitMaxLogicalWidth","webkitMinLogicalHeight","webkitMinLogicalWidth","webkitOpacity","webkitOrder","webkitPaddingAfter","webkitPaddingBefore","webkitPaddingEnd","webkitPaddingStart","webkitPerspective","webkitPerspectiveOrigin","webkitPerspectiveOriginX","webkitPerspectiveOriginY","webkitPrintColorAdjust","webkitRtlOrdering","webkitRubyPosition","webkitShapeImageThreshold","webkitShapeMargin","webkitShapeOutside","webkitTapHighlightColor","webkitTextCombine","webkitTextDecorationsInEffect","webkitTextEmphasis","webkitTextEmphasisColor","webkitTextEmphasisPosition","webkitTextEmphasisStyle","webkitTextFillColor","webkitTextOrientation","webkitTextSecurity","webkitTextSizeAdjust","webkitTextStroke","webkitTextStrokeColor","webkitTextStrokeWidth","webkitTransform","webkitTransformOrigin","webkitTransformOriginX","webkitTransformOriginY","webkitTransformOriginZ","webkitTransformStyle","webkitTransition","webkitTransitionDelay","webkitTransitionDuration","webkitTransitionProperty","webkitTransitionTimingFunction","webkitUserDrag","webkitUserModify","webkitUserSelect","webkitWritingMode","whiteSpace","widows","width","willChange","wordBreak","wordSpacing","wordWrap","writingMode","x","y","zIndex","zoom","cssText","length","parentRule","cssFloat","getPropertyPriority","getPropertyValue","item","removeProperty","setProperty"],
    build: function() {
        // remove getAttribute from attributes list
        var attrs = buildless.attributes;
        buildless.attributes = [];
        for (var i = 0; i < attrs.length; i++) {
            if (attrs[i] != "getAttribute") {
                buildless.attributes.push(attrs[i]);
            }
        }
        var styles = buildless.styles;
        buildless.styles = [];
        for (var i = 0; i < styles.length; i++) {
            if (styles[i] != "getAttribute") {
                buildless.styles.push(styles[i]);
            }
        }
        for (var i = 0; i < buildless.attributes.length; i++) {
            if (!BuildlessElement.prototype[buildless.attributes[i]]) {
                eval("BuildlessElement.prototype.%s% = function (val) {this.element.%s% = val;this.addHashData('%s%');this.addHashData(val);return this;}".split("%s%").join(buildless.attributes[i]));
            }
        }
        for (var i = 0; i < buildless.styles.length; i++) {
            if (!BuildlessElement.prototype[buildless.styles[i]]) {
                eval("BuildlessElement.prototype.%s% = function (val) {this.element.style.%s% = val;this.addHashData('%s%');this.addHashData(val);return this;}".split("%s%").join(buildless.styles[i]));
            }
        }
        /*for (var i = 0; i < buildless.tags.length; i++) {
            if (!window[buildless.tags[i]]) {
                window[buildless.tags[i]] = function() {
                    return new BuildlessElement(buildless.tags[i]);
                };
            }
        }*/
    },
    update: function () {
        for (var i in window) {
            var objects = document.getElementsByTagName(i);

            for (var j = 0; j < objects.length; j++) {
                if (typeof window[i] == 'function') {
                    // and because fuck logic we have whatever the hell this is
                    if (!objects[j].blockUpdates) {
                        if (!objects[j].data) {
                            objects[j].data = new ElementData();
                        }
    
                        objects[j].data.getAttribute = objects[j].getAttribute;
    
                        if (!objects[j].data.content) {
                            objects[j].data.content = objects[j].innerHTML;
                        }
    
                        var output = window[i](objects[j].data);
                    
                        if (output.element) {
                            if (buildlessConfig.showHashLogs) {
                                console.log(output.hash);
                            }
                            if (objects[j].output != output.hash) {
                                if (objects[j].firstChild != null) {
                                    objects[j].removeChild(objects[j].firstChild);
                                }
                                objects[j].appendChild(output.element);
                                objects[j].output = output.hash;
                            }
                        } else {
                            if (objects[j].output != output) {
                                objects[j].innerHTML = output;
                                objects[j].output = output;
                            }
                        }
                    }
                }
            }
        }
        buildless.foreverUpdate();
    },
    foreverPane1Position:0,
    foreverPane2Position:1,
    foreverPreviousState:null,
    foreverPane:false,
    state:{},
    foreverUpdate: function() {
        if (window.foreverConfig) {
            /*if (JSON.stringify(buildless.state) != buildless.foreverPreviousState) {
                buildless.foreverPreviousState = JSON.stringify(buildless.state);
                buildless.foreverPane = !buildless.foreverPane;
                if (buildless.foreverPane) {
                    foreverPane2Position = 1;    
                    document.getElementById("foreverPane1").blockUpdates = true;
                    document.getElementById("foreverPane2").blockUpdates = false;
                } else {
                    foreverPane1Position = 1;
                    document.getElementById("foreverPane1").blockUpdates = false;
                    document.getElementById("foreverPane2").blockUpdates = true;
                }
                console.log("transition! " + buildless.foreverPane);
            }
            if (!document.getElementById("foreverPane1")) {
                var foreverPane1 = document.createElement("AppView");
                foreverPane1.style.width = "100vw";
                foreverPane1.style.height = "100vh";
                foreverPane1.id = "foreverPane1";
                document.body.appendChild(foreverPane1);
            }
            if (!document.getElementById("foreverPane2")) {
                var foreverPane2 = document.createElement("AppView");
                foreverPane2.style.width = "100vw";
                foreverPane2.style.height = "100vh";
                foreverPane2.id = "foreverPane2";
                document.body.appendChild(foreverPane2);
            }
            var foreverPane1 = document.getElementById("foreverPane1");
            var foreverPane2 = document.getElementById("foreverPane2");
            foreverPane1.style.position = "fixed";
            foreverPane1.style.left = buildless.foreverPane1Position * innerWidth;
            foreverPane1.style.top = 0;
            foreverPane2.style.position = "fixed";
            foreverPane2.style.left = buildless.foreverPane2Position * innerWidth;
            foreverPane2.style.top = 0;
            if (buildless.foreverPane) {
                buildless.foreverPane1Position += (-1 - buildless.foreverPane1Position) * 0.01;
                buildless.foreverPane2Position += (0 - buildless.foreverPane2Position) * 0.01;
            } else {
                buildless.foreverPane1Position += (0 - buildless.foreverPane1Position) * 0.01;
                buildless.foreverPane2Position += (-1 - buildless.foreverPane2Position) * 0.01;
            }*/
            if (!buildless.screenPanel) {
                buildless.screenPanel = document.createElement("AppView");
                buildless.screenPanel.style.position = "fixed";
                buildless.screenPanel.style.left = 0;
                buildless.screenPanel.style.top = 0;
                buildless.screenPanel.style.width = "100vw";
                buildless.screenPanel.style.height = "100vh";
                buildless.screenPanel.style.backgroundColor = "white";
                buildless.screenPanel.data = buildless.state;
                buildless.screenPanel.style.overflow = "scroll";
                document.body.appendChild(buildless.screenPanel);
            }
        }
    },
    lerp: function (a,b,t) {
        return (a * (t - 1)) + (b * t);
    },
    hash: function (input) {
        var hash = 0, i, chr;
        if (input.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
}

class BuildlessElement {
    element;
    hash = "";

    constructor(type) {
        this.element = document.createElement(type);
        this.addHashData(type);
    }

    text(html) {
        this.element.innerText = html;
        this.addHashData("html");
        this.addHashData(html);
        return this;
    }

    color(color) {
        this.element.style.color = color;
        this.addHashData("colorhotfix");
        this.addHashData(color);
        return this;
    }

    children() {
        for (var i = 0; i < arguments.length; i++) {
            this.element.appendChild(arguments[i].element);
            this.addHashData("addChild");
            this.addHashData(arguments[i].hash);
        }
        return this;
    }

    initialize(data) {
        if (!this.element.data) {
            this.element.data = new ElementData();
        }
        Object.assign(this.element.data, data);
        this.addHashData("initialize");
        this.addHashData(JSON.stringify(data));
        return this;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash += key.charCodeAt(i);
        }
        return hash;
    }

    addHashData(data) {
        this.hash += data;
        //this.hash = this._hash(this.hash);
    }

    class(classList) {
        for (var i = 0; i < classList.split(" ").length; i++) {
            this.element.classList.add(classList.split(" ")[i]);
        }
        return this;
    }
}

class ElementData {

}

function element(type) {
    return new BuildlessElement(type);
}