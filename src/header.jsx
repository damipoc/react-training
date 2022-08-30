const header = () => {
    return (
        <header>
            <nav className = "navbar navbar-expand-sm">
            <a
                className="nav-bar"
                href="http://www.qa.com"
                target="_blank"
                rel="noopener noreffer"
            >
                <img alt="logo" src="https://qa-community.co.uk/static/qa_fill_primary.svg" width = "100px" height = "100px"></img>

            </a>
            <a href="/" className="navbar-brand">
                Todo app
            </a>
            </nav>
        </header>
    );
}
export default header;