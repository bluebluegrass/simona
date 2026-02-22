type PlatformLinks = {
  spotify: string;
  apple: string;
  xiaoyuzhou: string;
  youtube: string;
  rss: string;
};

type CanonicalPlatformLinks = {
  spotify?: string;
  apple?: string;
  xiaoyuzhou?: string;
  youtube?: string;
  rss?: string;
};

type SiteData = {
  meta: {
    siteName: string;
    baseTitle: string;
    baseDescription: string;
  };
  header: {
    nav: Array<{ label: string; href: string }>;
    cta: { label: string; href: string };
  };
  hero: {
    titleLines: string[];
    subtitle: string;
    proofBadges: [string, string, string];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  lifeInMotion: {
    title_cn: string;
    title_en: string;
    intro_cn: string;
    stops: Array<{
      id: string;
      country_cn: string;
      city_cn: string;
      title_cn: string;
      body_cn: string;
      x: number;
      y: number;
    }>;
  };
  podcastsHosted: {
    title: string;
    intro: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      coverImage: string;
      links: PlatformLinks;
      platformLinks?: CanonicalPlatformLinks;
      startHere: Array<{ title: string; url: string }>;
      latestEpisodeUrl: string;
    }>;
  };
  newsletter: {
    title: string;
    name: string;
    valueProp: string;
    subscribeUrl: string;
    formHint: string;
    recentIssues: Array<{
      title: string;
      summary: string;
      url: string;
      date: string;
    }>;
  };
  book: {
    title: string;
    bookTitle: string;
    coverImage: string;
    blurb: string;
    why: string;
    fromPodcastId: string;
    relationshipNote: string;
    items: Array<{
      title: string;
      subtitle: string;
      platform: string;
      publishDate: string;
      wordCount: number;
      category: string;
      url: string;
      topics: string[];
    }>;
    buyLinks: Array<{ label: string; url: string }>;
  };
  projects: {
    title: string;
    intro: string;
    items: Array<{
      name: string;
      description: string;
      tags: string[];
      link: string;
      status: string;
    }>;
  };
  talk: {
    title: string;
    intro: string;
    calendlyUrl: string;
    whoItsFor: string[];
    topics: string[];
    goodFor: string[];
    notFor: string[];
    logistics: string[];
    cta: { label: string; href: string };
  };
  socials: {
    title: string;
    items: Array<{ platform: string; url: string; description: string }>;
  };
  ui: {
    latestEpisodeLabel: string;
  };
  footer: {
    contactEmail: string;
    note: string;
    copyright: string;
  };
};

