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
-- Cấu trúc bảng cho bảng `tu_van`
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
('AP-01', 'APPLE', 'MỸ', 0, 0, 0),
('AS-01', 'ASUS', 'ĐÀI LOAN', 0, 0, 0),
('CA-01', 'CASIO', 'Nhật Bản', 0, 0, 0),
('CI-01', 'CITIZEN', 'Nhật Bản', 0, 0, 0),
('D-01', 'DELL', 'MỸ', 0, 0, 0),
('SS-01', 'SAMSUNG', 'HÀN QUỐC', 0, 0, 0),
('V-01', 'VIN', 'VIỆT NAM', 0, 0, 0);

INSERT INTO `dong_san_pham` (`ten_san_pham`, `ten_san_pham_tang_kem`,
`loai_san_pham`, `khuyen_mai`, `ma_so_hang`, `gia_niem_yet`, `thoi_gian_bao_hanh`,
`chat_lieu`, `thoi_gian_ra_mat`) VALUES
('AIRPOD 3', NULL, 'PHỤ KIỆN', '800000', 'AP-01', 4000000, 2002, 'NHỰA', '2020-08-12'),
('APPLE WATCH S6', NULL, 'ĐỒNG HỒ THÔNG MINH', '50%', 'AP-01', 8992000, 2001, 'KIM LOẠI', '2020-09-15'),
('Apple Watch SE', NULL, 'ĐỒNG HỒ THÔNG MINH', '15%', 'AP-01', 8990000, 2001, 'Silicone', '2020-09-15'),
('ASUS ROG Phone 5 chính hãng\r\n', NULL, 'Điện thoại', '20%', 'AS-01', 18990000, 2004, 'Kim loại\r\n', '2020-11-06'),
('CÁP SẠC SAMSUNG', NULL, 'PHỤ KIỆN', NULL, 'SS-01', 200000, 2001, 'NHỰA', '2016-11-09'),
('CASIO LTP-E413RL-5ADF', NULL, 'ĐỒNG HỒ THỜI TRANG', '35%', 'CA-01', 2468000, 2001, 'Da tổng hợp', '0000-00-00'),
('CASIO MTP-E321B-1AVDF', NULL, 'ĐỒNG HỒ THỜI TRANG', '35%', 'CA-01', 3381000, 2001, 'Thép không gỉ', '0000-00-00'),
('CITIZEN ED8183-54A', NULL, 'ĐỒNG HỒ THỜI TRANG', '45%', 'CI-01', 4580000, 2001, 'Thép không gỉ', '0000-00-00'),
('CỦ SẠC APPLE', NULL, 'PHỤ KIỆN', NULL, 'AP-01', 300000, 2001, 'NHỰA', '2020-11-12'),
('IPAD PRO M1', 'AIRPOD 3', 'TABLET', '5%', 'AP-01', 42000000, 2003, 'NHỰA', '2020-11-01'),
('IPHONE 13 PRO MAX', NULL, 'ĐIỆN THOẠI', NULL, 'AP-01', 30000000, 2002, 'NHỰA', '2021-08-12'),
('Laptop Asus TUF Gaming', NULL, 'LAPTOP', '800000', 'AS-01', 25000000, 2001, 'NHỰA VÀ KIM LOẠI', '2020-11-12'),
('MACBOOK M1', 'AIRPOD 3', 'LAPTOP', 'TẶNG KÈM TAI NGHE AIRPOD', 'AP-01', 30000000, 2002, 'KIM LOẠI VÀ NHỰA', '2021-11-10'),
('SAMSUNG GALAXY S8', 'AIRPOD 3', 'ĐIỆN THOẠI', '30%', 'SS-01', 7500000, 2002, 'NHỰA', '2016-08-12'),
('SAMSUNG GALAXY TAB S7', NULL, 'TABLET', NULL, 'SS-01', 11990000, 2002, 'NHỰA', '2021-11-02'),
('Samsung Galaxy Watch 3', NULL, 'ĐỒNG HỒ THÔNG MINH', '2500000', 'SS-01', 9490000, 2001, 'Da', '2020-08-01');

