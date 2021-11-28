import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../HomePage/NavBar";

const axios = require("axios");

export default function AddBaoHanh() {
    const [dataProduct, setDataProduct] = useState([]);
    const [dataSeri, setDataSeri] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/san_pham`)
            .then((res) => setDataProduct(res.data))
            .catch((err) => console.log("Đây là lỗi :", err));

        axios
            .get(`http://localhost:8080/eachproduct`)
            .then((res) => setDataSeri(res.data))
            .catch((err) => console.log("Đây là lỗi :", err));
    }, []);

    function handleAddProduct(e) {
        let name = document.getElementById("nameProduct").value;
        let bonus = document.getElementById("bonusProduct").value;
        let type = document.getElementById("typeProduct").value;
        let material = document.getElementById("material").value;
        let price = document.getElementById("price").value;
        let discount = document.getElementById("discount").value;
        let manufactory = document.getElementById("manufactory").value;
        let guaranteeTime = document.getElementById("guaranteeTime").value;
        let debutTime = document.getElementById("debutTime").value;

        e.preventDefault();

        if (
            name == "" ||
            type == "" ||
            material == "" ||
            price == "" ||
            name == "" ||
            guaranteeTime == "" ||
            manufactory == "Lựa chọn"
        ) {
            toast.error("Thông tin chưa được điền đầy đủ", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        axios.post("http://localhost:8080/bao_hanh", {
            ten_san_pham: name,
            ten_san_pham_tang_kem: bonus == "Không" ? null : bonus,
            loai_san_pham: type,
            khuyen_mai: discount == "Không" ? null : discount,
            ma_so_hang: dataSeri.find((item) => item.ten_hang == manufactory).ma_so_hang,
            gia_niem_yet: price,
            thoi_gian_bao_hanh: guaranteeTime,
            chat_lieu: material,
            thoi_gian_ra_mat: debutTime,
        });

        window.location.href = "/product";
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
                        <label for="bonusProduct" class="form-label">
                            Tên dòng sản phẩm
                        </label>
                        <select id="bonusProduct" class="form-select">
                            <option selected>Không</option>
                            {dataProduct.map((item) => (
                                <option>{item.ten_san_pham}</option>
                            ))}
                        </select>
                    </div>

                    <div class="col-md-10">
                        <label for="manufactory" class="form-label">
                            Chọn số Seri của sản phẩm
                        </label>
                        <select id="manufactory" class="form-select">
                            <option selected>Lựa chọn</option>
                            {dataSeri.map((item) => (
                                <option>{`${item.ten_dong_san_pham} - ${item.seri_san_pham}`}</option>
                            ))}
                        </select>
                    </div>

                    <div class="col-10 d-flex justify-content-end">
                        <button
                            type="submit"
                            class="btn btn-success w-25"
                            onClick={(e) => handleAddProduct(e)}
                        >
                            Thêm sản phẩm
                        </button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    );
}
