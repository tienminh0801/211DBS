import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const axios = require('axios')



export default function ManageProduct() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/san_pham`)
            .then(res => setData(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])

    function ProductItem({ product }) {

        const history = useHistory()

        function handleRemoveProduct() {
            axios.post(`http://localhost:8080/san_pham/remove/${product.ten_san_pham}`)
                .then(res => {
                    setData(res.data)
                })
        }



        return (
            <tr>
                <td>{product.ten_san_pham}</td>
                <td>{product.ten_san_pham_tang_kem ? product.ten_san_pham_tang_kem : 'Không'}</td>
                <td>{product.loai_san_pham}</td>
                <td>{product.chat_lieu}</td>
                <td>{product.gia_niem_yet}</td>
                <td>{product.khuyen_mai ? product.khuyen_mai : 'Không'}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-danger"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >Xử lý</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Cảnh báo</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Bạn có chắc chắn muốn xóa sản phẩm này ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Không</button>
                                    <button type="button" class="btn btn-primary"
                                        onClick={() => handleRemoveProduct()}
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
                            history.push('/edit', product.ten_san_pham)
                        }}
                    >Xử lý</button>
                </td>
            </tr>
        )
    }

    return (

        <div >

            <div class='row my-5'>
                <h2 class='col'>Quản lí sản phẩm</h2>
                <button type="button" class="btn btn-sm btn-outline-success mx-5 col-2 float-start" onClick={() => window.location.href = '/add'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                    <a> Thêm sản phẩm </a>
                </button>
            </div>
            <div class="table-responsive">
                <table class="table table-striped table-sm table-hover">
                    <thead class='table-bordered'>
                        <tr class='table-danger'>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Sản phẩm tặng kèm</th>
                            <th scope="col">Loại sản phẩm</th>
                            <th scope="col">Chất liệu</th>
                            <th scope="col">Giá bán</th>
                            <th scope="col">Khuyến mãi</th>
                            <th scope="col">Xóa</th>
                            <th scope="col">Chỉnh sửa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => {
                            return <ProductItem product={product} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}