<?php

class About
{

    public function index($nama = 'Pulan', $pekerjaan = 'Mahasiswa')
    {
        echo "Halo , Nama saya adalah $nama,saya adalah $pekerjaan";
    }
    public function page()
    {
        echo 'About/page';
    }
}
