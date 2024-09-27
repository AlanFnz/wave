"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[44262],{"./node_modules/@react-aria/focus/dist/FocusScope.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n1:()=>$9bf71ea28793e738$export$20e40289641fbbb6,C7:()=>$9bf71ea28793e738$export$c5251b9e124bf29,N$:()=>$9bf71ea28793e738$export$2d6ec8fc375ceafa,Pu:()=>$9bf71ea28793e738$export$1258395f99bf9cbf});var focusSafely=__webpack_require__("./node_modules/@react-aria/focus/dist/focusSafely.mjs"),domHelpers=__webpack_require__("./node_modules/@react-aria/utils/dist/domHelpers.mjs");function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element,childElement){return"#comment"!==element.nodeName&&function $645f2e67b85a24c9$var$isStyleVisible(element){const windowObject=(0,domHelpers.m)(element);if(!(element instanceof windowObject.HTMLElement||element instanceof windowObject.SVGElement))return!1;let{display,visibility}=element.style,isVisible="none"!==display&&"hidden"!==visibility&&"collapse"!==visibility;if(isVisible){const{getComputedStyle}=element.ownerDocument.defaultView;let{display:computedDisplay,visibility:computedVisibility}=getComputedStyle(element);isVisible="none"!==computedDisplay&&"hidden"!==computedVisibility&&"collapse"!==computedVisibility}return isVisible}(element)&&function $645f2e67b85a24c9$var$isAttributeVisible(element,childElement){return!element.hasAttribute("hidden")&&!element.hasAttribute("data-react-aria-prevent-focus")&&("DETAILS"!==element.nodeName||!childElement||"SUMMARY"===childElement.nodeName||element.hasAttribute("open"))}(element,childElement)&&(!element.parentElement||$645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement,element))}var useLayoutEffect=__webpack_require__("./node_modules/@react-aria/utils/dist/useLayoutEffect.mjs"),react=__webpack_require__("./node_modules/react/index.js");const $9bf71ea28793e738$var$FocusContext=react.createContext(null),$9bf71ea28793e738$var$RESTORE_FOCUS_EVENT="react-aria-focus-scope-restore";let $9bf71ea28793e738$var$activeScope=null;function $9bf71ea28793e738$export$20e40289641fbbb6(props){let{children,contain,restoreFocus,autoFocus}=props,startRef=(0,react.useRef)(null),endRef=(0,react.useRef)(null),scopeRef=(0,react.useRef)([]),{parentNode}=(0,react.useContext)($9bf71ea28793e738$var$FocusContext)||{},node=(0,react.useMemo)((()=>new $9bf71ea28793e738$var$TreeNode({scopeRef})),[scopeRef]);(0,useLayoutEffect.N)((()=>{let parent=parentNode||$9bf71ea28793e738$export$d06fae2ee68b101e.root;if($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef)&&$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope,parent.scopeRef)){let activeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);activeNode&&(parent=activeNode)}parent.addChild(node),$9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node)}),[node,parentNode]),(0,useLayoutEffect.N)((()=>{let node=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);node&&(node.contain=!!contain)}),[contain]),(0,useLayoutEffect.N)((()=>{var _startRef_current;let node=null===(_startRef_current=startRef.current)||void 0===_startRef_current?void 0:_startRef_current.nextSibling,nodes=[],stopPropagation=e=>e.stopPropagation();for(;node&&node!==endRef.current;)nodes.push(node),node.addEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT,stopPropagation),node=node.nextSibling;return scopeRef.current=nodes,()=>{for(let node of nodes)node.removeEventListener($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT,stopPropagation)}}),[children]),function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef,restore,contain){(0,useLayoutEffect.N)((()=>{if(restore||contain)return;let scope=scopeRef.current;const ownerDocument=(0,domHelpers.T)(scope?scope[0]:void 0);let onFocus=e=>{let target=e.target;$9bf71ea28793e738$var$isElementInScope(target,scopeRef.current)?$9bf71ea28793e738$var$activeScope=scopeRef:$9bf71ea28793e738$var$isElementInAnyScope(target)||($9bf71ea28793e738$var$activeScope=null)};return ownerDocument.addEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.addEventListener("focusin",onFocus,!1))),()=>{ownerDocument.removeEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.removeEventListener("focusin",onFocus,!1)))}}),[scopeRef,restore,contain])}(scopeRef,restoreFocus,contain),function $9bf71ea28793e738$var$useFocusContainment(scopeRef,contain){let focusedNode=(0,react.useRef)(void 0),raf=(0,react.useRef)(void 0);(0,useLayoutEffect.N)((()=>{let scope=scopeRef.current;if(!contain)return void(raf.current&&(cancelAnimationFrame(raf.current),raf.current=void 0));const ownerDocument=(0,domHelpers.T)(scope?scope[0]:void 0);let onKeyDown=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!$9bf71ea28793e738$var$shouldContainFocus(scopeRef)||e.isComposing)return;let focusedElement=ownerDocument.activeElement,scope=scopeRef.current;if(!scope||!$9bf71ea28793e738$var$isElementInScope(focusedElement,scope))return;let walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable:!0},scope);if(!focusedElement)return;walker.currentNode=focusedElement;let nextElement=e.shiftKey?walker.previousNode():walker.nextNode();nextElement||(walker.currentNode=e.shiftKey?scope[scope.length-1].nextElementSibling:scope[0].previousElementSibling,nextElement=e.shiftKey?walker.previousNode():walker.nextNode()),e.preventDefault(),nextElement&&$9bf71ea28793e738$var$focusElement(nextElement,!0)},onFocus=e=>{$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope,scopeRef)||!$9bf71ea28793e738$var$isElementInScope(e.target,scopeRef.current)?$9bf71ea28793e738$var$shouldContainFocus(scopeRef)&&!$9bf71ea28793e738$var$isElementInChildScope(e.target,scopeRef)?focusedNode.current?focusedNode.current.focus():$9bf71ea28793e738$var$activeScope&&$9bf71ea28793e738$var$activeScope.current&&$9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current):$9bf71ea28793e738$var$shouldContainFocus(scopeRef)&&(focusedNode.current=e.target):($9bf71ea28793e738$var$activeScope=scopeRef,focusedNode.current=e.target)},onBlur=e=>{raf.current&&cancelAnimationFrame(raf.current),raf.current=requestAnimationFrame((()=>{var _focusedNode_current;ownerDocument.activeElement&&$9bf71ea28793e738$var$shouldContainFocus(scopeRef)&&!$9bf71ea28793e738$var$isElementInChildScope(ownerDocument.activeElement,scopeRef)&&($9bf71ea28793e738$var$activeScope=scopeRef,ownerDocument.body.contains(e.target)?(focusedNode.current=e.target,null===(_focusedNode_current=focusedNode.current)||void 0===_focusedNode_current||_focusedNode_current.focus()):$9bf71ea28793e738$var$activeScope.current&&$9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current))}))};return ownerDocument.addEventListener("keydown",onKeyDown,!1),ownerDocument.addEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.addEventListener("focusin",onFocus,!1))),null==scope||scope.forEach((element=>element.addEventListener("focusout",onBlur,!1))),()=>{ownerDocument.removeEventListener("keydown",onKeyDown,!1),ownerDocument.removeEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.removeEventListener("focusin",onFocus,!1))),null==scope||scope.forEach((element=>element.removeEventListener("focusout",onBlur,!1)))}}),[scopeRef,contain]),(0,useLayoutEffect.N)((()=>()=>{raf.current&&cancelAnimationFrame(raf.current)}),[raf])}(scopeRef,contain),function $9bf71ea28793e738$var$useRestoreFocus(scopeRef,restoreFocus,contain){const nodeToRestoreRef=(0,react.useRef)("undefined"!=typeof document?(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0).activeElement:null);(0,useLayoutEffect.N)((()=>{let scope=scopeRef.current;const ownerDocument=(0,domHelpers.T)(scope?scope[0]:void 0);if(!restoreFocus||contain)return;let onFocus=()=>{$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope,scopeRef)||!$9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement,scopeRef.current)||($9bf71ea28793e738$var$activeScope=scopeRef)};return ownerDocument.addEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.addEventListener("focusin",onFocus,!1))),()=>{ownerDocument.removeEventListener("focusin",onFocus,!1),null==scope||scope.forEach((element=>element.removeEventListener("focusin",onFocus,!1)))}}),[scopeRef,contain]),(0,useLayoutEffect.N)((()=>{const ownerDocument=(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0);if(!restoreFocus)return;let onKeyDown=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!$9bf71ea28793e738$var$shouldContainFocus(scopeRef)||e.isComposing)return;let focusedElement=ownerDocument.activeElement;if(!$9bf71ea28793e738$var$isElementInScope(focusedElement,scopeRef.current))return;let treeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);if(!treeNode)return;let nodeToRestore=treeNode.nodeToRestore,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body,{tabbable:!0});walker.currentNode=focusedElement;let nextElement=e.shiftKey?walker.previousNode():walker.nextNode();if(nodeToRestore&&ownerDocument.body.contains(nodeToRestore)&&nodeToRestore!==ownerDocument.body||(nodeToRestore=void 0,treeNode.nodeToRestore=void 0),(!nextElement||!$9bf71ea28793e738$var$isElementInScope(nextElement,scopeRef.current))&&nodeToRestore){walker.currentNode=nodeToRestore;do{nextElement=e.shiftKey?walker.previousNode():walker.nextNode()}while($9bf71ea28793e738$var$isElementInScope(nextElement,scopeRef.current));e.preventDefault(),e.stopPropagation(),nextElement?$9bf71ea28793e738$var$focusElement(nextElement,!0):$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)?$9bf71ea28793e738$var$focusElement(nodeToRestore,!0):focusedElement.blur()}};return contain||ownerDocument.addEventListener("keydown",onKeyDown,!0),()=>{contain||ownerDocument.removeEventListener("keydown",onKeyDown,!0)}}),[scopeRef,restoreFocus,contain]),(0,useLayoutEffect.N)((()=>{const ownerDocument=(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0);if(!restoreFocus)return;let treeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);var _nodeToRestoreRef_current;return treeNode?(treeNode.nodeToRestore=null!==(_nodeToRestoreRef_current=nodeToRestoreRef.current)&&void 0!==_nodeToRestoreRef_current?_nodeToRestoreRef_current:void 0,()=>{let treeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);if(!treeNode)return;let nodeToRestore=treeNode.nodeToRestore;if(restoreFocus&&nodeToRestore&&($9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement,scopeRef.current)||ownerDocument.activeElement===ownerDocument.body&&function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef){let scope=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);for(;scope&&scope.scopeRef!==scopeRef;){if(scope.nodeToRestore)return!1;scope=scope.parent}return(null==scope?void 0:scope.scopeRef)===scopeRef}(scopeRef))){let clonedTree=$9bf71ea28793e738$export$d06fae2ee68b101e.clone();requestAnimationFrame((()=>{if(ownerDocument.activeElement===ownerDocument.body){let treeNode=clonedTree.getTreeNode(scopeRef);for(;treeNode;){if(treeNode.nodeToRestore&&treeNode.nodeToRestore.isConnected)return void $9bf71ea28793e738$var$restoreFocusToElement(treeNode.nodeToRestore);treeNode=treeNode.parent}for(treeNode=clonedTree.getTreeNode(scopeRef);treeNode;){if(treeNode.scopeRef&&treeNode.scopeRef.current&&$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)){return void $9bf71ea28793e738$var$restoreFocusToElement($9bf71ea28793e738$var$getFirstInScope(treeNode.scopeRef.current,!0))}treeNode=treeNode.parent}}}))}}):void 0}),[scopeRef,restoreFocus])}(scopeRef,restoreFocus,contain),function $9bf71ea28793e738$var$useAutoFocus(scopeRef,autoFocus){const autoFocusRef=react.useRef(autoFocus);(0,react.useEffect)((()=>{if(autoFocusRef.current){$9bf71ea28793e738$var$activeScope=scopeRef;!$9bf71ea28793e738$var$isElementInScope((0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0).activeElement,$9bf71ea28793e738$var$activeScope.current)&&scopeRef.current&&$9bf71ea28793e738$var$focusFirstInScope(scopeRef.current)}autoFocusRef.current=!1}),[scopeRef])}(scopeRef,autoFocus),(0,react.useEffect)((()=>{const activeElement=(0,domHelpers.T)(scopeRef.current?scopeRef.current[0]:void 0).activeElement;let scope=null;if($9bf71ea28793e738$var$isElementInScope(activeElement,scopeRef.current)){for(let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())node.scopeRef&&$9bf71ea28793e738$var$isElementInScope(activeElement,node.scopeRef.current)&&(scope=node);scope===$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)&&($9bf71ea28793e738$var$activeScope=scope.scopeRef)}}),[scopeRef]),(0,useLayoutEffect.N)((()=>()=>{var _focusScopeTree_getTreeNode_parent,_focusScopeTree_getTreeNode,_focusScopeTree_getTreeNode_parent_scopeRef;let parentScope=null!==(_focusScopeTree_getTreeNode_parent_scopeRef=null===(_focusScopeTree_getTreeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef))||void 0===_focusScopeTree_getTreeNode||null===(_focusScopeTree_getTreeNode_parent=_focusScopeTree_getTreeNode.parent)||void 0===_focusScopeTree_getTreeNode_parent?void 0:_focusScopeTree_getTreeNode_parent.scopeRef)&&void 0!==_focusScopeTree_getTreeNode_parent_scopeRef?_focusScopeTree_getTreeNode_parent_scopeRef:null;scopeRef!==$9bf71ea28793e738$var$activeScope&&!$9bf71ea28793e738$var$isAncestorScope(scopeRef,$9bf71ea28793e738$var$activeScope)||parentScope&&!$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope)||($9bf71ea28793e738$var$activeScope=parentScope),$9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef)}),[scopeRef]);let focusManager=(0,react.useMemo)((()=>function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef){return{focusNext(opts={}){let scope=scopeRef.current,{from,tabbable,wrap,accept}=opts,node=from||(0,domHelpers.T)(scope[0]).activeElement,sentinel=scope[0].previousElementSibling,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable,accept},scope);walker.currentNode=$9bf71ea28793e738$var$isElementInScope(node,scope)?node:sentinel;let nextNode=walker.nextNode();return!nextNode&&wrap&&(walker.currentNode=sentinel,nextNode=walker.nextNode()),nextNode&&$9bf71ea28793e738$var$focusElement(nextNode,!0),nextNode},focusPrevious(opts={}){let scope=scopeRef.current,{from,tabbable,wrap,accept}=opts,node=from||(0,domHelpers.T)(scope[0]).activeElement,sentinel=scope[scope.length-1].nextElementSibling,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable,accept},scope);walker.currentNode=$9bf71ea28793e738$var$isElementInScope(node,scope)?node:sentinel;let previousNode=walker.previousNode();return!previousNode&&wrap&&(walker.currentNode=sentinel,previousNode=walker.previousNode()),previousNode&&$9bf71ea28793e738$var$focusElement(previousNode,!0),previousNode},focusFirst(opts={}){let scope=scopeRef.current,{tabbable,accept}=opts,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable,accept},scope);walker.currentNode=scope[0].previousElementSibling;let nextNode=walker.nextNode();return nextNode&&$9bf71ea28793e738$var$focusElement(nextNode,!0),nextNode},focusLast(opts={}){let scope=scopeRef.current,{tabbable,accept}=opts,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope),{tabbable,accept},scope);walker.currentNode=scope[scope.length-1].nextElementSibling;let previousNode=walker.previousNode();return previousNode&&$9bf71ea28793e738$var$focusElement(previousNode,!0),previousNode}}}(scopeRef)),[]),value=(0,react.useMemo)((()=>({focusManager,parentNode:node})),[node,focusManager]);return react.createElement($9bf71ea28793e738$var$FocusContext.Provider,{value},react.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:startRef}),children,react.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:endRef}))}const $9bf71ea28793e738$var$focusableElements=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],$9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR=$9bf71ea28793e738$var$focusableElements.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR=$9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');function $9bf71ea28793e738$var$getScopeRoot(scope){return scope[0].parentElement}function $9bf71ea28793e738$var$shouldContainFocus(scopeRef){let scope=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);for(;scope&&scope.scopeRef!==scopeRef;){if(scope.contain)return!1;scope=scope.parent}return!0}function $9bf71ea28793e738$var$isElementInAnyScope(element){return $9bf71ea28793e738$var$isElementInChildScope(element)}function $9bf71ea28793e738$var$isElementInScope(element,scope){return!!element&&(!!scope&&scope.some((node=>node.contains(element))))}function $9bf71ea28793e738$var$isElementInChildScope(element,scope=null){if(element instanceof Element&&element.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:s}of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)))if(s&&$9bf71ea28793e738$var$isElementInScope(element,s.current))return!0;return!1}function $9bf71ea28793e738$export$1258395f99bf9cbf(element){return $9bf71ea28793e738$var$isElementInChildScope(element,$9bf71ea28793e738$var$activeScope)}function $9bf71ea28793e738$var$isAncestorScope(ancestor,scope){var _focusScopeTree_getTreeNode;let parent=null===(_focusScopeTree_getTreeNode=$9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))||void 0===_focusScopeTree_getTreeNode?void 0:_focusScopeTree_getTreeNode.parent;for(;parent;){if(parent.scopeRef===ancestor)return!0;parent=parent.parent}return!1}function $9bf71ea28793e738$var$focusElement(element,scroll=!1){if(null==element||scroll){if(null!=element)try{element.focus()}catch(err){}}else try{(0,focusSafely.l)(element)}catch(err){}}function $9bf71ea28793e738$var$getFirstInScope(scope,tabbable=!0){let sentinel=scope[0].previousElementSibling,scopeRoot=$9bf71ea28793e738$var$getScopeRoot(scope),walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot,{tabbable},scope);walker.currentNode=sentinel;let nextNode=walker.nextNode();return tabbable&&!nextNode&&(scopeRoot=$9bf71ea28793e738$var$getScopeRoot(scope),walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot,{tabbable:!1},scope),walker.currentNode=sentinel,nextNode=walker.nextNode()),nextNode}function $9bf71ea28793e738$var$focusFirstInScope(scope,tabbable=!0){$9bf71ea28793e738$var$focusElement($9bf71ea28793e738$var$getFirstInScope(scope,tabbable))}function $9bf71ea28793e738$var$restoreFocusToElement(node){node.dispatchEvent(new CustomEvent($9bf71ea28793e738$var$RESTORE_FOCUS_EVENT,{bubbles:!0,cancelable:!0}))&&$9bf71ea28793e738$var$focusElement(node)}function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root,opts,scope){let selector=(null==opts?void 0:opts.tabbable)?$9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR:$9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR,walker=(0,domHelpers.T)(root).createTreeWalker(root,NodeFilter.SHOW_ELEMENT,{acceptNode(node){var _opts_from;return(null==opts||null===(_opts_from=opts.from)||void 0===_opts_from?void 0:_opts_from.contains(node))?NodeFilter.FILTER_REJECT:!node.matches(selector)||!$645f2e67b85a24c9$export$e989c0fffaa6b27a(node)||scope&&!$9bf71ea28793e738$var$isElementInScope(node,scope)||(null==opts?void 0:opts.accept)&&!opts.accept(node)?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT}});return(null==opts?void 0:opts.from)&&(walker.currentNode=opts.from),walker}function $9bf71ea28793e738$export$c5251b9e124bf29(ref,defaultOptions={}){return{focusNext(opts={}){let root=ref.current;if(!root)return null;let{from,tabbable=defaultOptions.tabbable,wrap=defaultOptions.wrap,accept=defaultOptions.accept}=opts,node=from||(0,domHelpers.T)(root).activeElement,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(root,{tabbable,accept});root.contains(node)&&(walker.currentNode=node);let nextNode=walker.nextNode();return!nextNode&&wrap&&(walker.currentNode=root,nextNode=walker.nextNode()),nextNode&&$9bf71ea28793e738$var$focusElement(nextNode,!0),nextNode},focusPrevious(opts=defaultOptions){let root=ref.current;if(!root)return null;let{from,tabbable=defaultOptions.tabbable,wrap=defaultOptions.wrap,accept=defaultOptions.accept}=opts,node=from||(0,domHelpers.T)(root).activeElement,walker=$9bf71ea28793e738$export$2d6ec8fc375ceafa(root,{tabbable,accept});if(!root.contains(node)){let next=$9bf71ea28793e738$var$last(walker);return next&&$9bf71ea28793e738$var$focusElement(next,!0),null!=next?next:null}walker.currentNode=node;let previousNode=walker.previousNode();if(!previousNode&&wrap){walker.currentNode=root;let lastNode=$9bf71ea28793e738$var$last(walker);if(!lastNode)return null;previousNode=lastNode}return previousNode&&$9bf71ea28793e738$var$focusElement(previousNode,!0),null!=previousNode?previousNode:null},focusFirst(opts=defaultOptions){let root=ref.current;if(!root)return null;let{tabbable=defaultOptions.tabbable,accept=defaultOptions.accept}=opts,nextNode=$9bf71ea28793e738$export$2d6ec8fc375ceafa(root,{tabbable,accept}).nextNode();return nextNode&&$9bf71ea28793e738$var$focusElement(nextNode,!0),nextNode},focusLast(opts=defaultOptions){let root=ref.current;if(!root)return null;let{tabbable=defaultOptions.tabbable,accept=defaultOptions.accept}=opts,next=$9bf71ea28793e738$var$last($9bf71ea28793e738$export$2d6ec8fc375ceafa(root,{tabbable,accept}));return next&&$9bf71ea28793e738$var$focusElement(next,!0),null!=next?next:null}}}function $9bf71ea28793e738$var$last(walker){let next,last;do{last=walker.lastChild(),last&&(next=last)}while(last);return next}class $9bf71ea28793e738$var$Tree{get size(){return this.fastMap.size}getTreeNode(data){return this.fastMap.get(data)}addTreeNode(scopeRef,parent,nodeToRestore){let parentNode=this.fastMap.get(null!=parent?parent:null);if(!parentNode)return;let node=new $9bf71ea28793e738$var$TreeNode({scopeRef});parentNode.addChild(node),node.parent=parentNode,this.fastMap.set(scopeRef,node),nodeToRestore&&(node.nodeToRestore=nodeToRestore)}addNode(node){this.fastMap.set(node.scopeRef,node)}removeTreeNode(scopeRef){if(null===scopeRef)return;let node=this.fastMap.get(scopeRef);if(!node)return;let parentNode=node.parent;for(let current of this.traverse())current!==node&&node.nodeToRestore&&current.nodeToRestore&&node.scopeRef&&node.scopeRef.current&&$9bf71ea28793e738$var$isElementInScope(current.nodeToRestore,node.scopeRef.current)&&(current.nodeToRestore=node.nodeToRestore);let children=node.children;parentNode&&(parentNode.removeChild(node),children.size>0&&children.forEach((child=>parentNode&&parentNode.addChild(child)))),this.fastMap.delete(node.scopeRef)}*traverse(node=this.root){if(null!=node.scopeRef&&(yield node),node.children.size>0)for(let child of node.children)yield*this.traverse(child)}clone(){var _node_parent;let newTree=new $9bf71ea28793e738$var$Tree;var _node_parent_scopeRef;for(let node of this.traverse())newTree.addTreeNode(node.scopeRef,null!==(_node_parent_scopeRef=null===(_node_parent=node.parent)||void 0===_node_parent?void 0:_node_parent.scopeRef)&&void 0!==_node_parent_scopeRef?_node_parent_scopeRef:null,node.nodeToRestore);return newTree}constructor(){this.fastMap=new Map,this.root=new $9bf71ea28793e738$var$TreeNode({scopeRef:null}),this.fastMap.set(null,this.root)}}class $9bf71ea28793e738$var$TreeNode{addChild(node){this.children.add(node),node.parent=this}removeChild(node){this.children.delete(node),node.parent=void 0}constructor(props){this.children=new Set,this.contain=!1,this.scopeRef=props.scopeRef}}let $9bf71ea28793e738$export$d06fae2ee68b101e=new $9bf71ea28793e738$var$Tree}}]);