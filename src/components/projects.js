

export const projects = [
  {
    title: "Pentest",
    category: "cyber",
    imageSrc: "/images/pentest.png",
    description: "Footprinting, análise de vulnerabilidades e mitigação em ambiente controlado",
    challenge: "dentificação de vulnerabilidades em ambiente controlado usando ferramentas reais de segurança.",
    result: "Vulnerabilidades críticas e médias identificadas com recomendações de mitigação.",
    tools: ["pentest", "wireshark", "linux"],
    repoUrl: "/repos/pentest.pdf",
    featured: true
  },
  {
    title: "Protótipo IoT com Comunicação Segura",
    category: "web",
    imageSrc: "/img/iot.png",
    description: "Desenvolvimento de solução IoT com foco em comunicação segura entre dispositivos.",
    challenge: "Desenvolvimento de solução IoT com foco em segurança de comunicação e controlo de acessos.",
    result: "Sistema IoT funcional com autenticação, comunicação segura e registo de eventos.",
    tools: ["html", "css", "javascript", "php", "boostrap"],
    repoUrl: "https://github.com/JuliaCarlini/smarthome-iot",
    liveUrl: "https://smarthome-iot.infinityfree.me/",
    featured: true
  },
  {
    title: "Website institucional – HM Escola Kickboxing",
    category: "web",
    imageSrc: "/img/hm.png",
    description: "Website desenvolvido para uma academia de kickboxing, com foco em presença digital, divulgação de serviços e contacto com alunos.",
    challenge: "Criar um site claro, responsivo e alinhado com a identidade da academia, garantindo boa experiência em desktop e mobile.",
    result: "Site funcional, responsivo e publicado em produção, atualmente utilizado como página oficial do Gym.",
    tools: ["react", "css", "javascript", "netlify"],
    repoUrl: "https://github.com/JuliaCarlini/HM-app",
    liveUrl: "https://hmescolakick.netlify.app/",
    featured: false
  },

  {
    title: "Cenário de Rede Empresarial – Gestão Centralizada",
    category: "cyber",
    imageSrc: "/img/gv.png",
    description: "Cenário de rede empresarial com gestão centralizada de políticas e segurança.",
    challenge: "Configurar e gerir uma rede empresarial com Active Directory, políticas de grupo e firewall.",
    result: "Ambiente de rede seguro e bem configurado com acesso controlado e políticas de segurança implementadas.",
    tools: ["Windows Server", "Active Directory", "políticas de grupo", "firewall"],
    repoUrl: "/repos/gv.pdf",
    featured: false
  },

  {
    title: "Sistemas de Virtualização e Serviços Virtuais",
    category: "cyber",
    imageSrc: "/img/vms.png",
    description: "Configuração e gestão de sistemas de virtualização e serviços virtuais em ambiente empresarial.",
    challenge: "Configurar e gerir sistemas de virtualização, incluindo servidores virtuais, serviços de rede e políticas de segurança.",
    result: "Ambiente virtualizado funcional com servidores virtuais configurados, serviços de rede implementados e políticas de segurança aplicadas.",
    tools: ["VMware", "VirtualBox", "Linux", "Windows"],
    repoUrl: "/repos/vms.pdf",
    featured: false
  },
];
