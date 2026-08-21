import{r,u as ie,j as e,F as te,m as y,n as f,o as c,p as d,C as P,a as E,k as i,b as I,d as k,e as K,B as o,ac as re,ad as oe}from"./index-T58Qr6ut.js";import{I as m}from"./input-CbJmIvnR.js";import{L as a}from"./label-Dcd1yxrW.js";import{S as N}from"./separator-COnP7cn0.js";import{C as p}from"./copy-8KAhO6jq.js";import{C as le}from"./circle-alert-CCizksIb.js";const ue=()=>{const[b,B]=r.useState(""),[w,M]=r.useState(""),[C,G]=r.useState(""),[R,W]=r.useState(""),[O,Q]=r.useState(""),[X,Y]=r.useState("trial"),[D,Z]=r.useState(!0),[J,L]=r.useState(!1),[z,_]=r.useState(null),[t,g]=r.useState({email:"",subscription_type:"premium",order_id:"",customer_id:"",apiKey:""}),[H,U]=r.useState(!1),[$,T]=r.useState(null),[x,S]=r.useState({email:"",reason:"",apiKey:""}),[F,q]=r.useState(!1),[V,A]=r.useState(null),{toast:l}=ie(),u="https://sbtbzhzfarttihsjlrmr.supabase.co/functions/v1/generate-signup-link",h="https://sbtbzhzfarttihsjlrmr.supabase.co/functions/v1/remove-student",j="https://sbtbzhzfarttihsjlrmr.supabase.co/functions/v1/api-create-student",n=s=>{navigator.clipboard.writeText(s),l({title:"Copiado!",description:"Conteúdo copiado para a área de transferência"})},ee=async()=>{if(!b||!w||!C){l({title:"Dados incompletos",description:"Nome, email e senha são obrigatórios",variant:"destructive"});return}L(!0),_(null);try{const s=await fetch(j,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":O},body:JSON.stringify({name:b,email:w,password:C,phone:R,subscription_type:X,receive_emails:D})}),v=await s.json();_({status:s.status,statusText:s.statusText,data:v}),s.ok?l({title:"Teste realizado com sucesso!",description:"Aluno criado com sucesso"}):l({title:"Erro no teste",description:v.message||"Erro desconhecido",variant:"destructive"})}catch{_({status:0,statusText:"Network Error",data:{error:"Erro de rede ou CORS"}}),l({title:"Erro de conexão",description:"Não foi possível conectar com a API",variant:"destructive"})}finally{L(!1)}},se=async()=>{if(!t.email||!t.subscription_type||!t.apiKey){l({title:"Dados incompletos",description:"Email, tipo de assinatura e API Key são obrigatórios",variant:"destructive"});return}U(!0),T(null);try{const s=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-API-Key":t.apiKey},body:JSON.stringify({email:t.email,subscription_type:t.subscription_type,order_id:t.order_id,customer_id:t.customer_id})}),v=await s.json();T({status:s.status,statusText:s.statusText,data:v}),s.ok?l({title:"Teste realizado com sucesso!",description:"Link gerado com sucesso"}):l({title:"Erro no teste",description:v.error||"Erro desconhecido",variant:"destructive"})}catch{T({status:0,statusText:"Network Error",data:{error:"Erro de rede ou CORS"}}),l({title:"Erro de conexão",description:"Não foi possível conectar com a API",variant:"destructive"})}U(!1)},ae=async()=>{if(!x.email||!x.apiKey){l({title:"Dados incompletos",description:"Email e API Key são obrigatórios",variant:"destructive"});return}q(!0),A(null);try{const s=await fetch(h,{method:"DELETE",headers:{"Content-Type":"application/json","X-API-Key":x.apiKey},body:JSON.stringify({email:x.email,reason:x.reason})}),v=await s.json();A({status:s.status,statusText:s.statusText,data:v}),s.ok?l({title:"Teste realizado com sucesso!",description:"Aluno removido com sucesso"}):l({title:"Erro no teste",description:v.error||"Erro desconhecido",variant:"destructive"})}catch{A({status:0,statusText:"Network Error",data:{error:"Erro de rede ou CORS"}}),l({title:"Erro de conexão",description:"Não foi possível conectar com a API",variant:"destructive"})}q(!1)};return e.jsxs("div",{className:"container mx-auto p-6 space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(te,{className:"h-6 w-6"}),e.jsx("h1",{className:"text-3xl font-bold",children:"Documentação da API"})]}),e.jsx("p",{className:"text-muted-foreground",children:"Documentação completa dos endpoints da API do Play Passei."}),e.jsxs(y,{defaultValue:"create-student",className:"w-full",children:[e.jsxs(f,{className:"grid w-full grid-cols-3",children:[e.jsx(c,{value:"create-student",children:"Criar Aluno"}),e.jsx(c,{value:"signup",children:"Link de Cadastro"}),e.jsx(c,{value:"remove",children:"Remover Aluno"})]}),e.jsx(d,{value:"create-student",className:"space-y-4",children:e.jsxs(P,{children:[e.jsxs(E,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{children:"POST"}),e.jsx(I,{children:"Criar Aluno"})]}),e.jsx(k,{children:"Cria um novo aluno diretamente na plataforma com tipo de assinatura definido"})]}),e.jsxs(K,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Endpoint URL"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx("code",{className:"flex-1 p-2 bg-muted rounded text-sm break-all",children:j}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(j),children:e.jsx(p,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Autenticação"}),e.jsx("p",{className:"mt-1",children:e.jsx("code",{children:"X-API-Key: SUA_CHAVE_API"})})]}),e.jsx(N,{}),e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Parâmetros do Body (JSON)"}),e.jsxs("div",{className:"mt-2 space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("div",{className:"font-medium",children:"Campo"}),e.jsx("div",{className:"font-medium",children:"Tipo"}),e.jsx("div",{className:"font-medium",children:"Obrigatório"}),e.jsx("div",{className:"font-medium",children:"Descrição"})]}),e.jsx(N,{}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"name"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Nome completo do aluno"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"email"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Email do aluno"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"password"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Senha do aluno"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"phone"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"secondary",className:"w-fit",children:"Não"}),e.jsx("span",{children:"Telefone/WhatsApp"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"subscription_type"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"secondary",className:"w-fit",children:"Não"}),e.jsx("span",{children:"Tipo: trial, premium ou vip (padrão: trial)"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"receive_emails"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"boolean"}),e.jsx(i,{variant:"secondary",className:"w-fit",children:"Não"}),e.jsx("span",{children:"Se deseja receber emails (padrão: true)"})]})]})]}),e.jsxs(re,{children:[e.jsx(le,{className:"h-4 w-4"}),e.jsxs(oe,{children:[e.jsx("strong",{children:"Tipos de Assinatura:"})," trial (7 dias), premium (1 ano), vip (vitalício)"]})]}),e.jsxs(y,{defaultValue:"test",className:"w-full",children:[e.jsxs(f,{children:[e.jsx(c,{value:"test",children:"Testar"}),e.jsx(c,{value:"examples",children:"Exemplos de Código"}),e.jsx(c,{value:"responses",children:"Respostas"})]}),e.jsxs(d,{value:"test",className:"space-y-4 pt-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"create-name",children:"Nome *"}),e.jsx(m,{id:"create-name",placeholder:"João Silva",value:b,onChange:s=>B(s.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"create-email",children:"Email *"}),e.jsx(m,{id:"create-email",type:"email",placeholder:"joao@example.com",value:w,onChange:s=>M(s.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"create-password",children:"Senha *"}),e.jsx(m,{id:"create-password",type:"password",placeholder:"senha123",value:C,onChange:s=>G(s.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"create-phone",children:"Telefone"}),e.jsx(m,{id:"create-phone",placeholder:"11999999999",value:R,onChange:s=>W(s.target.value)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"create-subscription",children:"Tipo de Assinatura"}),e.jsxs("select",{id:"create-subscription",className:"w-full px-3 py-2 border rounded-md",value:X,onChange:s=>Y(s.target.value),children:[e.jsx("option",{value:"trial",children:"Trial (7 dias)"}),e.jsx("option",{value:"premium",children:"Premium (1 ano)"}),e.jsx("option",{value:"vip",children:"VIP (vitalício)"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"create-api-key",children:"API Key *"}),e.jsx(m,{id:"create-api-key",type:"password",placeholder:"sk_live_...",value:O,onChange:s=>Q(s.target.value)})]})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",id:"create-receive-emails",checked:D,onChange:s=>Z(s.target.checked),className:"rounded"}),e.jsx(a,{htmlFor:"create-receive-emails",children:"Receber emails"})]}),e.jsx(o,{onClick:ee,disabled:J,className:"w-full",children:J?"Criando...":"Testar Criação"}),z&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Resultado:"}),e.jsx("pre",{className:"bg-muted p-4 rounded-md overflow-x-auto text-sm",children:JSON.stringify(z,null,2)})]})]}),e.jsxs(d,{value:"examples",className:"space-y-4 pt-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"cURL"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`curl -X POST ${j} \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: SUA_CHAVE_API" \\
  -d '{"name":"João Silva","email":"joao@example.com","password":"senha123","phone":"11999999999","subscription_type":"premium","receive_emails":true}'`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`curl -X POST ${j} \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: SUA_CHAVE_API" \\
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "password": "senha123",
    "phone": "11999999999",
    "subscription_type": "premium",
    "receive_emails": true
  }'`})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"JavaScript/Node.js"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`const response = await fetch('${j}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'SUA_CHAVE_API'
  },
  body: JSON.stringify({
    name: 'João Silva',
    email: 'joao@example.com',
    password: 'senha123',
    phone: '11999999999',
    subscription_type: 'premium',
    receive_emails: true
  })
});
const data = await response.json();`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`const response = await fetch('${j}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'SUA_CHAVE_API'
  },
  body: JSON.stringify({
    name: 'João Silva',
    email: 'joao@example.com',
    password: 'senha123',
    phone: '11999999999',
    subscription_type: 'premium',
    receive_emails: true
  })
});
const data = await response.json();`})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"Python"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`import requests

response = requests.post(
    '${j}',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'SUA_CHAVE_API'
    },
    json={
        'name': 'João Silva',
        'email': 'joao@example.com',
        'password': 'senha123',
        'phone': '11999999999',
        'subscription_type': 'premium',
        'receive_emails': True
    }
)
data = response.json()`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`import requests

response = requests.post(
    '${j}',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'SUA_CHAVE_API'
    },
    json={
        'name': 'João Silva',
        'email': 'joao@example.com',
        'password': 'senha123',
        'phone': '11999999999',
        'subscription_type': 'premium',
        'receive_emails': True
    }
)
data = response.json()`})})]})]}),e.jsxs(d,{value:"responses",className:"space-y-4 pt-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-green-600",children:"Sucesso (201)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "success": true,
  "user_id": "123e4567-e89b-12d3-a456-426614174000",
  "email": "joao@example.com",
  "subscription_type": "premium",
  "message": "Aluno criado com sucesso"
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-600",children:"Erro - Campos faltando (400)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "error": "Missing required fields",
  "message": "Nome, email e senha são obrigatórios"
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-600",children:"Erro - Email já existe (409)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "error": "Email already exists",
  "message": "Este email já está cadastrado na plataforma"
}`})})]})]})]})]})]})}),e.jsx(d,{value:"signup",className:"space-y-4",children:e.jsxs(P,{children:[e.jsxs(E,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{children:"POST"}),e.jsx(I,{children:"Gerar Link de Cadastro"})]}),e.jsx(k,{children:"Gera um link de cadastro para o aluno com tipo de assinatura e dados do pedido"})]}),e.jsxs(K,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Endpoint URL"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx("code",{className:"flex-1 p-2 bg-muted rounded text-sm break-all",children:u}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(u),children:e.jsx(p,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Autenticação"}),e.jsx("p",{className:"mt-1",children:e.jsx("code",{children:"X-API-Key: sua chave de API"})})]}),e.jsx(N,{}),e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Parâmetros do Body (JSON)"}),e.jsxs("div",{className:"mt-2 space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("div",{className:"font-medium",children:"Campo"}),e.jsx("div",{className:"font-medium",children:"Tipo"}),e.jsx("div",{className:"font-medium",children:"Obrigatório"}),e.jsx("div",{className:"font-medium",children:"Descrição"})]}),e.jsx(N,{}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"email"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Email do aluno"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"subscription_type"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Tipo de assinatura: trial, premium ou vip"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"order_id"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"secondary",className:"w-fit",children:"Não"}),e.jsx("span",{children:"ID do pedido (opcional)"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"customer_id"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"secondary",className:"w-fit",children:"Não"}),e.jsx("span",{children:"ID do cliente (opcional)"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"apiKey"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Chave de API para autenticação"})]})]})]}),e.jsxs(y,{defaultValue:"test",className:"w-full",children:[e.jsxs(f,{children:[e.jsx(c,{value:"test",children:"Testar"}),e.jsx(c,{value:"examples",children:"Exemplos de Código"}),e.jsx(c,{value:"responses",children:"Respostas"})]}),e.jsxs(d,{value:"test",className:"space-y-4 pt-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-email",children:"Email *"}),e.jsx(m,{id:"signup-email",type:"email",placeholder:"joao@example.com",value:t.email,onChange:s=>g({...t,email:s.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-subscription",children:"Tipo de Assinatura *"}),e.jsxs("select",{id:"signup-subscription",className:"w-full px-3 py-2 border rounded-md",value:t.subscription_type,onChange:s=>g({...t,subscription_type:s.target.value}),children:[e.jsx("option",{value:"trial",children:"Trial"}),e.jsx("option",{value:"premium",children:"Premium"}),e.jsx("option",{value:"vip",children:"VIP"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-order-id",children:"Order ID"}),e.jsx(m,{id:"signup-order-id",placeholder:"123456",value:t.order_id,onChange:s=>g({...t,order_id:s.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-customer-id",children:"Customer ID"}),e.jsx(m,{id:"signup-customer-id",placeholder:"cust_abc123",value:t.customer_id,onChange:s=>g({...t,customer_id:s.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-api-key",children:"API Key *"}),e.jsx(m,{id:"signup-api-key",type:"password",placeholder:"sk_live_...",value:t.apiKey,onChange:s=>g({...t,apiKey:s.target.value})})]}),e.jsx(o,{onClick:se,disabled:H,className:"w-full",children:H?"Gerando...":"Testar Geração"}),$&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Resultado:"}),e.jsx("pre",{className:"bg-muted p-4 rounded-md overflow-x-auto text-sm",children:JSON.stringify($,null,2)})]})]}),e.jsxs(d,{value:"examples",className:"space-y-4 pt-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"cURL"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`curl -X POST ${u} \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sua_chave_api" \\
  -d '{"email":"joao@example.com","subscription_type":"premium","order_id":"123","customer_id":"cust_abc"}'`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`curl -X POST ${u} \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sua_chave_api" \\
  -d '{
    "email": "joao@example.com",
    "subscription_type": "premium",
    "order_id": "123",
    "customer_id": "cust_abc"
  }'`})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"JavaScript/Node.js"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`const response = await fetch('${u}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'sua_chave_api'
  },
  body: JSON.stringify({
    email: 'joao@example.com',
    subscription_type: 'premium',
    order_id: '123',
    customer_id: 'cust_abc'
  })
});
const data = await response.json();`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`const response = await fetch('${u}', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'sua_chave_api'
  },
  body: JSON.stringify({
    email: 'joao@example.com',
    subscription_type: 'premium',
    order_id: '123',
    customer_id: 'cust_abc'
  })
});
const data = await response.json();`})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"Python"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`import requests

