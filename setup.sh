#!/bin/bash
sudo apt update -y
sudo apt install apache2 -y
echo "<h1>Selamat Datang di LKS Cloud Computing Provinsi Banten 2025</h1>
<p>Nama: [Nama Peserta]</p>
<p>Sekolah: [Nama Sekolah]</p>" | sudo tee /var/www/html/index.html
sudo systemctl enable apache2
sudo systemctl start apache2
