import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axios = require('axios')


export default function AddProduct() {

    const [dataProduct, setDataProduct] = useState([])
    const [infoProduct, setInfoProduct] = useState([])
    const [dataFactory, setDataFactory] = useState([])

    const location = useLocation().state


    useEffect(() => {
        axios.get(`http://localhost:5000/san_pham/${location}`)
            .then(res => setInfoProduct(res.data[0]))
            .catch(err => console.log('Đây là lỗi :', err))


        axios.get(`http://localhost:5000/san_pham/`)
            .then(res => setDataProduct(res.data))
            .catch(err => console.log('Đây là lỗi :', err))

        axios.get(`http://localhost:5000/hang_san_xuat`)
            .then(res => setDataFactory(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])

    function handleEditProduct(e) {
        let name = document.getElementById('nameProduct').value
        let bonus = document.getElementById('bonusProduct').value
        let type = document.getElementById('typeProduct').value
        let material = document.getElementById('material').value
        let price = document.getElementById('price').value
        let discount = document.getElementById('discount').value
        let manufactory = document.getElementById('manufactory').value
        let guaranteeTime = document.getElementById('guaranteeTime').value

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

        axios.post(`http://localhost:5000/san_pham/${location}`, {
            ten_san_pham: name,
            ten_san_pham_tang_kem: bonus == 'Không' ? null : bonus,
            loai_san_pham: type,
            khuyen_mai: discount == 'Không'? null : discount,
            ma_so_hang: dataFactory.find(item => item.ten_hang == manufactory).ma_so_hang,
            gia_niem_yet: price,
            thoi_gian_bao_hanh: guaranteeTime,
            chat_lieu: material,
            thoi_gian_ra_mat: null
        })
        window.location.href = '/'

    }

    return (
        <div >

            <h2 class='d-flex justify-content-center text-primary my-5'>Chỉnh sửa sản phẩm</h2>

            <form class="row g-3 d-flex justify-content-center " method='POST'>
                <div class="col-md-5">
                    <label for="nameProduct" class="form-label">Tên sản phẩm</label>
                    <input type="text" class="form-control" id="nameProduct" defaultValue={infoProduct.ten_san_pham} change/>
                </div>
                <div class="col-md-5">
                    <label for="bonusProduct" class="form-label">Sản phẩm tặng kèm</label>
                    <select id="bonusProduct" class="form-select">
                        {infoProduct.ten_san_pham_tang_kem ? <option selected>{infoProduct.ten_san_pham_tang_kem}</option> 
                                                           : <option selected>Không</option>
                        }
                        {dataProduct.map(item => (
                            <option>{item.ten_san_pham}</option>
                        )).filter(item => item.ten_san_pham == infoProduct.ten_san_pham_tang_kem )}
                    </select>
                </div>
                <div class="col-10">
                    <label for="typeProduct" class="form-label">Loại sản phẩm</label>
                    <input type="text" class="form-control" id="typeProduct" defaultValue={infoProduct.loai_san_pham} />
                </div>
                <div class="col-10">
                    <label for="material" class="form-label">Chất liệu</label>
                    <input type="text" class="form-control" id="material" defaultValue={infoProduct.chat_lieu} />
                </div>
                <div class="col-md-10">
                    <label for="price" class="form-label">Giá bán</label>
                    <input type="text" class="form-control" id="price" defaultValue={infoProduct.gia_niem_yet}/>
                </div>
                <div class="col-md-10">
                    <label for="discount" class="form-label">Khuyến mãi </label>
                    <input type="text" class="form-control" id="discount" 
                    defaultValue={infoProduct.khuyen_mai ? infoProduct.khuyen_mai : 'Không'} />
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
                    <input type="text" class="form-control" id="guaranteeTime" defaultValue={infoProduct.thoi_gian_bao_hanh} />
                </div>
                <div class="col-10 d-flex justify-content-end">
                    <button type="submit" class="btn btn-success w-25" onClick={(e) => handleEditProduct(e)}>Chỉnh sửa sản phẩm</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}