import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../HomePage/NavBar";

const axios = require("axios");

export default function ManageBaoHanh() {
    const [data, setData] = useState([]);

    const searchKey = new URLSearchParams(window.location.search).get("search");

    useEffect(() => {
        if (searchKey) {
            axios
                .get(`http://localhost:8080/bao_hanh/search/${searchKey}`)
                .then((res) => setData(res.data))
                .catch((err) => console.log("Đây là lỗi :", err));
        } else {
            axios
                .get(`http://localhost:8080/bao_hanh`)
                .then((res) => setData(res.data))
                .catch((err) => console.log("Đây là lỗi :", err));
        }
    }, []);

    function BaoHanhItem({ baohanh }) {
        const history = useHistory();

        function handleRemoveBaoHanh() {
            axios.post(`http://localhost:8080/bao_hanh/remove/${baohanh.seri_sp}`).then((res) => {
                setData(res.data);
            });
        }

        return (
            <tr>
                <td>{baohanh.ma_so_hang}</td>
                <td>{baohanh.ten_dong_sp}</td>
                <td>{baohanh.seri_sp}</td>
                <td>{baohanh.ten_chi_nhanh}</td>
                <td>{baohanh.thoi_gian_bao_hanh}</td>
                <td>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Xóa
                    </button>
                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">
                                        Cảnh báo
                                    </h5>
                                    <button
                                        type="button"
                                        class="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div class="modal-body">
                                    Bạn có chắc chắn muốn xóa đơn bảo hành này ?
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        data-bs-dismiss="modal"
                                    >
                                        Không
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        onClick={() => handleRemoveBaoHanh()}
                                        data-bs-dismiss="modal"
                                    >
                                        Chắc chắn
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                            history.push("/baohanh/edit", baohanh.seri_sp);
                        }}
                    >
                        Chỉnh sửa
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <div>
            <div class="mb-5">
                <NavBar />
            </div>
            <div class="container my-5">
                <div class="row my-5">
                    <h2 class="col">Quản lí bảo hành</h2>
                    <button
                        type="button"
                        class="btn btn-sm btn-outline-primary mx-5 col-2 float-start"
                        onClick={() => (window.location.href = "/baohanh/add")}
                        style={{ width: "15%" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-plus-square-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                        </svg>
                        <a> Thêm đơn bảo hành </a>
                    </button>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-sm table-hover">
                        <thead class="table-bordered">
                            <tr class="table-danger">
                                <th scope="col">Mã số hãng</th>
                                <th scope="col">Tên dòng sản phẩm</th>
                                <th scope="col">Số seri của sản phẩm</th>
                                <th scope="col">Tên chi nhánh</th>
                                <th scope="col">Thời gian bảo hành (ngày)</th>
                                {/* <th scope="col">Tình trạng</th> */}
                                <th scope="col">Xóa</th>
                                <th scope="col">Chỉnh sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((baohanh) => {
                                return <BaoHanhItem baohanh={baohanh} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
