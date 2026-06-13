---
title: "Assistant documentaire RAG sur LLM"
description: "Un chatbot capable de répondre aux questions internes d'une PME à partir de 800 documents, via une architecture RAG (Retrieval-Augmented Generation)."
date: 2026-02-03
tags: ["IA Générative", "LLM", "NLP", "Python"]
featured: true
repo: "https://github.com/"
draft: false
---

## Le besoin

Les employés perdaient un temps précieux à chercher l'information dans une documentation
interne éparpillée. L'idée : un **assistant conversationnel** fiable, qui cite ses sources.

## L'architecture RAG

1. **Ingestion** : découpage des documents en *chunks* et calcul des *embeddings*.
2. **Stockage vectoriel** pour la recherche sémantique.
3. **Récupération** des passages les plus pertinents à chaque question.
4. **Génération** de la réponse par le LLM, **uniquement** à partir du contexte récupéré (anti-hallucination).

```python
# Pseudo-pipeline RAG simplifié
docs = retriever.search(question, k=4)
context = "\n\n".join(d.text for d in docs)
reponse = llm.generate(prompt=template.format(context=context, question=question))
```

## Résultats

- Réponses **sourcées** : chaque réponse cite les documents d'origine.
- **−70 %** de temps passé à chercher l'information.
- Déploiement léger, coûts maîtrisés grâce au cache des questions fréquentes.

## Ce que j'en retiens

La qualité d'un système RAG tient à **80 % dans la préparation des données** (découpage,
nettoyage, métadonnées) et seulement 20 % dans le choix du modèle.
