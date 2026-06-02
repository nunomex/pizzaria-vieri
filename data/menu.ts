export interface MenuItem {
  id: string
  name: string
  desc: string
  price: number
  tag?: string
  img?: string
}

export interface CartItem extends MenuItem {
  qty: number
}

export const imgPool: Record<string, string[]> = {
  pizzas:        ['1574071318508-1cdbab80d002','1565299624946-b28f40a0ae38','1513104890138-7c749659a591','1571997478779-2adcbbe9ab2f','1574071318508-1cdbab80d002','1565299624946-b28f40a0ae38','1513104890138-7c749659a591','1571997478779-2adcbbe9ab2f'],
  massas:        ['1612874742237-6526221588e3','1621996346565-e3dbc646d9a9','1551183053-bf91798d047b','1563379926898-05f4575a45d8','1612874742237-6526221588e3','1621996346565-e3dbc646d9a9'],
  entradas:      ['1572695157366-5e585ab2b69f','1546069901-ba9599a7e63c','1512621776951-a57141f2eefd','1606914501449-5a96b6ce24ca','1517244683847-7456b63c5969'],
  saladas:       ['1546069901-ba9599a7e63c','1512621776951-a57141f2eefd','1473093295043-cdd812d0e601','1547496502-affea7c54d48'],
  aguas:         ['1548839140-29a749e1cf4d','1505740420928-5e560c06d30e','1548839140-29a749e1cf4d','1505740420928-5e560c06d30e'],
  refrigerantes: ['1554866585-cd94860890b7','1581636625402-6fcf9f51e9b7','1554866585-cd94860890b7','1629203851122-3726f0b8b9f1','1554866585-cd94860890b7','1581636625402-6fcf9f51e9b7'],
  cerveja:       ['1535958636474-b021ee887b13','1571613316887-6f8d5cbf7ef7','1575367439058-6096bb9cf5e2','1535958636474-b021ee887b13'],
  cafetaria:     ['1510591509098-f4fdc6d0ff04','1572442388796-11668a67e53d','1497515114629-f71d768fd85c','1510591509098-f4fdc6d0ff04','1572442388796-11668a67e53d','1571877227200-a0d98ea607e9'],
}

