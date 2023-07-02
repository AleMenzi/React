
const misProductos = [
    {id:"1", price: 640, title:"Posavasos del Increible Hulk", image:"https://phoenix3d.netlify.app/img/hulkposavasos.png", idCat:"1"},
    {id:"2", price: 550, title:"Posavasos del Dios del Trueno Thor", image:"https://phoenix3d.netlify.app/img/thorposavasos.png", idCat:"1"},
    {id:"3", price: 790, title:"Posavasos de Black Panther", image:"https://phoenix3d.netlify.app/img/bpantherposavasos.png", idCat:"2"},
    {id:"4", price: 830, title:"Posavasos de Iron Man", image:"https://phoenix3d.netlify.app/img/ironmanposavasos.png", idCat:"5"},
    {id:"5", price: 850, title:"Posavasos de Dr. Strange", image:"https://phoenix3d.netlify.app/img/drstrangeposavasos.png", idCat:"3"},
    {id:"6", price: 720, title:"Posavasos de Agentes de Shield", image:"https://phoenix3d.netlify.app/img/shieldposavasos.png", idCat:"4"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos)
        }, 200)
    })
};

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout( () => {
    const producto = misProductos.find(prod=> prod.id === id);
     resolve(producto)
    }, 200)
  })
}
  
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
    }, 200)
   })
  }

