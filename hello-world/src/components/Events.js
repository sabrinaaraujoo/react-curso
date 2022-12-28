const Events = () => {

    const handleMyEnvent = (e) => {
        console.log(e)
        console.log("ativou o evento!")
    }

    const rederSomethig = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso reenderizar isso</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEnvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Outro Botão")}>Clique aqui!</button>
            </div>
            {rederSomethig(true)}
            {rederSomethig(false)}
        </div>
    )
}

export default Events