(() => {
'use strict';
const products = [
['4780188','MODEM OPTICO HG6145D2','Redes Ópticas',25,'Seleção de Ofertas'],
['4750260','ROTEADOR EMPRESARIAL WIFI RW 6181','Redes Empresariais',15,'Seleção de Ofertas'],
['4560177','VHD 3220 Dual Audio','Captação de Imagem',15,'Seleção de Ofertas'],
['4580645','MHDX 3104-C - GRAVADOR DIGITAL DE VÍDEO COMPACTO','Gerenciamento de Imagem',10,'Seleção de Ofertas'],
['4580643','iMHDX 3108','Gerenciamento de Imagem',10,'Seleção de Ofertas'],
['4750262','ROTEADOR EMPRESARIAL WIFI RW 6302X','Redes Empresariais',5,'Seleção de Ofertas'],
['4291100','MOUSE MCI10 C/FIO PT','Comunicação HO',30,'Seleção de Ofertas'],
['4550004','MODULO DE CHOQUE XEL 5001','Alarmes',30,'Seleção de Ofertas'],
['4541035','SENSOR PASSIVO SEM FIO IVP 8000 PET CAM','Sensores',30,'Seleção de Ofertas'],
['4670331','FECHADURA FR331','Fechaduras Digitais',0,'Seleção de Ofertas'],
['4780129','HG6145F','Redes Ópticas',30,'Seleção de Ofertas'],
['4610050','Detector de Fumaça Endereçável DFE 523','Incêndio e Iluminação',15,'Cash SellOut'],
['4543512','ANM 24 NET','Alarmes',15,'Cash SellOut'],
['4543589','AMT 8000 PRO','Alarmes',15,'Cash SellOut'],
['4541071','IVP 1000 PET','Sensores',15,'Cash SellOut'],
['4541032','XAS 8000','Sensores',15,'Cash SellOut'],
['4540056','IVP 8000 PET G2','Sensores',10,'Cash SellOut'],
['4560051','VHL 1120 D G2','Captação de Imagem',10,'Cash SellOut'],
['4560052','VHL 1120 B G2','Captação de Imagem',10,'Cash SellOut'],
['4581250','MHDX 1204-C','Gerenciamento de Imagem',10,'Cash SellOut'],
['4581253','MHDX 1208-C Dual Audio','Gerenciamento de Imagem',10,'Cash SellOut'],
['4760107','SWITCH 24P/4P SFP S2328G PA','Redes Empresariais',15,'Cash SellOut'],
['4760125','SWITCH 10P 100MBPS S1110F P','Redes Empresariais',10,'Cash SellOut'],
['4900027','VIP 1230 FC+','CFTV IP',10,'Cash SellOut'],
['4570072','VIP 3230 D SC','CFTV IP',15,'Cash SellOut'],
['4570044','VIPC 1430 B','CFTV IP',10,'Cash SellOut'],
['4822206','ATTIV SEG-BI+','Nobreaks',10,'Cash SellOut'],
['4061400','TDMI 400','Comunicação Corporativa',10,'Cash SellOut'],
['4900020','CONTROLADOR ACESSO FACIAL NAC SS 3532 MF','Controle de Acesso Corporativo',15,'Cash SellOut'],
['4900018','CONTROLADOR ACESSO FAC NAC SS 5531 MF EX','Controle de Acesso Corporativo',15,'Cash SellOut'],
['4900019','CONTROLADOR ACESSO FACIAL NAC SS 3531 MF','Controle de Acesso Corporativo',10,'Cash SellOut'],
['4671095','FECHADURA FE 20150 PR S/SENS','Controle de Acesso Corporativo',15,'Cash SellOut'],
['4670023','FECHADURA FE 22150 C/SENS PRETA','Controle de Acesso Corporativo',15,'Cash SellOut'],
['4670022','FECHADURA FE 22150 C/SENS BRANCA','Controle de Acesso Corporativo',15,'Cash SellOut'],
['4771657','RPD 1657 - RACK DE PISO 16U 570mm','Racks',15,'Cash SellOut'],
['4770337','MRM 3U - MINI RACK MONTADO 3U','Racks',10,'Cash SellOut'],
['4115100','Interface Celular 3G - ITC 5100 Intelbras','Comunicação Corporativa',20,'Seleção de Ofertas'],
['4110000','CENTRAL IP CIP 850','Comunicação Corporativa',20,'Seleção de Ofertas'],
['4580778','iMHDX 3116 AM','Gerenciamento de Imagem',10,'Seleção de Ofertas'],
['4820120','NOBREAK GAMER ULTIMATE','Nobreaks',10,'Seleção de Ofertas'],
['4710032','CONECTOR P/ FIBRA OPT CLICK CERAMICA SC/UPC XFF 1CSI (10PCS)','Passivos Ópticos',10,'Seleção de Ofertas'],
['4710021','CONECTOR DE CAMPO CLICK SC/UPC P/FIBRA OPTICA- XFF 1C(10P)','Passivos Ópticos',10,'Seleção de Ofertas'],
['4119041','TELEFONE CEL FIXO 4G WI-FI CFW 9041','Comunicação HO',20,'Seleção de Ofertas']
].map(([code,name,category,discount,campaign]) => ({code,name,category,discount,campaign}));

// Seleção de destaque aprovada pela supervisão, na ordem informada.
const featuredCodes = ['4291100','4550004','4541035','4780129','4780188','4115100','4110000','4119041','4750260','4560177'];
const featuredRank = new Map(featuredCodes.map((code,index) => [code,index]));
const productImages = new Map(products.map(product => [product.code,`assets/products/${product.code}.png`]));
products.forEach(product => {
  product.featured = featuredRank.has(product.code);
  product.image = productImages.get(product.code) || '';
});

const $ = selector => document.querySelector(selector);
const grid = $('#productGrid');
const search = $('#search');
const category = $('#category');
const discount = $('#discount');
const campaign = $('#campaign');
const sort = $('#sort');
const count = $('#count');
const empty = $('#empty');
const catalogCta = $('#catalogCta');
const INITIAL_PRODUCT_LIMIT = 8;
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
window.dataLayer = window.dataLayer || [];
const track = (event, data={}) => window.dataLayer.push({event,...data});

function waProduct(product){
  const message = `Olá! Tenho interesse no produto ${product.code} - ${product.name} da Campanha Mês do Cliente. Pode me enviar uma cotação?`;
  return `https://wa.me/5527992328081?text=${encodeURIComponent(message)}`;
}
function card(product){
  const badge = `-${product.discount}%`;
  return `<article class="product-card${product.featured ? ' featured' : ''}" data-sku="${product.code}">
    <div class="product-visual">
      ${product.image ? `<img class="product-image" src="${product.image}" alt="${product.name}" width="300" height="220" loading="eager" decoding="async">` : `<div class="placeholder" role="img" aria-label="Imagem do produto ${product.name} ainda não disponível"><b>PACKSHOT ${product.code}</b><span>imagem em preparação</span></div>`}
      <span class="discount-badge">${badge}</span>
    </div>
    <div class="card-body"><span class="category-tag">${product.category}</span><h3>${product.name}</h3>
      <div class="terms"><strong>6x sem juros</strong><span class="campaign">${product.campaign}</span></div>
      <a class="btn product-link" href="${waProduct(product)}" target="_blank" rel="noopener" data-code="${product.code}">Confira toda a linha de produtos</a>
    </div></article>`;
}
function matchesDiscount(value, productDiscount){
  if (!value) return true;
  if (value === '30') return productDiscount === 30;
  if (value === '20-29') return productDiscount >= 20 && productDiscount <= 29;
  if (value === '10-19') return productDiscount >= 10 && productDiscount <= 19;
  if (value === '1-9') return productDiscount >= 1 && productDiscount <= 9;
  return productDiscount === 0;
}
function render(reason='initial'){
  const query = normalize(search.value.trim());
  let result = products.filter(p => (!query || normalize(`${p.code} ${p.name}`).includes(query)) && (!category.value || p.category === category.value) && (!campaign.value || p.campaign === campaign.value) && matchesDiscount(discount.value,p.discount));
  result.sort((a,b) => sort.value === 'az' ? a.name.localeCompare(b.name,'pt-BR') : sort.value === 'category' ? a.category.localeCompare(b.category,'pt-BR') || a.name.localeCompare(b.name,'pt-BR') : (Number(b.featured)-Number(a.featured)) || ((featuredRank.get(a.code) ?? 999)-(featuredRank.get(b.code) ?? 999)) || b.discount-a.discount || a.name.localeCompare(b.name,'pt-BR'));
  const visible = result.slice(0,INITIAL_PRODUCT_LIMIT);
  grid.innerHTML = visible.map(card).join('');
  const totalLabel = `${result.length} ${result.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`;
  count.textContent = result.length > INITIAL_PRODUCT_LIMIT ? `${totalLabel} · exibindo os ${INITIAL_PRODUCT_LIMIT} principais` : totalLabel;
  empty.hidden = result.length > 0;
  grid.hidden = result.length === 0;
  catalogCta.hidden = result.length === 0;
  if(reason !== 'initial') track('view_item_list',{item_list_name:'Ofertas Mês do Cliente Intelbras',items_count:result.length,filter_reason:reason});
}
function clearFilters(){ search.value=''; category.value=''; discount.value=''; campaign.value=''; sort.value='discount'; render('clear_filters'); search.focus(); }
[...new Set(products.map(p=>p.category))].sort((a,b)=>a.localeCompare(b,'pt-BR')).forEach(name=>category.add(new Option(name,name)));
let searchTimer;
search.addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>render('search'),180)});
[category,discount,campaign,sort].forEach(control=>control.addEventListener('change',()=>render(control.id)));
$('#clear').addEventListener('click',clearFilters);
$('#empty button').addEventListener('click',clearFilters);
grid.addEventListener('click',event=>{
  const link=event.target.closest('.product-link'); if(!link)return;
  const product=products.find(p=>p.code===link.dataset.code);
  track('select_item',{item_list_name:'Ofertas Mês do Cliente Intelbras',items:[{item_id:product.code,item_name:product.name,item_category:product.category,discount:product.discount}]});
  track('view_item',{currency:'BRL',items:[{item_id:product.code,item_name:product.name,item_category:product.category,discount:product.discount}]});
  track('generate_lead',{cta_id:'produto',sku:product.code,item_name:product.name});
});

