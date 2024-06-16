## Cardano TX Sandbox

### Installation und Prerequisites
Im ersten Schritt wird dieses Github-Repository in eine lokale Umgebung geklont, in der aktiv gearbeitet werden kann.
```
```

Im zweiten Schritt muss für das Starten der Anwendung darüber hinaus noch das Framework [Deno](https://deno.com/) installiert werden, um die Anwendung zu starten:

Für Windows:
```
curl -fsSL https://deno.land/install.sh | sh
```

Für Mac:
```
brew install deno
```

Alternativ findet man [hier](https://docs.deno.com/runtime/manual/getting_started/installation) die ausführliche Dokumentation zu der Installation von Deno.




### Beispiel 1: 10 ADA von Wallet(A) nach Wallet(B) schicken
Eine einfache Beispieltransaktion zwischen zwei Wallets. ADA ist die genutzte Kryptowährung auf dem Cardano-Netzwerk. Die beiden Wallets liegen im Projekt.

-   xxx.addr -> Adresse vom Wallet
-   xxx.sk -> Secret Key 

```
deno run --allow-net --allow-read 2.send-to.ts
```

    



### Beispiel 2: 10 ADA von Wallet(A) nach Wallet(B) inklusive Metadaten schicken
Einfache Transaktion zwischen zwei Wallets wie in 1., jedoch mit beigefügten Metadaten. Frontend liegt in der _index.html_ und wird mit folgendem Command gestartet.

 ```bash
 deno run --allow-net --allow-read --allow-run server.ts 
```
Wichtig ist hier, dass das _server.ts_ die Weboberfläche aufruft, mit welcher man dann interagieren kann. Dort können auch individuelle Metadaten in Form von normalem Text beigefügt werden. Die _3.send-with-metadata.ts_ wird dann im Backend ausgespielt.


### Beispiel 3: Cardano "Transaction per Transcation(TPT)"
Mehrere Transaktionen mit einer Transaktion gleichzeitig abhandeln. Kann zwischen einem oder mehreren Wallets durchgeführt werden.
```bash
deno run --allow-net --allow-read 4.tpt.ts
```

### Übersicht aller Commands
Folglich erneut alle grundlegenden Commands, die im Rahmen der Cardano Sandbox genutzt werden können.
```bash
deno run --allow-net --allow-read --allow-run server.ts

deno run --allow-net --allow-read 2.send-to.ts

deno run --allow-net --allow-read 3.send-with-metadata.ts

deno run --allow-net --allow-read 4.tpt.ts

```

### Tools:

- [Lucid](https://lucid.spacebudz.io)
- [Blockfrost](https://blockfrost.io)
- [NodeJS](https://nodejs.org/en/download/)
- [Deno](https://deno.land/manual@v1.29.1/getting_started/installation)

Analyse mit 
- [Cardano Adresse 1](https://preview.cexplorer.io/address/addr_test1vr3rqxlv0cevs6pvh6jc6gxg8etrgnzy4c3m8f4a3fx78rqzepsyn#data)
- [Cardano Adresse 2](https://preview.cexplorer.io/address/addr_test1vqlv6xvkfmv5ryyyajzyhzq9tz4uqujhujdtrqqs97yfjyss5rvat/tx#data)
