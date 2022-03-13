# aw1-labs-404-name-not-found
Laboratori Settimanali del gruppo 404 Name not Found 🚀


## Istruzioni all'uso 📜

Per avere sempre un ambeiente pulito (e per fare un po' di pratica 😉) ogni laboratorio sarà posizionato su un [**branch**](https://git-scm.com/book/it/v2/Git-Branching-Branches-in-a-Nutshell) diverso. 

### Perché?
Ogni volta che si cambia branch la codebase locale viene "resettata", eliminando i file che non appartengono a quel branch e scaricando i file mancanti (oltre a un sacco di altre cosette). Questo per noi significa avere davanti agli occhi solo i file che effettivamente fanno parte del laboratorio a cui sto lavorando.

### Si, ma come cambio branch ? 
Il comando è semplice, supponiamo di voler prendere il branch *"lab-1234"* (il nome lo trovate qui nella repository github), 
per cambiare branch basta aprire un terminale nella cartella del progetto e lanciare: 
```bash
git checkout lab-1234
```
E ✨automagicamente✨ i file verranno aggiornati al branch giusto.

### Come controllo su che branch sono adesso?
Si può fare in due modi.
Il primo è quello di utilizzare il comando 
```bash
git branch
```
Verrà stampata una lista di branch (sono quelli salvati in locale, non necessariamente sono tutti!), il branch che comparirà con l'asterisco (e.g. \*lab-1234) sarà quello su cui siamo al momento.

Altrimenti si può utilizzare l'interfaccia grafica di VS Code per sapere sempre il branch in cui ci troviamo, oppure, si può modificare il terminale linux per mostrare sempre il branch corrente seguendo [questa guida](https://thucnc.medium.com/how-to-show-current-git-branch-with-colors-in-bash-prompt-380d05a24745)


## Gestione interna al laboratorio (branch) corrente. 🏗
Ogni nuovo laboratorio avrà una cartella a testa, per cui la struttura sarà sempre simile a questa.

<pre>
aw1-labs-404-name-not-found  
|  
|--- Giovanni  
|     |--- File_X.js  
|     |--- File_Z.js  
|     |--- ...  
|--- Laura  
|     |--- File_Y.js  
|     |--- File_Z.js  
|     |--- ...  
|--- Marta  
|     |--- File_X.js  
|     |--- File_W.js  
|     |--- ...  
|--- Salvo  
|     |--- File_X.js  
|     |--- File_W.js  
|     |--- ...  
|--- Readme.md  
|--- ...
</pre>

## Salvare e caricare il lavoro 💾

Una volta aggiunto il codice ad un branch noterete che da VS Code viene evidenziato e marchiato con una "**U**", che sta per *Untracked*,
se invece il file era stato già creato e salvato nella repository modificarlo farà si che venga marchiato come "**M**", ovvero *Modified*.

Quando vogliamo salvare il lavoro fatto sulla repository per sincronizzarlo con gli altri, le operazioni da fare sono 3.

1. Aggiungere i file che vogliamo salvare.  
Nel caso più semplice in cui vogliamo salvare tutti i file il comando è
```bash
git add --all
```

2. *Committare*, ovvero persistere il salvataggio. Questa operazione nel nostro caso può sembrare scema e bypassabile, ma è in generale molto utile.
In generale per committare si può eseguire il comando
```bash
git commit -m "UN MESSAGGIO BREVE E DESCRITTIVO"
```

3. Caricare i file sulla repository github.
Fin qui avete persistito i cambiamenti solo in locale, per condividerli con gli altri è necessario un ultimo step, ovvero lanciare il comando:
```bash
git push
```
Al primo caricamento sarà necessario impostare anche il remote branch per cui il comando completo da eseguire sarà (seguendo sempre l'esempio del branch lab-1234):
```bash
git push -u origin lab-1234
``` 

## Scaricare gli aggiornamenti degli altri 🔽

Se avete già fatto il *checkout* di un branch e qualcun altro l'ha modificato non vedrete in automatico i cambiamenti di github, avrete bisogno di scaricarli manualmente!

Il comando per allineare la repository github con la vostra codebase locale è:

```bash
git pull
``` 

**NOTA:** Per poter fare il pull è necessario aver committato tutto il codice locale, altrimenti il comando fallirà. 


### Regole da rispettare per non incappare in scomodi problemi:

1. PRIMA di iniziare a lavorare su un laboratorio fai *git pull*
2. DOPO aver finito una sessione di scrittura di codice, salva committa e pusha il codice, anche se è sbagliato e/o incompleto.

Ricordate che le commit non si pagano! Più teniamo allineate la repository locale con la repository su github, meglio è! 


## 💣 Have Fun! 💣

