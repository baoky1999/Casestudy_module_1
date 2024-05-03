document.getElementById("item1").addEventListener("click", function () {
    // Lấy vị trí (offset) của phần tử mục tiêu
    let targetElement = document.getElementById("vietnam");
    let targetOffset = targetElement.offsetTop;
    window.scrollTo({
        top: targetOffset,
        behavior: "smooth" // Cuộn mượt
    });
});
document.getElementById("item2").addEventListener("click", function () {
    let targetElement = document.getElementById("mienTrung");
    let targetOffset = targetElement.offsetTop;
    window.scrollTo({
        top: targetOffset,
        behavior: "smooth" // Cuộn mượt
    });
});
document.getElementById("item3").addEventListener("click", function () {
    let targetElement = document.getElementById("review");
    let targetOffset = targetElement.offsetTop;
    window.scrollTo({
        top: targetOffset,
        behavior: "smooth" // Cuộn mượt
    });
});

document.getElementById('checkbox').addEventListener('click', function() {
    let item = document.querySelector('.item');
    // Khi checkbox được chọn
    if (this.checked) {
        // Hiển thị phần tử .item bằng cách di chuyển về vị trí right: 0;
        item.style.right = '0';
        setTimeout(function() {
            document.getElementById('checkbox').checked = true;
            item.style.right = '-100%';
        }, 2000);
    } else {
        item.style.right = '0';
        setTimeout(function() {
            document.getElementById('checkbox').checked = false;
            item.style.right = '-100%';
        }, 2000);
    }
});
let food = new Food(
    '01',
    'Bún hến cô Sáu',
    'Miền Trung',
    'Số 10 Nguyễn Huệ - TP Huế',
    '0357323545',
    'https://mia.vn/media/uploads/blog-du-lich/ai-ra-xu-hue-thi-ghe-ngay-cac-quan-bun-hen-ngon-noi-tieng-mot-phuong-5-1637832729.jpg')
let food1 = new Food(
    '02',
    'Bánh bèo chú Tư',
    'Miền Trung',
    'Số 130 Trần Phú - TP Huế',
    '0339198966',
    'https://anh.24h.com.vn/upload/3-2017/images/2017-08-18/1503056884-150305670235634-hue6.jpg')
let food2 = new Food(
    '03',
    'Bánh canh cá lóc',
    'Miền Trung',
    'Số 265 Nguyễn Huệ - TP Huế',
    '0987678876',
    'https://static.vinwonders.com/production/banh-canh-ca-loc-hue-banner.jpg')
let food3 = new Food(
    '04',
    'Phở bò Hà Nội',
    'Miền Bắc',
    'Số 61 Đinh Tiên Hoàng, Quận Hoàn Kiếm, Hà Nội',
    '0987574885',
    'https://mia.vn/media/uploads/blog-du-lich/top-19-quan-pho-ha-noi-ngon-nuc-tieng-an-la-ghien-phan-1-01-1639125005.jpg')
let food4 = new Food(
    '05',
    'Cơm tấm sườn',
    'Miền Nam',
    '84 Đặng Văn Ngữ, phường 10, Quận Phú Nhuận',
    '0398786339',
    'https://ik.imagekit.io/tvlk/blog/2017/06/mon-an-ngon-sai-gon-com-tam.jpg?tr=dpr-2,w-675'
)
let food5 = new Food(
    '06',
    'Mì Quảng',
    'Miền Trung',
    '551 Trần Cao Vân, TP. Tam Kỳ, Quảng Nam',
    '0989778443',
    'https://static.vinwonders.com/2022/12/mi-quang-quang-nam-5.jpg'
)
let arr = [food, food1, food2,food3,food4,food5 ];
let show = new ShowFood(arr);
show.showMon();

function deleteFood(id) {
    show.delete(id);
    show.showMon();
}

let foodId = 0;
function editFood(id) {
    let food = show.findFood(id);
    document.getElementById('id').value = food.id;
    document.getElementById('ten').value = food.ten;
    document.getElementById('mien').value = food.mien;
    document.getElementById('address').value = food.address;
    document.getElementById('sdt').value = food.sdt;
    document.getElementById('img').value = food.img;
    foodId = id;
    let element = document.getElementById("review");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function saveFood() {
    console.log(foodId);
    let id = document.getElementById('id').value;
    let ten = document.getElementById('ten').value;
    let mien = document.getElementById('mien').value;
    let address = document.getElementById('address').value;
    let sdt = document.getElementById('sdt').value;
    let img = document.getElementById('img').value;
    let food = show.findFood(foodId);
    show.edit(food, id, ten, mien, address, sdt, img);
    show.check();
    show.showMon();
    show.clear();
}
function addFood() {
    let id = document.getElementById('id').value;
    let ten = document.getElementById('ten').value;
    let mien = document.getElementById('mien').value;
    let address = document.getElementById('address').value;
    let sdt = document.getElementById('sdt').value;
    let img = document.getElementById('img').value;

    let food = new Food(id, ten, mien, address, sdt, img);
    show.check();
    show.addMon(food);
    show.showMon();
    show.clear();
}


