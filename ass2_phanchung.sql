SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `bao_hanh` (
  `ma_so_hang` varchar(255) NOT NULL,
  `ten_dong_sp` varchar(255) NOT NULL,
  `seri_sp` varchar(255) NOT NULL,
  `ten_chi_nhanh` varchar(255) NOT NULL,
  `thoi_gian_bao_hanh` int(3) NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `bao_ve` (
  `cccd` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chi_nhanh` (
  `ten_chi_nhanh` varchar(255) NOT NULL,
  `dia_chi` varchar(255) NOT NULL,
  `cccd_quan_ly` varchar(30) DEFAULT NULL,
  `ngay_bat_dau_quan_ly` date DEFAULT NULL,
  `tong_luong_chi_tra` int(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `cong_ket_noi_laptop` (
  `ten_laptop` varchar(255) NOT NULL,
  `cong_ket_noi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `dien_thoai` (
  `ten_dien_thoai` varchar(255) NOT NULL,
  `cpu` varchar(255) NOT NULL,
  `gpu` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `khoi_luong` float NOT NULL,
  `hdh` varchar(255) NOT NULL,
  `cam_truoc` varchar(255) NOT NULL,
  `cam_sau` varchar(255) NOT NULL,
  `kich_thuoc_man_hinh` float NOT NULL,
  `do_phan_giai_man_hinh` varchar(255) NOT NULL,
  `cong_nghe_man_hinh` varchar(255) NOT NULL,
  `do_sang_man_hinh` int(11) NOT NULL,
  `den_flash` varchar(255) NOT NULL,
  `bo_nho` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `dong_ho_thoi_trang` (
  `ten` varchar(255) NOT NULL,
  `doi_tuong_su_dung` varchar(255) NOT NULL,
  `day_deo` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `khoi_luong` float NOT NULL,
  `kich_thuoc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `dong_ho_thong_minh` (
  `ten_dong_ho` varchar(255) NOT NULL,
  `cam_bien` varchar(255) NOT NULL,
  `hdh` varchar(255) NOT NULL,
  `cong_ket_noi` varchar(255) NOT NULL,
  `day_deo` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `khoi_luong` float NOT NULL,
  `kich_thuoc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `dong_san_pham` (
  `ten_san_pham` varchar(255) NOT NULL,
  `ten_san_pham_tang_kem` varchar(255) DEFAULT NULL,
  `loai_san_pham` varchar(255) NOT NULL,
  `khuyen_mai` varchar(255) DEFAULT NULL,
  `ma_so_hang` varchar(255) NOT NULL,
  `gia_niem_yet` int(30) NOT NULL,
  `thoi_gian_bao_hanh` year(4) NOT NULL,
  `chat_lieu` varchar(255) NOT NULL,
  `thoi_gian_ra_mat` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `don_hang` (
  `ma_don_hang` varchar(255) NOT NULL,
  `cccd_nv_giao_hang` varchar(30) NOT NULL,
  `thoi_gian_giao` datetime DEFAULT NULL,
  `phi_giao` int(30) NOT NULL,
  `tinh_trang` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `duoc_xu_ly` (
  `ma_don_hang` varchar(255) NOT NULL,
  `sdt_khach_hang` varchar(11) NOT NULL,
  `cccd_nv_ban_hang` varchar(30) NOT NULL,
  `hinh_thuc_thanh_toan` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `hang_san_xuat` (
  `ma_so_hang` varchar(255) NOT NULL,
  `ten_hang` varchar(255) NOT NULL,
  `xuat_xu` varchar(255) NOT NULL,
  `so_sp_da_bh` int(10) NOT NULL,
  `tong_tg_bh` int(30) NOT NULL,
  `thoi_gian_bh_tb` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `khach_hang` (
  `sdt` varchar(11) NOT NULL,
  `ten` varchar(30) NOT NULL,
  `ho` varchar(30) NOT NULL,
  `ten_dem` varchar(30) NOT NULL,
  `dia_chi` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `cccd` varchar(9) NOT NULL,
  `gioi_tinh` varchar(10) NOT NULL,
  `so_luong_don_hang_da_mua` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `laptop` (
  `ten` varchar(255) NOT NULL,
  `bo_nho` int(11) NOT NULL,
  `he_dieu_hanh` varchar(255) NOT NULL,
  `cpu` varchar(255) NOT NULL,
  `cong_nghe_man_hinh` varchar(255) NOT NULL,
  `do_phan_giai_man_hinh` varchar(255) NOT NULL,
  `kich_thuoc_man_hinh` varchar(255) NOT NULL,
  `do_sang_toi_da_man_hinh` int(11) NOT NULL,
  `gpu` varchar(255) NOT NULL,
  `ram` int(11) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `khoi_luong` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `mau` (
  `ten_san_pham` varchar(255) NOT NULL,
  `mau_sac` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `may_tinh_bang` (
  `ten_may_tinh_bang` varchar(255) NOT NULL,
  `bo_nho` int(11) NOT NULL,
  `hdh` varchar(255) NOT NULL,
  `cpu` varchar(255) NOT NULL,
  `cong_nghe_man_hinh` varchar(255) NOT NULL,
  `do_phan_giai_man_hinh` varchar(255) NOT NULL,
  `kich_thuoc_man_hinh` varchar(255) NOT NULL,
  `do_sang_man_hinh_toi_da` int(11) NOT NULL,
  `camera_truoc` varchar(255) NOT NULL,
  `camera_sau` varchar(255) NOT NULL,
  `pin` varchar(255) NOT NULL,
  `khoi_luong` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `nguoi_than` (
  `cccd_nv` varchar(9) NOT NULL,
  `ho_ten` varchar(255) NOT NULL,
  `gioi_tinh` varchar(10) NOT NULL,
  `ngay_sinh` date NOT NULL,
  `moi_quan_he` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `nhan_vien` (
  `cccd` varchar(9) NOT NULL,
  `ho` varchar(30) NOT NULL,
  `ten_dem` varchar(30) NOT NULL,
  `ten` varchar(30) NOT NULL,
  `luong` int(30) NOT NULL,
  `sdt` varchar(11) NOT NULL,
  `ngay_sinh` date NOT NULL,
  `ca_lam_viec` varchar(30) NOT NULL,
  `dia_chi` varchar(255) NOT NULL,
  `gioi_tinh` varchar(10) NOT NULL,
  `ten_chi_nhanh` varchar(255) NOT NULL,
  `ngay_bat_dau_lam_viec` date NOT NULL,
  `cccd_nguoi_giam_sat` varchar(30) DEFAULT NULL,
  `loai_nhan_vien` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `nv_ban_hang` (
  `cccd` varchar(30) NOT NULL,
  `so_luong_don_hang_thuc_hien` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `nv_giao_hang` (
  `cccd` varchar(30) NOT NULL,
  `so_luong_don_hang_da_giao` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `phu_kien` (
  `ten_phu_kien` varchar(255) NOT NULL,
  `kieu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `san_pham` (
  `ten_dong_san_pham` varchar(255) NOT NULL,
  `seri_san_pham` varchar(255) NOT NULL,
  `tinh_trang` varchar(255) NOT NULL,
  `ma_don_hang` varchar(255) DEFAULT NULL,
  `ngay_giao_dich` date DEFAULT NULL,
  `ten_chi_nhanh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tien_ich` (
  `ten_dong_sp` varchar(255) NOT NULL,
  `tien_ich` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tuong_thich` (
  `ten_sp` varchar(255) NOT NULL,
  `ten_phu_kien` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- C???u tr??c b???ng cho b???ng `tu_van`
--

CREATE TABLE `tu_van` (
  `sdt_khach_hang` varchar(11) NOT NULL,
  `cccd_nv_ban_hang` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `bao_hanh`
  ADD PRIMARY KEY (`ma_so_hang`,`ten_dong_sp`,`seri_sp`,`ten_chi_nhanh`);

ALTER TABLE `bao_ve`
  ADD PRIMARY KEY (`cccd`);

ALTER TABLE `chi_nhanh`
  ADD PRIMARY KEY (`ten_chi_nhanh`);

ALTER TABLE `cong_ket_noi_laptop`
  ADD PRIMARY KEY (`ten_laptop`,`cong_ket_noi`);

ALTER TABLE `dien_thoai`
  ADD PRIMARY KEY (`ten_dien_thoai`);

ALTER TABLE `dong_ho_thoi_trang`
  ADD PRIMARY KEY (`ten`);

ALTER TABLE `dong_ho_thong_minh`
  ADD PRIMARY KEY (`ten_dong_ho`);

ALTER TABLE `dong_san_pham`
  ADD PRIMARY KEY (`ten_san_pham`);

ALTER TABLE `don_hang`
  ADD PRIMARY KEY (`ma_don_hang`);

ALTER TABLE `duoc_xu_ly`
  ADD PRIMARY KEY (`ma_don_hang`,`sdt_khach_hang`,`cccd_nv_ban_hang`);

ALTER TABLE `hang_san_xuat`
  ADD PRIMARY KEY (`ma_so_hang`);

ALTER TABLE `khach_hang`
  ADD PRIMARY KEY (`sdt`);

ALTER TABLE `laptop`
  ADD PRIMARY KEY (`ten`);

ALTER TABLE `mau`
  ADD PRIMARY KEY (`ten_san_pham`,`mau_sac`);

ALTER TABLE `may_tinh_bang`
  ADD PRIMARY KEY (`ten_may_tinh_bang`);

ALTER TABLE `nguoi_than`
  ADD PRIMARY KEY (`cccd_nv`,`ho_ten`);

ALTER TABLE `nhan_vien`
  ADD PRIMARY KEY (`cccd`);

ALTER TABLE `nv_ban_hang`
  ADD PRIMARY KEY (`cccd`);

ALTER TABLE `nv_giao_hang`
  ADD PRIMARY KEY (`cccd`);

ALTER TABLE `phu_kien`
  ADD PRIMARY KEY (`ten_phu_kien`);

ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`ten_dong_san_pham`,`seri_san_pham`);

ALTER TABLE `tien_ich`
  ADD PRIMARY KEY (`ten_dong_sp`,`tien_ich`);

ALTER TABLE `tuong_thich`
  ADD PRIMARY KEY (`ten_sp`,`ten_phu_kien`);

ALTER TABLE `tu_van`
  ADD PRIMARY KEY (`sdt_khach_hang`,`cccd_nv_ban_hang`);

ALTER TABLE `bao_hanh`
  ADD CONSTRAINT `bao_hanh_fk1` FOREIGN KEY (`ma_so_hang`) REFERENCES `hang_san_xuat` (`ma_so_hang`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bao_hanh_fk2` FOREIGN KEY (`ten_dong_sp`,`seri_sp`) REFERENCES `san_pham` (`ten_dong_san_pham`, `seri_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bao_hanh_fk3` FOREIGN KEY (`ten_chi_nhanh`) REFERENCES `chi_nhanh` (`ten_chi_nhanh`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `bao_ve`
  ADD CONSTRAINT `bao_ve_ibfk_1` FOREIGN KEY (`cccd`) REFERENCES `nhan_vien` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `chi_nhanh`
  ADD CONSTRAINT `chi_nhanh_fk` FOREIGN KEY (`cccd_quan_ly`) REFERENCES `nhan_vien` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `cong_ket_noi_laptop`
  ADD CONSTRAINT `cong_ket_noi_laptop_fk` FOREIGN KEY (`ten_laptop`) REFERENCES `laptop` (`ten`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `dien_thoai`
  ADD CONSTRAINT `dien_thoai_fk` FOREIGN KEY (`ten_dien_thoai`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `dong_ho_thoi_trang`
  ADD CONSTRAINT `dong_ho_thoi_trang_fk` FOREIGN KEY (`ten`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `dong_ho_thong_minh`
  ADD CONSTRAINT `dong_ho_thong_minh_ibfk_1` FOREIGN KEY (`ten_dong_ho`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `dong_san_pham`
  ADD CONSTRAINT `dong_san_pham_ibfk_1` FOREIGN KEY (`ten_san_pham_tang_kem`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `dong_san_pham_ibfk_2` FOREIGN KEY (`ma_so_hang`) REFERENCES `hang_san_xuat` (`ma_so_hang`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `don_hang`
  ADD CONSTRAINT `don_hang_ibfk_1` FOREIGN KEY (`cccd_nv_giao_hang`) REFERENCES `nv_giao_hang` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `duoc_xu_ly`
  ADD CONSTRAINT `duoc_xu_ly_fk_1` FOREIGN KEY (`cccd_nv_ban_hang`) REFERENCES `nv_ban_hang` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `duoc_xu_ly_fk_2` FOREIGN KEY (`ma_don_hang`) REFERENCES `don_hang` (`ma_don_hang`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `duoc_xu_ly_fk_3` FOREIGN KEY (`sdt_khach_hang`) REFERENCES `khach_hang` (`sdt`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `laptop`
  ADD CONSTRAINT `laptop_ibfk_1` FOREIGN KEY (`ten`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `mau`
  ADD CONSTRAINT `mau_ibfk_1` FOREIGN KEY (`ten_san_pham`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `may_tinh_bang`
  ADD CONSTRAINT `may_tinh_bang_ibfk_1` FOREIGN KEY (`ten_may_tinh_bang`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `nguoi_than`
  ADD CONSTRAINT `nguoi_than_ibfk_1` FOREIGN KEY (`cccd_nv`) REFERENCES `nhan_vien` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `nhan_vien`
  ADD CONSTRAINT `nhan_vien_ibfk_1` FOREIGN KEY (`ten_chi_nhanh`) REFERENCES `chi_nhanh` (`ten_chi_nhanh`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `nhan_vien_ibfk_2` FOREIGN KEY (`cccd_nguoi_giam_sat`) REFERENCES `nhan_vien` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `nv_ban_hang`
  ADD CONSTRAINT `nv_ban_hang_ibfk_1` FOREIGN KEY (`cccd`) REFERENCES `nhan_vien` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `nv_giao_hang`
  ADD CONSTRAINT `nv_giao_hang_ibfk_1` FOREIGN KEY (`cccd`) REFERENCES `nhan_vien` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `phu_kien`
  ADD CONSTRAINT `phu_kien_ibfk_1` FOREIGN KEY (`ten_phu_kien`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `san_pham`
  ADD CONSTRAINT `san_pham_ibfk_1` FOREIGN KEY (`ten_dong_san_pham`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `san_pham_ibfk_2` FOREIGN KEY (`ma_don_hang`) REFERENCES `don_hang` (`ma_don_hang`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `san_pham_ibfk_3` FOREIGN KEY (`ten_chi_nhanh`) REFERENCES `chi_nhanh` (`ten_chi_nhanh`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `tien_ich`
  ADD CONSTRAINT `tien_ich_ibfk_1` FOREIGN KEY (`ten_dong_sp`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `tuong_thich`
  ADD CONSTRAINT `tuong_thich_ibfk_1` FOREIGN KEY (`ten_sp`) REFERENCES `dong_san_pham` (`ten_san_pham`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tuong_thich_ibfk_2` FOREIGN KEY (`ten_phu_kien`) REFERENCES `phu_kien` (`ten_phu_kien`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `tu_van`
  ADD CONSTRAINT `tu_van_ibfk_1` FOREIGN KEY (`sdt_khach_hang`) REFERENCES `khach_hang` (`sdt`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tu_van_ibfk_2` FOREIGN KEY (`cccd_nv_ban_hang`) REFERENCES `nv_ban_hang` (`cccd`) ON DELETE CASCADE ON UPDATE CASCADE;


COMMIT;

CREATE INDEX idxorder ON `don_hang` (`ma_don_hang`);
CREATE INDEX idx_dong_sp ON `dong_san_pham`(`ten_san_pham`);
CREATE INDEX idnv ON `nhan_vien` (`cccd`);
CREATE INDEX index_bh ON `bao_hanh` (`ten_dong_sp`, `seri_sp`, `ma_so_hang`, `ten_chi_nhanh`);


INSERT INTO `hang_san_xuat` (`ma_so_hang`, `ten_hang`, `xuat_xu`, `so_sp_da_bh`, `tong_tg_bh`, `thoi_gian_bh_tb`) VALUES
('AP-01', 'APPLE', 'M???', 0, 0, 0),
('AS-01', 'ASUS', '????I LOAN', 0, 0, 0),
('CA-01', 'CASIO', 'Nh???t B???n', 0, 0, 0),
('CI-01', 'CITIZEN', 'Nh???t B???n', 0, 0, 0),
('D-01', 'DELL', 'M???', 0, 0, 0),
('SS-01', 'SAMSUNG', 'H??N QU???C', 0, 0, 0),
('V-01', 'VIN', 'VI???T NAM', 0, 0, 0);

INSERT INTO `dong_san_pham` (`ten_san_pham`, `ten_san_pham_tang_kem`,
`loai_san_pham`, `khuyen_mai`, `ma_so_hang`, `gia_niem_yet`, `thoi_gian_bao_hanh`,
`chat_lieu`, `thoi_gian_ra_mat`) VALUES
('AIRPOD 3', NULL, 'PH??? KI???N', '800000', 'AP-01', 4000000, 2002, 'NH???A', '2020-08-12'),
('APPLE WATCH S6', NULL, '?????NG H??? TH??NG MINH', '50%', 'AP-01', 8992000, 2001, 'KIM LO???I', '2020-09-15'),
('Apple Watch SE', NULL, '?????NG H??? TH??NG MINH', '15%', 'AP-01', 8990000, 2001, 'Silicone', '2020-09-15'),
('ASUS ROG Phone 5 ch??nh h??ng\r\n', NULL, '??i???n tho???i', '20%', 'AS-01', 18990000, 2004, 'Kim lo???i\r\n', '2020-11-06'),
('C??P S???C SAMSUNG', NULL, 'PH??? KI???N', NULL, 'SS-01', 200000, 2001, 'NH???A', '2016-11-09'),
('CASIO LTP-E413RL-5ADF', NULL, '?????NG H??? TH???I TRANG', '35%', 'CA-01', 2468000, 2001, 'Da t???ng h???p', '0000-00-00'),
('CASIO MTP-E321B-1AVDF', NULL, '?????NG H??? TH???I TRANG', '35%', 'CA-01', 3381000, 2001, 'Th??p kh??ng g???', '0000-00-00'),
('CITIZEN ED8183-54A', NULL, '?????NG H??? TH???I TRANG', '45%', 'CI-01', 4580000, 2001, 'Th??p kh??ng g???', '0000-00-00'),
('C??? S???C APPLE', NULL, 'PH??? KI???N', NULL, 'AP-01', 300000, 2001, 'NH???A', '2020-11-12'),
('IPAD PRO M1', 'AIRPOD 3', 'TABLET', '5%', 'AP-01', 42000000, 2003, 'NH???A', '2020-11-01'),
('IPHONE 13 PRO MAX', NULL, '??I???N THO???I', NULL, 'AP-01', 30000000, 2002, 'NH???A', '2021-08-12'),
('Laptop Asus TUF Gaming', NULL, 'LAPTOP', '800000', 'AS-01', 25000000, 2001, 'NH???A V?? KIM LO???I', '2020-11-12'),
('MACBOOK M1', 'AIRPOD 3', 'LAPTOP', 'T???NG K??M TAI NGHE AIRPOD', 'AP-01', 30000000, 2002, 'KIM LO???I V?? NH???A', '2021-11-10'),
('SAMSUNG GALAXY S8', 'AIRPOD 3', '??I???N THO???I', '30%', 'SS-01', 7500000, 2002, 'NH???A', '2016-08-12'),
('SAMSUNG GALAXY TAB S7', NULL, 'TABLET', NULL, 'SS-01', 11990000, 2002, 'NH???A', '2021-11-02'),
('Samsung Galaxy Watch 3', NULL, '?????NG H??? TH??NG MINH', '2500000', 'SS-01', 9490000, 2001, 'Da', '2020-08-01');

INSERT INTO `dong_ho_thong_minh` (`ten_dong_ho`, `cam_bien`, `hdh`, `cong_ket_noi`, `day_deo`, `pin`, `khoi_luong`, `kich_thuoc`) VALUES
('APPLE WATCH S6', 'Cao ??p k???, c???m bi???n ??nh s??ng m??i tr?????ng, c???m bi???n nh???p tim quang h???c th??? h??? 3, c???m bi???n nh???p tim ??i???n t???, gia t???c k???, GNSS, GPS, La b??n, ??o SpO2', 'watchOS 7.0', '????? s???c nam ch??m', 'Silicone', 'Dung l?????ng pin: 265.9 mAh', 30.5, 'D??i 40 mm - Ngang 34 mm - D??y 10.4 mm'),
('Apple Watch SE', 'Cao ??p k???, C???m bi???n ??nh s??ng m??i tr?????ng, C???m bi???n nh???p tim quang h???c th??? h??? 2, C???m bi???n nh???p tim ??i???n t???, Gia t???c k???, GNSS, GPS, La b??n.', 'watchOS 7.0', '????? s???c nam ch??m', 'Silicone', 'Th???i gian s??? d???ng pin: Kho???ng 1.5 ng??y', 30.49, 'D??i 40 mm - Ngang 34 mm - D??y 10.7 mm'),
('Samsung Galaxy Watch 3', '\r\nC???m bi???n nh???p tim, Cao ??p k???, Gia t???c k???, Galileo, GLONASS, GPS, NFC.', 'OS TIZEN\r\n', '????? s???c nam ch??m', 'Da', 'Dung l?????ng pin: 247 mAh', 48.2, 'D??i 42.5 mm - Ngang 41 mm - D??y 11.3 mm');

INSERT INTO `dong_ho_thoi_trang` (`ten`, `doi_tuong_su_dung`, `day_deo`, `pin`, `khoi_luong`, `kich_thuoc`) VALUES
('CASIO LTP-E413RL-5ADF', 'N???', 'Da t???ng h???p', 'Th???i gian s??? d???ng pin: Kho???ng 3 n??m', 0, '???????ng k??nh m???t: 32 mm'),
('CASIO MTP-E321B-1AVDF', 'Nam', 'Nh???a', 'Th???i gian s??? d???ng pin: Kho???ng 10 n??m', 0, '???????ng k??nh m???t: 44 mm'),
('CITIZEN ED8183-54A', 'N???', 'Th??p kh??ng g???', 'Th???i gian s??? d???ng pin: Kho???ng 2 n??m', 0, '???????ng k??nh m???t: 33 mm');

INSERT INTO `phu_kien` (`ten_phu_kien`, `kieu`) VALUES
('AIRPOD 3', 'TAI NGHE'),
('C??P S???C SAMSUNG', 'C??P S???C'),
('C??? S???C APPLE', 'C??? S???C');

INSERT INTO `dien_thoai` (`ten_dien_thoai`, `cpu`, `gpu`, `pin`, `khoi_luong`, `hdh`, `cam_truoc`, `cam_sau`, `kich_thuoc_man_hinh`, `do_phan_giai_man_hinh`, `cong_nghe_man_hinh`, `do_sang_man_hinh`, `den_flash`, `bo_nho`) VALUES
('ASUS ROG Phone 5 ch??nh h??ng\r\n', 'Qualcomm SM8350 Snapdragon 888 5G (5 nm)\r\n', 'Adreno 660\r\n', 'Li-Po 6000 mAh, non-removable\r\n', 238, 'Android 12', '24 MP, f/2.5, 27mm (wide), 0.9??m\r\n', 'Camera g??c r???ng: 64 MP, f/1.8, 26mm, 1/1.73\", 0.8??m, PDAF\r\nCamera g??c si??u r???ng: 13 MP, f/2.4, 11mm, 125??\r\nCamera macro\" 5 MP, f/2.0', 6.78, '1080 x 2448 pixels (FullHD+)\r\n', 'AMOLED', 800, 'LED flash', 256),
('IPHONE 13 PRO MAX', 'Apple A15\r\n', 'GPU 5 nh??n', '4,325mAh\r\n', 240, 'IOS', '12MP, ??/2.2\r\n', 'Camera g??c r???ng: 12MP, ??/1.5\r\nCamera g??c si??u r???ng: 12MP, ??/1.8\r\nCamera tele : 12MP, /2.8', 6.7, '2778 x 1284 pixel\r\n', 'OLED', 1000, 'Dual-LED dual-tone flash', 256),
('SAMSUNG GALAXY S8', 'Exynos 8895 8 nh??n\r\n', 'Mali-G71\r\n', '3000', 155, 'Android 10', '8 MP\r\n', '12 MP\r\n', 5.8, '2K+ (1440 x 2960 Pixels)\r\n', 'Super AMOLED\r\n', 1200, 'LED flash,', 64);

INSERT INTO `may_tinh_bang` (`ten_may_tinh_bang`, `bo_nho`, `hdh`, `cpu`, `cong_nghe_man_hinh`, `do_phan_giai_man_hinh`, `kich_thuoc_man_hinh`, `do_sang_man_hinh_toi_da`, `camera_truoc`, `camera_sau`, `pin`, `khoi_luong`) VALUES
('IPAD PRO M1', 8, 'iPadOS 14', 'Apple M1 8 nh??n', 'Liquid Retina XDR mini-LED LCD', '2048 x 2732 Pixels', '12.9 inch', 600, '12 MP', 'Ch??nh 12 MP & Ph??? 10 MP, TOF 3D LiDAR', 'Li-Po 10.835 mAh', 0.69),
('SAMSUNG GALAXY TAB S7', 4, 'ANDROID 11', '4 nh??n 2.4 GHz & 4 nh??n 1.8 GHz', 'TFT LCD', '1600 x 2560 Pixels', '12.4 inch', 400, '5 MP', '8 MP', 'Li-Po 10090 mAh', 0.61);


INSERT INTO `laptop` (`ten`, `bo_nho`, `he_dieu_hanh`, `cpu`, `cong_nghe_man_hinh`, `do_phan_giai_man_hinh`, `kich_thuoc_man_hinh`, `do_sang_toi_da_man_hinh`, `gpu`, `ram`, `pin`, `khoi_luong`) VALUES
('Laptop Asus TUF Gaming', 512, 'Windows 11 Home SL', 'Intel Core i5 Tiger Lake - 11400H', 'Ch???ng ch??i Anti Glare, T???m n???n IPS', 'Full HD (1920 x 1080)', '15.6 inch', 250, 'Card r???i - NVIDIA GeForce RTX3050, 4 GB', 8, '3-cell Li-ion, 48 Wh', 2.3),
('MACBOOK M1', 256, 'Mac OS', 'Apple M1', 'LED Backlit, Retina, True Tone Technology, T???m n???n IPS', 'Retina (2560 x 1600)', '13.3 inch', 500, 'Card t??ch h???p - 8 nh??n GPU', 16, 'Kho???ng 10 ti???ng', 1.4);

INSERT INTO `tien_ich` (`ten_dong_sp`, `tien_ich`) VALUES
('AIRPOD 3', 'B???o m???t n??ng cao: M??? kho?? khu??n m???t, M??? kho?? v??n tay c???nh vi???n;\r\nT??nh n??ng ?????c bi???t: Ghi ??m cu???c g???i, Kh??ng gian th??? hai, ???ng d???ng k??p (Nh??n b???n ???ng d???ng);\r\nGhi ??m;\r\nXem phim: AVI, MP4\r\nNghe nh???c: FLAC, Midi, MP3, OGG\r\n\r\n'),
('ASUS ROG Phone 5 ch??nh h??ng\r\n', 'B???o m???t n??ng cao: M??? kho?? khu??n m???t, M??? kho?? v??n tay d?????i m??n h??nh;\r\nH??? tr??? 5G, B???o m???t v??n tay; C???m bi???n ??nh s??ng, C???m bi???n ??p k???, C???m bi???n gia t???c, C???m bi???n ti???m c???n, Con quay h???i chuy???n, La b??n\r\n\r\n'),
('IPHONE 13 PRO MAX', 'C???m bi???n ??nh s??ng, C???m bi???n ??p k???, C???m bi???n gia t???c, C???m bi???n ti???m c???n, Con quay h???i chuy???n; \r\nH??? tr??? 5G, Kh??ng n?????c, kh??ng b???i, S???c kh??ng d??y, Nh???n di???n khu??n m???t;\r\nKh??ng n?????c, b???i	IP68\r\n\r\n'),
('SAMSUNG GALAXY S8', 'B???o m???t n??ng cao: M??? kh??a b???ng v??n tay, M??? kho?? qu??t m???ng m???t;\r\n\r\n\r\n');

INSERT INTO `tuong_thich` (`ten_sp`, `ten_phu_kien`) VALUES
('IPAD PRO M1', 'AIRPOD 3'),
('IPAD PRO M1', 'C??? S???C APPLE'),
('IPHONE 13 PRO MAX', 'AIRPOD 3'),
('SAMSUNG GALAXY S8', 'C??P S???C SAMSUNG'),
('SAMSUNG GALAXY TAB S7', 'C??P S???C SAMSUNG');

INSERT INTO `cong_ket_noi_laptop` (`ten_laptop`, `cong_ket_noi`) VALUES
('Laptop Asus TUF Gaming', 'Bluetooth 5.2'),
('Laptop Asus TUF Gaming', 'HDMI'),
('Laptop Asus TUF Gaming', 'Jack tai nghe 3.5 mm'),
('Laptop Asus TUF Gaming', 'LAN (RJ45)'),
('Laptop Asus TUF Gaming', 'USB 3.2'),
('Laptop Asus TUF Gaming', 'USB Type-C'),
('Laptop Asus TUF Gaming', 'Wi-Fi 6 (802.11ax)'),
('MACBOOK M1', 'Bluetooth 5.0'),
('MACBOOK M1', 'Jack tai nghe 3.5 mm'),
('MACBOOK M1', 'Thunderbolt 3 (USB-C)'),
('MACBOOK M1', 'Wi-Fi 6 (802.11ax)');

INSERT INTO `mau` (`ten_san_pham`, `mau_sac`) VALUES
('AIRPOD 3', 'Tr???ng, ??en'),
('APPLE WATCH S6', 'H???ng, Xanh d????ng ?????m, Tr???ng'),
('Apple Watch SE', 'H???ng, ??en'),
('ASUS ROG Phone 5 ch??nh h??ng\r\n', '??en, X??m'),
('C??P S???C SAMSUNG', 'Tr???ng, ??en'),
('CASIO LTP-E413RL-5ADF', 'H???ng, Tr???ng'),
('CASIO MTP-E321B-1AVDF', '??en, X??m'),
('CITIZEN ED8183-54A', 'Tr???ng, V??ng'),
('C??? S???C APPLE', 'Tr???ng, ??en'),
('IPAD PRO M1', '??en, X??m'),
('IPHONE 13 PRO MAX', 'B???c, V??ng, X??m, Xanh'),
('SAMSUNG GALAXY S8', 'Xanh, ??en, B???c');


INSERT INTO `chi_nhanh` (`ten_chi_nhanh`, `dia_chi`, `cccd_quan_ly`, `ngay_bat_dau_quan_ly`, `tong_luong_chi_tra`) VALUES
('B???C LI??U', 'H??? PH??NG, GI?? RAI, B???C LI??U', NULL, NULL, NULL),
('C?? MAU', 'C?? MAU', NULL, NULL, NULL),
('C???N TH??', 'C???N TH??', NULL, NULL, NULL),
('HU???', '???????NG H??NG V????NG-TH??NH PH??? HU???-TH???A THI??N HU???', NULL, NULL, NULL),
('L?? TH?????NG KI???T', '248, L?? TH?????NG KI???T, P.14, Q.10, TP.HCM', NULL, NULL, NULL),
('QU???NG B??NH', '40-V?? TR???NG PH???NG-B???C L??-?????NG H???I-QU???NG B??NH', NULL, NULL, NULL);


INSERT INTO `nhan_vien` (`cccd`, `ho`, `ten_dem`, `ten`, `luong`, `sdt`, `ngay_sinh`, `ca_lam_viec`, `dia_chi`, `gioi_tinh`, `ten_chi_nhanh`, `ngay_bat_dau_lam_viec`, `cccd_nguoi_giam_sat`, `loai_nhan_vien`) VALUES
('385123123', 'MAI', 'TH???', 'B???C', 10000000, '0333111221', '2001-11-17', 'S??NG', 'TH??NH PH??? HU???-TH???A THI??N HU???', 'N???', 'HU???', '2021-11-16', NULL, 'QU???N L??'),
('385456456', 'MAI', '?????C', 'LONG', 10000000, '0333111224', '2001-10-17', 'S??NG', 'QU???NG B??NH', 'Nam', 'QU???NG B??NH', '2021-11-16', NULL, 'QU???N L??'),
('385789789', 'L????NG', 'V??N', 'TO??N', 10000000, '0946536536', '1989-05-06', 'C??? NG??Y', 'H??? CH?? MINH', 'Nam', 'L?? TH?????NG KI???T', '2018-06-06', NULL, 'QU???N L??'),
('385999333', 'NGUY???N', 'TH???', 'MY', 10000000, '0942335663', '1999-05-06', 'C??? NG??Y', 'H??? PH??NG, GI?? RAI, B???C LI??U', 'N???', 'B???C LI??U', '2019-02-03', NULL, 'QU???N L??'),
('366366366', 'TR???N', 'VI???T', 'TO??N', 4000000, '0159852432', '1999-03-02', 'C??? NG??Y', 'QU???N 4, H??? CH?? MINH', 'Nam', 'L?? TH?????NG KI???T', '2018-06-04', '385789789', 'B???O V???'),
('385024680', 'NG???', 'TI???N', '?????T', 5000000, '0356989765', '2001-07-11', 'C??? NG??Y', 'GIA NGH??A-?????K N??NG', 'Nam', 'HU???', '2020-10-10', '385123123', 'GIAO H??NG'),
('385024688', 'NG???', 'TI???N', 'LONG', 7000000, '0356989777', '2001-08-11', 'C??? NG??Y', 'GIA NGH??A-?????K N??NG', 'Nam', 'HU???', '2020-10-10', '385123123', 'B??N H??NG'),
('385111111', 'HO??NG', 'MINH', 'H??A', 7000000, '0333112332', '2002-03-03', 'CHI???U', '?????NG H???I-QU???NG B??NH', 'Nam', 'QU???NG B??NH', '2021-11-02', '385456456', 'B??N H??NG'),
('385111112', 'NG???', 'TI???N', 'MINH', 5000000, '0356666777', '2001-08-11', 'C??? NG??Y', 'GIA NGH??A-?????K N??NG', 'Nam', 'QU???NG B??NH', '2020-10-10', '385456456', 'GIAO H??NG'),
('385111113', 'TR???N', 'TH??NH', 'D????NG', 4000000, '0697685915', '2001-10-30', 'C??? NG??Y', 'B???C LI??U', 'Nam', 'QU???NG B??NH', '2021-11-02', '385456456', 'B???O V???'),
('385111118', 'HO??NG', 'MINH', 'HI???U', 7000000, '0333112444', '1990-03-03', 'CHI???U', '?????NG H???I-QU???NG B??NH', 'Nam', 'HU???', '2021-11-03', '385123123', 'B??N H??NG'),
('385111119', 'NG???', 'TI???N', 'THANH', 7000000, '0356666888', '1995-08-11', 'C??? NG??Y', 'GIA NGH??A-?????K N??NG', 'Nam', 'HU???', '2020-10-10', '385123123', 'B??N H??NG'),
('385111122', 'TR???N', 'TH??NH', 'LONG', 7000000, '0697685999', '1996-10-30', 'C??? NG??Y', 'B???C LI??U', 'Nam', 'B???C LI??U', '2021-11-02', '385999333', 'B??N H??NG'),
('385111133', 'L??', 'TH??NH', 'H??A', 7000000, '0697685888', '1994-10-30', 'C??? NG??Y', 'C?? MAU', 'Nam', 'B???C LI??U', '2021-11-04', '385999333', 'B??N H??NG'),
('385111144', 'H???', 'TH??NH', 'D??NG', 7000000, '0697685111', '1997-10-30', 'C??? NG??Y', 'S??C TR??NG', 'Nam', 'B???C LI??U', '2021-11-05', '385999333', 'B??N H??NG'),
('385111213', 'HU???NH', 'B???O', '?????I', 5000000, '0834789123', '2000-11-12', 'CHI???U', 'QU???N 7, H??? CH?? MINH', 'Nam', 'L?? TH?????NG KI???T', '2018-06-06', '385789789', 'GIAO H??NG'),
('385135579', 'HO??NG', 'MINH', 'B???NG', 7000000, '0333112222', '2002-01-03', 'CHI???U', '?????NG H???I-QU???NG B??NH', 'N???', 'HU???', '2021-11-02', '385123123', 'B??N H??NG'),
('385222333', 'L????NG', 'PH????NG', 'TO??N', 7000000, '0942555666', '2001-07-30', 'S??NG', 'AN GIANG', 'Nam', 'B???C LI??U', '2019-05-05', '385999333', 'B??N H??NG'),
('385323232', 'HU???NH', 'MINH', 'TO??N', 5000000, '0943636363', '2000-05-06', 'CHI???U', 'KI??N GIANG', 'Nam', 'B???C LI??U', '2019-06-05', '385999333', 'GIAO H??NG'),
('385385385', 'NGUY???N', 'MINH', 'D????NG', 4000000, '0949865865', '1998-06-07', 'C??? NG??Y', 'T Y NINH', 'Nam', 'B???C LI??U', '2020-05-05', '385999333', 'B???O V???'),
('385456654', 'MAI', 'PH????NG', '?????T', 7000000, '0932632632', '2001-06-30', 'S??NG', 'QU???N 5, H??? CH?? MINH', 'Nam', 'L?? TH?????NG KI???T', '2018-06-06', '385789789', 'B??N H??NG'),
('385468012', 'TR???N', 'TH???', 'D????NG', 4000000, '0697685911', '2001-06-30', 'C??? NG??Y', 'B???C LI??U', 'N???', 'HU???', '2021-11-02', '385123123', 'B???O V???'),
('385693632', 'TR???N', 'PH????NG', 'LONG', 4000000, '0925363848', '2000-05-06', 'C??? NG??Y', 'C?? MAU', 'Nam', 'B???C LI??U', '2019-04-03', '385999333', 'B???O V???');


INSERT INTO `nv_ban_hang` (`cccd`, `so_luong_don_hang_thuc_hien`) VALUES
('385024688', 0),
('385111111', 1),
('385111118', 1),
('385111119', 1),
('385111122', 0),
('385111133', 0),
('385111144', 1),
('385135579', 2),
('385222333', 0),
('385456654', 0);

INSERT INTO `nv_giao_hang` (`cccd`, `so_luong_don_hang_da_giao`) VALUES
('385024680', 6),
('385111112', 0),
('385111213', 0),
('385323232', 0);


INSERT INTO `bao_ve` (`cccd`) VALUES
('366366366'),
('385111113'),
('385385385'),
('385468012'),
('385693632');

INSERT INTO `don_hang` (`ma_don_hang`, `cccd_nv_giao_hang`, `thoi_gian_giao`, `phi_giao`, `tinh_trang`) VALUES
('da', '385024680', NULL, 0, 'Ch??a giao'),
('DH-01', '385024680', '2021-11-25 16:14:39', 20000, '???? giao'),
('DH-02', '385024680', '2021-11-25 16:14:39', 10000, '???? giao'),
('DH-03', '385024680', '2021-11-27 14:34:40', 50000, '???? giao'),
('DH-04', '385024680', '2021-11-27 16:00:07', 50000, '???? giao'),
('DH-05', '385024680', '2021-11-27 16:00:07', 50000, '???? giao');

INSERT INTO `khach_hang` (`sdt`, `ten`, `ho`, `ten_dem`, `dia_chi`, `email`, `cccd`, `gioi_tinh`, `so_luong_don_hang_da_mua`) VALUES
('0123456789', 'D????NG', 'TR???N', 'TH??NH', 'B???C LI??U', 'duong.lam@hcmut.edu.vn', '123456789', 'Nam', 2),
('0333666999', 'TI???N', 'HO??NG', 'MINH', 'QU???NG B??NH', 'tien.hoang@hcmut.edu.vn', '133557799', 'Nam', 0),
('0356989765', '?????T', 'NG???', 'TI???N', '242-TR???N PH??-NGH??A ?????C-GIA NGH??A-?????K N??NG', 'dat.ngo12345@hcmut.edu.vn', '245456321', 'Nam', 1),
('0939655455', 'LONG', 'MAI', '?????C', 'HU???', 'long.mai@hcmut.edu.vn', '696969696', 'Nam', 2),
('0945000111', 'TH??I', 'NGUY???N', 'B???O', 'B???C LI??U', 'nbthai@gmail.com', '485000111', 'Nam', 0),
('0945000112', 'B???O', 'TR???N', 'V??N', 'B???C LI??U', 'tvbao@gmail.com', '485000112', 'Nam', 0),
('0945000113', 'TO??N', 'NGUY???N', 'V??N', 'B???C LI??U', 'nbthai@gmail.com', '485000113', 'Nam', 0),
('0987654321', 'B???NG', 'H???', 'TH???', 'H??? CH?? MINH', 'bang.ho@hcmut.edu.vn', '765438132', 'N???', 1);

INSERT INTO `tu_van` (`sdt_khach_hang`, `cccd_nv_ban_hang`) VALUES
('0123456789', '385024688'),
('0123456789', '385111111'),
('0123456789', '385111118'),
('0123456789', '385111119'),
('0123456789', '385111122'),
('0123456789', '385111133'),
('0123456789', '385111144'),
('0123456789', '385135579'),
('0123456789', '385222333'),
('0333666999', '385135579'),
('0356989765', '385135579'),
('0939655455', '385135579'),
('0945000111', '385111122'),
('0945000111', '385111133'),
('0945000111', '385111144'),
('0945000111', '385222333'),
('0945000113', '385111122'),
('0945000113', '385111133'),
('0945000113', '385111144'),
('0945000113', '385222333');

INSERT INTO `duoc_xu_ly` (`ma_don_hang`, `sdt_khach_hang`, `cccd_nv_ban_hang`, `hinh_thuc_thanh_toan`) VALUES
('da', '0939655455', '385111118', 'Ti???n m???t'),
('DH-01', '0939655455', '385135579', 'Ti???n m???t'),
('DH-02', '0123456789', '385135579', 'Ti???n m???t'),
('DH-03', '0987654321', '385111144', 'Ti???n m???t'),
('DH-04', '0123456789', '385111111', 'Ti???n m???t'),
('DH-05', '0356989765', '385111119', 'Ti???n m???t');

INSERT INTO `san_pham` (`ten_dong_san_pham`, `seri_san_pham`, `tinh_trang`, `ma_don_hang`, `ngay_giao_dich`, `ten_chi_nhanh`) VALUES
('AIRPOD 3', 'AP-3001', '???? B??N', 'DH-03', '2021-11-01', 'L?? TH?????NG KI???T'),
('AIRPOD 3', 'AP-30102', '???? B??N', 'DH-03', '2021-11-17', 'C???N TH??'),
('AIRPOD 3', 'AP3-3005', 'CH??A B??N', 'da', NULL, 'HU???'),
('APPLE WATCH S6', 'APPW-S6002', '???? B??N', 'DH-01', '2021-11-03', 'HU???'),
('APPLE WATCH S6', 'APPW-S6005', '???? B??N', 'DH-03', '2021-11-01', 'L?? TH?????NG KI???T'),
('APPLE WATCH S6', 'APW-S6005', '???? B??N', 'DH-01', '2021-11-03', 'HU???'),
('IPAD PRO M1', 'IPP-M1100', '???? B??N', 'DH-02', '2021-11-17', 'QU???NG B??NH'),
('IPHONE 13 PRO MAX', 'IP-13PM003', '???? B??N', 'DH-03', '2021-11-01', 'L?? TH?????NG KI???T'),
('Laptop Asus TUF Gaming', 'ASUS-TUF-2002', 'Ch??a b??n', NULL, NULL, 'QU???NG B??NH'),
('Samsung Galaxy Watch 3', 'SSGW3-001', 'Ch??a b??n', NULL, NULL, 'C?? MAU');

INSERT INTO `nguoi_than` (`cccd_nv`, `ho_ten`, `gioi_tinh`, `ngay_sinh`, `moi_quan_he`) VALUES
('366366366', 'TR???N VI???T D??NG', 'Nam', '1880-06-05', 'Cha-con'),
('385024680', 'NG??? TH??NH H??A', 'Nam', '1967-11-01', 'Cha - con'),
('385111111', 'NGUY???N TH??? B??', 'N???', '1980-05-04', 'M??? - con'),
('385111112', 'NG??? TH??NH H??A', 'Nam', '1967-11-01', 'Cha - con'),
('385111113', 'HU???NH TH??? LINH', 'N???', '1970-03-02', 'M??? - con'),
('385111213', 'HU???NH B???O VI???T', 'Nam', '1970-05-06', 'Cha - con'),
('385123123', 'MAI TI???N THU???N', 'Nam', '1966-01-01', 'Cha - con'),
('385135579', 'HO??NG THANH THU???N', 'Nam', '1968-01-01', 'Cha - con'),
('385222333', 'TR???N TH??? HOA', 'N???', '1970-07-06', 'M??? - con'),
('385323232', 'HU???NH MINH HI???U', 'Nam', '1970-11-30', 'Cha - con'),
('385385385', 'L????NG TH??? TH??Y', 'N???', '1975-05-05', 'M??? - con'),
('385456456', 'MAI TH??NH NHANH', 'Nam', '1961-11-01', 'Cha - con'),
('385456654', 'MAI PH????NG LONG', 'Nam', '1973-04-06', 'Cha - con'),
('385468012', 'TR???N V??N HO??NG', 'Nam', '1974-03-03', 'Cha - con'),
('385693632', 'NGUY???N TH??? ????O', 'N???', '1980-04-03', 'M??? - con'),
('385789789', 'L????NG V??N LINH', 'Nam', '1965-03-04', 'Cha - con'),
('385999333', 'NGUY???N TI???N D??NG', 'Nam', '1974-05-06', 'Cha - con');

INSERT INTO `bao_hanh` (`ma_so_hang`, `ten_dong_sp`, `seri_sp`, `ten_chi_nhanh`,
`thoi_gian_bao_hanh`) VALUES
('AP-01', 'AIRPOD 3', 'AP-3001', 'L?? TH?????NG KI???T', 0),
('AP-01', 'AIRPOD 3', 'AP-30102', 'C???N TH??', 3),
('AP-01', 'AIRPOD 3', 'AP3-3005', 'HU???', 3),
('AP-01', 'APPLE WATCH S6', 'APPW-S6002', 'HU???', 1),
('AP-01', 'APPLE WATCH S6', 'APPW-S6005', 'L?? TH?????NG KI???T', 2),
('AP-01', 'APPLE WATCH S6', 'APW-S6005', 'HU???', 3);

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385999333',
`ngay_bat_dau_quan_ly`= '2019-02-03',
`tong_luong_chi_tra` = 51000000
WHERE ten_chi_nhanh = 'B???C LI??U';

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385123123',
`ngay_bat_dau_quan_ly`= '2021-11-16',
`tong_luong_chi_tra` = 47000000
WHERE ten_chi_nhanh = 'HU???';

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385789789',
`ngay_bat_dau_quan_ly`= '2018-06-06',
`tong_luong_chi_tra` = 26000000
WHERE ten_chi_nhanh = 'L?? TH?????NG KI???T';

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385456456',
`ngay_bat_dau_quan_ly`= '2021-11-16',
`tong_luong_chi_tra` = 26000000
WHERE ten_chi_nhanh = 'QU???NG B??NH';