const utms = new URLSearchParams(location.search);
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link=>{
  const url=new URL(link.href); ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(key=>{if(utms.has(key)) url.searchParams.set(key,utms.get(key))}); link.href=url.toString();
  link.addEventListener('click',()=>{ if(!link.classList.contains('product-link')) track('contact',{method:'whatsapp',cta_id:link.dataset.cta || 'general'}); });
});

const menuButton=$('.menu-btn'), menu=$('#menu'), menuBackdrop=$('.menu-backdrop'), menuLabel=menuButton.querySelector('.sr-only'), header=$('.header');
function syncMenuViewport(){
  const top=Math.max(0,Math.round(header.getBoundingClientRect().bottom));
  document.documentElement.style.setProperty('--menu-top',`${top}px`);
}
function setMenu(open){
  if(open) syncMenuViewport();
  menu.classList.toggle('open',open);
  menuButton.setAttribute('aria-expanded',String(open));
  menuLabel.textContent=open?'Fechar menu':'Abrir menu';
  document.documentElement.classList.toggle('menu-open',open);
  document.body.classList.toggle('menu-open',open);
  menuBackdrop.tabIndex=open?0:-1;
}
menuButton.addEventListener('click',()=>setMenu(!menu.classList.contains('open')));
menuBackdrop.addEventListener('click',()=>setMenu(false));
menu.addEventListener('click',e=>{if(e.target.matches('a'))setMenu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){setMenu(false);menuButton.focus()}});
function refreshOpenMenu(){
  if(!menu.classList.contains('open')) return;
  if(window.innerWidth>760) setMenu(false); else syncMenuViewport();
}
window.addEventListener('resize',refreshOpenMenu);
if(window.visualViewport) window.visualViewport.addEventListener('resize',refreshOpenMenu);
const filterToggle=$('#filterToggle'), filters=$('#filters');
filterToggle.addEventListener('click',()=>{const open=!filters.classList.contains('open');filters.classList.toggle('open',open);filterToggle.setAttribute('aria-expanded',String(open));if(open)search.focus()});

const cookie=$('#cookie');
try{if(localStorage.getItem('sd-cookie-choice'))cookie.hidden=true}catch(e){}
function cookieChoice(value){try{localStorage.setItem('sd-cookie-choice',value)}catch(e){}cookie.hidden=true;track('consent_update',{analytics_storage:value==='accepted'?'granted':'denied'})}
$('#acceptCookies').addEventListener('click',()=>cookieChoice('accepted'));
$('#rejectCookies').addEventListener('click',()=>cookieChoice('rejected'));
const dialog=$('#privacy');
document.querySelectorAll('[data-modal="privacy"]').forEach(button=>button.addEventListener('click',()=>dialog.showModal()));
dialog.querySelectorAll('.modal-close,.btn').forEach(button=>button.addEventListener('click',()=>dialog.close()));
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});

render();
track('view_item_list',{item_list_name:'Ofertas Mês do Cliente Intelbras',items_count:products.length});
})();
