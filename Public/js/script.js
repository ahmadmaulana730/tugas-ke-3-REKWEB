$(function () {

    $('.tombolTambahData').on('click', function () {
        $('#formModalLabel').html('Tambah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Tambah data');
    });
    $('.tampilModalUpdate').on('click', function () {
        $('#formModalLabel').html('Update Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Update data');
        $('.modal-body form').attr('action', 'http://localhost/MVC/public/mahasiswa/ubah');

        const id = $(this).data('id');


        $.ajax({
            url: 'http://localhost/MVC/Public/mahasiswa/getubah',
            data: { id: id },
            method: 'post',
            dataType: 'json',
            success: function (data) {

                $('#nama').val(data.nama);
                $('#nrp').val(data.nrp);
                $('#email').val(data.email);
                $('#jurusan').val(data.jurusan);
                $('#id').val(data.id);
            }

        });
    });
});
