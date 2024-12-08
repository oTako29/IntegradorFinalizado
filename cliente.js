const freelancers = [
    { nome: "João Silva", search: "Desenvolvedor Web", regiao: "Norte", nota: 5, genero: "masculino", idade: 30, preco: 100 },
    { nome: "Maria Oliveira", search: "Designer Gráfico", regiao: "Sul", nota: 4, genero: "feminino", idade: 28, preco: 80 },
    { nome: "Carlos Pereira", search: "Redator", regiao: "Leste", nota: 3, genero: "masculino", idade: 35, preco: 50 },
    { nome: "Ana Santos", search: "Cabeleireira", regiao: "Oeste", nota: 5, genero: "feminino", idade: 25, preco: 60 },
    { nome: "Pedro Gomes", search: "Fotógrafo", regiao: "Norte", nota: 4, genero: "masculino", idade: 40, preco: 90 },
    { nome: "Lucia Martins", search: "Consultora de Marketing", regiao: "Sul", nota: 5, genero: "feminino", idade: 32, preco: 120 },
    { nome: "Ricardo Alves", search: "Programador", regiao: "Leste", nota: 4, genero: "masculino", idade: 29, preco: 110 },
    { nome: "Fernanda Costa", search: "Assistente Virtual", regiao: "Oeste", nota: 3, genero: "feminino", idade: 27, preco: 40 },
    { nome: "Bruno Lima", search: "Tradutor", regiao: "Norte", nota: 5, genero: "masculino", idade: 38, preco: 70 },
    { nome: "Juliana Rocha", search: "Professora de Inglês", regiao: "Sul", nota: 4, genero: "feminino", idade: 31, preco: 75 }
];

function filtrarFreelancers() {
    const search =  document.getElementById("search").value;
    const regiao = document.getElementById("regiao").value;
    const nota = document.getElementById("nota").value;
    const genero = document.getElementById("genero").value;
    const idadeMin = parseInt(document.getElementById("idade").value) || 0;
    const precoMax = parseInt(document.getElementById("preco").value) || Infinity;

    const filteredFreelancers = freelancers.filter(freelancer => {
        return (search === '' || freelancer.nome.toLowerCase().includes(search)) &&
        (regiao === "todas" || freelancer.regiao === regiao) &&
               (nota === "todas" || freelancer.nota.toString() === nota) &&
               (genero === "todos" || freelancer.genero === genero) &&
               (freelancer.idade >= idadeMin) &&
               (freelancer.preco <= precoMax);
    });

    mostrarFreelancers(filteredFreelancers);
}

function mostrarFreelancers(freelancers) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Limpa a lista atual

    if (freelancers.length === 0) {
        list.innerHTML = "<li>Nenhum freelancer encontrado.</li>";
        return;
    }

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.textContent = `${freelancer.nome} - Trabalho: ${freelancer.search}, Região: ${freelancer.regiao}, Nota: ${freelancer.nota}, Gênero: ${freelancer.genero}, Idade: ${freelancer.idade}, Preço: R$${freelancer.preco}`;
        list.appendChild(li);
    });
}

// Exibir todos os freelancers ao carregar a página
document.addEventListener("DOMContentLoaded", mostrarFreelancers(freelancers));

function mostrarFreelancers(freelancers) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Limpa a lista atual

    if (freelancers.length === 0) {
        list.innerHTML = "<li>Nenhum freelancer encontrado.</li>";
        return;
    }

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        li.innerHTML = `<i class="fas fa-user" style="margin-right: 10px;"></i>${freelancer.nome} - Trabalho: ${freelancer.search}, Região: ${freelancer.regiao}, Nota: ${freelancer.nota}, Gênero: ${freelancer.genero}, Idade: ${freelancer.idade}, Preço: R$${freelancer.preco}`;
        list.appendChild(li);
    });
}
function mostrarFreelancers(freelancers) {
    const list = document.getElementById("list");
    list.innerHTML = ""; // Limpa a lista atual

    if (freelancers.length === 0) {
        list.innerHTML = "<li>Nenhum freelancer encontrado.</li>";
        return;
    }

    freelancers.forEach(freelancer => {
        const li = document.createElement("li");
        
        // Criar estrelas com base na nota
        let estrelas = '';
        for (let i = 0; i < 5; i++) {
            if (i < freelancer.nota) {
                estrelas += '<i class="fas fa-star" style="color: gold;"></i>'; // Estrela preenchida
            } else {
                estrelas += '<i class="far fa-star" style="color: gold;"></i>'; // Estrela vazia
            }
        }

        li.innerHTML = `${estrelas} <i class="fas fa-user" style="margin-right: 10px;"></i>${freelancer.nome} - Trabalho: ${freelancer.search},  Região: ${freelancer.regiao}, Gênero: ${freelancer.genero}, Idade: ${freelancer.idade}, Preço: R$${freelancer.preco}`;
        list.appendChild(li);
    });
}



    filteredFreelancers.forEach(freelancer => {
        const li = document.createElement('li');
        li.textContent = freelancer.nome; // Exibe o nome do freelancer
        list.appendChild(li);
    });

    

