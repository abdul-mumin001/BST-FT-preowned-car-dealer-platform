function add() {
  // var age = document.age.value;
  // var odometer = document.odometer.value;
  // var price = document.price.value
  let year = document.getElementById("years").value;
  let odo = document.getElementById("odometers").value;
  let amount = document.getElementById("prices").value;
  var rate = 10;
  let amount_left = amount;
  let annual_dep = 0;
  let odo_rate = 0;

  result = 0;
  

  for (let i = 0; i <= odo; i++) {
    if (i <= 10000) {
      odo_rate = +0.1;
    } else if (10001 < i <= 20000) {
      odo_rate = +0.2;
    } else if (20001 < i <= 30000) {
      rate = rate + 0.3;
    } else if (30001 < i <= 40000) {
      rate = rate + 0.4;
    } else if (40001 < i <= 50000) {
      rate = rate + 0.5;
    } else if (50001 < i <= 60000) {
      rate = rate + 0.6;
    } else if (60001 < i <= 70000) {
      rate = rate + 0.7;
    } else if (70001 < i <= 80000) {
      rate = rate + 0.8;
    } else if (80001 < i <= 90000) {
      rate = rate + 0.9;
    } else if (90001 < i <= 100000) {
      rate = rate + 1;
    }
  }

  for (let i = 1; i <= year; i++) {
    if (i == 1) {
      rate = odo_rate + 10;
    } else if (i == 2) {
      rate = odo_rate + 19;
    } else if (i == 3) {
      rate = odo_rate + 28;
    } else if (i == 4) {
      rate = odo_rate + 36;
    } else if (i == 5) {
      rate = odo_rate + 44;
    } else if (i == 6) {
      rate = odo_rate + 51;
    } else if (i == 7) {
      rate = odo_rate + 58;
    } else if (i == 8) {
      rate = odo_rate + 64;
    } else if (i == 9) {
      rate = odo_rate + 70;
    } else if (i == 10) {
      rate = odo_rate + 75;
    }
    annual_dep = (rate * amount) / 100;
    amount_left = amount - annual_dep;
    document.getElementById('results').innerHTML = 
  "Current Value = " + amount_left
    // console.log(
    //   "Year :" +
    //     (i + 1) +
    //     "Annual depreciation = " +
    //     annual_dep +
    //     "Amount left = " +
    //     amount_left
    // );
  }
}

add();
