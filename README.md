# Uppgift för utvecklare på BNU

Bonnier News publicerar dagligen nya artiklar och annat redaktionellt
material i sina olika tidningar.
Materialet publiceras under kategorier såsom nyheter, sport, eller kultur.
Visst innehåll publiceras i flera olika kategorier samtidigt. Det senast
publicerade materialet exponeras under RSS-flöden.

## Uppgift

Din uppgift är att ta fram en enkel applikation som:

- Hämtar det senaste innehållet från varje flöde.
- Visar en lista över de tio senast publicerade av alla artiklar som finns
  i de RSS-flöden i filen [feeds.json](feeds.json), sorterade i datumordning.
  För att klara av detta måste du slå samman innehållet från alla flöden och ta
  bort dubletter--innehåll som publicerats i fler än en kategori.
- Resultatet kan se ut ungefär som nedan (här uttryckt i Markdown för att länka artiklarna).

### Exempelresultat

1. [Man hittad död i bostad i Eda – två gripna](https://www.dn.se/sverige/man-hittad-dod-i-bostad-tva-gripna/)
2. [Man hittad död – två gripna](https://www.expressen.se/nyheter/man-hittad-dod-tva-gripna/)
3. [Inflationssiffror tryckte upp räntor – dollarn stärks](https://www.di.se/live/inflationssiffror-tryckte-upp-rantor-dollarn-starks/)
4. [Fastighetsnestorn: Rätt av SBB att höja utdelningen](https://www.di.se/nyheter/fastighetsnestorn-ratt-av-sbb-att-hoja-utdelningen/)
5. [Insändare. Svar: ”Swedbank tjänar inte några ränteintäkter på elstödet”](https://www.dn.se/insandare/svar-swedbank-tjanar-inte-nagra-ranteintakter-pa-elstodet/)
6. [Fransk stjärna avstår VM – uppges oense med tränaren](https://www.hd.se/2023-02-24/fransk-stjarna-avstar-vm--uppges-oense-med-tranaren?utm_medium=rss&utm_source=site-feed&utm_campaign=rss-autodiscovery)
7. [Ekobrottsåklagare till sargat krypto-bolag](https://www.di.se/nyheter/ekobrottsaklagare-till-sargat-krypto-bolag/)
8. [Miriam Toews: Min mamma är mitt livs kärlek](https://www.dn.se/kultur/miriam-toews-min-mamma-ar-mitt-livs-karlek/)
9. [Fredsskulptur invigdes på Dunkers – på ettårsdagen av den ryska invasionen](https://www.hd.se/2023-02-24/fredsskulptur-invigdes-pa-dunkers--pa-ettarsdagen-av-den-ryska-invasionen?utm_medium=rss&utm_source=site-feed&utm_campaign=rss-autodiscovery)
10. [Karlssons VM-hopp efter sjukdomarna: "Bådar gott"](https://www.hd.se/2023-02-24/karlssons-vm-hopp-efter-sjukdomarna-badar-gott?utm_medium=rss&utm_source=site-feed&utm_campaign=rss-autodiscovery)

## Instruktioner

- Du förväntas uppfylla uppgiften i form av en webbapplikation med Node.js.
- Börja med att klona det här repot.
- Din applikation behöver inte klara någon hög last. Fundera ändå på hur
  du skulle kunna anpassa den för att klara mycket högre trafik,
  exempelvis köras vid varje besök på Expressen.se.
- Lägg inte mer än en dryg timme på uppgiften. Håll det enkelt.
- Tänk på hur du hade löst uppgiften om du haft mer tid. Fundera över
  vilka avvägningar du gör, och vad du hade inkluderat eller jobbat vidare
  på om du hade fortsatt att utveckla applikationen som en applikation redo
  att driftsätta och vidareutveckla.
- När du har löst uppgiften, kommer du i mån av tid att få möjlighet att
  göra förändringar tillsammans med kollegerna.

## Kom ihåg

Syftet med uppgiften är inte att skapa den perfekta lösningen, snarare att ta
fram en hyfsat enkel lösning inom loppet av ett par timmar. Du kommer inte att
bedömas enkom på hur du valt att lösa uppgiften, utan lika mycket på hur du
resonerar kring din lösning och hur den kan anpassas.

Lycka till!
