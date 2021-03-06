import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/NavBar';

const axios = require('axios')


export default function AddProduct() {

    const [dataProduct, setDataProduct] = useState([])
    const [dataFactory, setDataFactory] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/san_pham`)
            .then(res => setDataProduct(res.data))
            .catch(err => console.log('Đây là lỗi :', err))

        axios.get(`http://localhost:5000/hang_san_xuat`)
            .then(res => setDataFactory(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])

    function handleAddProduct(e) {
        let name = document.getElementById('nameProduct').value
        let bonus = document.getElementById('bonusProduct').value
        let type = document.getElementById('typeProduct').value
        let material = document.getElementById('material').value
        let price = document.getElementById('price').value
        let discount = document.getElementById('discount').value
        let manufactory = document.getElementById('manufactory').value
        let guaranteeTime = document.getElementById('guaranteeTime').value
        let debutTime = document.getElementById('debutTime').value

        e.preventDefault();

        if (name == '' || type == '' || material == '' || price == '' || name == '' || guaranteeTime == '' || manufactory == 'Lựa chọn') {
            toast.error('Thông tin chưa được điền đầy đủ', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }

        axios.post('http://localhost:5000/san_pham', {
            ten_san_pham: name,
            ten_san_pham_tang_kem: bonus == 'Không' ? null : bonus,
            loai_san_pham: type,
            khuyen_mai: discount == 'Không' ? null : discount,
            ma_so_hang: dataFactory.find(item => item.ten_hang == manufactory).ma_so_hang,
            gia_niem_yet: price,
            thoi_gian_bao_hanh: guaranteeTime,
            chat_lieu: material,
            thoi_gian_ra_mat: debutTime
        })

        window.location.href = '/product'
    }

    return (
        <div >
            <div class='mb-5'>
                <NavBar />
            </div>
            <div class='container my-5' >

                <h2 class='d-flex justify-content-center text-danger my-5'>Thêm sản phẩm</h2>

                <form class="row g-3 d-flex justify-content-center" method='POST'>
                    <div class="col-md-5">
                        <label for="nameProduct" class="form-label">Tên sản phẩm</label>
                        <input type="text" class="form-control" id="nameProduct" />
                    </div>
                    <div class="col-md-5">
                        <label for="bonusProduct" class="form-label">Sản phẩm tặng kèm</label>
                        <select id="bonusProduct" class="form-select">
                            <option selected>Không</option>
                            {dataProduct.map(item => (
                                <option>{item.ten_san_pham}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-10">
                        <label for="typeProduct" class="form-label">Loại sản phẩm</label>
                        <input type="text" class="form-control" id="typeProduct" placeholder="Điện thoại, Laptop, Tablet, ..." />
                    </div>
                    <div class="col-10">
                        <label for="material" class="form-label">Chất liệu</label>
                        <input type="text" class="form-control" id="material" placeholder="Kim loại, Kính, Nhựa, ..." />
                    </div>
                    <div class="col-md-10">
                        <label for="price" class="form-label">Giá bán</label>
                        <input type="text" class="form-control" id="price" />
                    </div>
                    <div class="col-md-10">
                        <label for="discount" class="form-label">Khuyến mãi </label>
                        <input type="text" class="form-control" id="discount" placeholder='Không' />
                    </div>
                    <div class="col-md-10">
                        <label for="manufactory" class="form-label">Hãng sản xuất</label>
                        <select id="manufactory" class="form-select">
                            <option selected>Lựa chọn</option>
                            {dataFactory.map(item => (
                                <option>{item.ten_hang}</option>
                            ))}
                        </select>
                    </div><div class="col-md-10">
                        <label for="guaranteeTime" class="form-label">Thời gian bảo hành </label>
                        <input type="text" class="form-control" id="guaranteeTime" placeholder='2 năm' />
                    </div>
                    <div class="col-md-10">
                        <label for="debutTime" class="form-label">Thời gian ra mắt </label>
                        <input type="date" class="form-control" id="debutTime" />
                    </div>
                    <div class="col-10 d-flex justify-content-end">
                        <button type="submit" class="btn btn-success w-25" onClick={(e) => handleAddProduct(e)}>Thêm sản phẩm</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    )
}