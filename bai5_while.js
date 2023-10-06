let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let DoDaiMang = arr.length
function cau1a()
{
    let i = 0
    while(i < DoDaiMang){
        console.log("Vi tri",i,"co phan tu",arr[i])
        i++
    }
}

function cau1b(){
    let i = 0
    let Tong = 0
    while (i<DoDaiMang) {
        Tong += arr[i]
        i++
    }
    console.log(Tong)
}
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
function cau1d(){
    let i = 0
    let Tong = 0
    while (i<DoDaiMang) {
        Tong += arr[i]
        i++
    }
    console.log("Trung binh cong:",Tong/DoDaiMang)
}
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
function cau1h(){
    let i = 0
    // Cát Đoan quá khứ xinn giải thích
    //arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
    // Ví dụ cho i = 0 while i < DoDaiMang (0 < 12) chạy
    // Cho (j = i + 1) => arr[i] và [j] nắm kế bên
    //  While j < DoDaiMang
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
cau1h()
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
