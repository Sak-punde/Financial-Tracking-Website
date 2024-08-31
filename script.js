// Sample expense data
const data = {
    labels: ['Rent', 'Utilities', 'Groceries', 'Transportation', 'Entertainment'],
    datasets: [{
        label: 'Expenses',
        data: [1200, 300, 250, 150, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF'
        ],
        hoverOffset: 4
    }]
};

// Pie Chart
const ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: $${tooltipItem.raw}`;
                    }
                }
            }
        }
    }
});

// Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: data.labels,
        datasets: [{
            label: 'Expenses',
            data: data.datasets[0].data,
            backgroundColor: '#4BC0C0'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: $${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalElement = document.getElementById('total');

    let total = 0;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (description && !isNaN(amount) && amount > 0) {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = `${description}: $${amount.toFixed(2)}`;
            expenseList.appendChild(listItem);

            // Update total
            total += amount;
            totalElement.textContent = total.toFixed(2);

            // Clear the form fields
            form.reset();
        } else {
            alert('Please provide valid description and amount.');
        }
    });
});

