import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const axios = require('axios')

function ManageOrder() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/order`)
            .then(res => setData(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])


    function OrderItem({ order }) {

        const history = useHistory()

        function handleRemoveOrder(ma) {
            console.log(ma)
            axios.post(`http://localhost:5000/order/remove/${ma.ma_don_hang}`)
                .then(res => {
                    setData(res.data)
                })
        }



        return (
            <tr>
                <td>{order.ma_don_hang}</td>
                <td>{order.cccd_nv_giao_hang ? order.cccd_nv_giao_hang : 'Chưa phân'}</td>
                <td>{order.thoi_gian_giao ? order.thoi_gian_giao : 'Chưa giao'}</td>
                <td>{order.phi_giao}</td>
                <td>{order.tinh_trang}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-danger"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                        disabled={order.tinh_trang == 'Đã giao' ? true : false}
                        onClick = {() => console.log(order)}
                    >Xóa</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Cảnh báo</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Bạn có chắc chắn muốn xóa đơn hàng này ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Không</button>
                                    <button type="button" class="btn btn-primary"
                                        onClick={() => console.log(order)}
                                        data-bs-dismiss="modal"
                                    >Chắc chắn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                            history.push('/edit_order', order.ma_don_hang)
                        }}
                    >Xử lý</button>
                </td>
            </tr>
        )
    }

    return (
        <div >

            <div class='row my-5'>
                <h2 class='col'>Quản lí đơn hàng</h2>
                <button type="button" class="btn btn-sm btn-outline-success mx-5 col-2 float-start" onClick={() => window.location.href = '/add_order'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                    <a> Thêm đơn hàng </a>
                </button>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-sm table-hover">
                    <thead class='table-bordered'>
                        <tr class='table-danger'>
                            <th scope="col">Mã đơn hàng</th>
                            <th scope="col">CCCD NV giao hàng</th>
                            <th scope="col">Thời gian giao</th>
                            <th scope="col">Phí giao</th>
                            <th scope="col">Tình trạng</th>
                            <th scope="col">Xóa</th>
                            <th scope="col">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((order) => {
                            return <OrderItem order={order} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageOrder
