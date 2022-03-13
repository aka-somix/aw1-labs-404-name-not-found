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
