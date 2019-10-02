<div class="container mt-3">

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"><?= $data['nama']; ?></h5>
            <h6 class="card-subtitle mb-2 text-muted"><?= $data['nrp']; ?></h6>
            <p class="card-text"><?= $data['email']; ?></p>
            <p class="card-text"><?= $data['jrurusan']; ?></p>
            <a href="<?= BASEURL; ?>/mahasiswa" class="card-link">Card link</a>

        </div>
    </div>
</div>