class Food {
    constructor(id, ten, mien, address, sdt, img) {
        this.id = id
        this.ten = ten;
        this.mien = mien;
        this.address = address;
        this.sdt = sdt;
        this.img = img;
    }

    getId() {
        return this.id;
    }

    getTen() {
        return this.ten;
    }

    getMien() {
        return this.mien;
    }

    getAddress() {
        return this.address;
    }

    getSdt() {
        return this.sdt;
    }

    getImg() {
        return this.img;
    }

    setId(id) {
        this.id = id;
    }

    setTen(ten) {
        this.ten = ten;
    }

    setMien(mien) {
        this.mien = mien;
    }

    setAddress(address) {
        this.address = address;
    }

    setSdt(sdt) {
        this.sdt = sdt;
    }

    setImg(img) {
        this.img = img;
    }

    edit(id, ten, mien, address, sdt, img) {
        this.id = id;
        this.ten = ten;
        this.mien = mien;
        this.address = address;
        this.sdt = sdt;
        this.img = img;
    }
}
