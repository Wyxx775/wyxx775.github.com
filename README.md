# Préfecture de Marseille — Portail RP

Site vitrine roleplay pour une préfecture fictive de Marseille, destiné à une communauté Discord. Il propose une page d'accueil classe et institutionnelle avec trois démarches :

- **Contacter la Préfecture** — redirige vers le serveur Discord
- **Déclaration d'impôts** — redirige vers un Google Form
- **Création d'entreprise** — redirige vers un Google Form

## Technologies

- TanStack Start (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- lucide-react (icônes)
- Déploiement Netlify

## Configuration

Avant de mettre le site en ligne, remplacez les liens placeholders dans `src/data/links.ts` par vos vrais liens :

```ts
export const DISCORD_INVITE_URL = '...'
export const TAX_DECLARATION_FORM_URL = '...'
export const BUSINESS_CREATION_FORM_URL = '...'
```

## Lancer le projet en local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:3000`.

## Build de production

```bash
npm run build
```
