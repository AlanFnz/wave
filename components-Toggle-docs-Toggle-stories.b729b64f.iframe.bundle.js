"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[81781],{"./src/components/Toggle/docs/Toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,InitiallyToggledOn:()=>InitiallyToggledOn,WithError:()=>WithError,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});__webpack_require__("./node_modules/react/index.js");var extractProps=__webpack_require__("./src/utils/extractProps.ts"),Text=__webpack_require__("./src/components/Text/Text.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),cssVariables=__webpack_require__("./src/utils/cssVariables.ts");const Slide=styled_components_browser_esm.ZP.div`
    width: 2.25rem;
    height: 1rem;

    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    background: ${props=>(0,cssVariables.wp)(props.disabled?"background-element-disabled-faded":"background-element-disabled-default")};
    display: inline-block;
    border-radius: 0.5rem;
    position: relative;
    margin-right: 0.5rem;

    &::before {
        content: '';
        position: absolute;
        top: -0.125rem;
        left: 0;
        width: 1.25rem;
        height: 1.25rem;
        background: ${props=>(0,cssVariables.wp)(props.disabled?"background-element-disabled-faded":"background-element-neutral-default")};
        border-radius: 50%;
        box-shadow: 0 0 0.0625rem 0 rgba(0, 0, 0, 0.05), 0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, 0.4);
        transform: translateX(0);
        transition: transform 200ms;
    }

    &::after {
        content: '';
        display: block;
        border-radius: 0.5rem;
        width: 1rem;
        height: 1rem;
        background-color: ${props=>props.disabled?(0,cssVariables.wp)("background-element-disabled-faded"):props.error?(0,cssVariables.wp)("background-element-danger-default"):(0,cssVariables.wp)("background-element-accent-emphasized")};
        transition: width 200ms;
    }
`;try{Slide.displayName="Slide",Slide.__docgenInfo={description:"",displayName:"Slide",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Slide.tsx#Slide"]={docgenInfo:Slide.__docgenInfo,name:"Slide",path:"src/components/Toggle/Slide.tsx#Slide"})}catch(__react_docgen_typescript_loader_error){}const Input=styled_components_browser_esm.ZP.input`
    height: 0;
    width: 0;
    margin: 0;
    visibility: hidden;

    &:checked + ${Slide}::before {
        transform: translateX(calc(100% - 0.25rem));
    }

    &:checked + ${Slide}::after {
        width: 2.25rem;
    }
`;try{Input.displayName="Input",Input.__docgenInfo={description:"",displayName:"Input",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/components/Toggle/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}var index_esm=__webpack_require__("./node_modules/styled-system/dist/index.esm.js");const Label=styled_components_browser_esm.ZP.label`
    display: flex;
    align-items: center;
    cursor: ${props=>props.disabled?"not-allowed":"pointer"};
    user-select: none;

    ${index_esm.e6}