export const menuData = {
  comida: {
    pizzas: [
      { id:'p1', name:'Margherita Tradizionale', desc:'Molho San Marzano, fior di latte, manjericão fresco, azeite extra virgem', price:9.50,  tag:'Clássica'    },
      { id:'p2', name:'Diavola',                  desc:'Molho de tomate, mozzarella, salame piccante, pimenta calabresa',             price:11.00, tag:'Picante'     },
      { id:'p3', name:'Quattro Formaggi',          desc:'Mozzarella, gorgonzola, parmesão 24 meses, provolone fumado',                price:12.00                   },
      { id:'p4', name:'Prosciutto & Rúcula',       desc:'Mozzarella, presunto cru italiano, rúcula fresca, parmesão em lascas',       price:13.50                   },
      { id:'p5', name:'Tartufo Nero',              desc:'Creme de trufa negra, mozzarella, cogumelos porcini, parmesão',              price:15.00, tag:'Especial'    },
      { id:'p6', name:'Burrata & Pomodorini',      desc:'Burrata fresca, tomates cherry, manjericão, azeite DOP',                    price:13.00                   },
      { id:'p7', name:'Vieri — Assinatura',        desc:'Creme de tomate assado, mozzarella fumada, nduja, mel de rosmaninho, nozes', price:14.50, tag:'Assinatura'  },
      { id:'p8', name:'Ortolana',                  desc:'Beringela grelhada, pimentos assados, azeitonas, alcaparras',               price:10.50, tag:'Vegetariana' },
    ],
    massas: [
      { id:'m1', name:'Spaghetti al Pomodoro',   desc:'Molho de tomate San Marzano, manjericão fresco, azeite extra virgem',        price:9.00  },
      { id:'m2', name:"Penne all'Arrabbiata",    desc:'Molho de tomate picante, alho, azeite, pimenta calabresa',                   price:9.50, tag:'Picante' },
      { id:'m3', name:'Tagliatelle al Ragù',     desc:'Ragù bolonhesa clássico cozinhado 4 horas, parmesão ralado',                 price:12.50 },
      { id:'m4', name:'Pasta ai Funghi',         desc:'Creme de cogumelos porcini, alho, natas, parmesão, salsa',                  price:11.00 },
      { id:'m5', name:'Rigatoni alla Norma',     desc:'Molho de tomate, beringela frita, ricotta salata, manjericão',               price:10.50, tag:'Vegetariana' },
      { id:'m6', name:'Spaghetti Carbonara',     desc:'Guanciale, ovo, pecorino romano, pimenta preta — receita original',         price:12.00, tag:'Clássica' },
    ],
    entradas: [
      { id:'e1', name:'Bruschetta al Pomodoro', desc:'Pão tostado, tomate cherry, alho, azeite DOP, manjericão fresco',           price:5.50  },
      { id:'e2', name:'Burrata com Rúcula',     desc:'Burrata fresca, rúcula, tomates cherry, pesto de manjericão, azeite',       price:8.50  },
      { id:'e3', name:'Tábua Italiana',         desc:'Presunto cru, salame piccante, provolone, azeitonas, pão artesanal',        price:12.50 },
      { id:'e4', name:'Arancini di Riso',       desc:'Bolinhas de arroz recheadas com ragù e mozzarella, fritas no momento',     price:7.00  },
      { id:'e5', name:'Carpaccio di Manzo',     desc:'Carpaccio de novilho, rúcula, parmesão em lascas, alcaparras, limão',      price:10.50, tag:'Especial' },
    ],
    saladas: [
      { id:'sl1', name:'Salada Caprese',             desc:'Mozzarella fresca, tomate, manjericão, azeite DOP, flor de sal',        price:8.50  },
      { id:'sl2', name:'Salada Rúcula & Parmesão',   desc:'Rúcula fresca, parmesão em lascas, nozes, limão, azeite',              price:7.50  },
      { id:'sl3', name:'Salada César',               desc:'Alface romana, croutons, parmesão, anchovas, molho césar caseiro',     price:8.00  },
      { id:'sl4', name:'Salada Mediterrânea',        desc:'Mix de folhas, azeitonas, tomate cherry, feta, pepino, vinagrete',     price:7.00  },
    ],
  },
  bebida: {
    aguas: [
      { id:'ag1', name:'Água Mineral sem Gás', desc:'50cl',    price:1.50 },
      { id:'ag2', name:'Água Mineral com Gás', desc:'50cl',    price:1.50 },
      { id:'ag3', name:'Água Mineral sem Gás', desc:'1 litro', price:2.50 },
      { id:'ag4', name:'Água Mineral com Gás', desc:'1 litro', price:2.50 },
    ],
    refrigerantes: [
      { id:'r1', name:'Coca-Cola Original',     desc:'33cl, lata',                                                    price:2.50 },
      { id:'r2', name:'Coca-Cola Zero',         desc:'33cl, lata',                                                    price:2.50 },
      { id:'r3', name:'Sprite',                 desc:'33cl, lata',                                                    price:2.50 },
      { id:'r4', name:'Sumol Laranja',          desc:'33cl, lata',                                                    price:2.50 },
      { id:'r5', name:'Limonada Siciliana',     desc:'Limão, hortelã, xarope de cana, água com gás — copo',           price:3.50, tag:'Casa' },
      { id:'r6', name:'Sumo de Laranja Natural',desc:'Espremido na hora — copo',                                      price:3.00, tag:'Natural' },
    ],
    cerveja: [
      { id:'c1', name:'Sagres',                desc:'33cl, garrafa',              price:2.80 },
      { id:'c2', name:'Super Bock',            desc:'33cl, garrafa',              price:2.80 },
      { id:'c3', name:'Peroni',                desc:'33cl, garrafa — Italiana',   price:3.20, tag:'Italiana' },
      { id:'c4', name:'Cerveja Artesanal IPA', desc:'33cl — artesanal portuguesa',price:3.80, tag:'Artesanal' },
    ],
    cafetaria: [
      { id:'cf1', name:'Espresso',             desc:'Café curto',                                                  price:1.20 },
      { id:'cf2', name:'Café Duplo',           desc:'Dois expressos',                                             price:1.80 },
      { id:'cf3', name:'Café com Leite',       desc:'Meia de leite',                                              price:1.50 },
      { id:'cf4', name:'Cappuccino',           desc:'Espresso, leite vaporizado, espuma',                        price:2.20 },
      { id:'cf5', name:'Chá',                  desc:'Várias infusões à escolha',                                 price:1.80 },
      { id:'cf6', name:'Tiramisù della Nonna', desc:'Sobremesa da casa — mascarpone, café espresso, cacau',      price:5.50, tag:'Sobremesa' },
    ],
  },
}
