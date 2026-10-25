export type ChapterId = 'home' | 'miss' | 'rain' | 'night' | 'call';
export type Choice = { label: string; reply: string[]; follow?: string[] };
export type Chapter = { id: ChapterId; title: string; intro: string[]; choices: Choice[]; reward: string; rewardTitle: string };

export const chapters: Chapter[] = [
  { id:'home', title:'到家了吗？', intro:['到家了吗？','怎么还没回我消息 ㅎㅎ'], choices:[
    {label:'刚到家！',reply:['那就好。','今天是不是很累？'],follow:['有一点点。','那先休息一下。等你不累了再跟我说今天发生了什么。']},
    {label:'还没有呢。',reply:['那你慢慢走，注意安全。','到家一定要告诉我。']},
    {label:'你怎么这么关心我呀？',reply:['这还需要理由吗ㅋㅋ','因为我想你了啊。']}
  ], reward:'夜晚回家路上的那盏灯', rewardTitle:'回家之后' },
  { id:'miss', title:'今天有想我吗？', intro:['我问你一件事。','今天有没有想我？'], choices:[
    {label:'当然有。',reply:['嗯，我就知道。','不过听你亲口说还是会开心。']},
    {label:'没有哦ㅋㅋ',reply:['真的吗？那我今天要努力一下了。','先从让你笑出来开始。']},
    {label:'你先说你有没有想我。',reply:['被你抢先了ㅋㅋ','有啊，刚刚路过那家店就想起你。']}
  ], reward:'一段只属于今晚的语音便笺', rewardTitle:'听你说晚安' },
  { id:'rain', title:'下雨天的约定', intro:['外面下雨了。你带伞了吗？','雨声听起来很适合慢慢吃一顿热乎的。'], choices:[
    {label:'去吃热腾腾的拉面吧。',reply:['好啊，汤要点不太辣的。','然后把靠窗的位置留给你。']},
    {label:'找一家安静的咖啡店。',reply:['那就点热可可。','我们坐到雨停再回家，怎么样？']}
  ], reward:'雨天约会的车窗倒影', rewardTitle:'雨天，和你' },
  { id:'night', title:'睡前五分钟', intro:['你是不是又在熬夜？','我看到你还亮着灯。'], choices:[
    {label:'你不也没睡吗？',reply:['我是在等你说晚安。','好啦，这次一起睡。明天见。']},
    {label:'再陪我聊五分钟嘛。',reply:['五分钟可以。','不过到点我会认真催你去睡。晚安，我的'+ '{name}。']},
    {label:'好啦，晚安。明天见。',reply:['晚安。','希望你今晚做个轻轻松松的梦。']}
  ], reward:'写给未来的你的一封信', rewardTitle:'晚安之后' },
  { id:'call', title:'Unexpected Call', intro:['喂？','其实也没什么特别的事情。','就是突然想听听你的声音。'], choices:[
    {label:'我也刚好想你。',reply:['那今天的电话就很值得了。','再说一会儿，好不好？']},
    {label:'突然打来，吓我一跳。',reply:['抱歉ㅋㅋ下次先发消息。','不过你接起来了，我就放心了。']}
  ], reward:'通话结束后的那句“到家告诉我”', rewardTitle:'那通电话' }
];
