#!/usr/bin/bash


pkg upgrade -y && pkg update -y
pkg install imagemagick -y
pkg install nodejs -y
pkg install ffmpeg -y
cd /sdcard 
cp -r @SELF-BOT /$HOME 
cd @SELF-BOT 
bash install.sh
clear
echo "[*] Server By Yuki Azura"
echo "[*] Ketik $ npm start Untuk Menjalankan"
cd
cd
cd
cd @SELF-BOT
sleep 300
npm imagemagick
npm i @adiwajshing/baileys@latest
npm start