`;try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement>"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"src/components/Toggle/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=props=>{const{classNameProps,restProps:withoutClassName}=(0,extractProps.BY)(props),{marginProps,restProps}=(0,extractProps.c2)(withoutClassName),{disabled,error,label,...rest}=restProps;let dynamicLabel=label;return"string"==typeof label&&(dynamicLabel=(0,jsx_runtime.jsx)(Text.x,{children:label})),(0,jsx_runtime.jsxs)(Label,{disabled,...classNameProps,...marginProps,children:[(0,jsx_runtime.jsx)(Input,{disabled,error,...rest,type:"checkbox"}),(0,jsx_runtime.jsx)(Slide,{disabled,error}),dynamicLabel]})};Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{label:{defaultValue:null,description:"Provide a label for the input which will be shown next to the toggle",name:"label",required:!1,type:{name:"ReactNode"}},error:{defaultValue:null,description:"Add styles to show the toggle has errors",name:"error",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}const Toggle_stories={title:"Components/Toggle",component:Toggle,argTypes:{ref:{description:"Reference to the checkbox DOM element",control:!1},label:{control:"text"}}},Default={},InitiallyToggledOn={args:{defaultChecked:!0}},WithError={args:{defaultChecked:!0,error:!0}},WithLabel={args:{label:"Turn on the light"}},Disabled={args:{disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},InitiallyToggledOn.parameters={...InitiallyToggledOn.parameters,docs:{...InitiallyToggledOn.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultChecked: true\n  }\n}",...InitiallyToggledOn.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    defaultChecked: true,\n    error: true\n  }\n}",...WithError.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Turn on the light'\n  }\n}",...WithLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","InitiallyToggledOn","WithError","WithLabel","Disabled"]},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/essentials/theme.ts"),_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/themeGet.ts"),_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/cssVariables.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.span.attrs({theme:_essentials_theme__WEBPACK_IMPORTED_MODULE_3__.r})`
    color: ${function determineTextColor(props){const{primary,secondary,disabled}=props;return disabled?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-disabled"):secondary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-neutral-emphasized"):primary?(0,_utils_cssVariables__WEBPACK_IMPORTED_MODULE_1__.wp)("foreground-primary"):"inherit"}};
    font-size: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fontSizes.2")};
    font-family: ${(0,_utils_themeGet__WEBPACK_IMPORTED_MODULE_4__.U)("fonts.normal")};
    line-height: 1.4;
    margin: 0;

    ${(0,styled_system__WEBPACK_IMPORTED_MODULE_0__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_0__.e6,styled_system__WEBPACK_IMPORTED_MODULE_0__.JB,styled_system__WEBPACK_IMPORTED_MODULE_0__.Ue,styled_system__WEBPACK_IMPORTED_MODULE_0__.I8,styled_system__WEBPACK_IMPORTED_MODULE_0__.yd)}
`;try{Text.displayName="Text",Text.__docgenInfo={description:"",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},fontWeight:{defaultValue:{value:"normal"},description:"The font-weight property specifies the weight (or boldness) of the font.",name:"fontWeight",required:!1,type:{name:'ResponsiveValue<"bold" | "normal" | "semibold", Required<Theme<TLengthStyledSystem>>>'}},primary:{defaultValue:null,description:"Enforce primary color",name:"primary",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"Adjust color to display a disabled text element",name:"disabled",required:!1,type:{name:"boolean"}},secondary:{defaultValue:null,description:"Adjust color to indicate secondary information",name:"secondary",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/Text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/extractProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function removeUndefinedKeys(object){Object.keys(object).forEach((key=>void 0===object[key]?delete object[key]:""))}__webpack_require__.d(__webpack_exports__,{BY:()=>extractClassNameProps,Jy:()=>extractWidthProps,Qb:()=>extractHeightProps,c2:()=>extractWrapperMarginProps});const extractClassNameProps=props=>{const{className,...restProps}=props,classNameProps={className};return removeUndefinedKeys(classNameProps),{classNameProps,restProps}},extractWidthProps=props=>{const{width,...restProps}=props,widthProps={width};return removeUndefinedKeys(widthProps),{widthProps,restProps}},extractHeightProps=props=>{const{height,...restProps}=props,heightProps={height};return removeUndefinedKeys(heightProps),{heightProps,restProps}},extractWrapperMarginProps=props=>{const{m,margin,marginTop,marginRight,marginBottom,marginLeft,mt,mr,mb,ml,mx,my,marginX,marginY,...restProps}=props,marginProps={m,margin,marginTop,marginRight,marginBottom,marginLeft,marginX,marginY,mt,mr,mb,ml,mx,my};return removeUndefinedKeys(marginProps),{marginProps,restProps}}},"./src/utils/themeGet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>get});var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/theme-get/dist/index.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_essentials_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/essentials/theme.ts");const get=key=>(0,_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_0__.Z)(key,(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.U2)(_essentials_theme__WEBPACK_IMPORTED_MODULE_2__.r,key))},"./node_modules/@styled-system/theme-get/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _styled_system_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@styled-system/core/dist/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function themeGet(path,fallback){return void 0===fallback&&(fallback=null),function(props){return(0,_styled_system_core__WEBPACK_IMPORTED_MODULE_0__.U2)(props.theme,path,fallback)}}}}]);
//# sourceMappingURL=components-Toggle-docs-Toggle-stories.b729b64f.iframe.bundle.js.map