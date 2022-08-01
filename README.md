# Simple Payment Gateway Implementation In Bot Telegram

## Apa Ini?

Ini adalah project simple simple an, projek ini adalah implementasi payment gateway menggunakan bot telegram dan midtrans

## Mengapa Ini Dibuat?

Projek ini berdasarkan problem yang ada di kehidupan organisasi saya, yaitu taekwondo(Club Saya), di setiap latihan kita mempunyai biaya kas, namun ada saja orang yang tidak membayar dengan alasan uang ketinggalan hanya mempunyai e-wallet, namun tanpa adanya bot ini maka pembayar harus mengetik nomer/rekening yang akan di transfer dan bla bla, sangat menguras waktu, maka dari itu bot ini mempermudah pembayaran uang kas/bulanan, cukup ketik command /kas atau /bulanan maka bot akan mengirim link pembayaran midtrans dan itu jauh lebih mudah dan cepat dibandingkan manual.

## Goal Dari Project Ini?

Bisa mempermudah dan mempercepat anggota untuk melakukan pembayaran uang kas/bulanan.

## Bagaimana Kami Dapat Notifikasi Atau Bukti Pembayaran Jika Berhasil Atau Link Expired?

Midtrans akan mengirimkan notifikasi jika pembayaran berhasil atau jika link expired ke server kami, dan akan dikonsumsi oleh bot dan invoice chat akan dikirimkan ke pengguna yang dituju.

## Bagaimana Bot Tau Pembayaran Itu Punya Kita Atau Bukan?

Midtrans mempunyai kolom orderid, banyak cara untuk masalah ini, solusi yang saya buat adalah membuat orderid menjadi format nama-userid-unikid lalu akan di split by "-", dan akan mengambil index yang berisi userid.

## Fitur Yang Akan Datang?

-  Rate Limit 3 Command / Menit
-  Subs area
-  Fun fact/Random Fact/Quotes (Random Quote) untuk subs user
-  Diskon :D

### Mau Kontribusi? Boleh Aja :D

## Dibangun Menggunakan

-  [Javascript](https://developers.google.com/apps-script/reference/language/javascript)
-  [NodeJs](https://nodejs.org/en/)
-  [Midtrans](https://midtrans.com/)
-  [Telegram](https://telegram.org/)
-  [Telegraf Framework](https://telegraf.js.org/)
-  [BotFather](https://t.me/botfather)
-  [Express](https://expressjs.com/)

## _PLEASE GIVE ME A STAR ON GITHUB_
