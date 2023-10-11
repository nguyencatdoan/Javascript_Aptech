let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let arr_tangdan = [1,2,3,4,5,6,7]
let DoDaiMang = arr.length
//Tìm vị của phần tử mảng
function cau1a(){
    let i = 0
    do{
        console.log("Vi tri",i,"co phan tu",arr[i])
        i++
    }while(i<DoDaiMang)
}
// Tìm Tổng
function cau1b(){
    let i = 0
    tong = 0
    do{
        tong += arr[i]
        i++
    }
    while( i < DoDaiMang)
    console.log("Tong",tong)

}
// Phần tử lớn nhất nhỏ nhất trong mảng
function cau1c(){
    let i = 0
    lonnhat = arr[0]
    nhonhat = arr[0]
    do{
        if (arr[i] < nhonhat){
            nhonhat = arr[i]
        }
        if (arr[i] > lonnhat){
            lonnhat = arr[i]
        }
        i++
    }
    while(i < DoDaiMang)
    console.log("Nho nhat",nhonhat)
    console.log("Lon nhat",lonnhat)
}
// Tính trung bình cộng
function cau1d(){
    let i = 0
    Tong = 0
    do{
        Tong += arr[i]
        i++
    }
    while(i < DoDaiMang)
    console.log("Trung binh cong",Tong/(DoDaiMang))
}
// Đảo ngược thứ tự mảng
function cau1e(){
    let i = DoDaiMang - 1
    let j = 0
    let arr_DaoNguoc = []
    do{
        arr_DaoNguoc[j] = arr[i]
        i--
        j++
    }
    while(i >= 0)
    console.log("Dao Nguoc",arr_DaoNguoc)
}
//  TÌm số lần xuât hiện của phần tử
function cau1f(){
    let count = {}
    let i = 0
    do{
        if(count[arr[i]] == undefined){
            count[arr[i]] = 1
        }
        else{
            count[arr[i]] ++
        }
        i++
    }
    while(i < DoDaiMang)
    console.log(count)
}
// Kiểm tra tăng dần
function cau1h(){
    let i = 0
    let check = true
    do{
        if(arr[i] > arr[i+1]){ //replace arr -> arr_tangdan
            check =false
            i++
            break
        }

        i++
    }
    while(i < DoDaiMang - 1)
    if (check == true){
        console.log("Tang dan")
    }
    else{
        console.log("Ko tang dan")
    }
}
//sắp xếp mảng tăng dần
function cau1i(){
    let i = 0
    do{
        let j = i + 1
        do{
                if (arr[j] < arr[i]){
                    let temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                }

                j++
        }
        while(j < DoDaiMang)
        i++
    }
    while(i < DoDaiMang)
    console.log("Tang dan:",arr)
}
// sắp xếp giảm dần
function cau1j(){
    let i = 0
    do{
        let j = i + 1
        do{
                if (arr[j] > arr[i]){
                    let temp = arr[j]
                    arr[j] = arr[i]
                    arr[i] = temp
                }

                j++
        }
        while(j < DoDaiMang)
        i++
    }
    while(i < DoDaiMang)
    console.log("Giam dan:",arr)
}
// chẵn lẻ
function cau1k(){
    let i = 0 
    do {
        if (arr[i] % 2 == 0) {
            console.log('Vi tri',i,'co so chan trong mang: ', arr[i])
        }

        else if (arr[i] % 2 !== 0) {
            console.log('Vi tri',i,' co so le trong mang: ', arr[i])
        }

        i++
    }
    while(arr[i] !== undefined)
}

