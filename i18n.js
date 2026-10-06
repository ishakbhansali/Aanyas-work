/* English and Swedish website text. Original artwork and the PDF stay unchanged. */
(()=>{
'use strict';
let lang='en';try{const saved=localStorage.getItem('aanya-language');if(saved==='sv')lang=saved;}catch{}
const bindings=[
['.brand',"Aanya's Little World ✧",'Aanyas lilla värld ✧'],
['#world-navigation a[data-page="home"]','Home','Start'],
['#world-navigation a[data-page="knowledge"]','Knowledge World','Kunskapsvärlden'],
['#world-navigation a[data-page="comics"]','Comics','Serier'],
['#world-navigation a[data-page="about"]','About Aanya','Om Aanya'],
['.world-copy .eyebrow','A little place for big ideas','En liten plats för stora idéer'],
['.world-copy h1',"Aanya's<br><em>Little World.</em>",'Aanyas<br><em>lilla värld.</em>'],
['.world-copy .intro','A growing collection of things I learn, drawings I make, stories I imagine and everyday adventures with my sisters.','Här samlar jag saker jag lär mig, teckningar jag ritar, berättelser jag hittar på och vardagsäventyr med mina systrar.'],
['.world-copy .pill','Come inside ↓','Kom in ↓'],
['.world-picker > .eyebrow','Choose a world','Välj en värld'],
['.world-picker > h2','Where should we go today?','Vart ska vi gå idag?'],
['.knowledge-card small','Learn · Draw · Discover','Lär · Rita · Upptäck'],
['.knowledge-card h3','Knowledge World','Kunskapsvärlden'],
['.knowledge-card p','Animals, nature, places, technology and curious things from my own notebook.','Djur, natur, platser, teknik och spännande saker ur min egen anteckningsbok.'],
['.knowledge-card b','Explore my discoveries →','Utforska mina upptäckter →'],
['.comic-card small','Laugh · Sisters · Chaos','Skratt · Systrar · Kaos'],
['.comic-card h3','Siblings: Out of Control!','Syskon utan kontroll!'],
['.comic-card p','The totally true-ish adventures of Aanya, Mysha &amp; Viha.','Aanyas, Myshas och Vihas nästan helt sanna äventyr.'],
['.comic-card b','Read the comics →','Läs serierna →'],
['.knowledge-intro .eyebrow','Knowledge World','Kunskapsvärlden'],
['.knowledge-intro h2','One notebook.<br>A <em>whole world.</em>','En anteckningsbok.<br>En <em>hel värld.</em>'],
['.knowledge-intro .intro',"Hi! I'm Aanya. Here I collect things I have learned, drawings I have made and little stories from my everyday life.",'Hej! Jag heter Aanya. Här samlar jag saker jag har lärt mig, teckningar jag har ritat och små berättelser från min vardag.'],
['.knowledge-intro .pill','Open my knowledge world ↗','Öppna min kunskapsvärld ↗'],
['.hero-art .caption','My words. My discoveries.','Mina ord. Mina upptäckter.'],
['.strip','A pencil, a few colours and so much to discover.','En penna, några färger och så mycket att upptäcka.'],
['.section-top .eyebrow','From my own notebook','Ur min egen anteckningsbok'],
['.section-top h2','Which page would you like to open?','Vilken sida vill du öppna?'],
['.section-top > p','Tap a drawing to take a look.<br>My writing and original pictures are inside.','Tryck på en teckning för att bläddra in.<br>Här finns mina texter och originalbilder.'],
['label[for="search"]','Find a page','Hitta en sida'],
['.book > .eyebrow','A book to keep','En bok att spara'],
['.book > h2',"Aanya's Knowledge Book",'Aanyas kunskapsbok'],
['.book > p:not(.book-count)','My discoveries in a book with soft pastel colours. It includes brighter, coloured versions of my handwritten pages. The original notebook pages are in Swedish and are shown unchanged in wording. English translations of the readable texts are available on this website.','Mina upptäckter samlade i en bok med mjuka pastellfärger. Boken innehåller ljusare, färglagda versioner av mina handskrivna sidor. Anteckningssidorna och boken är på svenska.'],
['.pdf-options .pill','Read my book ↗','Läs min bok ↗'],
['.pdf-options .secondary','Download my book ↓','Ladda ner min bok ↓'],
['.comic-kicker','✦ COMIC DIARY ✦','✦ SERIEDAGBOK ✦'],
['.comic-intro','The totally true-ish adventures of three sisters, told one little everyday story at a time.','Tre systrars nästan helt sanna äventyr, en liten vardagsberättelse i taget.'],
['.comic-button','Meet the sisters ↓','Träffa systrarna ↓'],
['.crew .eyebrow','Meet the chaos crew','Träffa kaosgänget'],
['.crew-tag','Three sisters. Different personalities. Endless adventures. ♡','Tre systrar. Olika personligheter. Oändliga äventyr. ♡'],
['.adventures .eyebrow','The adventures','Äventyren'],
['.adventures > h3','Pick a chapter','Välj ett kapitel'],
['.more-adventures h3','More adventures coming soon…','Fler äventyr kommer snart…'],
['.more-adventures p','This little world will keep growing whenever Aanya has a new story to tell.','Den här lilla världen växer varje gång Aanya har en ny berättelse att dela.'],
['.about-aanya > .eyebrow','Meet the writer &amp; artist','Träffa författaren och tecknaren'],
['#about-title','About Aanya ♡','Om Aanya ♡'],
['.about-notebook p:nth-child(1)',"Oh, hi! I’m Aanya! Welcome to my little world!",'Åh, hej! Jag är Aanya! Välkommen till min lilla värld!'],
['.about-notebook p:nth-child(2)','I LOVE books. Like, a whole cupboard full of books! Comics, fantasy and imaginary worlds are my favourites. Reading gives me ideas for my own stories. Sometimes I think… “Wait! That could be a comic!”','Jag ÄLSKAR böcker. Alltså, ett helt skåp fullt av böcker! Serier, fantasy och fantasivärldar är mina favoriter. När jag läser får jag idéer till egna berättelser. Ibland tänker jag… ”Vänta! Det där kan bli en serie!”'],
['.about-notebook p:nth-child(3)','But it’s not all sister chaos here! I also love discovering new things and writing my <strong>Grej of the Day</strong> fact texts. Animals, forests, AI… there’s so much to learn! Did you know? Well, now you might!','Men här finns inte bara systerkaos! Jag älskar också att upptäcka nya saker och skriva mina faktatexter till <strong>Grej of the Day</strong>. Djur, skogar, AI… det finns så mycket att lära sig! Visste du det? Nu kanske du gör det!'],
['.about-notebook p:nth-child(4)','My diary is where I let my feelings and ideas out. Happy? Write it! Curious? Find out more! Mysha driving me crazy? Yep… that might become a whole chapter!','I min dagbok får mina känslor och idéer komma ut. Glad? Skriv! Nyfiken? Ta reda på mer! Gör Mysha mig tokig? Japp… det kanske blir ett helt kapitel!'],
['.about-notebook p:nth-child(5)','When I’m not reading or sketching, I like playing with my friends, building with LEGO and chilling. Also, pasta and pizza? YES, please!','När jag inte läser eller skissar gillar jag att leka med mina kompisar, bygga med LEGO och chilla. Och pasta och pizza? JA, tack!'],
['.about-notebook p:nth-child(6)','I love my parents, and they help me bring this little world to life. My grandparents cheer me on too, along with my friends, family and relatives. So much love. So many ideas!','Jag älskar mina föräldrar, och de hjälper mig att göra den här lilla världen verklig. Mina mor- och farföräldrar hejar också på mig, tillsammans med mina vänner, min familj och mina släktingar. Så mycket kärlek. Så många idéer!'],
['.teacher-thanks','And a BIG thank-you to my teacher! Your guidance, support and encouragement help my ideas grow. Sending you lots of love and a whole notebook full of thanks! ♡','Och ett STORT tack till min lärare! Din vägledning, ditt stöd och din uppmuntran hjälper mina idéer att växa. Massor av kärlek och en hel anteckningsbok full av tack till dig! ♡'],
['.about-notebook p:nth-child(7)','Thanks for stopping by and cheering me on!','Tack för att du tittar in och hejar på mig!'],
['.about-finale','More stories? More sketches? More fun facts?<br>Oh, definitely! ♡','Fler berättelser? Fler skisser? Fler roliga fakta?<br>Åh, absolut! ♡'],
['.about-links .pill','Discover my fun facts ↗','Upptäck mina roliga fakta ↗'],
['.about-links .secondary','Read my comics ↗','Läs mina serier ↗'],
['footer span:first-child',"Words, drawings &amp; stories from Aanya's little world.",'Ord, teckningar och berättelser från Aanyas lilla värld.'],
['footer span:last-child','Knowledge World + Siblings: Out of Control! ♡','Kunskapsvärlden + Syskon utan kontroll! ♡'],
['#close','Close ×','Stäng ×'],
['#reading-tab','Read my page','Läs min sida'],
['#original-tab','My original page','Min originalsida'],
['#original-panel .editor-note','My original handwritten page, cropped and gently brightened. The handwriting and drawings have not been redrawn or changed.','Min handskrivna originalsida, beskuren och varsamt ljusad. Handskriften och teckningarna har inte ritats om eller ändrats.'],
['#prev','← Previous page','← Förra sidan'],
['#next','Next page →','Nästa sida →'],
['.comic-language-note','The comics are in their original English. Switch to Svenska for a Swedish translation below each chapter.','Seriebilderna är på engelska. Under varje kapitel finns en svensk översättning, ruta för ruta.']
];
const ui={
en:{all:'All',categories:{'Natur':'Nature','Upptäckter':'Discoveries','Platser':'Places','Min vardag':'My everyday life','Sagor':'Stories'},open:'Open ',sketch:'Pencil sketch: ',read:'Open the notebook page ↗',seen:'✧ You have looked here',none:'No page matches your search. Try another word.',of:'of',pages:'pages',discovered:'discovered during your visit',topics:'topics',bookPages:'book pages',keep:'Read, print and keep',error:'The book could not be opened. Open the website through a web server and try again.',bright:'Brighter notebook presentation about ',original:'Original photograph: ',menu:'☰ Menu',closeMenu:'× Close'},
sv:{all:'Alla',categories:{'Natur':'Natur','Upptäckter':'Upptäckter','Platser':'Platser','Min vardag':'Min vardag','Sagor':'Sagor'},open:'Öppna ',sketch:'Blyertssketch: ',read:'Öppna anteckningssidan ↗',seen:'✧ Du har bläddrat här',none:'Ingen sida matchar din sökning. Prova ett annat ord.',of:'av',pages:'sidor',discovered:'upptäckta under ditt besök',topics:'ämnen',bookPages:'boksidor',keep:'Läs, skriv ut och spara',error:'Boken kunde inte öppnas. Öppna webbplatsen via en webbserver och prova igen.',bright:'Ljusare presentation av Aanyas anteckningssida om ',original:'Originalfotografi: ',menu:'☰ Meny',closeMenu:'× Stäng'}
};
const chapters=[
{en:'The Swimming Lesson',sv:'Simlektionen',tag:'Ny plats. Nya människor. Ett stort plask? Vi får se…!',panels:[
['1. Den nya simhallen','Idag hade jag simlektion i den nya simhallen. Jag känner mig lite nervös… men också taggad! Skylten säger ”Riverside Swim Centre”.'],
['2. Badmössan','Vi var tvungna att ha badmössor. Min var knallrosa! Jag tänker: ”Jag ser bra ut!”'],
['3. Sparka, sparka!','Först övade vi bensparkar i den grunda delen. ”Sparka, sparka, sparka!” ”Det här är svårare än det ser ut!”'],
['4. Den läskiga delen','Sedan kom den läskiga delen… Jag tänker: ”Åh nej… det ser så djupt ut!”'],
['5. Tränaren peppar','Min tränare sa: ”Du klarar det!” Tränaren: ”Nu ska du hoppa i!” Jag: ”Jag är rädd…”'],
['6. Ett djupt andetag','Jag tog ett djupt andetag… ”Okej, Aanya… du klarar det! Ett… två… tre…”'],
['7. Hoppet','Och… jag hoppade! ”IIIIII!!!”'],
['8. Jag klarade det!','Det var läskigt först, men nu känner jag mig så stolt! ”Jag gjorde det faktiskt!!!”']
],ending:'Ibland blir de läskigaste sakerna de allra bästa! Nästa gång blir det lättare!'},
{en:'Pancake Day!',sv:'Pannkaksdagen!',tag:'Goda saker och leenden… men inget till mig?',panels:[
['1. Måndag','Hurra! Imorgon är det pannkaksdag i skolan! Jag älskar pannkakor!!!'],
['2. Den natten','Jag drömde till och med om pannkakor! Mmm…'],
['3. Tisdag morgon','Så taggad! Pannkakor i skolan idag! Jag tänker: ”Hoppas det finns chokladbitar också!”'],
['4. I skolan','Hela skolan doftar fantastiskt! ”Wow!” På skylten står det ”Pannkaksdag!”'],
['5. Min tur','Det ser så gott ut! Äntligen… min tur!'],
['6. Ägg i pannkakorna','Den vuxna: ”Åh, Aanya… de här pannkakorna innehåller ägg, så du kan inte äta dem.”'],
['7. Besvikelsen','Jag: ”Åh…”'],
['8. Hemma igen','Jag ville verkligen äta dem…'],
['9. I min fantasi','Men i min fantasi… åt jag en JÄTTEPANNKAKA! ”MUMS!!!”'],
['10. Nästa gång?','Kanske finns det äggfria pannkakor nästa gång! Tills dess… kan jag fortfarande drömma! Jag tänker: ”Pannkakor i mina drömmar funkar alltid!” En liten lapp säger: ”Samma här, Aanya… samma här!”']
],ending:'Pannkaksäventyret fortsätter…!'},
{en:'NOT MY SMARTWATCH!',sv:'INTE MIN SMARTKLOCKA!',tag:'Mina saker… mitt ansvar!',panels:[
['1. Vid lunchtid','Jag hade på mig min nya smartklocka i skolan! ”Jag älskar min smartklocka! Den är så cool!”'],
['2. Mysha kommer','Sedan kom Mysha… ”Wow! Det där är en smartklocka! Får jag se?”'],
['3. Bara en minut','Jag lät henne titta… ”Okej… bara en minut.” Mysha: ”Wow! Så många funktioner!”'],
['4. Hon börjar leka','Sedan började hon leka med den… ”Pip! Pip! Pip!” Jag tänker: ”Hmm… hoppas hon inte tappar den!”'],
['5. Lite senare','Lite senare… hamnar klockan i papperskorgen! På lappen står det ”Aanyas egendom”.'],
['6. Neeej!','”NEEEJ!!! MIN SMARTKLOCKA!!!”'],
['7. Mysha…','Mysha: ”Vadå? Det var ju bara en klocka!”'],
['8. Efteråt','Jag tänker: ”Jag var så ledsen… Det är min smartklocka, och den är viktig för mig.”'],
['9. Det jag lärde mig','Jag måste vara försiktig med mina saker och inte låta någon annan använda dem. Kanske håller jag den säker nästa gång!']
],ending:'Vänner är toppen… men mina saker är också viktiga!'},
{en:'SCHOOL, PLAYTIME, FRITIDS… THEN HOME!',sv:'SKOLA, LEK, FRITIDS… SEDAN HEM!',tag:'Samma plats… en annan dag… samma jag…',panels:[
['1. I skolan','Det var en vanlig skoldag. Jag hade lektioner och gjorde mina uppgifter. Skolläge PÅ! Böckerna: matte, engelska och NO.'],
['2. Lekdags','Hurra! Dags att leka!'],
['3. På fritids','På fritids tog jag det lugnt och hade kul. Jag bara chillade! ”Ahhh…” Samma aktiviteter… samma plats… dags att chilla!'],
['4. Dags att gå hem','Jag packade min väska och gick hem.'],
['5. På väg hem','Jag tänkte på min dag… Det var en bra dag! ”Lek, fritids, kul!”'],
['6. Hemma','Jag kom hem och ställde ner väskan. Jag skulle precis sätta mig och ta det lugnt…'],
['7. Plötsligt','Mysha kom bakifrån… ”BU!”'],
['8. Min reaktion','”MYSHAAA!!!”'],
['9. Även om hon skrämmer mig','Hon ville bara få mig att skratta. Ibland skrämmer hon mig, men det är Mysha! Min lillasyster… Bra dagar… knasiga stunder… samma familj!']
],ending:'Olika platser, olika stunder… men alltid speciella!'},
{en:'MYSHA IS ON THE LOOSE!',sv:'MYSHA ÄR I FARTEN!',tag:'Liten syster… stora bus!',panels:[
['1. Torsdag','Det var en vanlig dag. Jag gjorde mina läxor. Fokuserad och produktiv! Böckerna: matte, engelska och NO.'],
['2. Under tiden','Mysha gick tyst omkring… ”Hmm… vad kan jag göra?”'],
['3. Hon hittar något','Åh nej… hon hittade något! ”Hurra! Minikonstnärsläge!”'],
['4. Överallt','Nu är hon överallt!!! ”Titta! Jag är en konstnär!”'],
['5. Igen','Busiga Mysha är i farten! ”Kuddkrig!”'],
['6. Nallen också','Hon tog till och med Nalle! Mysha: ”Han är min nu!” Jag: ”Min nalle!”'],
['7. Till slut','Jag är så trött! ”Hur har hon så mycket energi?”'],
['8. Men…','Även när Mysha är i farten… får hon mig alltid att skratta!'],
['9. Det jag lärde mig','Mysha kan vara busig, men hon gör också vårt hem roligare och fullt av kärlek! Systrar gör livet tokigt och speciellt!']
],ending:'Äventyren fortsätter…!'},
{en:'NOT THE DOLL!',sv:'INTE DOCKAN!',tag:'Vissa planer går inte… som man har tänkt sig…',panels:[
['1. Aanyas speciella plan','Plan: Vihas födelsedagspresent. Aanya: ”Den här är till Viha! Hon fyller år om två veckor!”'],
['2. Viha kommer att bli så glad','Aanya tänker: ”Hon kommer att älska den!”'],
['3. Men sedan ser Mysha den','Mysha: ”Åååh! En docka!”'],
['4. Aanya försöker stoppa henne','Aanya: ”Mysha… nej!” Mysha: ”Bara en liten titt!”'],
['5. Åh nej','KNAK! Aanya: ”NEEEEEJ!!! Den är trasig!!!”'],
['6. Nu får Viha inte sin docka','Mysha: ”Oj?” Vihas födelsedagspresent höll i exakt noll födelsedagar!']
],ending:'Ibland går saker inte som planerat… Men även när det är kaos är vi fortfarande ett team. Systrar kan bråka och göra misstag… men vi hittar alltid ett sätt att vara tillsammans igen! Kaos idag… fler äventyr imorgon! SLUT ♡'},
{en:'The Birthday Doll Mission!',sv:'Jakten på födelsedagsdockan!',tag:'En vecka kvar till Vihas födelsedag!',panels:[
['1. Mysha gör mig tokig','Mysha gör mig tokig! ”NU GÅR DET FÖR LÅNGT!!!”'],
['2. Till köpcentret','Viha fyller år om en vecka. Vi åkte för att köpa en docka till henne. På skylten står det ”Köpcentret”.'],
['3. Gumdrop Express','På köpcentret såg vi tåget Gumdrop Express. Mysha: ”Jag vill åka!” Aanya: ”Neeeej!”'],
['4. Så pinsamt','Det här är så pinsamt! ”Jag kommer att se ut som ett litet barn!”'],
['5. Men Mysha är så rolig','Men Mysha är så rolig!'],
['6. Dockaffären','Efter åkturen gick vi till dockaffären.'],
['7. En fin docka','Vi köpte en fin docka till Viha. En fin klänning och kjol!'],
['8. Fler och fler','Mysha fortsatte att be om fler… ”Den också!”'],
['9. Vi har redan en','En födelsedagspresent till Viha… och ett äventyr med Mysha! Aanya: ”Vi har redan en!”']
],ending:''}
];
const thanks=document.createElement('p');thanks.className='teacher-thanks';document.querySelector('.about-finale')?.before(thanks);
const note=document.createElement('p');note.className='comic-language-note';document.querySelector('.comic-intro')?.after(note);
const controls=document.createElement('div');controls.className='language-switch';controls.setAttribute('role','group');controls.setAttribute('aria-label','Website language');
for(const [code,label]of[['en','English'],['sv','Svenska']]){const b=document.createElement('button');b.type='button';b.textContent=label;b.dataset.language=code;b.addEventListener('click',()=>setLanguage(code));controls.append(b);}
document.querySelector('.brand').after(controls);
chapters.forEach((chapter,i)=>{const picture=document.querySelector('#chapter-'+(i+1)+' .comic-image-wrap');if(!picture)return;const section=document.createElement('section');section.className='comic-translation';section.lang='sv';section.hidden=true;section.setAttribute('aria-label','Svensk översättning av kapitel '+(i+1));const h=document.createElement('h4');h.textContent='På svenska: '+chapter.sv;section.append(h);const tag=document.createElement('p');tag.className='translation-tag';tag.textContent=chapter.tag;section.append(tag);const list=document.createElement('ol');list.className='translation-panels';for(const [title,text]of chapter.panels){const row=document.createElement('li'),heading=document.createElement('h5'),p=document.createElement('p');heading.textContent=title;p.textContent=text;row.append(heading,p);list.append(row);}section.append(list);if(chapter.ending){const end=document.createElement('p');end.className='translation-ending';end.textContent=chapter.ending;section.append(end);}picture.after(section);});
function setLanguage(next){lang=next==='sv'?'sv':'en';try{localStorage.setItem('aanya-language',lang);}catch{}apply();document.dispatchEvent(new CustomEvent('aanya-language-change',{detail:{lang}}));}
function apply(){document.documentElement.lang=lang;const title={home:['Home','Start'],knowledge:['Knowledge World','Kunskapsvärlden'],comics:['Comics','Serier'],about:['About Aanya','Om Aanya']}[document.body.dataset.page||'home'];document.title=(lang==='sv'?'Aanyas lilla värld':'Aanya’s Little World')+' | '+title[lang==='sv'?1:0];
for(const [selector,en,sv]of bindings){const e=document.querySelector(selector);if(e)e.innerHTML=lang==='sv'?sv:en;}
for(const b of controls.children){const yes=b.dataset.language===lang;b.setAttribute('aria-pressed',String(yes));b.classList.toggle('active',yes);}
controls.setAttribute('aria-label',lang==='sv'?'Webbplatsens språk':'Website language');
const menu=document.getElementById('world-menu-toggle');menu.textContent=menu.getAttribute('aria-expanded')==='true'?ui[lang].closeMenu:ui[lang].menu;
document.getElementById('world-navigation').setAttribute('aria-label',lang==='sv'?'Huvudmeny':'Main navigation');
const search=document.getElementById('search');if(search)search.placeholder=lang==='sv'?'Älg, AI, skog …':'Moose, AI, forest …';
document.getElementById('filters')?.setAttribute('aria-label',lang==='sv'?'Välj kategori':'Choose category');
document.querySelector('[role="tablist"]')?.setAttribute('aria-label',lang==='sv'?'Välj visning':'Choose view');
document.getElementById('close')?.setAttribute('aria-label',lang==='sv'?'Stäng anteckningssidan':'Close the notebook page');
const hero=document.querySelector('.hero-art img');if(hero)hero.alt=lang==='sv'?'Aanyas anteckningssida':'Aanya’s handwritten notebook page in Swedish';
const cover=document.querySelector('.comic-cover');if(cover)cover.alt=lang==='sv'?'Omslag på engelska: Siblings: Out of Control! med Aanya, Mysha och Viha':'Siblings: Out of Control! cover featuring Aanya, Mysha and Viha';
const crew=document.querySelector('.crew-page');if(crew)crew.alt=lang==='sv'?'Möt kaosgänget: Aanya, Mysha och Viha. Bildtext på engelska.':'Meet the Chaos Crew: Aanya, Mysha and Viha';
chapters.forEach((c,i)=>{const root=document.getElementById('chapter-'+(i+1));if(!root)return;const title=lang==='sv'?c.sv:c.en;document.querySelector('.chapter-index a[href="#chapter-'+(i+1)+'"] span').textContent=title;root.querySelector('.chapter-heading span').textContent=(lang==='sv'?'Kapitel ':'Chapter ')+(i+1);root.querySelector('.chapter-heading h3').textContent=title;root.querySelector('.comic-image-wrap img').alt=(lang==='sv'?'Kapitel ':'Chapter ')+(i+1)+': '+title+(lang==='sv'?' (seriebild på engelska)':'');root.querySelector('.comic-placeholder strong').textContent=(lang==='sv'?'Kapitel ':'Chapter ')+(i+1);const placeholder=root.querySelector('.comic-placeholder span');placeholder.replaceChildren(document.createTextNode(lang==='sv'?'Bilden saknas: ':'Image missing: '),Object.assign(document.createElement('code'),{textContent:'assets/comics/chapter-0'+(i+1)+'.png'}));root.querySelector('.back-adventures').textContent=lang==='sv'?'↑ Tillbaka till äventyren':'↑ Back to adventures';root.querySelector('.comic-translation').hidden=lang!=='sv';});
}
window.AANYA_I18N={get lang(){return lang;},get ui(){return ui[lang];},category(cat){return ui[lang].categories[cat]||cat;},topic(p){return lang==='en'&&p.en?{...p,...p.en}:p;},setLanguage};
apply();
})();
