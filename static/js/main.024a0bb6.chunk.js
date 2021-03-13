(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports={loaderContainer:"Loader_loaderContainer__3qPAd"}},27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),l=(a(27),a(11)),i=a(4),s=a(5),u=a(7),h=a(6),d=a(1),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChangeQuery=function(t){return e.setState({query:t.currentTarget.value})},e.handleSubmitForm=function(t){t.preventDefault();var a=e.state.query;a&&(e.props.onSubmitForm(a),e.setState({query:""}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmitForm,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",value:e,autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeQuery})]})})}}]),a}(n.Component);function g(e){var t=e.previewUrl,a=e.imageUrl,n=e.onClickImage;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(e){return n(e)},children:Object(d.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image","data-url":a})})}function p(e){var t=e.galleryPhotos,a=e.onOpenModal;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.largeImageURL,r=e.webformatURL;return Object(d.jsx)(g,{previewUrl:r,imageUrl:n,onClickImage:a},t)}))})}var j=a(10),b=a.n(j);b.a.defaults.baseURL="https://pixabay.com/api";var f={API_KEY:"19700503-b2d39d1f98216d71a2eb0aa47",fetchGallery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return b.a.get("/?q=".concat(e,"&page=").concat(t,"&key=").concat(this.API_KEY,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})).then((function(e){return e.map((function(e){return{id:e.id,largeImageURL:e.largeImageURL,webformatURL:e.webformatURL}}))}))}};function y(e){var t=e.onLoadMore;return Object(d.jsx)("button",{className:"Button",type:"button",onClick:function(){return t()},children:"load more"})}var v=a(22),O=document.querySelector("#modal-root"),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onCloseModal()},e.handleBackDropClick=function(t){t.currentTarget===t.target&&e.props.onCloseModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this;return Object(o.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackDropClick,children:Object(d.jsxs)("div",{className:"Modal",children:[Object(d.jsx)("div",{className:"ModalButtonWrapper",onClick:function(){return e.props.onCloseModal()},children:Object(d.jsx)(v.a,{color:"white",size:"25px"})}),Object(d.jsx)("img",{src:this.props.imageUrl,alt:""})]})}),O)}}]),a}(n.Component),w=a(20),C=a.n(w),S=(a(67),a(21)),k=a.n(S),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{className:k.a.loaderContainer,children:Object(d.jsx)(C.a,{visible:this.props.isLoading,type:"BallTriangle",color:"#00BFFF",height:50,width:50,timeout:0})})}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],page:1,searchQuery:"",showModal:!1,modalImageUrl:"",isLoading:!1,quantity:8},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.fetchGallery=function(){var t=e.state,a=t.page,n=t.searchQuery,r=t.quantity;e.setState({isLoading:!0}),f.fetchGallery(n,a,r).then((function(t){e.setState((function(e){var a=e.gallery,n=e.page;return{gallery:[].concat(Object(l.a)(a),Object(l.a)(t)),page:n+1}}))})).finally((function(){return e.setState({isLoading:!1})}))},e.handleLoadMoreBtn=function(){e.fetchGallery(),e.setState((function(e){return{page:e.page+1}}))},e.handleOpenModal=function(t){var a=t.target.dataset.url;e.toggleModal(),e.setState({modalImageUrl:a})},e.onChangeQuery=function(t){e.setState({searchQuery:t,gallery:[],page:1})},e.scrollToNextPage=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.page,r=a.searchQuery,o=a.quantity;t.searchQuery!==r&&this.fetchGallery(),t.page!==n&&this.scrollToNextPage(),t.quantity!==o&&r&&this.fetchGallery()}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.showModal,n=e.modalImageUrl,r=e.isLoading;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{onSubmitForm:this.onChangeQuery}),Object(d.jsxs)("main",{children:[Object(d.jsx)(p,{galleryPhotos:t,onOpenModal:this.handleOpenModal}),Object(d.jsx)(M,{isLoading:r}),t.length>0&&!r&&Object(d.jsx)(y,{onLoadMore:this.fetchGallery}),a&&Object(d.jsx)(x,{imageUrl:n,onCloseModal:this.toggleModal})]})]})}}]),a}(n.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.024a0bb6.chunk.js.map