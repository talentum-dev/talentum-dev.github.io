"use strict";(self.webpackChunktraining_app=self.webpackChunktraining_app||[]).push([[240],{1240:(C,i,n)=>{n.r(i),n.d(i,{amplify_federated_buttons:()=>c,amplify_strike:()=>o});var t=n(4600),f=n(3531),h=n(4052),e=n(4932),u=(n(6289),n(4102)),g=n(9571);const c=class{constructor(a){(0,t.r)(this,a),this.authState=h.A.SignIn,this.federated={},this.handleAuthStateChange=g.d}componentWillLoad(){if(!e.g||"function"!=typeof e.g.configure)throw new Error(u.N);const{oauth:a={}}=e.g.configure();a.domain?this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),a):a.awsCognito&&(this.federated.oauthConfig=Object.assign(Object.assign({},this.federated.oauthConfig),a.awsCognito)),a.auth0&&(this.federated.auth0Config=Object.assign(Object.assign({},this.federated.auth0Config),a.auth0))}render(){if(!Object.values(h.A).includes(this.authState)||(0,f.xb)(this.federated))return null;const{amazonClientId:a,auth0Config:s,facebookAppId:l,googleClientId:d,oauthConfig:r}=this.federated;return(0,t.h)("div",null,d&&(0,t.h)("div",null,(0,t.h)("amplify-google-button",{clientId:d,handleAuthStateChange:this.handleAuthStateChange})),l&&(0,t.h)("div",null,(0,t.h)("amplify-facebook-button",{appId:l,handleAuthStateChange:this.handleAuthStateChange})),a&&(0,t.h)("div",null,(0,t.h)("amplify-amazon-button",{clientId:a,handleAuthStateChange:this.handleAuthStateChange})),r&&(0,t.h)("div",null,(0,t.h)("amplify-oauth-button",{config:r})),s&&(0,t.h)("div",null,(0,t.h)("amplify-auth0-button",{config:s,handleAuthStateChange:this.handleAuthStateChange})))}},o=class{constructor(a){(0,t.r)(this,a)}render(){return(0,t.h)("span",{class:"strike-content"},(0,t.h)("slot",null))}};o.style=".sc-amplify-strike-h{--color:var(--amplify-grey);--border-color:var(--amplify-light-grey);--content-background:var(--amplify-white);display:block;width:100%;text-align:center;border-bottom:1px solid var(--border-color);line-height:0.1em;margin:32px 0;color:var(--color)}.strike-content.sc-amplify-strike{background:var(--content-background);padding:0 25px;font-size:var(--amplify-text-sm);font-weight:500}"}}]);