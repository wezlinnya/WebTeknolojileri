<?php
$username = $_POST['username'];
$password = $_POST['password'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Onaylandı</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
  <div class="container mt-5">
    <h1>Form Gönderildi</h1>
    <div class="alert alert-success">
      <p>Giriş başarılı!</p>
      <p>Formdaki bilgileriniz:</p>
      <ul>
        <li><strong>Kullanıcı adı:</strong> <?php echo $username; ?></li>
        <li><strong>Şifre:</strong> <?php echo $password; ?></li>
        </ul>
    </div>
  </div>
</body>
</html>