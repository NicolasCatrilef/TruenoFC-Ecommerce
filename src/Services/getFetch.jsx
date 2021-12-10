const products = [
    { id:1,  type:'camiseta',  name:'Boca JR Local',                   stock:45, price:13500, img:'https://img.planetafobal.com/2021/08/boca-adidas-camiseta-titular-2021-2022-adidas-wq.jpg'},
    { id:2,  type:'camiseta',  name:'Inter Visita',                    stock:31, price:13500, img:'https://cdn.shopify.com/s/files/1/0490/7496/2599/products/camiseta-de-futbol-dri-fit-inter-milan-visitante-2021-22-stadium-MB0gqr_820x1024.jpg?v=1627415439'},
    { id:3,  type:'camiseta',  name:'River Plate Alternativa',         stock:12, price:11500, img:'https://img.planetafobal.com/2021/09/river-plate-adidas-2021-2022-camiseta-suplente-fgt.jpg'},
    { id:4,  type:'camiseta',  name:'Liverpool Local',                 stock:5,  price:21500, img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/aea90a72-d19c-45fa-9751-61c11593ee1d/jersey-de-f%C3%BAtbol-del-liverpool-fc-local-2021-22-stadium-tR8vRS.png'},
    { id:5,  type:'camiseta',  name:'Liverpool Visita',                stock:3,  price:21500, img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3a4b7172-2f03-49f8-937e-423aa6e3357c/jersey-de-f%C3%BAtbol-dri-fit-adv-del-liverpool-fc-2021-22-visitante-match-25wgkg.png'},
    { id:6,  type:'camiseta',  name:'Liverpool Alternativa',           stock:9,  price:35500, img:'https://cdn.shopify.com/s/files/1/0490/7496/2599/products/jersey-de-futbol-liverpool-fc-stadium-air-max-GbS3xp_1200x1500.jpg?v=1616860400'},
    { id:7,  type:'camiseta',  name:'Atletico de Madrid Local',        stock:32, price:13990, img:'https://img.planetafobal.com/2021/07/primera-equipacion-nike-atletico-de-madrid-2021-2022-zj.jpg'},
    { id:8,  type:'camiseta',  name:'Atletico de Madrid  Visita',      stock:5,  price:13990, img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4984ade0-1525-42e6-b136-3693e5fc7c1d/jersey-de-f%C3%BAtbol-del-atl%C3%A9tico-madrid-visitante-2021-22-stadium-pmlMlg.png'},
    { id:9,  type:'camiseta',  name:'Atletico de Madrid  Alternativa', stock:8,  price:13990, img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/937e9050-5822-4fcd-89ea-d43435a030db/atletico-madrid-2021-22-stadium-third-dri-fit-football-shirt-2RrKcL.png'},
    { id:10, type:'camiseta',  name:'BlackBurn Rover Visita',          stock:1,  price:11500, img:'https://cdn.footballkitarchive.com/2021/07/29/cpeNBpLFVnEyagj.jpg'},
    { id:11, type:'camiseta',  name:'PSG Local',                       stock:0,  price:11500, img:'https://img.planetafobal.com/2021/05/psg-home-kit-nike-x-jordan-2021-2022-wq.jpg'},
    { id:12, type:'camiseta',  name:'PSG Visita',                      stock:2,  price:11500, img:'https://cdn.shopify.com/s/files/1/0490/7496/2599/products/jersey-de-futbol-dri-fit-adv-del-paris-saint-germain-local-2021-22-stadium-de-visitante-KmRWHm_ac4a7edd-87ed-4931-b3c5-2d5dccc1d92b_820x1024.jpg?v=1627416276'},
    { id:13, type:'camiseta',  name:'PSG Alternativa',                 stock:0,  price:11500, img:'https://images.footballfanatics.com/paris-saint-germain/maillot-psg-third-stadium-21/22-femme-avec-flocage-hakimi-2_ss4_p-12094391+pv-1+u-6aqi0m2gz79hsxw7kz2x+v-3d2a0b52f40d43c89e27a944648b6584.jpg?_hv=1&w=900'},
    { id:14, type:'camiseta',  name:'PSG Alternativa',                 stock:0,  price:11500, img:'https://cdn.shopify.com/s/files/1/0249/7101/8328/products/jordan-kids-psg-2020-third-jersey.jpg?v=1601055086'},
    { id:15, type:'camiseta',  name:'Colo Colo Local',                 stock:9,  price:11500, img:'https://static.dafiti.cl/p/adidas-performance-1716-2074101-1-product.jpg'},
    { id:16, type:'accesorio', name:'Liverpool Local - Corta Viento',  stock:23, price:31000, img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d96b7049-9d4e-4f5d-918d-375f1de5f145/strike-liverpool-fc-chaqueta-deportiva-de-tejido-knit-de-futbol-ktvzb1.png'},
    { id:17, type:'accesorio', name:'Liverpool Visita - Poleron',      stock:5,  price:21990, img:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ca08d5b7-a4ae-4ceb-a71a-a0859d142dd0/chamarra-tejida-liverpool-fc-n98-2b1fj6.png'},
    { id:18, type:'accesorio', name:'Liverpool Alternativa - Poleron', stock:8,  price:23990, img:'https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/da0936a7-2f46-4964-92a1-dce53b85d3dc/liverpool-fc-chaqueta-de-futbol-con-cremallera-completa-S65DCW.png'},
    { id:19, type:'accesorio', name:'Boca JR Local - Balon',           stock:2,  price:11500, img:'https://4.bp.blogspot.com/-uzFFCbTtciM/WCk3bx48ubI/AAAAAAAAATw/Ac0qXxQPTdgcAEGDPU78UgZ7ZQcdPDhKQCLcB/s1600/10060_0.jpg'},
    { id:20, type:'accesorio', name:'Boca JR Local - Gorro',           stock:12, price:7500,  img:'https://ih1.redbubble.net/image.2618842253.4937/ssrco,dad_hat,product,1A2336:ba214a0867,front,square,600x600-bg,f8f8f8.jpg'},
    { id:21, type:'accesorio', name:'Inter Local - Reloj',             stock:31, price:61990, img:'https://www.shop.gioielliocchialionline.com/WebRoot/ce_it/Shops/990331164/5925/AEB0/E363/7FF0/6957/C0A8/1911/886B/INTER_OROLOGIO_DA_POLSO_IA415XN1_ml.jpg'},
    { id:22, type:'accesorio', name:'Inter Local - Bufanda',           stock:5,  price:11500, img:'https://m.media-amazon.com/images/I/41tBBFeBiAL._SL500_.jpg'},
    { id:23, type:'accesorio', name:'Balon Futbol - Nike Flight',      stock:3,  price:21500, img:'https://media.revistagq.com/photos/5efc64194786c513db97aa2e/master/w_1600%2Cc_limit/nike-flight-balon.jpg'},
    { id:24, type:'accesorio', name:'Balon Futbol - Nike Strike',      stock:9,  price:21500, img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44523483-80cc-4eab-9fd9-a14c29cb4334/strike-balon-de-futbol-F8tjl8.png'},
    { id:25, type:'accesorio', name:'Guantes Nike - Negro',            stock:16, price:13990, img:'https://marcadegol.com/fotos//2018/02/nike-mercurial-touch-elite.jpg'},
    { id:26, type:'accesorio', name:'Guantes Nike - Amariilo',         stock:5,  price:13990, img:'https://http2.mlstatic.com/D_NQ_NP_874149-MLC31367349745_072019-O.jpg'},
    { id:27, type:'accesorio', name:'Guantes Nike - Celeste',          stock:8,  price:13990, img:'https://http2.mlstatic.com/D_NQ_NP_736414-MLC32678291749_102019-O.jpg'},
    { id:28, type:'accesorio', name:'Guantes Nike - Bicolor',          stock:3,  price:13990, img:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e04c8784-4e5d-4042-9978-eabfca95f920/mercurial-goalkeeper-touch-elite-guantes-de-futbol-PvQgL2.png'},
    { id:29, type:'accesorio', name:'Tazon CC - Pilsen del Sur',       stock:31, price:1500,  img:'https://http2.mlstatic.com/D_NQ_NP_936022-MLC45199756921_032021-O.jpg'},
    { id:30, type:'accesorio', name:'Tazon River Plate',               stock:12, price:1500,  img:'http://www.luz-ideas.cl/wp-content/uploads/2019/04/TAZON-RIVER-PLATE-LUZ-IDEAS.png'}
];


export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products)
    }, 2000);
    setTimeout(() => {
        reject('Error al consumir data')
    }, 2000);
});