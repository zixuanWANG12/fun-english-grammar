import type { Book } from '../types'

const books: Book[] = [
  {
    id: 'book1',
    title: '第 1 册',
    subtitle: '语法入门',
    emoji: '📚',
    color: '#6366f1',
    description: '词类、名词、代词、动词基础——从零开始认识英语语法的基本构件。',
    lessons: [
      {
        id: 'book1-lesson1',
        title: '词类：名词',
        tags: ['名词', '词类', '入门'],
        level: 1,
        estimatedMinutes: 8,
        summary: '认识名词——世界上所有东西都有名字！',
        sections: [
          {
            type: 'story',
            title: '📖 故事时间：小明的早餐',
            content: '早上小明去食堂，他看到：\n\n**bread**（面包）、**milk**（牛奶）、**apple**（苹果）、**teacher**（老师）。\n\n小明想说：“老师，我想要面包和牛奶。”\n\n但是他说：“Teacher, I want bread and milk.”\n\n老师笑了——小明用对了名词！因为 bread、milk、teacher、apple 都是名词，它们表示人、事物、地点或概念的名字。\n\n小明突然明白了：原来生活中看到的每样东西，几乎都有一个“名字”，这些名字就是**名词**！'
          },
          {
            type: 'explanation',
            title: '📝 语法小课堂',
            content: '**名词** 就是表示人、事物、地点或抽象概念名称的词。\n\n简单说：**名词 = 名字**\n\n> 比如你看到一只猫，它的“名字”是 **cat**；\n> 你看到一本书，它的“名字”是 **book**。\n\n名词可以分为两类：\n\n**1. 专有名词**（特定的人/地名，首字母大写）\n- Beijing, Alice, Monday\n\n**2. 普通名词**（一般事物）\n- dog, city, happiness\n\n普通名词又可以分为：\n- **可数名词**：可以用数字数的→ one apple, two books\n- **不可数名词**：不能一个个数的→ water, rice, information'
          },
          {
            type: 'examples',
            title: '🔍 看例句',
            examples: [
              {
                english: 'The **dog** is sleeping on the **floor**.',
                chinese: '那只**狗**正睡在**地板**上。',
                highlight: 'dog, floor',
                analysis: 'dog 和 floor 都是名词。dog 表示动物，floor 表示地点。'
              },
              {
                english: '**Alice** loves reading **books** about **history**.',
                chinese: '**爱丽丝**喜欢阅读关于**历史**的**书**。',
                highlight: 'Alice, books, history',
                analysis: 'Alice 是专有名词（人名），books 是可数名词复数，history 是抽象名词。'
              },
              {
                english: 'Can I have a glass of **water**, please?',
                chinese: '请给我一杯**水**好吗？',
                highlight: 'water',
                analysis: 'water 是不可数名词，所以我们不能说 "a water"，要说 "a glass of water"。'
              }
            ]
          },
          {
            type: 'pitfall',
            title: '⚡ 小心坑！',
            pitfall: {
              wrong: 'I need an informations.',
              right: 'I need some information.',
              reason: 'information（信息）是不可数名词！不能加 -s，也不能用 a/an。要用 some 或 a piece of。'
            }
          },
          {
            type: 'summary',
            title: '✅ 课后小结',
            items: [
              '名词就是“名字”——表示人、事物、地点或概念',
              '专有名词首字母大写：Beijing, Tom, Monday',
              '可数名词可以数：one book, two cats',
              '不可数名词不能加 -s：water, rice, information',
              '不定冠词 a/an 只能修饰可数名词单数'
            ]
          }
        ],
        exercises: [
          {
            id: 'e1-1-1',
            type: 'choice',
            question: '以下哪个是名词？',
            options: ['run', 'happy', 'dog', 'quickly'],
            answer: 'dog',
            explanation: 'dog 是表示动物名称的词，所以是名词。run 是动词，happy 是形容词，quickly 是副词。'
          },
          {
            id: 'e1-1-2',
            type: 'choice',
            question: '下列哪个是专有名词？',
            options: ['city', 'London', 'book', 'water'],
            answer: 'London',
            explanation: 'London 是特定城市的名字，是专有名词，首字母要大写。'
          },
          {
            id: 'e1-1-3',
            type: 'blank',
            question: 'The ___ is shining in the sky.',
            answer: 'sun',
            acceptableAnswers: ['sun', 'moon', 'star'],
            explanation: '空格处需要一个名词作主语。sun/moon/star 都是名词。'
          },
          {
            id: 'e1-1-4',
            type: 'trueFalse',
            question: '"information" 是可数名词，可以加 -s。',
            answer: false,
            explanation: 'information 是不可数名词，不能加 -s。可以说 some information 或 a piece of information。'
          },
          {
            id: 'e1-1-5',
            type: 'blank',
            question: 'I have two ___ (cat).',
            answer: 'cats',
            acceptableAnswers: ['cats'],
            explanation: 'two 表示复数，cat 是规则可数名词，变复数加 -s → cats。'
          }
        ]
      },
      {
        id: 'book1-lesson2',
        title: '代词入门',
        tags: ['代词', '入门'],
        level: 1,
        estimatedMinutes: 10,
        summary: '用代词代替名词，说话不啰嘜！',
        sections: [
          {
            type: 'story',
            title: '📖 故事时间：Tom 的烦心事',
            content: 'Tom 想告诉妈妈班里发生的事：\n\n"Tom 和 Jerry 打架了。老师批评了 Tom 和 Jerry。Tom 和 Jerry 都觉得 Tom 和 Jerry 没错。"\n\n妈妈听晕了："你能不能别一直说 Tom 和 Jerry？"\n\nTom 想了想，改成：\n\n"**We** 打架了。老师批评了 **us**。**We** 都觉得 **we** 没错。"\n\n妈妈听懂了！\n\n看到了吗？用代词（**我们、他们、他、她、它**）代替反复出现的名词，说话就简洁多了！'
          },
          {
            type: 'explanation',
            title: '📝 语法小课堂',
            content: '**代词** 就是用来代替名词的词。\n\n> 就像外号一样——你不需要每次都喚全名，“他”就知道了。\n\n常见的人称代词：\n\n| 主格（做主语） | 宾格（做宾语） | 中文意思 |\n|:---:|:---:|:---:|\n| I | me | 我 |\n| you | you | 你 |\n| he | him | 他 |\n| she | her | 她 |\n| it | it | 它 |\n| we | us | 我们 |\n| they | them | 他们 |\n\n**主格**做主语，放在动词前面：\n- **She** likes music.\n\n**宾格**做宾语，放在动词或介词后面：\n- I like **her**.'
          },
          {
            type: 'examples',
            title: '🔍 看例句',
            examples: [
              {
                english: '**She** is my best friend. I often play with **her**.',
                chinese: '**她**是我最好的朋友。我经常和**她**一起玩。',
                highlight: 'She, her',
                analysis: 'She 是主格，放在句首做主语；her 是宾格，放在介词 with 后面。'
              },
              {
                english: '**They** told **us** the good news.',
                chinese: '**他们**告诉了**我们**这个好消息。',
                highlight: 'They, us',
                analysis: 'They 是主格做主语；us 是宾格，做动词 told 的间接宾语。'
              },
              {
                english: '**It** is a lovely cat. I feed **it** every day.',
                chinese: '**它**是一只可爱的猫。我每天喂**它**。',
                highlight: 'It, it',
                analysis: '两个 it 都指代前面提到的 cat。第一个是主格，第二个是宾格。'
              }
            ]
          },
          {
            type: 'pitfall',
            title: '⚡ 小心坑！',
            pitfall: {
              wrong: 'Me and Tom went to school.',
              right: 'Tom and I went to school.',
              reason: '做主语时要用主格 I，不是 me。而且英语习惯把别人放在前面，自己放最后。'
            }
          },
          {
            type: 'summary',
            title: '✅ 课后小结',
            items: [
              '代词代替名词，避免重复啰嘜',
              '主格（I, he, she, they）做主语，在动词前',
              '宾格（me, him, her, them）做宾语，在动词或介词后',
              '提到自己和别人时，先别人后自己：Tom and I',
              'it 可以用来指代动物、物品或抽象事物'
            ]
          }
        ],
        exercises: [
          {
            id: 'e1-2-1',
            type: 'choice',
            question: '____ is a teacher. (她)',
            options: ['Her', 'She', 'Him', 'He'],
            answer: 'She',
            explanation: '这里需要主格做主语，且是女性，所以用 She。'
          },
          {
            id: 'e1-2-2',
            type: 'choice',
            question: 'Please give ____ the book. (给我)',
            options: ['I', 'my', 'me', 'mine'],
            answer: 'me',
            explanation: 'give 后面跟宾格作宾语，所以用 me。'
          },
          {
            id: 'e1-2-3',
            type: 'blank',
            question: '___ (他们) are playing football on the playground.',
            answer: 'They',
            acceptableAnswers: ['They'],
            explanation: '句首做主语，表示“他们”，用主格 They。'
          },
          {
            id: 'e1-2-4',
            type: 'trueFalse',
            question: '"I like he." 这个句子是正确的。',
            answer: false,
            explanation: 'like 后面要用宾格，he 是主格，应改为 him。正确句子：I like him。'
          },
          {
            id: 'e1-2-5',
            type: 'blank',
            question: 'Tom and ___ (我) are good friends.',
            answer: 'I',
            acceptableAnswers: ['I'],
            explanation: '做主语时要用主格 I，而且习惯把自己放最后。'
          }
        ]
      },
      {
        id: 'book1-lesson3',
        title: '动词 be 的用法',
        tags: ['动词', 'be动词', '入门'],
        level: 1,
        estimatedMinutes: 12,
        summary: 'am/is/are——英语里最重要的三个小词！',
        sections: [
          {
            type: 'story',
            title: '📖 故事时间：新同学的自我介绍',
            content: '新学期，班里来了新同学 Lily：\n\n> "I **am** Lily. I **am** 12 years old. You **are** my new classmates. This **is** my pencil case."\n\n同学们发现 Lily 说的每句话里都有 am、is、are。\n\n老师解释说：\n\n"am is are 是英语里最常用的动词，它们就像魔法连接线，把主语和后面的描述连起来。\n\n- **am** 只跟 I 走\n- **is** 配合 he/she/it\n- **are** 跟你/我们/他们走"\n\nLily 点点头——原来这么简单！'
          },
          {
            type: 'explanation',
            title: '📝 语法小课堂',
            content: '**be 动词**有三种形式：**am / is / are**\n\n它们的意思是“是”，但用法随主语变化：\n\n| 主语 | be 动词 | 示例 |\n|:---:|:---:|---|\n| I | **am** | I am a student. |\n| He / She / It | **is** | She is tall. |\n| You / We / They | **are** | You are smart. |\n\n**否定句**：be 动词后加 not\n- I am **not** tired.\n- She **is not** (isn\'t) here.\n- They **are not** (aren\'t) ready.\n\n**疑问句**：把 be 动词提到主语前\n- **Are** you OK?\n- **Is** he your brother?'
          },
          {
            type: 'examples',
            title: '🔍 看例句',
            examples: [
              {
                english: 'I **am** a Chinese student.',
                chinese: '我**是**一名中国学生。',
                highlight: 'am',
                analysis: '主语是 I，所以 be 动词用 am。'
              },
              {
                english: 'She **is** not at home right now.',
                chinese: '她现在不在家。',
                highlight: 'is not',
                analysis: '主语是 She，用 is；否定加 not，可以缩写为 isn\'t。'
              },
              {
                english: '**Are** you ready for the test?',
                chinese: '你准备好考试了吗？',
                highlight: 'Are',
                analysis: '疑问句把 are 提到主语 you 前面。'
              }
            ]
          },
          {
            type: 'pitfall',
            title: '⚡ 小心坑！',
            pitfall: {
              wrong: 'He are a doctor.',
              right: 'He is a doctor.',
              reason: 'He 是第三人称单数，必须用 is，不能用 are。很多人混淆 he 和 you 的搭配，多练习就好了！'
            }
          },
          {
            type: 'summary',
            title: '✅ 课后小结',
            items: [
              'be 动词有三种形式：am、is、are，都表示“是”',
              'I → am，he/she/it → is，you/we/they → are',
              '否定句：be 动词 + not（可缩写：isn\'t, aren\'t）',
              '疑问句：be 动词提到主语前',
              'be 动词是最常用的英语动词，一定要记牢！'
            ]
          }
        ],
        exercises: [
          {
            id: 'e1-3-1',
            type: 'choice',
            question: 'I ___ a student.',
            options: ['am', 'is', 'are', 'be'],
            answer: 'am',
            explanation: '主语是 I，be 动词必须用 am。'
          },
          {
            id: 'e1-3-2',
            type: 'blank',
            question: 'She ___ (be) very kind.',
            answer: 'is',
            acceptableAnswers: ['is'],
            explanation: '主语是 She，第三人称单数，be 动词用 is。'
          },
          {
            id: 'e1-3-3',
            type: 'trueFalse',
            question: '"They is playing outside." 这个句子是正确的。',
            answer: false,
            explanation: '主语是 They（复数），be 动词应该用 are，不是 is。正确：They are playing outside。'
          },
          {
            id: 'e1-3-4',
            type: 'choice',
            question: '___ you happy today?',
            options: ['Am', 'Is', 'Are', 'Be'],
            answer: 'Are',
            explanation: '主语是 you，疑问句把 Are 提到句首。'
          },
          {
            id: 'e1-3-5',
            type: 'blank',
            question: 'This ___ (be not) my book. It\'s hers.',
            answer: 'is not',
            acceptableAnswers: ['is not', "isn't"],
            explanation: '主语 This 是第三人称单数，用 is；否定加 not → is not 或 isn\'t。'
          }
        ]
      }
    ]
  },
  {
    id: 'book2',
    title: '第 2 册',
    subtitle: '语法进阶',
    emoji: '📘',
    color: '#f59e0b',
    description: '名词进阶、形容词、副词、动词时态——语法规则逐渐丰富。',
    lessons: [
      {
        id: 'book2-lesson1',
        title: '形容词的用法',
        tags: ['形容词', '进阶'],
        level: 2,
        estimatedMinutes: 10,
        summary: '形容词让你的英语描述更生动！',
        sections: [],
        exercises: []
      },
      {
        id: 'book2-lesson2',
        title: '副词的用法',
        tags: ['副词', '进阶'],
        level: 2,
        estimatedMinutes: 10,
        summary: '副词描述动作的方式和时间。',
        sections: [],
        exercises: []
      },
      {
        id: 'book2-lesson3',
        title: '一般现在时',
        tags: ['时态', '一般现在时'],
        level: 2,
        estimatedMinutes: 12,
        summary: '描述习惯和事实——一般现在时的世界。',
        sections: [],
        exercises: []
      }
    ]
  },
  {
    id: 'book3',
    title: '第 3 册',
    subtitle: '语法深化',
    emoji: '📕',
    color: '#10b981',
    description: '完成时、将来时、语态、从句——深入理解英语的时间世界。',
    lessons: [
      {
        id: 'book3-lesson1',
        title: '现在完成时',
        tags: ['时态', '完成时'],
        level: 3,
        estimatedMinutes: 15,
        summary: '过去发生但和现在有关——完成时的魅力。',
        sections: [],
        exercises: []
      },
      {
        id: 'book3-lesson2',
        title: '一般将来时',
        tags: ['时态', '将来时'],
        level: 3,
        estimatedMinutes: 12,
        summary: '用 will 和 be going to 预测未来。',
        sections: [],
        exercises: []
      },
      {
        id: 'book3-lesson3',
        title: '被动语态',
        tags: ['语态', '被动'],
        level: 3,
        estimatedMinutes: 15,
        summary: '主语被动作——被动语态入门。',
        sections: [],
        exercises: []
      }
    ]
  },
  {
    id: 'book4',
    title: '第 4 册',
    subtitle: '语法精通',
    emoji: '📗',
    color: '#ec4899',
    description: '关系代词、从句、虚拟语气、助动词、特殊句式——英语语法的终极挑战。',
    lessons: [
      {
        id: 'book4-lesson1',
        title: '关系代词',
        tags: ['从句', '关系代词'],
        level: 4,
        estimatedMinutes: 15,
        summary: '用 who 和 which 把句子连起来。',
        sections: [],
        exercises: []
      },
      {
        id: 'book4-lesson2',
        title: '虚拟语气入门',
        tags: ['虚拟语气'],
        level: 4,
        estimatedMinutes: 15,
        summary: '如果我是你——虚拟语气的魔法世界。',
        sections: [],
        exercises: []
      },
      {
        id: 'book4-lesson3',
        title: '条件句',
        tags: ['从句', '条件句'],
        level: 4,
        estimatedMinutes: 15,
        summary: '如果...就...——条件句的三种类型。',
        sections: [],
        exercises: []
      }
    ]
  }
]

export default books