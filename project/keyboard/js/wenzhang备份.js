var inputText = document.getElementById("inputText");
var tips = document.getElementById("tips");
var choseArticle = document.getElementById("choseArticle");
var index;
var myLetters = document.getElementById("myLetters");

var articleArrs = [
    '请先去选择一篇文章！',
    '你是不是想有一位无话不谈能推心置腹的朋友呢？或者你是不是担心你的朋友会嘲笑你，会不理解你目前的困境呢？安妮·弗兰克想要的是第一种类型的朋友，于是她就把日记当成了她最好的朋友。安妮在第二次世界大战期间住在荷兰的阿姆斯特丹，她一家人都是犹太人，所以他们不得不躲藏起来，否则他们就会被德国纳粹抓去。她和她的家人躲藏了两年之后才被发现。在这段时间里，她唯一的忠实朋友就是她的日记了。她说，“我不愿像大多数人那样在日记中记流水账。我要把这本日记当作我的朋友，我要把我这个朋友称作基蒂”。现在，来看看安妮在藏身处躲了一年多之后的那种心情吧。我不知道这是不是因为我长久无法出门的缘故，我变得对一切与大自然有关的事物都无比狂热。我记得非常清楚，以前，湛蓝的天空、鸟儿的歌唱、月光和鲜花，从未令我心迷神往过。自从我来到这里，这一切都变了。比方说，有天晚上天气很暖和，我熬到 11点半故意不睡觉，为的是独自好好看看月亮。但是因为月光太亮了，我不敢打开窗户。',
    '赵钱孙李，周吴郑王。冯陈褚卫，蒋沈韩杨。朱秦尤许，何吕施张。孔曹严华，金魏陶姜。戚谢邹喻，柏水窦章。云苏潘葛，奚范彭郎。鲁韦昌马，苗凤花方。俞任袁柳，酆鲍史唐。费廉岑薛，雷贺倪汤。滕殷罗毕，郝邬安常。乐于时傅，皮卞齐康。伍余元卜，顾孟平黄。和穆萧尹，姚邵湛汪。祁毛禹狄，米贝明臧。计伏成戴，谈宋茅庞。熊纪舒屈，项祝董梁。杜阮蓝闵，席季麻强。贾路娄危，江童颜郭。梅盛林刁，钟徐邱骆。高夏蔡田，樊胡凌霍。虞万支柯，昝管卢莫。经房裘缪，干解应宗。丁宣贲邓，郁单杭洪。包诸左石，崔吉钮龚。程嵇邢滑，裴陆荣翁。荀羊於惠，甄曲家封。芮羿储靳，汲邴糜松。井段富巫，乌焦巴弓。牧隗山谷，车侯宓蓬。全郗班仰，秋仲伊宫。宁仇栾暴，甘钭厉戎。祖武符刘，景詹束龙。叶幸司韶，郜黎蓟薄。印宿白怀，蒲邰从鄂。索咸籍赖，卓蔺屠蒙。池乔阴鬱，胥能苍双。闻莘党翟，谭贡劳逄。姬申扶堵，冉宰郦雍。郤璩桑桂，濮牛寿通。边扈燕冀，郏浦尚农。温别庄晏，柴瞿阎充。慕连茹习，宦艾鱼容。向古易慎，戈廖庾终。暨居衡步，都耿满弘。匡国文寇，广禄阙东。欧殳沃利，蔚越夔隆。师巩厍聂，晁勾敖融。冷訾辛阚，那简饶空。曾毋沙乜，养鞠须丰。巢关蒯相，查后荆红。游竺权逯，盖益桓公。万俟司马，上官欧阳。夏侯诸葛，闻人东方。赫连皇甫，尉迟公羊。澹台公冶，宗政濮阳。淳于单于，太叔申屠。公孙仲孙，轩辕令狐。钟离宇文，长孙慕容。鲜于闾丘，司徒司空。丌官司寇，仉督子车。颛孙端木，巫马公西。漆雕乐正，壤驷公良。拓跋夹谷，宰父谷梁。晋楚闫法，汝鄢涂钦。段干百里，东郭南门。呼延归海，羊舌微生。岳帅缑亢，况郈有琴。梁丘左丘，东门西门。商牟佘佴，伯赏南宫。墨哈谯笪，年爱阳佟。第五言福，百家姓终。',
    '京中有善口技者。会宾客大宴，于厅事之东北角，施八尺屏障，口技人坐屏障中，一桌、一椅、一扇、一抚尺而已。众宾团坐。少顷，但闻屏障中抚尺一下，满坐寂然，无敢哗者。遥闻深巷中犬吠，便有妇人惊觉欠伸，其夫呓语。既而儿醒，大啼。夫亦醒。妇抚儿乳，儿含乳啼，妇拍而呜之。又一大儿醒，絮絮不止。当是时，妇手拍儿声，口中呜声，儿含乳啼声，大儿初醒声，夫叱大儿声，一地齐发，众妙毕备。满坐宾客无不伸颈，侧目，微笑，默叹，以为妙绝。未几，夫齁声起，妇拍儿亦渐拍渐止。微闻有鼠作作索索，盆器倾侧，妇梦中咳嗽。宾客意少舒，稍稍正坐。忽一人大呼“火起”，夫起大呼，妇亦起大呼。两儿齐哭。俄而百千人大呼，百千儿哭，百千犬吠。中间力拉崩倒之声，火爆声，呼呼风声，百千齐作；又夹百千求救声，曳屋许许声，抢夺声，泼水声。凡所应有，无所不有。虽人有百手，手有百指，不能指其一端；人有百口，口有百舌，不能名其一处也。于是宾客无不变色离席，奋袖出臂，两股战战，几欲先走。忽然抚尺一下，群响毕绝。撤屏视之，一人、一桌、一椅、一扇、一抚尺而已。',
    '世有伯乐，然后有千里马。千里马常有，而伯乐不常有。故虽有名马，祗辱于奴隶人之手，骈死于槽枥之间，不以千里称也。马之千里者，一食或尽粟一石。食马者不知其能千里而食也。是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？策之不以其道，食之不能尽其材，鸣之而不能通其意，执策而临之，曰：“天下无马！”呜呼！其真无马邪？其真不知马也！',
    '庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫霪雨霏霏，连月不开，阴风怒号，浊浪排空；日星隐曜，山岳潜形；商旅不行，樯倾楫摧；薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。至若春和景明，波澜不惊，上下天光，一碧万顷；沙鸥翔集，锦鳞游泳；岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲；居庙堂之高则忧其民；处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎。噫！微斯人，吾谁与归？时六年九月十五日。',
    '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。',
    '丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。',
    '真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。这是怎样的哀痛者和幸福者?然而造化又常常为庸人设计，以时间的流驶，来洗涤旧迹，仅使留下淡红的血色和微漠的悲哀。在这淡红的血色和微漠的悲哀中，又给人暂得偷生，维持着这似人非人的世界。我不知道这样的世界何时是一个尽头!我们还在这样的世上活着;我也早觉得有写一点东西的必要了。离三月十八日也已有两星期，忘却的救主快要降临了罢，我正有写一点东西的必要了。我在十八日早晨，才知道上午有群众向执政府请愿的事;下午便得到噩耗，说卫队居然开枪，死伤至数百人，而刘和珍君即在遇害者之列。但我对于这些传说，竟至于颇为怀疑。我向来是不惮以最坏的恶意，来推测中国人的，然而我还不料，也不信竟下劣凶残到这地步。况且始终微笑着的和蔼的刘和珍君，更何至于无端在府门前喋血呢?然而即日证明是事实了，作证的便是她自己的尸骸。还有一具，是杨德群君的。而且又证明着这不但是杀害，简直是虐杀，因为身体上还有棍棒的伤痕。但段政府就有令，说她们是“暴徒”!但接着就有流言，说她们是受人利用的。惨象，已使我目不忍视了;流言，尤使我耳不忍闻。我还有什么话可说呢?我懂得衰亡民族之所以默无声息的缘由了。沉默呵，沉默呵!不在沉默中爆发，就在沉默中灭亡。亲戚或余悲，他人亦已歌，死去何所道，托体同山阿。',
    '君子曰：学不可以已。青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。吾尝终日而思矣，不如须臾之所学也。吾尝跂而望矣，不如登高之博见也。登高而招，臂非加长也，而见者远；顺风而呼，声非加疾也，而闻者彰。假舆马者，非利足也，而致千里；假舟楫者，非能水也，而绝江河。君子生非异也，善假于物也。积土成山，风雨兴焉；积水成渊，蛟龙生焉；积善成德，而神明自得，圣心备焉。故不积跬步，无以至千里；不积小 流，无以成江海。骐骥一跃，不能十步；驽马十驾，功在不舍。锲而舍之，朽木不折；锲而不舍， 金石可镂。蚓无爪牙之利，筋骨之强，上食埃土，下饮黄泉，用心一也。蟹六跪而二螯，非蛇鳝之穴无可寄托者，用心躁也。',
    '晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷，渔人甚异之。复前行，欲穷其林。林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田美池桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。见渔人，乃大惊，问所从来。具答之。便要还家，设酒杀鸡作食。村中闻有此人，咸来问讯。自云先世避秦时乱，率妻子邑人来此绝境，不复出焉，遂与外人间隔。问今是何世，乃不知有汉，无论魏晋。此人一一为具言所闻，皆叹惋。余人各复延至其家，皆出酒食。停数日，辞去。此中人语云：“不足为外人道也。”既出，得其船，便扶向路，处处志之。及郡下，诣太守，说如此。太守即遣人随其往，寻向所志，遂迷，不复得路。南阳刘子骥，高尚士也，闻之，欣然规往。未果，寻病终，后遂无问津者。',
    '余幼时即嗜学。家贫，无从致书以观，每假借于藏书之家，手自笔录，计日以还。天大寒，砚冰坚，手指不可屈伸，弗之怠。录毕，走送之，不敢稍逾约。以是人多以书假余，余因得遍观群书。既加冠，益慕圣贤之道，又患无砚师、名人与游，尝趋百里外，从乡之先达执经叩问。先达德隆望尊，门人弟子填其室，未尝稍降辞色。余立侍左右，援疑质理，俯身倾耳以请；或遇其叱咄，色愈恭，礼愈至，不敢出一言以复；俟其欣悦，则又请焉。故余虽愚，卒获有所闻。当余之从师也，负箧曳屣，行深山巨谷中，穷冬烈风，大雪深数尺，足肤皲裂而不知。至舍，四肢僵劲不能动，媵人持汤沃灌，以衾拥覆，久而乃和。寓逆旅主人，日再食，无鲜肥滋味之享。同舍生皆被绮绣，戴珠缨宝饰之帽，腰白玉之环，左佩刀，右备容臭，煜然若神人；余则缊袍敝衣处其间，略无慕艳意。以中有足乐者，不知口体之奉不若人也。盖余之勤且艰若此。今虽耄老，未有所成，犹幸预君子之列，而承天子之宠光，缀公卿之后，日侍坐备顾问，四海亦谬称其氏名，况才之过于余者乎？今诸生学于太学，县官日有廪稍之供，父母岁有裘葛之遗，无冻馁之患矣；坐大厦之下而诵诗书，无奔走之劳矣；有司业、博士为之师，未有问而不告，求而不得者也；凡所宜有之书，皆集于此，不必若余之手录，假诸人而后见也。其业有不精，德有不成者，非天质之卑，则心不若余之专耳，岂他人之过哉！东阳马生君则，在太学已二年，流辈甚称其贤。余朝京师，生以乡人子谒余，撰长书以为贽，辞甚畅达，与之论辩，言和而色夷。自谓少时用心于学甚劳，是可谓善学者矣！其将归见其亲也，余故道为学之难以告之。谓余勉乡人以学者，余之志也；诋我夸际遇之盛而骄乡人者，岂知余者哉！',
    '金溪民方仲永，世隶耕。仲永生五年，未尝识书具，忽啼求之。父异焉，借旁近与之，即书诗四句，并自为其名。其诗以养父母、收族为意，传一乡秀才观之。自是指物作诗立就，其文理皆有可观者。邑人奇之，稍稍宾客其父，或以钱币乞之。父利其然也，日扳仲永环谒于邑人，不使学。余闻之也久。明道中，从先人还家，于舅家见之，十二三矣。令作诗，不能称前时之闻。又七年，还自扬州，复到舅家问焉，曰“泯然众人矣。”王子曰：仲永之通悟，受之天也。其受之天也，贤于材人远矣。卒之为众人，则其受于人者不至也。彼其受之天也，如此其贤也，不受之人，且为众人；今夫不受之天，固众人，又不受之人，得为众人而已耶？',
    '盼望着，盼望着，东风来了，春天的脚步近了。 一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。 小草偷偷地从土地里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻俏俏的，草软绵绵的。 桃树，杏树，梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味；闭了眼，树上仿佛已经满是桃儿，杏儿，梨儿。花下成千成百的蜜蜂嗡嗡的闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里像眼睛像星星，还眨呀眨。 “吹面不寒杨柳风”，不错的，像母亲的手抚摸着你，风里带着些心翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。鸟儿将巢安在繁花嫩叶当中，高兴起来，呼朋引伴的卖弄清脆的歌喉，唱出婉转的曲子，跟清风流水应和着。牛背上牧童的短笛，这时候也成天嘹亮的响着。 雨是最寻常的，一下就是三两天。可别恼。看，像牛牦，像花针，像细丝，密密的斜织着，人家屋顶上全笼着一层薄烟。树叶却绿得发亮，小草也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。在乡下，小路上，石桥边，有撑着伞慢慢走着的人，地里还有工作的农民，披着所戴着笠。他们的房屋稀稀疏疏的，在雨里静默着。 天上的风筝渐渐多了，地上的孩子也多了。城里乡下，家家户户，老老小小，也赶趟似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事儿去。“一年之计在于春”，刚起头儿，有的是功夫，有的是希望。 春天像刚落地的娃娃，从头到脚都是新的，它生长着。 春天像小姑娘，花枝招展的笑着走着。 春天像健壮的青年，有铁一般的胳膊和腰脚，领着我们向前去。',
    '臣密言：“臣以险衅，夙遭闵凶。生孩六月，慈父见背；行年四岁，舅夺母志。祖母刘，愍臣孤弱，躬亲抚养。臣少多疾病。九岁不行。零丁孤苦，至于成立。既无叔伯，终鲜兄弟。门衰祚薄，晚有儿息。外无期功强近之亲，内无应门五尺之童。茕茕孑立，形影相吊。而刘夙婴疾病，常在床蓐；臣待汤药，未尝废离。逮奉圣朝，沐浴清化。前太守臣逵，察臣孝廉；后刺史臣荣，举臣秀才。臣以供养无主，辞不赴命。诏书特下，拜臣郎中。寻蒙国恩，除臣洗马。猥以微贱，当待东宫，非臣陨首所能上报。臣具以表闻，辞不就职。诏书切峻，责臣逋慢。郡县逼迫，催臣上道。州司临门，急于星火。臣欲奉诏奔驰，则以刘病日笃；欲苟顺私情，则告诉不许。臣之进退，实为狼狈。伏惟圣朝，以孝治天下。凡在故老，犹蒙矜育；况臣孤苦，特为尤甚。且臣少事伪朝，历职郎署，本图宦达，不矜名节。今臣亡国贱俘，至微至陋。过蒙拔擢，宠命优渥，岂敢盘桓，有所希冀？但以刘日薄西山，气息奄奄，人命危浅，朝不虑夕。臣无祖母，无以至今日？祖母无臣，无以终余年。母孙二人，更相为命。是以区区不能废远。臣密今年四十有四，祖母刘今年九十有六；是以臣尽节于陛下之日长，报刘之日短也。乌鸟私情，愿乞终养！臣之辛苦，非独蜀之人士，及二州牧伯，所见明知；皇天后土，实所共鉴。愿陛下矜愍愚诚，听臣微志。庶刘侥幸，卒保余年。臣生当陨首，死当结草。臣不胜犬马怖惧之情，谨拜表以闻！”',
    '晏子使楚。楚人以晏子短，楚人为小门于大门之侧而延晏子。晏子不入，曰：“使狗国者从狗门入。今臣使楚，不当从此门入。”傧者更道，从大门入。见楚王，王曰：“齐无人耶？使子为使。”晏子对曰：“齐之临淄三百闾，张袂成阴，挥汗成雨，比肩继踵而在，何为无人？”王曰：“然则何为使子？”晏子对曰：“齐命使，各有所主。其贤者使使贤主，不肖者使使不肖主。婴最不肖，故宜使楚矣。”晏子将使楚。楚王闻之，谓左右曰：“晏婴，齐之习辞者也。今方来，吾欲辱之，何以也？”左右对曰：“为其来也，臣请缚一人，过王而行，王曰：‘何为者也？’对曰：‘齐人也。’王曰：‘何坐？’曰：‘坐盗。’晏子至，楚王赐晏子酒，酒酣，吏二缚一人诣王。王曰：“缚者曷为者也？”对曰：“齐人也，坐盗。”王视晏子曰：“齐人固善盗乎？”晏子避席对曰：“婴闻之，橘生淮南则为橘，生于淮北则为枳，叶徒相似，其实味不同。所以然者何？水土异也。今民生长于齐不盗，入楚则盗，得无楚之水土使民善盗耶？”王笑曰：“ 圣人非所与熙也，寡人反取病焉。”'
    
];

