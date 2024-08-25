'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5535cdef54edcff338c118e1ba985970",
"index.html": "1428f9efcc88d4c5f4184a5ae2ba19b5",
"/": "1428f9efcc88d4c5f4184a5ae2ba19b5",
"main.dart.js": "91dc83013d8b2be2de9d093894daa656",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "39a21fb970054deaffce9b457f418bb4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "34db213826f83d85ad4e67a4fe626ab3",
".git/config": "5411d954a4ea01968713d3c8b3ea40fb",
".git/objects/95/3eb945de7e778cd2cc2144d8f05107be11e372": "4faf1648f1a333381fdcd046f2c27904",
".git/objects/0c/c9c21f7aa8e086a605e0bf5752371a3f3c318a": "d10127b15e09da7cb102de07d362545b",
".git/objects/0c/f923a182d9e3d4f5b4f51cd89353c849981a89": "3d6a25f096e373d7532a4d95bb3236e6",
".git/objects/66/b0925d2a51025bfaef94f95a09308a4fe50ffc": "7c17e405eb8810db2ce587bd43f766cb",
".git/objects/50/fff9ca472763fd234b3d67520feea8c389ea28": "b4376eafefe24f6f60d26cc0a0c474c6",
".git/objects/68/b5336c62932dcf099d2e240275f900dbffcd3a": "45ad866ac76c16b47af9277b80fa3de1",
".git/objects/68/74dc912b3416799811843e45fd94c556b7290b": "00aca1b5c1416f4ccc203778683edee5",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9b/b84fcb74b0e577052bb85906649e1b4e346b0b": "def1ade8ef5436c7c59b62a156deb4c9",
".git/objects/6a/b792c51d94442c52fa49ef66d5ce0dca8b77c2": "de798c701b2da0c232454e1c8c0fee84",
".git/objects/35/47b7575434c90d69c9d420b95dc60c0d4a2433": "134e9d9bbfb41a523143710c584dbf4a",
".git/objects/35/826e01cd80c6681418f7ae54101e0c57cbf72e": "4d2a8460a9fb819f33cac051dab43c11",
".git/objects/35/8e35167b2ff72a2cabdb6d0ae6b3d7722f60f3": "805b7939a85d191c00aecad095328b00",
".git/objects/58/ce5ef18ee5815596f942d01d21eb165d5a7b5d": "9191b31374f3da351d018bc7f47cb82e",
".git/objects/93/72861dbdfee8bce01cb2392a7a558001ec85a5": "227de59cfa60f1217daaece1383e8b28",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/5a/b1b8ba6078ff56af06cb9b23275388b0cb62e9": "a0916ffa890e7c4a37c67abb353bb9d1",
".git/objects/5f/c63491597d051edb0a9943e6a60406e59da5af": "a80790910def4ed34e1f880bd42098d9",
".git/objects/02/74d73e97483df3d4d324ed4fd5931a99450b81": "485693e93c571428da46396d98a4928d",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/bb/1b7c6ccd09600dd7b8f3c1ebc9ee7d9caa92e3": "3e302887df879f5163e3aa728d0bd907",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/e8eeb56c134f24101d62023ab221744673a25c": "bbc69521066cbc5e13d95095aeb8ce81",
".git/objects/be/9f1456dc6a68b9290a2a8e326d96e8066f945a": "71011181d88cbb2ae5b84122c115c7d6",
".git/objects/da/c30170be32aa8d75dd0f0fe7e5ceb2cec99c01": "12b11d5093799266fdde6eac49d206cd",
".git/objects/bd/d357167e1ec44f567708174f8fba7cd0ced5f8": "ca59c080fbc7b40ff622fd7458dc8b01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/0bce49bb9a896be2c3ad0f4c103bb87d50d030": "b53a29d1cbda1753e1e301c2c52208c9",
".git/objects/ab/57dac50ca8dfc74428ad362772c8a63b57f6e3": "56d85a07a2d704500e0c794f7dd92e6a",
".git/objects/e5/ea5432abbe851a1dc5f977cb3180ba9cc667e4": "705d4526bf16fb01fd56aa41c7d9275a",
".git/objects/e2/135a57d5b7149f9efdf20b31fe4823ff55b906": "c59318b8dd616b5b9c6da982daef15f4",
".git/objects/e2/a88be731dc9d212121868eb49c5fb772061ee1": "9a6950a0f41d349932253bcac3a7142f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/a525bae065ce287588b39bd30e05463fda6c7e": "64340c001f4b232288a6544563985311",
".git/objects/ee/543fa9212b52ccb80069f0534544bc8cbf93e9": "763eb5ab94fdf9b5e5df3a7afa4b4644",
".git/objects/c9/2c1651bb1b7e06679489c84abebf7041162a7a": "05aecd6165e9fc44effd906ef051fc0b",
".git/objects/fd/66ba5676b995d2a75caff73601f6aca5eae87c": "00ea1c675abdbd9a00661c7e08daff45",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/8b0b520b393ac154805d8d6aabe99ba1673a13": "6cd249be601b965ec4d2dc8be1812d61",
".git/objects/fb/f8e23059d19357aec37e5c945b5da71b4faa94": "5856ecca396eb666de124f76bb4b8eeb",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/d2b85af7c87b93f05dd2d03506f8ce62717953": "f55c738366e3152454f56bb874b66631",
".git/objects/7c/cb8c4ec9c768e4d32694487afd5df86f8f4700": "3f3dcf4c11edb0ba3d071f35d5573a38",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/aac36823fabe327198e2ecbaa28a0f6a3c98be": "8a4de8205e0d402a3349875368dfcb73",
".git/objects/87/017f2b1d025efed4a7194a61665e58bdb60f9b": "0207b6180660378983fbf2bf3e88ce34",
".git/objects/17/9422833594c3301932ad91f49ce47dbb0f4b32": "8d47ace18ef895bb32906ef7f9544380",
".git/objects/7b/5fcf75bc526ab045e77889deb75af1748d2b1d": "dac77c99ff174f9605191a75bfbd9607",
".git/objects/8a/8223e30942e1eeca8baf675f222a03139a9454": "56556f3e42df6f97fbbf3053e29d9b58",
".git/objects/8a/f3bcac63e01add1e08370519896c3b8c2867cc": "30c4b0a51cd60f873b8ac114579989cf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/c5ad51f954f73b5f5489ccd2d652b0570b54d4": "3951e4e08419f84e72ae3685473fb6f3",
".git/objects/4c/1d740a10c7b37653c00934f583fc177e928fa8": "b7bc5fb1af15023e9c4f80a67063891d",
".git/objects/26/d145c97567a9ad09fcc3a4f260dd959d6837ff": "6910d07b5f9986fda280dab04bd2ece9",
".git/objects/4d/3601e489a51f2b9285d426bf724852263ec004": "4f544416c433526944982c380a369027",
".git/objects/75/a21251d4e810e31f639c18e693371164597ef3": "bf1b76a3932f7706f7d0ca7b0f086cc6",
".git/objects/72/dead27a06c0cc76f56d0830e1e42b9492136d4": "ed255036cfd7efa4cb440c6af76d1bd0",
".git/objects/2f/0d972465edfe512ba0fbba3cc1ab6c9cfa9e98": "4cc57d9d9bcf638641bd6f4075908f98",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/9a/a8d20027d1c4e2f17622a1ccb99de68b4bb4e1": "ccfb978c28381446d721e59799b9aa61",
".git/objects/09/7f7c4713490c77ef507323118c0488226c1ab7": "ff4ba57618882a217b0f43665e695ee5",
".git/objects/53/d8ed6dcce7d507e2203b935fdfe387472b3ed1": "4a9a7697a2c58261156889df54904f33",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/e7e45f95a2de6873fe60a0bef63e759542c688": "548823a344d9ad8d077a2c04987d1b4e",
".git/objects/37/0e9917538e27a1e12f65361e29baed8af06957": "8c866c0a2f6fc491a8c93f4f7e9ebda9",
".git/objects/37/78fb4088550d875b137f3a628443318ad3419d": "be259434f1c6bc421b254a199e8511f9",
".git/objects/08/8b95f7b536a0e64d578b71b02b6b493c3fe1fa": "ff75b3de2c5a3ab4df9b3a00faa93b6f",
".git/objects/0a/a7e9a0302f300cc407f4fbd2382d87b45c07cb": "6f97511f9093c3eaee6445992523bfac",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4a2d20af894bf04de15d465e80b0b4f236cf85": "b28b93fd66c5a512d6e60a0aefdddda7",
".git/objects/d4/76ef290fc3a8d427840ca3af8030f65003005b": "fdec9dbccc113ddcf9b39ab00c6fb8a4",
".git/objects/a0/a39016c1cfd497552b496e904242e3c0c05ed7": "5e7c7d2849b4f07d403354917061ca2f",
".git/objects/b1/69a5c26dfa7a2f9e270276474a92dd98aad14d": "7900201b37ac0a587519858e9ed7e581",
".git/objects/dc/8ee22a528fa5a8f895d5996344c20ad94b895b": "34949317ac5a8df054369fee457eca7d",
".git/objects/d5/7cfbcbb456f10b5191e650176331a7e8278aab": "d0ea379bb53cd37a5e7291dfb89f8010",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/8b3ff1f72def131bfb6c7c252eca0134f0afa4": "1d79c68a1bb90e63ad3188731c60db01",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/9b0b2644354783166c89f1c4344a6880db89bf": "d8d903a778924681316e0943ada66480",
".git/objects/b9/07ffc82cd963a0b6db44782678b7c3c58ad07c": "3ae4b1e4723a682a88fa944d46da34f4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/5e647091f9dcbf61b9e8a23186817770a1d847": "bbace1c463ee610e446a58d906419599",
".git/objects/e1/b40fdb50767cfa4644c29bf785b26fc573fa48": "999cc89ed0ded79cfdb472cf4b6307e8",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cd/ee41fed0feb8b6482f0ec6d17bee574c737d93": "f89b7e5917a215e1308f784ac3f89f91",
".git/objects/e6/fb58f4c02da2576353f8bd804419cab632e71f": "29f3b8b96bbe47c55e51da5a91036eaa",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/407896c2053144a9b957613b2f455678f5bd37": "043851962870e0e0405b135b43ce1d78",
".git/objects/f7/8d10e7b48046aad93fc73158aa4d819c08845e": "d453cccb6e70d673ce562445f3fe33af",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/bcacebb2099dda611983fc8cf937f362a4feca": "5ab43e37d168a72c917ac4bd3a469436",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f8/7f89195cef68f3e993c1daeb64d05a133c9222": "b481c9c397034c1560141dc368edc06b",
".git/objects/f8/9a7b3037732ad90df2af390a1d5bf92cc7dd58": "6bb3bd5e87ae09b67341f796ab463ee5",
".git/objects/e0/c75142ff435f80b3a3dcebb72af3d57be6b66a": "d77435a8c31db22370ea5969e48bd648",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/ecb68ced5922bdbce06eca6aef2ba5221ab084": "c8fd116143e2c2c21d036f1b71a572fa",
".git/objects/1e/5512f892ac94daa0e31bf9d6f761a2e4ba5074": "fa574faf6b51f7d6bb05d7b6360961d7",
".git/objects/4a/9dc1c7941a47797f3359655f9af54b2fc6c007": "d69cc36e5bb3a9b7b19c82d803e9ff12",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/15/d8cc42d26494e1b0d394ac3e9fe565191f5aae": "86232a8a4e59aaa89f32833a68024063",
".git/objects/71/3a67a32ea049d76e76fdc9d843ad022eb56b8e": "12fc7925fca0e3c7953a180cb4756e86",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/7375caaf08b236d6d300aab8a47fc7a9a34616": "26b29fee350bd1312a6258031f143b2e",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/7f/636104789c182f2ea3d8f096e4e6ad12ee52eb": "cb693697ccfa1fade97b47bc00afa491",
".git/objects/8e/8369f07dbe8d826845a830c2e33a2c6217d184": "82fb56f257e8d03fac706ff0a285f0cb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6323c5a7428cdde2c0460f5ce8d7f47e",
".git/logs/refs/heads/main": "6323c5a7428cdde2c0460f5ce8d7f47e",
".git/logs/refs/remotes/origin/main": "e5ac1b8049a496e1cd5b38ef8a19164d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "09367ac542fd77fbe18ff283a23979a7",
".git/refs/remotes/origin/main": "09367ac542fd77fbe18ff283a23979a7",
".git/index": "cf67e5376c04e74e7581d25e156c05f9",
".git/COMMIT_EDITMSG": "9f275d51245f0883263adc080f33db5f",
"assets/AssetManifest.json": "868e06ac4b94cf6e5d545c08c3db97f8",
"assets/NOTICES": "10569717d2fb2bcd0715779e07a484b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "456b296ebef908b2dc8990759eda7896",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8c0bfe523df405e9a267177febc25632",
"assets/fonts/MaterialIcons-Regular.otf": "c2ffce43a9ad0f54a06104e514273a73",
"assets/assets/images/test.gif": "f37a48359ab6568139a8bf37c04e1800",
"assets/assets/images/image_welcome4.jpg": "dbb79e0ae4c8a78476110a4f1a52083d",
"assets/assets/images/loginImage.png": "896aac1a0862d9af6cdbd2f18164b047",
"assets/assets/images/image_welcome1.jpg": "5fd625f277bd5211f50d1dfd5db34456",
"assets/assets/images/image_welcome3.jpg": "96beafc33a4130fb36be563423f63c89",
"assets/assets/images/success.gif": "3ddd67c6274a87b4e556df5052266e3f",
"assets/assets/images/image_welcome2.jpg": "f10bf4c005a1c06d3a21b5aced5aca6c",
"assets/assets/images/banner2.jpg": "22fa94ce7e47695790d4d2f6bac5af2e",
"assets/assets/images/banner3.jpg": "2d3404f32e5e2316aa373ddaf73a72c5",
"assets/assets/images/banner1.jpg": "c96456af3e3f8d5042f0982237f4ca7f",
"assets/assets/images/banner0.jpg": "4468c6b29d7627085e38e3d86726700a",
"assets/assets/images/OTPPage.png": "e506af9aa59c149e6e097f9d670279ff",
"assets/assets/images/ForgotPassword.gif": "a51b1c17635145178a552cbe1ee143ac",
"assets/assets/images/NewPassWord.gif": "9bf1851afec6e6f2cf60e3d3ff8d6d48",
"assets/assets/images/nodata.png": "ecd19770a9904d9fbec9203875dc66cc",
"assets/assets/images/avatar.png": "3d1533f776b5edbce3dee9baa994dd17",
"assets/assets/images/course.png": "0b664a2b72ab7be8355ab010af4a82bf",
"assets/assets/images/logo.png": "39a21fb970054deaffce9b457f418bb4",
"assets/assets/images/registerImage.png": "a140f934d899c43c1192e532aed0bae6",
"assets/assets/images/welcomePage.png": "9fb92afb1eda7a3c3555c36f03bb981d",
"assets/assets/images/register.gif": "bf9c868aa38c6ae169f7e211615962d6",
"assets/assets/images/forgot.png": "84956f0eace65e037289bea6787655c5",
"assets/assets/images/forgotPassword.png": "6a5036db1c48d8b48f9f161def214942",
"assets/assets/icons/news.png": "7514efe630a67fd6f49336c4aa366b67",
"assets/assets/icons/class.png": "d67226f3b6192a6fdda2b916a12cc90f",
"assets/assets/icons/bell.png": "798c477cb5f71dc2b96552fc2dda448c",
"assets/assets/icons/all.jpg": "d04d1a9830036b0e97a70037e4b46218",
"assets/assets/icons/cancel.png": "4854a15a23db464f53599f35ab4ef584",
"assets/assets/icons/successfully.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/assets/icons/gmail.png": "a189ad2bcf2a9214789686f207e73aaf",
"assets/assets/icons/changePassword.png": "a985ffe9104cdf20dc42906ac48c801f",
"assets/assets/icons/old.jpg": "f160d6996e88e2274cce1a008134f9e6",
"assets/assets/icons/present.png": "105571b32bf9a9c390f73da7b70944f9",
"assets/assets/icons/information.png": "b01c41d7703783830bca2834479a34f7",
"assets/assets/icons/student.png": "3c23d20f0c4ae7e95616b25ec5f4a1b2",
"assets/assets/icons/garbage.png": "2a4582b651832b2ea3d049809851972a",
"assets/assets/icons/language.png": "57ae89b0163af0a142543decc948a97e",
"assets/assets/icons/signout.png": "828f3136f8a5f092a63dbbc187002033",
"assets/assets/icons/google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/icons/facebook.png": "a662474721ec62bfdfc4e6e881a29cb9",
"assets/assets/icons/notification.png": "43e321c310bbd24af1db695e2524e0e2",
"assets/assets/icons/lectuer.png": "137483918aeb5e9db74eb367732f6c62",
"assets/assets/icons/modeTheme.png": "07757a561814d8a9c9da4bb4fc5d821d",
"assets/assets/icons/absent.png": "47274eedeea77b3c8a28ba27d6ecff7f",
"assets/assets/icons/pending.png": "46cb35a57b7026c5964c1c21c4f13b07",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
