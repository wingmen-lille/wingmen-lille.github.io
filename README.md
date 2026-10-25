# Wingmen Lille — Site vitrine du collectif

Site officiel du collectif citoyen d'entraide **Wingmen Lille** (`https://wingmen-lille.github.io/`).
Développé en **HTML5, CSS3 et JavaScript natifs**, sans framework ni dépendance externe, hébergé gratuitement sur **GitHub Pages**.

---

## 1. Structure du projet

```text
wingmen-lille/
├── index.html                  # Page unique (contenus, structure et intégration Google Forms)
├── css/
│   └── style.css               # Styles, palette de couleurs et responsive (ordinateur & mobile)
├── js/
│   └── main.js                 # Menu mobile, onglets d'exercices et chargement Google Forms
├── assets/
│   ├── favicon.svg             # Icône du site (onglet du navigateur)
│   └── hero-conversation.png   # Photographie d'accueil (Hero)
├── PROJECT_BRIEF.md            # Synthèse et positionnement du projet
├── CONTENT.md                  # Référentiel éditorial
├── ROADMAP.md                  # Suivi des étapes du projet
└── README.md                   # Guide de maintenance
```

---

## 2. Guide de maintenance rapide

### A. Modifier les textes du site
1. Ouvrez le fichier `index.html` dans un éditeur de texte (VS Code, Notepad++, etc.).
2. Repérez la section souhaitée grâce aux commentaires visibles (`<!-- ==================== 1. HERO SECTION ==================== -->`, etc.).
3. Modifiez le texte entre les balises HTML (`<h2>...</h2>`, `<p>...</p>`, `<li>...</li>`), puis enregistrez le fichier (`Ctrl + S`).

### B. Remplacer une image
1. Placez votre nouvelle image dans le dossier `assets/` avec un nom simple sans espaces ni accents (ex. : `assets/hero-conversation.png`).
2. Si le nom du fichier reste `hero-conversation.png`, le changement est immédiat.
3. Si vous changez le nom du fichier, mettez à jour l'attribut `src="assets/votre-image.png"` dans la balise `<img>` correspondante de `index.html`.

### C. Consulter les réponses Google Forms
1. Connectez-vous à votre **compte Google dédié à Wingmen Lille**.
2. Rendez-vous sur [Google Forms](https://forms.google.com) ou directement sur le fichier **Google Sheets** associé dans [Google Drive](https://drive.google.com).
3. Vous recevez également un e-mail de notification sur la boîte Gmail dédiée à chaque nouvelle réponse (si l'option de notification est activée dans l'onglet *Réponses* du formulaire).

### D. Modifier le questionnaire Google Forms
1. Connectez-vous au compte Google dédié sur [forms.google.com](https://forms.google.com) et ouvrez **Prendre contact — Wingmen Lille**.
2. Toute modification (ajout/modification d'une question ou du texte d'accueil) est **automatiquement répercutée** sur le site internet sans avoir besoin de modifier le code du site.

### E. Publier une mise à jour sur GitHub Pages
Ouvrez un terminal dans le dossier `C:\6_Projets\wingmen-lille` et exécutez :

```powershell
git status
git add .
git commit -m "Mise a jour du site"
git push origin main
```

*(GitHub Pages met à jour le site public `https://wingmen-lille.github.io/` automatiquement en 1 à 2 minutes.)*

### F. Revenir à une version précédente (Annuler une modification)
- **Annuler des modifications locales non enregistrées dans Git** :
  ```powershell
  git checkout -- .
  ```
- **Revenir au commit précédent déjà publié** :
  ```powershell
  git revert HEAD
  git push origin main
  ```
