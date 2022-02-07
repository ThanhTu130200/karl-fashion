
function Header() {
    return (
        <div className="header grid wide">
            <div className="header__container row">
                <div className="logo col c-4 c-o-4">
                    <img src="../../images/logo.png" alt="logo" />
                </div>
                <div className="bag-and-category-icon col c-3 c-o-1">
                    <a>
                        Yourbag
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header