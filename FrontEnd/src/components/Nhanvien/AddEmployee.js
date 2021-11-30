import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/NavBar';

const axios = require('axios')


export default function AddEmployee() {
    const listMgr = [];
    const [dataEmployee, setDataEmployee] = useState([])
    const [dataBranch, setDataBranch] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/nhan_vien`)
            .then(res => setDataEmployee(res.data))
            .catch(err => console.log('Đây là lỗi :', err))

        axios.get(`http://localhost:5000/chi_nhanh`)
            .then(res => setDataBranch(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])
    
    
    for(let i = 0; i <dataEmployee.length; i++)
        {
            if(!dataEmployee[i].cccd_nguoi_giam_sat) listMgr.push(dataEmployee[i])
        }
    console.log(listMgr)

    function handleAddEmployee(e) {
        let numCard = document.getElementById('numCardEmployee').value
        let fname = document.getElementById('fnameEmployee').value
        let minit = document.getElementById('minitEmployee').value
        let lname = document.getElementById('lnameEmployee').value
        let salary = document.getElementById('salaryEmployee').value
        let phone = document.getElementById('phoneEmployee').value
        let bdate = document.getElementById('bdateEmployee').value
        let shift = document.getElementById('shiftEmployee').value
        let address = document.getElementById('addressEmployee').value
        let sex = document.getElementById('sexEmployee').value
        let nameBranch = document.getElementById('nameBranchEmployee').value
        let dateStartWork = document.getElementById('dateStartWorkEmployee').value
        let noSupervisor = document.getElementById('noSupervisorEmployee').value.slice(0, 9)
        let type = document.getElementById('typeEmployee').value


        e.preventDefault();

        if (numCard === '' || fname === '' || minit === '' || lname === '' ||
            salary === '' || phone === '' || bdate === '' || shift === 'Lựa chon' ||
            address === '' || sex === 'Lựa chọn' || nameBranch === 'Lựa chọn' ||
            dateStartWork === '' || noSupervisor === 'Lựa chọn' || type === 'Lựa chọn') {
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

        axios.post('http://localhost:5000/nhan_vien', {
            cccd: numCard,
            ho: fname,
            ten_dem: minit,
            ten: lname,
            luong: salary,
            sdt: phone,
            ngay_sinh: bdate,
            ca_lam_viec: shift,
            dia_chi: address,
            gioi_tinh: sex,
            ten_chi_nhanh: nameBranch,
            ngay_bat_dau_lam_viec: dateStartWork,
            cccd_nguoi_giam_sat: noSupervisor,
            loai_nhan_vien: type
        })

        window.location.href = '/employee'
    }

    return (
        <div >
            <div class='mb-1'>
                <NavBar pathName='employee' />
            </div>
            <div class='container my-5' >

                <h2 class='d-flex justify-content-center text-danger my-5' >Thêm nhân viên</h2>

                <form class="row g-3 d-flex justify-content-center">
                    <div class="col-md-4">
                        <label for="numCardEmployee" class="form-label">Cccd</label>
                        <input type="text" class="form-control" id="numCardEmployee" placeholder="xxxxxxxxx" />
                    </div>
                    <div class="col-md-2">
                        <label for="fnameEmployee" class="form-label">Họ</label>
                        <input type="text" class="form-control" id="fnameEmployee" />
                    </div>
                    <div class="col-md-2">
                        <label for="minitEmployee" class="form-label">Tên đệm</label>
                        <input type="text" class="form-control" id="minitEmployee" />
                    </div>
                    <div class="col-md-2">
                        <label for="lnameEmployee" class="form-label">Tên</label>
                        <input type="text" class="form-control" id="lnameEmployee" />
                    </div>
                    <div class="col-md-5">
                        <label for="salaryEmployee" class="form-label">Lương</label>
                        <input type="text" class="form-control" id="salaryEmployee" />
                    </div>
                    <div class="col-md-5">
                        <label for="phoneEmployee" class="form-label">Số điện thoại</label>
                        <input type="text" class="form-control" id="phoneEmployee" />
                    </div>
                    <div class="col-md-5">
                        <label for="bdateEmployee" class="form-label">Ngày sinh</label>
                        <input type="text" class="form-control" id="bdateEmployee" placeholder="YYYY-MM-DD" />
                    </div>
                    <div class="col-md-5">
                        <label for="shiftEmployee" class="form-label">Ca làm việc</label>
                        <select id="shiftEmployee" class="form-select">
                            <option selected>Lựa chọn</option>
                            <option>CẢ NGÀY</option>
                            <option >CHIỀU</option>
                            <option >SÁNG</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="addressEmployee" class="form-label">Địa chỉ</label>
                        <input type="text" class="form-control" id="addressEmployee" />
                    </div>
                    <div class="col-md-5">
                        <label for="sexEmployee" class="form-label">Giới tính</label>
                        <select id="sexEmployee" class="form-select">
                            <option selected>Lựa chọn</option>
                            <option>Nam</option>
                            <option >Nữ</option>
                            <option >Giới tính thứ ba</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="nameBranchEmployee" class="form-label">Tên chi nhánh</label>
                        <select id="nameBranchEmployee" class="form-select">
                            <option selected>Lựa chọn</option>
                            {dataBranch.map(item => (
                                <option>{item.ten_chi_nhanh}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="dateStartWorkEmployee" class="form-label">Ngày bắt đầu làm việc</label>
                        <input type="text" class="form-control" id="dateStartWorkEmployee" placeholder="YYYY-MM-DD" />
                    </div>
                    <div class="col-md-5">
                        <label for="noSupervisorEmployee" class="form-label">Cccd người giám sát</label>
                        <select id="noSupervisorEmployee" class="form-select">
                            <option selected>Lựa chọn</option>
                            {listMgr.map(item => (
                                <option>{item.cccd + ' - ' + item.ten + ' - ' + item.ten_chi_nhanh}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="typeEmployee" class="form-label">Loại nhân viên</label>
                        <select id="typeEmployee" class="form-select">
                            <option selected>Lựa chọn</option>
                            <option>QUẢN LÝ</option>
                            <option >BÁN HÀNG</option>
                            <option >GIAO HÀNG</option>
                            <option >BẢO VỆ</option>
                        </select>
                    </div>
                    <div class="col-10 d-flex justify-content-end">
                        <button type="submit" class="btn btn-success w-25" onClick={(e) => handleAddEmployee(e)}>Thêm nhân viên</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    )
}