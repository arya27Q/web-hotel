<?php
include 'config.php'; 
header('Content-Type: application/json'); 


$data = json_decode(file_get_contents('php://input'), true);

$nama = $data['nama'] ?? '';
$email = $data['email'] ?? '';
$pesan = $data['pesan'] ?? '';

if (empty($nama) || empty($email) || empty($pesan)) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Semua field harus diisi.'
    ]);
    exit;
}


try {
    $sql = "INSERT INTO pesan_kontak (nama_lengkap, email, pesan) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nama, $email, $pesan);
    
    if ($stmt->execute()) {
        
        echo json_encode([
            'status' => 'success',
            'message' => 'Pesan Anda telah terkirim!'
        ]);
    } else {
      
        throw new Exception('Gagal menyimpan ke database.');
    }
    
    $stmt->close();
    $conn->close();

} catch (Exception $e) {
    echo json_encode([
        'status' => 'error',
        'message' => 'Terjadi kesalahan: ' . $e->getMessage()
    ]);
}
?>