INSERT INTO `dong_ho_thong_minh` (`ten_dong_ho`, `cam_bien`, `hdh`, `cong_ket_noi`, `day_deo`, `pin`, `khoi_luong`, `kich_thuoc`) VALUES
('APPLE WATCH S6', 'Cao áp kế, cảm biến ánh sáng môi trường, cảm biến nhịp tim quang học thể hệ 3, cảm biến nhịp tim điện tử, gia tốc kế, GNSS, GPS, La bàn, Đo SpO2', 'watchOS 7.0', 'Đế sạc nam châm', 'Silicone', 'Dung lượng pin: 265.9 mAh', 30.5, 'Dài 40 mm - Ngang 34 mm - Dày 10.4 mm'),
('Apple Watch SE', 'Cao áp kế, Cảm biến ánh sáng môi trường, Cảm biến nhịp tim quang học thế hệ 2, Cảm biến nhịp tim điện tử, Gia tốc kế, GNSS, GPS, La bàn.', 'watchOS 7.0', 'Đế sạc nam châm', 'Silicone', 'Thời gian sử dụng pin: Khoảng 1.5 ngày', 30.49, 'Dài 40 mm - Ngang 34 mm - Dày 10.7 mm'),
('Samsung Galaxy Watch 3', '\r\nCảm biến nhịp tim, Cao áp kế, Gia tốc kế, Galileo, GLONASS, GPS, NFC.', 'OS TIZEN\r\n', 'Đế sạc nam châm', 'Da', 'Dung lượng pin: 247 mAh', 48.2, 'Dài 42.5 mm - Ngang 41 mm - Dày 11.3 mm');

INSERT INTO `dong_ho_thoi_trang` (`ten`, `doi_tuong_su_dung`, `day_deo`, `pin`, `khoi_luong`, `kich_thuoc`) VALUES
('CASIO LTP-E413RL-5ADF', 'Nữ', 'Da tổng hợp', 'Thời gian sử dụng pin: Khoảng 3 năm', 0, 'Đường kính mặt: 32 mm'),
('CASIO MTP-E321B-1AVDF', 'Nam', 'Nhựa', 'Thời gian sử dụng pin: Khoảng 10 năm', 0, 'Đường kính mặt: 44 mm'),
('CITIZEN ED8183-54A', 'Nữ', 'Thép không gỉ', 'Thời gian sử dụng pin: Khoảng 2 năm', 0, 'Đường kính mặt: 33 mm');

INSERT INTO `phu_kien` (`ten_phu_kien`, `kieu`) VALUES
('AIRPOD 3', 'TAI NGHE'),
('CÁP SẠC SAMSUNG', 'CÁP SẠC'),
('CỦ SẠC APPLE', 'CỦ SẠC');

