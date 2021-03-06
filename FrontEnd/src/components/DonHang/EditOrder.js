import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/NavBar';
const axios = require('axios')

function EditOrder({ history }) {
    const [dataOrder, setDataOrder] = useState([])
    const [infoOrder, setInfoOrder] = useState([])
    const [emp, setEmp] = useState([])
    const [sale, setSale] = useState([])
    const [cus, setCus] = useState([])
    const [duocxuly, setDuocxuly] = useState(null)
    const location = useLocation().state

    useEffect(() => {
        axios.get(`http://localhost:5000/order/${location}`)
            .then(res => setInfoOrder(res.data[0]))
            .catch(err => console.log('Đây là lỗi :', err))
        axios.get(`http://localhost:5000/product/${location}`)
            .then(res => setDataOrder(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        axios.get(`http://localhost:5000/shipper`)
            .then(res => setEmp(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        axios.get(`http://localhost:5000/sale`)
            .then(res => setSale(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        axios.get(`http://localhost:5000/customer`)
            .then(res => setCus(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        axios.get(`http://localhost:5000/duocxuly/${location}`)
            .then(res => setDuocxuly(res.data[0]))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])
    console.log(duocxuly)
    function handleEditOrder(e) {
        let name = document.getElementById('nameOrder').value
        let cccd_nv = document.getElementById('cccd-nv-giao-hang').value
        let time_ship = document.getElementById('time-ship').value
        let fee = document.getElementById('fee').value
        let tinh_trang = document.getElementById('tinh_trang').value
        let cccd_sale = document.getElementById('cccd-nv-ban-hang').value
        let sdt = document.getElementById('khach-hang').value

        e.preventDefault();

        if (name == '' || (sdt == 'Không' && cccd_sale != 'Không') || (sdt != 'Không' && cccd_sale == 'Không')) {
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
        if (tinh_trang == 'Đã giao' && (time_ship == null || cccd_nv == 'Không')) {
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
        if (tinh_trang == 'Đã giao' && !duocxuly) {
            toast.error('Đơn hàng chưa được xử lý', {
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
        axios.post(`http://localhost:5000/order/${location}`, {
            ma_don_hang: name,
            cccd_nv_giao_hang: cccd_nv,
            thoi_gian_giao: time_ship ? time_ship : null,
            phi_giao: fee ? fee : 0,
            tinh_trang: tinh_trang
        })
        if (sdt != 'Không' && cccd_sale != 'Không') {
            if (!duocxuly)
            axios.post(`http://localhost:5000/duocxuly/${location}`, {
                sdt_khach_hang: sdt,
                cccd_nv_ban_hang: cccd_sale
            })
            else axios.post(`http://localhost:5000/duocxuly/update/${location}`, {
                sdt_khach_hang: sdt,
                cccd_nv_ban_hang: cccd_sale
            })
        }
        window.location.href = '/order'

    }

    function ProductItem({ product }) {

        function handleRemoveProduct(e) {
            e.preventDefault()
            if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm khỏi đơn hàng này ?")) {
                axios.post(`http://localhost:5000/product/delete/${product.seri_san_pham}`, {
                    ma_don_hang: null
                })
            }
            axios.get(`http://localhost:5000/product/${location}`)
                .then(res => setDataOrder(res.data))
                .catch(err => console.log('Đây là lỗi :', err))
        }



        return (
            <tr>
                <td>{product.ten_san_pham}</td>
                <td>{product.ten_san_pham_tang_kem ? product.ten_san_pham_tang_kem : 'Không'}</td>
                <td>{product.loai_san_pham}</td>
                <td>{product.thoi_gian_bao_hanh}</td>
                <td>{product.gia_niem_yet}</td>
                <td>{product.khuyen_mai ? product.khuyen_mai : 'Không'}</td>
                <td>
                    {infoOrder.tinh_trang !== "Đã giao" &&
                        <button type="button" class="btn btn-sm btn-outline-danger"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                            onClick={(e) => handleRemoveProduct(e)}
                        >Xóa</button>
                    }
                </td>
            </tr>
        )
    }

    return (
        <div>
            <div class='mb-5'>
                <NavBar pathName='order' />
            </div>
            <h2 class='d-flex justify-content-center text-primary my-5'>Chỉnh sửa đơn hàng</h2>
            <form class="row g-3 d-flex justify-content-center " method='POST'>
                <div class="col-md-5">
                    <label for="nameOrder" class="form-label">Tên đơn hàng</label>
                    <input type="text" class="form-control" id="nameOrder" defaultValue={infoOrder.ma_don_hang} change />
                </div>
                <div class="col-md-5">
                    <label for="cccd-nv-giao-hang" class="form-label">CCCD nhân viên giao hàng</label>
                    <select id="cccd-nv-giao-hang" class="form-select" >
                        {
                            emp && emp.map(item => (
                                <option key={item.cccd} selected={item.cccd == infoOrder.cccd_nv_giao_hang ? true : false}>{item.cccd}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="col-10">
                    <label for="time-ship" class="form-label">Thời gian giao</label>
                    <input type="datetime-local" class="form-control" id="time-ship" defaultValue={infoOrder.thoi_gian_giao} change />
                </div>
                <div class="col-md-5">
                    <label for="fee" class="form-label">Phí giao</label>
                    <input type="number" class="form-control" id="fee" defaultValue={infoOrder.phi_giao} change />
                </div>
                <div class="col-md-5">
                    <label for="tinh_trang" class="form-label">Tình trạng</label>
                    {
                        infoOrder.tinh_trang == 'Đã giao' ?
                            <select type="text" class="form-control" id="tinh_trang">
                                <option selected>Đã giao</option>
                                <option>Chưa giao</option>
                            </select>
                            :
                            <select type="text" class="form-control" id="tinh_trang">
                                <option>Đã giao</option>
                                <option selected>Chưa giao</option>
                            </select>
                    }
                </div>
                
                <div class="col-md-5">
                    <label for="cccd-nv-ban-hang" class="form-label">CCCD nhân viên bán hàng</label>
                    <select id="cccd-nv-ban-hang" class="form-select" >
                        <option>Không</option>
                        {
                            sale && sale.map(item => (
                                <option key={item.cccd} 
                                selected={duocxuly ? item.cccd == duocxuly.cccd_nv_ban_hang ? true : false : false}
                                >{item.cccd}</option>
                            ))
                        }
                    </select>
                </div>
                <div class="col-md-5">
                    <label for="khach-hang" class="form-label">Khách hàng</label>
                    <select id="khach-hang" class="form-select" >
                        <option>Không</option>
                        {
                            cus && cus.map(item => (
                                <option key={item.sdt} 
                                selected={duocxuly ? item.sdt == duocxuly.sdt_khach_hang ? true : false : false}
                                >{item.sdt}</option>
                            ))
                        }
                    </select>
                </div>
                {
                    infoOrder.tinh_trang !== "Đã giao" &&
                    <div class="col-10 d-flex justify-content-end">
                        <button type="submit" class="btn btn-success w-25"
                            onClick={(e) => handleEditOrder(e)}>Xác nhận</button>
                        <ToastContainer />
                    </div>
                }
            </form>
            <div class='container my-5' >
                <div class='row my-5'>
                    <h2 class='col'>Danh sách sản phẩm</h2>
                    {infoOrder.tinh_trang !== "Đã giao" &&
                        <button type="button" class="btn btn-sm btn-outline-success mx-5 col-2 float-start"
                            disabled={infoOrder.tinh_trang == "Đã giao" ? true : false}
                            onClick={() => {
                                history.push('/order/add_product', infoOrder.ma_don_hang)
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                            </svg>
                            <a> Thêm sản phẩm </a>
                        </button>
                    }
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-sm table-hover">
                        <thead class='table-bordered'>
                            <tr class='table-danger'>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Sản phẩm tặng kèm</th>
                                <th scope="col">Loại sản phẩm</th>
                                <th scope="col">Bảo hành</th>
                                <th scope="col">Giá bán</th>
                                <th scope="col">Khuyến mãi</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataOrder && dataOrder.map((product) => {
                                return <ProductItem product={product} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EditOrder
