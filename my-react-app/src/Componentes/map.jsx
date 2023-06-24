//Método MAP:
//En react lo utilizamos generalmente para crear una lista de componentes 
//a partir de un array de datos


const Map = () => {
    const productos = [
        {id: 1, nombre: "Monitor", precio: 5000},
        {id: 1, nombre: "Teclado", precio: 4000},
        {id: 1, nombre: "Pendrive", precio: 3000},
        {id: 1, nombre: "Mouse", precio: 2500},
    ]
    return(
        <div>
            <h2>Productos de computación</h2>
            <ul>
                {
                    productos.map(producto => {
                        //key es el identificador de los elementos que se están creando
                        <li key={producto.id}>
                            <span>{producto.nombre}</span>
                            <span>{producto.precio}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Map
