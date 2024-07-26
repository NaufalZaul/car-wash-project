# car-wash-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Pengecekan alamat

- User dapat mengisi inputan dengan format yang sudah tertera pada bawah input, yaitu
  Jalan (nama jalan) (rt/rw/gang), Madiun, Jawa Timur
- Sistem akan menyeleksi inputan menjadi bentuk array dengan isian baru ['nama alamat', 'nama kabupaten/kota', 'nama provinsi']
- Pertama akan mengecek isian lengkap dari array dengan mencari koordinat pada maps
- Ketika ditemukan maka akan mengembalikan nilai true, apabila mengembalikan nilai false, maka akan mencari index 1 dari array. Index 1 digunakan untuk menyesuaikan apakah kota/kabupaten berada di Madiun
- Lalu sistem akan mengebalikan nilai true / false
- Tombol awal bernilai 'cek alamat', ketika mengembalikan nilai true, maka akan ganti buttonnya menjadi 'submit'
