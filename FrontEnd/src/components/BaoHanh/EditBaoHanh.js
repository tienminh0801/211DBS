import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../HomePage/NavBar";

const axios = require("axios");

export default function EditBaoHanh() {
    const [dataProduct, setDataProduct] = useState([]);
    const [infoBaoHanh, setInfoBaoHanh] = useState([]);
    const [dataSeri, setDataSeri] = useState([]);

    const location = useLocation().state;

    useEffect(() => {
        axios
            .get(`http://localhost:5000/bao_hanh/${location}`)
            .then((res) => setInfoBaoHanh(res.data[0]))
            .catch((err) => console.log("Đây là lỗi :", err));
        axios
            .get(`http://localhost:5000/san_pham`)
            .then((res) => setDataProduct(res.data))
            .catch((err) => console.log("Đây là lỗi :", err));

        axios
            .get(`http://localhost:5000/eachproduct`)
            .then((res) => setDataSeri(res.data))
            .catch((err) => console.log("Đây là lỗi :", err));
    }, []);

    function handleEditBaoHanh(e) {
        let name = document.getElementById("nameProduct").value;
        let seri = document.getElementById("seriProduct").value;
        let time = document.getElementById("tg_baohanh").value;

        e.preventDefault();

        axios.post(`http://localhost:5000/bao_hanh/${location}`, {
            ten_dong_sp: name,
            seri_sp: seri,
            thoi_gian_bao_hanh: time,
        });
        window.location.href = "/baohanh";
    }

    return (
        <div>
            <div class="mb-5">
                <NavBar />
            </div>
            <div class="container my-5">
                <h2 class="d-flex justify-content-center text-danger my-5">Thêm Đơn Bảo Hành</h2>

                <form class="row g-3 d-flex justify-content-center" method="POST">
                    <div class="col-10">
                        <label for="nameProduct" class="form-label">
                            Tên dòng sản phẩm
                        </label>
                        <select id="nameProduct" class="form-select">
                            <option selected>{infoBaoHanh.ten_dong_sp}</option>
                            {dataProduct.map((item) => (
                                <option>{item.ten_san_pham}</option>
                            ))}
                        </select>
                    </div>

                    <div class="col-md-10">
                        <label for="seriProduct" class="form-label">
                            Chọn số Seri của sản phẩm
                        </label>
                        <select id="seriProduct" class="form-select">
                            <option selected>{infoBaoHanh.seri_sp}</option>
                            {dataSeri.map((item) => (
                                <option
                                    value={item.seri_san_pham}
                                >{`${item.ten_dong_san_pham} - ${item.seri_san_pham}`}</option>
                            ))}
                        </select>
                    </div>

                    <div class="col-10">
                        <label for="tg_baohanh" class="form-label">
                            Thời gian bảo hành (ngày)
                        </label>
                        <input
                            type="number"
                            class="form-control"
                            id="tg_baohanh"
                            min="0"
                            defaultValue={infoBaoHanh.thoi_gian_bao_hanh}
                        />
                    </div>
                    <div class="col-10 d-flex justify-content-end">
                        <button
                            type="submit"
                            class="btn btn-success w-25"
                            onClick={handleEditBaoHanh}
                        >
                            Chỉnh sửa sản phẩm
                        </button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
}
