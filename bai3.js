console.log("A")
let a = 10
let b = 5
console.log("Tong",a+b)
console.log("Hieu",a-b)
console.log("Tich",a*b)
console.log("Thuong",a/b)
//b
console.log("B")
let c = 10
let d = 5
let tbc = (c + d)/2
console.log("Trung binh cong",tbc)
console.clear()
console.log("Xoa line 12")
//c
console.log("C")
let x = 3
let y = 4
let z = 6
console.log("1c/",x**2 + 2*x + 1)
console.log("2c/",(x**3) - (3*x*y) - (5*y) + (3*(y**2)))
console.log("3c/",(x*y)**2 - 2*x**2*y + 13*y)
console.log("4c/",4*x**3 + 3*x*y + y**2 - (2*x**2 - 3*y))
console.log("5c/",((5*(x**2)) / (4*x*y)) + y**2)
console.log("6c/",(x**2) - ((2*z*x*y) / (y**2)) + (5*x) - 2*(y**2) + 4*x*(z**3) + (z**3))
//d
console.log("D")
let duongkinh = 5
const pi = 3.14
let cv_ht = 2*pi*(duongkinh/2)
let dt_ht = pi*((duongkinh/2)**2)
console.log("Chu vi:",cv_ht)
console.log("Dien tich",dt_ht)
//e
console.log("E")
let cd = 15
let cr = 10
let cv_hcn = (cd + cr)*2
let dt_hcn = cd * cr
console.log("Chu vi:",cv_hcn)
console.log("Dien tich",dt_hcn)
//f
console.log("F")
let s = 120
let t = 130 //min
let vt = s/(t/60)
console.log("Van toc",vt)
//g
console.log("G")
let vt_g = 60
let t_g = 150 //min
let s_g = vt_g * (t_g/60)
console.log("Quang duong",s_g)
//h
console.log("H")
let vt_h = 15.2
let t_h = 3
let s_h = vt_h * t_h
console.log("Quang duong",s_h)
//i
console.log("I")
let vt_i = 42 //km/h
//8h20 -> 11h = 2h40
let t_i = 2 + (40/60)
let s_i = vt_i * t_i
console.log("Quang duong",s_i)
//j
console.log("J")
let cr_j = 5
let cc_j = 6

let cd_j = 8
let vsmall = (cd_j*cr_j)*cc_j
let vbig = (cd_j*cr_j)*(cc_j*2)
console.log("The tich",vsmall+vbig)
