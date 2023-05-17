const speakers = [
    {
        slug: 'marcelo-palladino',
        avatar: 'assets/images/speakers/marcelo-palladino.png',
        speakerName: 'Marcelo Palladino',
        jobTitle: 'Senior Developer Advocate',
        companyName: 'AWS',
        linkedinLink: 'https://www.linkedin.com/in/mfpalladino/',
        twitterLink: 'https://twitter.com/mfpalladino',
        githubLink: 'https://github.com/mfpalladino',
        mainBio:
            'Marcelo Palladino tem mais anos de carreira do que gostaria de compartilhar. <br/>Durante os últimos anos ele trabalhou com aplicações baseadas em arquivos Xbase, ficou maravilhado com CORBA, apanhou muito de COM/COM+, VB, Delphi, ASP e um monte de outras "velharias". <br/>Ele diria que infelizmente não é tão velho a ponto de ter escrito código de verdade em COBOL. <br><br/>Nos últimos 10 anos trabalhou com sistemas distribuídos e AWS em algumas das maiores organizações no Brasil. Além disso, participou de diferentes comunidades, especialmente grupos de usuários AWS. <br><br/>Atualmente na <a href="https://aws.amazon.com" class="text-decoration-none fw-bold" target="_blank">AWS</a>, aonde aplica tudo o que aprendeu em favor de apoiar as pessoas que colocam a mão na massa construindo aplicações na nuvem AWS.',
    },
    {
        slug: 'thiago-rodrigues',
        avatar: 'assets/images/speakers/thiago-rodrigues.png',
        speakerName: 'Thiago Rodrigues',
        jobTitle: 'Analista de Infraestrutura',
        companyName: 'Open Datacenter',
        linkedinLink: 'https://www.linkedin.com/in/thiagoodriguess96/',
        mainBio:
            'Tenho um grande interesse em tecnologia e sou um membro ativo da comunidade técnica. <br></br>Fora do trabalho, gosto de cozinhar e experimentar novas receitas na cozinha. 🍜 </br>Além disso, gosto de praticar esportes. 🏃🏽‍♂️',
    },
    {
        slug: 'rubens-melo',
        avatar: 'assets/images/speakers/rubens-melo.jpeg',
        speakerName: 'Rubens de Melo',
        jobTitle: 'DB2 z/OS Admin',
        companyName: 'Banco do Brasil',
        linkedinLink: 'https://www.linkedin.com/in/rubensdemelo/',
        twitterLink: 'https://twitter.com/rubensdemelo',
        githubLink: 'https://github.com/rubensdemelo',
        youtubeLink: 'https://www.youtube.com/@rubensdemelo',
        mainBio:
            'Criador do <a href="https://flutterparainiciantes.com.br" class="text-decoration-none" target="_blank">Flutter para Iniciantes</a>.',
    },
    {
        slug: 'rafael-zago',
        avatar: 'assets/images/speakers/rafael-zago.jpeg',
        speakerName: 'Rafael Zago',
        jobTitle: 'Engenheiro de Automação de Software',
        companyName: 'Red Hat',
        linkedinLink: 'https://www.linkedin.com/in/rafaelvzago/',
        githubLink: 'https://github.com/rafaelvzago',
        mainBio:
            'Antes, trabalhei como Engenheiro de Suporte Premier na <a href="https://www.e-core.com/lt-pt/" class="text-decoration-none fw-bold" target="_blank">e-Core<a/> e também fui instrutor freelancer para a <a href="https://www.alura.com.br/" class="text-decoration-none fw-bold" target="_blank">Alura Cursos Online</a>. Tenho uma forte base em Administração de Sistemas, tendo trabalhado anteriormente como Especialista em Infraestrutura na <a href="https://www.ibm.com" class="text-decoration-none fw-bold" target="_blank">IBM</a>. <br></br>Com paixão pela tecnologia e determinação para melhorar constantemente, estou comprometido em entregar resultados de alta qualidade em todo o meu trabalho. Estou animado para continuar crescendo e construindo minha carreira na área de automação de software e administração de sistemas.',
    },
    {
        slug: 'ph-lerbach',
        avatar: 'assets/images/speakers/paulo-henrique-lerbach.jpeg',
        speakerName: 'Paulo Henrique Lerbach',
        jobTitle: 'Arquiteto de Soluções',
        companyName: 'Stefanini',
        linkedinLink: 'https://www.linkedin.com/in/palerique/',
        twitterLink: 'https://twitter.com/palerique',
        githubLink: 'https://github.com/palerique',
        mainBio:
            'Com uma carreira de sucesso, ele liderou e participou de equipes em empresas renomadas como <a href="https://www.bertelsmann.com" class="text-decoration-none fw-bold" target="_blank">Bertelsmann</a> - Alemanha, <a href="https://www.totogi.com" class="text-decoration-none fw-bold" target="_blank">Totogi</a> - EUA, <a href="https://www.gov.br/pf/pt-br" class="text-decoration-none fw-bold" target="_blank">Polícia Federal do Brasil</a>, <a href="https://www.bb.com.br/site/" class="text-decoration-none fw-bold" target="_blank">Banco do Brasil</a> e <a href="https://www.caixa.gov.br/Paginas/home-caixa.aspx" class="text-decoration-none fw-bold" target="_blank">Caixa Econômica Federal</a>. <br></br>Paulo desenvolveu sistemas que gerenciam bilhões de euros, processam mais de um milhão de transações por segundo e o sistema de interceptação telefônica da PF.',
    },
    {
        slug: 'jucinei-santos',
        avatar: 'assets/images/speakers/jucinei-santos.png',
        speakerName: 'Jucinei Santos',
        jobTitle: 'Consultor Devops e Cloud',
        companyName: 'ONU/PNUD',
        linkedinLink: 'https://www.linkedin.com/in/jucineisantos/',
        twitterLink: 'https://twitter.com/jucinei',
        githubLink: 'https://github.com/Jucinei'
    },
    {
        slug: 'raul-diogo',
        avatar: 'assets/images/speakers/raul-diogo.jpeg',
        speakerName: 'Raul Diogo',
        jobTitle: 'Especialista em Banco de Dados',
        companyName: 'Tecnisys Tecnologias Inovadoras',
        linkedinLink: 'https://www.linkedin.com/in/rauldoliveira/',
        twitterLink: 'https://twitter.com/rauldoliveira',
        githubLink: 'https://github.com/rauldoliveira',
        mainBio:
            'Atualmente na <a href="https://tecnisys.com.br" class="text-decoration-none fw-bold" target="_blank">Tecnisys Tecnologias Inovadoras</a> é responsável pela escalação de chamados e desenho de soluções dos clientes. <br/>Principal SGBD tratado pelo time é o PostgreSQL, com atuações sazonais em outros produtos como SQL Server, MySQL e MongoDB. Além da atuação em problemas no core de atuação do time que é PostgreSQL, há interações e trabalhos em conjunto com o time de Big Data, altamente enriquecedoras',
    },
    {
        slug: 'sidney-cirqueira',
        avatar: 'assets/images/speakers/sidney-cirqueira.jpeg',
        speakerName: 'Sidney Cirqueira',
        jobTitle:
            'Azure Synapse Support Engineer at Microsoft | Microsoft Certified in Data & AI Big Data & Machine Learning Student',
        companyName: 'Microsoft',
        linkedinLink: 'https://www.linkedin.com/in/sidneyoliveiracirqueira/',
        twitterLink: 'https://twitter.com/sidneyoliveiracirqueira',
        youtubeLink: 'https://www.youtube.com/@SidneyCirqueira',
        mainBio:
            'Currently focused on data engineering and artificial intelligence solutions in the Microsoft Azure environment. Speaker and Active participant of the Microsoft Learn Student Ambassadors Latam Communities, SQL Server DF, Brasilia Data Group, BSB IA, Data Science, BigData & Analytics, and speaker at Data Platform and Artificial Intelligence events.',
    },
    {
        slug: 'gleyson-carvalho',
        avatar: 'assets/images/speakers/gleyson-carvalho.jpeg',
        speakerName: 'Gleyson Carvalho',
        jobTitle: 'Engenheiro Robótico',
        linkedinLink: 'https://www.linkedin.com/in/gleyson-carvalho-116866195/',
        mainBio:
            'Sou um amante de tecnologia de um modo geral, adoro projetos de robótica e compartilhar conhecimentos relacionados. <br/>Meu principal <em>hobby</em> é desenvolver projetos de robótica e automação residencial. Sempre procurei me aprofundar em diversos assuntos relacionados a este nicho de tecnologia.',
    },
    {
        slug: 'osman-oliveira',
        avatar: 'assets/images/speakers/osman-oliveira.jpeg',
        speakerName: 'Osman de Oliveira',
        jobTitle: 'Senior Solution Architect',
        companyName: 'Red Hat',
        linkedinLink:
            'https://www.linkedin.com/in/osman-lira-junior-msc-27569271/',
        githubLink: 'https://github.com/osmanlirajr',
        mainBio:
            'Graduado em Ciência da Computação pela <a href="https://portal.unicap.br/" class="text-decoration-none fw-bold" target="_blank">Universidade Católica de Pernambuco</a> e mestre em Engenharia de Software pelo CESAR.EDU. <br></br>Possui mais de 20 anos de experiência na área de Middleware, com foco principal de atuação em tecnologias Open Source. <br/>Atualmente na <a href="https://redhat.com" class="text-decoration-none fw-bold" target="_blank">Red Hat</a> onde atua no setor de bancos públicos e tem a missão de projetar soluções de clientes e ajudar a definir Roadmaps, melhorias e inovações que farão parte da linha de soluções da empresa',
    },
    {
        slug: 'otavio-lemos',
        avatar: 'assets/images/speakers/otavio-lemos.jpeg',
        speakerName: 'Otávio Lemos',
        jobTitle: 'Principal Enyerprise Cloud Architect',
        companyName: 'Oracle',
        linkedinLink: 'https://www.linkedin.com/in/otavio-lemos/',
        githubLink: 'https://github.com/otavio-lemos',
    },
];

function getSpeakerBySlug(speakerSlug) {
    return speakers.find((e) => e.slug == speakerSlug);
}
