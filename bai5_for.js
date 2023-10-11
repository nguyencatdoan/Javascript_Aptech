let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let DoDaiMang = arr.length
// in ra tất cả vị trí phần tử
function cau1a(){
    // cho i = 0 sau đó xét i có bé hơn DoDaiMang nếu có i++ (thì lúc này i = 1 )
    // và sau đó xét i tiếp (i = 1) có bé hơn DoDaiMang nếu có thì lặp lại
    // nếu không thì kết thúc vòng lặp
    for (let i = 0; i < DoDaiMang; i++){
        console.log("Vi tri",i+1,"co phan tu",arr[i])
    }
}
// tổng các phần tử mảng
function cau1b(){
    let Tong = 0
    for (let i = 0; i < DoDaiMang; i++){
        Tong = Tong + arr[i]
    }
    console.log("Tong cua arr:",Tong)
}
// phần tử lớn nhất, nhỏ nhất trong mảng
function cau1c(){
    let lonnhat = arr[0]
    let nhonhat = arr[0]
    for (let i = 0; i < DoDaiMang; i++){
        if(arr[i] > lonnhat){
            lonnhat = arr[i]
        }

        if(arr[i] < nhonhat){
            nhonhat = arr[i]
        }

    }
    console.log("So lon nhat:",lonnhat)
    console.log("So nho nhat:",nhonhat)

}
//trung bình cộng các phần tử trong mảng
function cau1d(){
    let Tong = 0
    for (let i = 0; i < DoDaiMang; i++){
        Tong = Tong + arr[i]
    }
    console.log("Trung binh cong:",Tong/DoDaiMang)
}
//Đảo ngược thứ tự các phần tử trong mảng
function cau1e(){
    let arr1 = []
    let j = 0
    for (let i = DoDaiMang - 1; i >=0; i--) {
        arr1[j] = arr[i]
        j++
    }
    console.log("Dao Nguoc",arr1)
}
//cách 1
//số lần xuất hiện của mỗi phần tử trong mảng
function cau1f(so_can_xet){
    let count = 0
    for (let i = 0; i < DoDaiMang; i++){
        if (so_can_xet == arr[i]){
            count++
        }
    }
    console.log("So",so_can_xet,"xuat hien",count,"lan")
}
// cách 2
//số lần xuất hiện của mỗi phần tử trong mảng
function cau1f_2(){
    const TanSuatXuatHien = {}
    for (let i = 0; i < DoDaiMang; i++){
        const PhanTuThuI = arr[i];
        TanSuatXuatHien[PhanTuThuI] = (TanSuatXuatHien[PhanTuThuI] || 0) + 1;
        // Ví dụ vị trí 1 là PhanTuThuI = 3 (arr[0])
        //TanSuatXuatHien[PhanTuThuI] = (TanSuatXuatHien[PhanTuThuI] || 0) + 1;
        //Thì vế sau TanSuatXuatHien[PhanTuThuI] là True còn 0 là False
        //Vì vị trí số 3 mới gọi vào nên Object TanSuatXuatHien còn rỗng nên là 0 (False)
        // TanSuatXuatHien[3] = 0 + 1 (Số 3 xuất hiện 1 lần)
        //Ví dụ vị trí 1 là PhanTuThuI = 3 (arr[6])
        //Vì vị trí số 3 đã xuất hiện trước đó vào nên TanSuatXuatHien[3] = 1 (xuất hiện lần đầu) + 1
        //Mong Cát ĐOan tương lai hiểu ý tôi :#D
        //Qua while để tìm câu dễ hiểu hơn
    }
    console.log("Dem lan xuat hien",TanSuatXuatHien)

}
// Tăng dần
function cau1i(){
    for(let i = 0; i < DoDaiMang; i++){
        for(let j = i + 1; j < DoDaiMang;j++){
            if(arr[i] > arr[j]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    console.log('Tang dan',arr)

}
// Giảm dần
function cau1j(){
    for(let i = 0; i < DoDaiMang; i++){
        for(let j = i + 1; j < DoDaiMang;j++){
            if(arr[i] < arr[j]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    console.log('Giam dan',arr)

}
// số lẻ số chẵn
function cau1k(){
    for(let i = 0; i < DoDaiMang; i++){
        if (arr[i] % 2 == 0) {
            console.log('Vi tri',i,'co so chan trong mang: ', arr[i])
        }

        else if (arr[i] % 2 !== 0) {
            console.log('Vi tri',i,' co so le trong mang: ', arr[i])
        }
    }
}

