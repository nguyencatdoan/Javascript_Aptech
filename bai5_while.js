let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let arr_tangdan = [1,2,3,4,5,6,7]
let DoDaiMang = arr.length
//Tìm vị trí của phần tử mảng
function cau1a()
{
    let i = 0
    while(i < DoDaiMang){
        console.log("Vi tri",i,"co phan tu",arr[i])
        i++
    }
}
//Tổng của mảng
function cau1b(){
    let i = 0
    let Tong = 0
    while (i<DoDaiMang) {
        Tong += arr[i]
        i++
    }
    console.log(Tong)
}
//Số lớn nhất số nhỏ nhất
function cau1c(){
    let i = 0
    let lonnhat = arr[0]
    let nhonhat = arr[0]
    while(i < DoDaiMang){
        if(arr[i] < nhonhat){
            nhonhat = arr[i] 
        }

        if(arr[i] > lonnhat){
            lonnhat = arr[i]
        }
        i++
    }
    console.log("Lon nhat:",lonnhat)
    console.log("Nho nhat:",nhonhat)
    
}
//Trung bình cộng
function cau1d(){
    let i = 0
    let Tong = 0
    while (i<DoDaiMang) {
        Tong += arr[i]
        i++
    }
    console.log("Trung binh cong:",Tong/DoDaiMang)
}
//Đảo ngược mảng
function cau1e(){
    let i = DoDaiMang - 1
    let arr_Dao_Nguoc = []
    let j = 0
    while(i >= 0){
        arr_Dao_Nguoc[i] = arr[j]
        i--
        j++
    }
    console.log(arr_Dao_Nguoc)
}
//số lần xuất hiện của mỗi phần tử trong mảng
function cau1f(){
    let count = {}
    // cho count là object rỗng
    for(let i = 0; i < DoDaiMang;i++){
        // ví dụ nếu arr[0] = 3 mà count chưa có arr[0] = 3
        // Thì là undefined lúc arr[0] là 1
        // Dễ hiểu giá trị chưa xuất hiện là undefined
        // và gắn nó vào object cho nó là 1
        // Ví dụ đồ vật by Đoan :)))

        // Có cái tủ rỗng bạn xuất phát (arr[0]) từ món đồ số 3(arr[0] = 3)
        // Mà nó chưa có trong tủ(undefined)
        // Bạn cho nó vào tủ suy ra món đồ số 3 đã có số lượng 1 trong tủ
        // count[arr[i]] = 1
        // Nhưng khi đến lượt thứ 6 (arr[6]) thì nó cũng là món đồ số 3 (arr[6] = 3) 
        // Mà món đồ số 3 đã có trong tủ
        //{'3' : 1} object count nó ntn
        //Bạn cho nó vào tủ gộp chung món đồ số 3 trước đó thì suy ra có 2 món đồ số 3
        //{'3' : 1 + 1} object count nó sau khi gộp
        if (count[arr[i]] == undefined){
            count[arr[i]] = 1
        }
        // ngược lại khi chạy đến arr[6] = 3 mà 3 đã xuất hiện trước đó
        // thì 3 = 1+1
        
        else{
            count[arr[i]]++
        }
    }
    console.log(count)
}
//kiểm tra mảng có tăng dần
function cau1h(){
    let check = true
    let i = 0

    while (i < DoDaiMang - 1){
        if (arr[i] > arr[i+1]){
            check = false
            break
        }

        i++
    }

    if(check === false){
        console.log("Ko tang dan")
    }
    else{
        console.log("Tang dan")
    }
    
}
//Sắp xếp tăng dần
function cau1i(){
    let i = 0
    // Cát Đoan quá khứ xinn giải thích
    //arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
    // Ví dụ cho i = 0 while i < DoDaiMang (0 < 12) chạy
    // Cho (j = i + 1) => arr[i] và [j] nắm kế bên (i = 0; j = 1)***
    //  While j < DoDaiMang (1 < 12) chạy
    // Tiến hành đảo
    // Cho temp = arr[j] (arr[j] = ar[1] = 451) (temp lúc này = 451)***
    //  ar[j] = arr[i] => arr[1] = 3 (nhưng temp vẫn = 451) ****
    // arr[i] = temp => arr[0] = 451
    // ráng hiểu nha bé
    while(i < DoDaiMang){
        let j = i + 1
        while (j < DoDaiMang){
            if (arr[j] < arr[i]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }

            j++
        }

        i++
    }
    console.log(arr)
}
//sắp xếp giảm dần
function cau1j(){
    let i = 0
    while (i < DoDaiMang ){
        let j = i + 1
        while(j < DoDaiMang){
            if (arr[j] > arr[i]){
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
            j++
        }
        i++
    }
    console.log(arr)
}
//chẵn lẻ
function cau1kl(){
        let i = 0
        let soChan = []
        let soLe = []
        while(i < DoDaiMang){
            if (arr[i] % 2 == 0){
                soChan[i] = arr[i] 
            }
    
            if (arr[i] % 2 !== 0){
                soLe[i] = arr[i] 
            }
            i++
        }
        console.log("So chan",soChan)
        console.log("So le",soLe)
}
