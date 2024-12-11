(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{0:(e,i,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/topics/02-basics/04-first-branch",function(){return r(6860)}])},6860:(e,i,r)=>{"use strict";r.r(i),r.d(i,{default:()=>c,useTOC:()=>l});var a=r(4848),t=r(7849),n=r(941),s=r(1355),o=r(8941),d=r(2097);function l(e){return[{value:"Tworzenie pierwszej gałęzi",id:"tworzenie-pierwszej-gałęzi",depth:2},{value:"Praca na nowej gałęzi",id:"praca-na-nowej-gałęzi",depth:2}]}let c=(0,t.e)(function(e){let{toc:i=l(e)}=e,r={br:"br",code:"code",details:"details",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",summary:"summary",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{children:["Nowy ",(0,a.jsx)(r.em,{children:"“brancz”"})," - nowe przygody"]}),"\n",(0,a.jsxs)(o.P,{type:"info",emoji:"ℹ️",children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.em,{children:(0,a.jsx)(r.strong,{children:"Branch"})})," (gałąź) to, ",(0,a.jsx)(r.strong,{children:"niezależna"})," od reszty, wersja naszego projektu. Umożliwia nam r\xf3wnoległe prowadzenie prac, nie ingerując w inne części projektu."]}),(0,a.jsx)(r.p,{children:"Bardzo, bardzo, ale to bardzo użyteczne w pracach grupowych i nie tylko."})]}),"\n",(0,a.jsxs)(r.p,{children:["Cała praca z ",(0,a.jsx)(r.em,{children:"Git-em"})," opiera się na “branch-ach”, czyli na gałęziach. Nawet teraz w prawie pustym jest już jedna gałąź - ",(0,a.jsx)(r.strong,{children:"master"}),". Jest to domyślna nazwa gł\xf3wnych gałęzi twojego projektu.",(0,a.jsx)(r.br,{}),"\n","Nie r\xf3żnie się ona zbyt wiele od innych gałęzi, kt\xf3ry w przyszłości zostaną stworzone, ale jest w stosunku do niej kilka niepisanych zasad."]}),"\n",(0,a.jsx)(r.p,{children:"Na przykład, przyjmuje się, że wersja projektu na masterze powinna być zawsze poprawnie działająca.\r\nNo bo jak to tak. Robisz projekt, trzeba będzie to komuś pokazać i co, pokażesz mu niedziałającą wersję?\r\nTo co ta osoba sobie o Tobie pomyśli? A p\xf3źniej jeszcze trzeba będzie szukać po commit-ach gdzie to się zepsuło. No bez sensu."}),"\n",(0,a.jsx)(r.h2,{id:i[0].id,children:i[0].value}),"\n",(0,a.jsxs)(r.p,{children:["Żeby uniknąć takiej sytuacji, tworzy się ",(0,a.jsx)(r.em,{children:"gałęzie"}),". Taka gałąź to zupełnie niezależna część Twojego projektu. To trochę tak, jakby wziąć cały projekt\r\ni go skopiować w inne miejsce, żeby tam go edytować - strasznie dużo roboty, a p\xf3źniej łączenie to w jedną wersję? Masakra.\\"]}),"\n",(0,a.jsx)(r.p,{children:"Możesz zobaczyć, na jakiej gałęzi aktualnie jesteś komendą:"}),"\n",(0,a.jsx)(r.pre,{icon:d.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,a.jsx)(r.code,{children:(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  git"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" branch"})]})})}),"\n",(0,a.jsxs)(r.p,{children:["lub w Git Bash-u jest to napisane zawsze w okrągłych nawiasach, np ",(0,a.jsx)(r.code,{children:"(master)"})]}),"\n",(0,a.jsx)(r.p,{children:"Stw\xf3rzmy teraz nową gałąź:"}),"\n",(0,a.jsx)(r.pre,{icon:d.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,a.jsx)(r.code,{children:(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  git"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" branch"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"nazwa-gałęz"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"i"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]})})}),"\n",(0,a.jsx)(r.p,{children:"No i tyle \uD83D\uDE06. Mamy teraz wersję projektu, kt\xf3ry możemy niezależnie modyfikować."}),"\n",(0,a.jsxs)(o.P,{type:"info",emoji:"ℹ️",children:[(0,a.jsx)(r.p,{children:"Zapytasz może “No ale jak to, przecież jestem cały czas w tym samym folderze, to jak mogę wykonywć niezależne zmiany?”."}),(0,a.jsxs)(r.p,{children:["No właśnie, na tym polega piękno ",(0,a.jsx)(r.em,{children:"Git-a"})]})]}),"\n",(0,a.jsx)(r.h2,{id:i[1].id,children:i[1].value}),"\n",(0,a.jsx)(r.p,{children:"Żeby wprowadzić jakieś zmiany na ten naszej nowej super ultra niezależnej wersji projektu, musimy zmienić gałąź, na kt\xf3rej pracujemy:"}),"\n",(0,a.jsx)(r.pre,{icon:d.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,a.jsx)(r.code,{children:(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  git"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" checkout"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"nazwa_stworzonej_gałęz"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"i"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]})})}),"\n",(0,a.jsxs)(r.p,{children:["Teraz powinniśmy być już na nowej gałęzi. Sprawdź to komendą ",(0,a.jsx)(r.code,{children:"git branch"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["To teraz sp\xf3bujmy coś zmienić i zobaczmy czy wpłynie to na naszą inną gałąź (po tym co było napisane można by stwierdzić, że “nie”, ale nie wierz mi na słowo, sprawdź samemu \uD83D\uDE09).",(0,a.jsx)(r.br,{}),"\n","W pliku ",(0,a.jsx)(r.code,{children:"test.txt"})," wprowadź jakąś zmianę - dopisz coś w nowej linijce, napisz jakąś nową wiadomość, cokolwiek. Zmieniliśmy coś, to trzeba zrobić co? - Commit-a! Spr\xf3buj samemu."]}),"\n",(0,a.jsxs)(r.details,{children:[(0,a.jsx)(r.summary,{children:(0,a.jsx)(r.strong,{children:"Pokaż rozwiązanie"})}),(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"git add nazwa_pliku"}),"\n",(0,a.jsx)(r.li,{children:"git commit -m “nazwa commita”"}),"\n"]})]}),"\n",(0,a.jsx)(o.P,{type:"info",emoji:"ℹ️",children:(0,a.jsxs)(r.p,{children:["Upewnij się teraz, że po wpisaniu ",(0,a.jsx)(r.code,{children:"git status"}),", odpowiedź to:\r\n",(0,a.jsx)(r.code,{children:"nothing to commit, working tree clean"})]})}),"\n",(0,a.jsx)(r.p,{children:"Jeśli nie, to przeanalizuj czy wszystko zostało zrobione tak jak w odpowiedzi, jeśli tak to jedziemy dalej."}),"\n",(0,a.jsx)(r.p,{children:"Wr\xf3ć teraz na master-a:"}),"\n",(0,a.jsx)(r.pre,{icon:d.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,a.jsx)(r.code,{children:(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  git"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" checkout"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" master"})]})})}),"\n",(0,a.jsx)(r.p,{children:"i podejrzyj zawartość pliku, kt\xf3ry przed chwilą był edytowany. I co? Nie ma zmian - czyli teoria niezależności działa \uD83D\uDE0E."}),"\n",(0,a.jsx)(r.p,{children:"Wr\xf3ć na nową gałąź:"}),"\n",(0,a.jsx)(r.pre,{icon:d.k3,tabIndex:"0","data-language":"bash","data-word-wrap":"","data-copy":"",children:(0,a.jsx)(r.code,{children:(0,a.jsxs)(r.span,{children:[(0,a.jsx)(r.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"  git"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" checkout"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"nazwa_twojej_gałęz"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"i"}),(0,a.jsx)(r.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]})})}),"\n",(0,a.jsxs)(r.p,{children:["i upewnij się, że zmiany pliku ",(0,a.jsx)(r.code,{children:"test.txt"})," z powrotem wr\xf3ciły."]}),"\n",(0,a.jsx)(o.P,{type:"info",emoji:"ℹ️",children:(0,a.jsx)(r.p,{children:"Trudność tych krok\xf3w wcale nie wzrasta przy większym projekcie i większej ilości zmienianych plik\xf3w. Uwierz mi (chociaż przed chwilą m\xf3wiłem, żeby tego nie robić)."})}),"\n",(0,a.jsx)(o.P,{type:"warning",emoji:"⚠️",children:(0,a.jsxs)(r.p,{children:["Pamiętaj, że gałąź tworzymy z jakiegoś konkretnego ",(0,a.jsx)(r.strong,{children:"commit-a"}),". Najczęściej jest to najnowsza wersja mastera."]})})]})},"/topics/02-basics/04-first-branch",{filePath:"pages/topics/02-basics/04-first-branch.mdx",pageMap:n.O,frontMatter:{},title:'Nowy "brancz" - nowe przygody'},"undefined"==typeof RemoteContent?l:RemoteContent.useTOC)},8941:(e,i,r)=>{"use strict";r.d(i,{P:()=>d});var a=r(4848),t=r(4164),n=r(2097);let s={default:"\uD83D\uDCA1",error:"\uD83D\uDEAB",info:(0,a.jsx)(n.KS,{className:"_mt-1"}),warning:"⚠️"},o={default:(0,t.A)("_border-orange-100 _bg-orange-50 _text-orange-800 dark:_border-orange-400/30 dark:_bg-orange-400/20 dark:_text-orange-300"),error:(0,t.A)("_border-red-200 _bg-red-100 _text-red-900 dark:_border-red-200/30 dark:_bg-red-900/30 dark:_text-red-200"),info:(0,t.A)("_border-blue-200 _bg-blue-100 _text-blue-900 dark:_border-blue-200/30 dark:_bg-blue-900/30 dark:_text-blue-200"),warning:(0,t.A)("_border-yellow-100 _bg-yellow-50 _text-yellow-900 dark:_border-yellow-200/30 dark:_bg-yellow-700/30 dark:_text-yellow-200")};function d({children:e,type:i="default",emoji:r=s[i]}){return(0,a.jsxs)("div",{className:(0,t.A)("nextra-callout _overflow-x-auto _mt-6 _flex _rounded-lg _border _py-2 ltr:_pr-4 rtl:_pl-4","contrast-more:_border-current contrast-more:dark:_border-current",o[i]),children:[(0,a.jsx)("div",{className:"_select-none _text-xl ltr:_pl-3 ltr:_pr-2 rtl:_pr-3 rtl:_pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:r}),(0,a.jsx)("div",{className:"_w-full _min-w-0 _leading-7",children:e})]})}},941:(e,i,r)=>{"use strict";r.d(i,{O:()=>a});let a=[{data:{index:{title:"Strona gł\xf3wna"},"---":{type:"separator"},topics:{title:"Rozdziały",type:"menu",items:{"01-introduction":{type:"page",title:"1. Introduction",href:"/topics/01-introduction"},"02-basics":{type:"page",title:"2. Podstawy",href:"/topics/02-basics"},"03-gitignore":{type:"page",title:"3. gitignore",href:"/topics/03-gitignore"}}},commands:{type:"page",title:"Przydatne komendy"}}},{name:"commands",route:"/commands",frontMatter:{sidebarTitle:"Commands"}},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}},{name:"topics",route:"/topics",children:[{data:{"01-introduction":{title:"Co to jest Git",type:"page"},"02-basics":{title:"Podstawy",type:"page"},"03-gitignore":{title:"Gitignore",type:"page"}}},{name:"01-introduction",route:"/topics/01-introduction",children:[{data:{index:'Co to jest ten cały "Git"?',"01-history":"Historia","02-control-version":"System kontroli wersji"}},{name:"01-history",route:"/topics/01-introduction/01-history",frontMatter:{sidebarTitle:"01 History"}},{name:"02-control-version",route:"/topics/01-introduction/02-control-version",frontMatter:{sidebarTitle:"02 Control Version"}},{name:"index",route:"/topics/01-introduction",frontMatter:{sidebarTitle:"Index"}}]},{name:"02-basics",route:"/topics/02-basics",children:[{data:{index:"Plan działania","01-first-repo":'Stworzenie pierwszego "repo"',"02-first-commit":'Pierszy "komit"',"03-first-push":'Pierszy "pusz"',"04-first-branch":'Nowy "brancz" - nowe przygody',"05-first-merge":'Pierwszy "merdż"',"06-first-conflict":'Wojna i same "konflikty"'}},{name:"01-first-repo",route:"/topics/02-basics/01-first-repo",frontMatter:{sidebarTitle:"01 First Repo"}},{name:"02-first-commit",route:"/topics/02-basics/02-first-commit",frontMatter:{sidebarTitle:"02 First Commit"}},{name:"03-first-push",route:"/topics/02-basics/03-first-push",frontMatter:{sidebarTitle:"03 First Push"}},{name:"04-first-branch",route:"/topics/02-basics/04-first-branch",frontMatter:{sidebarTitle:"04 First Branch"}},{name:"05-first-merge",route:"/topics/02-basics/05-first-merge",frontMatter:{sidebarTitle:"05 First Merge"}},{name:"06-first-conflict",route:"/topics/02-basics/06-first-conflict",frontMatter:{sidebarTitle:"06 First Conflict"}},{name:"index",route:"/topics/02-basics",frontMatter:{sidebarTitle:"Index"}}]},{name:"03-gitignore",route:"/topics/03-gitignore",children:[{name:"index",route:"/topics/03-gitignore",frontMatter:{sidebarTitle:"Index"}}]}]}]}},e=>{var i=i=>e(e.s=i);e.O(0,[849,636,593,792],()=>i(0)),_N_E=e.O()}]);