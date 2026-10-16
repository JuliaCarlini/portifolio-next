// label: "Cliente" para trabalho real em produção; o resto é académico/pessoal.
// featured, shortTitle, thumbSrc e stack alimentam os cards da página inicial.
// repoUrl a terminar em .pdf aparece como relatório; repositórios privados não têm repoUrl.

export const projects = [
  {
    title: "Website institucional – HM Escola Kickboxing",
    shortTitle: "HM Escola Kickboxing",
    thumbSrc: "/img/thumbs/hm.jpg",
    stack: "React",
    category: "web",
    label: "Cliente",
    imageSrc: "/img/hm.png",
    description: "Site para uma escola de kickboxing, com foco em presença digital, divulgação de serviços e contacto com alunos.",
    challenge: "Dar presença digital à escola com um site claro, responsivo e alinhado com a identidade da marca.",
    result: "Publicado em produção e usado hoje como página oficial da escola.",
    tools: ["React", "CSS", "JavaScript", "Netlify"],
    liveUrl: "https://hmescolakick.netlify.app/",
    featured: true
  },
  {
    title: "BioSite – Rozana Dornelas",
    shortTitle: "BioSite Rozana Dornelas",
    thumbSrc: "/img/thumbs/biosite.jpg",
    stack: "React",
    category: "web",
    label: "Cliente",
    imageSrc: "/img/biosite.jpg",
    description: "Página de links para o Instagram de uma psicanalista, com página de venda para sessões online.",
    challenge: "Concentrar sessões, livro, palestras e WhatsApp numa página rápida, com identidade visual própria e boa pré-visualização ao partilhar.",
    result: "Publicado no domínio próprio da cliente, com página de venda dedicada à Sessão Às Chaves.",
    tools: ["React", "CSS", "Cloudflare"],
    liveUrl: "https://rozanadornelas.com/",
    featured: true
  },
  {
    title: "Protótipo IoT com Comunicação Segura",
    shortTitle: "Protótipo IoT com Comunicação Segura",
    thumbSrc: "/img/thumbs/iot.jpg",
    stack: "PHP",
    category: "web",
    label: "Académico",
    imageSrc: "/img/iot.png",
    description: "Solução de casa inteligente com foco na comunicação segura entre dispositivos.",
    challenge: "Trocar dados entre dispositivos por protocolos seguros, mitigando ataques Man-in-the-Middle.",
    result: "Sistema funcional com autenticação, comunicação segura e registo de eventos.",
    tools: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
    repoUrl: "https://github.com/JuliaCarlini/smarthome-iot",
    liveUrl: "https://smarthome-iot-l67x.onrender.com",
    featured: true
  },
  {
    title: "Pentest em ambiente controlado",
    shortTitle: "Pentest em ambiente controlado",
    thumbSrc: "/img/thumbs/pentest.jpg",
    stack: "Relatório",
    category: "cyber",
    label: "Académico",
    imageSrc: "/img/pentest.png",
    description: "Footprinting, análise de vulnerabilidades e mitigação num ambiente de testes.",
    challenge: "Identificar vulnerabilidades com ferramentas reais de segurança, seguindo uma metodologia de teste.",
    result: "Vulnerabilidades críticas e médias identificadas, com recomendações de mitigação.",
    tools: ["Pentest", "Wireshark", "Linux"],
    repoUrl: "/reports/projeto-pentest.pdf",
    featured: true
  },
  {
    title: "Rede Empresarial com Gestão Centralizada",
    category: "cyber",
    label: "Académico",
    imageSrc: "/img/gv.png",
    description: "Cenário de rede empresarial com gestão centralizada de políticas e segurança.",
    challenge: "Configurar e gerir uma rede com Active Directory, políticas de grupo e firewall.",
    result: "Ambiente com acesso controlado e políticas de segurança implementadas.",
    tools: ["Windows Server", "Active Directory", "GPO", "Firewall"],
    repoUrl: "/reports/projeto-gestao.pdf",
    featured: false
  },
  {
    title: "Virtualização e Serviços Virtuais",
    category: "cyber",
    label: "Académico",
    imageSrc: "/img/vms.png",
    description: "Configuração e gestão de sistemas de virtualização e serviços virtuais em ambiente empresarial.",
    challenge: "Implementar uma infraestrutura virtualizada escalável, com isolamento de serviços e boa utilização do hardware.",
    result: "Menos hardware necessário e recuperação de desastres facilitada por snapshots e backups centralizados.",
    tools: ["VMware", "VirtualBox", "Linux", "Windows Server"],
    repoUrl: "/reports/projeto-virtualizacao.pdf",
    featured: false
  },
];
