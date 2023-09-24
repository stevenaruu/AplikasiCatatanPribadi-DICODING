import Card from "../card/Card"

const CardSection = (props) => {
    const { children, title } = props
    return (
        <article className="container">
            <br />
            <h1 className="main-title">{title}</h1>
            <section className="card-container">
                {children}
            </section>
        </article>
    )
}

export default CardSection;