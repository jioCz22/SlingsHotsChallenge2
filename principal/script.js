document.addEventListener('DOMContentLoaded', () => {
    // ScrollReveal
    ScrollReveal().reveal('.reveal', { distance: '50px', duration: 1000, interval: 200 });

    // Nueva Gráfica: Secuestro de Carbono
    const ctx = document.getElementById('impactChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6'],
            datasets: [{
                label: 'CO2 Secuestrado (mg)',
                data: [10, 45, 120, 250, 400, 600],
                borderColor: '#52b788',
                backgroundColor: 'rgba(82, 183, 136, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#fff' } } },
            scales: {
                y: { grid: { color: '#2d6a4f' }, ticks: { color: '#b7e4c7' } },
                x: { grid: { display: false }, ticks: { color: '#b7e4c7' } }
            }
        }
    });

    // Contador de CO2 Animado
    let co2 = 0;
    const updateCO2 = () => {
        if(co2 < 450) {
            co2 += 5;
            document.getElementById('co2-counter').innerText = co2 + "g";
            setTimeout(updateCO2, 20);
        }
    };
    updateCO2();
});