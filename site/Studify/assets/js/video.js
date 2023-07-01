let dbVideos = {};
if (!localStorage.getItem("db_videos")) {
    dbVideos = [
        { id: '00000001', title: 'tituloExemplo1', link: 'R8UZRBFWJXY', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Função', dificuldade: 'baixa', indicadorQualidade: 55 },
        { id: '00000002', title: 'tituloExemplo2', link: 'l5CthpmAWIU', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Inequação', dificuldade: 'alta', indicadorQualidade: 20 },
        { id: '00000003', title: 'tituloExemplo3', link: 'l5CthpmAWIU', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Função', dificuldade: 'média', indicadorQualidade: 30 },
        { id: '00000004', title: 'tituloExemplo4', link: 'nysu0K-VXR8', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Inequação', dificuldade: 'média', indicadorQualidade: 2 },
        { id: '00000005', title: 'tituloExemplo5', link: 'DUk6IShk-Hc', materia: 'Matemática', topico: 'Álgebra', subtopico: 'Polinômios', dificuldade: 'baixa', indicadorQualidade: 5 },
        { id: '00000006', title: 'tituloExemplo6', link: 'dmJtczMY9fY', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Analítica', dificuldade: 'média', indicadorQualidade: 10 },
        { id: '00000007', title: 'tituloExemplo7', link: 'EdM5qFTQvhY', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Analítica', dificuldade: 'alta', indicadorQualidade: 8 },
        { id: '00000008', title: 'tituloExemplo8', link: 'Y_gD7S6OkC4', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'média', indicadorQualidade: 1500 },
        { id: '00000009', title: 'tituloExemplo9', link: '6PpNrCkDwcM', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'alta', indicadorQualidade: 0 },
        { id: '00000010', title: 'tituloExemplo10', link: 'ufA5Vkc2aDM', materia: 'Matemática', topico: 'Geometria', subtopico: 'Geometria Espacial', dificuldade: 'alta', indicadorQualidade: 90 },
        { id: '00000011', title: 'tituloExemplo11', link: 'b0AQkMYvWU8', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'baixa', indicadorQualidade: 5 },
        { id: '00000012', title: 'tituloExemplo12', link: 'OjOyNmTt7Mw', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'alta', indicadorQualidade: 11 },
        { id: '00000013', title: 'tituloExemplo13', link: 'k2XkYEUH9nA', materia: 'Matemática', topico: 'Números', subtopico: 'Logaritmos', dificuldade: 'média', indicadorQualidade: 871 },
        { id: '00000014', title: 'tituloExemplo14', link: '1B_HAdLci7o', materia: 'Matemática', topico: 'Números', subtopico: 'Porcentagem', dificuldade: 'alta', indicadorQualidade: 2 },
        { id: '00000015', title: 'tituloExemplo15', link: 'GgqIUBwyQm4', materia: 'Matemática', topico: 'Números', subtopico: 'Conjuntos', dificuldade: 'baixa', indicadorQualidade: 40 }

    ];
    localStorage.setItem("db_videos", JSON.stringify(dbVideos));
    //console.log(dbVideos);
}
else {
    dbVideos = JSON.parse(localStorage.getItem("db_videos"));
    //console.log(dbVideos);
    //console.log(Object.keys(dbVideos).length);
}
const videoIframe = document.getElementById("iframeYT")

const queryStringg = window.location.search;
const idVideoo = queryStringg.substring(1); // Remove the leading "?" character

videoIframe.src = ""
for (const video of dbVideos) {
    //console.log(video.id);
    if (video.id === idVideo) {
        videoIframe.src = "https://www.youtube.com/embed/" + video.link;
        console.log(videoIframe.src);
        document.title = video.title;
        break;
    }
}
