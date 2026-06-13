---
title: "Segmentation clients par Machine Learning"
description: "Identification de 5 segments clients actionnables pour un e-commerce grâce au clustering K-Means, +18% de conversion sur les campagnes ciblées."
date: 2025-11-12
tags: ["Machine Learning", "Python", "Clustering", "Data Viz"]
featured: true
demo: "https://exemple.com"
repo: "https://github.com/"
draft: false
---

## Le contexte

Un e-commerce de mode souhaitait personnaliser ses campagnes marketing mais traitait
tous ses clients de la même manière. Objectif : **segmenter la base client** pour adapter
les messages et offres.

## Mon approche

1. **Exploration & nettoyage** des données transactionnelles (120k clients, 2 ans d'historique).
2. **Feature engineering** autour du modèle RFM (Récence, Fréquence, Montant).
3. **Clustering K-Means** avec choix du nombre de segments via la méthode du coude et le score de silhouette.
4. **Restitution** dans un dashboard interactif pour les équipes marketing.

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

X = StandardScaler().fit_transform(rfm[["recence", "frequence", "montant"]])
kmeans = KMeans(n_clusters=5, random_state=42, n_init="auto")
rfm["segment"] = kmeans.fit_predict(X)
```

## Les résultats

- **5 segments** clairs : VIP, fidèles, occasionnels, nouveaux, en sommeil.
- **+18 %** de taux de conversion sur les campagnes ciblées.
- Adoption par l'équipe marketing grâce à un dashboard simple et visuel.

> Ce projet illustre comment une approche non supervisée bien restituée crée
> immédiatement de la valeur métier.
