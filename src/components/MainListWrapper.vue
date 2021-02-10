<template>
  <div>
    <main-list-nav :type="type" />
    <el-card>
      <div class="card-content">
        <router-view
          v-for="(item, index) in fakeInfo"
          :key="index"
          :item="item"
          :index="index"
          :type="item.type"
          :showPart="['title']"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import MainListNav from "./MainListNav.vue";
import request from "@/service";

export default {
  name: "MainListWrapper",
  components: {
    MainListNav,
  },
  data() {
    return {
      type: "main",
      fakeInfos: [
        {
          author: {
            name: "张国华",
            headline: "全国十佳理财师 资产配资专家 公众号：财神华",
            avatar_url:
              "https://pic2.zhimg.com/50/v2-32f551ebff40744f1ea08d266c18e01f_m.jpg",
          },
          relationship: {
            is_nothelp: false,
            is_thanked: false,
            voting: 0,
          },
          question: {
            author: {
              url: "https://api.zhihu.com/topics/19563921",
              avatar_url: "https://pic4.zhimg.com/50/c9cbcd833_s.jpg",
              name: "基金",
            },
            answer_count: 18,
            comment_count: 1,
            excerpt: "基金问题简介",
            title: "基金问题标题",
            type: "quesiton",
            url: "https://www.baidu.com/",
          },
          voteup_count: 127,
          excerpt:
            "此前，有读者留言问519975这只基金怎样，已经赚了三万多块，目前想赎回。 我的建议是赎回，可能很多人疑惑，怎么现在就开始做基金赎回了，我不是一直提倡长线投资吗？ 大伙们去天天基金上面一看，这只基金赚钱效应不是挺好的吗？ 大家要都是这样想的那就大&hellip;",
          content: `<p>此前，有读者留言问519975这只基金怎样，已经赚了三万多块，目前想赎回。</p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-055a1098274f20b2cfe0bffd19415537_b.jpg" data-caption="" data-size="normal" data-rawwidth="505" data-rawheight="189" class="origin_image zh-lightbox-thumb" width="505" data-original="https://pic4.zhimg.com/v2-055a1098274f20b2cfe0bffd19415537_r.jpg"/></figure><p>我的建议是赎回，可能很多人疑惑，怎么现在就开始做基金赎回了，我不是一直提倡长线投资吗？</p><p>大伙们去天天基金上面一看，这只基金赚钱效应不是挺好的吗？</p><figure data-size="normal"><img src="https://pic2.zhimg.com/v2-1d6f59a6c56933e0751ca08909d598d1_b.jpg" data-caption="" data-size="normal" data-rawwidth="448" data-rawheight="217" class="origin_image zh-lightbox-thumb" width="448" data-original="https://pic2.zhimg.com/v2-1d6f59a6c56933e0751ca08909d598d1_r.jpg"/></figure><p>大家要都是这样想的那就大错特错了，我一直都劝告大家不要只看天天基金的收益状况来判定一只基金的好坏与否。</p><p>基金的挑选涉及方方面面，下面就以这位同学持有的长信量化中小盘股票（519975）为例，和大家聊聊为什么我说不要再被天天基金收益给骗了，以及挑选出一只优质基金要具体看哪些内容。</p><p><b>一、收益状况</b></p><p>我们先来看一下大家最为关心的基金收益，相信很多人看到天天基金里面呈现出来的收益都觉得他表现不错。</p><figure data-size="normal"><img src="https://pic3.zhimg.com/v2-5e708bb554db1ad13299bd36a007a242_b.jpg" data-caption="" data-size="normal" data-rawwidth="492" data-rawheight="237" class="origin_image zh-lightbox-thumb" width="492" data-original="https://pic3.zhimg.com/v2-5e708bb554db1ad13299bd36a007a242_r.jpg"/></figure><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-bf1e35dfd90ced77715eb0c215b59c4f_b.jpg" data-caption="" data-size="normal" data-rawwidth="340" data-rawheight="596" class="content_image" width="340"/></figure><p>但其实不然，我们来看一下晨星网给出的收益对比是怎样的：</p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-0acecf68bb207ef5816439577ed93e9b_b.jpg" data-caption="" data-size="normal" data-rawwidth="435" data-rawheight="154" class="origin_image zh-lightbox-thumb" width="435" data-original="https://pic4.zhimg.com/v2-0acecf68bb207ef5816439577ed93e9b_r.jpg"/></figure><p>大家发现了吗？收益明显跑不过同类型的股票型基金和晨星大盘指数!</p><p>那为什么在天天基金里面呈现的收益数据这么好看呢？</p><p>大家可以看一下，天天基金里面他的同类对比数量非常小，你随意去看下别的基金同类比对都是四五千只的体量，对比标的少了，收益表现一般排名就会很容易靠前了。</p><p>此外，像有些年份的同类对比数量才500只基金，给出“<b>优秀</b>”的评级，看起来在同类中表现不错，但体量这么小，也许是同类整体收益就好不到哪里去呢？</p><p>因此，大家以后遇上这种同类对比数值很小的就要小心了，不要被排名骗到坑里去。</p><p>其次，大家在天天基金网里面看，整体收益都是往上走的，表现不错。</p><p>但是咋们利用晨星网数据拆分出来看一下：</p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-a1e8b57214ef1340a06c55ee3ac6599f_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="105" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic4.zhimg.com/v2-a1e8b57214ef1340a06c55ee3ac6599f_r.jpg"/></figure><p>在2018年亏损严重，收益波动剧烈，大家都跌，他却跌的更多，大家涨起来看，他却还在跌，同时17、18连续两年亏损状态，这一点大家要注意哈，如果遇上历史业绩连续两年或是更长时间亏损的，你要想清楚来了，历史要是重演，你觉得你会拿得住这么长时间吗?不会提前割肉离场吗？</p><p>特别是现在8月大盘就调整震荡那么几下就着急下车的人，还是不要去碰为好。</p><p><b>我说过了，投资不能只看收益，收益和风险是成正比的。</b></p><figure data-size="normal"><img src="https://pic1.zhimg.com/v2-41b3e563fe3eb177261355270cd6dd90_b.png" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="67" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic1.zhimg.com/v2-41b3e563fe3eb177261355270cd6dd90_r.jpg"/></figure><p>大家可以看到他的历史最差回报是36.7%，投资前要先问问自己可以接受最大程度的亏损是多少？不要盲目追随高收益！</p><figure data-size="normal"><img src="https://pic2.zhimg.com/v2-89e673ed020c1c936a39c19069027725_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="122" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic2.zhimg.com/v2-89e673ed020c1c936a39c19069027725_r.jpg"/></figure><p>此外，大家可以看到该基金五年的标准差还是很大的，收益波动幅度大，赚取的收益冒的险并不低。</p><p>夏普比率也不高，能获得同样收益的，但是比他冒险小得多的基金，说实话市面上并不稀缺。</p><p><b>二、基金公司</b></p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-28a8fc67594fa929cc97bf87003cb997_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="124" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic4.zhimg.com/v2-28a8fc67594fa929cc97bf87003cb997_r.jpg"/></figure><p>说完大家比较关心的收益，再说回来基金公司。</p><p>买基金要看基金公司吗？这可能是很多同学疑惑的地方。</p><p>其实基金公司也是一个考量因素，我在粉丝交流群里常常和大家说，三流的基金公司不可能孕育出一流的基金。</p><p>大家想想啊，小公司和大公司比，那个具备更好的投研实力和优质团队呢?那个更能留住优秀的基金经理呢？那个的渠道更佳，更有名气，更受大家欢迎追捧呢？要是出现黑天鹅旗下基金经理出事了，谁的救济能力更强呢？</p><p>长信这个公司，大家平时看到的、听到的、了解的多吗？我想大家的答案是否定的。知名基金公司不乏好的基金产品，没必要净往小公司里面挑哈。</p><p><b>三、成立时间</b></p><p>这个我相信也是很多同学会忽略的地方，不懂大家发现没有，该基金是2015年牛市成立的，要知道在牛市发行的基金都是冲着圈钱来的，发行即巅峰，随后一落千丈，15年发行的基金表现都不怎么好，这种例子我相信大家都见过不少了吧。</p><p>希望大家以后再次遇上，07、15年发行的新基，心里都要打个问号，冲着圈钱而来的新基金，你认为他此后能为你带来多大的收益？</p><p><b>四、基金规模</b></p><figure data-size="normal"><img src="https://pic3.zhimg.com/v2-da61897c0695c7cd4ff5910fe7929172_b.jpg" data-caption="" data-size="normal" data-rawwidth="318" data-rawheight="272" class="content_image" width="318"/></figure><p>大家可以看到，这个基金规模是相当小的，其实这个是综合因素决定的，长信公司较小，没有名气，基金经理也是没有很大的名气。</p><p>大家想一下，2015年牛市时期行情大好，当时发行的规模一般都不会太小，就像今年的七八月一样，爆款基金并不缺，日光基也不是个什么稀罕事。但是长信量化中小盘股票2015年发行时候只有1.24亿的规模，不说要求多大的规模，但是30-50亿起码是要有吧。</p><p>大家可想而知，他是从一开始就不被大家所看好，缺乏亮点。</p><p>大家以后遇上这种过小规模的要记得绕着走哈。</p><p><b>五、基金经理</b></p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-0d00a6a41118612adfd6c39617d797c7_b.jpg" data-caption="" data-size="normal" data-rawwidth="341" data-rawheight="532" class="content_image" width="341"/></figure><p>大家可以看一下，该基金经理熟悉吗？应该说是一个不常见、表现普通的基金经理。</p><p>此外，在长信长达10年的时间，手下管理着11只大杂烩一样的基金。有的人是越有能力，越优秀管理的越多，但是看该经理手里的基金表现都是很普通。</p><p>当你在一家公司什么都做，什么都管的话有两种情况，一是你很优秀，能力很强；二是你不优秀，没能力，杂而不精。该经理显然是第一种情况，不然早被挖走了。待在一家公司长达十年，要是在重要岗位还可以，但单单只是做基金经理的话......再次说明长信缺乏人才，该经理确实能力有限。</p><p><b>六、重仓股</b></p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-e7bcd7a5974c23d1a942d7b7aac520bb_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="237" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic4.zhimg.com/v2-e7bcd7a5974c23d1a942d7b7aac520bb_r.jpg"/></figure><p><b>大家可以看一下没有一只个股是大家常见熟知的，是不是很奇怪？</b></p><p>持仓个股风格不明显，也不是行业龙头。</p><p>其次，十大重仓股比例不高，仅有22.42%，正常都不会配置这么低的比例，侧面说明了该经理不敢重仓于某一个股，并且都是很均匀分配的。相反，往往是基金经理越懂越了解的东西，他越敢于集中持股，且不会出现这种平均主义。</p><p><b>大家回想一下，你见过哪只基金是这样配置重仓股的吗？</b></p><p>此外，我们从重仓股中看不出他的能力圈在哪里，消费？科技？都不明显，看不出这个经理的能力圈在哪里，你回去看一下他手中管理的基金，你会发现也是非常的杂，没有明显的投资风格，不能很好的展示擅长的投资行业和个人独到之处。</p><p>综合来看，该经理没有自己的投资优势，擅长的行业板块，显著的投资风格和优质选股能力，缺乏我们常说的“能力圈”，再次印证了该经理能力有限。</p><p><b>对于一个基金的挑选不能单单看某一方面的表现，不要掉进天天基金呈现的收益效果。收益、基金公司、基金经理、规模大小，重仓股，风险与收益状况等都是我们需要综合考量的东西。</b></p><p>相信大家，运用我上面说的一套方法体系综合来筛选基金，我敢说你们至少可以把市面上90%的劣质基金给筛选掉。剩下的挑选就相对容易了，在基金投资中赚取持续稳定的收益，就变得非常容易了。</p><p>其实对于基金投资的学问还远远不止这些，但基于篇幅有限，对于基金的挑选就介绍到这里。</p><p><b>如果大家认同上述所说的基金挑选方法，希望大家多多点赞或是留言转发。</b></p><p><b>当然，大家如果对于理财投资有什么问题的可以私信或是留言。</b></p>`,
          comment_count: 41,
          thanks_count: 69,
          type: "answer",
          thumbnail:
            "https://pic3.zhimg.com/50/v2-c82ff653b918de111219a25608cc1520_400x224.jpg",
        },
        {
          author: {
            name: "张国华",
            headline: "全国十佳理财师 资产配资专家 公众号：财神华",
            avatar_url:
              "https://pic2.zhimg.com/50/v2-32f551ebff40744f1ea08d266c18e01f_m.jpg",
          },
          relationship: {
            is_nothelp: false,
            is_thanked: false,
            voting: 0,
          },
          question: {
            author: {
              url: "https://api.zhihu.com/topics/19563921",
              avatar_url: "https://pic4.zhimg.com/50/c9cbcd833_s.jpg",
              name: "基金",
            },
            answer_count: 18,
            comment_count: 1,
            excerpt: "基金问题简介",
            title: "基金问题标题",
            type: "quesiton",
            url: "https://www.baidu.com/",
          },
          voteup_count: 127,
          excerpt:
            "此前，有读者留言问519975这只基金怎样，已经赚了三万多块，目前想赎回。 我的建议是赎回，可能很多人疑惑，怎么现在就开始做基金赎回了，我不是一直提倡长线投资吗？ 大伙们去天天基金上面一看，这只基金赚钱效应不是挺好的吗？ 大家要都是这样想的那就大&hellip;",
          content: `<p>此前，有读者留言问519975这只基金怎样，已经赚了三万多块，目前想赎回。</p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-055a1098274f20b2cfe0bffd19415537_b.jpg" data-caption="" data-size="normal" data-rawwidth="505" data-rawheight="189" class="origin_image zh-lightbox-thumb" width="505" data-original="https://pic4.zhimg.com/v2-055a1098274f20b2cfe0bffd19415537_r.jpg"/></figure><p>我的建议是赎回，可能很多人疑惑，怎么现在就开始做基金赎回了，我不是一直提倡长线投资吗？</p><p>大伙们去天天基金上面一看，这只基金赚钱效应不是挺好的吗？</p><figure data-size="normal"><img src="https://pic2.zhimg.com/v2-1d6f59a6c56933e0751ca08909d598d1_b.jpg" data-caption="" data-size="normal" data-rawwidth="448" data-rawheight="217" class="origin_image zh-lightbox-thumb" width="448" data-original="https://pic2.zhimg.com/v2-1d6f59a6c56933e0751ca08909d598d1_r.jpg"/></figure><p>大家要都是这样想的那就大错特错了，我一直都劝告大家不要只看天天基金的收益状况来判定一只基金的好坏与否。</p><p>基金的挑选涉及方方面面，下面就以这位同学持有的长信量化中小盘股票（519975）为例，和大家聊聊为什么我说不要再被天天基金收益给骗了，以及挑选出一只优质基金要具体看哪些内容。</p><p><b>一、收益状况</b></p><p>我们先来看一下大家最为关心的基金收益，相信很多人看到天天基金里面呈现出来的收益都觉得他表现不错。</p><figure data-size="normal"><img src="https://pic3.zhimg.com/v2-5e708bb554db1ad13299bd36a007a242_b.jpg" data-caption="" data-size="normal" data-rawwidth="492" data-rawheight="237" class="origin_image zh-lightbox-thumb" width="492" data-original="https://pic3.zhimg.com/v2-5e708bb554db1ad13299bd36a007a242_r.jpg"/></figure><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-bf1e35dfd90ced77715eb0c215b59c4f_b.jpg" data-caption="" data-size="normal" data-rawwidth="340" data-rawheight="596" class="content_image" width="340"/></figure><p>但其实不然，我们来看一下晨星网给出的收益对比是怎样的：</p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-0acecf68bb207ef5816439577ed93e9b_b.jpg" data-caption="" data-size="normal" data-rawwidth="435" data-rawheight="154" class="origin_image zh-lightbox-thumb" width="435" data-original="https://pic4.zhimg.com/v2-0acecf68bb207ef5816439577ed93e9b_r.jpg"/></figure><p>大家发现了吗？收益明显跑不过同类型的股票型基金和晨星大盘指数!</p><p>那为什么在天天基金里面呈现的收益数据这么好看呢？</p><p>大家可以看一下，天天基金里面他的同类对比数量非常小，你随意去看下别的基金同类比对都是四五千只的体量，对比标的少了，收益表现一般排名就会很容易靠前了。</p><p>此外，像有些年份的同类对比数量才500只基金，给出“<b>优秀</b>”的评级，看起来在同类中表现不错，但体量这么小，也许是同类整体收益就好不到哪里去呢？</p><p>因此，大家以后遇上这种同类对比数值很小的就要小心了，不要被排名骗到坑里去。</p><p>其次，大家在天天基金网里面看，整体收益都是往上走的，表现不错。</p><p>但是咋们利用晨星网数据拆分出来看一下：</p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-a1e8b57214ef1340a06c55ee3ac6599f_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="105" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic4.zhimg.com/v2-a1e8b57214ef1340a06c55ee3ac6599f_r.jpg"/></figure><p>在2018年亏损严重，收益波动剧烈，大家都跌，他却跌的更多，大家涨起来看，他却还在跌，同时17、18连续两年亏损状态，这一点大家要注意哈，如果遇上历史业绩连续两年或是更长时间亏损的，你要想清楚来了，历史要是重演，你觉得你会拿得住这么长时间吗?不会提前割肉离场吗？</p><p>特别是现在8月大盘就调整震荡那么几下就着急下车的人，还是不要去碰为好。</p><p><b>我说过了，投资不能只看收益，收益和风险是成正比的。</b></p><figure data-size="normal"><img src="https://pic1.zhimg.com/v2-41b3e563fe3eb177261355270cd6dd90_b.png" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="67" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic1.zhimg.com/v2-41b3e563fe3eb177261355270cd6dd90_r.jpg"/></figure><p>大家可以看到他的历史最差回报是36.7%，投资前要先问问自己可以接受最大程度的亏损是多少？不要盲目追随高收益！</p><figure data-size="normal"><img src="https://pic2.zhimg.com/v2-89e673ed020c1c936a39c19069027725_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="122" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic2.zhimg.com/v2-89e673ed020c1c936a39c19069027725_r.jpg"/></figure><p>此外，大家可以看到该基金五年的标准差还是很大的，收益波动幅度大，赚取的收益冒的险并不低。</p><p>夏普比率也不高，能获得同样收益的，但是比他冒险小得多的基金，说实话市面上并不稀缺。</p><p><b>二、基金公司</b></p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-28a8fc67594fa929cc97bf87003cb997_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="124" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic4.zhimg.com/v2-28a8fc67594fa929cc97bf87003cb997_r.jpg"/></figure><p>说完大家比较关心的收益，再说回来基金公司。</p><p>买基金要看基金公司吗？这可能是很多同学疑惑的地方。</p><p>其实基金公司也是一个考量因素，我在粉丝交流群里常常和大家说，三流的基金公司不可能孕育出一流的基金。</p><p>大家想想啊，小公司和大公司比，那个具备更好的投研实力和优质团队呢?那个更能留住优秀的基金经理呢？那个的渠道更佳，更有名气，更受大家欢迎追捧呢？要是出现黑天鹅旗下基金经理出事了，谁的救济能力更强呢？</p><p>长信这个公司，大家平时看到的、听到的、了解的多吗？我想大家的答案是否定的。知名基金公司不乏好的基金产品，没必要净往小公司里面挑哈。</p><p><b>三、成立时间</b></p><p>这个我相信也是很多同学会忽略的地方，不懂大家发现没有，该基金是2015年牛市成立的，要知道在牛市发行的基金都是冲着圈钱来的，发行即巅峰，随后一落千丈，15年发行的基金表现都不怎么好，这种例子我相信大家都见过不少了吧。</p><p>希望大家以后再次遇上，07、15年发行的新基，心里都要打个问号，冲着圈钱而来的新基金，你认为他此后能为你带来多大的收益？</p><p><b>四、基金规模</b></p><figure data-size="normal"><img src="https://pic3.zhimg.com/v2-da61897c0695c7cd4ff5910fe7929172_b.jpg" data-caption="" data-size="normal" data-rawwidth="318" data-rawheight="272" class="content_image" width="318"/></figure><p>大家可以看到，这个基金规模是相当小的，其实这个是综合因素决定的，长信公司较小，没有名气，基金经理也是没有很大的名气。</p><p>大家想一下，2015年牛市时期行情大好，当时发行的规模一般都不会太小，就像今年的七八月一样，爆款基金并不缺，日光基也不是个什么稀罕事。但是长信量化中小盘股票2015年发行时候只有1.24亿的规模，不说要求多大的规模，但是30-50亿起码是要有吧。</p><p>大家可想而知，他是从一开始就不被大家所看好，缺乏亮点。</p><p>大家以后遇上这种过小规模的要记得绕着走哈。</p><p><b>五、基金经理</b></p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-0d00a6a41118612adfd6c39617d797c7_b.jpg" data-caption="" data-size="normal" data-rawwidth="341" data-rawheight="532" class="content_image" width="341"/></figure><p>大家可以看一下，该基金经理熟悉吗？应该说是一个不常见、表现普通的基金经理。</p><p>此外，在长信长达10年的时间，手下管理着11只大杂烩一样的基金。有的人是越有能力，越优秀管理的越多，但是看该经理手里的基金表现都是很普通。</p><p>当你在一家公司什么都做，什么都管的话有两种情况，一是你很优秀，能力很强；二是你不优秀，没能力，杂而不精。该经理显然是第一种情况，不然早被挖走了。待在一家公司长达十年，要是在重要岗位还可以，但单单只是做基金经理的话......再次说明长信缺乏人才，该经理确实能力有限。</p><p><b>六、重仓股</b></p><figure data-size="normal"><img src="https://pic4.zhimg.com/v2-e7bcd7a5974c23d1a942d7b7aac520bb_b.jpg" data-caption="" data-size="normal" data-rawwidth="554" data-rawheight="237" class="origin_image zh-lightbox-thumb" width="554" data-original="https://pic4.zhimg.com/v2-e7bcd7a5974c23d1a942d7b7aac520bb_r.jpg"/></figure><p><b>大家可以看一下没有一只个股是大家常见熟知的，是不是很奇怪？</b></p><p>持仓个股风格不明显，也不是行业龙头。</p><p>其次，十大重仓股比例不高，仅有22.42%，正常都不会配置这么低的比例，侧面说明了该经理不敢重仓于某一个股，并且都是很均匀分配的。相反，往往是基金经理越懂越了解的东西，他越敢于集中持股，且不会出现这种平均主义。</p><p><b>大家回想一下，你见过哪只基金是这样配置重仓股的吗？</b></p><p>此外，我们从重仓股中看不出他的能力圈在哪里，消费？科技？都不明显，看不出这个经理的能力圈在哪里，你回去看一下他手中管理的基金，你会发现也是非常的杂，没有明显的投资风格，不能很好的展示擅长的投资行业和个人独到之处。</p><p>综合来看，该经理没有自己的投资优势，擅长的行业板块，显著的投资风格和优质选股能力，缺乏我们常说的“能力圈”，再次印证了该经理能力有限。</p><p><b>对于一个基金的挑选不能单单看某一方面的表现，不要掉进天天基金呈现的收益效果。收益、基金公司、基金经理、规模大小，重仓股，风险与收益状况等都是我们需要综合考量的东西。</b></p><p>相信大家，运用我上面说的一套方法体系综合来筛选基金，我敢说你们至少可以把市面上90%的劣质基金给筛选掉。剩下的挑选就相对容易了，在基金投资中赚取持续稳定的收益，就变得非常容易了。</p><p>其实对于基金投资的学问还远远不止这些，但基于篇幅有限，对于基金的挑选就介绍到这里。</p><p><b>如果大家认同上述所说的基金挑选方法，希望大家多多点赞或是留言转发。</b></p><p><b>当然，大家如果对于理财投资有什么问题的可以私信或是留言。</b></p>`,
          comment_count: 41,
          thanks_count: 69,
          type: "answer",
          thumbnail:
            "https://pic3.zhimg.com/50/v2-c82ff653b918de111219a25608cc1520_400x224.jpg",
        },
      ],
      fakeInfo: [],
    };
  },
  watch: {
    $route: "fetchDate",
  },
  created() {
    this.fetchDate();
  },
  methods: {
    fetchDate() {
      this.loading = true;
      if (this.$route.name === "Home") {
        this.getNormalList();
        this.loading = false;
      } else if (this.$route.name === "hot") {
        console.log("here is hot page");
      } else {
        this.getNormalList();
        this.loading = false;
      }
    },
    async getNormalList() {
      await request.get("/articles/list").then((res) => {
        if (res.data.status === 200) {
          this.fakeInfo = res.data.list;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.card-content {
  margin: -20px -20px 0 -20px;
  & > .answer-main {
    padding: 0 20px 20px 20px;
  }
}
</style>
