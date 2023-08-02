const root = document.querySelector(':root');
const text = getComputedStyle(root).getPropertyValue('--header');
const accent = getComputedStyle(root).getPropertyValue('--accent');
const background = getComputedStyle(root).getPropertyValue('--background-3');

export const data = {
    labels: ['General', 'Entertainment', 'Health', 'School'],
    datasets: [
        {
            backgroundColor: [background],
            hoverBackgroundColor: [accent],
            data: [40, 20, 80, 10]
        }
    ]
}

export const options = {
    responsive: false,
    maintainAspectRatio: false,

    plugins: {
        title: {
            display: true,
            text: 'Snapshot Breakdown',
            color: text,
            font: {
                size: '20'
            }
        },
        legend: {
            display: false,
        },
        tooltip: {
           displayColors: false,
        }
    },
}
