import{n as c,e as a,o as d,f as p,g as e,p as n,m as u,u as f,q as _,w}from"./vendor.499e631e.js";import{a as r}from"./index.37a00aaa.js";const g={class:"m-3 flex flex-row items-center justify-center"},v=c({__name:"Login",setup(x){function l(t){let o=new FormData(t.target);r.login.submit({email:o.get("email"),password:o.get("password")})}return(t,o)=>{const s=a("Input"),i=a("Button"),m=a("Card");return d(),p("div",g,[e(m,{title:"Login to your FrappeUI App!",class:"w-full max-w-md mt-4"},{default:n(()=>[u("form",{class:"flex flex-col space-y-2 w-full",onSubmit:w(l,["prevent"])},[e(s,{required:"",name:"email",type:"text",placeholder:"johndoe@email.com",label:"User ID"}),e(s,{required:"",name:"password",type:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022",label:"Password"}),e(i,{loading:f(r).login.loading,variant:"solid"},{default:n(()=>[_("Login")]),_:1},8,["loading"])],32)]),_:1})])}}});export{v as default};