INSERT INTO `dien_thoai` (`ten_dien_thoai`, `cpu`, `gpu`, `pin`, `khoi_luong`, `hdh`, `cam_truoc`, `cam_sau`, `kich_thuoc_man_hinh`, `do_phan_giai_man_hinh`, `cong_nghe_man_hinh`, `do_sang_man_hinh`, `den_flash`, `bo_nho`) VALUES
('ASUS ROG Phone 5 chính hãng\r\n', 'Qualcomm SM8350 Snapdragon 888 5G (5 nm)\r\n', 'Adreno 660\r\n', 'Li-Po 6000 mAh, non-removable\r\n', 238, 'Android 12', '24 MP, f/2.5, 27mm (wide), 0.9µm\r\n', 'Camera góc rộng: 64 MP, f/1.8, 26mm, 1/1.73\", 0.8µm, PDAF\r\nCamera góc siêu rộng: 13 MP, f/2.4, 11mm, 125˚\r\nCamera macro\" 5 MP, f/2.0', 6.78, '1080 x 2448 pixels (FullHD+)\r\n', 'AMOLED', 800, 'LED flash', 256),
('IPHONE 13 PRO MAX', 'Apple A15\r\n', 'GPU 5 nhân', '4,325mAh\r\n', 240, 'IOS', '12MP, ƒ/2.2\r\n', 'Camera góc rộng: 12MP, ƒ/1.5\r\nCamera góc siêu rộng: 12MP, ƒ/1.8\r\nCamera tele : 12MP, /2.8', 6.7, '2778 x 1284 pixel\r\n', 'OLED', 1000, 'Dual-LED dual-tone flash', 256),
('SAMSUNG GALAXY S8', 'Exynos 8895 8 nhân\r\n', 'Mali-G71\r\n', '3000', 155, 'Android 10', '8 MP\r\n', '12 MP\r\n', 5.8, '2K+ (1440 x 2960 Pixels)\r\n', 'Super AMOLED\r\n', 1200, 'LED flash,', 64);

INSERT INTO `may_tinh_bang` (`ten_may_tinh_bang`, `bo_nho`, `hdh`, `cpu`, `cong_nghe_man_hinh`, `do_phan_giai_man_hinh`, `kich_thuoc_man_hinh`, `do_sang_man_hinh_toi_da`, `camera_truoc`, `camera_sau`, `pin`, `khoi_luong`) VALUES
('IPAD PRO M1', 8, 'iPadOS 14', 'Apple M1 8 nhân', 'Liquid Retina XDR mini-LED LCD', '2048 x 2732 Pixels', '12.9 inch', 600, '12 MP', 'Chính 12 MP & Phụ 10 MP, TOF 3D LiDAR', 'Li-Po 10.835 mAh', 0.69),
('SAMSUNG GALAXY TAB S7', 4, 'ANDROID 11', '4 nhân 2.4 GHz & 4 nhân 1.8 GHz', 'TFT LCD', '1600 x 2560 Pixels', '12.4 inch', 400, '5 MP', '8 MP', 'Li-Po 10090 mAh', 0.61);


INSERT INTO `laptop` (`ten`, `bo_nho`, `he_dieu_hanh`, `cpu`, `cong_nghe_man_hinh`, `do_phan_giai_man_hinh`, `kich_thuoc_man_hinh`, `do_sang_toi_da_man_hinh`, `gpu`, `ram`, `pin`, `khoi_luong`) VALUES
('Laptop Asus TUF Gaming', 512, 'Windows 11 Home SL', 'Intel Core i5 Tiger Lake - 11400H', 'Chống chói Anti Glare, Tấm nền IPS', 'Full HD (1920 x 1080)', '15.6 inch', 250, 'Card rời - NVIDIA GeForce RTX3050, 4 GB', 8, '3-cell Li-ion, 48 Wh', 2.3),
('MACBOOK M1', 256, 'Mac OS', 'Apple M1', 'LED Backlit, Retina, True Tone Technology, Tấm nền IPS', 'Retina (2560 x 1600)', '13.3 inch', 500, 'Card tích hợp - 8 nhân GPU', 16, 'Khoảng 10 tiếng', 1.4);