export const siteData: SiteData = {
  meta: {
    siteName: "穿堂风Simona",
    baseTitle: "穿堂风Simona | 流动的人生",
    baseDescription:
      "我是穿堂风Simona，前 Meta 数据工程师，长期播客推荐与 Newsletter 写作者，目前常住阿姆斯特丹。",
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
      "在流动里练习稳定，",
      "在讲述里重新认识自己。",
    ],
    subtitle: "前 Meta 数据工程师；2022 年后开启数字游民生活，现常住阿姆斯特丹。",
    proofBadges: ["7年播客推荐", "每日1集", "双周长信"],
    primaryCta: { label: "订阅 Newsletter", href: "/newsletter" },
    secondaryCta: { label: "预约聊天", href: "/talk" },
  },

  lifeInMotion: {
    title_cn: "流动的人生",
    title_en: "A life in motion",
    intro_cn: "在不同国家生活，不只是地理移动。\n更像是一种不断拆掉旧身份、重新开始的过程。",
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
        id: "global-nomad",
        country_cn: "全球旅居",
        city_cn: "",
        title_cn: "在路上重写生活",
        body_cn:
          "从固定城市切换到流动生活后，工作、关系和节奏都被重新排列。不断移动让我更清楚：想过怎样的生活，比“应该在哪里”更重要。",
        x: 68,
        y: 50,
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
        id: "ohmama",
        title: "噢妈妈",
        description: "讲述属于中国女性的真实故事，相信女性的声音和讲述的力量。",
        coverImage: "/images/podcast-ohmama.jpg",
        links: {
          spotify: "https://open.spotify.com/show/1AUhH0zNMxuwuILEoFvDrK",
          apple: "https://ohmama.simona.life",
          xiaoyuzhou: "https://ohmama.simona.life",
          youtube: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
          rss: "https://ohmama.simona.life",
        },
        platformLinks: {
          spotify: "https://open.spotify.com/show/1AUhH0zNMxuwuILEoFvDrK",
        },
        startHere: [
          { title: "入门第 1 集（占位）", url: "#" },
          { title: "入门第 2 集（占位）", url: "#" },
          { title: "入门第 3 集（占位）", url: "#" },
        ],
        latestEpisodeUrl: "https://ohmama.simona.life",
      },
      {
        id: "sago",
        title: "sàgó散讲",
        description: "散讲 with Simona，在每一个公园长椅上向你发送电波。",
        coverImage: "/images/podcast-sago.jpg",
        links: {
          spotify: "https://open.spotify.com/show/49gsbyIxARl4tJZfrMyBkx",
          apple: "https://blog.simona.life/episodes/",
          xiaoyuzhou: "https://blog.simona.life/episodes/",
          youtube: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
          rss: "https://blog.simona.life/feed/audio.xml",
        },
        platformLinks: {
          apple: "https://podcasts.apple.com/ca/podcast/sago%E6%95%A3%E8%AE%B2/id1671385373",
        },
        startHere: [
          { title: "入门第 1 集（占位）", url: "#" },
          { title: "入门第 2 集（占位）", url: "#" },
          { title: "入门第 3 集（占位）", url: "#" },
        ],
        latestEpisodeUrl: "https://blog.simona.life/episodes/",
      },
    ],
  },

  newsletter: {
    title: "播客推荐 Newsletter",
    name: "The Pod Luck Club",
    valueProp:
      "优质播客推荐计划。日听播客三百集，每天推荐一期我喜欢的播客，每两周一篇发自世界某个角落的人生冒险故事。",
    subscribeUrl: "https://thepodluckclub.com/",
    formHint: "点击订阅后会跳转到 The Pod Luck Club 官方页面。",
    recentIssues: [
      {
        title: "最近更新：优质播客推荐计划",
        summary: "每日一档推荐 + 双周长信，持续记录听见与流动中的生活。",
        url: "https://thepodluckclub.com/",
        date: "2026-02-01",
      },
      {
        title: "最近更新：发自世界角落的长信",
        summary: "在迁移、工作与创作之间，持续写下真实感受与选择。",
        url: "https://thepodluckclub.com/",
        date: "2026-01-15",
      },
    ],
  },

  book: {
    title: "书",
    bookTitle: "我为什么（不）想成为妈妈",
    coverImage: "/images/book.jpg",
    blurb: "从《噢妈妈》访谈出发，把真实对话整理为转录文稿，再编辑成可长期阅读的书。",
    why: "这本书沿着「播客采访 -> 转录整理 -> 纪实成书」的路径，把女性生命经验沉淀成文本。",
    fromPodcastId: "ohmama",
    relationshipNote: "这本书基于《噢妈妈》长期访谈与叙事整理而来。",
    items: [
      {
        title: "我为什么（不）想成为妈妈",
        subtitle: "根据《噢妈妈》的部分采访整理成文稿",
        platform: "微信读书",
        publishDate: "2025-02",
        wordCount: 168311,
        category: "纪实文学",
        url: "https://weread.qq.com/web/bookDetail/1fd32ce0813ab99d7g014a4c",
        topics: ["生育选择", "不婚不育", "丁克", "母职", "女性处境"],
      },
    ],
    buyLinks: [
      { label: "微信读书阅读", url: "https://weread.qq.com/web/bookDetail/1fd32ce0813ab99d7g014a4c" },
      { label: "关注《噢妈妈》", url: "https://ohmama.simona.life" },
    ],
  },

  projects: {
    title: "项目 / 实验",
    intro: "一些还在进行中的东西。它们不一定完成，但都真实地发生。",
    items: [
      {
        name: "WomenOverseas 她乡",
        description: "海外华人女性社区，连接女性与 non-binary，一起探索更广阔的世界。",
        tags: ["Community", "Women", "Overseas"],
        link: "https://womenoverseas.com",
        status: "Active",
      },
      {
        name: "穿堂风博客",
        description: "在每一个咖啡店里记录下此刻的心情，持续发布生活与迁移中的文字。",
        tags: ["Writing", "Life", "Blog"],
        link: "https://blog.simona.life/",
        status: "Active",
      },
      {
        name: "播客 Coaching Session",
        description: "从零开始启动播客，从设备、访谈到后期，帮助你更快完成第一季。",
        tags: ["Podcast", "Coaching", "Creator"],
        link: "https://www.buymeacoffee.com/simonana/e/107286",
        status: "Open",
      },
    ],
  },

  talk: {
    title: "和我聊聊",
    intro:
      "如果你也在迁移、转折或重建的路上，我们可以来一场 1:1 coffee chat。结合我的数字游民与跨国生活经验，聊聊你当下最具体的困惑。",
    calendlyUrl: "https://buymeacoffee.com/simonana/e/336214",
    whoItsFor: [
      "正在考虑数字游民/海外生活的人",
      "处在职业转折期、想理清下一步方向的人",
      "准备开始 Newsletter 或播客创作的人",
      "希望把个人经历沉淀为作品或长期项目的人",
    ],
    topics: [
      "Gap 与全球旅居：做了两年后，我学到了什么",
      "从被裁员到重建生活系统：如何处理不确定",
      "从零开始做播客：选题、访谈、技术与发布",
      "如何在内容创作与现实生活之间找到可持续节奏",
    ],
    goodFor: [
      "你正在迁移或转折期，需要把当下的混乱理成可执行的下一步。",
      "你想开始 Newsletter / 播客，但不知道如何稳定输出。",
      "你有很多真实经历，想整理成长期内容或项目。",
      "你希望聊法务/移民之外，更现实的心理与节奏问题。",
    ],
    notFor: [
      "如果你想要标准答案或速成模板，这次聊天可能不适合。",
      "如果你期待正式咨询报告或代执行服务，这里不会提供。",
      "如果你处于紧急心理危机，请优先联系当地专业支持资源。",
    ],
    logistics: [
      "形式：线上 1:1 coffee chat",
      "时长：30 分钟（可延长）",
      "语言：中文 / English",
      "时区：Amsterdam（CET/CEST）",
    ],
    cta: { label: "预约一段对话", href: "/talk" },
  },

  socials: {
    title: "我在其他地方",
    items: [
      {
        platform: "Telegram",
        url: "https://t.me/daily_dose_podcast",
        description: "播客相关更新与日常碎片。",
      },
      {
        platform: "Mastodon",
        url: "https://m.cmx.im/@bluegrass",
        description: "公开写作与个人观察。",
      },
      {
        platform: "小红书",
        url: "https://www.xiaohongshu.com/user/profile/5fc5b484000000000100bcad",
        description: "关于工作、迁移与生活的真实记录。",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
        description: "节目与相关内容更新。",
      },
      {
        platform: "Newsletter",
        url: "https://thepodluckclub.com/",
        description: "每天一档播客推荐，每两周一封长信。",
      },
    ],
  },

  ui: {
    latestEpisodeLabel: "最新内容",
  },

  footer: {
    contactEmail: "hey.simonalife@gmail.com",
    note: "欢迎给我写邮件，或者在 Newsletter 里继续这场慢慢展开的对话。",
    copyright: "© " + new Date().getFullYear() + " 穿堂风Simona",
  },
};
