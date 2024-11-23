document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const height = parseFloat(document.getElementById('height').value) / 100;
  const weight = parseFloat(document.getElementById('weight').value);
  if (height && weight) {
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';

    if (bmi < 18.5) {
      category = 'Kekurangan Berat Badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Berat Badan Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Kelebihan Berat Badan';
    } else {
      category = 'Obesitas';
    }

    Swal.fire({
      title: 'Hasil BMI Anda',
      text: `BMI Anda adalah ${bmi} (${category})`,
      icon: 'info',
      confirmButtonText: 'OK'
    });
    document.getElementById('bmiResult').textContent = `Hasil BMI: ${bmi} (${category})`;
  } else {
    Swal.fire({
      title: 'Kesalahan',
      text: 'Masukkan tinggi dan berat badan yang valid!',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
});