INSERT INTO `tien_ich` (`ten_dong_sp`, `tien_ich`) VALUES
('AIRPOD 3', 'Bảo mật nâng cao: Mở khoá khuôn mặt, Mở khoá vân tay cạnh viền;\r\nTính năng đặc biệt: Ghi âm cuộc gọi, Không gian thứ hai, Ứng dụng kép (Nhân bản ứng dụng);\r\nGhi âm;\r\nXem phim: AVI, MP4\r\nNghe nhạc: FLAC, Midi, MP3, OGG\r\n\r\n'),
('ASUS ROG Phone 5 chính hãng\r\n', 'Bảo mật nâng cao: Mở khoá khuôn mặt, Mở khoá vân tay dưới màn hình;\r\nHỗ trợ 5G, Bảo mật vân tay; Cảm biến ánh sáng, Cảm biến áp kế, Cảm biến gia tốc, Cảm biến tiệm cận, Con quay hồi chuyển, La bàn\r\n\r\n'),
('IPHONE 13 PRO MAX', 'Cảm biến ánh sáng, Cảm biến áp kế, Cảm biến gia tốc, Cảm biến tiệm cận, Con quay hồi chuyển; \r\nHỗ trợ 5G, Kháng nước, kháng bụi, Sạc không dây, Nhận diện khuôn mặt;\r\nKháng nước, bụi	IP68\r\n\r\n'),
('SAMSUNG GALAXY S8', 'Bảo mật nâng cao: Mở khóa bằng vân tay, Mở khoá quét mống mắt;\r\n\r\n\r\n');

INSERT INTO `tuong_thich` (`ten_sp`, `ten_phu_kien`) VALUES
('IPAD PRO M1', 'AIRPOD 3'),
('IPAD PRO M1', 'CỦ SẠC APPLE'),
('IPHONE 13 PRO MAX', 'AIRPOD 3'),
('SAMSUNG GALAXY S8', 'CÁP SẠC SAMSUNG'),
('SAMSUNG GALAXY TAB S7', 'CÁP SẠC SAMSUNG');

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
('AIRPOD 3', 'Trắng, Đen'),
('APPLE WATCH S6', 'Hồng, Xanh dương đậm, Trắng'),
('Apple Watch SE', 'Hồng, Đen'),
('ASUS ROG Phone 5 chính hãng\r\n', 'Đen, Xám'),
('CÁP SẠC SAMSUNG', 'Trắng, Đen'),
('CASIO LTP-E413RL-5ADF', 'Hồng, Trắng'),
('CASIO MTP-E321B-1AVDF', 'Đen, Xám'),
('CITIZEN ED8183-54A', 'Trắng, Vàng'),
('CỦ SẠC APPLE', 'Trắng, Đen'),
('IPAD PRO M1', 'Đen, Xám'),
('IPHONE 13 PRO MAX', 'Bạc, Vàng, Xám, Xanh'),
('SAMSUNG GALAXY S8', 'Xanh, Đen, Bạc');


INSERT INTO `chi_nhanh` (`ten_chi_nhanh`, `dia_chi`, `cccd_quan_ly`, `ngay_bat_dau_quan_ly`, `tong_luong_chi_tra`) VALUES
('BẠC LIÊU', 'HỘ PHÒNG, GIÁ RAI, BẠC LIÊU', NULL, NULL, NULL),
('CÀ MAU', 'CÀ MAU', NULL, NULL, NULL),
('CẦN THƠ', 'CẦN THƠ', NULL, NULL, NULL),
('HUẾ', 'ĐƯỜNG HÙNG VƯƠNG-THÀNH PHỐ HUẾ-THỪA THIÊN HUẾ', NULL, NULL, NULL),
('LÝ THƯỜNG KIỆT', '248, LÝ THƯỜNG KIỆT, P.14, Q.10, TP.HCM', NULL, NULL, NULL),
('QUẢNG BÌNH', '40-VŨ TRỌNG PHỤNG-BẮC LÝ-ĐỒNG HỚI-QUẢNG BÌNH', NULL, NULL, NULL);


