//cau 1
// check âm dương
function cau1a(n){
    if (n<0){
        console.log("So n la so am")
    }

    else if (n==0){
        console.log("So n la so 0")
    }

    else{
        console.log("So n la so duong")
    }
}
// check chẵn lẻ
function cau1b(n){
    if (n%2 == 0){
        console.log("So n la so chan")
    }

    else{
        console.log("So n la so le")
    }
}
// check lớn nhất trong 3 số
function cau1c(so1,so2,so3){
    let lon_nhat = so1
    if (lon_nhat < so2){
        lon_nhat = so2
        console.log(so2,"la so lon nhat")
    }
    else if (lon_nhat < so3){
        lon_nhat = so3
        console.log(so3,"la so lon nhat")
    }
    else{
        console.log(so1,"la so lon nhat")
    }
}
// check năm nhuận
function cau1d(year){
    if (year % 4 == 0 && year % 100 != 0){
        console.log("Nam nhuan")
    }

    else{
        console.log("Khong phai nam nhuan")
    }
}

// check  nguyên âm phụ âm
function cau1e(word_check){
    let nguyen_am = ['a','i','u','e','o']
    if (nguyen_am.includes(word_check)){
        console.log(word_check,"La nguyen am")
    }

    else{
        console.log(word_check,"la phu am")
    }
}
//cau 2
// tìm nghiệm phương trình bậc 2
function cau2a(a,b,c){
    let delta = (b*b) - ( 4*a*c)
   if (a == 0 && b == 0){
    console.log("Vo nghiem")
   } 

   else if( a == 0){
        nghiem_kep = -c/b
        console("Nghiem kep =",nghiem_kep)
   }

   else if (delta < 0){
    console.log("Vo nghiem")
   }
   else if (delta > 0){
    nghiem1 = (-b + Math.sqrt(delta))/(2*a)
    nghiem2 = (-b - Math.sqrt(delta))/(2*a)
    console.log("Nghiem 1 =",nghiem1)
    console.log("Nghiem 2 =",nghiem2)
   }
}
// tính lương NET và thuế
function cau2b(luong){
    let thue = 0
    if (luong >= 8000000 && luong < 15000000){
        thue = luong * 0.15
        console.log("Thu thue 15% la", thue)
        console.log("Luong NET",luong-thue)
    }

    else if (luong >= 15000000){
        thue = luong * 0.2
        console.log("Thu thue 20% la",thue)
        console.log("Luong NET",luong-thue)
    }
    else{
        console.log("Thu thue 0% la",thue)
        console.log("Luong NET",luong-thue)
    }
}

// tính điểm trung bình và xếp hạng
function cau2c(diemkiemtra, diemgiuaky, diemcuoiky){
    let dtb = (diemkiemtra+diemgiuaky+diemcuoiky)/3
    console.log("Diem trung binh",dtb)
    if(dtb >= 0 && dtb <5){
        console.log("Hang D")
    }
    else if(dtb >= 5 && dtb < 7){
        console.log("Hang C")
    }

    else if(dtb >= 7 && dtb < 9){
        console.log("Hang B")
    }

    else if(dtb >= 9 && dtb < 10){
        console.log("Hang A")
    }
    else{
        console.log("Diem trung binh khong hop le")
    }
}
function cau2d(min){
    let phi_thue_bao = 25000
    let phi_50 = 50*600 //30k
    let phi_150 = 150*400 //60k
    if (min <= 50){
        console.log("Chi phi goi gia dinh",min,"la:",phi_thue_bao+(min*600))
    }

    else if (min > 50 && min <= 200){
        console.log("Hoa don gia dinh",min,"la:","phi thue bao:",phi_thue_bao,"+ phi 50k dau tien:",phi_50,"+","phi",min-50,"phut tiep theo",((min-50)*400))
        console.log("Tong chi phi goi gia dinh",min,"la:",phi_thue_bao+phi_50+((min-50)*400))
    }

    else if (min > 200){
        console.log("Chi phi goi gia dinh",min,"la:",phi_thue_bao+phi_50+phi_150+((min-50-150)*200))
    }
}
cau2d(195)