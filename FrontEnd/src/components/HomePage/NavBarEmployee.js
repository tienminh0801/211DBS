export default function NavBarEmployee() {
    function handleSearch(e) {
        e.preventDefault();
        window.location.href = `/?search=${document.getElementById("search").value}`;
    }

    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container">
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item me-5">
                            <a class="nav-link" aria-current="page" href="/">
                                Trang chủ
                            </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" aria-current="page" href="/product">
                                Sản phẩm
                            </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="/">
                                Đơn hàng
                            </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="/" tabindex="-1" aria-disabled="true">
                                Nhân viên
                            </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" tabindex="-1" aria-disabled="true" href="/baohanh">
                                Bảo hành
                            </a>
                        </li>
                    </ul>
                    <form class="d-flex" onSubmit={(e) => handleSearch(e)}>
                        <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            id="search"
                        />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}