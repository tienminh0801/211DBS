import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import NavBar from '../HomePage/NavBar'

const axios = require('axios')



export default function ListFamilyEmployee() {

    const [dataF, setDataF] = useState([])
    const [dataE, setDataE] = useState([])
    const searchKey = (new URLSearchParams(window.location.search)).get('search')
    useEffect(() => {
        axios.get(`http://localhost:5000/nguoi_than/`)
            .then(res => setDataF(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        if (searchKey) {
            axios.get(`http://localhost:5000/nhan_vien/search/${searchKey}`)
                .then(res => setDataE(res.data))
                .catch(err => console.log('Đây là lỗi :', err))
        }
        else {
            axios.get(`http://localhost:5000/nhan_vien`)
                .then(res => setDataE(res.data))
                .catch(err => console.log('Đây là lỗi :', err))
        }
    }, [])

    function EmployeeFamilyItem({ employee }) {

        function fixDate(date) {
            return date && date.slice(0, 10);
        }
        function checkNameFamily(data, list) {
            let ten = "";
            for (let i = 0; i < list.length; i++) {
                if (data === list[i].cccd_nv) ten = list[i].ho_ten
            }
            return ten;
        }
        function checkBdateFamily(data, list) {
            let bdate = "";
            for (let i = 0; i < list.length; i++) {
                if (data === list[i].cccd_nv) bdate = list[i].ngay_sinh
            }
            return bdate;
        }
        function checkRelateFamily(data, list) {
            let relate = "";
            for (let i = 0; i < list.length; i++) {
                if (data === list[i].cccd_nv) relate = list[i].moi_quan_he
            }
            return relate;
        }
        return (
            <tr>
                <td>{employee.cccd}</td>
                <td>{employee.ho + ' ' + employee.ten_dem + ' ' + employee.ten}</td>
                <td>{employee.sdt}</td>
                <td>{employee.loai_nhan_vien}</td>
                <td>{checkNameFamily(employee.cccd, dataF) ? checkNameFamily(employee.cccd, dataF) : "Chưa có dữ liệu"}</td>
                <td>{checkBdateFamily(employee.cccd, dataF) ? checkBdateFamily(employee.cccd, dataF).slice(0, 10) : "Chưa có dữ liệu"}</td>
                <td>{checkRelateFamily(employee.cccd, dataF) ? checkRelateFamily(employee.cccd, dataF) : "Chưa có dữ liệu"}</td>
            </tr>
        )
    }

    return (

        <div >
            <div class='mb-1'>
                <NavBar pathName='employee' />
            </div>
            <div class='container my-5' >
                <div class='row my-2'>
                    <h2 class='col' style={{ color: "red" }}>QUẢN LÝ NHÂN VIÊN</h2>
                </div>
                <div class="table-responsive">
                    <button type="button" class="btn btn-sm btn-outline-warning col-2 my-1 float-start" onClick={() => window.location.href = '/employee'}>
                        <a> Danh sách nhân viên </a>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger mx-5 col-3 my-1 float-start" onClick={() => window.location.href = '/employee_family'}>
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
                                <th scope="col">Cccd nhân viên</th>
                                <th scope="col">Họ và tên nhân viên</th>
                                <th scope="col">Số điện thoại</th>
                                <th scope="col">Loại nhân viên</th>
                                <th scope="col">Tên người thân</th>
                                <th scope="col">Ngày sinh của người thân</th>
                                <th scope="col">Mối quan hệ</th>
                            </tr>
                        </thead>
                        <tbody >
                            {dataE.map((employee) => {
                                return <EmployeeFamilyItem employee={employee} />
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}