var articleIndex = localStorage.getItem("articleIndex");
var article = articleArrs[articleIndex];
var hanziArrs = article||getRandomArrayElements(articleArrs, 1);
// console.log(hanziArrs)
var sound = document.getElementById("audio");
var resultBox = document.getElementById("resultBox");

// 总字数
var hanziLength = hanziArrs.length;
var maxl = hanziLength;
var oldLetterArr =  hanziArrs;
var letterNum = document.getElementById("letterNum");

// 页面初始化
var bgBox = document.getElementsByClassName("bgBox")[0];
window.onload = function(){
    letterNum.innerHTML = maxl;
    inputText.setAttribute("maxlength",maxl);
    inputText.setAttribute("rows",Math.ceil(maxl/31));
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+maxl+')');
    var rows = Math.ceil(maxl/31);
    console.log(rows);
    for(var i=0;i<rows;i++){
        bgBox.innerHTML+='<div>'+i+'</div>'
    }
    
    // console.log(oldLetterArr);
    for(var i=0;i<oldLetterArr.length;i++){
        testLetter.innerHTML += '<span class="old">'+oldLetterArr[i]+'</span>'
    }
}

var oldSpans = document.getElementsByClassName("old");
var resultBtn = document.getElementById("resultBtn");

function showResult(){
    resultBtn.style.display = "none";
    startBtn.style.display = "none";
    tips.style.color = 'orange';
    clearInterval(checkOver);
    clearInterval(timer);
    var str = inputText.value;
    newLettersArr = str.split("");
    for(var i=0;i<newLettersArr.length;i++){ 
        myLetters.innerHTML += '<span class="new">'+newLettersArr[i]+'</span>'
    }
    inputText.style.display = "none";
    myLetters.style.display = "block";
    var newSpans = document.getElementsByClassName("new");
    // console.log(newLettersArr)
    // console.log(oldLetterArr)
    for(var j=0;j<oldLetterArr.length;j++){
        if(newLettersArr[j]!==oldLetterArr[j]){
            oldSpans[j].setAttribute("class","old err");
            newSpans[j].setAttribute("class","new err");
        }else{
            oldSpans[j].setAttribute("class","old right");
            newSpans[j].setAttribute("class","new right");
        }
    }
}

