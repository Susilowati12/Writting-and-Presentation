# Writing and Presentation Test Week 4

## JavaScript Intermediete
 - Asynchronus Await
   <div align="justify">adalah salah satu fitur baru dari javascript yang digunakan untuk menangani hasil dari sebuah Promise. Await berfungsi untuk menunda sebuah kode dijalankan sampai proses asynchronous berhasil.

  - HTTP Request fetch()
    <div align="justify">Fetch adalah native web API untuk melakukan HTTP calls dari external network.

  - Contoh function untuk mengambil data dari API menggunakan fetch(), Dengan Async Await

     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     ![img 1](Gambar/gambar1.PNG)

## Responsive Web Design
   - Responsive Web Desin yaitu suatu tampilan website yang dapat menyesuikan dengan perangkat yang digunakan

   - Chrome Dev Tools merupakan tools pada google chrome yang digunakan sebagai tools Responsive Web Design

   - Shortcut untuk mengakses Chrome Dev Tools di windows yaitu CTRL + SHIFT + J

   - Contoh tampilan hasil shortcut:

   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   ![img 2](Gambar/gambar2.PNG)

   - Dalam menggunakan Responsive Web Design pada bagian HTML perlu ditambahkan viewport pada bagian head agar tampilan website dapat menyesuaikan dengan berbagai device

   ```
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="./script.js" defer></script>
   </head>
   <body>
    
   </body>
   </html>
   ```

   - Relative CSS Unit
     
     - %: Ukurannya relatif terhadap parent element
     - em: Ukurannya relatif terhadap font-size dari elemen saat ini
     - rem: Ukurannya relatif terhadap font-size root elemen (<html>). "rem" = "root em"
     - ch: Ukurannya mengikuti jumlah karakter (1 karakter sama dengan lebar dari karakter 0/nol font yang sedang aktif)
     - vh: Ukurannya relatif terhadap tinggi viewport (ukuran jendela tau aplikasi), 1vh = 1/100 dari tinggi viewport
     - vw: Ukurannya relatif terhadap lebar dari viewport. 1vw = 1/100 lebar viewport
     - vmin: Ukurannya relatif terhadap ukuran viewport yang lebih kecil (misalnya diorientasi portrait, lebar akan lebih kecil daripada tinggi). 1vmin = 1/100 dari ukuran viewport yang lebih kecil.
     - vmax: Sama dengan vmin, dia akan melihat ukuran viewport yang lebih besar
     - ex: Ukurannya relatif terhadap tinggi dari karakter "x" kecil font yang sedang aktif.

   - Untuk membuat suatu gambar pada halaman website agar menjadi responsive dapat dilakukan dengan menambahkan atribut Max - width = 100% pada bagian gambar
   
   - Media Query
     adalah salah satu cara untuk mengatur suatu website agar responsive di berbagai device.Perintah umum media query yang sering digunakan adalah min-width dan max-width.

     ```
     body{
       background-color: black;
     }
     @media(max-width:720px){
        body{
           background-color: aqua;
        }
      }

    ```
    
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    ![img 3](Gambar/gambar3.PNG)


  








   


