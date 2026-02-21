type PlatformLinks = {
  spotify: string;
  apple: string;
  xiaoyuzhou: string;
  youtube: string;
  rss: string;
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
    titleLines: [string, string, string];
    subtitle: string;
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
      "我是穿堂风Simona，曾经的互联网数据打工人，2022年11月被 Facebook 裁员后开启数字游民生活，目前在日本定居，持续做播客、写作与社区项目。",
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
      "很开心遇见你，我是穿堂风Simona。",
      "2022年11月被 Facebook 裁员后，",
      "我开启数字游民生活，并在日本定居。",
    ],
    subtitle: "播客 · Newsletter · 写作 · 一些仍在进行的生活实验",
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
        title: "噢！妈妈",
        description: "讲述属于中国女性的真实故事，相信女性的声音和讲述的力量。",
        coverImage: "/images/podcast-ohmama.jpg",
        links: {
          spotify: "https://open.spotify.com/show/1AUhH0zNMxuwuILEoFvDrK",
          apple: "https://ohmama.simona.life",
          xiaoyuzhou: "https://ohmama.simona.life",
          youtube: "https://www.youtube.com/channel/UCHh3PxWb7aIQr9aUo1pEgJA",
          rss: "https://ohmama.simona.life",
        },
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
      {
        title: "最近更新：我喜欢的播客清单",
        summary: "筛选信号而非噪音，把好节目稳定送到你邮箱。",
        url: "https://thepodluckclub.com/",
        date: "2025-12-28",
      },
    ],
  },

  book: {
    title: "书",
    bookTitle: "《噢！妈妈》故事整理（新书筹备中）",
    coverImage: "/images/book.jpg",
    blurb: "基于《噢！妈妈》长期访谈与节目内容，整理中国女性真实经验与生命叙事。",
    why: "从播客走到书写，是把声音沉淀成可以被长期阅读、反复回看的文本。",
    fromPodcastId: "ohmama",
    relationshipNote: "这本书基于《噢！妈妈》长期访谈与叙事整理而来。",
    buyLinks: [
      { label: "关注《噢！妈妈》", url: "https://ohmama.simona.life" },
      { label: "订阅更新通知", url: "https://thepodluckclub.com/" },
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
    logistics: [
      "形式：线上 1:1 coffee chat",
      "时长：30 分钟（可延长）",
      "语言：中文 / English",
      "时区：Asia/Tokyo",
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
