let dbVideos = {};
if (!localStorage.getItem("db_videos")) {
    dbVideos = [
        { id: '00000001', comentarios: [], title: 'tituloExemplo1', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'R8UZRBFWJXY', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Função', dificuldade: 'baixa', indicadorQualidade: 55 },
        { id: '00000002', comentarios: [], title: 'tituloExemplo2', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'l5CthpmAWIU', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Inequação', dificuldade: 'alta', indicadorQualidade: 20 },
        { id: '00000003', comentarios: [], title: 'tituloExemplo3', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'l5CthpmAWIU', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Função', dificuldade: 'média', indicadorQualidade: 30 },
        { id: '00000004', comentarios: [], title: 'tituloExemplo4', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'nysu0K-VXR8', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Inequação', dificuldade: 'média', indicadorQualidade: 2 },
        { id: '00000005', comentarios: [], title: 'tituloExemplo5', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'DUk6IShk-Hc', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Polinômios', dificuldade: 'baixa', indicadorQualidade: 5 },
        { id: '00000006', comentarios: [], title: 'tituloExemplo6', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'dmJtczMY9fY', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Analítica', dificuldade: 'média', indicadorQualidade: 10 },
        { id: '00000007', comentarios: [], title: 'tituloExemplo7', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'EdM5qFTQvhY', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Analítica', dificuldade: 'alta', indicadorQualidade: 8 },
        { id: '00000008', comentarios: [], title: 'tituloExemplo8', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'Y_gD7S6OkC4', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'média', indicadorQualidade: 1500 },
        { id: '00000009', comentarios: [], title: 'tituloExemplo9', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: '6PpNrCkDwcM', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'alta', indicadorQualidade: 0 },
        { id: '00000010', comentarios: [], title: 'tituloExemplo10', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'ufA5Vkc2aDM', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'alta', indicadorQualidade: 90 },
        { id: '00000011', comentarios: [], title: 'tituloExemplo11', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'b0AQkMYvWU8', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'baixa', indicadorQualidade: 5 },
        { id: '00000012', comentarios: [], title: 'tituloExemplo12', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'OjOyNmTt7Mw', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'alta', indicadorQualidade: 11 },
        { id: '00000013', comentarios: [], title: 'tituloExemplo13', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'k2XkYEUH9nA', materia: 'Matemática', topico: 'Números', subtopico: 'Logaritmos', dificuldade: 'média', indicadorQualidade: 871 },
        { id: '00000014', comentarios: [], title: 'tituloExemplo14', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: '1B_HAdLci7o', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'alta', indicadorQualidade: 2 },
        { id: '00000015', comentarios: [], title: 'tituloExemplo15', description: 'uma descrição elaborada do vídeo para testar o suporte do card para multiplos caracteres', link: 'GgqIUBwyQm4', materia: 'Matemática', topico: 'Números', subtopico: 'Conjuntos', dificuldade: 'baixa', indicadorQualidade: 40 }

    ];
    localStorage.setItem("db_videos", JSON.stringify(dbVideos));
    console.log(dbVideos);
}

var usuariosJSON = localStorage.getItem('db_usuarios');

const dadosIniciais = {
    usuarios: [
        { "id": generateUUID(), "login": "admin", "saved": [], "liked": [], "senha": "123", "nome": "Administrador do Sistema", "email": "admin@abc.com" },
        { "id": generateUUID(), "login": "user", "saved": [], "liked": [], "senha": "123", "nome": "Usuario Comum", "email": "user@abc.com" },
    ]
};

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// Verifica se existem dados já armazenados no localStorage
if (!usuariosJSON) {  // Se NÃO há dados no localStorage

    // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
    alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

    // Copia os dados iniciais para o banco de dados 
    db_usuarios = dadosIniciais;

    // Salva os dados iniciais no local Storage convertendo-os para string antes
    localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
}

