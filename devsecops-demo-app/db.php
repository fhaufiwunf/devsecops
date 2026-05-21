<?php
$host = getenv("DB_HOST") ?: "mysql";
$user = getenv("DB_USER") ?: "root";
$pass = getenv("DB_PASSWORD") ?: "root";
$db   = getenv("DB_NAME") ?: "demo_db";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!$conn) {
    die("Database connection failed: " . mysqli_connect_error());
}
?>