INSERT INTO `nhan_vien` (`cccd`, `ho`, `ten_dem`, `ten`, `luong`, `sdt`, `ngay_sinh`, `ca_lam_viec`, `dia_chi`, `gioi_tinh`, `ten_chi_nhanh`, `ngay_bat_dau_lam_viec`, `cccd_nguoi_giam_sat`, `loai_nhan_vien`) VALUES
('385123123', 'MAI', 'THỊ', 'BẮC', 10000000, '0333111221', '2001-11-17', 'SÁNG', 'THÀNH PHỐ HUẾ-THỪA THIÊN HUẾ', 'Nữ', 'HUẾ', '2021-11-16', NULL, 'QUẢN LÝ'),
('385456456', 'MAI', 'ĐỨC', 'LONG', 10000000, '0333111224', '2001-10-17', 'SÁNG', 'QUẢNG BÌNH', 'Nam', 'QUẢNG BÌNH', '2021-11-16', NULL, 'QUẢN LÝ'),
('385789789', 'LƯƠNG', 'VĂN', 'TOÀN', 10000000, '0946536536', '1989-05-06', 'CẢ NGÀY', 'HỒ CHÍ MINH', 'Nam', 'LÝ THƯỜNG KIỆT', '2018-06-06', NULL, 'QUẢN LÝ'),
('385999333', 'NGUYỄN', 'THỊ', 'MY', 10000000, '0942335663', '1999-05-06', 'CẢ NGÀY', 'HỘ PHÒNG, GIÁ RAI, BẠC LIÊU', 'Nữ', 'BẠC LIÊU', '2019-02-03', NULL, 'QUẢN LÝ'),
('366366366', 'TRẦN', 'VIỆT', 'TOÀN', 4000000, '0159852432', '1999-03-02', 'CẢ NGÀY', 'QUẬN 4, HỒ CHÍ MINH', 'Nam', 'LÝ THƯỜNG KIỆT', '2018-06-04', '385789789', 'BẢO VỆ'),
('385024680', 'NGỌ', 'TIẾN', 'ĐẠT', 5000000, '0356989765', '2001-07-11', 'CẢ NGÀY', 'GIA NGHĨA-ĐẮK NÔNG', 'Nam', 'HUẾ', '2020-10-10', '385123123', 'GIAO HÀNG'),
('385024688', 'NGỌ', 'TIẾN', 'LONG', 7000000, '0356989777', '2001-08-11', 'CẢ NGÀY', 'GIA NGHĨA-ĐẮK NÔNG', 'Nam', 'HUẾ', '2020-10-10', '385123123', 'BÁN HÀNG'),
('385111111', 'HOÀNG', 'MINH', 'HÒA', 7000000, '0333112332', '2002-03-03', 'CHIỀU', 'ĐỒNG HỚI-QUẢNG BÌNH', 'Nam', 'QUẢNG BÌNH', '2021-11-02', '385456456', 'BÁN HÀNG'),
('385111112', 'NGỌ', 'TIẾN', 'MINH', 5000000, '0356666777', '2001-08-11', 'CẢ NGÀY', 'GIA NGHĨA-ĐẮK NÔNG', 'Nam', 'QUẢNG BÌNH', '2020-10-10', '385456456', 'GIAO HÀNG'),
('385111113', 'TRẦN', 'THÀNH', 'DƯƠNG', 4000000, '0697685915', '2001-10-30', 'CẢ NGÀY', 'BẠC LIÊU', 'Nam', 'QUẢNG BÌNH', '2021-11-02', '385456456', 'BẢO VỆ'),
('385111118', 'HOÀNG', 'MINH', 'HIẾU', 7000000, '0333112444', '1990-03-03', 'CHIỀU', 'ĐỒNG HỚI-QUẢNG BÌNH', 'Nam', 'HUẾ', '2021-11-03', '385123123', 'BÁN HÀNG'),
('385111119', 'NGỌ', 'TIẾN', 'THANH', 7000000, '0356666888', '1995-08-11', 'CẢ NGÀY', 'GIA NGHĨA-ĐẮK NÔNG', 'Nam', 'HUẾ', '2020-10-10', '385123123', 'BÁN HÀNG'),
('385111122', 'TRẦN', 'THÀNH', 'LONG', 7000000, '0697685999', '1996-10-30', 'CẢ NGÀY', 'BẠC LIÊU', 'Nam', 'BẠC LIÊU', '2021-11-02', '385999333', 'BÁN HÀNG'),
('385111133', 'LÝ', 'THÀNH', 'HÒA', 7000000, '0697685888', '1994-10-30', 'CẢ NGÀY', 'CÀ MAU', 'Nam', 'BẠC LIÊU', '2021-11-04', '385999333', 'BÁN HÀNG'),
('385111144', 'HỒ', 'THÀNH', 'DŨNG', 7000000, '0697685111', '1997-10-30', 'CẢ NGÀY', 'SÓC TRĂNG', 'Nam', 'BẠC LIÊU', '2021-11-05', '385999333', 'BÁN HÀNG'),
('385111213', 'HUỲNH', 'BẢO', 'ĐẠI', 5000000, '0834789123', '2000-11-12', 'CHIỀU', 'QUẬN 7, HỒ CHÍ MINH', 'Nam', 'LÝ THƯỜNG KIỆT', '2018-06-06', '385789789', 'GIAO HÀNG'),
('385135579', 'HOÀNG', 'MINH', 'BẰNG', 7000000, '0333112222', '2002-01-03', 'CHIỀU', 'ĐỒNG HỚI-QUẢNG BÌNH', 'Nữ', 'HUẾ', '2021-11-02', '385123123', 'BÁN HÀNG'),
('385222333', 'LƯƠNG', 'PHƯƠNG', 'TOÀN', 7000000, '0942555666', '2001-07-30', 'SÁNG', 'AN GIANG', 'Nam', 'BẠC LIÊU', '2019-05-05', '385999333', 'BÁN HÀNG'),
('385323232', 'HUỲNH', 'MINH', 'TOÀN', 5000000, '0943636363', '2000-05-06', 'CHIỀU', 'KIÊN GIANG', 'Nam', 'BẠC LIÊU', '2019-06-05', '385999333', 'GIAO HÀNG'),
('385385385', 'NGUYỄN', 'MINH', 'DƯƠNG', 4000000, '0949865865', '1998-06-07', 'CẢ NGÀY', 'T Y NINH', 'Nam', 'BẠC LIÊU', '2020-05-05', '385999333', 'BẢO VỆ'),
('385456654', 'MAI', 'PHƯƠNG', 'ĐẠT', 7000000, '0932632632', '2001-06-30', 'SÁNG', 'QUẬN 5, HỒ CHÍ MINH', 'Nam', 'LÝ THƯỜNG KIỆT', '2018-06-06', '385789789', 'BÁN HÀNG'),
('385468012', 'TRẦN', 'THỊ', 'DƯƠNG', 4000000, '0697685911', '2001-06-30', 'CẢ NGÀY', 'BẠC LIÊU', 'Nữ', 'HUẾ', '2021-11-02', '385123123', 'BẢO VỆ'),
('385693632', 'TRẦN', 'PHƯƠNG', 'LONG', 4000000, '0925363848', '2000-05-06', 'CẢ NGÀY', 'CÀ MAU', 'Nam', 'BẠC LIÊU', '2019-04-03', '385999333', 'BẢO VỆ');


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
('da', '385024680', NULL, 0, 'Chưa giao'),
('DH-01', '385024680', '2021-11-25 16:14:39', 20000, 'Đã giao'),
('DH-02', '385024680', '2021-11-25 16:14:39', 10000, 'Đã giao'),
('DH-03', '385024680', '2021-11-27 14:34:40', 50000, 'Đã giao'),
('DH-04', '385024680', '2021-11-27 16:00:07', 50000, 'Đã giao'),
('DH-05', '385024680', '2021-11-27 16:00:07', 50000, 'Đã giao');

