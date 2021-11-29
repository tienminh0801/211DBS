export default function HomePage() {
    return (
        <div class="bg-dark" style={{ height: "780px" }}>
            <main
                class="cover-container d-flex align-content-center  text-center"
                style={{ paddingTop: "150px", marginLeft: "150px", border: "dark" }}
            >
                <div class="row">
                    <div class="m-5 col-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="white"
                            class="bi bi-laptop"
                            viewBox="0 0 16 16"
                            style={{ cursor: "pointer" }}
                            onClick={() => (window.location.href = "/product")}
                        >
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                        </svg>
                        <h2
                            class="text-white mt-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => (window.location.href = "/product")}
                        >
                            Quản lí sản phẩm
                        </h2>
                    </div>
                    <div class="m-5 col-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="white"
                            class="bi bi-cart"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <h2 class="text-white mt-4">Quản lí đơn hàng</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="m-5 col-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="white"
                            class="bi bi-people-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path
                                fill-rule="evenodd"
                                d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                            />
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                        <h2 class="text-white mt-4">Quản lí nhân viên</h2>
                    </div>
                    <div class="m-5 col-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            fill="white"
                            class="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16"
                            style={{ cursor: "pointer" }}
                            onClick={() => (window.location.href = "/baohanh")}
                        >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <h2
                            class="text-white mt-4"
                            style={{ cursor: "pointer" }}
                            onClick={() => (window.location.href = "/baohanh")}
                        >
                            Quản lí bảo hành
                        </h2>
                    </div>
                </div>
            </main>
        </div>
    );
}
