class ShowFood {
    constructor(arr) {
        this.monAn = arr;
    }

    showMon() {
        let table = '';
        for (let i = 0; i < this.monAn.length; i++) {

            table += '<tr>';
            table += '<td>';
            table += this.monAn[i].id;
            table += '</td>';

            table += '<td>';
            table += this.monAn[i].ten;
            table += '</td>';

            table += '<td>';
            table += this.monAn[i].mien;
            table += '</td>';

            table += '<td>';
            table += this.monAn[i].address;
            table += '</td>';

            table += '<td>';
            table += this.monAn[i].sdt;
            table += '</td>';

            table += '<td>';
            table += '<img class="baoky" width="250px" height="200px" src="' + this.monAn[i].img + '">';
            table += '</td>';

            table += '<td>' +
                '<button style="background-color: #c04343" type="button" onclick="deleteFood(' + i + ')">Delete</button> ';
            table += '</td>';

            table += '<td>' +
                '<button class="meme" style="background-color: orange"  type="button" onclick="editFood(' + i + ')">Edit</button> ' +
                '</td>';
            table += '</tr>';
        }
        document.getElementById('show-food').innerHTML = table;
    }

    delete(id) {
        this.monAn.splice(id, 1);
    }


    findFood (id) {
        return this.monAn[id];
    }

    addMon(food) {
        this.monAn.push(food);
    }

    edit(food, id, ten, mien, address, sdt, img) {
        food.edit(id, ten, mien, address, sdt, img);
    }

    clear() {
        let id = document.getElementById('id').value = '';
        let ten = document.getElementById('ten').value = '';
        let mien = document.getElementById('mien').value = '';
        let address = document.getElementById('address').value = '';
        let sdt = document.getElementById('sdt').value = '';
        let img = document.getElementById('img').value = '';
    }
    check() {

        let id = document.getElementById('id').value;
        if (id.length >= 4) {
            alert('ID phải là số và KHÔNG được quá 1000');
        }
        let ten = document.getElementById('ten').value;
        if (ten.length >= 30) {
            alert('TÊN Không được vượt quá 30 kí tự');
        }
        let mien = document.getElementById('mien').value;
        if (mien.length >= 15) {
            alert(' MIỀN Không được vượt quá 15 kí tự');
        }
        let address = document.getElementById('address').value;
        if (address.length >= 70) {
            alert('ADDRESS Không được vượt quá 80 kí tự');
        }
        let sdt = document.getElementById('sdt').value;
        if (sdt.length >= 11) {
            alert('SĐT Không được vượt quá 11 kí tự');
        }
    }

}