INSERT INTO `khach_hang` (`sdt`, `ten`, `ho`, `ten_dem`, `dia_chi`, `email`, `cccd`, `gioi_tinh`, `so_luong_don_hang_da_mua`) VALUES
('0123456789', 'DƯƠNG', 'TRẦN', 'THÀNH', 'BẠC LIÊU', 'duong.lam@hcmut.edu.vn', '123456789', 'Nam', 2),
('0333666999', 'TIẾN', 'HOÀNG', 'MINH', 'QUẢNG BÌNH', 'tien.hoang@hcmut.edu.vn', '133557799', 'Nam', 0),
('0356989765', 'ĐẠT', 'NGỌ', 'TIẾN', '242-TRẦN PHÚ-NGHĨA ĐỨC-GIA NGHĨA-ĐẮK NÔNG', 'dat.ngo12345@hcmut.edu.vn', '245456321', 'Nam', 1),
('0939655455', 'LONG', 'MAI', 'ĐỨC', 'HUẾ', 'long.mai@hcmut.edu.vn', '696969696', 'Nam', 2),
('0945000111', 'THÁI', 'NGUYỄN', 'BẢO', 'BẠC LIÊU', 'nbthai@gmail.com', '485000111', 'Nam', 0),
('0945000112', 'BẢO', 'TRẦN', 'VĂN', 'BẠC LIÊU', 'tvbao@gmail.com', '485000112', 'Nam', 0),
('0945000113', 'TOÀN', 'NGUYỄN', 'VĂN', 'BẠC LIÊU', 'nbthai@gmail.com', '485000113', 'Nam', 0),
('0987654321', 'BẰNG', 'HỒ', 'THỊ', 'HỒ CHÍ MINH', 'bang.ho@hcmut.edu.vn', '765438132', 'Nữ', 1);

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
('da', '0939655455', '385111118', 'Tiền mặt'),
('DH-01', '0939655455', '385135579', 'Tiền mặt'),
('DH-02', '0123456789', '385135579', 'Tiền mặt'),
('DH-03', '0987654321', '385111144', 'Tiền mặt'),
('DH-04', '0123456789', '385111111', 'Tiền mặt'),
('DH-05', '0356989765', '385111119', 'Tiền mặt');

