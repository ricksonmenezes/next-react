function Header() {
    let name = 'Rixkson...'
    return(
        <h1>Hello {name}</h1>
    )
}

export default function Page() {
    return (
        <section>
            <Header/>
            <p>this is a paragraph</p>
        </section>
    )
}
/* export default function Page() {
    let name = 'Rixk'
    return(
        <h1>Hello {name}</h1>
    )
} */