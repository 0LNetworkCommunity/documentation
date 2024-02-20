--- 
titre : Premiers Pas 
position_dans_la_barre_laterale : 4
slug: / 
tags:
  - Getting started
---

# Premiers pas - Opérations courantes utiles

## Introduction

Bienvenue dans le Framework 0L Libra ! Ce guide est conçu pour vous aider à configurer votre environnement de développement et à vous introduire à certaines opérations courantes utiles pour interagir avec la blockchain Libra. Que vous soyez un validateur, un développeur, ou simplement curieux à propos de Libra, ce document vous guidera à travers les premières étapes pour commencer 🚀

## Configuration rapide de l'environnement
### Cloner le dépôt

Premièrement, clonons le dépôt libra-framework sur votre machine locale. Cela contient tout le code nécessaire et les outils pour travailler avec la blockchain Libra. Nous recommandons d'utiliser une session tmux pour rendre votre processus de configuration gérable, surtout si vous vous connectez via SSH. 

```bash
# Démarrer ou attacher à une session
mux tmux a 
cd ~

# Cloner le dépôt libra-framework 
git clone https://github.com/0LNetworkCommunity/libra-framework
cd ~/libra-framework
```

### Préparer votre instance

Selon votre rôle (validateur, développeur, développeur Move, ou CI), vous aurez besoin d'installer différents ensembles d'outils :
```bash
# Voir toutes les options de configuration de développement
bash ./util/dev_setup.sh -h
# Installer les outils de construction pour validateurs
bash ./util/dev_setup.sh -t
# Installer les outils de construction et Postgres pour les développeurs principaux
bash ./util/dev_setup.sh -tP
# Installer les outils Move Prover pour les développeurs Move
bash ./util/dev_setup.sh -ty
# Configuration pour CI sans entrée utilisateur requise
bash ./util/dev_setup.sh -tb
# Construire le projet
cargo build --release
```

### Finaliser la configuration

Après avoir construit le projet, vous aurez les binaires du framework Libra prêts.
Pour rendre ces binaires facilement accessibles, ajoutez-les à votre PATH :
```bash
# Copier les binaires dans votre répertoire bin Cargo
sudo cp -f ~/libra-framework/target/release/libra* ~/.cargo/bin/
``` 

Et voila ! 👏 Vous avez maintenant un nœud pleinement opérationnel exécutant le framework 0L Libra.

## Opérations de requête de base
### Vérifier le solde d'un compte

Pour vérifier le solde d'un compte, utilisez :
```bash
libra query balance --account ADRESSE
```

### Vérifier vos Vouches
Concernant les validateurs, pour vérifier les vouches :
```bash
libra query resource --resource-path-string 0x1::vouch::MyVouches --account ADRESSE
```

### Obtenir le total des approvisionnements (total supply)

Pour voir la total supply du Libra :
```bash
libra query view --function-id "0x1::gas_coin::supply"
```

## Opérations de nœud
### Envoyer des Libra
Pour transférer des libra à un autre compte :
```bash
libra txs transfer --to-account ADRESSE_DESTINATION --amount MONTANT
```

## Opérations spécifiques aux validateurs
Ces opérations sont exclusivement pour les validateurs.

### Recommander (Vouch) un compte
Pour vouch un autre compte :
```
libra txs validator vouch --vouch-for ADRESSE
```

### Requête pour recommandations

Pour récupérer les recommandations que vous avez reçues :

```bash
libra query view --function-id 0x1::vouch::true_friends --args ADRESSE
```

### Offre (Bid) pour une position

Pour faire une offre pour une position de validateur :
```bash
libra txs validator pof --bid-pct POURCENTAGE_QUE_VOUS_PAYEZ --expiry NUMERO_EPOCH_QUAND_L_OFFRE_EXPIRE
# Exemple
libra txs validator pof --bid-pct 0.9 --expiry 999
```

### Libérer un compte (jail/unjail)

Pour libérer un compte (note : l'auto-libération n'est pas possible) : 

```bash
libra txs validator jail --unjail-acct ADRESSE
```

## Surveillance de votre nœud

### Page de statut

Pour configurer une page de statut locale pour la surveillance : 

```bash
git clone https://github.com/0LNetworkCommunity/status.git
cd status
yarn
yarn dev
# Visitez http://localhost:5173 pour voir la page de statut
```

### Configuration locale de Grafana

Voici un guide rapide pour configurer Grafana localement sur votre PC. Si vous souhaitez obtenir plus de détails, n'hésitez pas à consulter la [documentation officielle](https://grafana.com/docs/grafana/latest/).

#### Prérequis
- Un serveur ou une machine locale avec un nœud 0L déjà configuré et en cours d'exécution. 

- Docker installé sur votre machine (recommandé pour simplifier).

#### Installer Grafana Utilisant Docker

Récupérez l'image Docker de Grafana en exécutant la commande suivante dans votre terminal :

```bash
docker pull grafana/grafana 
``` 

Exécutez le conteneur Grafana avec la commande suivante : 
```bash
docker run -d -p 3000:3000 grafana/grafana
```

Cette commande exécute Grafana dans un conteneur Docker et mappe le port 3000 du conteneur au port 3000 de votre machine hôte, vous permettant d'accéder à Grafana à http://localhost:3000.

#### Accéder à Grafana

Ouvrez un navigateur web et naviguez jusqu'à http://localhost:3000. Connectez-vous avec les identifiants par défaut (nom d'utilisateur : admin, mot de passe : admin). Vous serez invité à changer le mot de passe.

#### Connecter Grafana à votre nœud 0L

Pour surveiller votre nœud 0L, vous devez connecter Grafana à la source de données du nœud. Si votre nœud 0L expose des métriques via une API HTTP ou une base de données compatible, suivez ces étapes générales :

#### Ajouter une source de données dans Grafana :

- Allez sur le tableau de bord Grafana
- Naviguez jusqu'à "Configuration" > "Sources de données".
- Cliquez sur "Ajouter une source de données" et sélectionnez le type qui correspond à la sortie de données de votre nœud 0L (par exemple, Prometheus, MySQL, etc.).
- Configurez la Source de Données avec l'URL et tous les détails d'authentification requis pour accéder aux métriques de votre nœud 0L. Sauvegardez et testez pour vous assurer que Grafana peut récupérer les données avec succès.
    
#### Créer des tableaux de bord

Une fois Grafana connecté à la source de données de votre nœud 0L, vous pouvez créer des tableaux de bord pour visualiser les données :

- Naviguez jusqu'à "Créer" > "Tableau de bord".
- Ajoutez des panneaux et sélectionnez les métriques que vous souhaitez surveiller.
- Configurez les paramètres du panneau, tels que la requête, le type de visualisation et le titre du panneau.
- Répétez ces étapes pour ajouter plus de panneaux au besoin, personnalisant votre tableau de bord pour afficher les métriques de votre nœud 0L les plus pertinentes pour vous.
    
Nous y sommes ! Vous avez maintenant configuré Grafana pour surveiller votre nœud 0L (Libra). Vous pouvez étendre cette configuration en explorant davantage les fonctionnalités de Grafana, telles que les alertes et des configurations de tableau de bord plus avancées, pour répondre à vos besoins de surveillance.