INSERT INTO `san_pham` (`ten_dong_san_pham`, `seri_san_pham`, `tinh_trang`, `ma_don_hang`, `ngay_giao_dich`, `ten_chi_nhanh`) VALUES
('AIRPOD 3', 'AP-3001', 'ĐÃ BÁN', 'DH-03', '2021-11-01', 'LÝ THƯỜNG KIỆT'),
('AIRPOD 3', 'AP-30102', 'ĐÃ BÁN', 'DH-03', '2021-11-17', 'CẦN THƠ'),
('AIRPOD 3', 'AP3-3005', 'CHƯA BÁN', 'da', NULL, 'HUẾ'),
('APPLE WATCH S6', 'APPW-S6002', 'ĐÃ BÁN', 'DH-01', '2021-11-03', 'HUẾ'),
('APPLE WATCH S6', 'APPW-S6005', 'ĐÃ BÁN', 'DH-03', '2021-11-01', 'LÝ THƯỜNG KIỆT'),
('APPLE WATCH S6', 'APW-S6005', 'ĐÃ BÁN', 'DH-01', '2021-11-03', 'HUẾ'),
('IPAD PRO M1', 'IPP-M1100', 'ĐÃ BÁN', 'DH-02', '2021-11-17', 'QUẢNG BÌNH'),
('IPHONE 13 PRO MAX', 'IP-13PM003', 'ĐÃ BÁN', 'DH-03', '2021-11-01', 'LÝ THƯỜNG KIỆT'),
('Laptop Asus TUF Gaming', 'ASUS-TUF-2002', 'Chưa bán', NULL, NULL, 'QUẢNG BÌNH'),
('Samsung Galaxy Watch 3', 'SSGW3-001', 'Chưa bán', NULL, NULL, 'CÀ MAU');

