/* Ortak veri — oyun ve admin paneli aynı dosyayı kullanır */
const RAR={common:{ad:"Yaygın",c:"#a9bba8",ch:1,q:[6,14]},uncommon:{ad:"Ender",c:"#6fcf5f",ch:.75,q:[3,8]},rare:{ad:"Nadir",c:"#3fb8af",ch:.45,q:[2,4]},legendary:{ad:"Efsanevi",c:"#f2c14e",ch:.2,q:[1,2]},mythic:{ad:"Mitik",c:"#ff5d8f",ch:.07,q:[1,1]},event:{ad:"Etkinlik",c:"#c58bff",ch:1,q:[2,4]}};
const NUT={N:{ad:"Azot (N)",e:"🟦"},P:{ad:"Fosfor (P)",e:"🟧"},K:{ad:"Potasyum (K)",e:"🟪"}};
const SYMP={N:"Yapraklar soluk sarı, büyüme yavaş (klorozis).",P:"Yapraklar morumsu, kökler zayıf, çiçek az.",K:"Yaprak kenarları kurumuş, meyve cılız."};
const PL={
marul:{ad:"Marul",e:"🥬",need:"N",price:12,seed:6,grow:45,kg:.4,rar:"common",col:"#7bd957",sh:"leaf",fact:"Yapraktaki yeşil renk klorofilden gelir; klorofilin ortasında magnezyum (Mg) atomu vardır."},
havuc:{ad:"Havuç",e:"🥕",need:"P",price:15,seed:8,grow:60,kg:.3,rar:"common",col:"#f08a24",sh:"root",fact:"Turuncu rengi karoten pigmentinden gelir."},
domates:{ad:"Domates",e:"🍅",need:"P",price:32,seed:18,grow:100,kg:.5,rar:"uncommon",col:"#e4572e",sh:"bush",fact:"Kırmızı rengi likopen denen bir molekülden gelir."},
cilek:{ad:"Çilek",e:"🍓",need:"K",price:48,seed:28,grow:140,kg:.15,rar:"uncommon",col:"#ff5d8f",sh:"bush",fact:"Potasyum meyvenin tadını ve su dengesini düzenler."},
misir:{ad:"Mısır",e:"🌽",need:"N",price:115,seed:70,grow:220,kg:.6,rar:"rare",col:"#f2c14e",sh:"tall",fact:"Mısır çok azot ister; tarlalarda en çok azotlu gübre kullanılan bitkilerden biridir."},
karpuz:{ad:"Karpuz",e:"🍉",need:"K",price:200,seed:120,grow:300,kg:6,rar:"rare",col:"#3fb85f",sh:"melon",fact:"Karpuzun %92'si sudur."},
uzum:{ad:"Üzüm",e:"🍇",need:"P",price:540,seed:340,grow:420,kg:.8,rar:"legendary",col:"#8a5bd6",sh:"cluster",fact:"Mor rengi antosiyanin pigmentidir; pH'a göre renk değiştirir (lahana gibi)."},
ejder:{ad:"Ejder Meyvesi",e:"🐲",need:"N",price:1600,seed:1000,grow:600,kg:1.2,rar:"mythic",col:"#ff3d7f",sh:"flower",fact:"Efsane! Ama o da fotosentezle büyür: 6CO₂ + 6H₂O → glikoz + 6O₂."},
neon:{ad:"Neon Nilüfer",e:"🪷",need:"N",price:420,seed:250,grow:240,kg:.3,rar:"event",col:"#35f0ff",sh:"flower",fact:"Neon, tepkimeye girmeyen soygazlardandır. Neon tabelaların ışığı gazın uyarılmasıyla çıkar."},
altinelma:{ad:"Altın Elma",e:"🍎",need:"K",price:820,seed:500,grow:300,kg:.4,rar:"event",col:"#ffd24a",sh:"bush",fact:"Altın (Au) soy metaldir: paslanmaz, kolay tepkime vermez."},
kristalk:{ad:"Kristal Kaktüs",e:"🌵",need:"P",price:460,seed:280,grow:260,kg:.5,rar:"event",col:"#9be9ff",sh:"tall",fact:"Kristaller atomların düzenli dizilmesiyle oluşur."},
tuzgulu:{ad:"Tuz Gülü",e:"🌹",need:"K",price:920,seed:560,grow:320,kg:.2,rar:"event",col:"#ff9bd0",sh:"flower",fact:"Sofra tuzu (NaCl), Na⁺ ve Cl⁻ iyonlarının oluşturduğu bir kristaldir."}
};
const GR={
ure:{ad:"Üre",f:"CO(NH₂)₂",e:"🟦",price:12,kind:"fert",n:"N",ch:1,q:[5,12],d:"Azot (N) verir. Yaprak ve gövde büyümesi için."},
supfos:{ad:"Süperfosfat",f:"Ca(H₂PO₄)₂",e:"🟧",price:14,kind:"fert",n:"P",ch:1,q:[5,12],d:"Fosfor (P) verir. Kök ve çiçeklenme için."},
potas:{ad:"Potas",f:"KCl",e:"🟪",price:16,kind:"fert",n:"K",ch:1,q:[5,12],d:"Potasyum (K) verir. Meyve kalitesi ve su dengesi için."},
su:{ad:"Saf Su",f:"H₂O",e:"💧",price:8,kind:"boost",b:.1,ch:1,q:[6,14],d:"Bitkiye %10 ilerleme verir. Fazla tuzu seyreltir, her şeyi çözen çözücüdür."},
katalizor:{ad:"Katalizör Tozu",f:"Pt",e:"⚗️",price:60,kind:"boost",b:.35,ch:.45,q:[1,3],d:"Tepkimeyi tükenmeden hızlandırır: bitkiye %35 ilerleme."},
tampon:{ad:"Tampon Çözelti",f:"H₂PO₄⁻/HPO₄²⁻",e:"🫧",price:40,kind:"buf",ch:.5,q:[1,3],d:"pH değişimine direnir. Bitkiyi bir kez fazla gübre yanmasından korur."},
altin:{ad:"Altın Çözelti",f:"Au",e:"🏆",price:350,kind:"gold",ch:.12,q:[1,1],d:"Bitkiye Altın mutasyonu (×6) verir."},
kirec:{ad:"Kireç",f:"CaCO₃",e:"⚪",price:10,kind:"mat",ch:.8,q:[2,6],d:"Bazik bir tuz. Asidi nötrler. Sipariş malzemesi."},
kukurt:{ad:"Kükürt",f:"S",e:"🟡",price:10,kind:"mat",ch:.8,q:[2,6],d:"Toprakta bakteriler tarafından asite çevrilir. Sipariş malzemesi."},
indik:{ad:"Lahana İndikatörü",f:"antosiyanin",e:"🔮",price:12,kind:"mat",ch:.8,q:[2,6],d:"Mor lahana suyu; pH'a göre renk değiştirir. Sipariş malzemesi."},
tuz:{ad:"Sofra Tuzu",f:"NaCl",e:"🧂",price:6,kind:"mat",ch:.9,q:[3,8],d:"İyonik bileşik. Suda çözününce Na⁺ ve Cl⁻ olur. Sipariş malzemesi."},
co2:{ad:"CO₂ Tüpü",f:"CO₂",e:"☁️",price:18,kind:"mat",ch:.7,q:[2,5],d:"Karbondioksit. Fotosentezin hammaddesi. Sipariş malzemesi."},
mg:{ad:"Magnezyum Şeridi",f:"Mg",e:"🎇",price:22,kind:"mat",ch:.6,q:[1,4],d:"Parlak beyaz alevle yanan hafif metal. Sipariş malzemesi."},
azotg:{ad:"Azot Gazı Tüpü",f:"N₂",e:"🎈",price:20,kind:"mat",ch:.6,q:[1,4],d:"Havanın %78'i. Çok kararlı bir gaz. Sipariş malzemesi."}
};
const MUT={
islak:{ad:"Islak",e:"💧",x:2,c:"#4aa8ff"},soklu:{ad:"Şoklu",e:"⚡",x:4,c:"#ffe34a"},donmus:{ad:"Donmuş",e:"🧊",x:3,c:"#9be9ff"},
fosforlu:{ad:"Fosforlu",e:"🟢",x:5,c:"#6dff5a"},gokkusagi:{ad:"Gökkuşağı",e:"🌈",x:8,c:"#ff7ad9"},altin:{ad:"Altın",e:"🟡",x:6,c:"#f2c14e"}
};
const WX={
gunes:{id:"gunes",ad:"Güneşli",e:"☀️",g:1,mut:null,p:.38,d:"Normal hava. Fotosentez için ışık bol."},
yagmur:{id:"yagmur",ad:"Yağmur",e:"🌧️",g:1.4,mut:"islak",p:.22,d:"Bitkiler %40 hızlı büyür. Islak mutasyonu (×2) gelebilir."},
firtina:{id:"firtina",ad:"Fırtına",e:"⛈️",g:1.1,mut:"soklu",p:.12,d:"Yıldırım havadaki azotu bağlar. Şoklu mutasyonu (×4) gelebilir."},
kirag:{id:"kirag",ad:"Kırağı",e:"❄️",g:.8,mut:"donmus",p:.12,d:"Büyüme yavaşlar. Donmuş mutasyonu (×3) gelebilir."},
asit:{id:"asit",ad:"Asit Yağmuru",e:"☣️",g:.8,mut:"fosforlu",p:.12,d:"Büyüme yavaşlar. Fosforlu mutasyonu (×5) gelebilir."},
aurora:{id:"aurora",ad:"Aurora",e:"🌌",g:1.2,mut:"gokkusagi",p:.04,d:"Çok nadir! Gökkuşağı mutasyonu (×8) gelebilir."}
};
const WL=Object.values(WX);
const EV={sen:{ad:"Periyodik Şenlik",e:"🎆",seeds:["neon","altinelma"]},kristal:{ad:"Kristal Festivali",e:"💠",seeds:["kristalk","tuzgulu"]}};
const EVL=["sen","kristal"];
const PETS={tilki:{ad:"Katalizör Tilki",e:"🦊",fiyat:150,bilgi:"Katalizör tepkimeyi hızlandırır: bitkiler %50 hızlı büyür."},kaplumbaga:{ad:"Tampon Kaplumbağa",e:"🐢",fiyat:150,bilgi:"Tampon, pH değişimine direnir: bitki 1 doz fazla gübreye dayanır."},ari:{ad:"Tozlaşma Arısı",e:"🐝",fiyat:300,bilgi:"Çiçekler arıyla tozlaşır: yeni ekilen meyveler %12 daha büyük olur."}};
const CON={
azot:{t:"Azot (N)",x:"Azot; klorofilin ve proteinlerin yapısındadır. Eksikse yapraklar soluk sarı olur. Havanın %78'i azot gazıdır (N₂) ama bitki onu doğrudan kullanamaz.",how:"Azot eksikliği olan bir bitkiye Üre ver."},
fosfor:{t:"Fosfor (P)",x:"Fosfor, hücrede enerji taşıyan ATP'nin parçasıdır. Kök gelişimi ve çiçeklenme için gerekir. Eksikse yapraklar morumsu olur.",how:"Fosfor eksikliği olan bir bitkiye Süperfosfat ver."},
potasyum:{t:"Potasyum (K)",x:"Potasyum hücrelerin su dengesini ve meyve kalitesini düzenler. Eksikse yaprak kenarları kurur.",how:"Potasyum eksikliği olan bir bitkiye Potas ver."},
ozmos:{t:"Ozmos ve gübre yanığı",x:"Toprakta tuz derişimi artarsa su, bitkinin kökünden topraktaki derişik çözeltiye doğru çıkar (ozmos). Bitki susuzluktan yanar.",how:"Bir bitkiyi fazla gübreyle yak."},
ph:{t:"pH ölçeği",x:"pH, çözeltideki H⁺ miktarını gösterir. 7 nötr, 7'den küçük asit, büyük baz. Her 1 birim, 10 kat fark demektir. Çoğu bitki 6–7,5 arası sever.",how:"pH deneyini çöz."},
kirec:{t:"Kireç (CaCO₃)",x:"Kireç bazik bir tuzdur; asidi nötrler ve toprağın pH'ını yükseltir.",how:"Asidik toprak siparişini Kireç ile çöz."},
kukurt:{t:"Kükürt ve asitleşme",x:"Toprağa kükürt eklenince bakteriler onu sülfürik aside çevirir ve pH düşer. Bazik toprak için kullanılır.",how:"Bazik toprak siparişini Kükürt ile çöz."},
indik:{t:"Asit-baz indikatörü",x:"Mor lahanadaki antosiyanin pH'a göre renk değiştirir: asitte kırmızı/pembe, nötrde mor, bazda mavi-yeşil.",how:"İndikatör siparişini çöz."},
donma:{t:"Donma noktası alçalması",x:"Suya tuz gibi bir madde çözünce suyun donma noktası düşer. Karlı yollara tuz atılmasının sebebi budur.",how:"Tuz siparişini çöz."},
foto:{t:"Fotosentez",x:"Bitki, ışık enerjisiyle CO₂ ve suyu glikoza ve oksijene çevirir. CO₂ ne kadar çoksa (ışık yeterliyse) fotosentez o kadar hızlanır.",how:"CO₂ siparişini çöz."},
mg:{t:"Magnezyum ve klorofil",x:"Klorofil molekülünün tam ortasında bir magnezyum atomu vardır. Mg eksikse yapraklar solar.",how:"Magnezyum siparişini çöz."},
katalizor:{t:"Katalizör",x:"Katalizör, tepkimeyi hızlandırır ama kendisi tükenmez. Aktivasyon enerjisini düşürür.",how:"Katalizör siparişini çöz veya bir bitkiye katalizör ver."},
tampon:{t:"Tampon çözelti",x:"Tampon, az miktarda asit ya da baz eklendiğinde pH'ın değişmesine direnen çözeltidir. Kanımız da böyledir (pH ≈ 7,4).",how:"Tampon siparişini çöz veya bir bitkiyi Tampon ile koru."},
haber:{t:"Haber yöntemi",x:"N₂ çok kararlıdır. Haber yönteminde N₂ + 3H₂ → 2NH₃ (amonyak) üretilir. Gübrelerin çoğu bu amonyaktan yapılır.",how:"Azot gazı siparişini çöz."},
islak:{t:"Islak mutasyonu",x:"Su iyi bir çözücüdür; yağmurla mineraller çözünür ve köke ulaşır.",how:"Yağmurda ıslak mutasyonu yakala."},
soklu:{t:"Şoklu mutasyonu",x:"Yıldırımın sıcaklığı N₂ ile O₂'yi birleştirir (NO oluşur). Yağmurla toprağa nitrat olarak iner: doğal gübre!",how:"Fırtınada şoklu mutasyonu yakala."},
donmus:{t:"Donmuş mutasyonu",x:"Su donunca moleküller düzenli ve açık bir kafes yapar; hacim %9 artar. Buz bu yüzden suda yüzer.",how:"Kırağıda donmuş mutasyonu yakala."},
fosforlu:{t:"Fosforlu mutasyonu",x:"Bazı maddeler enerji alıp ışık olarak geri verir (lüminesans). Fosfor elementi de adını 'ışık taşıyan' anlamından alır.",how:"Asit yağmurunda fosforlu mutasyonu yakala."},
gokkusagi:{t:"Gökkuşağı mutasyonu",x:"Aurora'da yüksek enerjili parçacıklar atmosferdeki gaz atomlarını uyarır; atomlar farklı renklerde ışık yayar.",how:"Auroradan gökkuşağı mutasyonu yakala."},
altin:{t:"Altın mutasyonu",x:"Altın (Au) soy metaldir: havayla ve suyla tepkime vermez, paslanmaz.",how:"Altın mutasyonlu bir meyve topla."}
};
const ORD=[
{id:"o1",who:"Çiftçi Ayşe",e:"👩‍🌾",q:"Domateslerimin yaprakları mora çalıyor, kökleri çok zayıf. Hangi gübreyi vereyim?",h:"Kök ve çiçeklenme için gerekli element.",ok:["supfos"],w:{ure:"Üre azot verir: yaprak büyümesi içindir, kök için fosfor gerekir.",potas:"Potas meyve kalitesi içindir, kök gelişimi için değil."},y:"Fosfor kök gelişimini ve çiçeklenmeyi destekler.",c:"fosfor",rw:30},
{id:"o2",who:"Bahçıvan Mehmet",e:"👨‍🌾",q:"Marullarım soluk sarı ve bir türlü büyümüyor!",h:"Klorofil ve protein yapımı için gereken element.",ok:["ure"],w:{supfos:"Fosfor eksikliğinde yapraklar sarı değil morumsu olur.",potas:"Potasyum eksikliğinde yaprak kenarları kurur."},y:"Azot klorofilin ve proteinlerin parçasıdır; eksikse yapraklar solar.",c:"azot",rw:30},
{id:"o3",who:"Pazarcı Zehra",e:"🧑‍🌾",q:"Çileklerim cılız ve yaprak kenarları kurumuş. Ne vereyim?",h:"Su dengesini ve meyve kalitesini düzenleyen element.",ok:["potas"],w:{ure:"Azot yaprak büyümesini artırır ama kuruyan kenarlar potasyum eksikliğidir.",supfos:"Fosfor kök içindir."},y:"Potasyum hücrelerin su dengesini düzenler; eksikse yaprak kenarları kurur.",c:"potasyum",rw:30},
{id:"o4",who:"Çiftçi Hasan",e:"🧔",q:"Toprağımın pH'ı 4! Çok asidik. Nötrleştirmem lazım.",h:"Bazik bir tuz. Taş ocağında çıkar, tebeşirin ana maddesidir.",ok:["kirec"],w:{kukurt:"Kükürt toprağı daha da asitleştirir!",tuz:"Sofra tuzu nötr bir tuzdur, pH'ı pek değiştirmez."},y:"CaCO₃ bazik bir tuzdur; asitle tepkimeye girip onu nötrler.",c:"kirec",rw:35},
{id:"o5",who:"Yaşlı Fatma",e:"👵",q:"Toprağım aşırı bazik (pH 9), bitkilerim mineral alamıyor.",h:"Sarı renkli bir element; topraktaki bakteriler onu asite çevirir.",ok:["kukurt"],w:{kirec:"Kireç pH'ı daha da yükseltir. Zaten bazik!",tuz:"Tuz pH'ı düşürmez."},y:"Kükürt bakteriler aracılığıyla sülfürik aside dönüşür ve pH'ı düşürür.",c:"kukurt",rw:35},
{id:"o6",who:"Kimyager Deniz",e:"🧑‍🔬",q:"Şu sıvının asit mi baz mı olduğunu renkten anlamak istiyorum.",h:"Mor lahana suyu.",ok:["indik"],w:{su:"Saf su nötrdür ve renk değiştirmez, hiçbir şey göstermez.",tuz:"Tuz bir indikatör değildir."},y:"Antosiyanin asitte kırmızı, bazda mavi-yeşil olur.",c:"indik",rw:30},
{id:"o7",who:"Kış Bekçisi Kemal",e:"🧓",q:"Yollar buz tutacak. Suyun donma noktasını düşürmek için ne ekleyeyim?",h:"Mutfakta bulunur; suda Na⁺ ve Cl⁻ olarak çözünür.",ok:["tuz"],w:{su:"Saf su 0 °C'de donar.",kirec:"Kireç suda pek çözünmez."},y:"Çözünen madde suyun donma noktasını düşürür.",c:"donma",rw:30},
{id:"o8",who:"Seracı Nilüfer",e:"👩‍🔬",q:"Seramda fotosentezi hızlandırmak istiyorum. Havaya ne eklemeliyim?",h:"Bitki bu gazı alıp glikoz yapar.",ok:["co2"],w:{azotg:"Azot gazı bitkiye yaramaz, N₂ bitkinin kullanamayacağı kadar kararlıdır.",su:"Su da lazım ama havaya eklenmez."},y:"Fotosentez: CO₂ + H₂O + ışık → glikoz + O₂.",c:"foto",rw:30},
{id:"o9",who:"Profesör Zarbüstus",e:"🧙",q:"Klorofilin tam ortasındaki metal atomunu getir!",h:"Yanınca parlak beyaz alev verir, hafif bir metal.",ok:["mg"],w:{kirec:"Kalsiyum başka, klorofilin merkezinde değil.",kukurt:"Kükürt metal değildir."},y:"Klorofilin merkezinde magnezyum (Mg) atomu vardır.",c:"mg",rw:40},
{id:"o10",who:"Mühendis Burak",e:"👷",q:"Tepkimem çok yavaş. Kendisi tükenmeden hızlandıracak bir şey lazım.",h:"Platin (Pt) gibi bir madde.",ok:["katalizor"],w:{su:"Su tepkimeyi hızlandırmaz.",tuz:"Tuz bir katalizör değildir."},y:"Katalizör aktivasyon enerjisini düşürür ve tükenmez.",c:"katalizor",rw:40},
{id:"o11",who:"Eczacı Selin",e:"👩‍⚕️",q:"Çözeltime biraz asit damlasam bile pH'ın sabit kalmasını istiyorum.",h:"Zayıf asit ve eşlenik bazından oluşur.",ok:["tampon"],w:{su:"Su pH'ı nötre doğru seyreltir ama sabit tutmaz.",kirec:"Kireç pH'ı yükseltir."},y:"Tampon çözelti asit/baz eklenince pH değişimine direnir.",c:"tampon",rw:40},
{id:"o12",who:"Gübreci Kadir",e:"🧑‍🏭",q:"Havanın %78'ini oluşturan, Haber yöntemiyle amonyak yapılan gazı getir.",h:"N₂",ok:["azotg"],w:{co2:"CO₂ havanın yalnızca %0,04'ü.",su:"Su gaz değil."},y:"N₂ + 3H₂ → 2NH₃. Gübrelerin çoğu bu amonyaktan yapılır.",c:"haber",rw:45}
];
const lvlOf=xp=>Math.floor(Math.sqrt((xp||0)/20))+1;
