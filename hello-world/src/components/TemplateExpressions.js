import MyComponent from "./MyComponent"

const TemplateExpressions = () => {

    const name = "Sabrina"
    const data = {
        age: 21,
        job: "Programmer",
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <MyComponent/>
        </div>
        
    )
}

export default TemplateExpressions