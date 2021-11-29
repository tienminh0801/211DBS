import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axios = require('axios')

function AddProductOrder() {
    const [seriList, setSeriList] = useState([])
    const [product, setProduct] = useState({})
    const [seri, setSeri] = useState('')
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
                    <button type="submit" class="btn btn-success w-25" onClick={(e) => console.log(e)}>Thêm sản phẩm</button>
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}

export default AddProductOrder
