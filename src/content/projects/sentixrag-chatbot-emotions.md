---
title: "SentixRAG — Chatbot IA adaptatif aux émotions"
description: "Un chatbot intelligent qui détecte l'état émotionnel de l'utilisateur et adapte ses réponses en temps réel, en combinant architecture RAG et analyse de sentiments."
date: 2026-04-15
tags: ["RAG", "NLP", "Analyse de sentiments", "LLM", "Python", "TensorFlow"]
featured: true
draft: false
---

> Projet phare développé dans le cadre du bootcamp intensif **Data Science & IA — DIT × Hub IA** (Oct 2025 – Avr 2026).

## Le problème

Les chatbots classiques répondent de la même manière quel que soit l'état d'esprit de
la personne. **SentixRAG** part d'une idée simple : une bonne assistance commence par
**comprendre l'émotion** de l'utilisateur pour adapter le ton et le contenu de la réponse.

## Mon approche

1. **Analyse de sentiments en temps réel** : un modèle de classification détecte l'état
   émotionnel à partir du message de l'utilisateur.
2. **Architecture RAG** (Retrieval-Augmented Generation) : les réponses sont générées à
   partir d'une base de connaissances, ce qui limite les hallucinations et garde les
   réponses pertinentes et sourcées.
3. **Adaptation dynamique** : le ton et la formulation de la réponse s'ajustent selon
   l'émotion détectée.

## Stack technique

- **Python**, **NLP**, **TensorFlow**
- Modèle de **classification des émotions**
- **API LLM** + pipeline **RAG**

## Ce que ce projet apporte

Au-delà de la prouesse technique, SentixRAG démontre des compétences directement
**transposables au domaine de la santé** : traitement de données textuelles complexes et
modélisation prédictive sur des signaux humains — des méthodologies applicables au
traitement de données médicales et de signaux cliniques.
