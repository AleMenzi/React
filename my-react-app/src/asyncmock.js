const misProductos = [
    {id:1, nombre: "Yerba", precio: 800, img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gustoargentino.com%2Fproducts%2Fyerba-mate-naranja-cbse&psig=AOvVaw3CVjWU17k4wU8KiI1qDAan&ust=1686786551346000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCf7uK3wf8CFQAAAAAdAAAAABAH"},
    {id:2, nombre: "Azúcar", precio: 400, img: ""},
    {id:3, nombre: "Té", precio: 300, img: ""},
    {id:4, nombre: "Café", precio: 500, img: ""},
]

const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductos);
        }, 2000)
    })
}