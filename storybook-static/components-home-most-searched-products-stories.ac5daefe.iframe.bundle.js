"use strict";(self.webpackChunkhardware_price_tracker=self.webpackChunkhardware_price_tracker||[]).push([[608],{"./src/components/home/most-searched-products.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>most_searched_products_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.0.3_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96_fpy4of67lljj5mmtr3hdr3usnm/node_modules/next/dist/compiled/react/jsx-runtime.js"),carousel=__webpack_require__("./src/components/shadcn-ui/ui/carousel.tsx"),image_indisponible=__webpack_require__("./src/assets/image-indisponible.svg"),product_card=__webpack_require__("./src/components/product/ui/cards/product-card.tsx"),most_searched_products_context=__webpack_require__("./src/contexts/most-searched-products-context.tsx"),empties=__webpack_require__("./src/components/home/empties.tsx");function MostSearchedProducts(){const{mostSearchedProductsContextList}=(0,most_searched_products_context.c)();return 0===mostSearchedProductsContextList.length?(0,jsx_runtime.jsx)(empties.S,{variant:"search"}):(0,jsx_runtime.jsxs)(carousel.FN,{className:"w-full md:max-w-full max-w-[80%]",children:[(0,jsx_runtime.jsx)(carousel.Wk,{className:"-ml-1 gap-8 ",children:mostSearchedProductsContextList.map(((product,index)=>(0,jsx_runtime.jsx)(carousel.A7,{className:"pl-1 md:basis-1/2 lg:basis-1/4",children:(0,jsx_runtime.jsx)(product_card.A,{productImageUrl:product.suggetionProductImageUrl||image_indisponible.A,productPrice:product.suggestionProductPrice,productTitle:product.suggestionTitle,store:product.suggestionProductStore,productId:product.suggestionProductId})},index)))}),(0,jsx_runtime.jsx)(carousel.Q8,{}),(0,jsx_runtime.jsx)(carousel.Oj,{})]})}MostSearchedProducts.__docgenInfo={description:"",methods:[],displayName:"MostSearchedProducts"};const most_searched_products_stories={title:"Componentes/home/most-searched-produtcs",component:MostSearchedProducts,parameters:{nextjs:{appDirectory:!0}},decorators:[Story=>(0,jsx_runtime.jsx)(most_searched_products_context.J,{children:Story()})]},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./src/contexts/most-searched-products-context.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>MostSearchedProductProvider,c:()=>useMostSearchedProducts});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.0.3_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96_fpy4of67lljj5mmtr3hdr3usnm/node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.0.3_@babel+core@7.26.0_react-dom@19.0.0-rc-66855b96-20241106_react@19.0.0-rc-66855b96_fpy4of67lljj5mmtr3hdr3usnm/node_modules/next/dist/compiled/react/index.js");const MostSearchedProductsContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(void 0);function MostSearchedProductProvider({children}){const[mostSearchedProductsContextList,setMostSearchedProductsContextList]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{!function loadRecentlyViewedProducts(){const recentlyViewedProductsData=localStorage.getItem("@mostSearchedProductsContextList");recentlyViewedProductsData&&setMostSearchedProductsContextList(JSON.parse(recentlyViewedProductsData))}()}),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MostSearchedProductsContext.Provider,{value:{mostSearchedProductsContextList,addProductInMostSearchedProductsContextList:function addProductInMostSearchedProductsContextList(product){if(mostSearchedProductsContextList.some((p=>p.suggestionProductId===product.suggestionProductId))){const updatedList=[product,...mostSearchedProductsContextList.filter((p=>p.suggestionProductId!==product.suggestionProductId))];return setMostSearchedProductsContextList(updatedList),void localStorage.setItem("@mostSearchedProductsContextList",JSON.stringify(updatedList))}const updatedList=[product,...mostSearchedProductsContextList].slice(0,10);setMostSearchedProductsContextList(updatedList),localStorage.setItem("@mostSearchedProductsContextList",JSON.stringify(updatedList))}},children})}const useMostSearchedProducts=()=>{const context=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(MostSearchedProductsContext);if(!context)throw new Error("useMostSearchedProducts must be used within an MostSearchedProductProvider");return context};MostSearchedProductProvider.__docgenInfo={description:"",methods:[],displayName:"MostSearchedProductProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}}}}]);