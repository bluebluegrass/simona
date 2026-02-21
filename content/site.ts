export const siteData = {
  meta: {
    siteName: "穿堂风Simona",
    baseTitle: "穿堂风Simona | 流动的人生",
    baseDescription:
      "美国、新加坡、东京、阿姆斯特丹——在不断迁移的生活里，慢慢学会与世界相处。播客、Newsletter、写作与生活实验。",
  },

  header: {
    nav: [
      { label: "我主持的播客", href: "/podcasts" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "书", href: "/book" },
      { label: "项目", href: "/projects" },
      { label: "和我聊聊", href: "/talk" },
    ],
    cta: { label: "订阅", href: "/newsletter" },
  },

  hero: {
    titleLines: [
      "美国、新加坡、东京、阿姆斯特丹——",
      "在不断迁移的生活里，",
      "慢慢学会与世界相处。",
    ],
    subtitle: "播客 · Newsletter · 写作 · 一些仍在进行的生活实验",
    primaryCta: { label: "订阅 Newsletter", href: "/newsletter" },
    secondaryCta: { label: "预约聊天", href: "/talk" },
  },

  lifeInMotion: {
    title_cn: "流动的人生",
    title_en: "A life in motion",
    intro_cn: "在不同国家生活，不只是地理移动。\n更像是一种不断拆掉旧身份、重新开始的过程。",
    // SVG viewBox: 0 0 100 70（x,y 为相对坐标）
    stops: [
      {
        id: "usa",
        country_cn: "美国",
        city_cn: "",
        title_cn: "起点与不确定",
        body_cn:
          "第一次离开熟悉的世界。在陌生系统里学习工作、表达与独立，也第一次感受到身份的不稳定。",
        x: 18,
        y: 35,
      },
      {
        id: "sg",
        country_cn: "新加坡",
        city_cn: "",
        title_cn: "密度与成长",
        body_cn:
          "高强度工作与快速节奏的城市。在稳定与压力之间，开始认真思考效率、金钱与长期生活的关系。",
        x: 55,
        y: 55,
      },
      {
        id: "tokyo",
        country_cn: "东京",
        city_cn: "",
        title_cn: "孤独与重建",
        body_cn:
          "语言不流畅、关系重新开始、生活被迫变慢。孤独反而让人更诚实地面对自己。",
        x: 80,
        y: 45,
      },
      {
        id: "ams",
        country_cn: "阿姆斯特丹",
        city_cn: "",
        title_cn: "不确定与选择",
        body_cn:
          "当路径不再清晰，开始重新思考工作、创作与生活的边界。不再只适应系统，而是尝试构建属于自己的节奏与方向。",
        x: 48,
        y: 25,
      },
    ],
  },

  podcastsHosted: {
    title: "我主持的播客",
    intro: "这是我把想法说出来的地方：更慢、更真诚，也更接近当下。",
    items: [
      {
        id: "podcast-1",
        title: "播客一（占位）",
        description: "一句话描述：这档播客的气质、适合什么时候听。",
        coverImage: "/images/podcast1.jpg",
        links: {
          spotify: "#",
          apple: "#",
          xiaoyuzhou: "#",
          youtube: "#",
          rss: "#",
        },
        latestEpisodeUrl: "#",
      },
      {
        id: "podcast-2",
        title: "播客二（占位）",
        description: "一句话描述：更偏访谈/独白/纪录片式？（占位）",
        coverImage: "/images/podcast2.jpg",
        links: {
          spotify: "#",
          apple: "#",
          xiaoyuzhou: "#",
          youtube: "#",
          rss: "#",
        },
        latestEpisodeUrl: "#",
      },
    ],
  },

  newsletter: {
    title: "播客推荐 Newsletter",
    name: "The Pod Luck Club",
    valueProp:
      "每天一则播客推荐，每两周一封长信。\n我帮你在浩如烟海的播客里筛选信号，也记录流动人生里那些没人教我们的部分。",
    subscribeUrl: "#", // 先占位：可替换成 Ghost 订阅链接
    formHint: "先用跳转订阅链接即可，不需要真正后端。",
    recentIssues: [
      {
        title: "最近一期（占位）：在不确定里保持呼吸",
        summary: "一段生活记录 + 3 集播客推荐（占位）",
        url: "#",
        date: "2026-02-01",
      },
      {
        title: "最近一期（占位）：当生活突然断线",
        summary: "写给处在转折期的你（占位）",
        url: "#",
        date: "2026-01-15",
      },
      {
        title: "最近一期（占位）：慢慢来，反而更快",
        summary: "关于节奏、选择与长期主义（占位）",
        url: "#",
        date: "2025-12-28",
      },
    ],
  },

  book: {
    title: "书",
    bookTitle: "我的书（占位）",
    coverImage: "/images/book.jpg",
    blurb:
      "一句话简介：这本书写的是什么、为什么值得读（占位）。",
    why:
      "为什么写它（占位）：它对应我人生的某一段阶段，也是一种把混乱整理成语言的尝试。",
    buyLinks: [
      { label: "购买链接（占位）", url: "#" },
      { label: "了解更多", url: "#" },
    ],
  },

  projects: {
    title: "项目 / 实验",
    intro:
      "一些还在进行中的东西。它们不一定完成，但都真实地发生。",
    items: [
      {
        name: "个人 AI 助手（占位）",
        description: "用我的公开内容做一个可对话的知识库与写作助手。",
        tags: ["AI", "写作", "知识库"],
        link: "#",
        status: "WIP",
      },
      {
        name: "播客推荐数据库（占位）",
        description: "把多年的播客推荐做成可检索、可探索的系统。",
        tags: ["Podcast", "Search", "Data"],
        link: "#",
        status: "WIP",
      },
      {
        name: "出海生活实验（占位）",
        description: "把迁移、语言、工作与生活组织成可复用的方法。",
        tags: ["Life", "Systems"],
        link: "#",
        status: "Notes",
      },
    ],
  },

  talk: {
    title: "和我聊聊",
    intro:
      "如果你也在迁移、转折或重建的路上，我们可以聊一聊。不是咨询，更像一杯咖啡的对话。",
    calendlyUrl: "#", // 替换成你的 Calendly
    whoItsFor: [
      "正在考虑海外生活/迁移的人",
      "处在职业转折期、想理清方向的人",
      "想建立写作/创作系统的人",
      "想把个人经历做成作品或项目的人",
    ],
    topics: [
      "跨国家生活：现实与心理落差",
      "职业转折：如何处理不确定",
      "内容创作：newsletter / 播客的长期主义",
      "个人项目：从想法到最小可行版本",
    ],
    logistics: [
      "形式：线上 1:1",
      "时长：30 或 60 分钟（占位）",
      "语言：中文 / 英文",
      "时区：Europe/Amsterdam",
    ],
    cta: { label: "预约一段对话", href: "/talk" },
  },

  socials: {
    title: "我在其他地方",
    items: [
      { platform: "小红书", url: "#", description: "工作与流动人生碎片，带一点幽默。" },
      { platform: "Newsletter", url: "/newsletter", description: "更完整的记录与长期对话。" },
      { platform: "Podcast", url: "/podcasts", description: "把想法说出来的地方。" },
      { platform: "GitHub", url: "#", description: "项目与实验（占位）。" },
      { platform: "LinkedIn", url: "#", description: "职业向信息与经历（占位）。" },
    ],
  },

  ui: {
    latestEpisodeLabel: "最新一期",
  },

  footer: {
    contactEmail: "hello@example.com",
    note: "如果你喜欢这里，欢迎订阅 Newsletter。我们慢慢走，不着急。",
    copyright: "© " + new Date().getFullYear() + " 穿堂风Simona",
  },
} as const;
