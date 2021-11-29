import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/NavBar';

const axios = require('axios')

function AddProductOrder({history}) {
    const [seriList, setSeriList] = useState([])
    const [product, setProduct] = useState({})
    const [seri, setSeri] = useState('Không')

    const location = useLocation().state

    useEffect(() => {
        axios.get(`http://localhost:5000/product`)
            .then(res => setSeriList(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:5000/product/getPd/${seri}`)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [seri])

    function handleBuy(e) {
        e.preventDefault()
        if (seri == 'Không') {
            toast.error('Vui lòng chọn sản phẩm', {
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
        axios.post(`http://localhost:5000/product/${seri}`, {
            ma_don_hang: location
        })
        history.push('/order/edit', location)
    }


    function ProductItem({ product }) {
        return (
            <tr>
                <td>{product.ten_san_pham}</td>
                <td>{product.ten_san_pham_tang_kem ? product.ten_san_pham_tang_kem : 'Không'}</td>
                <td>{product.loai_san_pham}</td>
                <td>{product.thoi_gian_bao_hanh}</td>
                <td>{product.gia_niem_yet}</td>
                <td>{product.khuyen_mai ? product.khuyen_mai : 'Không'}</td>
            </tr>
        )
    }

    return (
        <div >
            <div class='mb-5'>
                <NavBar pathName='order' />
            </div>
            <h2 class='d-flex justify-content-center text-danger my-5'>Thêm sản phẩm</h2>

            <form class="row g-3 d-flex justify-content-center" method='POST'>
                <div class="col-md-5">
                    <label for="nameProduct" class="form-label">Seri sản phẩm</label>
                    <select type="text" class="form-control" id="nameProduct" 
                    onChange={(e) => setSeri(e.target.value)}>
                        <option selected>Không</option>
                        {
                            seriList && seriList.map(item => 
                                <option key={item.seri_san_pham}>{item.seri_san_pham}</option> 
                            )
                        }
                    </select>
                </div>
                <div class="table-responsive">
                <div class='container my-5' >
                <table class="table table-striped table-sm table-hover">
                    <thead class='table-bordered'>
                        <tr class='table-danger'>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Sản phẩm tặng kèm</th>
                            <th scope="col">Loại sản phẩm</th>
                            <th scope="col">Bảo hành</th>
                            <th scope="col">Giá bán</th>
                            <th scope="col">Khuyến mãi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product && <ProductItem product={product} />
                        }
                    </tbody>
                </table>
                </div>
                <div class="col-10 d-flex justify-content-end">
                    <button type="submit" class="btn btn-success w-25" 
                    onClick={(e) => handleBuy(e)}>Thêm sản phẩm</button>
                    <ToastContainer />
                </div>
                </div>
            </form>
        </div>
    )
}

export default AddProductOrder
