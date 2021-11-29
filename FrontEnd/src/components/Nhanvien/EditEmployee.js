import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../HomePage/NavBar';

const axios = require('axios')


export default function AddProduct() {
    const listMgr = [];
    const [dataEmployee, setDataEmployee] = useState([])
    const [dataBranch, setDataBranch] = useState([])
    const [infoEmployee, setInfoEmployee] = useState([])
    const location = useLocation().state
    useEffect(() => {
        axios.get(`http://localhost:5000/nhan_vien`)
            .then(res => setDataEmployee(res.data))
            .catch(err => console.log('Đây là lỗi :', err))

        axios.get(`http://localhost:5000/chi_nhanh`)
            .then(res => setDataBranch(res.data))
            .catch(err => console.log('Đây là lỗi :', err))
        axios.get(`http://localhost:5000/nhan_vien/${location}`)
            .then(res => setInfoEmployee(res.data[0]))
            .catch(err => console.log('Đây là lỗi :', err))
    }, [])

    for(let i = 0; i <dataEmployee.length; i++)
        {
            if(!dataEmployee[i].cccd_nguoi_giam_sat) listMgr.push(dataEmployee[i])
        }
    console.log(listMgr)
    function fixDate(date) {
        return date && date.slice(0, 10);
    }
    function handleEditEmployee(e) {
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
        let noSupervisor = document.getElementById('noSupervisorEmployee').value
        let type = document.getElementById('typeEmployee').value


        e.preventDefault();

        if (numCard === '' || fname === '' || minit === '' || lname === '' ||
            salary === '' || phone === '' || bdate === '' ||
            address === '' || dateStartWork === '') {
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

        axios.post(`http://localhost:5000/nhan_vien/${location}`, {
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
                <NavBar />
            </div>
            <div class='container my-5' >

                <h2 class='d-flex justify-content-center text-primary my-5'>Chỉnh sửa sản phẩm</h2>

                <form class="row g-3 d-flex justify-content-center">
                    <div class="col-md-4">
                        <label for="numCardEmployee" class="form-label">Cccd</label>
                        <input type="text" class="form-control" id="numCardEmployee" defaultValue={infoEmployee.cccd} />
                    </div>
                    <div class="col-md-2">
                        <label for="fnameEmployee" class="form-label">Họ</label>
                        <input type="text" class="form-control" id="fnameEmployee" defaultValue={infoEmployee.ho} />
                    </div>
                    <div class="col-md-2">
                        <label for="minitEmployee" class="form-label">Tên đệm</label>
                        <input type="text" class="form-control" id="minitEmployee" defaultValue={infoEmployee.ten_dem} />
                    </div>
                    <div class="col-md-2">
                        <label for="lnameEmployee" class="form-label">Tên</label>
                        <input type="text" class="form-control" id="lnameEmployee" defaultValue={infoEmployee.ten} />
                    </div>
                    <div class="col-md-5">
                        <label for="salaryEmployee" class="form-label">Lương</label>
                        <input type="text" class="form-control" id="salaryEmployee" defaultValue={infoEmployee.luong} />
                    </div>
                    <div class="col-md-5">
                        <label for="phoneEmployee" class="form-label">Số điện thoại</label>
                        <input type="text" class="form-control" id="phoneEmployee" defaultValue={infoEmployee.sdt} />
                    </div>
                    <div class="col-md-5">
                        <label for="bdateEmployee" class="form-label">Ngày sinh</label>
                        <input type="text" class="form-control" id="bdateEmployee" placeholder="YYYY-MM-DD" defaultValue={fixDate(infoEmployee.ngay_sinh)} />
                    </div>
                    <div class="col-md-5">
                        <label for="shiftEmployee" class="form-label">Ca làm việc</label>
                        <select id="shiftEmployee" class="form-select">
                            <option selected>{infoEmployee.ca_lam_viec}</option>
                            <option>CẢ NGÀY</option>
                            <option >CHIỀU</option>
                            <option >SÁNG</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="addressEmployee" class="form-label">Địa chỉ</label>
                        <input type="text" class="form-control" id="addressEmployee" defaultValue={infoEmployee.dia_chi} />
                    </div>
                    <div class="col-md-5">
                        <label for="sexEmployee" class="form-label">Giới tính</label>
                        <select id="sexEmployee" class="form-select">
                            <option selected>{infoEmployee.gioi_tinh}</option>
                            <option>Nam</option>
                            <option >Nữ</option>
                            <option >Giới tính thứ ba</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="nameBranchEmployee" class="form-label">Tên chi nhánh</label>
                        <select id="nameBranchEmployee" class="form-select">
                            <option selected>{infoEmployee.ten_chi_nhanh}</option>
                            {dataBranch.map(item => (
                                <option>{item.ten_chi_nhanh}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="dateStartWorkEmployee" class="form-label">Ngày bắt đầu làm việc</label>
                        <input type="text" class="form-control" id="dateStartWorkEmployee" defaultValue={fixDate(infoEmployee.ngay_bat_dau_lam_viec)} />
                    </div>
                    <div class="col-md-5">
                        <label for="noSupervisorEmployee" class="form-label">Cccd người giám sát</label>
                        <select id="noSupervisorEmployee" class="form-select">
                            <option selected>{infoEmployee.cccd_nguoi_giam_sat}</option>
                            {listMgr.map(item => (
                                <option>{item.cccd + ' - ' + item.ten + ' - ' + item.ten_chi_nhanh}</option>
                            ))}
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label for="typeEmployee" class="form-label">Loại nhân viên</label>
                        <select id="typeEmployee" class="form-select">
                            <option selected>{infoEmployee.loai_nhan_vien}</option>
                            <option>QUẢN LÝ</option>
                            <option >BÁN HÀNG</option>
                            <option >GIAO HÀNG</option>
                            <option >BẢO VỆ</option>
                        </select>
                    </div>
                    <div class="col-10 d-flex justify-content-end">
                        <button type="submit" class="btn btn-success w-25" onClick={(e) => handleEditEmployee(e)}>Chỉnh sửa thông tin</button>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
    )
}