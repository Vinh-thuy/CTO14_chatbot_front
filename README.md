# 🛠️ Chatbot Local Alimenté par React avec Ollama & LLM

## 🚀 Aperçu

Ce projet est un chatbot en temps réel construit avec **React**, propulsé par **Ollama** et exécutant un modèle de Langage Automatique (LLM) localement. L'ensemble de l'application, y compris le modèle LLM, s'exécute sur votre machine locale, garantissant un contrôle total des données et des performances.

## 🎯 Fonctionnalités

- 💬 **Chat en Temps Réel** avec réponses de l'IA
- 🤖 **Prise en Charge Dynamique du Modèle LLM**
- 🧠 **Indicateurs de Réflexion & de Frappe** pour une meilleure expérience utilisateur
- 🌟 **Animations Fluides** utilisant Framer Motion
- 🎨 **Interface Bootstrap** moderne
- 🏠 **Fonctionne Entièrement Localement** – Aucun appel API externe requis !

---

## ⚡ Guide d'Installation

### 1️⃣ Installer & Configurer Ollama

Pour exécuter le chatbot localement, vous aurez besoin d'**Ollama**, un serveur LLM léger.

#### 🛠️ Installation d'Ollama

##### Sur Windows :
1. Téléchargez l'installateur depuis le site officiel : 🔗 [https://ollama.com/](https://ollama.com/)
2. Étapes détaillées :
   - Lancez le fichier d'installation téléchargé
   - Acceptez les conditions d'utilisation
   - Choisissez un dossier d'installation (par défaut recommandé)
   - Cochez l'option "Ajouter au PATH" si disponible
   - Terminez l'installation
3. Ouvrez une invite de commande et vérifiez l'installation :
   ```cmd
   ollama --version
   ```
4. Si la commande ne fonctionne pas, redémarrez votre ordinateur

##### Sur Mac :
```bash
brew install ollama
```

##### Sur Linux :
Suivez le guide d'installation spécifique à votre distribution

#### 📥 Télécharger & Servir un Modèle LLM

Téléchargez et servez un modèle avec :

```bash
ollama pull <nom_du_modele>  # par exemple : ollama pull llama3.2
ollama serve
```

Une fois en cours d'exécution, Ollama sera disponible à l'adresse `http://127.0.0.1:11434/api/chat`.

---

### 2️⃣ Lancer l'Application React

#### 📦 Installer les Dépendances

Assurez-vous d'avoir **Node.js** et **npm** installés. Ensuite, clonez le dépôt et installez les dépendances :

```bash
git clone <url_du_depot>
cd <repertoire_du_projet>
npm install
```

#### ▶️ Démarrer l'Application

```bash
npm start
```

Votre chatbot devrait maintenant tourner à l'adresse `http://localhost:3000/` !

---

## 🔧 Configuration

- Changez le modèle dans `App.js` en modifiant la variable `ollamaModel`
- Personnalisez les éléments de l'interface utilisateur avec les classes Bootstrap et les animations Framer Motion

---

## 🎉 Profitez de votre assistant IA, qui tourne entièrement sur votre machine ! 🚀

<p align="center">
    <img src="https://github.com/Priom7/deekseek-React-Chat-App/blob/main/productUI.png" width="400" alt="working gif">
</p>
