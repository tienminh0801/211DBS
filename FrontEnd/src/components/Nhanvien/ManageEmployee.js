import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../HomePage/NavBarEmployee';
const axios = require('axios')



export default function ManageEmployee() {

    const [data, setData] = useState([])
    const searchKey = (new URLSearchParams(window.location.search)).get('search')
    useEffect(() => {
        if (searchKey) {
            axios.get(`http://localhost:5000/nhan_vien/search/${searchKey}`)
                .then(res => setData(res.data))
                .catch(err => console.log('Đây là lỗi :', err))
        }
        else {
            axios.get(`http://localhost:5000/nhan_vien`)
            .then(res => setData(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        }
    }, [])

    function EmployeeItem({ employee }) {

        const history = useHistory()

        function handleRemoveEmployee() {
            axios.post(`http://localhost:5000/nhan_vien/remove/${employee.cccd}`)
                .then(res => {
                    setData(res.data)
                })
        }

        function fixDate(date){
            return date && date.slice(0, 10);
        }
        return (
            <tr>
                <td>{employee.cccd}</td>
                <td>{employee.ho + ' ' + employee.ten_dem + ' ' + employee.ten}</td>
                <td>{employee.luong}</td>
                <td>{employee.sdt}</td>
                <td>{fixDate(employee.ngay_sinh)}</td>
                <td>{employee.ca_lam_viec}</td>
                <td>{employee.dia_chi}</td>
                <td>{employee.gioi_tinh}</td>
                <td>{employee.ten_chi_nhanh}</td>
                <td>{fixDate(employee.ngay_bat_dau_lam_viec)}</td>
                <td>{employee.cccd_nguoi_giam_sat ? employee.cccd_nguoi_giam_sat : "Không"}</td>
                <td>{employee.loai_nhan_vien}</td>
                <td>
                    <button type="button" class="btn btn-sm btn-outline-danger"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                    >Xóa</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Cảnh báo</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Bạn có chắc chắn muốn xóa nhân viên này ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Không</button>
                                    <button type="button" class="btn btn-primary"
                                        onClick={() => {handleRemoveEmployee()}}
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
                            history.push('/edit_employee', employee.cccd)
                        }}
                    >Sửa</button>
                </td>
            </tr>
        )
    }

    return (

        <div >
            <div class='mb-1'>
                <NavBar />
            </div>
            <div class='row my-2'>
                <h2 class='col' style={{color: "red"}}>QUẢN LÝ NHÂN VIÊN</h2>
    
            </div>
            <div class="table-responsive">
            <button type="button" class="btn btn-sm btn-outline-warning col-2 my-1 float-start" onClick={() => window.location.href = '/'}>
                    <a> Danh sách nhân viên </a>
            </button>
            <button type="button" class="btn btn-sm btn-outline-danger mx-5 col-3 my-1 float-start" onClick={() => window.location.href = '/employee_family'}>
                    <a> Danh sách người thân của nhân viên </a>
            </button>
            <button type="button" class="btn btn-sm btn-outline-success col-2 my-1 float-end" onClick={() => window.location.href = '/insert_employee'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                    <a> Thêm nhân viên </a>
            </button>
                <table class="table table-striped table-sm table-hover">
                    <thead class='table-bordered'>
                        <tr class='table-danger'>
                            <th scope="col">Cccd</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Lương</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Ngày sinh</th>
                            <th scope="col">Ca làm việc</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Tên chi nhánh</th>
                            <th scope="col">Ngày bắt đầu làm việc</th>
                            <th scope="col">Cccd người giám sát</th>
                            <th scope="col">Loại nhân viên</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((employee) => {
                            return <EmployeeItem employee={employee} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}