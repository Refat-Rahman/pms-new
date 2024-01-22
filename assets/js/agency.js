function getData() {
  var startDate = document.getElementById("start-date").value;
  var endDate = document.getElementById("end-date").value;

  // Sample data
  var data = [
  { agency: 'NTMC', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-01',  value: 100 },
  { agency: 'RAB', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-02',  value: 200 },
  { agency: 'ATU', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-03',  value: 300 },
  { agency: 'SB', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-03',  value: 50 },
  { agency: 'PBI', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-04',  value: 800 },
  { agency: 'DGFI', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-05',  value: 25 },
  { agency: 'NSI', serial: 1, image_url: 'https://via.placeholder.com/50x50.png?text=Product+A', bangla_name: 'আশিক আমিন', english_name: 'Ashik Amin', phone_number: '880177701716', nid: '1234567890', passport: 'AB0147852',created_by: 'Arif', created_date: '2022-03-05',  value: 400 },

  ];

  // Filter data by date range
  var filteredData = data.filter(function (item) {
    return item.created_date >= startDate && item.created_date <= endDate;
  });

  displayData(filteredData);
  displayChart(filteredData);
}

function displayData(data) {
  // Clear existing data
  var tbody = document.getElementById("product-data");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // Populate table with new data
  for (var i = 0; i < data.length; i++) {
    var tr = document.createElement("tr");

    var tdAgency = document.createElement("td");
    tdAgency.textContent = data[i].agency;
    tr.appendChild(tdAgency);

    var tdSerial = document.createElement("td");
    tdSerial.textContent = data[i].serial;
    tr.appendChild(tdSerial);

    var tdImage = document.createElement("td");
    var img = document.createElement("img");
    img.src = data[i].image_url;
    tdImage.appendChild(img);
    tr.appendChild(tdImage);

    var tdBanglaName = document.createElement("td");
    tdBanglaName.textContent = data[i].bangla_name;
    tr.appendChild(tdBanglaName);

    var tdEnglishName = document.createElement("td");
    tdEnglishName.textContent = data[i].english_name;
    tr.appendChild(tdEnglishName);

    var tdPhoneNumber = document.createElement("td");
    tdPhoneNumber.textContent = data[i].phone_number;
    tr.appendChild(tdPhoneNumber);

    var tdPhoneNID = document.createElement("td");
    tdPhoneNID.textContent = data[i].nid;
    tr.appendChild(tdPhoneNID);

    var tdPassport = document.createElement("td");
    tdPassport.textContent = data[i].passport;
    tr.appendChild(tdPassport);

    var tdCreatedBy = document.createElement("td");
    tdCreatedBy.textContent = data[i].created_by;
    tr.appendChild(tdCreatedBy);

    var tdCreatedDate = document.createElement("td");
    tdCreatedDate.textContent = data[i].created_date;
    tr.appendChild(tdCreatedDate);


    tbody.appendChild(tr);
  }
}

function displayChart(data) {
  // Clear existing chart
  var ctx = document.getElementById('product-chart').getContext('2d');
  if (window.productChart) {
    window.productChart.destroy();
  }

  // Create new chart
  var labels = [];
  var values = [];
  var backgroundColors = [];
  for (var i = 0; i < data.length; i++) {
    labels.push(data[i].agency);
    values.push(data[i].value);
    backgroundColors.push(getRandomColor()); // Generate a random color for each bar
  }
  var chartData = {
    labels: labels,
    datasets: [{
      label: 'Agency Name',
      backgroundColor: backgroundColors,
      borderColor: 'rgb(54, 162, 235)',
      data: values
    }]
  };
  window.productChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Generate a random color in hex format
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