// 刷新
function reload(){
    window.location.reload();
}

// var letterNumMsg = document.getElementById("letterNumMsg");
// var rateBox = document.getElementById("rateBox");

// 检查
// var checkOver = setInterval(()=>{
//     var myCoded = inputText.value.split("");
//     // console.log(myCoded)
//     letterNumMsg.innerHTML = '已输入'+inputText.value.length+'/'+maxl+'字';

//     if(inputText.value.length>=maxl){
//         resultBtn.removeAttribute("disabled");
//     }

//     var overLetterLen = inputText.value.length;
//     for(var i=0;i<oldSpans.length;i++){
//         oldSpans[i].setAttribute("class","old");
//     }
//     for(var j=0;j<overLetterLen;j++){
        
//         if(myCoded[j]!==oldLetterArr[j]){
//             oldSpans[j].setAttribute("class","old red");
//         }else{
//             oldSpans[j].setAttribute("class","old over");
//         }
//     }
//     var wrongNum = document.getElementsByClassName("red").length;
//     var rightNum = Number(overLetterLen)-Number(wrongNum);
//     var successRate = ((rightNum/overLetterLen)*100).toFixed(2);
//     var minute = document.getElementById("minute").innerHTML;
//     var second = document.getElementById("second").innerHTML;
//     var s = Number(minute)*60+Number(second);
//     var typeSpeed = ((overLetterLen/s)*60).toFixed(0); 
//     rateBox.innerHTML = `，正确率：${successRate}%，速率：${typeSpeed}字/分，`
    
// },300)

var popup = document.getElementById("popup");
var textNum = document.getElementById("textNum");
var nextOpen = document.getElementById("nextOpen");
var nextClose = document.getElementById("nextClose");
var setTips = document.getElementById("setTips");

// 设置按钮显示弹窗
function newSetup(){
    popup.style.display = "block";
}

// 关闭弹窗
function closePop(){
    index = choseArticle.selectedIndex;
    // options[index].setAttribute("selected");
    localStorage.setItem("articleIndex",index);
    
    var num = articleArrs[index].length;
    inputText.setAttribute("maxlength",maxl);
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+num+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+num+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+num+')');
    window.location.reload();
}

// 数组中随机取
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}