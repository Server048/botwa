#!/usr/bin/bash


pkg upgrade && pkg update 
pkg install imagemagick 
pkg install nodejs
pkg install bash 
pkg install ffmpeg
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
