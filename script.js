$("#btn_hasil").click(function(){
	var angka1 = parseInt($("#angka1").val());//parse:merubah string ke integer
	var angka2 = parseInt($("#angka2").val());
	var operator = $("#operator").val();

	if (operator=="+") {
		var hasil = angka1+angka2;
	}
	if (operator=="-") {
		var hasil = angka1-angka2;
	}
	if (operator=="*") {
		var hasil = angka1*angka2;
	}
	if (operator=="/") {
		var hasil = angka1/angka2;
	}

	// var hasil = angka1+angka2;
	$("#hasil").val(hasil);
	

});