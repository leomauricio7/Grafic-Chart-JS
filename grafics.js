$(function(){

    let label = ['Escola 1', 'Escola 2', 'Escola 3', 'Escola 4'];

    grafic("line",label, [{
            label: 'Tota de Aunos - 2018',
            borderWidth: 6,
            backgroundColor: 'transparent',//transparent
            borderColor: 'rgba(77, 166, 253, 0.85)',
            data: [1000, 800, 788, 300]
        },
        {
            label: 'Tota de Aunos - 2019',
            borderWidth: 6,
            backgroundColor: 'transparent',
            borderColor: 'rgba(6, 204, 6, 0.85)',
            data: [800, 400, 688, 700]
        }], "Grafic em Line","lineAlunosEscola",);
    
    grafic("bar",label,[{
            label: 'Tota de Aunos - 2018',
            borderWidth: 6,
            backgroundColor: 'rgb(77, 166, 253)',//transparent
            borderColor: 'rgba(77, 166, 253, 0.85)',
            data: [1000, 800, 788, 300]
        },
        {
            label: 'Tota de Aunos - 2019',
            borderWidth: 6,
            backgroundColor: 'rgb(6, 204, 6)',
            borderColor: 'rgba(6, 204, 6, 0.85)',
            data: [800, 400, 688, 700]
        }], "Grafic em Bar","barAlunosEscola");
    
    grafic("doughnut",label, [{
        label: label, 
        data: [10,20,30,40],
        backgroundColor: ['#ff6384','#36a2eb','#cc65fe','#ffce56']
    }], "Grafic em Doughnut","doughnutAlunosEscola");
   
    grafic("pie",label, [{
        label: label, 
        data: [10,20,30,40],
        backgroundColor: ['#ff6384','#36a2eb','#cc65fe','#ffce56']
    }], "Grafic em Pie","pieAlunosEscola");

    grafic("polarArea",label, [{
        label: label, 
        data: [10,20,30,40],
        backgroundColor: ['#ff6384','#36a2eb','#cc65fe','#ffce56']
    }], "Grafic em PolarArea","polarAreaAlunosEscola");

    function grafic(type,label,data,title,div){
        var ctx = document.getElementById(div).getContext('2d');
        var chart = new Chart(ctx, {
            type: type,
            data: { labels: label, datasets: data},
            options: {
                title: { display: true, fontSize: 20, text: title },
                tooltips: { mode: 'point' },
                layout: { padding: { left: 50, right: 50, top: 0, bottom: 0 } }
            }
        });
    }
});