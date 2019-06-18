var langs = {

// Any time this is changed, run _make-array.html to generate new code for char_lang.js !

"ab": { name:"Abkhaz (Abxaz, Abkhazian)", silcode:"abk", source:"udhr_abk,b03748de41ccb9a6e724e938c3fea5013517b8fa", region:"wasia", script:"cyrl", speakers:"113000", letter:"ЏАБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЫЬабвгдежзиклмнопрстуфхцчшыьџҔҕҚқҞҟҦҧҨҩҬҭҲҳҴҵҶҷҼҽҾҿӘәӠӡӶӷ", punctuation:"–‐", local:"Аԥсуа бызшәа /apʰswa bɨzʃʷa/", notes:`Dialects include: Bzyb, Abzhui, Samurzakan. Closely related to Abaza [abq].
Orthographies include:
* Cyrillic, from 1860s <strong>(shown here)</strong>.
* Georgian (Mkhedruli/Mtavruli), no longer in use.`},

"ace": { name:"Acehnese (Achinese)", source:"udhr_ace,84b1954bb029c0f49091d7ba866b6e43bd2c7578", region:"seasia", script:"ascii", speakers:"3500000", letter:"ÈÉËÔÖèéëôö", mark:"̀́̂̈", punctuation:"‐“”", local:"Bahsa/Basa Acèh [bahsa at͡ʃeh]", notes:`Dialects include: Banda Aceh, Baruh, Bueng, Daja, Pase, Pidie (Pedir, Timu), Tunong.`},

"acu": { name:"Achaur-Shiwiar", source:"udhr_acu,udhr_acu_1", region:"sam", script:"latn", speakers:"7500", letter:"úáÚÁ", punctuation:"¿", mark:"́", local:"Achuár chícham"},

"ada": { name:"Dangme (Adaŋgbi)", source:"udhr_ada", region:"afr", script:"latn", speakers:"800000", letter:"íÍƆƐɔɛ", mark:"́", local:"Dangme", notes:`Dialects include: Ada, Ningo, Osu, Shai, Gbugbla, Krobo.`},

"ady": { name:"Adyghe (West Circassian)", source:"udhr_ady,2354dbbf502e044f5b3c42824859764a3815632d", region:"eur", script:"cyrl", speakers:"590000", letter:"ЁАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяёӏӀ", mark:"̆̈", local:"Адыгабзэ [aːdəɣaːbza]", notes:`The UDHR translation uses Іі (byelorussian-ukrainian i), rather than ӏ (palochka).
Dialects include: Shapsug (Sapsug, Shapsugi), Xakuchi, Bezhedukh (Bzedux, Bzhedug, Chemgui, Temirgoj), Abadzex (Abadzakh, Abadzeg), Natuzaj (Natukhai). Similar to Kabardian ([kbd]).
Orthographies include:
* Arabic (naskh), no longer in use.
* Cyrillic  <strong>(shown here)</strong>.
* Latin, used in Turkey.`},

"af": { name:"Afrikaans", silcode:"afr", source:"cldr_af,udhr_afr", region:"afr", script:"latn", speakers:"7100000", letter:"áâéèêëîïôöûÁÂÉÈÊËÎÏÔÖÛ", mark:"́̂̀̈", punctuation:"§‐–—…‘’“”†‡′″‰", aux:"àåäãæçíìóòúùüý̧̊̃", local:"Afrikaans", notes:`Dialects include: Cape Afrikaans (West Cape Afrikaans), Orange River Afrikaans, East Cape Afrikaans.`},

"agq": { name:"Aghem (Wum, Yum)", source:"cldr_agq", region:"afr", script:"latn", speakers:"27000", letter:"àâèêìîòôùûÀÂÈÊÌÎÒÔÙÛǎǐǒǔǍƐǏƗǑƆǓɄāěēīŋōūĀĚĒĪŊŌŪɛɨɔʉʔ", mark:"̀̂̌̄", punctuation:"‰", local:"Aghɨ̂m"},

"agr": { name:"Aguaruna (Awajún)", source:"udhr_agr", region:"sam", script:"latn", speakers:"38000", letter:"áíÁÍ", mark:"́", punctuation:"¡¿‐", local:"Awajún [ɑʋɑhʊ́n̪]"},

"aii": { name:"Assyrian Neo-Aramaic", source:"udhr_aii,e04c91748b5079b9b5077f2206f53c2223dc7839", region:"wasia", script:"syrn", speakers:"232300", letter:"ܒܘܕܩܐܬܝܠܦܙܢܫܥܡܣܪܟܗܚܓܛܨ", mark:"ܸܹܼ݂ܲܵܿ݁݀݇", punctuation:"܆،؛؟", rtl:true, local:"ܣܘܪܝܬ or ܣܘܪܬ [ˈsu:rɛt], [ˈsu:rɛθ], [ˈsu:rɪt], [ˈsu:rɪθ]", notes:`aii is included in the Syriac [syr] macrolanguage.
Dialects include: Urmi (Sipurghan, Solduz, Urmi Assyrian), Northern Assyrian (Baz, Dez, Gavar, Jilu, Qudshanis, Salamas, Upper Barwari, Van), Central Assyrian (Anhar, Mar Bishu, Nochiya, Shamezdin, Tergawar), Western Assyrian (Lewin, Lower Barwari, Tal, Tkhuma), Sapna (Aradhin, Benatha, Daudiya, Inishke, Tina). Similar linguistically to other Northeastern Aramaic varieties. Inherent intelligibility is difficult to estimate due to extensive exposure throughout the Assyrian diaspora to many dialects, especially Urmi and Iraqi Koine. As a result, intelligibility between dialects is as high as 80%–90%. Urmian group subdialects: Urmi, Sipurghan, Solduz; Northern Group: Salamas, Van, Jilu, Gavar, Qudshanis, Upper Barwari, Dez, Baz; Central Group: Mar Bishu, Nochiya (Shamezdin), Tergawar, Anhar; Western Group: Tkhuma, Lower Barwari, Tal, Lewin; Sapna Group: Aradhin, Tina, Daudiya, Inishke, Benatha. Standard literary Assyrian is based on Urmi. Many left original areas and developed a common spoken and written form based on the prestigious Urmi dialect as spoken in Baghdad, the United States, and elsewhere (Iraqi Koine). Most Christians understand it. This Urmi variety is different from Lishán Didán Urmi variety. All dialects of Western, Northern, and Central Assyrian are spoken in Syria.
Orthographies include:
* Syriac (maḏnḥāyā/Eastern style), used for East Syriac and Swadaya texts.
* Arabic (Garshuni), often used today for written communication, such as letters and fliers.
ISO 15924 has a general script code for Syriac (syrc), and another (syrn) for the Eastern Syriac orthography.`},

"ajg": { name:"Aja", source:"udhr_ajg", region:"afr", script:"latn", speakers:"550000", letter:"úóòùàèéìíõáÚÓÒÙÀÈÉÌÍÕÁƆƉƐƷŋŊɔɖɛʒ", mark:"̀́̃", local:"Ajagbe", notes:`Dialects include: Dogbo, Hwe (Ehoue), Tado (Tadou), Sikpi (Shikpi), Tala. The Hwe, Sikpi, and Tado dialects are linguistically very similar; Dogbo and Tala distinct from the other 3. Lexical similarity: 92% with Hwe-Sikpi dialect, 89% with Hwe-Dogbo dialect, Hwe-Tado dialect, and Hwe-Tala dialect.`},

"ak": { name:"Akan", silcode:"aka", source:"cldr_ak", region:"afr", script:"latn", speakers:"9800000", letter:"ɛɔƐƆ", punctuation:"‰", local:"Akan", notes:`ak is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Twi ([tw]), Fanti ([fat]).
Legacy applications often use ak rather than [fat] (Fanti) or [tw] (Twi).
‘Akan’ was a name created by Ghanaian academics and language activists in the mid-20th century when they sought to standardize the Fante-Asante-Akuampen written language varieties.
Orthographies include:
* Latin, from 1978, intended to be a common orthography <strong>(shown here)</strong>.
* Latin, for the Asante dialect of Twi (see [tw-asante])
* Latin, for the Akuapem dialect of Twi (see [tw-akuapem])
* Latin, for the Fante dialect of Fante (see [fat])`},

"alt": { name:"Southern Altai (Oirot, Oyrot)", source:"udhr_alt", region:"nasia", script:"cyrl", speakers:"57000", letter:"кижнҥтапэрешдлцязыгьйсмбјчӱоуӧвщюъфхКИЖНҤТАПЭРЕШДЛЦЯЗЫГЬЙСМБЈЧӰОУӦВЩЮЪФХ", punctuation:"‐","separator":"", symbol:"", local:"алтай тили (Altay tili), алтайча‎ (Altajča)", notes:`Dialects include: Altai Proper (Altai-Kizhi, Altaj Kizi, Maina-Kizhi, Southern Altai), Talangit (Chuy, Talangit-Tolos, Telengit), Teleut. No intelligiblility of Northern Altai ([atv]).`},

"am": { name:"Amharic", silcode:"amh", source:"cldr_am,udhr_amh", region:"afr", script:"ethi", speakers:"21634396", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ","number":"፩፪፫፬፭፮፯፰፱፲፳፴", punctuation:"፡፣፤፥፦።‐–‹›«»", local:"አማርኛ [amarɨɲːa]"},

"amc": { name:"Amahuaca (Amawaka, Amaguaco, Ameuhaque, Ipitineri, Sayaco)", source:"udhr_amc", region:"sam", script:"latn", speakers:"310", letter:"óÓ", mark:"́"},

"ame": { name:"Yanesha' (Amuesha, Amoesha)", source:"udhr_ame,09030b03ba151c1dbce0f407f3bfeb6cc40bb4a2", region:"sam", script:"latn", speakers:"9800", letter:"ñëóíãõáÑËÓÍÃÕÁẽẼʼ", mark:"̃̈́", local:"Yaneshac̈h/Yanešač̣ [janeʃaˀt͡ʂʰ]", notes:"Combining characters are used in decomposed sequences with several consonants, such as <u>m̃ñp̃t̃c̃c̈b̃</u>."},

"ami": { name:"Amis", source:"udhr_ami", region:"easia", script:"ascii", speakers:"181000", local:"Pangcah [paŋt͡saʜ]", notes:`Dialects include: Central Amis (Haian Ami, Hsiukulan Ami), Tavalong-Vataan (Kuangfu, Kwangfu), Southern Amis (Hengch’un Amis, Peinan, Taitung), Chengkung-Kwangshan, Northern Amis (Nanshi Amis). Chengkung-Kwangshan dialect is most similar to Central Amis dialect.`},

"amr": { name:"Amarakaeri", source:"udhr_amr", region:"sam", script:"latn", speakers:"500", mark:"̱", punctuation:"¿’", local:"aratbuten hua’a", notes:`Dialects include: Kisambaeri`},

"ar": { name:"Arabic", silcode:"ara", redirect:true, region:"wasia", script:"na", notes:`ar is a macrolanguage that encompasses the following more specific primary language subtags:<br/>[aao] (Algerian Saharan Arabic), [abh] (Tajiki Arabic), [abv] (Baharna Arabic), [acm] (Mesopotamian Arabic), [acq] (Ta'izzi-Adeni Arabic), [acw] (Hijazi Arabic), [acx] (Omani Arabic), [acy] (Cypriot Arabic), [adf] (Dhofari Arabic), [aeb] (Tunisian Arabic), [aec] (Saidi Arabic), [afb] (Gulf Arabic), [ajp] (South Levantine Arabic), [apc] (North Levantine Arabic), [apd] (Sudanese Arabic), [arb] (Standard Arabic), [arq] (Algerian Arabic), [ars] (Najdi Arabic), [ary] (Moroccan Arabic), [arz] (Egyptian Arabic), [auz] (Uzbeki Arabic), [avl] (Eastern Egyptian Bedawi Arabic), [ayh] (Hadrami Arabic), [ayl] (Libyan Arabic), [ayn] (Sanaani Arabic), [ayp] (North Mesopotamian Arabic), [bbz] (Babalia Creole Arabic), [pga] (Sudanese Creole Arabic), [shu] (Chadian Arabic), [ssh] (Shihhi Arabic).
Legacy applications often use ar rather than [arb] (Standard Arabic).`},

"arb": { name:"Standard Arabic", source:"cldr_ar,udhr_arb,927e530285eebcb2cc78d1fee4df691ab6def77e", region:"wasia", script:"arab", speakers:"273989700", letter:"ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىي", mark:"ًٌٍَُِّْٰٕٓٔ","number":"٠١٢٣٤٥٦٧٨٩", punctuation:"؉،؛؟٪٫٬‐–—…‰«»", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}\u{61C}", aux:"ڢڧࢲـﷲٱ؍٬٭", rtl:true, local:"العَرَبِيَّة‎ [alʕaraˈbijja]", notes:`arb is included in the Arabic [ar] macrolanguage. <em>Legacy applications often use [ar] rather than arb.</em>
Dialects include: Modern Standard Arabic (Modern Literary Arabic), Classical Arabic (Koranic Arabic, Quranic Arabic).`},

"arl": { name:"Arabela (Chiripuno, Chiripunu)", source:"udhr_arl", region:"sam", script:"latn", speakers:"50", letter:"úÚ", mark:"́", punctuation:"¿", local:"Tapweyokwaka, Tapueyocaca"},

"arn": { name:"Mapudungun (Mapuzugun, Mapudungu, Araucanian)", source:"udhr_arn", region:"sam", script:"latn", speakers:"260000", letter:"ñáíóÑÁÍÓ", mark:"̃́", local:"Mapudungun", notes:`This entry reflects only one of several competing and different writing systems using the Latin script, including Ragileo, Nhewenh and Azumchefi.
Dialects include: Moluche (Manzanero, Ngoluche), Picunche, Pehuenche. Easy intelligibility among dialects. Pehuenche and Moluche are reportedly very similar.`},

"as": { name:"Assamese (Asamiya)", silcode:"asm", source:"cldr_as", region:"sasia", script:"beng", speakers:"15000000", letter:"অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযৰলৱশষসহ", mark:"়ংঁঃ্ািীুূৃেৈোৌৗ","number":"০১২৩৪৫৬৭৮৯", punctuation:"‰", aux:"৲ৎর", local:"অসমীয়া [ɔʃomia]", notes:`Dialects include: Jharwa (Pidgin), Mayang, Standard Assamese, Western Assamese (Kamrupi).`}, // checked against Wikipedia: only difference was rupee mark in CLDR aux, not in WP

"asa": { name:"Asu (Pare, Kipare, Casu, Chasu, Athu, Chathu)", source:"cldr_asa", region:"afr", script:"ascii", speakers:"500000", notes:`Dialects include: Gonja, Mbaga. Related to Taveta ([tvs]).`},

"ast": { name:"Asturian (Asturleonese, Bable, Leonese)", source:"cldr_ast,udhr_ast", region:"eur", script:"latn", speakers:"351791", letter:"áéíñóúüÁÉÍÑÓÚÜḥḷḤḶ", mark:"̣́̃̈", punctuation:"¡¿«»§‐–—…‘’“”†‡′″‰", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîïºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÒÔÖØÙÛ̧̀̆̂̊̄", local:"asturianu", notes:`Dialects include: Leonese (Lleones), Western Asturian, Central Asturian (Bable), Eastern Asturian, Montañes, Pasiegan (Pasiego, Pasiegu). The Vaqueiros ethnic group speaks Western Asturian. Functional intelligibility among the 3 dialects. Reportedly similar to Mirandés ([mwl]) in Portugal. Leonese may be a separate language. Central Asturian is considered the model, and has the most speakers`},

"auc": { name:"Waorani (Huaorani, Sabela, Wao, Huao, Auishiri, Aushiri, Ssabela)", source:"udhr_auc", region:"sam", script:"latn", speakers:"1800", letter:"ñíéóÑÍÉÓ", mark:"̃́", local:"Wao Terero"},

"ay": { name:"Aymara", silcode:"aym", redirect:true, source:"", region:"sam", script:"na", speakers:"0", notes:`ay is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Central Aymara [ayr], Southern Aymara [ayc].
Legacy applications often use ay rather than [ayr].`},

"ayr": { name:"Central Aymara", source:"udhr_ayr", region:"sam", script:"latn", speakers:"2800000", letter:"ñïäíáëúÑÏÄÍÁËÚ", mark:"̃̈́", local:"Aymar aru [ajmaɾ ˈaɾu]", notes:`ayr is included in the Aymara [ay] macrolanguage.
Legacy applications often use [ay] rather than ayr.
Dialects include: Chilean Aymara, very similar to La Paz, Bolivia dialect.`},

"az": { name:"Azerbaijani (Azeri)", silcode:"aze", redirect:true, source:"624d905f81c5ba4f15275776ccd818ef04d3c043", region:"wasia", script:"na", speakers:"26000000", notes:`az is a macrolanguage that encompasses the following more specific primary language subtags:<br/>South Azerbaijani [azb], North Azerbaijani [azj].
Legacy applications often use az rather than [azj].
Orthographies include:
* Arabic script in Iran to the present and prior to 1929 in the north. See [azb].
* Latin in Soviet Azerbaijan, 1929-1939.
* Cyrillic in Soviet Azerbaijan, 1939-1958.
* Simplified cyrillic in Soviet Azerbaijan, 1958-1991. Widely used still in Armenia. See [azj-cyrl].
* Latin in independent Azerbaijan, 1991-1992.
* Modified latin in Azerbaijan from 1992. See [azj].`},

"azb": { name:"Azerbaijani (Azeri)", source:"624d905f81c5ba4f15275776ccd818ef04d3c043", rtl:true, region:"wasia", script:"arab", speakers:"26000000", letter:"آؤئاتثجحخدذرزسشصضطظعغفقلمنهويٮپچژکگۆۇیەݣ", mark:"َْٓٔ", aux:"ـ", other:"\u{200D}\u{200C}\u{200F}\u{200E}\u{2067}\u{2066}\u{2069}\u{202B}\u{202A}\u{202C}\u{34F}\u{61C}", local:"آذربایجان دیلی [ɑːzæɾbɑjˈdʒɑn diˈli]", notes:`azb is included in the Azerbaijani [az] macrolanguage.
Dialects include: Aynallu (Inallu, Inanlu), Karapapakh, Tabriz, Afshari (Afsar, Afshar), Shahsavani (Shahseven), Moqaddam, Baharlu (Kamesh), Nafar, Qaragozlu, Pishagchi, Bayat, Qajar.`},

"azj": { name:"Northern Azerbaijani", source:"cldr_az,udhr_azj_latn", region:"wasia", script:"latn", speakers:"26000000", letter:"çöüÇÖÜƏğışĞŞİə", mark:"̧̇̆̈", punctuation:"§‐–—…‘’“”†‡′″", local:"Azərbaycan dili [ɑːzæɾbɑjˈdʒɑn diˈli]", notes:`This is the Latin orthography introduced in 1992, rather than the 1929-1938 version.
azj is included in the Azerbaijani macrolanguage [az].
Legacy applications often use [az] rather azj.
Dialects include: Quba, Derbend, Baku, Shamakhi, Salyan, Lenkaran, Qazakh, Airym, Borcala, Terekeme, Qyzylbash, Nukha, Zaqatala (Mugaly), Qabala, Yerevan, Nakhchivan, Ordubad, Ganja, Shusha (Karabakh), Karapapak. Slight dialect differences.
Orthographies include:
* Arabic script prior to 1929. See [azb].
* Latin in Soviet Azerbaijan, 1929-1939.
* Cyrillic in Soviet Azerbaijan, 1939-1958.
* Simplified cyrillic in Soviet Azerbaijan, 1958-1991. Widely used still in Armenia. See [azj-cyrl].
* Latin in independent Azerbaijan, 1991-1992.
* Modified latin in Azerbaijan from 1992. <strong>(shown here)</strong>`},

"azj-cyrl": { name:"Northern Azerbaijani", silcode:"azj", source:"cldr_az_Cyrl,udhr_azj_cyrl", region:"wasia", script:"cyrl", speakers:"26000000", letter:"аәбвгғдежзийјкҝлмноөпрстуүфхһчҹшыАӘБВГҒДЕЖЗИЙЈКҜЛМНОӨПРСТУҮФХҺЧҸШЫ", mark:"̆", punctuation:"‐–—…‘’“”†‡′″‰§", aux:"цщъьэюяЦЩЪЬЭЮЯ", local:"Азәрбајҹан дили [ɑːzæɾbɑjˈdʒɑn diˈli]", notes:`This is the Simplified cyrillic orthography of Soviet Azerbaijan from 1958. Widely used still in Armenia.
azj is included in the Azerbaijani [az] macrolanguage. Legacy applications often use [az] rather than azj.
For dialect and further orthographic information see [azj].`},

"ban": { name:"Bali (Balinese)", source:"udhr_ban", region:"seasia", script:"ascii", speakers:"3300000", local:"Basa Bali /baʃa bali/", notes:`Dialects include: Lowland Bali (Badung, Buleleng, Gianyar, Jembrana, Karangasem, Klungkung, Tabanan), Highland Bali (“Bali Aga” (pej.)), Nusa Penida. Reportedly 2 distinct dialects. High Bali is used in religion, but users are diminishing. Speech strata in several lowland varieties (1989 A. Clynes).
Orthographies include:
* Latin, since early 20th century <strong>(shown here)</strong>.
* Balinese (see [ban-bali]).
* Javanese, no longer in use.`},

"ban-bali": { name:"Bali (Balinese) {Balinese}", silcode:"ban", source:"c6399677b86828b4f094bb4d4d3174446d92bef5", region:"seasia", script:"bali", speakers:"3300000", letter:"ᬅᬆᬇᬈᬉᬊᬋᬌᬍᬎᬏᬐᬑᬒᬓᬔᬕᬖᬗᬘᬙᬚᬛᬜᬝᬞᬟᬠᬡᬢᬣᬤᬥᬦᬧᬨᬩᬪᬫᬬᬭᬮᬯᬰᬱᬲᬳ", mark:"ᬂᬃᬄ᬴ᬵᬶᬷᬸᬹᬺᬻᬼᬽᬾᬿᭀᭁᭂᭃ᭄", punctuation:"᭞᭟᭚᭛᭜᭝᭠","number":"᭐᭑᭒᭓᭔᭕᭖᭗᭘᭙", aux:"ᬀᬁ", local:"ᬪᬵᬱᬩᬮᬶ, ᬩᬲᬩᬮᬶ /baʃa bali/", notes:`This is the alternate, Balinese-script orthography for Balinese.
For dialect and further orthographic information see [ban].`},

"bas": { name:"Basaa (Bassa, Basa, Bissa, Mbene)", source:"cldr_bas", region:"afr", script:"latn", speakers:"300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƁƐǏǸǑƆǓāěēīńŋōūĀĚĒĪŃŊŌŪɓɛɔ", mark:"᷆᷇́̀̂̌̄", local:"ɓasaá", notes:`Dialects include: Bakem, Bon, Bibeng, Diboum (Dibobom), Log, Mpo, Mbang, Ndokama, Basso, Ndokbele, Ndokpenda, Nyamtam.`},

"bax": { name:"Bamun (Bamum, Bamoun)", source:"udhr_bax", region:"afr", script:"latn", speakers:"420000", letter:"úéêüûâôîáèùàÚÉÊÜÛÂÔÎÁÈÙÀṅṄ", mark:"́̂̈̀̇", punctuation:"‘’", local:"Shü Pamom [ʃŷpǎˑmə̀m]", notes:`No known dialects. Related to Bafanji [bfj], Bamali [bbq], Bambalang [bmo], and Bangolan [bgj].
Orthographies include:
* Latin  <strong>(shown here)</strong>.
* Bamum, taught in schools until 1930s (see [bax-bamu]).`},

"bax-bamu": { name:"Bamun (Bamum, Bamoun)", silcode:"bax", source:"820f9f09ce28a3610548365c402e624a9d6e7b32", region:"afr", script:"bamu", speakers:"420000", letter:"ꚠꚡꚢꚣꚤꚥꚦꚧꚨꚩꚪꚫꚬꚭꚮꚯꚰꚱꚲꚳꚴꚵꚶꚷꚸꚹꚺꚻꚼꚽꚾꚿꛀꛁꛂꛃꛄꛅꛆꛇꛈꛉꛊꛋꛌꛍꛎꛏꛐꛑꛒꛓꛔꛕꛖꛗꛘꛙꛚꛛꛜꛝꛞꛟꛠꛡꛢꛣꛤꛥꛦꛧꛨꛩꛪꛫꛬꛭꛮꛯ", mark:"꛰꛱", punctuation:"꛲꛳꛴꛵꛶꛷", local:"Shü Pamom [ʃŷpǎˑmə̀m]", notes:`This is the alternate, Bamum-script orthography for Bamun.
For dialect and further orthographic information see [bax].
`},

"bba": { name:"Baatonum (Bariba, Baatombu, Baatonu, Barba, Barganchi, Bargawa, Bargu, Baruba, Berba, Bogung, Burgu)", source:"udhr_bba", region:"afr", script:"latn", speakers:"560000", letter:"àéùèóÀÉÙÈÓǹƐƆǸɛɔ", mark:"̀́", local:"Baatonum"},

"bcl": { name:"Central Bicol (Bikol Naga, Bicolano)", source:"udhr_bcl", region:"seasia", script:"ascii", speakers:"2500000", notes:"Macrolanguage is [bik].", notes:`Dialects include: Naga, Legazpi (Legapi), Daet, Partido.`},

"be": { name:"Belorussian", silcode:"bel", source:"cldr_be,udhr_bel", region:"eur", script:"cyrl", speakers:"5000000", letter:"абвгджзеёійклмнопрстуўфхцчшыьэюяиАБВГДЖЗЕЁІЙКЛМНОПРСТУЎФХЦЧШЫЬЭЮЯИʼ", mark:"̈̆", punctuation:"‐«»", aux:"́", local:"беларуская мова [bʲelaˈruskaja ˈmova]", notes:`Dialects include: Northeast Belarusian (Polots, Viteb-Mogilev), Southwest Belarusian (Grodnen-Baranovich, Slutska-Mazyrski, Slutsko-Mozyr), Central Belarusian. Linguistically between Russian [ru] and Ukrainian [uk], with transitional dialects to both.`},

"bem": { name:"Bemba (ChiBemba, Cibemba, Ichibemba, Icibemba, Chiwemba)", source:"cldr_bem,udhr_bem", region:"afr", script:"ascii", speakers:"4100000", local:"Chibemba", notes:`Dialects include: Lembue, Lomotua (Lomotwa), Ngoma, Nwesi, Town Bemba, Lunda (Luapula), Chishinga, Kabende, Mukulu, Ng’umbo, Twa of Bangweulu, Unga. Town Bemba has a Bemba base with heavy code mixing with English and neighboring Bantu languages.`},

"bez": { name:"Bena", source:"cldr_bez", region:"afr", script:"ascii", speakers:"670000", local:"Ekibena", notes:`Dialects include: Ilembula, Kilavungi (Kilavagi), Lupembe, Masakati (Masagati), Masitu, Mavemba, Maswamu, Ngaveeta, Nyikolwe, Sovi (Sove), Twangabita, Kinamanga, Ulanga. Lexical similarity: 71% with Pangwa [pbr], 65% with Hehe [heh], 55% with Sangu [sbp], 53% with Kinga [zga], 51% with Vwanji [wbi], 47% with Kisi [kiz].`},

"bg": { name:"Bulgarian", silcode:"bul", source:"cldr_bg,udhr_bul", region:"eur", script:"cyrl", speakers:"9000000", letter:"абвгдежзийклмнопрстуфхцчшщъьюяАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЬЮЯ", mark:"̆", punctuation:"‐–—…‘‚“„″§", symbol:"№", aux:"ѐёѝыѣэѫЀЁЍЫѢЭѪ̀̈", local:"български [ˈbɤɫɡɐrski]", notes:`Dialects include: Palityan (Bogomil, Palitiani). Palityan dialect is functionally intelligible with standard Bulgarian. The Pomak dialect spoken in Greece is reportedly similar to Serbian [sr] and Bulgarian.`},

"bho": { name:"Bhojpuri", source:"udhr_bho", region:"sasia", script:"deva", speakers:"51000000", letter:"मनवधकरखतसयषटउचबहलघणपगठदभअएआओथशजडइछऔफढईझऐञ", mark:"ािंु्ेोी़ूौृै", punctuation:"।", local:"भोजपुरी (bhōjpurī)", notes:`Dialects include: Northern Standard Bhojpuri (Basti, Gorakhpuri, Sarawaria), Western Standard Bhojpuri (Benarsi, Purbi), Southern Standard Bhojpuri (Kharwari), Bhojpuri Tharu, Madhesi, Domra, Musahari. May be more than 1 language. Extent of dialect variation in India and Nepal not yet determined. The cover term “Bihari” (a pejorative alternate name for Bhojpuri) is also used for Maithili [mai], and Magahi [mag]. Bhojpuri Tharu dialect is spoken by Tharu caste in Nepal and India. Distinct from other Tharu languages.
Orthographies include:
* Devanagari  <strong>(shown here)</strong>.
* Kaithi`},

"bik": { name:"Bikol", redirect:true, region:"seasia", script:"na", notes:`bik is a macrolanguage that encompasses the following more specific primary language subtags: Central Bikol [bcl], Albay Bicolano (deprecated, don't use!) [bhk], Southern Catanduanes Bikol [bln], Rinconada Bikol [bto], Northern Catanduanes Bikol [cts], West Albay Bikol [fbl], Libon Bikol [lbl], Miraya Bikol [rbl], Buhi'non Bikol [ubl].
Legacy applications often use bik rather than [bcl].`},

"bin": { name:"Edo (Bini)", source:"udhr_bin,5d2167e3d40aca7074b7d33835b1aa93e09cc088", region:"afr", script:"ascii", speakers:"1000000", letter:"ÀÁÈÉÌÍÒÓÙÚàáèéìíòóùúẸẹỌọ", mark:"̣̀́", local:"Ẹ̀dó", notes:"Acute and grave accents are used for tones, but the source didn't explicitly list all possible combinations, so the list of precomposed characters shown with those accents is a guess."},

"blt": { name:"Tai Dam (Black Tai)", source:"udhr_blt,a220b3a422c42646d07427217c800b9d9663991f", region:"seasia", script:"tavt", speakers:"760000", letter:"ꪀꪁꪂꪃꪄꪅꪆꪇꪈꪉꪊꪋꪌꪍꪎꪏꪐꪑꪒꪓꪔꪕꪖꪗꪘꪙꪚꪛꪜꪝꪞꪟꪠꪡꪢꪣꪤꪥꪦꪧꪨꪩꪪꪫꪬꪭꪮꪯꪱꪵꪶꪹꪺꪻꪼꪽꫀꫂꫛꫜꫝ", mark:"ꪴꪰꪲꪳꪷꪸꪾ꪿꫁", aux:"꫞꫟", local:"ꪼꪕꪒꪾ (tai dam)", notes:`Dialects include: Táy Mu’ò’i (Meuay, Tai Mueai). Reportedly similar to Thai Song [soa] and Tai Dón [twh], but not inherently intelligible of Tai Dón.
Orthographies include:
* Tai Viet  <strong>(shown here)</strong>.
* Lao.
* Latin.`},

"bm": { name:"Bambara (Bamanankan)", silcode:"bam", source:"cldr_bm,udhr_bam", region:"afr", script:"latn", speakers:"4100000", letter:"ƐƝƆŋŊɛɲɔ", punctuation:"’", local:"bamanankan", notes:`Dialects include: Standard Bambara, Somono (Kombye), Segou, San, Beledugu, Ganadugu, Sikasso, Wasulunkakan (Maninkakan, Eastern, Wassulu, Wassulunka, Wassulunke, Wasulu, Wasuu). Many local dialects. The main division is standard Bambara, influenced heavily by Eastern Maninkakan [emk], and rural dialects. Bamanankan dialects are spoken in varying degrees by 80% of the Mali population. In Mali, Wasulunkakan is shared by both Bamanankan and Eastern Maninkakan, but in Guinea it is only a dialect of Eastern Maninkakan.
Orthographies include:
* Latin  <strong>(shown here)</strong>.
* N'Ko, used in Mali (see [bm-nkoo]).`},

"bm-nkoo": { name:"Bambara (N'Ko)", silcode:"bam", rtl:true, source:"4dd61a887ac709179e0e709861288a0b0098c5d8", region:"afr", script:"nkoo", speakers:"4100000", letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߴߵߺ", mark:"߲߫߬߭߮߯߰߱߳","number":"߀߁߂߃߄߅߆߇߈߉", punctuation:"߷߸߹﴾﴿،؛؟", symbol:"߶", local:"ߓߡߊߣߊ߲ߞߊ߲ [bamanãkã]", notes:`This is an alternate, N'Ko-script orthography for Bambara.
For dialect and further orthographic information see [bm].`},

"bn": { name:"Bengali (Bangla)", silcode:"ben", source:"cldr_bn,udhr_ben,f10b0a319d5c8ff26cc820cd9c84bc1150888ce9", region:"sasia", script:"beng", speakers:"260000000", letter:"অআইঈউঊঋএঐওঔকষখগঘঙচছজঝঞটঠডঢণতৎথদধনপফবভমযরলশসহঽ", mark:"়ংঃঁ্ািীুূৃেৈোৌৗ","number":"১২৩৪৫৬৭৮৯০", punctuation:"।", symbol:"৺৳", other:"‌‍", aux:"ৠঌৡৄৢৣ", local:"বাংলা /ˈbʌŋlə/", notes:`Dialects include: Barisal, Noakhali, Khulna, Mymensingh. Reportedly similar to Assamese [as]. Lexical similarity: 40% with Nepali [ne].
Orthographies include:
* Bengali (Bangla)  <strong>(shown here)</strong>
* Newa, no longer in use.`},

"bo": { name:"Tibetan", silcode:"bod", source:"cldr_bo,udhr_bod,3d4a46a3bc9bb2a2c900adf645b07f641ef2c2bf", region:"easia", script:"tibt", speakers:"1200000", letter:"ཀཁགངཅཆཇཉཊཋཌཎཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤཥསཧཨཪ", mark:"ིེོུྐྑྒྔྕྖྗྙྚྛྜྞྟྠྡྣྤྥྦྨྩྪྫྭྮྯྰྱྲླྴྵྶྷྸྺྻྼ", punctuation:"༄༅༈་༌།༎","number":"༠༡༢༣༤༥༦༧༨༩", aux:"ༀ", local:"བོད་སྐད་ (Böké); ལྷ་སའི་སྐད་ (Lhaséké)", notes:`Dialects include: Gtsang (Lhasa, Tsang), Dbus (Dbusgtsang, Ü), Mngahris (Ngari), Deqing Zang. In the exile community a so-called diaspora Tibetan has developed.
Orthographies include:
* Tibetan, with Uchen and Umed styles  <strong>(shown here)</strong>.
* Marchen.
* Phags-pa.`},

"boa": { name:"Bora", silcode:"bre", source:"udhr_boa", region:"sam", script:"latn", speakers:"2400", letter:"úáéñíóÚÁÉÑÍÓɨȉƗȈ", mark:"́̃̏", local:"Meamuyna", notes:`Dialects include: None known. Distinct from Bora Muinane [bmr] but related.`},

"br": { name:"Breton", source:"cldr_br,udhr_bre", region:"eur", script:"latn", speakers:"226000", letter:"êñùÊÑÙʼ", mark:"̂̃̀", punctuation:"’–", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèëíìîïóòôöøúûüÿÁÀÂÅÄÃÆÇÉÈËÍÌÎÏÓÒÔÖØÚÛǗ̧̆̊̈̄", local:"brezhoneg [bʁeˈzõːnɛk] or [brəhõˈnek]", notes:`Dialects include: Leoneg (Leonais), Tregerieg (Tregorrois), Gwenedeg (Vannetais), Kerneveg (Cornouaillais).`},

"brx": { name:"Bodo (Boro, Mech)", source:"cldr_brx", region:"sasia", script:"deva", speakers:"1500000", letter:"अआइईउऊऍएऐऑओऔकखगघचछजझञटठडढणतथदधनपफबभमयरलळवशषसह", mark:"़ँंािीुूृॅेैॉोौ्", local:"बर'/बड़ [bɔɽo]", notes:`Dialects include: Chote, Mech. West Bengal dialect reportedly different from Assam.
Orthographies include:
* Devanagari  <strong>(shown here)</strong>.
* Bengali.
* Latin.`},

"bs": { name:"Bosnian", silcode:"bos", source:"cldr_bs,udhr_bos_latn", region:"eur", script:"latn", speakers:"~3000000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–—…‘’“”′″", local:"bosanski [bɔ̌sanskiː]", notes:`bs is included in the Serbo-Croatian [sh] macrolanguage.
Dialects include: Ijekavían, Ikavian. Lexical similarity: with Serbian [sr] and Croatian [hr].
Orthographies include:
* Cyrillic (Bosančica), used in the Middle Ages, with some recent attempts at revival (see [bs-cyrl]).
* Arabic (Arebica), used mainly between the 15th and 19th centuries.
* Latin (Gaj's alphabet')  <strong>(shown here)</strong>.`},

"bs-cyrl": { name:"Bosnian", sildcode:"bo", source:"cldr_bs_Cyrl,udhr_bos_cyrl", region:"eur", script:"cyrl", speakers:"~3000000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–—…‘’“”′″", local:"босански [bɔ̌sanskiː]", notes:`bs is included in the Serbo-Croatian [sh] macrolanguage.
This is an alternate, Cyrillic orthography for Bosnian.
For dialect and further orthographic information see [bs].`},

"buc": { name:"Bushi (Shibushi, Kibushi)", source:"udhr_buc,f977666b87e87d0adfd3e3683b6d046a9de0abf5", region:"afr", script:"latn", speakers:"47900", letter:"ìàãÌÀÃɓŋĩŊĨƁɗƊ", mark:"̀̃", punctuation:"’", local:"Kibushi", notes:`Dialects include: Kibushi-Kimaore (Shibushi Shimaore), Kiantalaotse.
Writing is limited in use.`},

"bug": { name:"Buginese", silcode:"bug", source:"udhr_bug", region:"seasia", script:"ascii", speakers:"5000000", local:"Basa Ugi", notes:`Dialects include: Bone (Dua Boccoe, Mare, Palakka), Pangkep (Pangkajene), Camba, Sidrap (Alitta, Pinrang Utara, Sidenrang), Pasangkayu (Ugi Riawa), Sinjai (Bulukumba, Enna, Palattae), Soppeng (Kessi), Wajo, Barru (Nepo, Pare-Pare, Soppeng Riaja, Tanete, Tompo), Sawitto (Pinrang), Luwu (Bua Ponrang, Luwu’, Malangke-Ussu, Wara). Bone and Soppeng dialects are central.
Orthographies include:
* Latin <strong>(shown here)</strong>.
* Buginese script, no longer in significant use, but found on signage (see [bug-bugi]).`},

"bug-bugi": { name:"Buginese", silcode:"bug", source:"d997476f6f5d5a7525a2cdf2d0790e944bfa83f2", region:"seasia", script:"bugi", speakers:"5000000", letter:"ᨀᨁᨂᨄᨅᨆᨈᨉᨊᨌᨍᨎᨐᨑᨒᨓᨔᨖᨃᨏᨋᨇᨕ", mark:"ᨘᨗᨙᨚᨛ", punctuation:"᨞᨟", local:"ᨅᨔ ᨕᨘᨁᨗ (basa ugi)", notes:`This is the alternate, Buginese-script orthography for Buginese, which is in limited use nowadays.
For dialect and further orthographic information see [bug].`},

"bum": { name:"Bulu", source:"cldr_bum,udhr_btb", region:"afr", script:"latn", speakers:"860000", letter:"óñôéáÓÑÔÉÁōńŌŃ", mark:"̄́̃̂", local:"Bulu", notes:`Dialects include: Yelinda, Yembana, Yengono, Bene. Intelligible with Eton [eto], Ewondo [ewo], and Fang [fan] in Beti group.`},

"bxk": { name:"Bukusu", source:"cldr_luy", region:"afr", countries:"Kenya, Uganda", script:"ascii", speakers:"1200000", local:"Lubukusu"},

"ca": { name:"Catalan", silcode:"cat", source:"cldr_ca,udhr_cat", region:"eur", script:"latn", speakers:"4100000", letter:"àçéèíïóòúüÀÇÉÈÍÏÓÒÚÜ", mark:"̧̀́̈", punctuation:"·¡¿«»§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŀŏōœŭūĂĀĔĒĬĪĿŎŌŒŬŪŸáâåäãæêëìîñºôöøùûÿÁÂÅÄÃÆÊËÌÎÑÔÖØÙÛ̆̂̊̃̄", local:"català [kətəˈla]", notes:`Dialects include: Catalan-Rousillonese (Northern Catalan), Valencian (Valenciano, Valencià), Balearic (Balear, Eivissenc, Insular Catalan, Mallorqui, Menorqui, Menorquin), Central Catalan, Northwestern Catalan (Aiguavivan, Eastern Aragonese, Lleidatà, Pallarese, Ribagorçan). Standardized variety is a literary composite of several dialects and written form is most similar to Barcelona speech. Pallarese and Ribogorçan dialects less similar to standard Catalan. Benasquese and Aiguavivan people live in isolated valleys and have distinct phonology from their neighbors. Tortosin may be more similar to Valencian. Central Catalan has 90% to 95% inherent intelligibility for speakers of Valencian (1989 R. Hall, Jr.). Lexical similarity: 87% with Italian [it], 85% with Portuguese [pt] and Spanish [es], 76% with Ladin [lld], 75% with Sardinian [sc], 73% with Romanian [ro].`},

"cab": { name:"Garifuna", source:"udhr_cab", region:"cam", script:"latn", speakers:"190000", letter:"üúñáéíèóÜÚÑÁÉÍÈÓ", mark:"̈́̃̀", local:"Garifuna", notes:`Dialects include: Western Garifuna, Eastern Garifuna. Eastern Garifuna dialect is in Honduras and Nicaragua (leaves out, r, and tends to shorten words), Western Garifuna in Guatemala and Belize. Related to Island Carib [car], with Spanish [es], English [en], and French [fr] borrowings.`},

"cak": { name:"Kaqchikel (Kaqchiquel, Cakchiquel, Cakchiquiel)", source:"udhr_cak", region:"cam", script:"latn", speakers:"450000", letter:"äïöüÄÏÖÜ", mark:"̈", local:"Kaqchikel", notes:`Dialects include: Acatenango Southwestern Cakchiquel, Eastern Cakchiquel, Northern Cakchiquel, Santa María de Jesús Cakchiquel (Kach’ab’al), Santo Domingo Xenacoj Cakchiquel, South Central Cakchiquel, Southern Cakchiquel, Western Cakchiquel, Yepocapa Southwestern Cakchiquel.`},

"cbi": { name:"Chachi (Cha'palaa, Cayapa)", source:"udhr_cbi", region:"sam", script:"latn", speakers:"10000", letter:"ñóúáíéÑÓÚÁÍÉ", mark:"̃́", punctuation:"¿¡"},

"cbr": { name:"Cashibo (Caxibo, Cacibo, Cachibo, Cahivo, Cacataibo, Managua, Hagueti)", source:"udhr_cbr", region:"sam", script:"latn", speakers:"1200", letter:"ñëúíáéóÑËÚÍÁÉÓ", mark:"́̃̈́", punctuation:"¿", local:"Kakataibo-Kashibo", notes:`Dialects include: Kakataibo de Mariscal, Kakataibo de Sinchi Roca (Kashibo de Sungaroyacu, Kashibo del Alto Aguaytía), Kashibo (Cashibo).`},

"cbs": { name:"Cashinahua (Kashinawa, Kaxinawá, Caxinawá, Hantxa Kuin, Huni Kui)", source:"udhr_cbs", region:"sam", script:"latn", speakers:"1200", letter:"íÍ", mark:"́", punctuation:"¿", local:"Hantxa Kuin, Juni Kuin", notes:`No known dialects. Possibly most similar to Sharanahua [mcd].`},

"cbt": { name:"Chayahuita", source:"udhr_cbt", region:"sam", script:"latn", speakers:"14000", letter:"ëóíËÓÍ", mark:"̈́", punctuation:"¿", local:"Shahui", notes:`Dialects include: Chayahuita, Cahuapana. Not intelligible with Jebero [jeb].`},

"cbu": { name:"Candoshi-Shapra (Candoxi, Kandoshi, Murato)", source:"udhr_cbu", region:"sam", script:"latn", speakers:"1120", letter:"íáÍÁ", mark:"́", punctuation:"¿¡", notes:`Dialects include: Chapara (Shapra), Kandoáshi (Kanduásh, Kánduash). May be distantly related to Arawakan; probably not Jivaroan.`},

"ccp": { name:"Chakma", source:"cldr_ccp,udhr_ccp", region:"sasia", script:"cakm", speakers:"330000", letter:"𑄟𑄚𑄃𑄇𑄥𑄢𑄝𑄅𑄉𑄌𑄙𑄡𑄠𑄖𑄑𑄎𑄘𑄦𑄣𑄛𑄏𑄈𑄊𑄜𑄓𑄋𑄗𑄞𑄍𑄕𑄒𑄄𑄆𑄐𑄔𑄤", mark:"𑄬𑄭𑄴𑄧𑄁𑄮𑄳𑄨𑄩𑄪𑄱𑄰𑄫𑄯𑄲𑄀𑄂","number":"০১২৩৪৫৬৭৮৯𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿𑄶", punctuation:"𑅁𑅃𑅂𑅀‰‐–—…‘’“”†‡′″§", local:"𑄌𑄋𑄴𑄟𑄳𑄦 𑄞𑄌𑄴 (changmha bhach)", notes:`UDHR uses Chakma digits, whereas CLDR shows only Bengali digits.
Dialects include: Chakma of India [ccp] understand Bangladesh Chakma with difficulty. Some dialect variation within Myanmar. Lexical similarity: 58%–67% with Tanchangya [tnv].
Orthographies include:
* Chakma  <strong>(shown here)</strong>.
* Bengali (Bangla).
* Latin.`},

"ce": { name:"Chechen", silcode:"cec", source:"cldr_ce", region:"eur", script:"cyrl", speakers:"1400000", letter:"аьбвгӏдеёжзийкхлмнопрстуфцчшщъыэюяАЬБВГӀДЕЁЖЗИЙКХЛМНОПРСТУФЦЧШЩЪЫЭЮЯ", mark:"̈̆","number":"", punctuation:"‐–—…‘‚“„«»§", local:"нохчийн мотт [ˈnɔx.t͡ʃiːn mu͜ɔt]", notes:`Dialects include: Ploskost, Itumkala (Shatoi), Melkhin, Kistin, Cheberloi, Akkin (Aux). The Akkin people in western Dagestan have a strong self-identity and consider themselves distinct from Chechen. Chechen partially intelligible with Ingush [inh]. Melkhi transitional dialect to Ingush.
Orthographies include:
* Cyrillic <strong>(shown here)</strong>.
* Arabic (naskh), no longer in use.
* Latin, from 1925-1938.`},

"ceb": { name:"Cebuano (Bisaya)", source:"cldr_ceb,udhr_ceb", region:"seasia", script:"ascii", speakers:"16000000", local:"Binisaya", notes:`Wikipedia suggests that an acute accent is used to indicate stress.
Dialects include: Cebu, Boholano (Boholang), Leyte, Mindanao Visayan. Boholano sometimes considered a separate language.`},

"cfm": { name:"Falam Chin (Baro Halam)", source:"udhr_flm,1f092f9b4f53e2b4ec5dc91221d0cdb55c50c844", region:"seasia", script:"ascii", speakers:"107000", letter:"Ṭṭ", mark:"̣", local:"Laiṭawng, Falam Chin", notes:`Dialects include: Zanniat (Zahnyiet, Zanniet), Taisun (Shunkla, Sunkhla, Taishon, Tashom, Tashon), Laizo (Laiso, Laizao, Laizo-Shimhrin), Zahau (Lyen-Lyem, Yahow, Za-How, Zahao, Zahau-Shimhrin), Khualsim (Khualshim, Kwelshin), Lente (Gunte, Lyente), Sim, Tapong, Hlawnceu. Collectively called Baro Halam. Tapong reportedly has difficult intelligibility for other dialect speakers. 75% lexical similarity with Zanniat dialect. Ngawn [cnw], Bualkhaw [cbl], and the Hualngo dialect of Mizo [lus] are often included as sub-groups of Falam, since they live in Falam township.
Orthographies include:
* Latin, primary usage <strong>(shown here)</strong>.
* Bengali (Bangla) in India.`},

"cgg": { name:"Chiga (Rukiga, Ruchiga, Kiga)", source:"cldr_cgg", region:"afr", script:"ascii", speakers:"1600000", local:"Rukiga", notes:`Dialects include: RuNyaifwe-Hororo, RuSigi, RuNyangyezi, RuHimba. 72% intelligible with Nyankore [nyn]. Lexical similarity: 84%–94% with Nyankore [nyn], 77% with Nyoro [nyo], 75% with Zinza [zin], 72% with Nyambo [now], 70% with Haya [hay], 68% with Tooro [ttj], 63% with Kerewe [ked].
Latin orthography used since 1964.`},

"ch": { name:"Chamorro", silcode:"cha", source:"udhr_cha,e97485e1a7f539f982e7cfeb56ea244d8b39af8a", region:"oce", script:"ascii", speakers:"58000", letter:"ÅÑåñ", mark:"̃̊", local:"Finu' Chamoru /finuʔ tʃəˈmɒroʊ/", notes:`Dialects include: Chamorro, Rotanese Chamorro.`},

"chj": { name:"Ojitlán Chinantec", source:"udhr_chj", region:"cam", script:"latn", speakers:"38000", letter:"öíäñáéúïüëóÖÍÄÑÁÉÚÏÜËÓ", mark:"̈́̃", punctuation:"–", symbol:"°", local:"Jmiih kia’ dzä ‘vï ï, Jujmi", notes:`Although there is no macrolanguage, this is one of several Chinantecan languages that are partially mutually intelligible: [cco], [chj], [chq], [chz], [cle], [cnl], [cnt], [cpa], [csa], [cso], [cte], [ctl], [cuc], [cvn].
No known dialects: 49% intelligibility of Sochiapan [cso] (most similar), 43% of Usila [cuc], 39% of Palantla [cpa], 31% of Chiltepec [csa].`},

"chk": { name:"Chuukese (Trukese)", source:"udhr_chk", region:"oce", script:"ascii", speakers:"51330", local:"Chuuk", notes:`Diacritics include: East Lagoon, Fayichuck.`},

"chr": { name:"Cherokee", source:"cldr_chr,udhr_chr_cased,udhr_chr_uppercase,4be08b04f56e7763cde42dfbebfb49497c506a2b", region:"nam", script:"cher", speakers:"1520", letter:"ᏸᏹᏺᏻᏼᎠᎡᎢᎣᎤᎥᎦᎧᎨᎩᎪᎫᎬᎭᎮᎯᎰᎱᎲᎳᎴᎵᎶᎷᎸᎹᎺᎻᎼᎽᎾᎿᏀᏁᏂᏃᏄᏅᏆᏇᏈᏉᏊᏋᏌᏍᏎᏏᏐᏑᏒᏓᏔᏕᏖᏗᏘᏙᏚᏛᏜᏝᏞᏟᏠᏡᏢᏣᏤᏥᏦᏧᏨᏩᏪᏫᏬᏭᏮᏯᏰᏱᏲᏳᏴꭰꭱꭲꭳꭴꭵꭶꭷꭸꭹꭺꭻꭼꭽꭾꭿꮀꮁꮂꮃꮄꮅꮆꮇꮈꮉꮊꮋꮌꮍꮎꮏꮐꮑꮒꮓꮔꮕꮖꮗꮘꮙꮚꮛꮜꮝꮞꮟꮠꮡꮢꮣꮤꮥꮦꮧꮨꮩꮪꮫꮬꮭꮮꮯꮰꮱꮲꮳꮴꮵꮶꮷꮸꮹꮺꮻꮼꮽꮾꮿ", aux:"̣̱̤̰", local:"ᏣᎳᎩ ᎦᏬᏂᎯᏍᏗ [dʒalaˈɡî ɡawónihisˈdî]", notes:`Dialects include: Elati (Eastern Cherokee, Lower Cherokee, Underhill Cherokee), Keetoowah (Kituhwa, Middle Cherokee), Otali (Overhill Cherokee, Upper Cherokee, Western Cherokee), Overhill-Middle Cherokee.
Orthographies include:
* Cherokee <strong>(shown here)</strong>.
* Latin.`},

"cic": { name:"Chickasaw", source:"udhr_cic,f258793e409fd555ca28c242b449ca206a0bd6c0", region:"nam", script:"latn", speakers:"75", letter:"óáíÓÁÍ", mark:"̱́", punctuation:"—", local:"Chikashshanompa' [tʃikaʃːanompaʔ]", notes:`U+0331 COMBINING MACRON BELOW is used with a and o, for which there are no precomposed characters.
No known dialects. Choctaw [cho] find Chickasaw unintelligible.`},

"cjk": { name:"Chokwe", source:"udhr_cjk", region:"afr", script:"ascii", speakers:"980000", notes:`Dialects include: Minungo, Ulanda, Ukhongo.`},

"cjs": { name:"Shor", source:"udhr_cjs,eec6428d9ce711e3709def0279121e23a4bf488a", region:"nasia", script:"cyrl", speakers:"2800", letter:"кижнтолағыңудерцязчқшйъӱгьсмбюпӧэвфхКИЖНТОЛАҒЫҢУДЕРЦЯЗЧҚШЙЪӰГЬСМБЮПӦЭВФХЁЩщё", mark:"̆̈", local:"Шор тили (šor tili), Тадар тили (tadar tili)", notes:`Dialects include: Mrassa (Mrasu), Kondoma. Some sources combine Shor and Chulym [clw].
Orthographies include:
* Cyrillic, developed by Altai missionaries in 1880s <strong>(shown here)</strong>.
* Latin, between 1930-1938.`},

"ckb": { name:"Central Kurdish (Sorani)", rtl:true, source:"cldr_ckb,fa1e79cbcb9ca9906ebecd0c8e47c135d5a380c1", region:"wasia", script:"arab", speakers:"7250000", letter:"ئابپتجچحخدرزڕژسشعغفڤقکگلڵمنھەوۆیێي", mark:"ٔ", punctuation:"٫٬٪؉","number":"٠١٢٣٤٥٦٧٨٩", aux:"ًٌٍَُِّْـ", local:"کوردیی ناوەندی (Kurdîy nawendî), سۆرانی, (Soranî)", notes:`ckb is included in the Kurdish [ku] macrolanguage.
Dialects include: Hewleri (Arbili), Xoshnaw, Pizhdar, Suleimani (Silemani), Warmawa, Rewandiz, Bingird, Mukri, Kerkuki, Garmiyani. In Sulaimaniya, Hewleri and Kerkuki dialects seen as mutually intelligible.
Orthographies include:
* Arabic (alphabetised naskh), from 1920s, mostly used by Kurds in Iraq and Iran <strong>(shown here)</strong>
* Latin, proposed Universal Kurdish alphabet (adds Ł, Ň, Ř and Ü)  (see [ckb-latn])
* Latin, Yekgirtú (Kurdish Unified Alphabet) promoted by the Kurdish Academy of Language for all Kurdish dialects`},

"ckb-latn": { name:"Central Kurdish (Sorani)", source:"udhr_ckb,565fb1c44c0ddde28a6bec9836935ab74c3f72c9", region:"wasia", script:"latn", speakers:"7250000", letter:"şŞûîêçÛÎÊÇ", mark:"̧̂", aux:"̣̈̌ḤḥḦḧẌẍŁłŇňŘřÜüʿ", local:"Kurdîy nawendî, Soranî", notes:`ckb is included in the Kurdish [ku] macrolanguage.
This is an alternate, Latin-script orthography for Central Kurdish.
For dialect and further orthographic information see [ckb].
`},

"cnh": { name:"Haka Chin (Lai)", source:"udhr_cnh", region:"seasia", script:"ascii", speakers:"446264", local:"Lai, Lai Chin", notes:`Dialects include: Thantlang (Klangklang), Zokhua.`},

"cni": { name:"Asháninka", source:"udhr_cni,4a72f03687c85b581a7fab4146a3d0d9420e3257", region:"sam", script:"latn", speakers:"~35000", letter:"áéÁÉÑñ", mark:"́̃", notes:"Asháninka was recognized as a separate language from Ashéninka ([cpu], [prq], [cpc], [cpb], [cjo], [cpy]) in 2017, and the process to fix an alphabet was underway during 2018."},

"co": { name:"Corsican", silcode:"cos", source:"udhr_cos,3f49d57dae01202ea97c4d9eae9e2df2a8d3a65e", region:"eur", script:"latn", speakers:"325000", letter:"àèìùòÀÈÌÙÒ", mark:"̀", punctuation:"’", aux:"ÉÔéố̂", local:"corsu [ˈkorsu, ˈkɔrtsu], lingua corsa [ˈliŋɡwa ˈɡorsa]", notes:`Dialects include: Sartenais, Vico-Ajaccio, Northern Corsican (Bastia, Cape Cors), Venaco. Lexical similarity: 79%–89% with Bastia, Venaco, Vico, and Sartene dialects. Bonifacio on the southern tip of the island has 78% lexical similarity (highest) with Bastia at extreme north. Ajaccio dialect is central and prestigious.`},

"cof": { name:"Colorado (Tsafiki, Tsáchila)", source:"udhr_cof", region:"sam", script:"latn", speakers:"2300", letter:"íÍ", mark:"́", notes:`No known dialects. Reportedly lexically similar to Chachi [cbi] and Awa-Cuaiquer [kwi], but major differences between the languages in phonology, syntax and grammatical structure.`},

"cot": { name:"Caquinte (Poyenisati)", source:"udhr_cot", region:"sam", script:"latn", speakers:"500", letter:"óÓ", mark:"́", punctuation:"¿", local:"Aguenquetsatsare", notes:`No known dialects. Reportedly most similar to Asháninka [cni].`},

"cpu": { name:"Pichis Ashéninka", source:"udhr_cpu", region:"sam", script:"latn", speakers:"9881", letter:"ñáéÑÁÉ", mark:"̃́", notes:`This is one of several closely related Ashéninka languages (though there is no macrolanguage), including: [prq], [cpc], [cpb], [cjo], [cpy]. Ashéninka was recognized as a separate language from Asháninka ([cni]) in 2017, and the process to fix an alphabet was underway during 2018.
Dialects include: Bajo Pichís. Somewhat intelligible with other Ashéninka languages. Bajo Pichis variety that is spoken on the Anacayali has many features of Pajonal Asheninka [cjo].`},

"cr": { name:"Cree", redirect:true, source:"", region:"nam", script:"cans", speakers:"", notes:`cr is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern East Cree [crj], Plains Cree [crk], Northern East Cree [crl], Moose Cree [crm], Swampy Cree [csw], Woods Cree [cwd].
Legacy applications often use cr rather than [cwd].`},

"cri": { name:"Sãotomense (Forro Creole, Santomense)", source:"udhr_007", region:"afr", script:"latn", speakers:"70000", letter:"çóêéáâôºíÇÓÊÉÁÂÔÍ", mark:"̧́̂", notes:`No known dialects. Substratum largely Kwa [kwb] and Western Bantu languages; quite distinct from the creoles of Guinea-Bissau, Senegal, Gambia, and Cape Verde. Lexical similarity: 77% with Principense [pre], 62% with Fa d’Ambu [fab] (Annobonese), 70% with Angolar [aoa].
Wikipedia says that there is no standard orthography, and Ethnologue says that the language is unwritten.`},

"crs": { name:"Seychellois Creole (Seselwa)", source:"udhr_crs", region:"afr", script:"latn", speakers:"73000", letter:"íÍ", mark:"́", punctuation:"’", local:"kreol, seselwa", notes:`Dialects include: Seychelles dialect reportedly used on Chagos Islands. Structural differences with Morisyen [mfe] are relatively minor. Low intelligibility of Réunion Creole [rcf].`},

"cs": { name:"Czech (Bohemian)", silcode:"ces", source:"cldr_cs,udhr_ces", region:"eur", script:"latn", speakers:"10700000", letter:"áéíóúýÁÉÍÓÚÝčďěňřšťůžČĎĚŇŘŠŤŮŽ", mark:"́̌̊", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīľłŏōœŕŭūĂĀĔĒĬĪĽŁŎŌŒŔŬŪŸàâåäãæçèêëìîïñòôöøùûüÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̈̃̄", local:"čeština [ˈtʃɛʃcɪna]", notes:`Dialects include: Central Bohemian, Czecho-Moravian, Hanak, Lach (Yalach), Northeast Bohemian, Southwest Bohemian. All Czech and Slovak dialects mutually inherently intelligible. Czech is also intelligible with Polish [pl].`},

"csa": { name:"Chiltepec Chinantec", source:"udhr_csa", region:"cam", script:"latn", speakers:"1800", letter:"öüïóáñäëéíúÖÜÏÓÁÑÄËÉÍÚ", mark:"̷̱̍̎̈́̃", punctuation:"†", notes:`Although there is no macrolanguage, this is one of several Chinantecan languages that are partially mutually intelligible: [cco], [chj], [chq], [chz], [cle], [cnl], [cnt], [cpa], [csa], [cso], [cte], [ctl], [cuc], [cvn].
No known dialects. 76% intelligibility of Tlacoatzintepec [ctl] (most similar), 20% of Usila [cuc] and Ojitlán [chj], 13% of Valle Nacional [cvn].`},

"csw": { name:"Swampy Cree (Maskekon, Omaškêkowak, Omushkego)", source:"udhr_csw", region:"nam", script:"cans", speakers:"1805", letter:"ᐁᐢᐱᑕᑲᒥᐠᐊᑭᒋᐃᑗᐎᐣᓂᑯᓯᓇᐅᔑᒧᓀᐡᑐᑌᑎᐸᐗᐳᒪᒶᐌᔭᓄᑾᔦᒣᐤᓴᓶᔕᑴᐯᐟᑫᓱᓉᐺᑡᐨᔓᑺᓋᔗᔾᔀᑊᔡᒬᒼ", punctuation:"᙮", local:"ᓀᐦᐃᓇᐍᐏᐣ (Nêhinawêwin)", notes:`csw is included in the Cree [cr] macrolanguage.
Dialects include: Eastern Swampy Cree, Western Swampy Cree. Both nonpalatalized n-dialect and l-dialect within Cree-Montagnais-Naskapi language complex or dialect subgroup.`},

"ctd": { name:"Tedim Chin", source:"udhr_ctd", region:"seasia", script:"ascii", speakers:"340000", local:"Tidim", notes:`Dialects include: Sokte, Kamhau (Kamhao, Kamhow).`},

"cu": { name:"Church Slavonic (Church Slavic, New Church Slavonic)", silcode:"chu", source:"cldr_cu", region:"eur", script:"cyrl", speakers:"0", letter:"абвгдеєжѕзиіїйклмнѻоѡѽѿпрстуфхцчшщъыьѣюѧѫѯѱѳѵѷАБВГДЕЄЖЅЗИІЇЙКЛМНѺОѠѼѾПРСТУФХЦЧШЩЪЫЬѢЮѦѪѮѰѲѴѶꙿꙁꙍꙋꙗꙀꙌꙊꙖⸯ", mark:"҇҃ⷠⷡⷢⷣⷤⷥⷦⷧⷨⷩⷪⷬⷭⷯⷱⷴ꙽", punctuation:"꙾꙳–—‐", symbol:"҂", aux:"҈҉҄ҥҁџѥѩѭҤҀЏѤѨѬⷶⷷⷸⷫⷵⷮⷹⷰⷲⷳⷺⷻⷼⷽⷾⷿ꙰꙱꙲꙯ꙣꙴꙃꙅꙵꙶꙇꙉꙥꙧꙩꙫꙭꙮꚙꚛꙷꚞꙻꙡꙏꙸꙑꙹꙺꙓꙕꚟꙙꙛꙝꙟꙢꙂꙄꙆꙈꙤꙦꙨꙪꙬꚘꚚꙠꙎꙐꙒꙔꙘꙚꙜꙞ︯︮", local:"Црькъвьнословѣньскъ ѩзыкъ, Словѣньскъ‎ (Slovyensk)", notes:`Orthographies include:
* Old Church Slavonic variant of Cyrillic <strong>(shown here)</strong>
* Glagolitic
There is a cyrs script subtag for this variant of Cyrillic.`},

"cy": { name:"Welsh (Cymraeg, y Gymraeg)", silcode:"cym", source:"cldr_cy,udhr_cym", region:"eur", script:"latn", speakers:"700000", letter:"áàâäéèêëíìîïóòôöúùûüýÿÁÀÂÄÉÈÊËÍÌÎÏÓÒÔÖÚÙÛÜÝŵŷŴŶŸẃẁẅỳẂẀẄỲ", mark:"́̀̂̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪåãæçñøÅÃÆÇÑØ̧̆̊̃̄", local:"Cymraeg [kʰəmˈraiɡ] or y Gymraeg [ə ɡəmˈraiɡ]", notes:`Dialects include: Northern Welsh, Southern Welsh.`},

"da": { name:"Danish", silcode:"da", source:"cldr_da,udhr_dan", region:"eur", countries:"Denmark, Finland, Norway, Sweden", script:"latn", speakers:"5500000", letter:"æøåÆØÅ", mark:"̊", punctuation:"§‐–…‘’“”†′″", aux:"œŒŸǿǾáàâçéèêëíîïñóôúùûÿüäöÁÀÂÇÉÈÊËÍÎÏÑÓÔÚÙÛÜÄÖ̧́̀̂̈̃", local:"dansk [ˈtænˀsk]", notes:`Dialects include: Bornholmsk (Bornholmian, Eastern Danish), Jutlandic (Jutish, Jutlandish, Jysk, Western Danish), Island Danish (Insular Danish). Jutish (Western Danish) has four sub-dialects: Sønderjysk (Southern Jutish), Vestjysk (Western Jutish), Østjysk (Eastern Jutish) and Nordjysk (Northern Jutish). Island Danish has two sub-dialects: Sjaelandsk (Zealand) and Fynsk (Funen).`},

"dag": { name:"Dagbani (Dagbanli, Dagbanle)", source:"udhr_dag,5fa369ea3e444b15406074c4e55ab99887619adf", region:"afr", countries:"Ghana", script:"latn", speakers:"1160000", letter:"ƐƆƔƷŋŊɛɔɣʒ’", local:"Dagbanli", notes:`Dialects: Nanuni (Nanumba). Lexical similarity: 95% with Mampruli [maw], 90% with Farefare [gur], 89% with Kusaal [kus].
Orthographies:
* Latin, since 1968 <strong>(shown here)</strong>`},

"dav": { name:"Taita (Dawida)", source:"cldr_dav", region:"afr", countries:"Kenya", script:"ascii", speakers:"400000", local:"Kidawida", notes:`Dialects: Mbololo, Werugha, Mbale, Chawia, Bura, Mwanda, Kasigau. Lexical similarity: 62% with Sagalla [tga], 46% with Gweno [gwe], 41%–44% with Chaga languages.`},

"ddn": { name:"Dendi", source:"udhr_ddn", region:"afr", countries:"Benin, Nigeria", script:"latn", speakers:"257050", letter:"ãâõÃÂÕǎǒƆƐǍƉǑŋŊɔɛɖ", mark:"̃̌̂", local:"Songhay", notes:`Dialects: Closely related to Zarma [dje] and Songhay [hmb]. They form a dialect subgroup.`},

"de": { name:"German", silcode:"de", source:"cldr_de,udhr_udhr_deu_1996", region:"eur", countries:"Germany, Austria, Switzerland", script:"latn", speakers:"95000000", letter:"äößüÄÖÜ", mark:"̈", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçéèêëíìîïñóòôøúùûÿÁÀÂÅÃÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̇́̀̆̂̊̃̄", local:"Deutsch [dɔʏtʃ]", notes:`Dialects: Major related varieties are Bavarian [bar], Swabian [swg], Alemannisch [gsw], Eastern Franconian [vmf], Hessisch, Palatinian, Rheinfränkisch, Westphalien [wep], Saxonian, Thuringian, Brandenburgisch, and Low Saxon [nds]. Many varieties are not mutually intelligible.
Other language subtags containing the word "German" include: Colonia Tovar German [gct], Hutterite German, Hutterisch [geh], Germanic languages [gem], East Germanic languages [gme], Middle High German (ca. 1050-1500) [gmh], Middle Low German [gml], North Germanic languages [gmq], West Germanic languages [gmw], Old High German (ca. 750-1050) [goh]
Orthographies include: 
* Latin, traditional 1901 (variant subtag 1901)
* Latin, 1996 (variant subtag 1996) <strong>(shown here)</strong>.
* Fraktur variant of Latin (which has the script subtag Latf), until 1940.
* Runic, no longer in use.`},

"dga": { name:"Southern Dagaare", source:"udhr_dga", region:"afr", countries:"Ghana", script:"latn", speakers:"1100000", letter:"ãÃƐƆũŨɛɔ", mark:"̃", local:"Dagaare", notes:`Dialects: None known. Southern Dagaare and Southern Birifor [biv] are partially intelligible. Distinct from Northern Dagara [dgi] in Burkina Faso.
Orthographies include:
* Latin, since 1966 <strong>(shown here)</strong>`},

//"dhw": { name:"Danwar (Danuwar, Denwar, Dhanvar, Dhanwar, Rai)", source:"udhr_dhw", region:"sasia", script:"ascii", speakers:"46000", countries:"Nepal", local:"दनुवार‎ (danuvāra)", notes:`Dialects: Kochariya (Bara, Rautahat, Sarlahi), Done Danuwar (Kavre, Sindhupalchowk), Dukuchhap Danuwar (Lalitpur), Dolbar Danuwar (Terai)...
//Orthographies:
//* Devanagari`},

"dje": { name:"Zarma (Djerma, Dyabarma, Dyarma, Dyerma, Adzerma, Zabarma, Zarbarma, Zarmaci, Zerma)", source:"cldr_dje,2e134c6858f7aabbbc5a50ac8d7c5a73e08e7435", region:"afr", script:"latn", speakers:"3600000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌", aux:"ĚěǍǎǏǐǑǒǓǔÀÁÂÈÉÊÌÍÎÒÓÔÙÚÛàáâèéêìíîòóôùúû̀́̂", countries:"Niger", local:"zarma ciine", notes:`Dialects: Kaado. In Niger, dialects from Dendi [ddn] and Songai blend into Zarma. Intelligibility is high, ethnic autonym: Dendi or Songai. Cannot understand Songhay, Koyraboro Senni [ses] in Mali.
Orthographies include:
* Latin, primary <strong>(shown here)</strong>
* Arabic (naskh)`},

"dsb": { name:"Lower Sorbian", source:"cldr_dsb", region:"eur", script:"latn", speakers:"6900", letter:"óÓčćěłńŕšśžźČĆĚŁŃŔŠŚŽŹ", mark:"̌́", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœřşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŘŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋", countries:"Germany", local:"dolnoserbšćina, dolnoserbski [ˈdɔlnɔˌsɛrskʲi]"},

"dua": { name:"Duala (Douala, Diwala, Dwela, Dualla, Dwala)", source:"cldr_dua", region:"afr", script:"latn", speakers:"90000", letter:"áéíóúÁÉÍÓÚƁƊƐƆŋūŊŪɓɗɛɔ", mark:"́̄", countries:"Cameroon", local:"Duala", notes:`Dialects: Bodiman, Mungo (Mongo, Mungu, Muungo), Oli (Ewodi, Koli, Ouri, Uli, Wouri, Wuri), Pongo. Related to Malimba [mzd].`},

"duu": { name:"Drung (Dulong, Derung, Rawang, Trung)", source:"udhr_020", region:"easia", script:"ascii", speakers:"14000", countries:"China, Tibet", local:"Tvrung kvt [tə˧˩ɻuŋ˥˧ kət˥]", notes:`Dialects: Dulong River (Central Dulongjiang, Derung River, Northern Dulongjiang, Southern Dulongjiang), Nu River (Nujiang Dulong). Dialects reportedly inherently intelligible (Thurgood and LaPolla 2003). Nu River Drung is not the same as Tibeto-Burman Anong [nun], which is also in Myanmar. Different from Rawang [raw] in Myanmar. Other possible dialect names are Melam, Metu, Tamalu, and Tukiumu. Lexical similarity: 74% with Matwang dialect of Rawang [raw].
This orthography is pinyin-based, used 1984-1990s.`},

"dv": { name:"Dhivehi (Maldivian, Divehi)", silcode:"div", rtl:true, source:"udhr_div,e9188c572c9c158255cede2459f076ecb3b50b9f", region:"sasia", script:"thaa", speakers:"340000", letter:"ޑސމބރގއދޖލހޢނފކށވޙޤތޕޓޔޝޞޅޚޣޒޠޗޏޘޛޟޜޡޥޱ", mark:"ިެްަީުާޮޭޫޯ", punctuation:"،؛", countries:"Maldives", local:"ދިވެހި [d̪iˈʋehi] or ދިވެހިބަސް (dhivehi-bas)", notes:`Dialects: Malé, Huvadu, Fuvah Mulaku, Addu, Maliku Bas. Southern dialects mutually intelligible but not with Male’. Southerners understand Male’ by acquired intelligibility. Users of Male’ cannot understand the others.
Orthographies include:
* Thaana <strong>(shown here)</strong>
* Maldivian Latin`},

"dyo": { name:"Jola-Fonyi", source:"cldr_dyo,udhr_dyo,cd01ae44156075d3e8aa249200adf6c04edb6acb", region:"afr", script:"latn", speakers:"410000", letter:"áéíñóúàÁÉÍÑÓÚÀŋŊ", mark:"́̃̀", punctuation:"“”‰", symbol:"°", countries:"Senegal, Gambia", local:"Jóola-Fóoñi, kújoolaay", notes:`Dialects: Buluf, Kombo, Kalounaye, Narang. Jola-Fonyi is the largest and most widely understood Jola variety. Lexical similarity: 68% with Jola-Kasa [csk].
* Latin <strong>(shown here)</strong>
* Arabic (naskh)`},

"dyu": { name:"Dyula (Jula, Dioula)", source:"udhr_dyu", region:"afr", script:"latn", speakers:"2500000", letter:"úàìóáòùèíéÚÀÌÓÁÒÙÈÍÉƐƆƝŋŊɛɔɲ", mark:"́̀", punctuation:"’‘", countries:"Côte d'Ivoire, Burkina Faso", local:"Julakan", notes:`Dialects: None known. Spoken as L1 or L2 by millions of people of diverse ethnic backgrounds in West Africa. Mutually intelligible with Bambara [bam], Kita Maninkakan [mwk], and Eastern Maninkakan [emk].
* Latin <strong>(shown here)</strong>
* Arabic (naskh)
* N'Ko in Côte d'Ivoire &amp; Burkina Faso`},

"dz": { name:"Dzongkha (Bhutanese)", source:"cldr_dz,udhr_dzo", region:"sasia", script:"tibt", speakers:"171080", letter:"ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ", mark:"ིེོུྐྑྒྔྗྙྟྠྡྣྤྥྦྨྩྪྫྭྱྲླྵྶྷཱྕ", punctuation:"༼༽༄༅༆༈༉༊࿐࿑༒࿒࿓࿔༌།༎༏༐༑༔་§‐–—…‘’“”†‡","number":"༡༢༣༤༥༦༧༨༩༠", symbol:"༶྾྿༴", aux:"྄ཊཋཌཎཾཥྀཻཽྚྛྜྞྺྻྼ", countries:"Bhutan", local:"རྫོང་ཁ་ [dzoŋkʰa]", notes:`Dialects: Wang-The (Thimphu-Punakha), Ha, Northern Thimphu, Adap...`},

"ebu": { name:"Embu (Kîembu)", source:"cldr_ebu", region:"afr", script:"latn", speakers:"320000", letter:"ĩũĨŨ", mark:"̃", countries:"Kenya", local:"Kiembu", notes:`Has two known dialects, Mbeere (Mbere, Kimbeere) and Embu proper.
The fact that Kîembu is written in Wikipedia with an i-circumflex may indicate that at least one character is missing from the CLDR list.`},

"ee": { name:"Ewe", silcode:"ewe", source:"cldr_ee,udhr_ewe", region:"afr", script:"latn", speakers:"20000000", letter:"áàãéèíìóòõúùÁÀÃÉÈÍÌÓÒÕÚÙƒƉƐƑƔƆƲĩŋũĨŊŨẽẼɖɛɣɔʋ", mark:"́̀̃", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕĭŏœŭĂĀĔĬŎŒŬŸâåäæçêëîïñôöøûüÿÂÅÄÆÇÊËÎÏÑÔÖØÛÜ̧̆̂̊̈̄", countries:"Ghana", local:"Èʋegbe‎ (Èwegbe)", notes:`Latin script used since 1850s, primary usage.`},

"ekk": { name:"Standard Estonian", source:"cldr_et,udhr_est", region:"eur", script:"latn", speakers:"1100000", letter:"õäöüÕÄÖÜšžŠŽ", mark:"̌̃̈", aux:"āēīŏōœūĀĒĪŎŌŒŪáàâåæçéèêëíìîïñóòôøúùûÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̂̊̄̆", countries:"Estonia, Finland", local:"Eesti", notes:`ekk is included in the Estonian [et] macrolanguage, and legacy applications often use [et] rather ekk.`},

"el": { name:"Modern Greek", silcode:"ell", source:"cldr_el,udhr_udhr_ell_monotonic,f31d3befd33d4e7a224b580bd5c3737769bba189", region:"eur", script:"grek", speakers:"12000000", letter:"ΆΈΉΊΌΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ", mark:"́̈", punctuation:"«»§‐–—…", aux:"ᾺὰἈἀἉἁἊἂἋἃἌἄἍἅἎἆἏἇᾲᾴᾶᾷᾸᾰᾹᾱᾼᾳᾈᾀᾉᾁᾊᾂᾋᾃᾌᾄᾍᾅᾎᾆᾏᾇῈὲἘἐἙἑἚἒἛἓἜἔἝἕῊὴἨἠἩἡἪἢἫἣἬἤἭἥἮἦἯἧῆῌῃῂῄῇᾘᾐᾙᾑᾚᾒᾛᾓᾜᾔᾝᾕᾞᾖᾟᾗῚὶἸἰἹἱἺἲἻἳἼἴἽἵἾἶἿἷῘῐῙῑῒῖῗῸὸὈὀὉὁὊὂὋὃὌὄὍὅῪὺὐὒὔὖὙὑὛὓὝὕὟὗῨῠῩῡῢῦῧῺὼὨὠὩὡὪὢὫὣὬὤὭὥὮὦὯὧῼῳᾨᾠᾩᾡᾪᾢᾫᾣᾬᾤᾭᾥᾮᾦᾯᾧῲῴῶῷῤῬῥ̀̄̆̓̔͂ͅ", countries:"Greece, Cyprus, Albania", local:"ελληνικά (elliniká), Νέα Ελληνικά‎ (Néa Ellīniká)", notes:`Related Greek language codes include [cpg] (Cappadocian Greek), [gmy] (Mycenaean Greek), [grc] (Ancient Greek (to 1453)), [grk] (Greek languages), [rge] (Romano-Greek), [pnt] (Pontic), [tsd] (Tsakonian), [yej] (Yevanic).<br/>Variants include [monoton] (Monotonic Greek), [polyton] (Polytonic Greek).
In Cyprus, the dialect is reportedly more similar to Classical Greek [grc] in some vocabulary and grammar than that spoken in Greece.
Orthographies include:
* Ancient Greek (polytonic)
* Modern Greek (monotonic) <strong>(shown here)</strong>, however the polytonic Greek characters are included in the list of infrequently used characters.
* Cyrillic, in Ukraine`},

"emk": { name:"Eastern Maninkakan", source:"udhr_emk", region:"afr", script:"latn", speakers:"5000000", letter:"ɲɛɔƝƐƆ", countries:"Guinea, Liberia, Mali, Sierra Leone", notes:`emk is included in the Mandingo [man] macrolanguage, and legacy applications often use [man] rather emk.
Maninka of Liberia is the same as Maninka of Guinea (Eastern Maninkakan). Bambara [bam] of Mali and parts of Senegal is not vastly different. Eastern Maninkakan of Côte d’Ivoire is reportedly similar to Bambara; Western Maninkakan [mlq] of south central and southeast Senegal is considerably different.
Orthographies include:
* Latin  <strong>(shown here)</strong>.
* Arabic (naskh)
* N'Ko, in Guinea. See [emk-nkoo].`},

"emk-nkoo": { name:"Eastern Maninkakan (N'Ko)", rtl:true, source:"4dd61a887ac709179e0e709861288a0b0098c5d8", region:"afr", script:"nkoo", speakers:"5000000", letter:"ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߴߵߺ", mark:"߲߫߬߭߮߯߰߱߳","number":"߀߁߂߃߄߅߆߇߈߉", punctuation:"߷߸߹﴾﴿،؛؟", symbol:"߶", countries:"Guinea", notes:`This is an alternate, N'Ko orthography for Eastern Maninkakan.
For other orthographies see [emk].`},

"en": { name:"English", silcode:"en", source:"cldr_en,udhr_eng", region:"eur", script:"ascii", speakers:"~380000000", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄", notes:`Orthographies include:
* Latin <strong>(shown here)</strong>.
* Deseret Alphabet, limited usage 1854-1877.
* Shavian, no longer in use.`},

"eo": { name:"Esperanto", silcode:"epo", source:"cldr_eo,udhr_epo", region:"eur", script:"latn", speakers:"~3000", letter:"ĉĝĥĵŝŭĈĜĤĴŜŬ", mark:"̂̆", punctuation:"‐–—…‘’“”", local:"Esperanto, Lingvo Internacia"},

"es": { name:"Spanish (Castilian)", silcode:"spa", source:"cldr_es,udhr_spa", region:"eur", script:"latn", speakers:"480000000", letter:"áéíïñóúüýÁÉÍÏÑÓÚÜÝ", mark:"́̈̃", punctuation:"‐–—…‘’“”†‡′″¡¿«»§", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªàâåäãæçèêëìîºòôöøùûÿÀÂÅÄÃÆÇÈÊËÌÎÒÔÖØÙÛ̧̀̆̂̊̄", countries:"Spain, Central &amp; South America, USA, Philippines", local:"Castellano, Español"},

"et": { name:"Estonian", redirect:true, source:"", region:"eur", script:"latn", speakers:"0", notes:`et is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Standard Estonian [ekk], Võro [vro]
Legacy applications often use et rather than [ekk] (Standard Estonian).`},

"eu": { name:"Basque", silcode:"eus", source:"cldr_eu,udhr_eus", region:"eur", script:"latn", speakers:"550000", letter:"çñÇÑ", mark:"̧̃", punctuation:"§‐–—…‘’“”†‡′″","separator":"", symbol:"", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæéèêëíìîïóòôöøúùûüÿÁÀÂÅÄÃÆÉÈÊËÍÌÎÏÓÒÔÖØÚÙÛǗ̀̆̂̊̈̄", countries:"Spain, France", local:"Euskara"},

"eve": { name:"Even (Lamut, Ewen, Eben, Orich, Ilqan)", source:"udhr_eve", region:"nasia", script:"cyrl", speakers:"5700", letter:"стаьябэйилокчурмнхдеҥгөыцпвһюзѳшжъфщСТАЬЯБЭЙИЛОКЧУРМНХДЕҤГӨЫЦПВҺЮЗѲШЖЪФЩ", mark:"̆", punctuation:"‐", countries:"Russia", notes:`There are two standard orthographies in Cyrillic, limited usage.`},

"evn": { name:"Evenki (Tungus, Solon)", source:"udhr_evn", region:"nasia", script:"cyrl", speakers:"17000", letter:"упкатңилэбгдерӣынӯмвчзоюцяьйсёһъщжхфУПКАТҢИЛЭБГДЕРӢЫНӮМВЧЗОЮЦЯЬЙСЁҺЪЩЖХФ", mark:"̄̆̈", punctuation:"–", countries:"China, Russia", notes:`Orthographies include:
* Cyrillic, since 1937, small scale use in Russia. <strong>(shown here)</strong>
* Latin, 1931-1937 in Russia, and limited use in China and on internet since 1983.`},

"ewo": { name:"Ewondo (Kolo)", source:"cldr_ewo", region:"afr", countries:"Cameroon", script:"latn", speakers:"580000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǎǐǹǒǔǍƏƐǏǸǑƆǓěńŋĚŃŊəɛɔ", mark:"́̀̂̌", local:"Ewondo"},

"fa": { name:"Persian (Farsi)", silcode:"fas", redirect:true, source:"", region:"wasia", script:"na", speakers:"0", notes:`fa is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Iranian Persian [pes], Dari, Afghan Persian [prs]
Legacy applications often use fa rather than [pes] (Iranian Persian) or [prs] (Dari, Afghan Persian).`},

"fat": { name:"Fanti (Fantse, Mfantse, Fante)", silcode:"aka", source:"udhr_aka_fante", region:"afr", countries:"Ghana", script:"latn", speakers:"1900000", letter:"ãõÃÕƆƐɔɛ", mark:"̃", notes:`fat is included in the Akan [ak] macrolanguage, and legacy applications often use [ak] rather fat.
Ethnologue regards Fanti as a dialect of Akan: it doesn't have its own entry.
Orthographies include:
* Latin, since 1978 <strong>(shown here)</strong>.`},

"ff": { name:"Fulah (Fulani)", silcode:"ful", source:"", region:"afr", countries:"Benin, Burkina Faso, Cameroon, Chad, Gambia, Ghana, Guinea, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone", script:"latn", speakers:"24000000", letter:"ñÑƴƁƊƳŋŊɓɗ", mark:"̃", notes:`ff is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Maasina Fulfulde [ffm], Adamawa Fulfulde [fub], Pulaar [fuc], Borgu Fulfulde [fue], Pular [fuf], Western Niger Fulfulde [fuh], Bagirmi Fulfulde [fui], Central-Eastern Niger Fulfulde [fuq], Nigerian Fulfulde [fuv]
There is no indicated equivalence between one of the latter subtags and the macrolanguage subtag.
The orthography shown here is that indicated in CLDR.  It's not clear whether it is a superset of all the latter language subtags or relates to a particular subtag or subtags.`},

"fi": { name:"Finnish", silcode:"fin", source:"cldr_fi,udhr_fin", region:"eur", countries:"Finland, Sweden, Russia", script:"latn", speakers:"5400000", letter:"åäöÅÄÖšžŠŽ", mark:"̌̊̈", punctuation:"»§‐–…’”", aux:"ăąāćčċďđěėęēğģħįīıķĺľļłńňņŋőœŕřśŝşťţŧůűųūźżĂĄĀĆČĊĎĐĚĖĘĒĞĢĦİĮĪĶĹĽĻŁŃŇŅŊŐŒŔŘŚŜŞŤŢŦŮŰŲŪŸŹŻʒǧǥȟǩșțǯǦǤȞǨȘȚƷǮáàâãçðéèêëíîïñóòôõßúùûýÿüþæøÁÀÂÃÇÐÉÈÊËÍÎÏÑÓÒÔÕÚÙÛÝÜÞÆØ̨̧̦̇́̀̆̂̃̄̋", local:"Suomi", notes:`Finnish is closely related to Karelian [krl] and Livvi [olo]. In the Russian Federation eastern dialects merge gradually into Karelian.`},

"fil": { name:"Filipino", source:"cldr_fil", region:"seasia", countries:"Philippines", script:"latn", speakers:"28000000", letter:"ñÑ", mark:"̃", punctuation:"§‐–—…‘’“”′″", aux:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ́̀̂", local:"Filipino", notes:`Primarily based on Tagalog [tgl] with some terminology imported from other regional languages.
Orthographies include:
* Latin <strong>(shown here)</strong>
* Tagalog, no longer in use.`},

"fj": { name:"Fijian", silcode:"fij", source:"udhr_fij", region:"oce", countries:"Fiji", script:"ascii", speakers:"339210", local:"Na Vosa Vakaviti"},

"fo": { name:"Faroese", silcode:"fao", source:"cldr_fo,udhr_fao", region:"eur", countries:"Faroe Islands", script:"latn", speakers:"66000", letter:"áðíóúýæøÁÐÍÓÚÝÆØ", mark:"́", punctuation:"́§‐–…‘’“”†′″", local:"Føroyskt"},

"fon": { name:"Fon", source:"udhr_fon", region:"afr", countries:"Benin, Togo", script:"latn", speakers:"2200000", letter:"óéòèáúàìùíÓÉÒÈÁÚÀÌÙÍǎǐǔƐƆƉǍǏǓěđĚĐɛɔɖ", mark:"́̌̀", local:"Fongbe"},

"fr": { name:"French", silcode:"fra", source:"cldr_fr,udhr_fra", region:"eur", countries:"France, etc.", script:"latn", speakers:"150000000", letter:"àâæçéèêëîïôùûüÿÀÂÆÇÉÈÊËÎÏÔÙÛÜœŒŸ", mark:"̧̀̂́̈", punctuation:"«»§‐–—…’“”†‡", aux:"āćēīĳřšſĀĆĒĪĲŘŠǔǓáåäãíìñóòöõøßúÁÅÄÃÍÌÑÓÒÖÕØÚ̊̃̄̌", local:"français"},

"fuf": { name:"Pular", source:"udhr_fuf", region:"afr", countries:"Guinea, Sierra Leone, Senegal, Mali", script:"ascii", speakers:"3000000", local:"Pular", notes:`fuf is included in the Fulah [ff] macrolanguage.
Orthographies include:
* Latin <strong>(shown here)</strong>.
* Adlam, since 1989, in development. See [fuf-adlm]
* Arabic (naskh).`},

"fuf-adlm": { name:"Pular", rtl:true, source:"udhr_fuf_adlm", region:"afr", script:"adlm", speakers:"3000000", letter:"𞤩𞤢𞤲𞤺𞤭𞤣𞤫𞤸𞤤𞤴𞤳𞤮𞤪𞤶𞤯𞤼𞤵𞤱𞤬𞤥𞤧𞤨𞤻𞤦𞤷𞤰𞤾𞤇𞤀𞤐𞤘𞤋𞤁𞤉𞤖𞤂𞤒𞤑𞤌𞤈𞤔𞤍𞤚𞤓𞤏𞤊𞤃𞤅𞤆𞤙𞤄𞤕𞤎𞤜ŋŊƭƬ", mark:"𞥆𞥅𞥄", punctuation:"،؛’⹁","number":"𞥒𞥓𞥔𞥕𞥖𞥗𞥘𞥙𞥑𞥐", notes:`This is an alternate, Adlam-script orthography for Pular, which Ethnologue describes as in development since 1989.
For other orthographic information see [fuf].`},

"fur": { name:"Friulian (Friulan, Eastern Ladin)", source:"cldr_fur,udhr_fur", region:"eur", countries:"Italy", script:"latn", speakers:"600000", letter:"àâçèêìîòôùûÀÂÇÈÊÌÎÒÔÙÛ", mark:"̧̀̂", aux:"čğšČĞŠåéëïñóüÅÉËÏÑÓÜ̊̌́̈̆̃", local:"Furlan"},

"fy": { name:"West Frisian", silcode:"fry", source:"cldr_fy,udhr_fri", region:"eur", countries:"Netherlands", script:"latn", speakers:"470000", letter:"ûâêúôòëïáàäéèíóöüýÛÂÊÚÔÒËÏÁÀÄÉÈÍÓÖÜÝ", mark:"̂́̀̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"æùÆÙ", local:"Frysk"},

"ga": { name:"Irish", silcode:"gle", source:"cldr_ga,udhr_gle", region:"eur", countries:"Ireland", script:"latn", speakers:"74000", letter:"áéíóúÁÉÍÓÚ", mark:"́", aux:"ḃḋḟṁṗṡṫḂḊḞṀṖṠṪċġĊĠåÅ̊̇", local:"Gaeilge", notes:`Orthographies include:
* Latin <strong>(shown here)</strong>. [Latg] is a special script tag for the Gaelic variant of Latin.
* Ogham, no longer in use.`},

"gaa": { name:"Ga", source:"udhr_gaa", region:"afr", countries:"Ghana", script:"latn", speakers:"745000", letter:"ãÃƆƐŋŊɔɛ", mark:"̃", local:"Ga", notes:`Latin script has been used since 1975`},

"gag": { name:"Gagauz", source:"udhr_gag", region:"eur", countries:"Moldova, Ukraine", script:"latn", speakers:"590000", letter:"üäêöçÜÄÊÖÇışţŞİŢ", mark:"̧̇̈̂", punctuation:"—", local:"Gagauz dili, Gagauzça", notes:`Orthographies include:
* Greek, until 1957.
* Cyrillic, 1957-1991.
* Latin <strong>(shown here)</strong>.`},

"gd": { name:"Gaelic (Scots Gaelic)", silcode:"gla", source:"cldr_gd,udhr_gla", region:"eur", countries:"Scotland", script:"latn", speakers:"57000", letter:"ìàòèùÌÀÒÈÙ", mark:"̀", aux:"ḋḟṁṗṡṫḊḞṀṖṠṪăāċĕēġĭīıłŏōœşŭūĂĀĊĔĒĠĬĪŁŎŌŒŞŬŪŸșȘáâåäãæçéêëíîïñóôöøúûüÿÁÂÅÄÃÆÇÉÊËÍÎÏÑÓÔÖØÚÛǗ̧̦̆̂̊̈̃̄̇", local:"Gàidhlig"},

"gjn": { name:"Gonja", source:"udhr_gjn", region:"afr", countries:"Ghana", script:"latn", speakers:"230000", letter:"ƐƆŋŊɛɔ", local:"Ngbanyito", notes:`Latin script used since 1970.`},

"gl": { name:"Galician", silcode:"glg", source:"cldr_gl,udhr_glg", region:"eur", countries:"Spain, Portugal", script:"latn", speakers:"2400000", letter:"áéíñóúüªÁÉÍÑÓÚÜ", mark:"́̃̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"ªàâåäãçèêëìîïºòôöõùûÀÂÅÄÃÇÈÊËÌÎÏÒÔÖÕÙÛ̧̀̂̊", local:"Galego"},

"gld": { name:"Nanai (Gold, Goldi, Hezhen)", source:"udhr_gld", region:"nasia", countries:"Russia", script:"cyrl", speakers:"1400", letter:"найпрвослиебщдкцягьмзюуёчэӈтхӣӯъфжНАЙПРВОСЛИЕБЩДКЦЯГЬМЗЮУЁЧЭӇТХӢӮЪФЖ", mark:"̄̆̈", punctuation:"–"},

"gsw": { name:"Swiss German", source:"cldr_gsw", region:"eur", countries:"Switzerland, France, Austria, Liechtenstein", script:"latn", speakers:"4930000", letter:"äöüÄÖÜ", mark:"̈", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåæçéèêëíìîïñóòôøúùûÿÁÀÂÅÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̊̄̃", local:"Schwyzerdütsch"},

"gu": { name:"Gujarati", silcode:"guj", source:"cldr_gu,udhr_guj,cd18536eac759a61da40080d717664d64a29b397", region:"sasia", countries:"India, Tanzania, Kenya, Bahrain, Zambia, Pakistan", script:"gujr", speakers:"49000000", letter:"ૐઅઆઇઈઉઊઋૠઍએઐઑઓઔકખગઘઙચછજઝઞટઠડઢણતથદધનપફબભમયરલવશષસહળઽ", mark:"઼ંઁઃાિીુૂૃૄૅેૈૉોૌ્", punctuation:"§‐–—…‘’“”†‡′″", symbol:"૱","number":"૧૨૩૪૫૬૭૮૯૦", other:"‍‌", aux:"૰।॥", local:"ગુજરાત‎ (Gujarātī)", notes:`Orthographies include:
* Gujarati (primary usage) <strong>(shown here)</strong>.
* Khojki.`},

"guc": { name:"Wayuu (Wayu, Wayúu, Guajiro, Wahiro)", source:"udhr_guc", region:"sam", countries:"Colombia, Venezuela", script:"latn", speakers:"437780", letter:"üñÜÑ", mark:"̈̃", local:"Wayuunaiki"},

"gug": { name:"Paraguayan Guarani", source:"udhr_gug", region:"sam", countries:"Paraguay", script:"latn", speakers:"6000000", letter:"óáñéãíúõèÓÁÑÉÃÍÚÕÈʼĩũĨŨẽẼ", mark:"́̃̀", local:"Avañe’ẽ"},

"guu": { name:"Yanomamö", source:"udhr_guu", region:"sam", countries:"Venezuela, Brazil", script:"latn", speakers:"20000", letter:"ëãáõíËÃÁÕÍĩũĨŨẽẼ", mark:"̈̃́", local:"Yanomamɨ", notes:`The crossed i in the autonym suggests that there are more letters, or an alternate orthography.`},

"guz": { name:"Gusii (Kisii, Ekegusii)", source:"cldr_guz", region:"afr", countries:"Kenya", script:"ascii", speakers:"2200000", local:"Ekegusii"},

"gv": { name:"Manx (Manx Gaelic, Manks)", silcode:"glv", source:"cldr_gv,udhr_glv", region:"eur", countries:"Isle of Man", script:"latn", speakers:"0", letter:"çÇ", mark:"̧", punctuation:"’", local:"Gaelg", notes:`Last native speaker died in 1974.  Ethnologue lists 1,660 second language speakers.`},

"gyr": { name:"Guarayu", source:"udhr_gyr", region:"sam", countries:"Bolivia", script:"latn", speakers:"5900", letter:"ëñäüöéïËÑÄÜÖÉÏ", mark:"̈̃́", punctuation:"’"},

"ha": { name:"Hausa", silcode:"hau", source:"cldr_ha,udhr_hau_NE,udhr_hau_NG", region:"afr", countries:"Nigeria, Niger, Côte d'Ivoire, Benin, Chad, Sudan", script:"latn", speakers:"70000000", letter:"ƙƴƁƊƘƳɓɗʼ", punctuation:"‐’‘", aux:"ƴƳáàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛ̃́̀̂", local:"Hausa", notes:`Orthographies include:
* Arabic (naskh).
* Latin, since 1880, primary usage <strong>(shown here)</strong>.`},

"haw": { name:"Hawaiian", source:"cldr_haw,udhr_haw", region:"oce", countries:"USA", script:"latn", speakers:"24000", letter:"āēīōūĀĒĪŌŪʻ", mark:"̄", punctuation:"’‘“”", local:" ’Olelo Hawai’i"},

"he": { name:"Hebrew", silcode:"heb", rtl:true, source:"cldr_he,udhr_heb,354bc8cccb82991d56ad51ac6f1c3b8437b28055", region:"wasia", countries:"Israel, etc.", script:"hebr", speakers:"9000000", letter:"אבגדהוזחטיכךלמםנןסעפףצץקרשת", punctuation:"׳״־‐–—", symbol:"₪", other:"‍‌‏‎⁧⁦⁩‫‪‬͏", aux:"ְֱֲֳִֵֶַָֹֻּׁׂ", local:" עברית‎ (Ivrit), עברית חדשה‎ (ivrít ḥadašá[h])"},

"hi": { name:"Hindi", silcode:"hin", source:"cldr_hi,udhr_hin,9d8e188be96400153901b55006feaaf9fd4bf3b1", region:"sasia", countries:"India, Nepal, Singapore, South Africa", script:"deva", speakers:"260000000", letter:"अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह\u{958}\u{959}\u{95A}\u{95B}\u{95C}\u{95D}\u{95E}", mark:"ँंः़ािीुूृेैोौ्", punctuation:"।॥॰‘’“”—","number":"०१२३४५६७८९", other:"‍‌", aux:"ऍऑऽॐॅॉ", local:" मानक हिन्दी‎ (Mānak Hindī), हिन्दी‎ (Hindī)", notes:`Orthographies include:
* Devanagari <strong>(shown here)</strong>
* Newa, archaic usage, no longer in use.`},

"hil": { name:"Hiligaynon (Ilonggo)", source:"udhr_hil", region:"seasia", countries:"Philippines", script:"ascii", speakers:"9300000", local:"Hiligaynon, Ilonggo"},

"hlt": { name:"Matu Chin", source:"udhr_hlt", region:"seasia", countries:"Myanmar, India", script:"ascii", speakers:"40000", local:"Matu Chin"},

"hna": { name:"Mina (Hina, Besleri)", source:"udhr_hna", region:"afr", countries:"Cameroon", script:"latn", speakers:"11000", letter:"éáìóòúíàèùÉÁÌÓÒÚÍÀÈÙǒǐǔǹƉƐƆǑǏǓǸŋŊɖɛɔ", mark:"̀́̌", notes:`Ethnologue lists this as unwritten.`},

"hni": { name:"Hani", source:"udhr_hni", region:"easia", countries:"China, Vietnam", script:"ascii", speakers:"760000", local:"Ha Nhi", notes:`Ethnologue says that the (Latin) orthography is pinyin-based, used in 1958–1964 and from 1982, experimental, used in education, literature, and media.`},

"hns": { name:"Caribbean Hindustani (Sarnami Hindustani)", source:"udhr_hns", region:"carib", countries:"Suriname, Guyana, Trinidad &amp; Tobago", script:"latn", speakers:"166000", letter:"áêòíèàëÁÊÒÍÈÀË", mark:"́̂̀̈", punctuation:"‘’", local:"Sarnaanie Hiendoestaanie"},

"hr": { name:"Croatian", silcode:"hrv", source:"cldr_hr,udhr_hrv", region:"eur", countries:"Croatia, Slovenia, Bosnia &amp; Herzegovina, Austria, Hungary", script:"latn", speakers:"5600000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–—…‘’‚“”„′″", local:"Hrvatski", notes:`hr is included in the Serbo-Croatian [sh] macrolanguage.`},

"hsb": { name:"Upper Sorbian", source:"cldr_hsb,udhr_hsb", region:"eur", countries:"Germany", script:"latn", speakers:"13000", letter:"čćźěłńřšžČĆŹĚŁŃŘŠŽóÓ", mark:"̌́", punctuation:"«»§‐–—…‘’‚“„", aux:"ăąāďđĕėęēğĭīıĺľňŏőōœŕśşťŭůűūżĂĄĀĎĐĔĖĘĒĞĬİĪĹĽŇŎŐŌŒŔŚŞŤŬŮŰŪŸŻáàâåäãæçéèêëíìîïñòôöøßúùûüýÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÒÔÖØÚÙÛÜÝ̨̧̇̀̆̂̊̈̃̄̋", local:"Hornjoserbski, Hornjoserbšćina"},

"ht": { name:"Haitian Creole", silcode:"hat", source:"udhr_hat_kreyol,udhr_hat_popular", region:"carib", countries:"Haiti, Domenican Republic", script:"latn", speakers:"113000", letter:"èéòÈÉÒ", mark:"̀́", local:"Kreyòl Ayisyen"},

"hu": { name:"Hungarian", silcode:"hu", source:"cldr_hu,udhr_hun", region:"eur", countries:"Hungary, Romania, Slovakia, Serbia, Ukraine, Israel, Austria", script:"latn", speakers:"13000000", letter:"áéíóöúüÁÉÍÓÖÚÜőűŐŰ", mark:"́̈̋", punctuation:"«»§–…’”„", symbol:"⁒", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåäãæçèêëìîïñòôøùûÿÀÂÅÄÃÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̃̄", local:"Magyar"},

"hus": { name:"Huastec (Wasteko, Teenek)", source:"udhr_hus", region:"cam", countries:"Mexico", script:"latn", speakers:"160000", letter:"íáúéóàÍÁÚÉÓÀ", mark:"°́̀", local:"Teenek"},

"huu": { name:"Murui Huitoto (Bue, Witoto Murui, Witoto)", source:"udhr_huu", region:"sam", countries:"Colombia, Peru", script:"latn", speakers:"7800", letter:"úñáÚÑÁƗɨ", mark:"́̃", local:"Murui"},

"hy": { name:"Armenian", silcode:"hye", source:"cldr_hy,udhr_hye,86422c72473b4ace41b3971e55e41a49a44dcbda", region:"wasia", countries:"Armenia, Russia, Azerbaijan, Iran", script:"armn", speakers:"10000000", letter:"աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքևօֆԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ", punctuation:"֊՝՜՞՛։․«»", aux:"֍֎֏","deprecated":"՚", local:"հայերէն/հայերեն‎ (hayeren)", notes:`See also Western Armenian [hyw].`},

"ibb": { name:"Ibibio", source:"udhr_ibb", region:"afr", countries:"Nigeria", script:"latn", speakers:"2000000", letter:"ñÑ", mark:"̃", local:"Ibibio"},

"id": { name:"Indonesian", silcode:"ind", source:"cldr_id,udhr_ind", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"43000000", punctuation:"‐–—…‘’“”", aux:"å", local:"Bahasa Indonesia", notes:`Orthographies include:
* Latin <strong>(shown here)</strong>.
* Arabic (naskh).`},

"ig": { name:"Igbo", silcode:"ibo", source:"cldr_ig,udhr_ibo", region:"afr", countries:"Nigeria", script:"latn", speakers:"24000000", letter:"ẹịṅọụẸỊṄỌỤ", mark:"̣̇", punctuation:"‐", local:"Igbo", notes:`Latin orthography since 1900.`},

"ii": { name:"Nuosu (Nosu, Northern Yi, Liangshan Yi, Sichuan Yi)", silcode:"iii", source:"cldr_ii,udhr_iii", region:"easia", countries:"China", script:"yiii", speakers:"2000000", letter:"ꀀꀁꀂꀃꀄꀅꀆꀇꀈꀉꀊꀋꀌꀍꀎꀏꀐꀑꀒꀓꀔꀕꀖꀗꀘꀙꀚꀛꀜꀝꀞꀟꀠꀡꀢꀣꀤꀥꀦꀧꀨꀩꀪꀫꀬꀭꀮꀯꀰꀱꀲꀳꀴꀵꀶꀷꀸꀹꀺꀻꀼꀽꀾꀿꁀꁁꁂꁃꁄꁅꁆꁇꁈꁉꁊꁋꁌꁍꁎꁏꁐꁑꁒꁓꁔꁕꁖꁗꁘꁙꁚꁛꁜꁝꁞꁟꁠꁡꁢꁣꁤꁥꁦꁧꁨꁩꁪꁫꁬꁭꁮꁯꁰꁱꁲꁳꁴꁵꁶꁷꁸꁹꁺꁻꁼꁽꁾꁿꂀꂁꂂꂃꂄꂅꂆꂇꂈꂉꂊꂋꂌꂍꂎꂏꂐꂑꂒꂓꂔꂕꂖꂗꂘꂙꂚꂛꂜꂝꂞꂟꂠꂡꂢꂣꂤꂥꂦꂧꂨꂩꂪꂫꂬꂭꂮꂯꂰꂱꂲꂳꂴꂵꂶꂷꂸꂹꂺꂻꂼꂽꂾꂿꃀꃁꃂꃃꃄꃅꃆꃇꃈꃉꃊꃋꃌꃍꃎꃏꃐꃑꃒꃓꃔꃕꃖꃗꃘꃙꃚꃛꃜꃝꃞꃟꃠꃡꃢꃣꃤꃥꃦꃧꃨꃩꃪꃫꃬꃭꃮꃯꃰꃱꃲꃳꃴꃵꃶꃷꃸꃹꃺꃻꃼꃽꃾꃿꄀꄁꄂꄃꄄꄅꄆꄇꄈꄉꄊꄋꄌꄍꄎꄏꄐꄑꄒꄓꄔꄕꄖꄗꄘꄙꄚꄛꄜꄝꄞꄟꄠꄡꄢꄣꄤꄥꄦꄧꄨꄩꄪꄫꄬꄭꄮꄯꄰꄱꄲꄳꄴꄵꄶꄷꄸꄹꄺꄻꄼꄽꄾꄿꅀꅁꅂꅃꅄꅅꅆꅇꅈꅉꅊꅋꅌꅍꅎꅏꅐꅑꅒꅓꅔꅕꅖꅗꅘꅙꅚꅛꅜꅝꅞꅟꅠꅡꅢꅣꅤꅥꅦꅧꅨꅩꅪꅫꅬꅭꅮꅯꅰꅱꅲꅳꅴꅵꅶꅷꅸꅹꅺꅻꅼꅽꅾꅿꆀꆁꆂꆃꆄꆅꆆꆇꆈꆉꆊꆋꆌꆍꆎꆏꆐꆑꆒꆓꆔꆕꆖꆗꆘꆙꆚꆛꆜꆝꆞꆟꆠꆡꆢꆣꆤꆥꆦꆧꆨꆩꆪꆫꆬꆭꆮꆯꆰꆱꆲꆳꆴꆵꆶꆷꆸꆹꆺꆻꆼꆽꆾꆿꇀꇁꇂꇃꇄꇅꇆꇇꇈꇉꇊꇋꇌꇍꇎꇏꇐꇑꇒꇓꇔꇕꇖꇗꇘꇙꇚꇛꇜꇝꇞꇟꇠꇡꇢꇣꇤꇥꇦꇧꇨꇩꇪꇫꇬꇭꇮꇯꇰꇱꇲꇳꇴꇵꇶꇷꇸꇹꇺꇻꇼꇽꇾꇿꈀꈁꈂꈃꈄꈅꈆꈇꈈꈉꈊꈋꈌꈍꈎꈏꈐꈑꈒꈓꈔꈕꈖꈗꈘꈙꈚꈛꈜꈝꈞꈟꈠꈡꈢꈣꈤꈥꈦꈧꈨꈩꈪꈫꈬꈭꈮꈯꈰꈱꈲꈳꈴꈵꈶꈷꈸꈹꈺꈻꈼꈽꈾꈿꉀꉁꉂꉃꉄꉅꉆꉇꉈꉉꉊꉋꉌꉍꉎꉏꉐꉑꉒꉓꉔꉕꉖꉗꉘꉙꉚꉛꉜꉝꉞꉟꉠꉡꉢꉣꉤꉥꉦꉧꉨꉩꉪꉫꉬꉭꉮꉯꉰꉱꉲꉳꉴꉵꉶꉷꉸꉹꉺꉻꉼꉽꉾꉿꊀꊁꊂꊃꊄꊅꊆꊇꊈꊉꊊꊋꊌꊍꊎꊏꊐꊑꊒꊓꊔꊕꊖꊗꊘꊙꊚꊛꊜꊝꊞꊟꊠꊡꊢꊣꊤꊥꊦꊧꊨꊩꊪꊫꊬꊭꊮꊯꊰꊱꊲꊳꊴꊵꊶꊷꊸꊹꊺꊻꊼꊽꊾꊿꋀꋁꋂꋃꋄꋅꋆꋇꋈꋉꋊꋋꋌꋍꋎꋏꋐꋑꋒꋓꋔꋕꋖꋗꋘꋙꋚꋛꋜꋝꋞꋟꋠꋡꋢꋣꋤꋥꋦꋧꋨꋩꋪꋫꋬꋭꋮꋯꋰꋱꋲꋳꋴꋵꋶꋷꋸꋹꋺꋻꋼꋽꋾꋿꌀꌁꌂꌃꌄꌅꌆꌇꌈꌉꌊꌋꌌꌍꌎꌏꌐꌑꌒꌓꌔꌕꌖꌗꌘꌙꌚꌛꌜꌝꌞꌟꌠꌡꌢꌣꌤꌥꌦꌧꌨꌩꌪꌫꌬꌭꌮꌯꌰꌱꌲꌳꌴꌵꌶꌷꌸꌹꌺꌻꌼꌽꌾꌿꍀꍁꍂꍃꍄꍅꍆꍇꍈꍉꍊꍋꍌꍍꍎꍏꍐꍑꍒꍓꍔꍕꍖꍗꍘꍙꍚꍛꍜꍝꍞꍟꍠꍡꍢꍣꍤꍥꍦꍧꍨꍩꍪꍫꍬꍭꍮꍯꍰꍱꍲꍳꍴꍵꍶꍷꍸꍹꍺꍻꍼꍽꍾꍿꎀꎁꎂꎃꎄꎅꎆꎇꎈꎉꎊꎋꎌꎍꎎꎏꎐꎑꎒꎓꎔꎕꎖꎗꎘꎙꎚꎛꎜꎝꎞꎟꎠꎡꎢꎣꎤꎥꎦꎧꎨꎩꎪꎫꎬꎭꎮꎯꎰꎱꎲꎳꎴꎵꎶꎷꎸꎹꎺꎻꎼꎽꎾꎿꏀꏁꏂꏃꏄꏅꏆꏇꏈꏉꏊꏋꏌꏍꏎꏏꏐꏑꏒꏓꏔꏕꏖꏗꏘꏙꏚꏛꏜꏝꏞꏟꏠꏡꏢꏣꏤꏥꏦꏧꏨꏩꏪꏫꏬꏭꏮꏯꏰꏱꏲꏳꏴꏵꏶꏷꏸꏹꏺꏻꏼꏽꏾꏿꐀꐁꐂꐃꐄꐅꐆꐇꐈꐉꐊꐋꐌꐍꐎꐏꐐꐑꐒꐓꐔꐕꐖꐗꐘꐙꐚꐛꐜꐝꐞꐟꐠꐡꐢꐣꐤꐥꐦꐧꐨꐩꐪꐫꐬꐭꐮꐯꐰꐱꐲꐳꐴꐵꐶꐷꐸꐹꐺꐻꐼꐽꐾꐿꑀꑁꑂꑃꑄꑅꑆꑇꑈꑉꑊꑋꑌꑍꑎꑏꑐꑑꑒꑓꑔꑕꑖꑗꑘꑙꑚꑛꑜꑝꑞꑟꑠꑡꑢꑣꑤꑥꑦꑧꑨꑩꑪꑫꑬꑭꑮꑯꑰꑱꑲꑳꑴꑵꑶꑷꑸꑹꑺꑻꑼꑽꑾꑿꒀꒁꒂꒃꒄꒅꒆꒇꒈꒉꒊꒋꒌ", punctuation:"《》。、，（）：", local:"Nuosu", notes:`Orthographies include:
* Latin, 1951-1957, 1958-1960, from 1975.
* Yi, standard version used since 1975, and primary usage <strong>(shown here)</strong>.`},

"ilo": { name:"Ilocano (Ilokano)", source:"udhr_ilo", region:"seasia", countries:"Philippines", script:"ascii", speakers:"9100000", local:"Ilokano", notes:`Orthographies include:
* Latin, primary usage <strong>(shown here)</strong>.
* Tagalog, no longer in use.`},

"io": { name:"Ido", source:"udhr_ido", region:"eur", script:"ascii", speakers:"300"},

"is": { name:"Icelandic", silcode:"isl", source:"cldr_is,udhr_isl", region:"eur", countries:"Iceland", script:"latn", speakers:"331000", letter:"áðéíóúýþæöÁÐÉÍÓÚÝÞÆÖ", mark:"́̈", punctuation:"§‐–—…‘‚“„†‡′″", local:"Íslenska"},

"it": { name:"Italian", silcode:"ita", source:"cldr_it,udhr_ita", region:"eur", countries:"Italy, Romania, Switzerland, Vatican State, San Marino, etc.", script:"latn", speakers:"64000000", letter:"àéèìóòùÀÉÈÌÓÒÙ", mark:"̀́", punctuation:"«»—…’“”", aux:"œŒŸªáâåäãæçêëíîïñºôöõøßúûüÿÁÂÅÄÃÆÇÊËÍÎÏÑÔÖÕØÚÛÜ̧̂̊̈̃", local:"Italiano"},

"iu": { name:"Inuktitut", silcode:"iku", redirect:true, source:"", region:"nam", script:"na", speakers:"", notes:`iu is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Eastern Canadian Inuktitut [ike], Inuinnaqtun, Western Canadian Inuktitut [ikt].
Legacy applications often use iu rather than [ike].
`},

"ike": { name:"Eastern Canadian Inuktitut", source:"udhr_ike", region:"nam", countries:"Canada", script:"cans", speakers:"34000", letter:"ᓯᓚᕐᔪᐊᒥᐅᑦᓇᓗᐃᖅᑎᖓᑭᒃᑯᑐᓐᐱᖏᕆᑲᓂᔾᔨᓄᒪᒻᑖᕈᖃᑕᕋᓪᒍᓴᖕᓕᕇᖢᕗᒋᒧᒐᖁᔭᑰᒌᙱᒫᕌᕙᒎᕕᕝᓘᓃᓱᓈᙵᓅᐹᓵᐸᔫᓲᐳᓖᖂᑑᐆᖑᙳᖔᕿᒡᓛᓰᖤᐋᑉᔮᔅᒨᑏᒦ", mark:"̃", local:"ᐃᓄᒃᑎᑐᑦ‎ (Inuktitut)"},

"jgo": { name:"Ngomba (Ngomba Bamileke)", source:"cldr_jgo", region:"afr", countries:"Cameroon", script:"latn", speakers:"63000", letter:"áâíîúûÁÂÍÎÚÛꞌꞋǎǐǹǔǍƐǏǸƆǓɄńŋŃŊḿẅḾẄɛɔʉ", mark:"́̀̂̌̄̈", punctuation:"«»‹›", local:"Cú-Mbɔ́ndaa"},

"jiv": { name:"Shuar", source:"udhr_jiv", region:"sam", countries:"Ecuador", script:"latn", speakers:"35000", letter:"áíúéÁÍÚÉ", mark:"́", local:"Shuar Chicham"},

"jmc": { name:"Machame", source:"cldr_jmc", region:"afr", countries:"Tanzania", script:"ascii", speakers:"400000", local:"Kimashami"},

"jv": { name:"Javanese", silcode:"jav", source:"cldr_jv,udhr_jav,87bfc19c48736ce0e4045004f1485477badda620", region:"seasia", countries:"Indonesia, Singapore", script:"ascii", speakers:"94000000", letter:"ÂÅÈÉÊÌÒÙâåèéêìòù", mark:"̀́̂̊", punctuation:"‰", local:"Jawa", notes:`Orthographies include:
* Javanese, no longer in use.  See [jv-java].
* Latin <strong>(shown here)</strong>.`},

"jv-java": { name:"Javanese", silcode:"jav", source:"6c4597409a211714769081f0db0c92a0314ede5f", region:"seasia", countries:"Indonesia, Singapore", script:"java", speakers:"94000000", letter:"ꦄꦆꦇꦈꦉꦊꦋꦌꦎꦏꦑꦒꦓꦔꦕꦖꦗꦘꦚꦛꦝꦟꦠꦡꦢꦤꦥꦦꦧꦨꦩꦪꦫꦭꦮꦱꦲꧏ", mark:"ꦀꦁꦂꦃ꦳ꦴꦶꦸꦺꦼꦽꦾꦿ꧀","number":"꧐꧑꧒꧓꧔꧕꧖꧗꧘꧙", punctuation:"꧁꧂꧃꧄꧅꧆꧇꧈꧉꧊꧋꧌꧍", aux:"ꦙꦜꦞꦣꦯꦰ꧞꧟", notes:`This is an alternate, Javanese-script orthography for Javanese.
For other orthographies see [jv].`},

"ka": { name:"Georgian", silcode:"kat", source:"cldr_ka,udhr_kat,2cafedfc80733bd49fb1ee6af49657333a88c1a3", region:"eur", countries:"Georgia, Turkey, Iran", script:"geor", speakers:"3700000", letter:"აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ", punctuation:"჻«»§‐–—…‘‚“„†‡′″", symbol:"№", aux:"ᲐᲑᲒᲓᲔᲕᲖᲗᲘᲙᲚᲛᲜᲝᲞᲟᲠᲡᲢᲣᲤᲥᲦᲧᲨᲩᲪᲫᲬᲭᲮᲯᲰ", local:"ქართული‎ (Kartuli), ქართული ენა‎ (Kartuli ena)", related:`Orthographies include:
* Mkhedruli &amp; mtavruli <strong>(shown here)</strong>.
* Khutsuri (asomtavruli &amp; nuskhuri), no longer in use except liturgically.`},

"kab": { name:"Kabyle (Kabylian)", source:"cldr_kab", region:"afr", countries:"Algeria", script:"latn", speakers:"5500000", letter:"ǧƐǦƔčČḍḥṛṣṭẓḌḤṚṢṬẒɛɣ", mark:"̣̌", punctuation:"‰", local:"Taqbaylit", related:`Orthographies include:
* Latin, primary usage <strong>(shown here)</strong>.
* Tifinagh, symbolic use only.`},

"kam": { name:"Kamba (Kikamba)", source:"cldr_kam", region:"afr", countries:"Kenya, Tanzania", script:"latn", speakers:"3900000", letter:"ĩũĨŨ", mark:"̃", local:"Kĩĩkamba"},

"kbd": { name:"Kabardian (Kabardino-Cherkess, East Circassian)", source:"udhr_kbd", region:"eur", countries:"Turkey, Russia, Jordan, Syria", script:"cyrl", speakers:"1600000", letter:"цӏыхуэфащмтеднйпсожлъкрзгьибяшвчіюЦӀЫХУЭФАЩМТЕДНЙПСОЖЛЪКРЗГЬИБЯШВЧІЮ", mark:"̆", local:" Къэбэрдей Адыгэбзэ‎ (Qăbărdey Adəgăbză)"},

"kbp": { name:"Kabiye", source:"udhr_kpb", region:"afr", countries:"Togo", script:"latn", speakers:"1000000", letter:"ñÑƆƐƱƉƖƔŋŊɔɛʊɖɩɣ", mark:"̃", local:"Kabɩyɛ, Kabɩyɛ Tɔm"},

"kde": { name:"Makonde (Kimakonde)", source:"cldr_kde,udhr_kde", region:"afr", countries:"Tanzania, Mozambique", script:"ascii", speakers:"1400000", local:"Chimakonde"},

"kdh": { name:"Tem (Temba, Kotokoli, Cotocoli)", source:"udhr_kdh", region:"afr", countries:"Togo, Ghana, Benin", script:"latn", speakers:"290000", letter:"íáéúóÿÍÁÉÚÓƖƱƐƉƆńŋŃŸŊḿḾɩʊɛɖɔ", mark:"́̈", local:"Tem", related:`Orthographies include:
* Arabic (naskh).
* Latin <strong>(shown here)</strong>.`},

"kea": { name:"Kabuverdianu (Cape Verdean Creole)", source:"cldr_kea,udhr_kea", region:"afr", countries:"Cape Verde Islands, USA, Portugal", script:"latn", speakers:"1200000", letter:"ñçêéâíèáôóãºõúàòÑÇÊÉÂÍÈÁÔÓÃÕÚÀÒ", mark:"̧̃̂́̀", punctuation:"’", aux:"ẽẼăāĕēĭĩīŏōœŭũūĂĀĔĒĬĨĪŎŌŒŬŨŪŸªáàâåäãæçéèêëíìîïºóòôöõøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÓÒÔÖÕØÚÙÛǗ̧̀̆̂̊̈̄", local:"Kabuverdianu, Kriol", notes:`Latin orthography known as ALUPEC.`},

"kg": { name:"Kongo", silcode:"kon", redirect:true, source:"", region:"afr", script:"na", speakers:"6500000", related:`kg is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Koongo [kng], San Salvador Kongo [kwy], Laari [ldi].
Legacy applications often use kg rather than [kng].
`},

"kha": { name:"Khasi", source:"udhr_kha", region:"sasia", countries:"India", script:"latn", speakers:"1128575", letter:"ïñÏÑ", mark:"̈̃", local:"Khasi", related:`Orthographies include:
* Bengali (Bangla), no longer in use.
* Latin, since about 1842 <strong>(shown here)</strong>.`},

"khb": { name:"Tai Lü (Tai Lue)", source:"23af4e1d7781a7a933d2ffac5f71a42a5df6f629", region:"easia", countries:"China, Laos, Thailand, Myanmar", script:"talu", speakers:"550000", letter:"ᦀᦁᦂᦃᦄᦅᦆᦇᦈᦉᦊᦋᦌᦍᦎᦏᦐᦑᦒᦓᦔᦕᦖᦗᦘᦙᦚᦛᦜᦝᦞᦟᦠᦡᦢᦣᦤᦥᦦᦧᦨᦩᦪᦫᦰᦱᦲᦳᦴᦵᦶᦷᦸᦹᦺᦻᦼᦽᦾᦿᧀᧁᧂᧃᧄᧅᧆᧇ","number":"᧐᧑᧒᧓᧔᧕᧖᧗᧘᧙᧚", symbol:"᧞᧟", local:"ᦅᧄᦺᦑᦟᦹᧉ‎ (Kam Tai Lue)", related:`Orthographies include:
* New Tai Lue, in Yunnan province, China <strong>(shown here)</strong>.
* Tai Tham, still used by some, particularly Buddhist monasteries in Yunnan province.`},

"khk": { name:"Halh Mongolian", source:"cldr_mn,udhr_khk", region:"easia", countries:"Mongolia, Russia", script:"cyrl", speakers:"2640000", letter:"абвгдеёжзийклмноөпрстуүфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОӨПРСТУҮФХЦЧШЩЪЫЬЭЮЯ", mark:"̈̆", punctuation:"̈̆‐–—…‘’“”†‡′″§", aux:"әҗӊһӘҖӉҺ", local:"Монгол хэл‎ (Mongol khel)", related:`khk is included in the Mongolian [mn] macrolanguage.
Orthographies include:
* Cyrillic <strong>(shown here)</strong>.
* Mongolian, before 1941, and resurgent since 1990s.
* Phags-pa, no longer in use.
* Tibetan, no longer in use.`},

"khq": { name:"Koyra Chiini (Western Songhay)", source:"cldr_khq", region:"afr", countries:"Mali", script:"latn", speakers:"200000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"ki": { name:"Kikuyu (Gikuyu)", silcode:"kik", source:"cldr_ki", region:"afr", countries:"Kenya", script:"latn", speakers:"6600000", letter:"ĩũĨŨ", mark:"̃", local:"Gĩgĩkũyũ"},

"kjh": { name:"Khakas", source:"udhr_kjh", region:"nasia", countries:"Russia", script:"cyrl", speakers:"43000", letter:"прайтиксізледјвоцяыгнмбңюьчуғхжҷэфщъПРАЙТИКСІЗЛЕДЈВОЦЯЫГНМБҢЮЬЧУҒХЖҶЭФЩЪ", mark:"̆", local:"Хакас тілі‎ (Xakas tili)"},

"kk": { name:"Kazakh", silcode:"kaz", source:"cldr_kk,udhr_kaz", region:"casia", countries:"Kazakhstan, China, Uzbekistan, Mongolia", script:"cyrl", speakers:"15000000", letter:"аәбвгғдеёжзийкқлмнңоөпрстуұүфхһцчшщъыіьэюяАӘБВГҒДЕЁЖЗИЙКҚЛМНҢОӨПРСТУҰҮФХҺЦЧШЩЪЫІЬЭЮЯ", punctuation:"‐–—…‘’“”«»§", local:"казақ тілі‎ (Qazaq tili), казақша‎ (Qazaqşa)", related:`Orthographies include:
* Arabic (naskh), used in China and Iran.
* Cyrillic, used in Kazakhstan and Mongolia <strong>(shown here)</strong>.
* Latin, used in Turkey.`},

"kkh": { name:"Khün (Tai Khün)", source:"udhr_kkh_lana,2d9827ce4589c5c4a76d7a1526db598162373c1d", region:"seasia", countries:"Myanmar, Thailand", script:"lana", speakers:"100000", letter:"ᨠᨡᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩒᩓᩔᪧ", mark:"ᩕᩖᩘᩙᩚᩛ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩭᩮᩯᩰᩱᩳᩴ᩵᩶᩺᩼","number":"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", punctuation:"᪨᪩᪪᪫", aux:"᩷᩸᩹᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙᪠᪡᪢᪣᪤᪥᪦᪬᪭"},

"kkj": { name:"Kako (Mkako, Mkaka)", source:"cldr_kkj", region:"afr", countries:"Cameroon, Congo, Central African Republic", script:"latn", speakers:"120000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛǌƁƊƐǊƆŋŊɓɗɛɔ", mark:"̧́̀̂", punctuation:"«»…‘‹›“”", local:"Kakɔ"},

"kl": { name:"Kalaalisut (West Greenlandic)", silcode:"kal", source:"cldr_kl,udhr_kal", region:"eur", countries:"Greenland, Denmark", script:"ascii", speakers:"60000", aux:"ĸ", local:"Kalaallisut", notes:"CLDR adds accented characters such as áâãéêíîôúûæøåĩĸũ, but this appears to be based on an older (pre 1973) orthography. See wikipedia."},

"kln": { name:"Kalenjin", redirect:true, source:"", region:"afr", script:"na", speakers:"0", related:`kln is a macrolanguage that encompasses the following more specific primary language subtags: Markweeta [enb], Keiyo [eyo], Nandi [niq], Okiek [oki], Pökoot [pko], Kipsigis [sgc], Sabaot [spy], Terik [tec], Tugen [tuy].
 Legacy applications often use kln rather than [spy] (Sabaot).`},

"km": { name:"Khmer (Cambodian)", silcode:"khm", source:"cldr_km,udhr_khm,e50f6f6c10d9857db18430e54a9ec953abb77225", region:"seasia", countries:"Cambodia, Vietnam", script:"khmr", speakers:"16000000", letter:"ឥឦឪឧឩឯឰឱឳឲឫឬឭឮកខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរឡលវសហអៗ", mark:"ាិីឹឺុូួើឿៀេែៃោៅំះ៉៊់៍័្", punctuation:"៖។៕៙៚‘’“”","number":"០១២៣៤៥៦៧៨៩", symbol:"៛", aux:"៑៌៝៎៏", local:"ខ្មែរ‎ (Khmer)"},

"kmb": { name:"Kimbundu (North Mbundu)", source:"udhr_kmb", region:"afr", countries:"Angola", script:"latn", speakers:"4000000", letter:"êâôÊÂÔ", mark:"̂", punctuation:"’", local:"Kimbundu"},

"kmr": { name:"Northern Kurdish (Kurmanji)", source:"udhr_kmr", region:"wasia", script:"latn", speakers:"15000000", letter:"ûîêçÛÎÊÇşŞ", mark:"̧̂", local:"Kurmancî", notes:`kmr is included in the Kurdish [ku] macrolanguage, and legacy applications often use [ku] rather kmr.
Dialects include: Boti (Botani), Marashi, Ashiti, Bayezidi, Hekari, Shemdinani, Shikakî, Silivî, Mihemedî. Dialect differences but all use the same written form.
Orthographies include:
* Arabic (naskh) in Iran, Iraq, Syria, Lebanon
* Armenian, 1921-1929 in Armenia
* Latin (Yañalif-like alphabet) replaces Armenian alphabet during Latinisation phase (probably 1930s?)
* Latin/cyrillic, 1928 in Soviet Union, adds some cyrillic characters into a Latin set
* Latin, 1929 in Soviet Union
* Cyrillic, from 1946, in Soviet Union &amp; Armenia
* Latin (Hawar alphabet) from 1932 in Syria and (fully) from 2013 in Turkey <strong>(shown here)</strong>.
* Latin, reduced Hawar alphabet, used in Turkey until 2013 (missing Q,W,X)
* Latin, proposed Universal Kurdish alphabet (adds Ł, Ň, Ř and Ü)
* Latin, Yekgirtú (Kurdish Unified Alphabet) promoted by the Kurdish Academy of Language for all Kurdish dialects
`},

"kn": { name:"Kannada (Canarese, Kanarese)", silcode:"kan", source:"cldr_kn,udhr_kan", region:"sasia", countries:"India", script:"knda", speakers:"37700000", letter:"ಅಆಇಈಉಊಋೠಌೡಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಱಲವಶಷಸಹಳಽ", mark:"಼̃ಂಃಾಿೀುೂೃೄೆೇೈೊೋೌ್ೕೖ", punctuation:"‐–—…‘’“”′″","number":"೦೧೨೩೪೫೬೭೮೯", other:"‌", aux:"ೞ", local:"ಕನ್ನಡ‎ (Kannaḍa)", related:`Orthographies include:
* Kannada, primary usage <strong>(shown here)</strong>.
* Nandinagari, no longer in use.`},

"knc": { name:"Kanuri (Yerwa)", source:"udhr_knc", region:"afr", countries:"Nigeria, Sudan, Chad, Niger, Cameroon", script:"latn", speakers:"4200000", letter:"əƏ", local:"Kanuri, Yerwa Kanuri", related:`Orthographies include:
* Arabic (naskh).
* Latin, since 1949 <strong>(shown here)</strong>.`},

"kng": { name:"Koongo (Kikongo)", source:"udhr_kng", region:"afr", countries:"DRC, Angola, Congo", script:"ascii", speakers:"6500000", local:"Kikongo"},

"knn": { name:"Konkani", source:"cldr_kok", region:"sasia", countries:"India", script:"deva", speakers:"7400000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"़ंँःािीुूृॅेैॉोौ्","number":"०१२३४५६७८९", local:"कोंकणी‎ (Konknni)", notes:`CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here.`, related:`Orthographies include:
* Devanagari, primary use <strong>(shown here)</strong>.
* Kannada, no longer in use.
* Latin, no longer in use.`},

"koi": { name:"Komi-Permyak", source:"udhr_koi", region:"eur", script:"cyrl", countries:"Russia", speakers:"63000", letter:"мортпавэзлӧнбыдсиьекцяюгйучішжёщъфхМОРТПАВЭЗЛӦНБЫДСИЬЕКЦЯЮГЙУЧІШЖЁЩЪФХ", mark:"̈̆", punctuation:"–", related:`Orthographies include:
* Cyrillic <strong>(shown here)</strong>.
* Latin, 1930s and 1940s.
* Old Permic, no longer in use.`},

"kok": { name:"Konkani", redirect:true, source:"", region:"sasia", script:"na", speakers:"", related:`kok is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Goan Konkani [gom], Konkani (individual language) [knn].
Legacy applications often use kok rather than [knn].
`},

"koo": { name:"Konjo (Konzo)", source:"udhr_koo", region:"afr", countries:"Uganda", script:"ascii", speakers:"610000", local:"Lhukonzo", notes:`Latin orthography since 1914.`},

"kpe": { name:"Kpelle", redirect:true, source:"", region:"afr", script:"na", speakers:"", related:`kpe is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Guinea Kpelle [gkp], Liberia Kpelle [xpe].
Legacy applications often use kpe rather than [xpe].
`},

"kqn": { name:"Kaonde", source:"udhr_kqn", region:"afr", countries:"Zambia, DRC", script:"ascii", speakers:"240000", local:"kiiKaonde"},

"kri": { name:"Krio (Sierra Leonean Creole)", source:"udhr_kri", region:"afr", countries:"Sierra Leone", script:"latn", speakers:"500000", letter:"ƐƆŋŊɛɔ", punctuation:"–", local:"Krio"},

"krl": { name:"Karelian", source:"udhr_krl", region:"eur", countries:"Russia", script:"latn", speakers:"36000", letter:"äöÄÖčžšČŽŠ", mark:"̈̌", punctuation:"’", related:`Orthographies include:
* Cyrillic, no longer in use.
* Latin <strong>(shown here)</strong>.`},

"ks": { name:"Kashmiri (Koshur)", silcode:"kas", source:"cldr_ks", region:"sasia", countries:"India, Pakistan", script:"arab", speakers:"5600000", letter:"ءآأٲؤاٮبپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںھہوۄیۍے", mark:"َُِ۪ۭٕٖٔٗٚٛٓ", local:"کٲشُر‎ (Koshur), कॉशुर‎ (Koshur)", related:`Orthographies include:
* Arabic (naskh and nastaliq styles), primary usage <strong>(shown here)</strong>. The nastaliq style of Arabic has it's own script subtag, [aran].
* Devanagari.
* Latin.
* Sharada, no longer in use.`},

"ksb": { name:"Shambala (Shambaa)", source:"cldr_ksb", region:"afr", countries:"Tanzania", script:"ascii", speakers:"660000"},

"ksf": { name:"Bafia", source:"cldr_ksf", region:"afr", countries:"Cameroon", script:"latn", speakers:"60000", letter:"áéíóúÁÉÍÓÚǝƎƐƆŋŊɛɔ", mark:"́", local:"Rikpa"},

"ksh": { name:"Kölsch (Colognian)", source:"cldr_ksh", region:"eur", countries:"Germany", script:"latn", speakers:"250000", letter:"ėœůĖŒŮåäæëößüÅÄÆËÖÜ", mark:"̊̈̇", punctuation:"‐–—…‘‚“„†‡§⸗", symbol:"°", aux:"ăāĕēğĭīĳıłŏōŭūĂĀĔĒĞĬĪĲŁŎŌŬŪŸáàâãçéèêíìîïñóòôøúùûÿÁÀÂÃÇÉÈÊÍÌÎÏÑÓÒÔØÚÙÛ̧́̀̆̂̃̄", local:"Kölsch"},

"ktu": { name:"Kituba", source:"udhr_ktu", region:"afr", countries:"DRC", script:"ascii", speakers:"5400000", local:"Kikongo ya leta, Kituba"},

"ku": { name:"Kurdish", redirect:true, source:"https://r12a.github.io/app-subtags/?lookup=ku", region:"wasia", script:"na", speakers:"0", related:`ku is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Central Kurdish ([ckb]), Northern Kurdish ([kmr]), Southern Kurdish ([sdh])
Legacy applications often use ku rather than [kmr] (Northern Kurdish).`},

"kw": { name:"Cornish", silcode:"cor", source:"cldr_kw", region:"eur", countries:"England", script:"ascii", speakers:"~350", local:"Kernewek"},

"kwi": { name:"Awa-Cuaiquer (Awa Pit)", source:"udhr_kwi", region:"sam", countries:"Colombia, Ecuador", script:"latn", speakers:"13000", letter:"áñëóçâùéàêÁÑËÓÇÂÙÉÀÊ", mark:"̧́̃̈̂̀", punctuation:"·", local:"Awapit"},

"ky": { name:"Kyrgyz (Kirghiz)", silcode:"kir", source:"cldr_ky,udhr_kir", region:"casia", countries:"Kyrgyzstan, China, Tajikistan", script:"cyrl", speakers:"4300000", letter:"абгдеёжзийклмнӊоөпрстуүхчшъыэюяцңвьфАБГДЕЁЖЗИЙКЛМНӉОӨПРСТУҮХЧШЪЫЭЮЯЦҢВЬФ", mark:"̈̆", punctuation:"‐–—…‘‚“„«»§", aux:"вфцщьВФЦЩЬ", local:"кыргыз тили‎ (Kyrgyz tili), кыргызча‎ (Kyrgyzcha)", related:`Orthographies include:
* Arabic (naskh), used in China.
* Cyrillic, <strong>(shown here)</strong> (not used in Afghanistan).
* Latin, used in Turkey.`},

"lad": { name:"Ladino", source:"udhr_lad", region:"wasia", countries:"Israel, Turkey", script:"latn", speakers:"100000", letter:"íÍ", mark:"́", punctuation:"–", local:"גﬞודיאו־איספאנייול‎ (Djudeo-espanyol), לאדינו‎ (Ladino)", related:`Orthographies include:
* Cyrillic, used by Sephardic speakers in the Balkans.
* Hebrew.
* Latin, used in Turkey <strong>(shown here)</strong>.`},

"lag": { name:"Langi (Rangi)", source:"cldr_lag", region:"afr", countries:"Tanzania", script:"latn", speakers:"410000", letter:"áéíóúÁÉÍÓÚƗɄɨʉ", mark:"́", local:"Kɨlaangi, Langi"},

"lb": { name:"Luxembourgish (Luxemburgish, Letzeburgesch)", silcode:"ltz", source:"cldr_lb,udhr_ltz", region:"eur", countries:"Luxembourg, France, Belgium, Germany", script:"latn", speakers:"390000", letter:"äéëêüöôàÄÉËÊÜÖÔÀ", mark:"̈́̂̀", punctuation:"«»§‐–—…‘‚“„", aux:"ăāĕēğĭīıŏōœşŭūĂĀĔĒĞĬİĪŎŌŒŞŬŪŸáàâåãæçèêíìîïñóòôöøßúùûüÿÁÀÂÅÃÆÇÈÊÍÌÎÏÑÓÒÔÖØÚÙÛÜ̧̇̀̆̂̊̃̄", local:"Lëtzebuergesch", notes:`UDHR has many more accented characters than CLDR.`},

"lg": { name:"Ganda (Luganda)", silcode:"lug", source:"cldr_lg,udhr_lug", region:"afr", countries:"Uganda", script:"latn", speakers:"4100000", letter:"ŋŊ", local:"Luganda", notes:`Latin script used since 1947.`},

"lia": { name:"Limba", source:"udhr_lia", region:"afr", countries:"Sierra Leone", script:"latn", speakers:"340000", letter:"ƆƐŋŊɔɛ", local:"Hulimba ha"},

"lij": { name:"Ligurian", source:"udhr_lij", region:"eur", countries:"Italy, Monaco", script:"latn", speakers:"500000", letter:"çòæéùöôâîàêÇÒÆÉÙÖÔÂÎÀÊ", mark:"̧̀́̈̂", punctuation:"’", local:"Ligure"},

"lis": { name:"Lisu {Fraser}", source:"d6a5076cb77188fd52722d4a57b621ac1390c714", region:"easia", countries:"China, Myanmar, Thailand", script:"lisu", speakers:"940000", letter:"ꓐꓑꓒꓓꓔꓕꓖꓗꓘꓙꓚꓛꓜꓝꓞꓟꓠꓡꓢꓣꓤꓥꓦꓧꓨꓩꓪꓫꓬꓭꓮꓯꓰꓱꓲꓳꓴꓵꓶꓷꓸꓹꓺꓻꓼꓽʼˍ", punctuation:"《》…꓾꓿", local:"ꓡꓲ-ꓢꓴ (Li-su), Lisu", related:`Orthographies include:
* Latin, 1915-1918, 1958-1966, and from 1981.
* Lisu (Fraser) script, since 1918, primary usage <strong>(shown here)</strong>.`},

"lkt": { name:"Lakota (Lakhota, Teton, Teton Sioux)", source:"cldr_lkt", region:"nam", countries:"USA", script:"latn", speakers:"6000", letter:"ʼáéíóúÁÉÍÓÚǧȟǦȞŋčšžŊČŠŽ", mark:"́̌", punctuation:"́̌‐–—“”"},

"lld": { name:"Ladin (Judaeo-Spanish, Judeo-Spanish)", source:"udhr_lld", region:"eur", countries:"Italy", script:"latn", speakers:"31000", letter:"ëéüêàèöìùîâôòóûËÉÜÊÀÈÖÌÙÎÂÔÒÓÛćĆ", mark:"̈́̂̀", punctuation:"’"},

"ln": { name:"Lingala", silcode:"lin", source:"cldr_ln,udhr_lin", region:"afr", countries:"DRC, Congo", script:"latn", speakers:"5500000", letter:"áâéêíîóôúÁÂÉÊÍÎÓÔÚǎǐǒǍƐǏǑƆěĚɛɔ", mark:"́̂̌", punctuation:"’", local:"Lingala", notes:"UDHR has no accents"},

"lns": { name:"Lamnso' (Nso)", source:"udhr_lns", region:"afr", countries:"Cameroon", script:"latn", speakers:"240000", letter:"áéùìòúíóàèÁÉÙÌÒÚÍÓÀÈƏŋŊə", mark:"̀́", punctuation:"’", local:"Lamnso’"},

"lo": { name:"Lao (Laotian)", silcode:"lao", source:"cldr_lo,udhr_lao", region:"seasia", countries:"Laos, Cambodia, Vietnam", script:"laoo", speakers:"~25000000", letter:"ໆກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫໜໝອຮຯະາຳຽເແໂໃໄ", mark:"່້໊໋́໌ໍັິີຶືຸູົຼ", aux:"໐໑໒໓໔໕໖໗໘໙", local:"ພາສາລາວ‎ (Phasa Lao)"},

"lob": { name:"Lobi (Miwa, Lobiri)", source:"udhr_lob", region:"afr", countries:"Burkina Faso, Côte d'Ivoire", script:"latn", speakers:"440000", letter:"àáäÀÁÄƲƖƆƐʋɩɔɛʔ", mark:"̀́̈", local:"’Lobiiri"},

"lot": { name:"Otuho (Lotuko)", source:"udhr_lot", region:"afr", countries:"South Sudan", script:"ascii", speakers:"140000", local:"Otuho"},

"loz": { name:"Lozi (siLozi, Rozi)", source:"udhr_loz", region:"afr", countries:"Zambia, Zimbabwe, Namibia, Botswana", script:"ascii", speakers:"725000", local:"siLozi"},

"lrc": { name:"Luri (Lurish)", rtl:true, source:"cldr_lrc", region:"wasia", countries:"Iran", script:"arab", speakers:"13000000", letter:"آأؤئابپتثجچحخدذرزژسشصضطظعغفڤقکگلمنھەوۉۊیؽي", mark:"ٙٛٓٔ", punctuation:"،٫٬؛؟‐…‹›«»", aux:"ًٌٍَُِّْإةكهىٕ", notes:`Arabic orthography uses both naskh and nastaliq styles. There is a separate script subtag for nastaliq, [aran].`},

"lt": { name:"Lithuanian", silcode:"lit", source:"cldr_lt,udhr_lit", region:"eur", countries:"Lithuania", script:"latn", speakers:"3000000", letter:"éÉąčęėįšųūžĄČĘĖĮŠŲŪŽ", mark:"̨̌̇̄́", punctuation:"‐–—…“„", aux:"ẽẼĩũĨŨáàãéèíìñóòõúùÁÀÃÉÈÍÌÑÓÒÕÚÙ́̃̀", local:"Lietuviškai, Lietuvių kalba", notes:`A Latin orthography written with the Fraktur style is no longer in use. There is a separate script subtag for Fraktur, [Latf].`},

"lu": { name:"Luba-Katanga (Luba-Shaba, Kiluba)", silcode:"lub", source:"cldr_lu", region:"afr", countries:"DRC", script:"latn", speakers:"1500000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙƐƆɛɔ", mark:"́̀", local:"Kiluba"},

"lua": { name:"Luba-Kasai (Western Luba)", source:"udhr_lua", region:"afr", countries:"DRC, Angola", script:"ascii", speakers:"6300000", local:"Tshiluba"},

"lue": { name:"Luvale", source:"udhr_lue", region:"afr", countries:"Zambia, Angola", script:"ascii", speakers:"640000", local:"Chiluvale, Luvale"},

"lun": { name:"Lunda (Chilunda)", source:"udhr_lun", region:"afr", countries:"Zambia, Angola", script:"ascii", speakers:"400000", local:"chiLunda"},

"luo": { name:"Luo (Dholuo)", source:"cldr_luo", region:"afr", countries:"Kenya, Tanzania", script:"ascii", speakers:"4200000", local:"Dholuo"},

"lus": { name:"Mizo", source:"udhr_lus", region:"sasia", countries:"India, Myanmar", script:"latn", speakers:"690000", letter:"âêûîãÂÊÛÎÃ", mark:"̂̃", local:"Mizo ṭawng", notes:`The autonym shows a t with dot below that isn't in the list, which may mean that character should be added.`, related:`Orthographies include:
* Bengali (Bangla).
* Latin <strong>(shown here)</strong>.`},

"luy": { name:"Luhya (Oluluyia, Luyia, Luhia, Luhiya)", redirect:true, source:"", region:"afr", script:"na", speakers:"", related:`luy is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Bukusu, Lubukusu [bxk], Idakho-Isukha-Tiriki, Luidakho-Luisukha-Lutirichi [ida], Kabras, Lukabaras [lkb], Khayo, Olukhayo [lko], Kisa, Olushisa [lks], Marachi, Olumarachi [lri], Marama, Olumarama [lrm], Saamia, Olusamia [lsm], Tsotso, Olutsotso [lto], Tachoni, Lutachoni [lts], Wanga, Oluwanga [lwg], East Nyala [nle], Nyore, Olunyole [nyd], Logooli, Lulogooli [rag].
Legacy applications often use luy rather than [bxk].
`},

"lv": { name:"Latvian (Lettish)", silcode:"lav", redirect:true, source:"", region:"eur", script:"na", speakers:"", related:`lv is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Latgalian [ltg], Standard Latvian [lvs].
`},

"lvs": { name:"Latvian (Lettish)", source:"cldr_lv,udhr_lav", region:"eur", countries:"Latvia", script:"latn", speakers:"1750000", letter:"āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ", mark:"̧̄̌", punctuation:"§‐–—…‘’‚“”„†‡′″", aux:"ōŗŌŖ", local:"Latviešu valoda, Latviski"},

"mad": { name:"Madurese", source:"udhr_mad", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"15000000", local:"Basa Mathura"},

"mag": { name:"Magahi (Magadhi)", source:"udhr_mag", region:"sasia", countries:"India, Nepal", script:"deva", speakers:"14000000", letter:"मनवधकरलसयतषटउचबघणपगठदहभअएऔथओशईजखआडइछफढझञऐ", mark:"ािेंु्ोी़ूौृैँ", punctuation:"।", local:"मगही‎ (magahī)"},

"mai": { name:"Maithili", source:"udhr_mai,udhr_mai_2", region:"sasia", countries:"India, Nepal", script:"deva", speakers:"33900000", letter:"सरवभमनधकघषणटदबएतआउलजपठगअछहऐयशओचथखफइढडङईञʼ", mark:"ा्ौिोंेँीृूुःै़", punctuation:"।–", local:"मैथिली‎ (Maithilī)", related:`Orthographies include:
* Devanagari, primary usage <strong>(shown here)</strong>.
* Kaithi, until end of 20th century.
* Newa, no longer in use.
* Tirhuta, until end of 20th century.`},

"mam": { name:"Mam", source:"udhr_mam", region:"cam", countries:"Guatemala, Mexico", script:"ascii", speakers:"540000", local:"B’anax Mam, Qyool Mam"},

"man": { name:"Mandingo (Manding)", redirect:true, source:"", region:"afr", script:"na", speakers:"0", notes:`man is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Eastern Maninkakan [emk], Konyanka Maninka [mku], Western Maninkakan [mlq], Mandinka [mnk], Sankaran Maninka [msc], Kita Maninkakan [mwk], Forest Maninka (deprecated, don't use) [myq].
Legacy applications often use man rather than [emk] (Eastern Maninkakan).`},

"mas": { name:"Masai (Maasai, Maa)", source:"cldr_mas", region:"afr", countries:"Kenya, Tanzania", script:"latn", speakers:"1300000", letter:"áàâéèêíìîóòôúùûÁÀÂÉÈÊÍÌÎÓÒÔÚÙÛƐƗƆɄāēīŋōūĀĒĪŊŌŪɛɨɔʉ", mark:"́̀̂̄", local:"Maa"},

"maz": { name:"Central Mazahua", source:"udhr_maz", region:"cam", countries:"Mexico", script:"latn", speakers:"140000", letter:"ñÑ", mark:"̸̱̃", local:"Jnatrjo"},

"mcd": { name:"Sharanahua (Marinawa)", source:"udhr_mcd", region:"sam", countries:"Peru", script:"latn", speakers:"3100", letter:"úíóáÚÍÓÁ", mark:"́", punctuation:"¿", local:"Sharanahuan tsain"},

"mcf": { name:"Matsés (Mayoruna)", source:"udhr_mcf", region:"sam", countries:"Peru, Brazil", script:"latn", speakers:"3200", letter:"ëË", mark:"̈", local:"Matses"},

"men": { name:"Mende", source:"udhr_men", region:"afr", countries:"Sierra Leone, Liberia", script:"latn", speakers:"1400000", letter:"ƆƐŋŊɔɛ", punctuation:"–‐", local:"Mɛnde, Mɛnde yia", related:`Orthographies include:
* Latin <strong>(shown here)</strong>.
* Kikakui, limited usage except for correspondence, record keeping, and especially accounting.`},

"mer": { name:"Meru", source:"cldr_mer", region:"afr", countries:"Kenya", script:"latn", speakers:"2000000", letter:"ĩũĨŨ", mark:"̃", local:"Kimîîru"},

"mfe": { name:"Morisyen (Mauritian Creole, Morisien)", source:"cldr_mfe", region:"afr", countries:"Mauritius", script:"ascii", speakers:"1070000", local:"Kreol Morisien"},

"mg": { name:"Malagasy", silcode:"mlg", source:"cldr_mg,udhr_plt", region:"afr", script:"na", speakers:"", related:`mg is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Bara Malagasy [bhr], Southern Betsimisaraka Malagasy (deprecated, don't use). [bjq], Northern Betsimisaraka Malagasy [bmm], Southern Betsimisaraka Malagasy [bzc], Masikoro Malagasy [msh], Plateau Malagasy [plt], Sakalava Malagasy [skg], Tandroy-Mahafaly Malagasy [tdx], Tesaka Malagasy [tkg], Tanosy Malagasy [txy], Antankarana Malagasy, Tankarana Malagasy [xmv], Tsimihety Malagasy [xmw].
Legacy applications often use mg rather than [plt].
`},

"mgh": { name:"Makhuwa-Meetto", source:"cldr_mgh", region:"afr", countries:"Mozambique", script:"ascii", speakers:"6600000", local:"Imeetto"},

"mgo": { name:"Meta'", source:"cldr_mgo", region:"afr", countries:"Cameroon", script:"latn", speakers:"190000", letter:"ʼàèìòùÀÈÌÒÙƏƆŋŊəɔ", mark:"̀", punctuation:"‘’“”", local:"Mɨta’"},

"mh": { name:"Marshallese (Ebon)", silcode:"mah", source:"udhr_mah", region:"oce", countries:"Marshall Islands", script:"ascii", speakers:"55000"},

"mi": { name:"Maori (Te Reo)", silcode:"mri", source:"cldr_mi,udhr_mri,61f0a8014764c40b5937e54a104576fdf07d24d1", region:"oce", countries:"New Zealand", script:"latn", speakers:"60000", letter:"ĀāĒēĪīŌōŪūïÏ", mark:"̄̈", punctuation:"‰", local:"te reo Māori"},

"mic": { name:"Mi'kmaq (Micmac, Migmaw, Mikmaw)", source:"udhr_mic", region:"nam", countries:"Canada", script:"ascii", speakers:"14200", local:"L’nui’simk, Míkmawísimk", notes:`The autonym shows an accented character that isn't in the UDHR-based list.`, related:`Orthographies include:
* Latin <strong>(shown here)</strong>.
* Micmac hieroglyphs, no longer in use.`},

"mid": { name:"Neo-Mandaic", rtl:true, source:"280e6a9f98147de582820ff2179ebb7727e96147", region:"wasia", countries:"Iran, Iraq", script:"mand", speakers:"200", letter:"ࡀࡁࡂࡃࡄࡅࡆࡇࡈࡉࡊࡋࡌࡍࡎࡏࡐࡑࡒࡓࡔࡕࡖࡗࡘ", mark:"࡙࡚࡛", punctuation:"࡞"},

"min": { name:"Minangkabau", source:"udhr_min", region:"seasia", countries:"Indonesia", script:"ascii", speakers:"5500000"},

"miq": { name:"Mískitu (Miskito)", source:"udhr_miq", region:"cam", countries:"Nicaragua, Honduras", script:"latn", speakers:"150000", letter:"áâÁÂ", mark:"́̂", local:"Mískitu"},

"mk": { name:"Macedonian", silcode:"mkd", source:"cldr_mk,udhr_mkd", region:"eur", countries:"Macedonia, Albania, Bulgaria", script:"cyrl", speakers:"~2000000", letter:"абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ", mark:"́", punctuation:"‐–—…‘‚“„", aux:"ѐѝЀЍ̀", local:"македонски‎ (Makedonski), македонски јазик‎ (makedonski jazik)", notes:`Cyrillic script used since 1944.`},

"ml": { name:"Malayalam", silcode:"mal", source:"cldr_ml,udhr_mal,d347047791774df1311d53dee98495c224fe0166", region:"sasia", countries:"India, Singapore", script:"mlym", speakers:"38000000", letter:"അആഇഈഉഊഋൠഌൡഎഏഐഒഓഔകൿഖഗഘങചഛജഝഞടഠഡഢണൺതഥദധനൻപഫബഭമയരർലൽവശഷസഹളൾഴറ", mark:"ഃംാിീുൂൃെേൈൊോൌൗ്", punctuation:"‘’“”", other:"‌‍", aux:"൦൧൨൩൪൫൬൭൮൯൹।॥", local:"മലയാളം‎ (Malayāḷam)", related:`Orthographies include:
* Arabic (naskh).
* Malayalam, primary usage <strong>(shown here)</strong>.`},

"mn": { name:"Mongolian", silcode:"mon", redirect:true, region:"easia", script:"na", related:`mn is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Halh Mongolian [khk], Peripheral Mongolian [mvf].
Legacy applications often use mn rather than [mvf].`},

"mnw": { name:"Mon", source:"udhr_mnw", region:"seasia", countries:"Myanmar, Thailand", script:"mymr", speakers:"851000", letter:"လကၚအခရမဟပဍစတသဂဒဇနဘဝဗဓထၜယညဆဏဖဿဥဋဉဌဠ", mark:"ိ်ောါၞုံွဲ္ဵၟဳြှူၠးဴီျ", punctuation:"၊။","number":"၁၉၄၈၀၂၃၅၆၇"},

"mos": { name:"Mòoré (Mossi, Mooré)", source:"udhr_mos", region:"afr", countries:"Burkina Faso, Mali, Togo", script:"latn", speakers:"7600000", letter:"ãõÃÕƖƱƐĩũœĨŨŒẽẼɩʊɛ", mark:"̃", punctuation:"’", local:"Mòoré", notes:`Note that the accents in the autonym don't appear in the UDHR text, suggesting that we need to add characters here.`},

"mr": { name:"Marathi", silcode:"mar", source:"cldr_mr,udhr_mar", region:"sasia", countries:"India", script:"deva", speakers:"73000000", letter:"ऱॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहळऽ", mark:"़ंँःािीुूृॅेैॉोौ्", punctuation:"‐–—…‘’“”′″","number":"१२३४५६७८९०", other:"‌‍", local:"मराठी‎ (Marāṭhī)", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here."},

"mt": { name:"Maltese", silcode:"mlt", source:"cldr_mt,udhr_mlt", region:"eur", countries:"Malta", script:"latn", speakers:"520000", letter:"àèìòùÀÈÌÒÙċġħżĊĠĦŻ", mark:"̀̇", punctuation:"‘’“”", local:"Malti", related:`Orthographies include:
* Arabic (naskh), no longer in use.
* Latin, primary usage <strong>(shown here)</strong>.`},

"mto": { name:"Totontepec Mixe (North Highland Mixe)", source:"udhr_mto", region:"cam", countries:"Mexico", script:"latn", speakers:"5500", letter:"äüëöéÄÜËÖÉ", mark:"̈́", punctuation:"’", local:"Ayuk"},

"mua": { name:"Mundang", source:"cldr_mua", region:"afr", countries:"Chad, Cameroon", script:"latn", speakers:"240000", letter:"ãëõÃËÕǝƁƊƎĩŋĨŊṽṼɓɗ", mark:"̃̈", local:"záá múndàŋ", notes:`Note that the autonym has diacritics which were not found in CLDR.`},

"mxi": { name:"Mozarabic (Andalusi Romance)", source:"udhr_mxi", region:"eur", script:"latn", speakers:"0", letter:"àùèòÀÙÈÒ", mark:"̀", punctuation:"’"},

"my": { name:"Burmese (Myanmar)", source:"cldr_my,udhr_mya,43fe649806182b69d852d8c5881f6cc16d8731ca", region:"seasia", countries:"Myanmar", script:"mymr", speakers:"33000000", letter:"ကခဂဃငစဆဇဈဉညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠအဣဤဥဦဧဩဪဿ", mark:"ာါိီုူေဲံျြွှ့္်း","number":"၁၉၄၈၀၂၃၅၆၇", punctuation:"၏၊။၍၌၎‘’“”", aux:"ၒၓၔၕၖၗၘၙ"},

"mzi": { name:"Ixcatlán Mazatec", source:"udhr_mzi", region:"cam", countries:"Mexico", script:"latn", speakers:"8600", letter:"áñíóéÁÑÍÓÉ", mark:"́̃", punctuation:"’", local:"En ningotsie"},

"mzn": { name:"Mazanderani (Tabari, Geleki)", rtl:true, source:"cldr_mzn", region:"wasia", countries:"Iran", script:"arab", speakers:"6000000", letter:"ءآأؤئابپةتثجچحخدذرزژسشصضطظعغفقکگلمنهویي", mark:"ًٌٍّٔٓ", punctuation:"،٫٬؛؟‐…‹›«»", aux:"َُِْٰٖإكىٕ", local:"طبری‎ (Tabari), مازرونی‎ (Mazuroni)", notes:`The Arabic orthography uses both naskh and nastaliq styles. There is a separate script subtag for the nastaliq style, [Aran].`},

"nah": { name:"Nahuatl (Aztec)", source:"udhr_nhn", region:"cam", script:"latn", speakers:"1700000", letter:"íÍ", mark:"́"},

"naq": { name:"Khoekhoe (Nama, Hottentot)", source:"cldr_naq", region:"afr", countries:"Namibia", script:"latn", speakers:"300000", letter:"ǀǁǂǃâîôûÂÎÔÛ", mark:"̂", local:"Khoekhoe, Khoekhoegowab"},

"nb": { name:"Norwegian Bokmål", silcode:"nor", source:"cldr_nb,udhr_nob", region:"eur", script:"latn", speakers:"5190000", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"«»§–", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáãçèêíñúüäöÁÃÇÈÊÍÑÚÜÄÖ̧̌̃̈", local:"Norsk", related:`nb is included in the Norwegian [no] macrolanguage, and legacy applications often use [no] rather nb.`},

"nba": { name:"Nyemba", source:"udhr_nba", region:"afr", countries:"Angola", script:"latn", speakers:"900000", letter:"ñÑ", mark:"̃"},

"nd": { name:"Northern Ndebele (isiNdebele, Sindebele, Ndebele, North Ndebele, Matabele)", silcode:"nde", source:"cldr_nd", region:"afr", countries:"Zimbabwe, Botswana", script:"ascii", speakers:"1600000", local:"isiNdebele"},

"nds": { name:"Low German (Low Saxon)", source:"cldr_nds,udhr_nds", region:"eur", countries:"Germany, Brazil", script:"latn", speakers:"301000", letter:"åäöüÅÄÖÜ", mark:"̊̈", punctuation:"’", aux:"ăāĕęēĭīŏōœŭūĂĀĔĘĒĬĪŎŌŒŬŪŸáàâæçéèêëíìîïñóòôøúùûÿÁÀÂÆÇÉÈÊËÍÌÎÏÑÓÒÔØÚÙÛ̧̨́̀̆̂̄̃", local:"Niedersächsisch"},

"ne": { name:"Nepali", silcode:"nep", redirect:true, source:"", region:"sasia", script:"na", speakers:"", related:`ne is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Dotyali [dty], Nepali (individual language) [npi].
Legacy applications often use ne rather than [npi].
`},

"ng": { name:"Ndonga, (Oshindonga)", silcode:"ndo", source:"udhr_ndo", region:"afr", countries:"Namibia", script:"ascii", speakers:"810000", local:"Oshindonga, Oshiwambo"},

"nio": { name:"Nganasan", source:"udhr_nio", region:"nasia", script:"cyrl", countries:"Russia", speakers:"130", letter:"нерәзытбуоясикаӈҫүдйхлмпвгөъцьчэщжюНЕРӘЗЫТБУОЯСИКАӇҪҮДЙХЛМПВГӨЪЦЬЧЭЩЖЮ", mark:"̆", punctuation:"”"},

"nku": { name:"Bouna Kulango", source:"udhr_nku", region:"afr", countries:"Côte d'Ivoire, Ghana", script:"latn", speakers:"130000", letter:"ƖƆƐƝƲŋŊɩɔɛɲʋ", punctuation:"’"},

"nl": { name:"Dutch", silcode:"nld", source:"cldr_nl,udhr_nld", region:"eur", countries:"Netherlands, Belgium, Suriname, Curacao, Aruba", script:"latn", speakers:"24000000", letter:"áäéëíïóöúüÁÄÉËÍÏÓÖÚÜ", mark:"́̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"œŒŸàâåãæçèêîñôøùûÿÀÂÅÃÆÇÈÊÎÑÔØÙÛ̧̀̂̊̃", local:"Hollands, Nederlands"},

"nmg": { name:"Kwasio (Ngumba, Mvumbo, Bujeba, Gyele, Kola)", source:"cldr_nmg", region:"afr", countries:"Equatorial Guinea, Cameroon", script:"latn", speakers:"26000", letter:"áâäéêíîïóôöúûÁÂÄÉÊÍÎÏÓÔÖÚÛǎǝǐǒǔǍƁƎƐǏǑƆǓāěēīńŋōŕūĀĚĒĪŃŊŌŔŪɓɛɔ", mark:"́̂̌̄̈", related:`Orthographies include:
* Latin, from 1930s.
* Latin, revised 2011.`},

"nn": { name:"Norwegian Nynorsk", silcode:"nor", source:"cldr_nn,udhr_nno", region:"eur", countries:"Norway", script:"latn", speakers:"0", letter:"àéóòôæøåÀÉÓÒÔÆØÅ", mark:"̀́̂̊", punctuation:"‰", symbol:"−", aux:"čđńŋšŧžČĐŃŊŠŦŽǎǍáçèêñüäöÁÇÈÊÑÜÄÖ̧̌̃̈", local:"Norsk", related:`nn is included in the Norwegian [no] macrolanguage.`},

"nnh": { name:"Ngiemboon", source:"cldr_nnh", region:"afr", countries:"Cameroon", script:"latn", speakers:"250000", letter:"ʼáàâéèêíìóòôúùûÿÁÀÂÉÈÊÍÌÓÒÔÚÙÛǎǒǔǍƐǑƆǓɄěńŋĚŃŊŸḿẅḾẄɛɔʉ", mark:"́̀̂̌̈", punctuation:"«»‘’", local:"Shwoge"},

"no": { name:"Norwegian", silcode:"nor", redirect:true, source:"", region:"eur", countries:"Norway", script:"na", speakers:"0", related:`no is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Norwegian Bokmål [nb], Norwegian Nynorsk [nn].
Legacy applications often use no rather than [nb].`},

"nod": { name:"Northern Thai (Lanna, Kam Mueang)", source:"812b1d7d423d404b2e251f335553dd05b8999f08", region:"seasia", countries:"Thailand, Laos", script:"lana", speakers:"6000000", letter:"ᨠᨡᨢᨣᨤᨥᨦᨧᨨᨩᨪᨫᨬᨭᨮᨯᨰᨱᨲᨳᨴᨵᨶᨷᨸᨹᨺᨻᨼᨽᨾᨿᩀᩁᩃᩅᩆᩇᩈᩉᩊᩋᩌᩍᩎᩏᩐᩑᩓᩔᪧ", mark:"ᩕᩖᩘᩙᩚᩛ᩠ᩡᩢᩣᩤᩥᩦᩧᩨᩩᩪᩫᩬᩮᩯᩰᩱᩲᩳᩴ᩵᩶᩺᩻","number":"᪀᪁᪂᪃᪄᪅᪆᪇᪈᪉", punctuation:"᪨᪩᪪᪫", aux:"᩿᪐᪑᪒᪓᪔᪕᪖᪗᪘᪙᪠᪡᪢᪣᪤᪥᪦᪬᪭", local:"คำเมือง‎ (Kam Mueang)", related:`Orthographies include:
* Tai Tham, limited usage <strong>(shown here)</strong>.
* Thai.`},

"not": { name:"Nomatsiguenga", source:"udhr_not", region:"sam", countries:"Peru", script:"latn", speakers:"6500", letter:"ëíáóñËÍÁÓÑ", mark:"̈́̃", local:"Nomatsigenga"},

"npi": { name:"Nepali", source:"cldr_ne,udhr_nep", region:"sasia", countries:"Nepal, India, Bhutan", script:"deva", speakers:"40000000", letter:"ॐअआइईउऊऋऌऍएऐऑओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहऽ", mark:"़ँंःािीुूृॅेैॉोौ्", punctuation:"।","number":"१२३४५६७८९०", other:"‍", local:"नेपाली‎ (Nepālī)", notes:"CLDR also includes <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>, but I was told that Indian experts determined that this is only needed for Sanskrit, so it is not shown here.", related:`npi is included in the Nepali [ne] macrolanguage, and legacy applications often use [ne] rather npi.`},

"nr": { name:"Ndebele (Southern Ndebele, Transvaal Ndebele)", silcode:"nbl", source:"udhr_nbl", region:"afr", countries:"South Africa", script:"ascii", speakers:"1100000", local:"IsiNdebele"},

"nso": { name:"Northern Sotho", source:"udhr_nso", region:"afr", countries:"South Africa", script:"latn", speakers:"4700000", letter:"šŠ", mark:"̌", local:"Sesotho sa Leboa"},

"nus": { name:"Nuer (Thok Naath)", source:"cldr_nus", region:"afr", countries:"South Sudan, Ethiopia", script:"latn", speakers:"890000", letter:"äëïöÄËÏÖƐƔƆŋŊɛɣɔ", mark:"̱̈", local:"Naath"},

"nv": { name:"Navajo (Navaho)", silcode:"nav", source:"udhr_nav", region:"nam", countries:"USA", script:"latn", speakers:"266000", letter:"ʼéóáíÉÓÁÍǫǪąłįęĄŁĮĘ", mark:"̨́", local:"Diné Bizaad, Naabeehó bizaad"},

"ny": { name:"Chichewa (Chewa, Nyanja, Chichewa, Chinyanja)", silcode:"nya", source:"udhr_nya_chechewa", region:"afr", countries:"Malawi, Zambia, Mozambique, Zimbabwe", script:"ascii", speakers:"12000000", local:"Chicheŵa", notes:`Note that the autonym uses an accented character.`},

"nym": { name:"Nyamwezi", source:"udhr_nym", region:"afr", countries:"Tanzania", script:"ascii", speakers:"1000000"},

"nyn": { name:"Nyankore (Nkore, Nkole, Nyankole, Orunyankore, Orunyankole, Runyankore, Runyankole)", source:"cldr_nyn,udhr_nyn", region:"afr", countries:"Uganda", script:"ascii", speakers:"2300000", local:"Runyankore"},

"nzi": { name:"Nzima (Appolo)", source:"udhr_nzi", region:"afr", countries:"Ghana, Côte d'Ivoire", script:"latn", speakers:"330000", letter:"ɔɛƆƐ", notes:`Latin orthography used since about 1965.`},

"oaa": { name:"Orok (Uilta, Ulta, Ujlta)", source:"udhr_oaa", region:"nasia", script:"cyrl", speakers:"50", letter:"ƝūŪɲԩԨчипалнесдкробуӡгэӈмхтөвӯзЧИПАЛНЕСДКРОБУӠГЭӇМХТӨВӮЗ", mark:"̄", punctuation:"–"},

"oc": { name:"Occitan", source:"udhr_lnc", region:"eur", script:"latn", speakers:"~200000", letter:"óèéçàïòìùúâêîëáôüûÓÈÉÇÀÏÒÌÙÚÂÊÎËÁÔÜÛ", mark:"̧́̀̈̂", punctuation:"«»’—"},

"oj": { name:"Ojibwe (Ojibwa, Ojibway, Chippewa, Otchipwe)", source:"udhr_ojb", region:"nam", script:"cans", speakers:"100880", letter:"ᐯᒪᑎᓯᑦᑌᐸᑫᑕᑯᐎᓇᓐᒥᐌᑲᒃᔭᐊᓂᐃᔑᑭᔝᐤᐅᑾᐱᔦᑐᐗᒣᒋᐁᔅᓱᓀᓄᒧᓭᔥᐨᑡᔕᓴᓶᓉᐺᓪᑉᐼᑴᑄᒐᒬᔐᔗᑺᔡᒻᒡᑶ"},

"oki": { name:"Okiek", source:"udhr_oki", region:"afr", script:"ascii", speakers:"79000"},

"om": { name:"Oromo", source:"cldr_om,udhr_gax", region:"afr", script:"ascii", speakers:"25542000"},

"or": { name:"Oriya (Odia)", source:"cldr_or", region:"sasia", script:"orya", speakers:"33000000", letter:"ଅଆଇଈଉଊଋଏଐଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନପଫବଭମଯୟରଲଳଵୱଶଷସହ", mark:"଼ଁଂଃାିୀୁୂୃେୈୋୌ୍ୖୗ","number":"୦୧୨୩୪୫୬୭୮୯"},

"os": { name:"Ossetian (Ossete, Ossetic)", source:"cldr_os,udhr_oss", region:"eur", script:"cyrl", speakers:"570000", letter:"аӕбвгъджзеёийклмнопрстуфхцчшщыьэюяАӔБВГЪДЖЗЕЁИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ", punctuation:"‐–—…‘‚“„«»§"},

"ote": { name:"Mezquital Otomi", source:"udhr_ote", region:"cam", script:"latn", speakers:"130000", letter:"öüäéñúíáèÖÜÄÉÑÚÍÁÈ", mark:"̱̈́̃̀"},

"pa": { name:"Punjabi", source:"cldr_pa,udhr_pan,f940e5c7fc381992f942120f89cd8137cb3c3eda", region:"sasia", script:"guru", speakers:"122000000", letter:"ੴਉਊਓਅਆਐਔਇਈਏਸਹਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵੜ\u{A33}\u{A36}\u{A59}\u{A5A}\u{A5B}\u{A5E}", mark:"ੱੰ਼੍ਾਿੀੁੂੇੈੋੌਂ", punctuation:"‐–—‘’“”′″।","number":"੦੧੨੩੪੫੬੭੮੯", symbol:"☬", other:"\u{200D}\u{200C}", aux:"ਃਁੵ","deprecated":"ੳੲ"},

"pa-arab": { name:"Punjabi {Arabic}", source:"cldr_pa_Arab", region:"sasia", script:"arab", speakers:"122000000", letter:"ءآؤئابتثجحخدذرزسشصضطظعغفقلمنهويٹپچڈڑژکگںھہیے", mark:"ُٓٔ", punctuation:"‰", other:"‎‏", aux:"أاةٔٺٻټٽ"},

"pam": { name:"Pampangan (Kapampangan)", source:"udhr_pam", region:"seasia", script:"ascii", speakers:"1900000"},

"pap": { name:"Papiamento (Papiamentu)", source:"udhr_pap", region:"carib", script:"latn", speakers:"271261", letter:"ñÑ", mark:"̃", punctuation:"’"},

"pau": { name:"Palauan", source:"udhr_pau", region:"seasia", script:"ascii", speakers:"17000"},

"pbb": { name:"Páez (Paez, Paes, Nasa Yuwe)", source:"udhr_pbb", region:"sam", script:"latn", speakers:"40000", letter:"üëäïáÜËÄÏÁ", mark:"̈́"},

"pcd": { name:"Picard", source:"udhr_pcd", region:"eur", script:"latn", speakers:"700000", letter:"èåûîéôçÈÅÛÎÉÔÇ", mark:"̧̀̊̂́", symbol:"°"},

"pcm": { name:"Nigerian Pidgin", source:"udhr_pcm", region:"afr", script:"ascii", speakers:"30000000"},

"pes": { name:"Persian (Farsi)", rtl:true, source:"cldr_fa,udhr_pes", region:"wasia", countries:"Iran, Iraq", script:"arab", speakers:"~50000000", letter:"آاءأؤئبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهةیإي", mark:"ًٌٍِّٕٔٓ", punctuation:"٫٬٪؉،؛؟‰‐…‹›«»","number":"۰۱۲۳۴۵۶۷۸۹", symbol:"−", other:"‌", aux:"ـَُِْٰٖإكىٕ", local:" فارسی‎ (Fārsi)", notes:`pes is included in the Farsi [fa] macrolanguage, and legacy applications often use [fa] rather pes.
Orthographies include:
* Arabic (naskh) <strong>(shown here)</strong>.
* Arabic (nastaliq) in Iran. There is a separate script code for nastaliq, Aran.`},

"pis": { name:"Pijin", source:"udhr_pis", region:"oce", script:"ascii", speakers:"24000"},

"piu": { name:"Pintupi-Luritja", source:"udhr_piu", region:"oce", script:"ascii", speakers:"1703"},

"pl": { name:"Polish", source:"cldr_pl,udhr_pol", region:"eur", script:"latn", speakers:"55000000", letter:"óÓąćęłńśźżĄĆĘŁŃŚŹŻ", mark:"̨́̇", punctuation:"«»§‐–—…”„†‡′″", symbol:"°", aux:"œŒŸàâåäæçéèêëîïôößùûüÿÀÂÅÄÆÇÉÈÊËÎÏÔÖÙÛǛ̧̂̊̈"},

"plt": { name:"Plateau Malagasy", source:"cldr_mg,udhr_plt", region:"afr", countries:"Madagascar", script:"latn", speakers:"18000000", letter:"àâéèêëìîïñôÀÂÉÈÊËÌÎÏÑÔ", mark:"̀̂́̈̃", local:"Malagasy", notes:"UDHR has no accents", related:`plt is included in the Malagasy [mg] macrolanguage, and legacy applications often use [mg] rather plt.`},

"pnb": { name:"Western Panjabi", source:"cldr_pnb,udhr_pnb", region:"sasia", script:"arab", speakers:"122000000", letter:"ءآؤئابپتثٹجچحخدذڈرزڑژسشصضطظعغفقکگلمنںهھہویےي", mark:"ُٓٔ", punctuation:"‐–—‘’“”′″"},

"pon": { name:"Pohnpeian (Ponapean)", source:"udhr_pon", region:"oce", script:"ascii", speakers:"31000"},

"ppl": { name:"Pipil", source:"udhr_ppl", region:"cam", script:"latn", speakers:"500", letter:"áéÁÉ", mark:"́"},

"prg": { name:"Prussian (Old Prussian)", source:"cldr_prg", region:"eur", script:"latn", speakers:"0", letter:"țȚāēģīķņōŗšūžĀĒĢĪĶŅŌŖŠŪŽḑḐ", mark:"̧̦̄̌", punctuation:"‐–—…“„"},

"prq": { name:"Ashéninka Perené", source:"udhr_prq", region:"sam", script:"latn", speakers:"~50000", letter:"íÍ", mark:"́", punctuation:"¿", notes:"This is one of several closely related Ashéninka languages (though there is no macrolanguage), including: [cpu], [cpc], [cpb], [cjo], [cpy]. Ashéninka was recognized as a separate language from Asháninka ([cni]) in 2017, and the process to fix an alphabet was underway during 2018."},

"prs": { name:"Dari (Afghan Persian)", rtl:true, source:"udhr_pes_2", region:"casia", countries:"Afghanistan, Pakistan, Iran", script:"arab", speakers:"12500000", letter:"اعلمیهجنحقوبشرصدسزآکئثتذضخپگظفغطأچژءي", mark:"ًٔٓ", punctuation:"،‐","number":"۱۹۴۸۲۳۵۶۷۰", other:"‌", local:" فارسی‎ (Fārsi)", notes:`prs is included in the Farsi [fa] macrolanguage, and legacy applications often use [fa] rather prs.
Orthographies include:
* Arabic (naskh), used in print <strong>(shown here)</strong>.
* Arabic (nastaliq) used in handwriting &amp; for book titles. There is a separate script code for nastaliq, Aran.`},

"ps": { name:"Pashto (Pushtu, Pushto)", source:"cldr_ps", region:"casia", script:"arab", speakers:"~50000000", letter:"آاأءبپتټثجځچڅحخدډذرړزژږسشښصضطظعغفقکګگلمنڼهةوؤیيېۍئ", mark:"ًٌٍَُِّْٰٔٓ", punctuation:"٫٬٪؉‰","number":"۰۱۲۳۴۵۶۷۸۹", symbol:"−"},

"pt": { name:"Portuguese", source:"cldr_pt,udhr_por_PT,udhr_por_BR", region:"eur", script:"latn", speakers:"215000000", letter:"áàâãçéêíóòôõúºÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"̧́̀̂̃", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸªåäæèëìîïñºöøùûüÿÅÄÆÈËÌÎÏÑÖØÙÛÜ̆̊̈̄"},

"qu": { name:"Quechua", source:"cldr_qu", region:"sam", script:"latn", speakers:"?", letter:"Ññʼ", mark:"̃", punctuation:"‰", aux:"ĀāĂăĒēĔĕĪīĬĭŌōŎŏŒœŪūŬŭŸÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÒÓÔÖØÙÚÛÜàáâãäåæçèéêëìíîïòóôöøùúûüÿ̧̀́̂̃̄̆̈̊", notes:"qu is a macrolanguage that encompasses the following more specific primary language subtags: cqu qub qud quf qug quh quk qul qup qur qus quw qux quy quz qva qvc qve qvh qvi qvj qvl qvm qvn qvo qvp qvs qvw qvz qwa qwc qwh qws qxa qxc qxh qxl qxn qxo qxp qxr qxt qxu qxw. qu is often preferred by legacy applications rather than qxp (Quechua, Puno)."},

"quc": { name:"K'iche' (Quiché)", source:"udhr_quc", region:"cam", script:"ascii", speakers:"2300000"},

"rar": { name:"Cook Islands Māori (Rarotongan)", source:"udhr_rar", region:"oce", script:"ascii", speakers:"21725"},

"rm": { name:"Romansh (Romansch, Rumantsch, Romanche)", source:"cldr_rm,udhr_roh_rumgr,udhr_roh_puter,udhr_roh_surmiran,udhr_roh_sursilv,udhr_roh_sutsilv,udhr_roh_vallader", region:"eur", script:"latn", speakers:"36622", letter:"àüöéèìòùÀÜÖÉÈÌÒÙ", mark:"̀̈́", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáâåäæçêëíîïñóôöøúûüÿÁÂÅÄÆÇÊËÍÎÏÑÓÔÖØÚÛÜ̧̆̂̊̈̄̃"},

"rn": { name:"Rundi (Kirundi)", source:"cldr_rn,udhr_run", region:"afr", script:"ascii", speakers:"8800000"},

"ro": { name:"Romanian (Rumanian, Roumanian)", source:"cldr_ro,udhr_ron_2006,udhr_ron_1993,udhr_ron_1953", region:"eur", script:"latn", speakers:"~25000000", letter:"âîÂÎșțȘȚăĂ", mark:"̦̆̂", punctuation:"«»‐–—…‘“”„", aux:"şţŞŢáàåäçéèêëñöüÁÀÅÄÇÉÈÊËÑÖǗ̧̀̊̈̃"},

"rof": { name:"Rombo (Kirombo)", source:"cldr_rof", region:"afr", script:"ascii", speakers:"?"},

"rom": { name:"Romani (Romany, Gypsy, Gipsy)", source:"udhr_rmn,udhr_rmn_1", region:"eur", script:"latn", speakers:"~1500000", letter:"àõùèìòâÀÕÙÈÌÒÂƟśěćŕăąňűźőģůščžŚĚĆŔĂĄŇŰŹŐĢŮŠČŽɵ", mark:"̨̧̀́̌̃̆̋̂̊"},

"ru": { name:"Russian", source:"cldr_ru,udhr_rus", region:"eur", script:"cyrl", speakers:"150000000", letter:"всеобщаядклрципчнтзгшюйьмуыхъжэфёВСЕОБЩАЯДКЛРЦИПЧНТЗГШЮЙЬМУЫХЪЖЭФЁ", mark:"̆̈", punctuation:"‐–—…‘‚“„«»§", aux:"́"},

"rup": { name:"Aromanian", source:"udhr_rmy", region:"eur", script:"latn", speakers:"250000", letter:"ãâÃÂ", mark:"̃̂"},

"rw": { name:"Kinyarwanda", source:"cldr_rw,udhr_kin", region:"afr", script:"ascii", speakers:"9800000"},

"rwk": { name:"Rwa (Rwo, Meru, Kirwo)", source:"cldr_rwk", region:"afr", script:"ascii", speakers:"400000"},

"sa": { name:"Sanskrit", source:"udhr_san", region:"sasia", script:"deva", speakers:"~15000", letter:"मनवधकरणजगतअभघषयपचशसएछबदटडहइआञउठथलढऽ", mark:"ािंो्ूेुौैीृॄ़", punctuation:"।", notes:"Added <span class='codepoint'><span lang='hi'>&#x25CC;&#x0944;</span> [<span class='uname'>U+0944 DEVANAGARI VOWEL SIGN VOCALIC RR</span>]</span>."},

"sah": { name:"Yakut (Sakha)", source:"cldr_sah,udhr_sah", region:"nasia", script:"cyrl", speakers:"450000", letter:"абгҕдьийклмнҥоөпрстуүхһчыэецязювщъжфАБГҔДЬИЙКЛМНҤОӨПРСТУҮХҺЧЫЭЕЦЯЗЮВЩЪЖФ", mark:"̆", aux:"веёжзфцшщъюяВЕЁЖЗФЦШЩЪЮЯ̈"},

"saq": { name:"Samburu", source:"cldr_saq", region:"afr", script:"ascii", speakers:"240000"},

"sbp": { name:"Sangu (Kisangu, Kisango, Kirori, Eshisango, Rori, Sango)", source:"cldr_sbp", region:"afr", script:"ascii", speakers:"75000"},

"sc": { name:"Sardinian (Sard)", source:"udhr_src", region:"eur", script:"latn", speakers:"~1000000", letter:"òìàèùÒÌÀÈÙ", mark:"̀"},

"sco": { name:"Scots (Lowland Scots)", source:"udhr_sco", region:"eur", script:"ascii", speakers:"110000"},

"sd": { name:"Sindhi", source:"cldr_sd", region:"sasia", script:"arab", speakers:"25000000", letter:"آابٻپڀتثٺٽٿجھڃڄچڇحخدذڊڌڍڏرزڙسشصضطظعغفڦقکڪگڱڳلمنڻهوي", mark:"ٓ", punctuation:"‰", aux:"ئٔ"},

"se": { name:"Northern Sami", source:"cldr_se", region:"eur", script:"latn", speakers:"25000", letter:"áÁčđŋšŧžČĐŊŠŦŽ", mark:"́̌", aux:"ńŃàçéèíñóòúüøæåäãöÀÇÉÈÍÑÓÒÚÜØÆÅÄÃÖ̧̀̃̈̊"},

"seh": { name:"Sena", source:"cldr_seh", region:"afr", script:"latn", speakers:"1600000", letter:"áàâãçéêíóòôõúÁÀÂÃÇÉÊÍÓÒÔÕÚ", mark:"̧́̀̂̃"},

"ses": { name:"Koyraboro Senni (Eastern Songhay, Koroboro Senni, Koyra Senni)", source:"cldr_ses", region:"afr", script:"latn", speakers:"430000", letter:"ãõÃÕƝŋšžŊŠŽẽẼɲ", mark:"̃̌"},

"sey": { name:"Secoya", source:"udhr_sey", region:"sam", script:"latn", speakers:"400", letter:"ëñàéËÑÀÉ", mark:"̱̈̃̀́"},

"sg": { name:"Sango (Sangho)", source:"cldr_sg", region:"afr", script:"latn", speakers:"450000", letter:"âäêëîïôöùûüÂÄÊËÎÏÔÖÙÛÜ", mark:"̂̈̀"},

"sh": { name:"Serbo-Croatian", silcode:"hbs", redirect:true, source:"", region:"eur", script:"na", speakers:"", notes:`sh is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Bosnian [bs], Croatian [hr], Serbian [sr], Montenegrin [cnr].
Legacy applications often use az rather than [sr].
Orthographies include:
* TBD`},

"shi": { name:"Tachelhit (Tashelhiyt, Shilha)", source:"cldr_shi", region:"afr", script:"tfng", speakers:"4000000", letter:"ⴰⴱⴳⵯⴷⴹⴻⴼⴽⵀⵃⵄⵅⵇⵉⵊⵍⵎⵏⵓⵔⵕⵖⵙⵚⵛⵜⵟⵡⵢⵣⵥ"},

"shi-latn": { name:"Tachelhit (Tashelhiyt, Shilha) {Latin}", source:"cldr_shi_Latn", region:"afr", script:"latn", speakers:"4000000", letter:"ḍḥṛṣṭḌḤṚṢṬƐƔɛɣʷ", mark:"̣"},

"shk": { name:"Shilluk", source:"udhr_shk,7b9b98a8ced343c0f2356595d76c12d32b5dd0a5", region:"afr", script:"latn", speakers:"175000", letter:"ÀÁÄÈÉËÌÍÏÓÖØÙÚàáäèéëìíïóöøùú", mark:"́̈̀"},

"shn": { name:"Shan", source:"udhr_shn", region:"seasia", script:"mymr", speakers:"3300000", letter:"လၵပၼၽဝငသဢတမၸၾႁယၶၺထရ", mark:"ိ်ႈုၢႇွႆူးဵီႊႅႃႉေႂႄြ", punctuation:"။၊"},

"shp": { name:"Shipibo-Conibo (Shipibo-Konibo)", source:"udhr_shp", region:"sam", script:"latn", speakers:"26000", letter:"íáóéñúÍÁÓÉÑÚ", mark:"́̃", punctuation:"¿"},

"si": { name:"Sinhala (Sinhalese)", source:"cldr_si,udhr_sin,0de67cc747d85485d1c6e7c99ee9a6e885c80803", region:"sasia", script:"sinh", speakers:"16000000", letter:"අආඇඈඉඊඋඌඍඑඒඓඔඕඖකඛගඝඞඟචඡජඣඥටඨඩඪණඬතථදධනඳපඵබභමඹයරලවශෂසහළෆ", mark:"ංඃ්ාැෑිීුූෘෙේෛොෝෞෟ", punctuation:"§‐–—…‘’“”†‡′″", other:"‍"},

"sja": { name:"Epena (Eperara)", source:"udhr_sja", region:"sam", script:"ascii", speakers:"8300"},

"sk": { name:"Slovak", source:"cldr_sk,udhr_slk", region:"eur", script:"latn", speakers:"5200000", letter:"čďĺľňŕšťžűČĎĹĽŇŔŠŤŽŰáäéíóôúýÁÄÉÍÓÔÚÝ", mark:"́̈̌̂̋", punctuation:"‐–…‘‚“„§", aux:"ăāĕēĭīŏōœřŭūĂĀĔĒĬĪŎŌŒŘŬŪŸàâåæçèêëìîïñòöøùûüÿÀÂÅÆÇÈÊËÌÎÏÑÒÖØÙÛǛ̧̆̊̄̃"},

"skr": { name:"Saraiki (Siraiki, Seraiki)", source:"udhr_skr", region:"sasia", script:"arab", speakers:"20000000", letter:"انسیحقودعلمشرپہڱھےکڄئتڻزںگڈفظجچبڑصڋخڔٹطآذضغةثٻي", mark:"ُٔٓ", punctuation:"۔،","number":"۱۲۳۴۵۶۷۸۹۰"},

"sl": { name:"Slovene (Slovenian)", source:"cldr_sl,udhr_slv", region:"eur", script:"latn", speakers:"2500000", letter:"čšžČŠŽ", mark:"̌", aux:"ăāćđĕēĭīŏōœŭūĂĀĆĐĔĒĬĪŎŌŒŬŪŸáàâåäæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̄̃"},

"sm": { name:"Samoan", source:"udhr_smo", region:"oce", script:"ascii", speakers:"510000"},

"smn": { name:"Inari Sami", source:"cldr_smn", region:"eur", script:"latn", speakers:"300", letter:"âäáÂÄÁčđŋšžČĐŊŠŽ", mark:"̂̌̈́", aux:"ńŃàçéèíñóòúüæøåãöÀÇÉÈÍÑÓÒÚÜÆØÅÃÖ̧̀̃̊"},

"sn": { name:"Shona", source:"cldr_sn,udhr_sna", region:"afr", script:"ascii", speakers:"15000000"},

"snk": { name:"Soninke", source:"udhr_snk", region:"afr", script:"latn", speakers:"2100000", letter:"ñÑŋŊ", mark:"̃"},

"snn": { name:"Siona", source:"udhr_snn", region:"sam", script:"latn", speakers:"500", letter:"ëñíäéËÑÍÄÉ", mark:"̱̈̃́"},

"so": { name:"Somali", source:"cldr_so,udhr_som", region:"afr", script:"ascii", speakers:"15000000"},

"spy": { name:"Sabaot", source:"cldr_kln", region:"afr", countries:"Kenya", script:"ascii", speakers:"60000", local:"Sābāwōōt", notes:`The autonym suggests that there are more characters than described in CLDR, or an alternate orthography.`, related:`spy is included in the Kalenjin [kln] macrolanguage, and legacy applications often use [kln] rather spy.`},

"sq": { name:"Albanian", source:"cldr_sq,UDHR", region:"eur", script:"latn", speakers:"5400000", letter:"çëÇË", mark:"̧̈", punctuation:"«»§‐–—…‘’“”′″‰"},

"sr": { name:"Serbian", source:"cldr_sr,udhr_srp_cyrl", region:"eur", script:"cyrl", speakers:"~9700000", letter:"абвгдђежзијклљмнњопрстћуфхцчџшАБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ", punctuation:"‐–…‘‚“„", aux:"ёйщъыьэюяЁЙЩЪЫЬЭЮЯ̈̆"},

"sr-latn": { name:"Serbian {Latin}", source:"cldr_sr_Latn,udhr_srp_latn", region:"eur", script:"latn", speakers:"~9700000", letter:"čćžđšČĆŽĐŠ", mark:"̌́", punctuation:"‐–…‘‚“„", aux:"åÅ̊"},

"srr": { name:"Serer", source:"udhr_srr", region:"afr", script:"latn", speakers:"1230000", letter:"ñÑƭƴƊƁƬƳŋćŊĆṕṔɗɓ", mark:"̃́"},

"ss": { name:"Swati (Swazi)", source:"udhr_ssw", region:"afr", script:"ascii", speakers:"2300000"},

"st": { name:"Southern Sotho (Sotho, Sesotho, Southern Sesotho)", source:"udhr_sot", region:"afr", script:"ascii", speakers:"5600000"},

"su": { name:"Sundanese", source:"udhr_sun", region:"seasia", script:"ascii", speakers:"42000000"},

"su-sund": { name:"Sundanese (Sundanese)", source:"ba3345132c34462391346964eea198c4041e1a52", region:"seasia", script:"sund", speakers:"42000000", letter:"ᮊᮋᮌᮍᮎᮏᮐᮑᮒᮓᮔᮕᮖᮗᮘᮙᮚᮛᮜᮝᮞᮟᮠᮮᮯᮃᮄᮅᮆᮇᮈᮉ", mark:"ᮡᮢᮣᮀᮁᮂᮤᮥᮦᮧᮨᮩ᮪","number":"᮰᮱᮲᮳᮴᮵᮶᮷᮸᮹"},

"suk": { name:"Sukuma", source:"udhr_suk", region:"afr", script:"ascii", speakers:"5400000"},

"sus": { name:"Susu", source:"udhr_sus", region:"afr", script:"latn", speakers:"1060000", letter:"ƐƆƝɛɔɲ"},

"sv": { name:"Swedish", source:"cldr_sv,udhr_swe", region:"eur", script:"latn", speakers:"10000000", letter:"àéåäöÀÉÅÄÖ", mark:"̀́̊̈", punctuation:"§‐–—…‘’“”†‡′″", aux:"āīĀĪŸáâãçèëíîïñóúÿüæøÁÂÃÇÈËÍÎÏÑÓÚÜÆØ̧̂̃̄"},

"sw": { name:"Swahili (Kiswahili)", source:"cldr_sw,udhr_swh", region:"afr", script:"ascii", speakers:"~7000000"},

"swb": { name:"Maore Comorian (Shimaore)", source:"udhr_swb", region:"afr", script:"latn", speakers:"97000", letter:"ãÃƁƊĩĨẽẼɓɗ", mark:"̃"},

"syr": { name:"Syriac", redirect:true, region:"wasia", script:"syrc", notes:`syr is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Assyrian Neo-Aramaic ([aii]), Chaldean Neo-Aramaic ([cld]).
Legacy applications often use syr rather than [cld] (Chaldean Neo-Aramaic).
Orthographies include:
* ʾesṭrangēlā (syre), all ancient manuscripts. West and East Syriac text uses it for headers, titles, and subtitles. It's also the current standard for Western scholarship.
* serṭā (Western Syriac) (syrj), used in West Syriac texts, Turoyo, and Garshuni (Arabic written with Syriac).
* maḏnḥāyā (Eastern Syriac) (syrn), used for East Syriac and Swadaya texts, and in West Syriac texts for headers, titles and subtitles.
* Arabic (Garshuni), often used today by Neo-Aramaic-speakers for written communication, such as letters and fliers.
ISO 15924 also has a general script code for Syriac (syrc).`},

"ta": { name:"Tamil", source:"cldr_ta,udhr_tam,b58628669c02b347a127405429a903afbcc07eb7", region:"sasia", script:"taml", speakers:"70000000", letter:"அஆஇஈஉஊஎஏஐஒஓஔஃகஙசஞடணதநபமயரலவழளறனஜஷஸஹ", mark:"ாிீுூெேைொோௌ்ௗ", punctuation:"§‐–—…‘’“”†‡′″", aux:"ஶ௦௧௨௩௪௫௬௭௮௯௰௱௲௳௴௵௶௷௸௹௺ௐ।॥"},

"tbz": { name:"Ditammari (Tammari)", source:"udhr_tbz", region:"afr", script:"latn", speakers:"150000", letter:"úàóãìùÚÀÓÃÌÙƉƐƆũŋĩŨŊĨɖɛɔ", mark:"̃́̀"},

"tca": { name:"Ticuna (Tikuna)", source:"udhr_tca", region:"sam", script:"latn", speakers:"47000", letter:"üéãñõúáíóÜÉÃÑÕÚÁÍÓĩũĨŨẽṯḏṉẼṮḎṈ", mark:"̱̃́̈͟"},

"tdd": { name:"Tai Nüa (Nɯa, Dehong Dai, Chinese Shan, Tai Mau, Tai Kong)", source:"7bbb60b1ae185293cf14c8d8088e14351477c26b", region:"seasia", script:"tale", speakers:"720000", letter:"ᥐᥑᥒᥓᥔᥕᥖᥗᥘᥙᥚᥛᥜᥝᥞᥟᥠᥡᥢᥣᥤᥥᥦᥧᥨᥩᥪᥫᥬᥭᥰᥱᥲᥳᥴ", aux:"၀၁၂၃၄၅၆၇၈၉̀́̇̈̌"},

"tdt": { name:"Tetun Dili", source:"udhr_010", region:"seasia", script:"latn", speakers:"?", letter:"áíúóÁÍÚÓ", mark:"́", punctuation:"’"},

"te": { name:"Telugu", source:"cldr_te,udhr_tel", region:"sasia", script:"telu", speakers:"74002586", letter:"అఆఇఈఉఊఋౠఌౡఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలవశషసహళ", mark:"ఁంఃాిీుూృౄెేైొోౌ్ౕౖ", punctuation:"‘’“”", aux:"౦౧౨౩౪౫౬౭౮౯"},

"tem": { name:"Temne (Themne, Timne)", source:"udhr_tem", region:"afr", script:"latn", speakers:"1200000", letter:"ɅƆƏƐŋŊʌɔəɛ", punctuation:"‐"},

"teo": { name:"Teso", source:"cldr_teo", region:"afr", script:"ascii", speakers:"1900000"},

"tet": { name:"Tetum (Tetun)", source:"udhr_tet", region:"seasia", script:"ascii", speakers:"500000"},

"tg": { name:"Tajik (Tajiki, Tajiki Persian)", source:"cldr_tg,udhr_tgk", region:"casia", script:"cyrl", speakers:"8400000", letter:"эъломияуҳқбашрпегфтднзкхсвӣёҷчғюӯйжьЭЪЛОМИЯУҲҚБАШРПЕГФТДНЗКХСВӢЁҶЧҒЮӮЙЖЬ", mark:"̄̈̆", punctuation:"‰", aux:"цщыьЦЩЫЬ"},

"th": { name:"Thai (Siamese)", source:"cldr_th,udhr_tha,1935c4dc5720d8b5ca3fe2e8f19a794a59bba8af", region:"seasia", script:"thai", speakers:"44000000", letter:"ฯๆกขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮะาๅำเแโใไ", mark:"์็่้๊๋ัิีึืุู","number":"๐๑๒๓๔๕๖๗๘๙", punctuation:"‐–—‘’“”…′″๏๚๛", symbol:"฿", aux:"ํ"},

"ti": { name:"Tigrinya", source:"cldr_ti,udhr_tir", region:"afr", script:"ethi", speakers:"6900000", letter:"ሀሁሂሃሄህሆለሉሊላሌልሎሏሐሑሒሓሔሕሖሗመሙሚማሜምሞሟሠሡሢሣሤሥሦሧረሩሪራሬርሮሯሰሱሲሳሴስሶሷሸሹሺሻሼሽሾሿቀቁቂቃቄቅቆቈቊቋቌቍቐቑቒቓቔቕቖቘቚቛቜቝበቡቢባቤብቦቧቨቩቪቫቬቭቮቯተቱቲታቴትቶቷቸቹቺቻቼችቾቿኀኁኂኃኄኅኆኈኊኋኌኍነኑኒናኔንኖኗኘኙኚኛኜኝኞኟአኡኢኣኤእኦኧከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾዀዂዃዄዅወዉዊዋዌውዎዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦዧየዩዪያዬይዮደዱዲዳዴድዶዷጀጁጂጃጄጅጆጇገጉጊጋጌግጎጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾጿፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፏፐፑፒፓፔፕፖፗ", mark:"፟", punctuation:"፣፡’", aux:"ሇቇኇኯዏዯዸዹዺዻዼዽዾዿጏጘጙጚጛጜጝጞጟፘፙፚⶀⶁⶂⶃⶄⶅⶆⶇⶈⶉⶊⶋⶌⶍⶎⶓⶔⶕⶖⶏⶐⶑⶒⶠⶡⶢⶣⶤⶥⶦⶨⶩⶪⶫⶬⶭⶮⶰⶱⶲⶳⶴⶵⶶⶸⶹⶺⶻⶼⶽⶾⷀⷁⷂⷃⷄⷅⷆⷈⷉⷊⷋⷌⷍⷎⷐⷑⷒⷓⷔⷕⷖⷘⷙⷚⷛⷜⷝⷞ᎐᎑᎒᎓᎔᎕᎖᎗᎘᎙ᎀᎁᎂᎃᎄᎅᎆᎇᎈᎉᎊᎋᎌᎍᎎᎏ"},

"tiv": { name:"Tiv", source:"udhr_tiv", region:"afr", script:"latn", speakers:"2200000", letter:"ôÔ", mark:"̂"},

"tk": { name:"Turkmen", source:"cldr_tk,udhr_tuk_latn", region:"casia", script:"latn", speakers:"7500000", letter:"çäöüýÇÄÖÜÝžňşŽŇŞ", mark:"̧̈̌́", punctuation:"§–—…“”‐‰"},

"tk-cyrl": { name:"Turkmen {Cyrillic}", source:"udhr_tuk_cyrl", region:"casia", script:"cyrl", speakers:"7500000", letter:"адмхуклрынңәиецясгшбптчвзэоҗйөүъюжфёАДМХУКЛРЫНҢӘИЕЦЯСГШБПТЧВЗЭОҖЙӨҮЪЮЖФЁ", mark:"̆̈", punctuation:"‐–"},

"tl": { name:"Tagalog", source:"udhr_tgl_tglg", region:"seasia", script:"ascii", speakers:"28000000"},

"tly": { name:"Talysh", source:"udhr_tly", region:"wasia", script:"latn", speakers:"900000", letter:"çÇƏığşİĞŞə", mark:"̧̇̆"},

"tn": { name:"Tswana (Setswana)", source:"udhr_tsn", region:"afr", script:"latn", speakers:"5000000", letter:"šŠ", mark:"̌", punctuation:"·‐"},

"to": { name:"Tongan", source:"cldr_to,udhr_ton", region:"oce", script:"latn", speakers:"169000", letter:"āēīōūĀĒĪŌŪáéíóúÁÉÍÓÚʻ", mark:"́̄", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàâåäæçèêëìîïñòôöøùûüÿÀÂÅÄÆÇÈÊËÌÎÏÑÒÔÖØÙÛǛ̧̆̂̊̈̃"},

"tob": { name:"Toba (Qom, Kom, Chaco Sur, Toba Sur)", source:"udhr_tob", region:"sam", script:"latn", speakers:"40000", letter:"ỹỸíÍ", mark:"̃́"},

"toi": { name:"Tonga (Chitonga, Zambezi)", source:"udhr_toi", region:"afr", script:"ascii", speakers:"1500000"},

"toj": { name:"Tojolab'al", source:"udhr_toj", region:"cam", script:"ascii", speakers:"52000", punctuation:"’"},

"top": { name:"Papantla Totonac (Lowland Totonac)", source:"udhr_top", region:"cam", script:"ascii", speakers:"80000"},

"tpi": { name:"Tok Pisin (Pidgin English)", source:"udhr_tpi", region:"seasia", script:"ascii", speakers:"4000000"},

"tr": { name:"Turkish (Istanbul Turkish)", source:"cldr_tr,udhr_tur", region:"wasia", script:"latn", speakers:"71000000", letter:"çöüâÇÖÜÂğışĞŞİ", mark:"̧̇̆̈̂", punctuation:"§‐–—…‘’“”†‡′″", aux:"ăĕĭŏœŭĂĔĬŎŒŬŸàåäæèêëìîïñòôøùûÿÀÅÄÆÈÊËÌÎÏÑÒÔØÙÛ̀̊̃"},

"ts": { name:"Tsonga (Xitsonga)", source:"udhr_tso_MZ,udhr_tso_ZW", region:"afr", script:"latn", speakers:"13000000", letter:"ìàçãòèùíéáúÌÀÇÃÒÈÙÍÉÁÚ", mark:"̧̀̃́", punctuation:"’"},

"tsz": { name:"Purépecha (Tarascan)", source:"udhr_tsz", region:"cam", script:"latn", speakers:"125000", letter:"áïéíÁÏÉÍⱭƲŋŊɑʋ", mark:"́̈"},

"tt": { name:"Tatar", source:"cldr_tt,udhr_tat", region:"eur", script:"cyrl", speakers:"5200000", letter:"кешхоуларынңгмидцясбәтьвзпөъһҗчүйфюэжКЕШХОУЛАРЫНҢГМИДЦЯСБӘТЬВЗПӨЪҺҖЧҮЙФЮЭЖёщЁЩ", mark:"̈̆", aux:"ғқӯҒҚӮ̄"},

"tw": { name:"Twi", redirect:true, region:"afr", script:"latn", notes:`This is a member of the Akan ([ak]) macrolanguage.
Legacy applications often use [ak] rather than tw.
Dialects include: Ahafo, Akuapem, Akyem, Asante, Asen, Dankyira, Kwawu.
Orthographies include:
* Latin, from 1978, intended to be a common orthography for Akan (see [ak]).
* Latin, for the Asante dialect of Twi (see [tw-asante])
* Latin, for the Akuapem dialect of Twi (see [tw-akuapem])`},

"tw-akuapem": { name:"Akuapem Twi", source:"udhr_aka_akuapem", region:"afr", script:"latn", speakers:"6000000", letter:"ɛɔƐƆòÒ", mark:"̀", notes:`This is a dialect of Twi ([tw]), under the Akan ([ak]) macrolanguage.
Legacy applications often use [ak] rather than tw-akuapem.`},

"tw-asante": { name:"Ashanti (Asante, Asante Twi)", source:"udhr_aka_asante", region:"afr", script:"latn", speakers:"2800000", letter:"ɛɔƐƆ", notes:`This is a dialect of Twi ([tw]), under the Akan ([ak]) macrolanguage.
Legacy applications often use [ak] rather than tw-asante.`},

"twq": { name:"Tasawaq", source:"cldr_twq", region:"afr", script:"latn", speakers:"8000", letter:"ɲẽẼŋšžŊŠŽƝãõÃÕ", mark:"̃̌"},

"ty": { name:"Tahitian", source:"udhr_tah", region:"oce", script:"latn", speakers:"68000", letter:"āūōēīĀŪŌĒĪ", mark:"̄"},

"tyv": { name:"Tuvan (Tuvinian, Tyvan, Tuvin)", source:"udhr_tyv", region:"nasia", script:"cyrl", speakers:"280000", letter:"кижнңэргелбүтуазычдьсмяоюцхпшөйвъфёКИЖНҢЭРГЕЛБҮТУАЗЫЧДЬСМЯОЮЦХПШӨЙВЪФЁ", mark:"̆̈"},

"tzh": { name:"Tzeltal (Ts'eltal)", source:"udhr_tzh", region:"cam", script:"ascii", speakers:"450000", symbol:"´"},

"tzm": { name:"Central Atlas Tamazight (Central Morocco Tamazight, Middle Atlas Tamazight, Central Shilha, Beraber, Braber) {Latin}", source:"cldr_tzm,udhr_tzm_tfng", region:"afr", script:"latn", speakers:"2500000", letter:"ɛɣḍḥṛṣṭẓỵḌḤṚṢṬẒỴƐƔâéçÂÉÇʷ", mark:"̧̣̂́"},

"tzo": { name:"Tzotzil", source:"udhr_tzc", region:"cam", script:"latn", speakers:"400000", letter:"óáéíúÓÁÉÍÚ", mark:"́", punctuation:"’"},

"ug": { name:"Uyghur (Uighur, Eastern Turki)", source:"cldr_ug,udhr_uig_arab", region:"casia", script:"arab", speakers:"25000000", letter:"ئاەبپتجچخدرزژسشغفقكگڭلمنھوۇۆۈۋېىي", mark:"ٔ", punctuation:"،؛"},

"ug-latn": { name:"Uyghur (Uighur, Eastern Turki) {Latin}", source:"udhr_uig_latn", region:"casia", script:"latn", speakers:"25000000", letter:"öéüÖÉÜ", mark:"̈́", punctuation:"’"},

"uk": { name:"Ukrainian", source:"cldr_uk,udhr_ukr", region:"eur", script:"cyrl", speakers:"45000000", letter:"абвгґдеєжзиіїйклмнопрстуфхцчшщьюяАБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯʼ", mark:"̈̆", punctuation:"–’“„‐«»§", symbol:"№", aux:"ёъыэЁЪЫЭ́"},

"umb": { name:"Umbundu (South Mbundu)", source:"udhr_umb,udhr_011", region:"afr", script:"latn", speakers:"6000000", letter:"ñêãîõâÑÊÃÎÕÂ", mark:"̃̂", punctuation:"’"},

"ur": { name:"Urdu", source:"cldr_urdu,udhr_urd,2a19c3255e234cbb86e12ec0dc966684ccdb2965", region:"sasia", script:"arab", speakers:"65000000", letter:"اآبپتٹثجچحخدڈذرڑزژسشصضطظعغفقکگلمنںوؤہۂھءیئےهي", mark:"ًَُِّٰٔٓ", punctuation:"،؍٫٬؛؟۔”“؁٪","number":"۰۱۲۳۴۵۶۷۸۹", aux:"؃ۃٻٺټٽي"},

"ura": { name:"Urarina (Itucali, Simacu, Shimacu)", source:"udhr_ura", region:"sam", script:"latn", speakers:"6000", letter:"úóíÚÓÍ", mark:"́"},

"uz": { name:"Uzbek", source:"cldr_uz,udhr_uzn_latn", region:"casia", script:"latn", speakers:"27000000", letter:"ʻʼ", punctuation:"‐–—…‘’“”„′″«»§"},

"uz-arab": { name:"Uzbek {Arabic}", source:"cldr_uz_Arab", region:"casia", script:"arab", speakers:"27000000", letter:"ءآأؤئابةتثجحخدذرزسشصضطظعغفقلمنهويپچژکگۇۉی", mark:"ًٌٍَُِّْٰٓٔ", punctuation:"؉٪٫٬","number":"۰۱۲۳۴۵۶۷۸۹", aux:"يټځڅډړږښګڼۍې", other:"‌‍‎‏"},

"uz-cyrl": { name:"Uzbek {Cyrillic}", source:"cldr_uz_Cyrl,udhr_uzn_cyrl", region:"casia", script:"cyrl", speakers:"27000000", letter:"инсоҳуқлармждекцяйбшгтўвэъпчзёфхюғИНСОҲУҚЛАРМЖДЕКЦЯЙБШГТЎВЭЪПЧЗЁФХЮҒ", mark:"̆̈", punctuation:"‐–", aux:"щыьЩЫЬ"},

"vai": { name:"Vai (Vy, Gallinas)", source:"cldr_vai,udhr_vai,a5c6b1f62cb3d71b6acccbe995ff47db10e94963", region:"afr", script:"vaii", speakers:"120000", letter:"ꔀꔁꔂꔃꔄꔅꔆꔇꔈꔉꔊꔋꔌꔍꔎꔏꔐꔑꔒꔓꔔꔕꔖꔗꔘꔙꔚꔛꔜꔝꔞꔟꔠꔡꔢꔣꔤꔥꔦꔧꔨꔩꔪꔫꔬꔭꔮꔯꔰꔱꔲꔳꔴꔵꔶꔷꔸꔹꔺꔻꔼꔽꔾꔿꕀꕁꕂꕃꕄꕅꕆꕇꕈꕉꕊꕋꕌꕍꕎꕏꕐꕑꕒꕓꕔꕕꕖꕗꕘꕙꕚꕛꕜꕝꕞꕟꕠꕡꕢꕣꕤꕥꕦꕧꕨꕩꕪꕫꕬꕭꕮꕯꕰꕱꕲꕳꕴꕵꕶꕷꕸꕹꕺꕻꕼꕽꕾꕿꖀꖁꖂꖃꖄꖅꖆꖇꖈꖉꖊꖋꖌꖍꖎꖏꖐꖑꖒꖓꖔꖕꖖꖗꖘꖙꖚꖛꖜꖝꖞꖟꖠꖡꖢꖣꖤꖥꖦꖧꖨꖩꖪꖫꖬꖭꖮꖯꖰꖱꖲꖳꖴꖵꖶꖷꖸꖹꖺꖻꖼꖽꖾꖿꗀꗁꗂꗃꗄꗅꗆꗇꗈꗉꗊꗋꗌꗍꗎꗏꗐꗑꗒꗓꗔꗕꗖꗗꗘꗙꗚꗛꗜꗝꗞꗟꗠꗡꗢꗣꗤꗥꗦꗧꗨꗩꗪꗫꗬꗭꗮꗯꗰꗱꗲꗳꗴꗵꗶꗷꗸꗹꗺꗻꗼꗽꗾꗿꘀꘁꘂꘃꘄꘅꘆꘇꘈꘉꘊꘋꘌ", aux:"ꘓꘘ꘍꘎꘏"},

"vai-latn": { name:"Vai (Vy, Gallinas) {Latin}", source:"cldr_vai_Latn", region:"afr", script:"ascii", speakers:"120000", letter:"áãéíóõúÁÃÉÍÓÕÚƁƊƐƆĩŋũĨŊŨẽẼɓɗɛɔ", mark:"́̃"},

"ve": { name:"Venda (Tshivenḓa, Luvenḓa)", source:"udhr_ven", region:"afr", script:"latn", speakers:"1300000", letter:"ṱḽḓṅṋṰḼḒṄṊ", mark:"̭̇", punctuation:"“”"},

"ven": { name:"Venetian (Venetan)", source:"udhr_vec", region:"eur", script:"latn", speakers:"3900000", letter:"óàòèùéìçÓÀÒÈÙÉÌÇƚȽđĐ", mark:"̧́̀", punctuation:"’—"},

"vep": { name:"Veps (Vepsian)", source:"udhr_vep", region:"eur", script:"latn", speakers:"5900", letter:"üäöÜÄÖšžčŠŽČ", mark:"̈̌", punctuation:"’"},

"vi": { name:"Vietnamese", source:"cldr_vi,udhr_vie", region:"seasia", script:"latn", speakers:"75000000", letter:"àãáâèéêìíòõóôùúýÀÃÁÂÈÉÊÌÍÒÕÓÔÙÚÝơưƠƯăđĩũĂĐĨŨảạằẳẵắặầẩẫấậẻẽẹềểễếệỉịỏọồổỗốộờởỡớợủụừửữứựỳỷỹỵẢẠẰẲẴẮẶẦẨẪẤẬẺẼẸỀỂỄẾỆỈỊỎỌỒỔỖỐỘỜỞỠỚỢỦỤỪỬỮỨỰỲỶỸỴ", mark:"̛̣̀̉̃́̆̂", punctuation:"§‐–—…‘’“”†‡′″"},

"vmw": { name:"Makhuwa (Makua, Macua)", source:"udhr_vmw", region:"afr", script:"latn", speakers:"6600000", letter:"çõãÇÕÃ", mark:"̧̃", punctuation:"’…"},

"vo": { name:"Volapük", source:"cldr_vo", region:"eur", script:"latn", speakers:"20", letter:"äöüÄÖÜ", mark:"̈", punctuation:"«»§‐–—…‘’“”"},

"vun": { name:"Wuunjo (Wunjo, Vunjo, Kivunjo)", source:"cldr_vun", region:"afr", script:"ascii", speakers:"?"},

"wa": { name:"Walloon", source:"udhr_wln", region:"eur", script:"latn", speakers:"600000", letter:"éåèûîôâêçàÉÅÈÛÎÔÂÊÇÀ", mark:"̧́̊̀̂"},

"wae": { name:"Walser German (Walliser German)", source:"cldr_wae", region:"eur", script:"latn", speakers:"22000", letter:"áäãéíóöõúüÁÄÃÉÍÓÖÕÚÜčšũČŠŨ", mark:"́̈̃̌", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸàâåæçèêëìîïñòôøßùûÿÀÂÅÆÇÈÊËÌÎÏÑÒÔØÙÛ̧̀̆̂̊̄"},

"war": { name:"Waray", source:"udhr_war", region:"seasia", script:"ascii", speakers:"2600000"},

"wo": { name:"Wolof", source:"cldr_wo,udhr_wol", region:"afr", script:"latn", speakers:"4200000", letter:"ëñàéóËÑÀÉÓŋŊ", mark:"̈̃̀́", punctuation:"‰", aux:"ãÃ"},

"wwa": { name:"Waama (Yoabu)", source:"udhr_wwa", region:"afr", script:"latn", speakers:"50000", letter:"ãìàùèÃÌÀÙÈǹƆƐǸũŋŨŊɔɛ", mark:"̃̀"},

"xh": { name:"Xhosa", source:"cldr_xh,udhr_xho", region:"afr", script:"ascii", speakers:"8200000"},

"xog": { name:"Soga (Lusoga)", source:"cldr_xog", region:"afr", script:"ascii", speakers:"2100000"},

"xpe": { name:"Liberia Kpelle", source:"udhr_gkp", region:"afr", countries:"Liberia", script:"latn", speakers:"1300000", letter:"ƐƁƆƝƏĝŋĜŊɛɓɔɲə", mark:"̂", local:"Kpɛlɛwoo", related:`xpe is included in the Kpelle [kpe] macrolanguage, and legacy applications often use [kpe] rather xpe.
Orthographies include:
* Kpelle, limited usage except for correspondence.
* Latin <strong>(shown here)</strong>.`},

"xsm": { name:"Kasem", source:"udhr_xsm", region:"afr", script:"latn", speakers:"250000", letter:"ƐƆŋŊɛɔ"},

"yad": { name:"Yagua", source:"udhr_yad", region:"sam", script:"latn", speakers:"5700", letter:"ñíéáÑÍÉÁ", mark:"̃́"},

"yao": { name:"Yao", source:"udhr_yao", region:"afr", script:"ascii", speakers:"3100000"},

"yap": { name:"Yapese", source:"udhr_yap", region:"oce", script:"latn", speakers:"7400", letter:"ʼ", punctuation:"‐"},

"yav": { name:"Yangben (Central Yambasa)", source:"cldr_yav", region:"afr", script:"latn", speakers:"17000", letter:"áàâéèíìîóòôúùûÁÀÂÉÈÍÌÎÓÒÔÚÙÛǎǒǔǍƐǑƆǓāīŋōūĀĪŊŌŪɛɔ", mark:"́̀̂̌̄"},

"yi": { name:"Yiddish", source:"cldr_yi,udhr_ydd", region:"eur", script:"hebr", speakers:"1500000", letter:"אבגדזשהויחטײכךלמםנןסעפףצץקרתװױ", mark:"ִַָּֿׂ", punctuation:"׳״־‐–—", other:"‮‬"},

"ykg": { name:"Tundra Yukaghir (Northern Yukaghir)", source:"udhr_ykg", region:"nasia", script:"cyrl", speakers:"370", letter:"эльистачйкөдҥнбпрумогецяҕхжѳқзвфыющЭЛЬИСТАЧЙКӨДҤНБПРУМОГЕЦЯҔХЖѲҚЗВФЫЮЩ", mark:"̆"},

"yo": { name:"Yoruba", source:"cldr_yo,udhr_yor", region:"afr", script:"latn", speakers:"28000000", letter:"áàéèíìóòúùÁÀÉÈÍÌÓÒÚÙńŃẹọṣẸỌṢ", mark:"̩̣́̀̄", punctuation:"‐"},

"yua": { name:"Yucatán Maya", source:"udhr_yua", region:"cam", script:"latn", speakers:"790000", letter:"ʼóíáúéÓÍÁÚÉ", mark:"́", punctuation:"‐"},

"za": { name:"Zhuang", source:"udhr_ccx", region:"easia", script:"ascii", speakers:"16000000", notes:"This may well be missing some letters."},

"zam": { name:"Miahuatlán Zapotec (Cuixtla Zapotec)", source:"udhr_zam", region:"cam", script:"latn", speakers:"1000", letter:"óáñíÓÁÑÍʼ", mark:"́̃"},

"zdj": { name:"Ngazidja Comorian", source:"udhr_zdj", region:"afr", script:"ascii", speakers:"700000"},

"zgh": { name:"Standard Moroccan Tamazight (Amazigh, Tamazight) (Tifinagh)", source:"cldr_zgh,udhr_zgh", script:"tfng", speakers:"?", region:"afr", letter:"ⴰⵍⵖⵓⵎⴹⵏⵉⵣⵔⴼⴳⴷⵊⴱⵜⵡⴽⵢⵙⵀⵛⵥⵇⵯⴻⵕⵟⵃⵄⵅⵚ"},

"zlm": { name:"Malay", source:"cldr_ms,udhr_mly_latn", region:"seasia", script:"ascii", speakers:"77000000"},

"zlm-arab": { name:"Malay {Arabic}", source:"udhr_mly_arab", region:"seasia", script:"arab", speakers:"77000000", letter:"ڤراشتهنحقسيمأجڬدبوڽڠعفكلچخظصزطۏؤئذ", mark:"ٔ", punctuation:"،","number":"٢"},

"zro": { name:"Záparo (Sápara, Zápara)", source:"udhr_zro", region:"sam", script:"latn", speakers:"350", letter:"ñÑ", mark:"̃"},

"ztu": { name:"Güilá Zapotec", source:"udhr_ztu", region:"cam", script:"latn", speakers:"9500", letter:"ëíéËÍÉ", mark:"̈́"},

"zu": { name:"Zulu", source:"cldr_zu,udhr_zul", region:"afr", script:"ascii", speakers:"12000000", aux:"ăāĕēĭīŏōœŭūĂĀĔĒĬĪŎŌŒŬŪŸáàâåäãæçéèêëíìîïñóòôöøúùûüÿÁÀÂÅÄÃÆÇÉÈÊËÍÌÎÏÑÓÒÔÖØÚÙÛǗ̧̀̆̂̊̈̃̄"},

//"xxx":{name:"name",source:"cldr_xxx,UDHR",region:"Asia",script:"latn",speakers:"113000",letter:"",mark:"",punctuation:"",number:"",symbol:""},
}

// regions:
// nam (Northern America), sam (South America), cam (Central America), carib (Caribbean)
// eur (Europe - includes Russia to Urals and Georgia, but not Armenia or Azerbaijan)
// easia (East Asia - includes China, Mongolia, Japan, Korea)
// nasia (Northern Asia - Russia east of Urals)
// seasia (Southeast Asia - including Indonesia, Philippines
// casia (Central Asia - north of Iran, S of Russia, W of China)
// wasia (Western Asia - includes Armenian, Azerbaijan, Turkey, & middle east)
// afr (Africa)
// oce (Oceania - includes Australia, NZ, and Pacific Islands)

// Notes
// kl: CLDR adds, letter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ",mark:"\u{0301}\u{0302}\u{0303}\u{030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field