INSERT INTO `nguoi_than` (`cccd_nv`, `ho_ten`, `gioi_tinh`, `ngay_sinh`, `moi_quan_he`) VALUES
('366366366', 'TRẦN VIỆT DŨNG', 'Nam', '1880-06-05', 'Cha-con'),
('385024680', 'NGỌ THÀNH HÒA', 'Nam', '1967-11-01', 'Cha - con'),
('385111111', 'NGUYỄN THỊ BÉ', 'Nữ', '1980-05-04', 'Mẹ - con'),
('385111112', 'NGỌ THÀNH HÒA', 'Nam', '1967-11-01', 'Cha - con'),
('385111113', 'HUỲNH THỊ LINH', 'Nữ', '1970-03-02', 'Mẹ - con'),
('385111213', 'HUỲNH BẢO VIỆT', 'Nam', '1970-05-06', 'Cha - con'),
('385123123', 'MAI TIẾN THUẬN', 'Nam', '1966-01-01', 'Cha - con'),
('385135579', 'HOÀNG THANH THUẬN', 'Nam', '1968-01-01', 'Cha - con'),
('385222333', 'TRẦN THỊ HOA', 'Nữ', '1970-07-06', 'Mẹ - con'),
('385323232', 'HUỲNH MINH HIẾU', 'Nam', '1970-11-30', 'Cha - con'),
('385385385', 'LƯƠNG THỊ THÚY', 'Nữ', '1975-05-05', 'Mẹ - con'),
('385456456', 'MAI THÀNH NHANH', 'Nam', '1961-11-01', 'Cha - con'),
('385456654', 'MAI PHƯƠNG LONG', 'Nam', '1973-04-06', 'Cha - con'),
('385468012', 'TRẦN VĂN HOÀNG', 'Nam', '1974-03-03', 'Cha - con'),
('385693632', 'NGUYỄN THỊ ĐÀO', 'Nữ', '1980-04-03', 'Mẹ - con'),
('385789789', 'LƯƠNG VĂN LINH', 'Nam', '1965-03-04', 'Cha - con'),
('385999333', 'NGUYỄN TIẾN DŨNG', 'Nam', '1974-05-06', 'Cha - con');

INSERT INTO `bao_hanh` (`ma_so_hang`, `ten_dong_sp`, `seri_sp`, `ten_chi_nhanh`,
`thoi_gian_bao_hanh`) VALUES
('AP-01', 'AIRPOD 3', 'AP-3001', 'LÝ THƯỜNG KIỆT', 0),
('AP-01', 'AIRPOD 3', 'AP-30102', 'CẦN THƠ', 3),
('AP-01', 'AIRPOD 3', 'AP3-3005', 'HUẾ', 3),
('AP-01', 'APPLE WATCH S6', 'APPW-S6002', 'HUẾ', 1),
('AP-01', 'APPLE WATCH S6', 'APPW-S6005', 'LÝ THƯỜNG KIỆT', 2),
('AP-01', 'APPLE WATCH S6', 'APW-S6005', 'HUẾ', 3);

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385999333',
`ngay_bat_dau_quan_ly`= '2019-02-03',
`tong_luong_chi_tra` = 51000000
WHERE ten_chi_nhanh = 'BẠC LIÊU';

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385123123',
`ngay_bat_dau_quan_ly`= '2021-11-16',
`tong_luong_chi_tra` = 47000000
WHERE ten_chi_nhanh = 'HUẾ';

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385789789',
`ngay_bat_dau_quan_ly`= '2018-06-06',
`tong_luong_chi_tra` = 26000000
WHERE ten_chi_nhanh = 'LÝ THƯỜNG KIỆT';

UPDATE `chi_nhanh`
SET `cccd_quan_ly` = '385456456',
`ngay_bat_dau_quan_ly`= '2021-11-16',
`tong_luong_chi_tra` = 26000000
WHERE ten_chi_nhanh = 'QUẢNG BÌNH';