response = requests.post(
    '${u}',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'sua_chave_api'
    },
    json={
        'email': 'joao@example.com',
        'subscription_type': 'premium',
        'order_id': '123',
        'customer_id': 'cust_abc'
    }
)
data = response.json()`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`import requests

response = requests.post(
    '${u}',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'sua_chave_api'
    },
    json={
        'email': 'joao@example.com',
        'subscription_type': 'premium',
        'order_id': '123',
        'customer_id': 'cust_abc'
    }
)
data = response.json()`})})]})]}),e.jsxs(d,{value:"responses",className:"space-y-4 pt-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-green-600",children:"Sucesso (200)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "success": true,
  "signup_link": "https://example.com/signup?token=abc123"
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-600",children:"Erro - Campos faltando (400)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "error": "Missing required fields",
  "message": "Email e tipo de assinatura são obrigatórios"
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-600",children:"Erro - API Key inválida (401)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`})})]})]})]})]})]})}),e.jsx(d,{value:"remove",className:"space-y-4",children:e.jsxs(P,{children:[e.jsxs(E,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(i,{children:"DELETE"}),e.jsx(I,{children:"Remover Aluno"})]}),e.jsx(k,{children:"Remove um aluno da plataforma com motivo opcional"})]}),e.jsxs(K,{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Endpoint URL"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx("code",{className:"flex-1 p-2 bg-muted rounded text-sm break-all",children:h}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(h),children:e.jsx(p,{className:"h-4 w-4"})})]})]}),e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Autenticação"}),e.jsx("p",{className:"mt-1",children:e.jsx("code",{children:"X-API-Key: sua chave de API"})})]}),e.jsx(N,{}),e.jsxs("div",{children:[e.jsx(a,{className:"text-sm font-medium",children:"Parâmetros do Body (JSON)"}),e.jsxs("div",{className:"mt-2 space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("div",{className:"font-medium",children:"Campo"}),e.jsx("div",{className:"font-medium",children:"Tipo"}),e.jsx("div",{className:"font-medium",children:"Obrigatório"}),e.jsx("div",{className:"font-medium",children:"Descrição"})]}),e.jsx(N,{}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"email"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Email do aluno a ser removido"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"reason"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"secondary",className:"w-fit",children:"Não"}),e.jsx("span",{children:"Motivo da remoção"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4 text-sm",children:[e.jsx("code",{children:"apiKey"}),e.jsx(i,{variant:"outline",className:"w-fit",children:"string"}),e.jsx(i,{variant:"destructive",className:"w-fit",children:"Sim"}),e.jsx("span",{children:"Chave de API para autenticação"})]})]})]}),e.jsxs(y,{defaultValue:"test",className:"w-full",children:[e.jsxs(f,{children:[e.jsx(c,{value:"test",children:"Testar"}),e.jsx(c,{value:"examples",children:"Exemplos de Código"}),e.jsx(c,{value:"responses",children:"Respostas"})]}),e.jsxs(d,{value:"test",className:"space-y-4 pt-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"remove-email",children:"Email *"}),e.jsx(m,{id:"remove-email",type:"email",placeholder:"joao@example.com",value:x.email,onChange:s=>S({...x,email:s.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"remove-reason",children:"Motivo"}),e.jsx(m,{id:"remove-reason",placeholder:"Solicitado pelo aluno",value:x.reason,onChange:s=>S({...x,reason:s.target.value})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"remove-api-key",children:"API Key *"}),e.jsx(m,{id:"remove-api-key",type:"password",placeholder:"sk_live_...",value:x.apiKey,onChange:s=>S({...x,apiKey:s.target.value})})]}),e.jsx(o,{onClick:ae,disabled:F,className:"w-full",children:F?"Removendo...":"Testar Remoção"}),V&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Resultado:"}),e.jsx("pre",{className:"bg-muted p-4 rounded-md overflow-x-auto text-sm",children:JSON.stringify(V,null,2)})]})]}),e.jsxs(d,{value:"examples",className:"space-y-4 pt-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"cURL"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`curl -X DELETE ${h} \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sua_chave_api" \\
  -d '{"email":"joao@example.com","reason":"Solicitado pelo aluno"}'`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`curl -X DELETE ${h} \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: sua_chave_api" \\
  -d '{
    "email": "joao@example.com",
    "reason": "Solicitado pelo aluno"
  }'`})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"JavaScript/Node.js"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`const response = await fetch('${h}', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'sua_chave_api'
  },
  body: JSON.stringify({
    email: 'joao@example.com',
    reason: 'Solicitado pelo aluno'
  })
});
const data = await response.json();`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`const response = await fetch('${h}', {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'sua_chave_api'
  },
  body: JSON.stringify({
    email: 'joao@example.com',
    reason: 'Solicitado pelo aluno'
  })
});
const data = await response.json();`})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(a,{children:"Python"}),e.jsx(o,{variant:"outline",size:"sm",onClick:()=>n(`import requests

response = requests.delete(
    '${h}',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'sua_chave_api'
    },
    json={
        'email': 'joao@example.com',
        'reason': 'Solicitado pelo aluno'
    }
)
data = response.json()`),children:e.jsx(p,{className:"h-4 w-4"})})]}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`import requests

response = requests.delete(
    '${h}',
    headers={
        'Content-Type': 'application/json',
        'X-API-Key': 'sua_chave_api'
    },
    json={
        'email': 'joao@example.com',
        'reason': 'Solicitado pelo aluno'
    }
)
data = response.json()`})})]})]}),e.jsxs(d,{value:"responses",className:"space-y-4 pt-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-green-600",children:"Sucesso (200)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "success": true,
  "message": "Aluno removido com sucesso"
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-600",children:"Erro - Campos faltando (400)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "error": "Missing required fields",
  "message": "Email é obrigatório"
}`})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold mb-2 text-red-600",children:"Erro - API Key inválida (401)"}),e.jsx("pre",{className:"bg-muted p-4 rounded text-sm overflow-x-auto",children:e.jsx("code",{children:`{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`})})]})]})]})]})]})})]})]})};export{ue as default};
