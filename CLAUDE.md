# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run dev-ssl` - Start development server with HTTPS/SSL
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview built application

## Architecture Overview

This is a Nuxt.js 3 application integrated with Storyblok CMS as a headless content management system. The project follows a component-based architecture where Storyblok components are dynamically rendered through Vue components.

### Key Architecture Components

**Storyblok Integration:**
- Uses `@storyblok/nuxt` module for seamless CMS integration
- Access token configured in `nuxt.config.js` for content fetching
- Components in `storyblok/` directory map to Storyblok content types
- Uses `v-editable` directive for in-place editing in Storyblok's visual editor

**Content Flow:**
- `pages/index.vue` fetches the 'home' story using `useAsyncStoryblok`
- `StoryblokComponent` renders content dynamically based on component type
- Each Storyblok component receives a `blok` prop containing content data

**Component Structure:**
- `Page.vue` - Root container that renders body components
- `Grid.vue` - Layout component for multi-column content
- `Feature.vue` - Content feature blocks
- `Teaser.vue` - Headline display component

### Styling

- TailwindCSS for utility-first styling
- Roboto font configured as default sans-serif
- Custom Tailwind config scans `storyblok/`, `components/`, and `pages/` directories

### Development Notes

- Components use Composition API with `<script setup>`
- All Storyblok components expect a `blok` prop containing content data
- The application is configured for draft content preview during development
- SSL development server available for local HTTPS testing