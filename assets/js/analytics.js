const customizeRangeButton = document.querySelector('#customizeRange');
const customizeRangeForm = document.querySelector('#customizeRangeForm');
customizeRangeButton.addEventListener('click', function (e) {
  const thisButton = e.target;
  console.log(thisButton);
  let isEnabled = customizeRangeForm.classList.contains('hidden');
  if (!isEnabled) { 
    customizeRangeForm.classList.add('hidden');
    thisButton.classList.remove('red');
  } else {
    customizeRangeForm.classList.remove('hidden');
    thisButton.classList.add('red');
  }
});

// Total Votes
const tabItems = document.querySelectorAll('.custom-tab button');
const totalVotes = document.getElementById('totalVotes');
let totalVotesGraph__labels = [];
let totalVotesGraph__dataSet = [];
const totalVotesGraph = new Chart(totalVotes, {
  type: 'bar',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: totalVotesGraph__labels,
    datasets: [
      {
        label: ['# of Votes'],
        data: totalVotesGraph__dataSet,
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const graphFilterHandler = (data) => {
  totalVotesGraph__labels = [];
  totalVotesGraph__dataSet = [];
  if (Number(data) === 7) {
    totalVotesGraph__labels = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];    
  } else if (Number(data) === 30) {
    for (let index = 0; index < data; index++) {
      totalVotesGraph__labels.push(`Day ${index + 1}`);
    }
  } else if (Number(data) === 24) {
    for (let index = 0; index < data; index++) {
      totalVotesGraph__labels.push(index + 1);
    }
  } else {
    totalVotesGraph__labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }
  for (let index = 0; index < data; index++) {
    totalVotesGraph__dataSet.push(Math.floor(Math.random() * data) + 1);
  }

  totalVotesGraph.data.labels = totalVotesGraph__labels;
  totalVotesGraph.data.datasets[0].data = totalVotesGraph__dataSet;
  totalVotesGraph.update();
}
graphFilterHandler(12)

const tabHandler = (event) => {
  const thisItem = event.target;
  const dataType = thisItem.getAttribute('data-set');
  tabItems.forEach(item => item.classList.remove('active'));
  thisItem.classList.add('active');
  graphFilterHandler(dataType);
};
tabItems.forEach(button => {
  button.addEventListener('click', (element) => {
    tabHandler(element)
  })
})

// Total Products
const storeProducts = document.getElementById('storeProducts');
const categoryProducts = document.getElementById('categoryProducts');

new Chart(storeProducts, {
  type: 'pie',
  data: {
    labels: ['Germany', 'India', 'Ireland'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['#4B93CF', '#B6B8C3', '#D8D9DF'],
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 10
        }
      }
    },
  }
});
new Chart(categoryProducts, {
  type: 'pie',
  data: {
    labels: ['Germany', 'India', 'Ireland'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['#4B93CF', '#B6B8C3', '#D8D9DF'],
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 10
        }
      }
    },
  }
});


// All Products
const product1Graph = document.getElementById('product1Graph');
const product1Pie = document.getElementById('product1Pie');
const product2Graph = document.getElementById('product2Graph');
const product2Pie = document.getElementById('product2Pie');
new Chart(product1Graph, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: ['# of Votes'],
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(product1Pie, {
  type: 'pie',
  data: {
    labels: ['Germany', 'India', 'Ireland'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['#4B93CF', '#B6B8C3', '#D8D9DF'],
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 10
        }
      }
    },
  }
});

new Chart(product2Graph, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: ['# of Votes'],
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
new Chart(product2Pie, {
  type: 'pie',
  data: {
    labels: ['Germany', 'India', 'Ireland'],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['#4B93CF', '#B6B8C3', '#D8D9DF'],
      borderWidth: 0
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 10
        }
      }
    },
  }
});