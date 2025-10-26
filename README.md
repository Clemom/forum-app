# 🗳️ Forum App

Une application web de type **forum / vote**.
Développée en **React + TypeScript**, avec **shadcn/ui**, et **Vite**.

---

## 🚀 Fonctionnalités

- 🏠 **Landing page** : Hero, Features, CTA, Footer  
- 🔐 **Pages Login & Register** avec formulaires stylés  
- 🧩 **Composants UI** basés sur [shadcn/ui](https://ui.shadcn.com/)  
- ⚡ **Routing** via React Router  
- 🧱 Architecture claire et modulaire  

---

## 🧠 Stack technique

| Technologie | Rôle |
|--------------|------|
| **React + Vite** | Base du front-end |
| **TypeScript** | Typage statique |
| **TailwindCSS** | Système de styles |
| **shadcn/ui** | Librairie de composants |
| **Lucide-react** | Icônes |
| **React Router DOM** | Gestion des routes |
| **Node / npm** | Gestionnaire de packages |

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── landing/          # Composants de la page d'accueil
│   ├── register/         # Composants de la page d'inscription
│   └── ui/               # Composants UI communs (Button, Card, Input, etc.)
├── pages/                # Pages principales : Home, Login, Register
├── App.tsx               # Définition des routes
└── main.tsx              # Point d'entrée de l'application
```

---

## ⚙️ Installation locale

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/Clemom/forum-app.git
cd forum-app
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Lancer le serveur de développement
```bash
npm run dev
```

➡️ Application disponible sur : [http://localhost:5173](http://localhost:5173)

---

## 🧩 Commandes utiles

| Commande | Description |
|-----------|--------------|
| `npm run dev` | Lance le serveur local de développement |
| `npm run build` | Compile l’application pour la production |
| `npm run preview` | Lance un serveur local de prévisualisation du build |
| `npm run lint` | Analyse du code (si ESLint installé) |

---

## 🧭 Roadmap (améliorations à venir)

- [ ] Connexion avec un backend (NestJS)
- [ ] Authentification JWT
- [ ] Base de données (PostgreSQL)
- [ ] Votes réels (upvote / downvote)
- [ ] Espace utilisateur + profil
- [ ] Tableau de bord administrateur
- [ ] Déploiement Docker

---

## 👤 Auteur

**Clemom**  
Projet personnel de formation Fullstack – 2025  
📍 [GitHub - Clemom](https://github.com/Clemom)
