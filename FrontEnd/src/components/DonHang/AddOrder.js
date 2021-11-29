import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/NavBar';

const axios = require('axios')


export default function AddOrder() {

    const [emp, setEmp] = useState([])

    useEffect(() => {
    //     axios.get(`http://localhost:5000/san_pham`)
    //         .then(res => setDataProduct(res.data))
    //         .catch(err => console.log('Đây là lỗi :', err))

        axios.get(`http://localhost:5000/shipper`)
            .then(res => setEmp(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])
    
    function handleAddOrder(e) {
        let name = document.getElementById('nameOrder').value
        let cccd = document.getElementById('cccd-nv-giaohang').value
        let time_order = document.getElementById('thoi-gian-giao').value
        let fee = document.getElementById('phi-giao').value
        let tinh_trang = document.getElementById('tinh-trang').value


        e.preventDefault();

        if (name == '' || cccd == 'Không') {
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
        if (tinh_trang == 'Đã giao' && (time_order == null || cccd == 'Không' )) {
            toast.error('Vui lòng nhập CCCD nhân viên giao hàng và thời gian giao hàng', {
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

        axios.post('http://localhost:5000/order', {
            ma_don_hang: name,
            cccd_nv_giao_hang: cccd ? cccd : null,
            thoi_gian_giao: time_order ? time_order : null,
            phi_giao: fee ? fee : 0,
            tinh_trang: tinh_trang
        }).catch(err => console.log(err))

        window.location.href = '/order'
    }

    return (
        <div >
            <div class='mb-5'>
                <NavBar pathName='order' />
            </div>
            <h2 class='d-flex justify-content-center text-danger my-5'>Thêm đơn hàng</h2>

            <form class="row g-3 d-flex justify-content-center" method='POST'>
                <div class="col-md-5">
                    <label for="nameOrder" class="form-label">Mã đơn hàng</label>
                    <input type="text" class="form-control" id="nameOrder" />
                </div>
                <div class="col-md-5">
                    <label for="cccd-nv-giaohang" class="form-label">CCCD nhân viên giao hàng</label>
                    <select id="cccd-nv-giaohang" class="form-select">
                        <option selected>Không</option>
                        {emp && emp.map(item => (
                            <option>{item.cccd}</option>
                        ))}
                    </select>
                </div>
                <div class="col-10">
                    <label for="thoi-gian-giao" class="form-label">Thời gian giao</label>
                    <input type="datetime-local" class="form-control" id="thoi-gian-giao"/>
                </div>
                <div class="col-10">
                    <label for="phi-giao" class="form-label">Phí giao</label>
                    <input type="number" class="form-control" id="phi-giao"/>
                </div>
                <div class="col-10">    
                    <label for="tinh-trang" class="form-label">Tình trạng</label>
                    <select id="tinh-trang" class="form-select">
                        <option selected>Chưa giao</option>
                    </select>
                </div>
                <div class="col-10 d-flex justify-content-end">
                    <button type="submit" class="btn btn-success w-25" 
                    onClick={(e) => handleAddOrder(e)}>Thêm đơn hàng</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}