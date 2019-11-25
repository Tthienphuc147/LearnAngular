export class UserPackage {
  id: number;
  tennguoidung: string;
  email: string;
  website: string;
  sdt: string;
  taikhoan: string;
  password: string;
  constructor(
    id,
    tennguoidung,
    email,
    website,
    sdt,
    taikhoan,
    password
  ) {
    this.id = id;
   this.tennguoidung=tennguoidung;
   this.email=email;
   this.website=website;
   this.sdt=sdt;
   this.taikhoan=taikhoan;
   this.password=password;
  }
}
