<?php 

$user = 'root';
$pass = '';
$host = 'localhost';
$db = 'test';
$banc = 'users';

if (isset($_POST['dado'])) {

	try {


		$name = $_POST['dado'];

		$sql_consult = "SELECT user_id, user_name, user_email, user_pass, user_office FROM $banc WHERE user_name like '$name%'";
		$connect = new PDO("mysql:host=localhost;dbname=$db", $user, $pass);
		$connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		$stmt = $connect->query($sql_consult);
		$rows = $stmt->fetch(PDO::FETCH_ASSOC);
		
		echo json_encode($rows);


	} catch (PDOException $err) {
		echo "<pre>";
		echo "Erro: ". $err->getMessage();
	// var_dump($err);
	}
}