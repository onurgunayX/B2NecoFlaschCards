document.addEventListener('DOMContentLoaded', function() {
    // Kelime veritabanı
    const words = [
        {
            word: "sich abkoppeln",
            preposition: "von+dat",
            example: "Er hat beschlossen, sich von der stressigen Arbeitsumgebung abzukoppeln und eine Auszeit zu nehmen.",
            translation: "to disconnect oneself, to detach oneself"
        },
        // Buraya daha fazla kelime ekleyebilirsiniz
        {
        word: "sich abkoppeln",
        preposition: "von+dat",
        example: "Er hat beschlossen, sich von der stressigen Arbeitsumgebung abzukoppeln und eine Auszeit zu nehmen.",
        translation: "to disconnect oneself, to detach oneself"
        },
        {
        word: "sich verschieben",
        preposition: "",
        example: "Der Termin hat sich um eine Stunde verschoben. Die Verantwortlichkeiten haben sich im Laufe der Zeit verschoben.",
        translation: "to shift, to move"
        },
        {
        word: "sich umstellen",
        preposition: "auf+Akk",
        example: "Nach dem Umzug müssten wir uns auf eine neue Umgebung umstellen. Der Mitarbeiter musste sich aufgrund neuer Technologien und Arbeitsabläufe umstellen.",
        translation: "to adapt, to adjust"
        },
        {
        word: "hervorrufen",
        preposition: "",
        example: "Das Bild hat starke Emotionen hervorgerufen. Die Entscheidung des Gerichts hat öffentlichen Widerstand hervorgerufen.",
        translation: "to evoke, to cause, to elicit, to induce"
        },
        {
        word: "missachten",
        preposition: "",
        example: "Er hat die Verkehrsregeln missachtet und wurde deshalb bestraft. Die Warnungen wurden leider oft missachtet.",
        translation: "to disregard, to ignore"
        },
        {
        word: "schwerwiegend",
        preposition: "",
        example: "Es gibt schwerwiegende Bedenken bezüglich der Sicherheit. Die Folgen des Unfalls waren schwerwiegend.",
        translation: "serious, significant"
        },
        {
        word: "schwächen",
        preposition: "",
        example: "Das schlechte Wetter hat die Struktur des Gebäudes geschwächt. Stress kann das Immunsystem schwächen.",
        translation: "to weaken, to diminish"
        },
        {
        word: "beeinträchtigen",
        preposition: "",
        example: "Der Lärm beeinträchtigt meine Konzentration. Die schlechte Wetterlage hat die Ernte beeinträchtigt.",
        translation: "to impair, to hinder, to affect"
        },
        {
        word: "unterschätzen",
        preposition: "",
        example: "Ich habe die Schwierigkeiten dieser Aufgabe unterschätzt. Viele Menschen unterschätzen ihr eigenes Potenzial.",
        translation: "to underestimate"
        },
        {
        word: "umsetzen",
        preposition: "",
        example: "Wir müssen die neuen Strategien in unserem Unternehmen umsetzen. Die Regierung plant, umweltfreudliche Maßnahmen umzusetzen.",
        translation: "to implement, to realize, to put into practice"
        },
        {
        word: "zwingen",
        preposition: "",
        example: "Er wurde gezwungen, ein Geständnis abzulegen. Die Umstände zwangen sie, eine Entscheidung zu treffen. Der Druck der Gesellschaft, in der sie lebt, zwingt sie dazu, einen Mann zu finden, bevor sie 30 wird.",
        translation: "to force, to compel"
        },
        {
        word: "Erfordernis",
        preposition: "",
        example: "Bewerber müssen bestimmte Erfordernisse erfüllen. Für diese Position besteht das Erfordernis eines abgeschlossenen Studiums.",
        translation: "requirement, necessity"
        },
        {
        word: "Tugend",
        preposition: "",
        example: "Die Tugend der Geduld ist eine wichtige Eigenschaft. Mut ist eine Tugend, die oft bewundert wird.",
        translation: "virtue"
        },
        {
        word: "gerecht",
        preposition: "",
        example: "Die Entscheidung des Richters war gerecht und basierte auf vorliegenden Beweisen.",
        translation: "fair, just"
        },
        {
        word: "durchaus",
        preposition: "",
        example: "Das ist durchaus eine gute Idee.",
        translation: "definitely, certainly, indeed, by all means"
        },
        {
        word: "überwinden",
        preposition: "",
        example: "Sie hat ihre Ängste überwunden und ist nun in der Lage, vor Publikum zu sprechen.",
        translation: "to overcome, to conquer"
        },
        {
        word: "wohnhaft",
        preposition: "",
        example: "Herr Müller ist wohnhaft in Berlin. Die Firma ist wohnhaft in einem Bürogebäude im Stadtzentrum. Rund ein Viertel der in der Schweiz wohnhaften Bevölkerung beteiligt sich an freiwilligen Arbeitseinsätzen.",
        translation: "residing, living, resident"
        },
        {
        word: "verrichten",
        preposition: "",
        example: "Er verrichtet seine Arbeit gewissenhaft und effizient. Der Gärtner verrichtet seine täglichen Aufgaben im Garten.",
        translation: "to carry out, to perform, to execute"
        },
        {
        word: "vorwiegend",
        preposition: "",
        example: "In diesem Stadtviertel leben vorwiegend ältere Menschen. Die Veranstaltung richtet sich vorwiegend an Familien mit Kindern. Der Film besteht vorwiegend aus dokumentarischen Aufnahmen.",
        translation: "predominantly, mainly"
        },
        {
        word: "ausschließlich",
        preposition: "",
        example: "Der Zugang zum Schwimmbad ist ausschließlich für Hotelgäste. In diesem Geschäft werden ausschließlich Bio-Produkte verkauft. Der Raum ist ausschließlich für Meetings und Besprechungen reserviert.",
        translation: "exclusively, solely"
        },
        {
        word: "Gleichstellung",
        preposition: "",
        example: "Die Gleichstellung von Frauen und Männern ist ein wichtiges Ziel der Gesellschaft.",
        translation: "equality, equal treatment"
        },
        {
        word: "Erwerbsarbeit",
        preposition: "",
        example: "Viele Menschen sind auf Erwerbsarbeit angewiesen, um ihre Lebensunterhalt zu verdienen.",
        translation: "employment"
        },
        {
        word: "Eheschließung",
        preposition: "",
        example: "Die Eheschließung fand in einer kleinen Kirche statt.",
        translation: "marriage, wedding"
        },
        {
        word: "Zuwendung",
        preposition: "",
        example: "Die Mutter schenkt ihrem Kind viel Zuwendung und Liebe. Ältere Menschen benötigen oft Zuwendung und Unterstützung um sich wohlzufinden.",
        translation: "affection, attention, devotion, care"
        },
        {
        word: "eintauchen",
        preposition: "",
        example: "Die Kinder liebten es, im Sommer ins kalte Wasser einzutauchen. Beim Lesen dieses Buches kann man in eine andere Welt eintauchen. Er eintauchte in die Arbeit und vergaß dabei die Zeit.",
        translation: "to immerse, to submerge"
        },
        {
        word: "verzaubern",
        preposition: "",
        example: "Der Magier verzauberte das Publikum mit seinen beeindruckenden Tricks.",
        translation: "to enchant, to charm, to bewitch"
        },
        {
        word: "sich befinden",
        preposition: "",
        example: "Das Restaurant befindet sich in der Innenstadt.",
        translation: "to be located, to be situated"
        },
        {
        word: "gießen",
        preposition: "",
        example: "Bitte gieß die Blumen, damit sie nicht vertrocknen.",
        translation: "to water"
        },
        {
        word: "hingegen",
        preposition: "",
        example: "Ich bevorzuge Tee, hingegen trinkt mein Bruder lieber Kaffee. Sie liebt Schokolade. Ihr Bruder hingegen bevorzugt Vanilla.",
        translation: "however, on the other hand, in contrast"
        },
        {
        word: "auf etwas ankommen",
        preposition: "",
        example: "Bei der Wahl seines Jobs kommt es nicht nur auf das Gehalt an, sondern auch darauf, ob man sich mit den Werten und Zielen des Unternehmens identifizieren kann. Wenn du Erfolg haben willst, kommt es darauf an, hart zu arbeiten und dranzubleiben.",
        translation: "to depend on, to be important, to be crucial"
        },
        {
        word: "ergreifen",
        preposition: "",
        example: "Er ergreift die Gelegenheit und nutzt sie zu seinem Vorteil. Er ergreift immer die Initiative und übernimmt Verantwortung für seine Aufgaben. Die Firma hat Maßnahmen ergriffen, um die Produktivität zu steigern.",
        translation: "to seize, to take the initiative, to take measures"
        },
        {
        word: "erschließen",
        preposition: "",
        example: "Durch den Bau der neuen Autobahn wird das abgelegene Gebiet besser erschlossen. Die Archäologen konnten aus den Funden auf dem Gelände wichtige Informationen über die antike Zivilisation erschließen. Durch intensive Recherche und Analyse konnte der Detektiv schließlich den Fall erschließen.",
        translation: "to open up, to make accessible, to develop, to understand"
        },
        {
        word: "sorgen für",
        preposition: "",
        example: "Als Eltern müssen wir für das Wohlbefinden unserer Kinder sorgen. Der Chef sorgt für eine angenehme Arbeitsumgebung für seine Mitarbeiter. Als Mutter sorgt sie für ihre Kinder, indem sie ihnen Essen kocht und sie zur Schule bringt.",
        translation: "to take care of, to provide for"
        },
        {
        word: "erzeugen",
        preposition: "",
        example: "Solarzellen erzeugen elektrische Energie aus Sonnenlicht. Diese Fabrik erzeugt hochwertige Möbel aus nachhaltigem Holz.",
        translation: "to produce, to generate"
        },
        {
        word: "sich sehnen nach",
        preposition: "nach+dat",
        example: "Sie sehnt sich nach Ruhe und Entspannung nach einem langen Arbeitstag. Sie sehnte sich nach einem ruhigen Tag am Strand. Nach all den Jahren im Ausland sehnte er sich nach der Heimat.",
        translation: "to long for, to desire"
        },
        {
        word: "Kram",
        preposition: "",
        example: "Ich muss meinen Kram aufräumen, es liegt überall herum. Hast du noch Platz in deinem Rucksack für meinen Kram?",
        translation: "stuff, things, odds and ends"
        },
        {
        word: "dadurch",
        preposition: "",
        example: "Er sparte Geld und konnte dadurch eine Reise machen. Sie arbeitete hart und verbesserte dadurch ihre Fähigkeiten. Er hat sein Verhalten geändert, und dadurch verbesserte sich das Arbeitsklima. Sie hat viel gelernt, und dadurch konnte sie die Prüfung bestehen.",
        translation: "thereby, so that, thus, consequently"
        },
        {
        word: "überwiegen",
        preposition: "",
        example: "Die Meinung des Mehrheitsanteils der Bevölkerung überwiegt. Die Vorteile dieses Plans überwiegen die Nachteile. Obwohl es einige negative Aspekte gibt, überwiegt insgesamt das Positive.",
        translation: "to prevail, to dominate, to overwhelm"
        },
        {
        word: "diesbezüglich",
        preposition: "",
        example: "Wir haben bereits über die Bedeutung von Teamarbeit gesprochen. Diesbezüglich möchte ich noch einige Punkte hervorgeben.",
        translation: "in this regard, in relation to this, concerning this"
        },
        {
        word: "anmerken",
        preposition: "",
        example: "Darf ich etwas dazu anmerken? Er hat einige interessante Punkte währen der Diskussion angemerkt.",
        translation: "to remark, to comment"
        },
        {
        word: "hinsichtlich",
        preposition: "",
        example: "Hinsichtlich des Projekts müssen wir noch einige wichtige Details klären.",
        translation: "regarding, in terms of"
        },
        {
        word: "aufgrund",
        preposition: "",
        example: "Ich konnte nicht zur Arbeit kommen aufgrund des schlechten Wetters. Aufgrund der hohen Nachfrage haben wir zusätzliche Produkte bestellt.",
        translation: "because of"
        },
        {
        word: "einführen",
        preposition: "",
        example: "Das Unternehmen plant, ein neues Produkt auf dem Markt einzuführen. Die Regierung hat beschlossen, eine neue Steuer einzuführen, um die Umwelt zu schützen.",
        translation: "to introduce, to implement"
        },
        {
        word: "abwägen",
        preposition: "",
        example: "Bevor du eine Entscheidung triffst, solltest du alle Vor- und Nachteile abwägen. Der Politiker muss die verschiedenen Interessen der Bevölkerung abwägen, bevor er eine Entscheidung trifft.",
        translation: "to consider, to take into account, to weigh"
        },
        {
        word: "Missstand",
        preposition: "",
        example: "Die Proteste richten sich gegen die Missstände in der Regierung und fordern Reformen. Die Organisation setzt sich für die Beseitigung socialer Missstände ein.",
        translation: "malpractice, misconduct, mismanagement, abuse"
        },
        {
        word: "auf etwas hinweisen",
        preposition: "auf+akk",
        example: "Der Lehrer hat die Schüler auf die wichtigen Regeln in der Prüfung hingewiesen. Das Schild weist auf die Gefahren im Baustellenbereich hin.",
        translation: "to indicate, to point out"
        },
        {
        word: "für etwas sprechen",
        preposition: "für+akk",
        example: "Es gibt viele Gründe, die für eine nachhaltige Energienutzung sprechen. Die hohe Kundenzufriedenheit spricht für die Qualität des Produkts.",
        translation: "to speak in favor of, to be in favor of"
        },
        {
        word: "angehend",
        preposition: "",
        example: "Die angehende Ärztin absolviert derzeit ihr Praktischesjahr im Krankenhaus. Der angehende Schauspieler nimmt Schauspielunttericht, um seine Fähigkeiten zu verbessern.",
        translation: "prospective, aspiring, concerning"
        },
        {
        word: "benoten",
        preposition: "",
        example: "Die Lehrerin wird die Tests der Schüler nächste Woche benoten.",
        translation: "to grade, to mark"
        },
        {
        word: "nachgehen",
        preposition: "",
        example: "Er möchte seinem Hobby nachgehen und Gitarre spielen lernen. Die Polizei muss den Vorfall gründlich nachgehen, um den Täter zu finden.",
        translation: "to pursue, to follow, to investigate, to look into"
        },
        {
        word: "vielfältig",
        preposition: "",
        example: "In unserer Stadt gibt es eine vielfältige Auswahl an Restaurants mit internationaler Küche.",
        translation: "varied, diverse, multifaceted"
        },
        {
        word: "betragen",
        preposition: "",
        example: "Die Rechnung beträgt insgesamt 50 Euro. Die Temperatur betrug gestern 25 Grad Celcius. Die Kosten für das Projekt betragen mehr als erwartet.",
        translation: "to amount to, to total"
        },
        {
        word: "gewähren",
        preposition: "",
        example: "Die Regierung gewährt finanzielle Unterstützung für bedürftige Familien. Das Unternehmen gewährt seinen Mitarbeitern regelmäßige Fortbildungsmöglichkeiten.",
        translation: "to grant, to provide, to afford"
        },
        {
        word: "über den Tellerrand schauen",
        preposition: "",
        example: "Es ist wichtig, über den Tellenrand zu schauen, um neue Lösungen für das Problem zu finden. In unserer globalisierten Welt ist es entscheidend, über den Tellerrand zu schauen und kulturelle Vielfalt zu schätzen.",
        translation: "to think outside the box, to look beyond one's own perspective"
        },
        {
        word: "auf/an etwas verweisen",
        preposition: "auf+akk/an+akk",
        example: "Der Lehrer verweist die Schüler auf das Wörterbuch, um unbekannte Vokabeln nachzuschlagen. Der Kundenservice verweis die Anrufer an die technische Abteilung für weitere Unterstützung. Die Polizei verweist auf die Sicherheitsregeln, die in solchen Situationen zu befolgen sind.",
        translation: "to direct, to refer to"
        },
        {
        word: "sich beziehen auf",
        preposition: "auf+akk",
        example: "Dieses Buch bezieht sich auf verschiedene historische Ereignisse. Der Artikel bezieht sich auf die Auswirkungen des Klimawandels auf die Artenvielfalt. In seinem Vortrag bezog sich der Professor auf die neuesten Forschungsergebnisse.",
        translation: "to refer to, to relate to"
        },
        {
        word: "auf etwas/jemanden stoßen",
        preposition: "auf+akk",
        example: "Ich bin gestern spazieren gegangen und bin auf einen alten Freund gestoßen. Als ich im Garten grub, stieß ich auf eine alte Münze aus dem 17. Jahrhundert.",
        translation: "to come across, to encounter"
        },
        {
        word: "abschaffen",
        preposition: "",
        example: "Die Regierung plant, die umstrittene Steuer abzuschaffen. Viele Menschen setzen sich dafür ein, Tierversuche abzuschaffen. Das Unternehmen hat beschlossen, das traditionelle Leistungsbeurteilungssystem abzuschaffen und durch ein neues Modell zu ersetzen.",
        translation: "to abolish, to do away with"
        },
        {
        word: "sich ereignen",
        preposition: "",
        example: "Der Unfall ereignete sich gester auf der Autobahn. Das historische Ereignis ereignete sich von über hundert Jahren.",
        translation: "to occur, to happen"
        },
        {
        word: "angewiesen auf",
        preposition: "auf+akk",
        example: "Die ältere Dame ist auf fremde Hilfe angewiesen, um ihre Einkäufe zu erledigen. Er ist auf seine Brille angewiesen, um gut zu sehen.",
        translation: "to be dependent, to be reliant"
        },
        {
        word: "verhängen",
        preposition: "",
        example: "Die Regierung hat eine Ausgangsperre verhängt, um die Verbreitung des Virus einzudämmen. Der Richter verhängte eine Geldstrafe gegen den Angeklagten wegen seiner illegalen Aktivitäten.",
        translation: "to impose, to apply"
        },
        {
        word: "sich ausdenken",
        preposition: "",
        example: "Er hat sich eine fantastische Geschichte ausgedacht. Sie muss sich schnell eine Ausrede ausdenken, um ihre Verspätung zu erklären. Die Kinder haben sich ein Spiel ausgedacht, um sich die Zeit zu vertreiben.",
        translation: "to come up with, to invent"
        },
        {
        word: "Aufnahme",
        preposition: "",
        example: "Die Aufnahme des Konzerts wurde auf DVD veröffentlicht. Er erhielt die Aufnahme in die Universität seiner Wahl. Die Aufnahme neuer Flüchtlinge wurde sorgfältig geplant.",
        translation: "recording, footage, acceptance, admission, intake, reception"
        },
        {
        word: "Gerücht",
        preposition: "",
        example: "Die Gerüchte über die bevorstehende Firmenfusion haben sich als falsch herausgestellt. Die Gerüchte über den Prominenten sorgten für Aufregung in den sozialen Medien. Das Gerücht über ihren Rücktritt verbreitete sich innerhalb weniger Stunden im Büro.",
        translation: "rumor, gossip"
        },
        {
        word: "zusehend",
        preposition: "",
        example: "Die Situation verschlechtert sich zusehend. Er wird zusehend selbstbewusster.",
        translation: "gradually, increasingly"
        },
        {
        word: "Zuzug",
        preposition: "",
        example: "In den letzten Jahren gab es einen Zuzug von jungen Familien in die ländlichen Gebiete. Die wirtschaftliche Entwicklung der Stadt hat zu einem Zuzug von Arbeitnehmern geführt.",
        translation: "influx, arrival, migration"
        },
        {
        word: "in Geiselhaft nehmen",
        preposition: "",
        example: "Die Entführer hielten den Diplomaten in Geiselhaft, bis ihre politischen Forderungen erfüllt wurden. Die Terroristen drohten damit, die Geiseln zu töten, wenn ihre politischen Forderungen nicht erfüllt würden.",
        translation: "hostage taking, hostage situation"
        },
        {
        word: "frohlocken",
        preposition: "",
        example: "Die Fans frohlockten über den Sieg ihrer Lieblingsmannschaft.",
        translation: "to rejoice, to exult"
        },
        {
        word: "feststellen",
        preposition: "",
        example: "Die Ärzte konnten die Ursache für ihre Symptome nicht feststellen. Die Polizei hat festgestellt, dass es sich um einen Unfall handelte.",
        translation: "to identify, to recognize, to notice, to determine"
        },
        {
        word: "sich unterhalten",
        preposition: "",
        example: "Wir haben uns gestern lange unterhalten. Die Kinder unterhalten sich oft über ihre Lieblingsspiele.",
        translation: "to chat"
        },
        {
        word: "einsetzen",
        preposition: "",
        example: "Die Lehrer setzen moderne Unterrichtsmethoden ein, um die Schüler zu motivieren. Für dieses Projekt müssen wir spezielle Werkzeuge einsetzen.",
        translation: "to use, to apply, to employ, to insert"
        },
        {
        word: "sich für etwas/jemanden einsetzen",
        preposition: "für+akk",
        example: "Sie setzt sich aktiv für die Gleichstellung von Frauen in der Arbeitswelt ein. Wir sollten uns alle für den Schutz bedrohter Tierarten einsetzen. Er setzt sich leidenschaftlich für die Rechte von Minderheiten ein. Ich setze mich für die Rechte der von der türkischen Regierung verfolgten Leute ein.",
        translation: "to advocate, to stand up for, to support"
        },
        {
        word: "einwenden",
        preposition: "",
        example: "Sie hat gegen den Vorschlag des Chefs eingewendet. Er hat nichts gegen das Projekt eingewendet.",
        translation: "to object, to raise an objection, to dissent"
        },
        {
        word: "anstatt",
        preposition: "",
        example: "Ich trinke Tee anstatt Kaffee. Anstatt zu fliegen, entschieden sie sich für eine Zugreise. Anstatt den Kindern einen Tierfilm zu zeigen, ist es besser Tiere in der freien Wildbahn oder auf den Bauernhof zu beobachten.",
        translation: "instead of"
        },
        {
        word: "abheben",
        preposition: "",
        example: "Ich werde morgen Geld abheben, um die Rechnung zu bezahlen. Das Flugzeug wird in wenigen Minuten abheben. Sie können den Deckel abheben, um das Gerät zu öffnen.",
        translation: "to withdraw (money), to take off, to remove, to detach"
        },
        {
        word: "sich abheben",
        preposition: "",
        example: "Er hebt sich von der Menge ab durch sein außergewöhnliches Talent. Diese Idee hebt sich deutlich von den anderen ab. Sein Talent hebt ihn von den anderen Schauspielern ab.",
        translation: "to stand out, to distinguish oneself"
        },
        {
        word: "anlügen",
        preposition: "",
        example: "Er hat mich angelogen, als er behauptete, er sei krank.",
        translation: "to lie, to deceive"
        },
        {
        word: "irgendeine",
        preposition: "",
        example: "Ich brauche irgendeine Information über das Projekt. Gibt es irgendeine Lösung?",
        translation: "any, some"
        },
        {
        word: "beantragen",
        preposition: "",
        example: "Er möchte ein Visum für Deutschland beantragen, um seine Familie zu besuchen. Um eine Arbeitserlaubnis zu erhalten, muss man sie bei der zustäntigen Behörde beantragen.",
        translation: "to apply for, to request"
        },
        {
        word: "Antrag",
        preposition: "",
        example: "Ich habe einen Antrag auf Urlaub gestellt. Er reichte einen Antrag auf eine Verlängerung der Frist ein. Der Antrag auf finanzielle Unterstützung wurde genehmigt.",
        translation: "request, application"
        },
        {
        word: "unmittelbar",
        preposition: "",
        example: "Nach dem Unfall wurde unmittelbar ein Rettungswagen gerufen. Bitte kommen Sie unmittelbar ins Büro, es gibt dringende Angelegenheiten zu besprechen. Die unmittelbare Nähe zum Bahnhof macht diese Wohnung sehr attraktiv.",
        translation: "immediate, direct"
        },
        {
        word: "Auftrag",
        preposition: "",
        example: "Ich habe einen Auftrag erhalten, eine neue Website für das Unternehmen zu entwickeln.",
        translation: "task, job, assignment"
        },
        {
        word: "erstellen",
        preposition: "",
        example: "Der Designer wird ein neues Logo für das Unternehmen erstellen. Sie möchten ein Haus bauen und suchen einen Architekten, der die Päne erstellt.",
        translation: "to design, to create"
        },
        {
        word: "Rundfunk",
        preposition: "",
        example: "Der öffentlich-rechtliche Rundfunk bietet eine vielfältige Auswahl an Bildungs- und Unterhaltungsprogrammen.",
        translation: "broadcasting"
        },
        {
        word: "auswerten",
        preposition: "",
        example: "Der Lehrer wird die Tests der Schüler auswerten, um ihre Leistung bewerten.",
        translation: "to evaluate, to assess, to analyze"
        },
        {
        word: "sich anhören",
        preposition: "",
        example: "Das hört sich vielleicht etwas langweilig an. Wir sollten uns den Vortrag des Experten anhören.",
        translation: "to sound, to listen to"
        },
        {
        word: "mitwirken",
        preposition: "",
        example: "Er möchte am Projekt mitwirken und seine Ideen einbringen. Die Bürger wurden angerufen bei der Stadtentwicklung mitzuwirken. Die Experten aus verschiedenen Fachbereichen haben gemeinsam an der Studie mitgewirkt.",
        translation: "to collaborate, to participate, to contribute"
        },
        {
        word: "gelten für",
        preposition: "für+akk",
        example: "Diese Vorschriften gelten für alle Mitarbeiter des Unternehmens. Die Rabatt-aktion gilt nur für Einkäufe ab 50 Euro. Die Verkehrsregeln gelten für alle Autofahrer.",
        translation: "to apply to, to be valid for"
        },
        {
        word: "sämtlich",
        preposition: "",
        example: "Sämtliche Bewohner des Hauses wurden evakuiert. Sämtliche Mitarbeiter müssen an dem Training teilnehmen.",
        translation: "all, entire, every"
        },
        {
        word: "in Betracht kommen",
        preposition: "",
        example: "Für die Stelle des Projektleiters kommen verschiedene Kandidaten in Betracht. Wenn du ein Auto kaufen möchtest, sollten verschiedene Marken in Betracht kommen. Bei der Auswahl eines Urlaubsziels kommen viele Faktoren in Betracht.",
        translation: "to come into consideration, to be considered"
        },
        {
        word: "versorgen",
        preposition: "",
        example: "Meine Aufgabe ist es, andere Journalisten mit seriösen Nachrichtenmeldungen zu versorgen. Die Eltern versorgen ihre Kinder mit allem, was sie zum Aufwachsen brauchen. Nach dem Unfall wurde der Verletzte sofort versorgt und ins Krankenhaus gebracht.",
        translation: "to supply, to provide for, to care for"
        },
        {
        word: "abwechslungsreich",
        preposition: "",
        example: "Der Urlaub war abwechslungsreich, wir haben sowohl in den Bergen gewandert als auch am Strand entspannt. Die Veranstaltung bietet ein abwechslungsreiches Programm mit Musik, Tanz und Comedy.",
        translation: "varied, diverse"
        },
        {
        word: "albern",
        preposition: "",
        example: "Die Kinder lachten über ihre albernen Witze und Grimassen. Es ist albern, sich über kleine Fehler so aufzuregen.",
        translation: "silly, foolish"
        },
        {
        word: "fragwürdig",
        preposition: "",
        example: "Die Entscheidung des Unternehmens, die Produktion ins Ausland zu verlagern, ist aus ethischer Sicht fragwürdig. Sein Verhalten in der letzten Woche war äußerst fragwürdig. Es ist fragwürdig, ob diese Informationen vertrauenswürdig sind.",
        translation: "questionable, doubtful"
        },
        {
        word: "anspruchsvoll",
        preposition: "",
        example: "Das anspruchsvolle Projekt erfordert viel Fachwissen und intensive Zusammenarbeit. Das anspruchsvolle Training hat ihm geholfen, seine Fähigkeiten zu verbessern.",
        translation: "demanding, challenging, sophisticated"
        },
        {
        word: "verlogen",
        preposition: "",
        example: "Er ist ein verlogener Politiker, der versucht, die Wahrheit zu verschleiern. Ihre verlogenen Ausreden überzeugten niemanden von ihrer Unschuld.",
        translation: "dishonest, deceitful"
        },
        {
        word: "enthüllen",
        preposition: "",
        example: "Die Journalisten konnten einen Skandal aufdecken und enthüllten die Korruption in der Regierung. Der Hacker enthüllte vertrauliche Informationen über das Unternehmen.",
        translation: "to reveal, to uncover"
        },
        {
        word: "entstellen",
        preposition: "",
        example: "Der Unfall hat das Gesicht des Opfers schwer entstellt. Die Vandalen haben das Denkmal durch Graffiti entstellt. Die falschen Gerüchte haben den Ruf des Politikers entstellt.",
        translation: "to disfigure, to deform"
        },
        {
        word: "vertuschen",
        preposition: "",
        example: "Die Regierung versucht, den Skandal zu vertuschen und die Wahrheit vor der Öffentlichkeit zu verbergen. Der Manager versuchte den Diebstahl zu vertuschen, um den Ruf des Unternehmens zu schützen.",
        translation: "to cover up, to conceal"
        },
        {
        word: "unbedeutend",
        preposition: "",
        example: "Seine Bemerkungen waren völlig unbedeutend und wurden von niemandem beachtet.",
        translation: "insignificant, unimportant"
        },
        {
        word: "etlich",
        preposition: "",
        example: "In meinem Garten wachsen etliche verschiedene Blumenarten.",
        translation: "several, some, a number of"
        },
        {
        word: "in den Griff bekommen",
        preposition: "",
        example: "Die Firma hat endlich Ihre Finanzprobleme in den Griff bekommen. Es hat eine Weile gedauert, aber er hat seine Zeitmanagement-Probleme in den Griff bekommen. Er arbeitet hart daran, seine schlechten Gewohnheiten in den Griff zu bekommen.",
        translation: "to get under control, to get a handle on"
        },
        {
        word: "vorankommen",
        preposition: "",
        example: "Mit harter Arbeit und Engagement kann man im Beruf vorankommen. Die Schülerinnen arbeiten hart, um in ihren Studien voranzukommen.",
        translation: "to get ahead, to make progress"
        },
        {
        word: "beleuchten",
        preposition: "",
        example: "In dem Vortrag wurden verschiedene Aspekte des Themas ausführlich beleuchtet. Wir sollten beide Seiten des Arguments beleuchten, bevor wir eine Entscheidung treffen.",
        translation: "to illuminate, to shed light on, to examine"
        },
        {
        word: "gekonnt",
        preposition: "",
        example: "Sie hat die komplizierte Aufgabe sehr gekonnt gelöst. Der Schauspieler spielte die Rolle des Bösewichts gekonnt und überzeugend.",
        translation: "skillfully, expertly"
        },
        {
        word: "lästig",
        preposition: "",
        example: "Diese ständigen Werbeanrufe sind wirklich lästig. Das ständige Klingeln meines Telefons ist lästig, wenn ich mich konzentrieren muss.",
        translation: "annoying, bothersome"
        },
        {
        word: "Vorwurf",
        preposition: "",
        example: "Sie erhob schwere Vorwürfe gegen ihn und beschuldigte ihn des Diebstahls. Trotz der Vorwürfe verteidigte er seine Handlungen und betonte seine Unschuld.",
        translation: "accusation, reproach"
        },
        {
        word: "ernst genommen werden",
        preposition: "",
        example: "Es ist wichtig, dass die Anliegen der Mitarbeiter ernst genommen werden, um ein positives Arbeitsklima zu schaffen. Es ist wichtig, dass meine Ideen im Team ernst genommen werden, damit wir erfolgreich zusammenarbeiten können.",
        translation: "to be taken seriously"
        },
        {
        word: "ausgehend von",
        preposition: "von+dat",
        example: "Ausgehend von den vorliegenden Informationen können wir eine Prognose erstellen. Ausgehend von den aktuellen Trends lässt sich ablesen, dass sich der Markt verändert.",
        translation: "based on, starting from, assuming"
        },
        {
        word: "übersichtlich",
        preposition: "",
        example: "Die Webseite ist übersichtlich gestaltet, damit die Benutzer schnell die benötigten Informationen finden können. Der Bericht bietet eine übersichtliche Darstellung der wichtigsten Ergebnisse der Studie.",
        translation: "clear, clearly arranged, organized, easy to understand"
        },
        {
        word: "sich bewähren",
        preposition: "",
        example: "In der stressigen Situation während des Projekts hat er sich wirklich bewährt. Er musste sich in seinem neuen Job bewähren, indem er seine Fähigkeiten und Kentnisse unter Beweis stellte.",
        translation: "to prove oneself, to prove one's worth"
        },
        {
        word: "gleichermaßen",
        preposition: "",
        example: "Beide Schwestern sind gleichermaßen begabt in der Musik. In dieser Schule werden Sport und Kunst gleichermaßen gefördert.",
        translation: "equally, likewise, similarly, in the same way"
        },
        {
        word: "belastend",
        preposition: "",
        example: "Die ständigen finanziellen Probleme waren für sie sehr belastend. Die belastende Arbeitslast führte zu Erschöpfung und Stress.",
        translation: "burdensome, taxing, onerous"
        },
        {
        word: "empfinden",
        preposition: "",
        example: "Ich empfinde Freude, wenn ich Zeit mit meiner Familie verbringe. Er empfindet große Trauer über den Verlust seines besten Freundes.",
        translation: "to feel, to sense, to perceive"
        },
        {
        word: "sich zuspitzen",
        preposition: "",
        example: "Die politische Lage hat sich in den letzten Wochen dramatisch zugespitzt. Die wirtschaftlichen Probleme des Unternehmens haben sich über die Zeit stetig zugespitzt. Die Diskussion zwischen den beiden Parteien spitzte sich schnell zu einem Streit zu.",
        translation: "to escalate"
        },
        {
        word: "Ausstrahlung",
        preposition: "",
        example: "Ihre Ausstrahlung war so stark, dass alle sofort von ihr angezogen wurden. Der Schauspieler hat eine starke Bühnenpräsenz und eine charismatische Ausstrahlung.",
        translation: "aura, radiance, charm, presence, charisma"
        },
        {
        word: "gängig",
        preposition: "",
        example: "Das ist eine gängige Praxis in dieser Branche. In vielen Ländern sind bestimmte Bräuche und Traditionen gängig.",
        translation: "common, usual, widespread"
        },
        {
        word: "gradlinig",
        preposition: "",
        example: "Seine gradlinige Art zu kommunizieren macht es leicht, mit ihm zusammenzuarbeiten. Ihr gradliniger Ansatz hat dazu beigetragen, das Problem schnell zu lösen.",
        translation: "straightforward, direct"
        },
        {
        word: "anwenden",
        preposition: "",
        example: "Ich werde diese Technik in meinem Projekt anwenden. Du solltest diese Methode auf verschiedene Situationen anwenden. Sie wandte die neuen mathematischen Konzepte an, um das Problem zu lösen. Es ist wichtig, das erlernte Wissen in der Praxis anzuwenden, um es wirklich zu verstehen.",
        translation: "to apply, to use, to employ"
        },
        {
        word: "eingreifen",
        preposition: "",
        example: "Die Polizei musste eingreifen, um die Auseinandersetzung zu beenden. Es ist wichtig, frühzeitig einzugreifen, um schlimmere Folgen zu verhindern.",
        translation: "to intervene, to interfere, to step in, to take action"
        },
        {
        word: "Fürsorge",
        preposition: "",
        example: "Die Fürsorge für ältere Menschen ist in unserer Gesellschaft sehr wichtig. Die Mutter zeigt ihren Kindern liebevolle Fürsorge und Aufmerksamkeit.",
        translation: "care, attention, concern"
        },
        {
        word: "sonst",
        preposition: "",
        example: "Geh nach Hause, sonst verpasst du den Zug. Ich muss einkaufen gehen, sonst haben wir nichts zum Abendessen.",
        translation: "otherwise"
        },
        {
        word: "Aufsicht",
        preposition: "",
        example: "Die Lehrer hatten während des Ausflugs die Aufsicht über die Schüler. Der Chef hat die Aufsicht über das Projekt, um sicherzustellen, dass alles nach Plan verläuft.",
        translation: "supervision, monitoring, management, control"
        },
        {
        word: "bevorzugen",
        preposition: "",
        example: "Die Nutzer bevorzugen es, Werbung zu sehen, anstatt zu bezahlen. Der Kunde bevorzugte einen schnelleren Versand für seine Bestellung. Viele Menschen bevorzugen Online-Shopping gegenüber dem Einkauf im Geschäft.",
        translation: "to prefer, to favor"
        },
        {
        word: "kostendeckend",
        preposition: "",
        example: "Die Preise für unsere Dienstleistungen sind so gestaltet, dass sie kostendeckend sind. Das Unternehmen muss sicherstellen, dass seine Preise kostendeckend sind, um profitabel zu sein.",
        translation: "cost-covering, self-sustaining"
        },
        {
        word: "sich aufhalten",
        preposition: "",
        example: "Wir haben uns im Park aufgehalten, bis es dunkel wurde. Die Gäste können sich im Aufenthaltsraum des Hotels aufhalten, während sie auf ihr Zimmer warten.",
        translation: "to stay, to remain, to linger, to be located, to dwell"
        },
        {
        word: "zuständig",
        preposition: "",
        example: "Die Abteilung für Kundenservice ist für alle Anfragen und Beschwerden zuständig. Der Projektleiter ist für die Koordination des Teams zuständig. Bitte wenden Sie sich an die zuständige Abteilung für weitere Informationen.",
        translation: "responsible, competent, in charge"
        },
        {
        word: "genehmigen",
        preposition: "",
        example: "Die Stadtverwaltung hat den Bauantrag für das neue Gebäude genehmigt. Bitte lassen Sie mich wissen, ob Ihnen der vorgeschlagene Termin genehm ist.",
        translation: "to approve, to authorize, to permit"
        },
        {
        word: "beneiden",
        preposition: "",
        example: "Ich beneide sie um ihre Fähigkeit, so selbstbewusst aufzutreten. Sie beneidete ihre Freundin um deren luxuriösen Lebensstil. Es ist nicht gesund, andere Menschen um ihre Besitztümer zu beneiden.",
        translation: "to envy, to desire, to be jealous of, to covet"
        },
        {
        word: "vorbehaltlos",
        preposition: "",
        example: "Ich unterstütze deine Idee vorbehaltlos, sie hat großes Potential. Seine Hilfe war vorbehaltlos und hat uns in dieser schwierigen Zeit sehr geholfen.",
        translation: "unreserved, unconditional, unreservedly"
        },
        {
        word: "bevormunden",
        preposition: "",
        example: "Sie bevormunden ihre Kinder zu sehr und lassen ihnen keine Freiheit, eigene Entscheidungen zu treffen. Eltern sollten ihre Kinder ermutigen, selbstständig zu handeln, anstatt sie ständig zu bevormunden.",
        translation: "to patronize, to domineer, to control"
        },
        {
        word: "sich gut verstehen",
        preposition: "",
        example: "Wir verstehen uns gut, obwohl wir verschiedene Meinungen haben. Sie verstehen sich seit Jahren sehr gut und teilen viele Interessen. Es ist wichtig, dass Mitarbeiter und Vorgesetzte sich gut verstehen, um effektiv zusammenarbeiten zu können.",
        translation: "to get along, to understand each other"
        },
        {
        word: "graben",
        preposition: "",
        example: "Die Kinder haben einen tiefen Graben im Sandkasten gegraben. Die Arbeiter graben ein Loch für das Fundament des neuen Gebäudes.",
        translation: "to dig"
        },
        {
        word: "verlegen",
        preposition: "",
        example: "Wir müssen das Treffen verlegen, da es terminlich nicht passt. Er hat die Blumen auf den Tisch verlegt. Der Autor hat beschlossen, sein neues Buch zu verlegen.",
        translation: "to reschedule, to lay, to place, to publish"
        },
        {
        word: "das kommt gar nicht in Frage",
        preposition: "",
        example: "Möchtest du am Wochenende Überstunden machen? - Nein, das kommt gar nicht in Frage, ich habe bereits andere Pläne. Könnten wir das Projekt früher abschließen? - Leider kommt das gar nicht in Frage, wir haben nicht genügend Ressourcen.",
        translation: "no way, that's out of question, that's not an option"
        },
        {
        word: "umsonst",
        preposition: "",
        example: "Er hat umsonst gewartet, denn sein Freund kam nicht. Das Konzert war umsonst, also bin ich hingegangen.",
        translation: "in vain, for nothing, for free"
        },
        {
        word: "Schrott",
        preposition: "",
        example: "Dieses Auto ist nur noch Schrott und nicht mehr fahrtüchtig. Ich habe meinen alten Computer entsorgt, weil er nur noch Schrott war.",
        translation: "junk, scrap"
        },
        {
        word: "eklig",
        preposition: "",
        example: "Der verdorbene Geruch aus dem Müll war wirklich eklig. Das Essen sah so eklig aus, dass ich es nicht probieren wollte.",
        translation: "disgusting, gross, repulsive"
        },
        {
        word: "sich beklagen",
        preposition: "",
        example: "Er beklagte sich über das schlechte Wetter und seine schlechte Laune. Die Kunden beklagten sich über den schlechten Service.",
        translation: "to complain, to lament"
        },
        {
        word: "Ausdauer",
        preposition: "",
        example: "Um ein Marathon zu laufen, braucht man eine gute körperliche Ausdauer. Mit Ausdauer und hartem Training können wir unsere Ziele erreichen.",
        translation: "endurance, perseverance, stamina"
        },
        {
        word: "nachlassen",
        preposition: "",
        example: "Die Intensität des Regens begann allmählich nachzulassen. Seine Konzentration ließ nach, als er müde war.",
        translation: "to diminish, to decrease, to weaken"
        },
        {
        word: "verspüren",
        preposition: "",
        example: "Ich verspüre eine große Freude, wenn ich meine Familie treffe. Nach dem langen Spaziergang verspürte sie Müdigkeit.",
        translation: "to feel, to sense"
        },
        {
        word: "in vollem Gange",
        preposition: "",
        example: "Die Vorbereitungen für das Festival sind in vollem Gange.",
        translation: "in full swing, in progress"
        },
        {
        word: "sich schminken",
        preposition: "",
        example: "Ich brauche ungefähr 15 Minuten, um mich morgens zu schminken.",
        translation: "to put on make up"
        },
        {
        word: "eintönig",
        preposition: "",
        example: "Die eintönige Landschaft auf der langen Autofahrt wurde irgendwann ermüdend.",
        translation: "monotonous, dull, repetitive"
        },
        {
        word: "Bestandteil",
        preposition: "",
        example: "Die Batterie ist ein wichtiger Bestandteil des elektrischen Autos. Diese Zutaten sind die wesentlichen Bestandteile des Rezepts. Das Eiweiß ist ein wichtiger Bestandteil einer ausgewogenen Ernährung.",
        translation: "component, part, element"
        },
        {
        word: "aufbewahren",
        preposition: "",
        example: "Lebensmittel sollten im Kühlschrank aufbewahrt werden, um ihre Frische zu erhalten. Wichtige Dokumente sollten sicher aufbewahrt werden, um sie vor Schäden zu schützen.",
        translation: "to store, to keep, to preserve"
        },
        {
        word: "derart",
        preposition: "",
        example: "Die Veranstaltung war derart interessant, dass ich bis zum Ende gebleiben bin. Seine Kreativität war derart beeindruckend, dass er für den Kunstpreis nominiert wurde.",
        translation: "such, in such a way"
    },
    {
        word: "Nebenverdienst",
        preposition: "",
        example: "Er hat einen Nebenverdienst als freiberuflicher Grafikdesigner, um seine Finanzen aufzubessern.",
        translation: "side job"
    },
    {
        word: "gemächlich",
        preposition: "",
        example: "Wir spazierten gemächlich durch den Park und genossen die Sonne.",
        translation: "leisurely, easygoing"
    },
    {
        word: "hetzen",
        preposition: "",
        example: "Er hetzte durch die Straßen, um den Bus noch zu erwischen. Die Mutter hetzte die Kinder, damit sie rechtzeitig zur Schule kamen.",
        translation: "to rush, to hurry"
    },
    {
        word: "verkraften",
        preposition: "",
        example: "Es war schwer für sie, den Verlust ihres geliebten Haustiers zu verkraften. Nach der Trennung musste er lernen, die emotionale Belastung zu verkraften.",
        translation: "to cope with, to manage, to handle, to bear"
    },
    {
        word: "sich kuscheln",
        preposition: "",
        example: "An kalten Winterabenden kuscheln wir uns gerne auf das Sofa und schauen Filme.",
        translation: "to cuddle, to snuggle"
    },
    {
        word: "zart",
        preposition: "",
        example: "Seine Stimme klang zart und beruhigend. Der Kuchen hatte eine zarte Textur und schmolz auf der Zunge.",
        translation: "delicate, gentle, soft, tender"
    },
    {
        word: "runterkommen",
        preposition: "",
        example: "Nach einem langen Arbeitstag hilft mir Musik, runterzukommen und abzuschalten.",
        translation: "to calm down, to unwind, to relax"
    },
    {
        word: "sich einlassen",
        preposition: "auf+akk",
        example: "Sie möchte sich nicht auf eine Beziehung einlassen, solange sie sich unsicher fühlt. Sich auf neue Ideen einzulassen kann zu persönlichen Wachstum führen. Es ist wichtig, sich auf unterschiedliche Meinungen einzulassen, um neue Perspektiven zu gewinnen.",
        translation: "to engage in, to get involved, to commit to, to open up to"
    },
    {
        word: "schweifen",
        preposition: "",
        example: "Während des Gesprächs kann sein Geist abschweifen, und an andere Dinge denken. Beim Speziergang lässt er gerne seine Gedanken schweifen und genießt die Natur. Sein Blick schweifte über die malerische Landschaft.",
        translation: "to wander, to stray, to drift"
    },
    {
        word: "lauschen",
        preposition: "",
        example: "Er lauschte heimlich an der Tür, um zu erfahren, worüber sie sprechen. Sie saß am Ufer des Sees und lauschte dem beruhigenden Geräusch der Wellen. Die Kinder lauschten gespannt den Geschichten des Erzählers.",
        translation: "to listen, to eavesdrop, to overhear"
    },
    {
        word: "sich beugen",
        preposition: "",
        example: "Er beugte sich vor, um den kleinen Gegenstand aufzuheben. Beim Yoga müssen wir uns oft beugen, um unsere Flexibilität zu verbessern.",
        translation: "to bend, to lean"
    },
    {
        word: "zutraulich",
        preposition: "",
        example: "Der Hund ist sehr zutraulich und kommt gerne zu Fremden, um gestreichelt zu werden. Die Katze wurde im Laufe der Zeit immer zutraulicher und ließ sich gerne streicheln.",
        translation: "friendly, affectionate, tame, docile"
    },
    {
        word: "zurückhaltend",
        preposition: "",
        example: "Sie ist eher zurückhaltend und spricht nicht oft über ihre persönlichen Angelegenheiten.",
        translation: "reserved, restrained, shy"
    },
    {
        word: "kündigen",
        preposition: "",
        example: "Ein Arbeitsvertrag kann durch den Arbeitnehmer oder den Arbeitgeber gekündigt werden. Er hat beschlossen, seinen alten Handyvertrag zu kündigen. Sie hat ihren Job gekündigt. Er hat seine Mitgliedschaft im Fitnessstudio gekündigt, weil er keine Zeit mehr für regelmäßiges Training hat.",
        translation: "to resign, to terminate, to cancel, to give notice"
    },
    {
        word: "nicht am Fleck treten",
        preposition: "",
        example: "Trotz vieler Bemühungen, scheint er mit seiner Arbeit nicht am Fleck zu treten. Die Firma ist entschlossen, in ihrer Entwicklung nicht am Fleck zu treten, sondern ständig nach Verbesserungen zu suchen.",
        translation: "not to make progress"
    },
    {
        word: "Absage",
        preposition: "",
        example: "Leider müssen wir Ihre Bewerbung mit einer Absage beantworten. Die Absage des Konzerts aufgrund von schlechtem Wetter enttäuschte viele Fans.",
        translation: "rejection, refusal, cancellation"
    },
    {
        word: "zusammenstellen",
        preposition: "",
        example: "Sie hat die Materialen zusammengestellt, um eine Präsentation vorzubereiten. Er hat ein Team zusammengestellt, um das Projekt effizient abzuschließen.",
        translation: "to assemble, to put together, to compile, to arrange"
    },
    {
        word: "abraten",
        preposition: "",
        example: "Ich rate dir dringend ab, diese gefährliche Route zu nehmen. Die Experten raten von der Verwendung dieses Produkts ab, da es gesundheitliche Risiken bergen kann. Ich muss dir leider davon abraten, diese riskante Investition zu tätigen.",
        translation: "to advise against, to discourage, to dissuade"
    },
    {
        word: "Aufwand",
        preposition: "",
        example: "Die Umsetzung dieses Projekts erfordert einen erheblichen personellen und finanziellen Aufwand. Der Aufwand für die Renovierung des Hauses war enorm.",
        translation: "effort, expense"
    },
        {
        word: "wagen",
        preposition: "",
        example: "Er wagt den Sprung über die Schlucht. Sie wagte es, ihre Meinung offen auszusprechen. Sie wagte es, ihren Traum zu verfolgen und ins Ausland zu ziehen.",
        translation: "to dare, to venture, to risk, to attempt"
    },
    {
        word: "sich zurechtfinden",
        preposition: "",
        example: "In einer neuen Stadt musste sie sich zunächst zurechtfinden. Es dauert eine Weile, bis man sich in der komplexen Software zurechtfindet. Ich hatte Schwierigkeiten, mich im neuen Job zurechtzufinden, aber mit der Zeit wurde es einfacher.",
        translation: "to find one's way, to manage, to get the hang of"
    },
    {
        word: "sich einschreiben",
        preposition: "für+akk",
        example: "Sie hat sich für den Sprachkurs an der Universität eingeschrieben. Mein Bruder hat beschlossen, sich für den Spanischkurs einzuschreiben, um seine Sprachkenntnisse zu verbessern.",
        translation: "to register, to enroll"
    },
    {
        word: "durchziehen",
        preposition: "",
        example: "Trotz der Schwierigkeiten hat er das Projekt erfolgreich durchgezogen. Wir müssen den Plan bis zum Ende durchziehen, um gute Ergebnisse zu erzielen.",
        translation: "to pull through, to carry out, to complete"
    },
    {
        word: "kurzerhand",
        preposition: "",
        example: "Statt zu warten, hat er kurzerhand ein Taxi genommen. Da das Restaurant voll war, haben wir kurzerhand beschlossen, woanders zu essen.",
        translation: "simply, on the spur of the moment, without further ado"
    },
    {
        word: "durchforsten",
        preposition: "",
        example: "Er durchforstete das Internet nach Informationen über sein Lieblingsthema. Die Polizei durchforstete den Wald nach Spuren des Verbrechers.",
        translation: "to search thoroughly"
    },
    {
        word: "gefasst sein",
        preposition: "",
        example: "Trotz der unerwarteten Situation war er erstaunlich gefasst. In schwierigen Situationen ist es wichtig, ruhig zu bleiben und gefasst zu sein.",
        translation: "to be composed, to be collected, to be calm"
    },
    {
        word: "reizvoll",
        preposition: "",
        example: "Die malerische Landschaft und die charmanten Dörfer machen diese Region zu einem äußerst reizvollen Reiseziel.",
        translation: "attractive"
    },
    {
        word: "kreieren",
        preposition: "",
        example: "Sie konnte wunderbare Kunstwerke kreieren, die die Herzen der Betrachter berührten.",
        translation: "to create, to design"
    },
    {
        word: "stimmig",
        preposition: "",
        example: "Die Argumente des Redners waren stimmig und überzeugend. Die gesamte Präsentation war stimmig und gut strukturiert, was das Verständnis des Themas erleichterte.",
        translation: "coherent, consistent"
    },
    {
        word: "in Eigenregie",
        preposition: "",
        example: "Er hat das Projekt in Eigenregie durchgeführt und großartige Ergebnisse erzielt. Sie renovierten ihr Haus in Eigenregie, ohne die Hilfe von Fachleuten.",
        translation: "on one's own, independently"
    },
    {
        word: "sich befassen",
        preposition: "",
        example: "Er möchte sich mit den Herausforderungen des Klimawandels befassen. Die Forscher befassen sich seit Jahren mit der Entwicklung neuer Technologien. Die Schülerinnen und Schüler sollten sich intensiv mit dem Thema Umweltschutz befassen.",
        translation: "to deal with, to engage with"
    },
    {
        word: "Häftling",
        preposition: "",
        example: "Der Häftling verbüßt seine Strafe für einen Raubüberfall. Der Häftling wurde nach seiner Entlassung in die Gesellschaft wiedereingegliedert.",
        translation: "inmate"
    },
    {
        word: "veranlassen",
        preposition: "",
        example: "Seine Aussage veranlasste eine gründliche Untersuchung des Vorfalls. Die schlechten Arbeitsbedingungen veranlassten die Arbeiter, für bessere Rechte zu kämpfen.",
        translation: "to cause, to prompt"
    },
    {
        word: "vergehen",
        preposition: "",
        example: "Die Zeit vergeht schnell, wenn man Spaß hat. Er wurde für sein Vergehen bestraft. Sein Interesse am Thema ist im Laufe der Jahre vergegangen.",
        translation: "to pass, to fly by, wrongdoing, to wane"
    },
    {
        word: "abhalten",
        preposition: "",
        example: "Die Polizei konnte die Demonstranten nicht am Eindringen in das Gebäude abhalten. Nichts kann mich davon abhalten, meine Ziele zu erreichen.",
        translation: "to prevent, to deter"
    },
    {
        word: "unsachgemäß",
        preposition: "",
        example: "Die unsachgemäße Verwendung dieses Werkzeugs kann zu Verletzungen führen. Die unsachgemäße Lagerung von Lebensmittel kann zu Verderb führen.",
        translation: "improper"
    },
    {
        word: "vorweisen",
        preposition: "",
        example: "Er kann beeindruckende Referenzen vorweisen. Das Unternehmen kann stolz auf sein Wachstum in den letzten Jahren vorweisen. Die Bewerber müssen ihre Qualifikationen und Erfahrungen vorweisen.",
        translation: "to demonstrate, to show"
    },
    {
        word: "verweisen",
        preposition: "",
        example: "Der Lehrer verwies den Schüler aus dem Klassenzimmer wegen störenden Verhaltens. Der Arzt verwies den Patienten an einen Spezialisten für weitere Untersuchungen. Der Artikel verweist auf eine Studie, die kürzlich veröffentlicht wurde.",
        translation: "to refer, to point out, to dismiss, to expel, to cite"
    },
    {
        word: "schlank",
        preposition: "",
        example: "Sie hat eine natürliche Veranlagung, schlank zu sein. In diesem Fitnessmagazin findest du Tipps, wie du schlank bleibst. Das neue Smartphone-Modell ist sehr schlank und leicht.",
        translation: "slim"
    },
    {
        word: "erwerben",
        preposition: "",
        example: "Er hat kürzlich einen Master-Abschluss erworben. Sie möchten ein neues Auto erwerben. Diese Fähigkeiten können im Laufe der Zeit erworben werden.",
        translation: "to acquire, to obtain"
    },
    {
        word: "Betreuung",
        preposition: "",
        example: "Die Betreuung der Kinder erfolgt durch erfahrene Erzieher. Seniorenheime bieten eine umfassende Betreuung für ältere Menschen.",
        translation: "care, support, supervision"
    },
    {
        word: "unterbringen",
        preposition: "",
        example: "Wir müssen einen geeigneten Ort finden, um die Gäste unterzubringen. Die Schule konnte alle Schüler in ihren Klassen unterbringen. Die Organisation konnte die Flüchtlinge in Notunterkünften unterbringen.",
        translation: "to accommodate, to house"
    },
    {
        word: "ausgestattet sein",
        preposition: "",
        example: "Das Ferienhaus ist gut ausgestattet mit modernen Geräten. Unser Konferenzraum ist für Präsentationen vollständig ausgestattet.",
        translation: "to be equipped with, to have certain features or amenities"
    },
    {
        word: "sich wegbleiben",
        preposition: "",
        example: "Er musste sich wegen Krankheit von der Arbeit wegbleiben. Bitte bleib heute von der Schule weg, wenn du dich nicht gut fühlst.",
        translation: "to stay away, to be absent from a place or situation"
    },
    {
        word: "wimmeln",
        preposition: "",
        example: "Der Marktplatz wimmelt von Menschen am Samstagsmorgen. Der Park wimmelt von Vögeln und Insekten in den Sommermonaten.",
        translation: "to swarm, to teem, to be filled with a large number of things or people"
    },
    {
        word: "Frist",
        preposition: "",
        example: "Die Frist zur Einreichung der Bewerbungen ist der 10. Nov. Bitte beachten Sie die Frist für die Abgabe Ihrer Hausarbeit.",
        translation: "deadline, time limit"
    },
    {
        word: "auswendig",
        preposition: "",
        example: "Sie kann das Gedicht auswendig aufsagen. Ich habe die Vokabeln auswendig gelernt, um die Prüfung zu bestehen. Sie lernte den Text auswendig für die Präsentation.",
        translation: "by heart, from memory"
    },
    {
        word: "abprüfen",
        preposition: "",
        example: "Der Lehrer wird die Schüler am Ende des Semesters abprüfen. Der Techniker wird das Gerät gründlich abprüfen, um den Fehler zu finden.",
        translation: "to test, to examine"
    },
        {
        word: "ausgeglichen",
        preposition: "",
        example: "Er ist ein sehr ausgeglichener Mensch und lässt sich leicht aus der Ruhe bringen. Yoga hilft vielen Menschen, einen ausgeglichenen Geist und Körper zu bewahren. Das Budget des Unternehmens ist ausgeglichen und weist keine großen Defizite auf.",
        translation: "balanced, even-tempered"
    },
    {
        word: "locker",
        preposition: "",
        example: "Nach getaner Arbeit können wir uns in der Lounge entspannen und es locker angehen. Er hat immer einen locker-freundlichen Umgang mit seinen Kollegen. Er trägt gerne lockere Kleidung im Sommer.",
        translation: "relaxed, loosely"
    },
    {
        word: "bestaunen",
        preposition: "",
        example: "Die Besucher konnten die beeindruckenden Kunstwerke im Museum bestaunen. Vom Aussichtspunkt aus konnten wir den atemberaubenden Sonnenuntergang bestaunen.",
        translation: "to marvel at, to admire in amazement"
    },
    {
        word: "abschaffen",
        preposition: "",
        example: "Die Regierung plant, das Gesetz zur Steuererhebung abzuschaffen. Die Firma wird alte Produktlinien abschaffen und sich auf neue Innovationen konzentrieren.",
        translation: "to abolish, to get rid of, to eliminate"
    },
    {
        word: "verfrachten",
        preposition: "",
        example: "Die Firma wird die Waren per Schiff verfrachten. Die Fracht wurde auf Lastwagen verfrachtet und zum Hafen gebracht. Die Arbeiter verfrachteten die Waren vom Lager zum LKW.",
        translation: "to transport, to ship"
    },
    {
        word: "Gedränge",
        preposition: "",
        example: "Das Gedränge in der U-Bahn zur Stoßzeit kann manchmal sehr unangenehm sein. Das Gedränge vor dem Konzertgelände war beeindruckend. Aufgrund des Gedränges in der U-Bahn musste ich ein paar Stationen zu Fuß gehen.",
        translation: "crowd"
    },
    {
        word: "umdrehen",
        preposition: "",
        example: "Bitte umdrehen, dass Etikett zeigt nach hinten. Die Pfannkuchen sind bereit zum Umdrehen, wenn sie goldbraun sind. Auf halbem Weg bemerkte er seinen Fehler und drehte um, um den richtigen Weg zu nehmen.",
        translation: "to turn, to flip, to turn around"
    },
    {
        word: "erklettern",
        preposition: "",
        example: "Die Bergsteiger versuchten, den Gipfel des Berges zu erklettern. Die Bergsteigerin hat die steile Wand erfolgreich erklettert.",
        translation: "to climb up, to scale"
    },
    {
        word: "gewaltig",
        preposition: "",
        example: "Der Sturm brachte eine gewaltige Zerstörung in der Stadt. Das Feuer breitete sich mit gewaltiger Geschwindigkeit aus.",
        translation: "enormous, tremendous, powerful, mighty"
    },
    {
        word: "sich behelfen",
        preposition: "",
        example: "In der Wildnis musste er sich behelfen und Nahrung aus der Natur finden. Ohne Internetzugang müssen wir uns anderweitig behelfen, um Informationen zu finden.",
        translation: "to manage, to make do"
    },
    {
        word: "gelangen",
        preposition: "",
        example: "Der Wanderer gelangt schließlich zum Gipfel des Berges. Durch harte Arbeit und Entschlossenheit können Ziele gelangen. Die Nachricht gelangte schnell zu den Medien und verbreitete sich überall.",
        translation: "to reach, to attain"
    },
    {
        word: "ableiten",
        preposition: "",
        example: "Aus diesen Daten können wir wichtige Informationen ableiten. Die Forscher konnten aus ihren Experimenten neue Erkentnisse ableiten.",
        translation: "to derive, to deduce, to infer"
    },
    {
        word: "sich ableiten",
        preposition: "",
        example: "Die Theorie leitet sich aus den experimentellen Ergebnissen ab. Der Begriff 'Elektrizität' leitet sich von dem griechischen Wort 'elektron' ab.",
        translation: "to be derived, to originate"
    },
    {
        word: "zwanglos",
        preposition: "",
        example: "Wir trafen uns zu einem zwanglosen Treffen in der Cafe. Die Veranstaltung hatte eine zwanglose Atmosphäre, jeder fühlte sich wohl. Wir hatten einen zwanglosen Abend mit Freunden, bei dem wir einfach nur gelacht und uns unterhalten haben.",
        translation: "casual, informal"
    },
    {
        word: "verwunderlich",
        preposition: "",
        example: "Es ist verwunderlich, wie schnell er diese schwierige Aufgabe gelöst hat. Die Ergebnisse der Studie waren äußerst verwunderlich. Es ist verwunderlich, dass er immer noch keine Antwort auf unsere Frage hat.",
        translation: "surprising, astonishing"
    },
    {
        word: "festgelegt",
        preposition: "",
        example: "Der Zeitpunkt für das Treffen wurde bereits festgelegt. Die Regeln und Vorschriften sind in diesem Vertrag festgelegt. Der Zeitplan für das Projekt ist festgelegt, und wir müssen uns daran halten.",
        translation: "fixed, determined"
    },
    {
        word: "altertümlich",
        preposition: "",
        example: "In dieser Region gibt es viele altertümliche Ruinen aus vergangenen Zeiten. Die Sprache in diesem Buch klingt ein wenig altertümlich, da es vor über hundert Jahren geschrieben wurde.",
        translation: "ancient, archaic, old-fashioned"
    },
    {
        word: "hervorheben",
        preposition: "",
        example: "In deinem Bericht solltest du die wichtigsten Punkte hervorheben. Der Künstler hat die Schönheit der Natur in seinem Gemälde hervorgehoben.",
        translation: "to emphasize, to highlight"
    },
    {
        word: "agieren",
        preposition: "",
        example: "Die Regierung muss in dieser Krise entschlossen agieren. Die Aktivisten agieren friedlich, um auf die Umweltprobleme aufmerksam zu machen. Das Unternehmen agiert proaktiv, um den Bedürfnissen seiner Kunden gerecht zu werden.",
        translation: "to act, to operate"
    },
    {
        word: "Absturz",
        preposition: "",
        example: "Der Absturz des Flugzeugs war tragisch und führte zu vielen Todesopfern. Die Software des Computers führte zu einem Absturz des Systems.",
        translation: "crash, fall"
    },
    {
        word: "Verlosung",
        preposition: "",
        example: "Der Verein organisiert eine Verlosung, um Geld für wohltätige Zwecke zu sammeln. Bei der Verlosung gewann sie einen Gutschein für das örtliche Restaurant.",
        translation: "raffle, lottery"
    },
    {
        word: "mitmachen",
        preposition: "",
        example: "Komm und mach bei unserem Teamprojekt mit. Willst du am Wettbewerb teilnehmen und mitmachen?",
        translation: "to participate, to join in"
    },
    {
        word: "Getreide",
        preposition: "",
        example: "Weizen ist eines der wichtigsten Getreide weltweit. Getreide ist eine wichtige Nahrungsquelle für die menschliche Bevölkerung weltweit.",
        translation: "grain"
    },
    {
        word: "Einrichtung",
        preposition: "",
        example: "Die Einrichtung eines Unternehmens erfordert eine klare Strategie. Das Pflegeheim ist eine Einrichtung, die älteren Menschen Betreuung und Unterstützung bietet. Die Einrichtung des Wohnzimmers ist modern und minimalistisch.",
        translation: "setup, establishment, organisation, furnishings"
    },
    {
        word: "ernsthaft",
        preposition: "",
        example: "Die Studenten arbeiten ernsthaft an ihren Studienprojekten. Er meinte es ernsthaft, als er um Verzeihung bat. Das ist ein ernsthaftes Problem, das wir angehen müssen.",
        translation: "serious, earnestly"
    },
    {
        word: "spicken",
        preposition: "",
        example: "Spicken bei Prüfungen ist nicht erlaubt und kann zu schweren Konsequenzen führen. Sie wurde erwischt, als sie versuchte, während der Klausur zu spicken.",
        translation: "to cheat, to crib"
    },
    {
        word: "Aufzeichnung",
        preposition: "",
        example: "Die Aufzeichnung des Vortrags steht auf der Website zur Verfügung. Ich führe eine Aufzeichnung meiner Ausgaben, um mein Budget im Blick zu behalten. Die Polizei überprüfte die Aufzeichnungen der Sicherheitskameras, um den Vorfall zu untersuchen.",
        translation: "record, recording"
    },
    {
        word: "mindern",
        preposition: "",
        example: "Die Maßnahmen zur Energieeffizienz sollen den Energieverbrauch mindern. Die neuen Gesetze sollen die Umweltauswirkungen mindern.",
        translation: "to reduce, to diminish"
    },
    {
        word: "vollkommen",
        preposition: "",
        example: "Sie ist vollkommen zufrieden mit ihrer Leistung bei der Prüfung. Das Kunstwerk ist ein Ausdruck vollkommener Schönheit. Sie ist eine vollkommene Gastgeberin, die immer dafür sorgt, dass sich ihre Gäste wohl fühlen.",
        translation: "perfectly, completely"
    },
    {
        word: "ungern",
        preposition: "",
        example: "Er ging ungern zur Arbeit, weil er krank war. Ich mache ungern Überstunden, aber manchmal ist es notwendig.",
        translation: "reluctantly, unwillingly"
    },
         {
        word: "verzeihen",
        preposition: "",
        example: "Es ist wichtig, anderen zu verzeihen, um Frieden zu finden. Ich habe einen Fehler gemacht und hoffe, dass du mir verzeihst. Sie konnte ihm nicht sofort verzeihen, aber mit der Zeit heilten ihre Wunden.",
        translation: "to forgive"
    },
    {
        word: "an etwas Gefallen finden",
        preposition: "an+dat",
        example: "Sie hat Gefallen an der Kunst gefunden und besucht regelmäßig Ausstellungen. Kinder finden oft Gefallen an einfachen, kreativen Spielen.",
        translation: "to take a liking to, to find pleasure in"
    },
    {
        word: "schildern",
        preposition: "",
        example: "Kannst du mir bitte die Situation schildern? Er schilderte seine Reiseabenteuer in einem spannenden Bericht. Die Zeugin schilderte ausführlich, was sie beobachtet hatte.",
        translation: "to describe, to portray"
    },
    {
        word: "verwandeln",
        preposition: "",
        example: "Der Zauberer verwandelte die Maus in eine Kutsche. Der Künstler verwandelte die weiße Leinwand in ein lebendiges Kunstwerk. Die Technologie hat die Art und Weise, wie wir kommunizieren, vollständig verwandelt.",
        translation: "to transform, to change"
    },
    {
        word: "Spaltung",
        preposition: "",
        example: "Die politische Spaltung in der Gesellschaft hat zu Konflikten geführt. Die Spaltung der Meinungen führte zu Uneinigkeit innerhalb des Teams.",
        translation: "split, division, schism"
    },
    {
        word: "Aufbewahrung",
        preposition: "",
        example: "Die Aufbewahrung von Lebensmitteln im Kühlschrank verlängert ihre Haltbarkeit. Die Aufbewahrung wichtiger Dokumente in einem Tresor ist ratsam.",
        translation: "storage, keeping"
    },
    {
        word: "zwingen",
        preposition: "",
        example: "Die schlechten Wetterbedingungen zwangen uns, unseren Ausflug abzusagen. Der Lehrer zwingt die Schüler nicht, aber er ermutigt sie, ihr Bestes zu geben.",
        translation: "to force, to compel"
    },
    {
        word: "nötigen",
        preposition: "",
        example: "Er versuchte, mich dazu zu nötigen, etwas zu unterschreiben. Die Umstände nötigten sie dazu, ihre Meinung zu ändern.",
        translation: "to compel, to force"
    },
    {
        word: "verleumden",
        preposition: "",
        example: "Es ist rechtlich nicht akzeptabel, jemanden grundlos zu verleumden. Die Verleumdung führte zu einem erheblichen Rufschaden für das Unternehmen.",
        translation: "to slander, to defame"
    },
    {
        word: "bloßstellen",
        preposition: "",
        example: "Sie versuchte nicht, ihn vor anderen Leuten zu bloßstellen. Das Bloßstellen von Mitschülern sollte in der Schule nicht toleriert werden.",
        translation: "to expose, to embarrass, to humiliate"
    },
    {
        word: "verspotten",
        preposition: "",
        example: "Es ist unhöflich, andere Menschen zu verspotten. Die Kinder verspotteten den neuen Schüler wegen seiner ungewöhnlichen Kleidung.",
        translation: "to mock, to ridicule, to scorn"
    },
    {
        word: "beschimpfen",
        preposition: "",
        example: "Die beiden Nachbarn begannen, sich heftig zu beschimpfen. Der wütende Autofahrer begann, den anderen Fahrer zu beschimpfen, als dieser ihn schneidet. Sie fühlte sich verletzt, als ihre Kollegen sie während der Besprechung beschimpften.",
        translation: "to insult"
    },
    {
        word: "im Nachhinein",
        preposition: "",
        example: "Im Nachhinein betrachtet, war es die richtige Entscheidung. Er erkannte erst im Nachhinein, wie wichtig diese Erfahrung für ihn war.",
        translation: "in retrospect, in hindsight"
    },
    {
        word: "nachträglich",
        preposition: "",
        example: "Die Änderungen wurden nachträglich am Vertrag vorgenommen. Nachträglich stellte sich heraus, dass die Information unvollständig war.",
        translation: "retrospectively, subsequently"
    },
    {
        word: "Verdacht",
        preposition: "",
        example: "Der Verdacht auf Betrug führte zu einer Untersuchung. Ihr Verhalten erregte den Verdacht der Polizei. Sie hatte einen leisen Verdacht, dass ihr Freund sie belogen hatte.",
        translation: "suspicion, doubt"
    },
    {
        word: "nichts zu suchen haben",
        preposition: "",
        example: "In einer professionellen E-Mail sollten persönliche Anmerkungen nichts zu suchen haben. Auf einer Hochzeit haben Streitereien und Konflikte nichts zu suchen. In einer Bibliothek haben laute Gespräche nichts zu suchen.",
        translation: "to have no place, shouldn't be"
    },
    {
        word: "anhalten",
        preposition: "",
        example: "Der Zug wird gleich anhalten, um Passagiere ein- und aussteigen zu lassen. Bitte halten Sie an der roten Ampel an.",
        translation: "to stop, to halt"
    },
    {
        word: "entlasten",
        preposition: "",
        example: "Die Einstellung neuer Mitarbeiter soll das bestehende Team entlasten. Die Therapie hat ihm geholfen, seine Schmerzen zu entlasten. Durch regelmäßige Pausen kann man die Muskeln entlasten.",
        translation: "to relieve, to alleviate"
    },
    {
        word: "erbringen",
        preposition: "",
        example: "Die Firma muss qualitativ hochwertige Produkte erbringen, um Kunden zufriedenzustellen. Die Studierenden müssen Leistungen erbringen, um ihre Abschlüsse zu erhalten. Er hat erbracht, was von ihm erwartet wurde. Die Firma konnte die geforderte Leistung erbringen.",
        translation: "to provide, to achieve"
    },
    {
        word: "Zusteller",
        preposition: "",
        example: "Der Zusteller brachte das Paket pünktlich zur Haustür.",
        translation: "delivery person, courier"
    },
    {
        word: "angesichts",
        preposition: "",
        example: "Angesichts des schlechten Wetters haben wir unseren Ausflug abgesagt. Angesichts der aktuellen Lage müssen wir vorsichtig sein. Angesichts der hohen Nachfrage mussten wir unsere Produktion erhöhen.",
        translation: "in view of, given, considering"
    },
    {
        word: "klagen",
        preposition: "",
        example: "Er klagte über die Arbeitsbedingungen in seiner Firma. Die Mieterin klagte beim Vermieter über den Wasserschaden in ihrer Wohnung.",
        translation: "to complain, to file a complaint"
    },
    {
        word: "somit",
        preposition: "",
        example: "Die Prüfung war sehr schwer, somit habe ich viel Zeit mit dem Lernen verbracht. Sie hat hart gearbeitet und somit gute Ergebnisse erzielt. Das Unternehmen hat hohe Investitionen getätigt, somit wird auch ein höherer Gewinn erwartet.",
        translation: "therefore, thus, consequently"
    },
    {
        word: "aufregend",
        preposition: "",
        example: "Der Film war wirklich aufregend und hat mich von Anfang bis Ende gefesselt.",
        translation: "exciting, thrilling"
    },
    {
        word: "mahnen",
        preposition: "",
        example: "Er mahnte seine Freunde zur Vorsicht, als sie in den Wald gingen. Der Lehrer mahnte die Schüler, ihre Hausaufgaben pünktlich abzugeben.",
        translation: "to urge, to remind"
    },
    {
        word: "fällig",
        preposition: "",
        example: "Die Miete ist am ersten Tag des Monats fällig. Die Rechnung ist noch nicht fällig, sondern erst in zwei Wochen.",
        translation: "due"
    },
    {
        word: "entgehen",
        preposition: "",
        example: "Der Dieb konnte der Polizei entgehen und entkam unerkannt. So entgeht ihm auch nicht, wenn eines seiner Models an ein Foto-Shooting auf einer exotischen Insel noch ein paar Tage Urlaub dranhängt.",
        translation: "to escape, to elude, to evade"
    },
    {
        word: "lindern",
        preposition: "",
        example: "Das Medikament kann Schmerzen lindern. Die Massage half, seine Verspannungen zu lindern.",
        translation: "to relieve, to ease"
    },
    {
        word: "Reiz",
        preposition: "",
        example: "Der Reiz des Abenteuers zog sie in die Ferne. Der Reiz dieser Landschaft liegt in ihrer unberührten Schönheit. Der Körper bekommt durch das Mittel einen Reiz, sich selbst zu helfen.",
        translation: "stimulus, appeal, attraction"
    },
    {
        word: "behaupten",
        preposition: "",
        example: "Er behauptet, dass er das Spiel gewonnen hat, aber es gibt keine Beweise. Die Zeugin behauptet, den Täter gesehen zu haben.",
        translation: "to assert, to allege, to claim"
    },
        {
        word: "hervorrufen",
        preposition: "",
        example: "Der Film kann starke Emotionen hervorrufen. Der starke Geruch des Essens rief sein Verlangen nach einem Snack hervor.",
        translation: "to evoke, to induce, to cause, to trigger"
    },
    {
        word: "eindringen",
        preposition: "",
        example: "Die Diebe versuchten, in das Gebäude einzudringen. Der Regen konnte durch das undichte Dach eindringen.",
        translation: "to penetrate, to intrude"
    },
    {
        word: "Trägheit",
        preposition: "",
        example: "Die Trägheit des Fahrzeugs machte das Anfahren schwierig. Trägheit kann dazu führen, dass man weniger produktiv ist. Die Hitze des Sommers führte zu einer gewissen Trägheit bei den Arbeitern.",
        translation: "inertia, sluggishness, laziness"
    },
    {
        word: "Abwehr",
        preposition: "",
        example: "Die Mannschaft zeigte eine starke Abwehr gegen die Angriffe des Gegners. In Zeiten von Krankheiten ist ein gut funktionierendes Immunsystem unsere beste Abwehr.",
        translation: "defense, resistance"
    },
    {
        word: "verdächtig",
        preposition: "",
        example: "Die ungewöhnlichen Geräusche in der Nacht klingen verdächtig. Er wirkte nervös und sein Verhalten kam mir verdächtig vor.",
        translation: "suspicious"
    },
    {
        word: "unheimlich",
        preposition: "",
        example: "Das verlassene Haus hatte eine unheimliche Atmosphäre. Die Handlung des Films hatte eine unheimliche Ähnlichkeit zu realen Ereignissen.",
        translation: "uncanny, eerie, creepy, spooky"
    },
    {
        word: "entlarven",
        preposition: "",
        example: "Die Untersuchung half dabei, die Korruption innerhalb der Organisation zu entlarven.",
        translation: "to expose, to reveal, to unmask"
    },
    {
        word: "sich ausmalen",
        preposition: "",
        example: "Ich kann mir gut ausmalen, wie aufregend das Abenteuer für dich ist. Es ist schwer, sich die Zukunft auszumalen. Er malte sich aus, wie es wäre, in einem fernen Land zu leben.",
        translation: "to imagine, to picture"
    },
    {
        word: "vermessen",
        preposition: "",
        example: "Die Ingenieure müssen das Gelände vermessen, bevor sie mit dem Bau beginnen können. Der Vermesser hat das Grundstück genau vermessen, um die genauen Abmessungen zu bestimmen.",
        translation: "to measure, to assess"
    },
    {
        word: "sich passen",
        preposition: "",
        example: "Die Schuhe passen mir gut. Die Farben des Bilderrahmens passen gut zum Teppich. Die Argumente in seinem Vortrag passen gut zusammen.",
        translation: "to fit together, to match"
    },
    {
        word: "allmählich",
        preposition: "",
        example: "Der Patient erholte sich allmählich von der Krankheit. Die Sonne verschwand allmählich hinter den Bergen. Er gewöhnte sich allmählich an das Leben in der neuen Stadt.",
        translation: "gradually, slowly"
    },
    {
        word: "quälend",
        preposition: "",
        example: "Die quälende Ungewissheit über das Schicksal ihrer Angehörigen belastete sie schwer. Die quälenden Gedanken ließen ihm keine Ruhe, selbst in seinen Träumen fand er keine Erleichterung.",
        translation: "agonizing, distressing, torturous"
    },
    {
        word: "sich belohnen",
        preposition: "mit+dat",
        example: "Nach einer Woche harter Arbeit hat er sich mit einem entspannten Wochenende belohnt. Sie hat sich nach dem bestandenen Examen mit einem besonderen Geschenk belohnt.",
        translation: "to reward oneself"
    },
    {
        word: "sich ablenken",
        preposition: "",
        example: "Um Stress abzubauen, lenkt sie sich gerne mit einem Buch ab. Wenn du dich nicht konzentrieren kannst, versuche dich nicht zu sehr abzulenken. Um sich von den Sorgen des Alltags abzulenken, entschied sie sich, einen Spaziergang im Park zu machen.",
        translation: "to distract, to divert, to take one's mind off"
    },
    {
        word: "abgewinnen",
        preposition: "",
        example: "Trotz des langweiligen Unterrichts konnte er positive Erfahrungen abgewinnen. Sie konnte ihrem Chef einige interessante Informationen abgewinnen, indem sie geschickt Fragen stellte. Der Verkäufer versuchte, dem Kunden ein paar zusätzliche Details über das Produkt abzugewinnen, um ihn zum Kauf zu überzeugen.",
        translation: "to derive, to extract, to gain, to obtain"
    },
    {
        word: "beflügeln",
        preposition: "",
        example: "Seine Worte haben mich wirklich beflügelt, meine Träume zu verfolgen. Der Erfolg des Teams hat die ganze Gemeinschaft beflügelt.",
        translation: "to inspire, to uplift"
    },
    {
        word: "auf etwas ankommen",
        preposition: "auf+akk",
        example: "Der Erfolg des Projekts kann darauf ankommen, wie gut das Team zusammenarbeitet. Es kommt darauf an, wie gut du für die Prüfung vorbereitet bist.",
        translation: "to depend on, to come down to"
    },
    {
        word: "ändern an",
        preposition: "an+dat",
        example: "Wir müssen etwas an diesem Plan ändern. Kannst du bitte etwas an deinem Verhalten ändern?",
        translation: "to change about, to alter about"
    },
    {
        word: "anregen",
        preposition: "zu+dat",
        example: "Die Diskussion regte zu neuen Ideen an. Das Buch regt dazu an, über das eigene Leben nachzudenken. Die Diskussionen während des Seminars regten die Schüler an, über das Thema nachzudenken.",
        translation: "to stimulate, to inspire, to motivate, to encourage"
    },
    {
        word: "ansehen als",
        preposition: "als",
        example: "Viele Menschen sehen ihn als Experten auf seinem Gebiet an. Diese Entdeckung wurde lange Zeit als bahnbrechend angesehen.",
        translation: "to consider as, to regard as"
    },
    {
        word: "auffordern",
        preposition: "",
        example: "Sie wurde höflich aufgefordert, an der Veranstaltung teilzunehmen. Der Lehrer forderte die Schüler auf, ihre Hausaufgaben abzugeben.",
        translation: "to invite to do, to request to, to ask"
    },
    {
        word: "winzig",
        preposition: "",
        example: "Sie fand einen winzigen Käfer auf den Blumen. Das Baby hatte winzige Hände und Füße.",
        translation: "tiny, miniscule"
    },
    {
        word: "beachtlich",
        preposition: "",
        example: "Die Fortschritte, die er gemacht hat, sind beachtlich. Das Unternehmen verzeichnete in diesem Quartal beachtliche Gewinne.",
        translation: "remarkable, considerable, noteworthy"
    },
    {
        word: "herauskitzeln",
        preposition: "",
        example: "Der Reporter versuchte, weitere Details aus dem schüchternen Zeugen herauszukitzeln.",
        translation: "to coax out, to elicit"
    },
    {
        word: "sich ekeln",
        preposition: "vor+dat",
        example: "Sie ekelte sich vor dem Anblick der schmutzigen Küche. Mir ekelt es vor Spinnen.",
        translation: "to be disgusted, to feel repulsed"
    },
    {
        word: "nachwirken",
        preposition: "",
        example: "Das traumatische Erlebnis hatte lange Zeit nachgewirkt und beeinflusste ihr tägliches Leben. Die Folgen des Krieges wirkten noch lange nach.",
        translation: "to have a long term effect"
    },
    {
        word: "vertreiben",
        preposition: "",
        example: "Die Familie wurde während des Krieges aus ihrer Heimat vertrieben. Der Bauer vertreibt die Vögel von seinen Feldern, um seine Ernte zu schützen. Sie versucht, ihre negativen Gedanken zu vertreiben, indem sie sich auf positive Dinge konzentriert.",
        translation: "to expel, to drive away, to banish"
    },
    {
        word: "sich aufmachen",
        preposition: "",
        example: "Nachdem sie ihr Gepäck gepackt hatte, machte sie sich früh am Morgen auf, um den langen Weg zum Gipfel zu beginnen. Wir sollten uns langsam aufmachen, um rechtzeitig anzukommen.",
        translation: "to set off, to get ready to go"
    },
    {
        word: "ankommen",
        preposition: "",
        example: "Nach einer langen Reise kamen sie endlich in ihrem Urlaubsziel an. Der Zug wird um 15:30 Uhr am Bahnhof ankommen.",
        translation: "to arrive"
    },
    {
        word: "abschrecken",
        preposition: "",
        example: "Die erhöhten Kosten könnten potenzielle Käufer abschrecken. Die Warnung vor den Gefahren des Rauchens soll Jugendliche abschrecken, mit dem Rauchen anzufangen.",
        translation: "to deter, to discourage"
    },
    {
        word: "allgegenwärtig",
        preposition: "",
        example: "Lebensgefahr schreckte kaum einen ab, denn die war allgegenwärtig. In unserer modernen Gesellschaft ist Technologie allgegenwärtig.",
        translation: "omnipresent, ubiquitous"
    },
        {
        word: "Waisen",
        preposition: "",
        example: "Das Waisenhaus kümmert sich um die Bedürfnisse der Waisen und bietet ihnen Unterkunft und Unterstützung.",
        translation: "orphan"
    },
    {
        word: "zwangsläufig",
        preposition: "",
        example: "Bei anhaltendem Regen wird das zwangsläufig zu Überschwemmungen führen. Veränderungen in der Technologie haben zwangsläufig Auswirkungen auf die Arbeitswelt. Wenn du den ganzen Tag in der Sonne bleibst, wirst du zwangsläufig einen Sonnenbrand bekommen.",
        translation: "inevitably, necessarily"
    },
    {
        word: "außer Acht lassen",
        preposition: "",
        example: "Ich kann seine Bemerkungen nicht einfach außer Acht lassen. Er ließ die Warnungen seiner Freunde außer Acht und fuhr trotzdem betrunken nach Hause.",
        translation: "to disregard, to ignore"
    },
    {
        word: "entmutigend",
        preposition: "",
        example: "Die vielen Schwierigkeiten waren ziemlich entmutigend. Es ist entmutigend, immer wieder dieselben Fehler zu machen.",
        translation: "discouraging, disheartening"
    },
    {
        word: "Anregung",
        preposition: "",
        example: "Seine Worte waren eine gute Anregung für mich, weiterzumachen. Der Artikel über nachhaltige Lebensweise lieferte viele Anregungen für Veränderungen in ihrem eigenen Leben.",
        translation: "inspiration, stimulus"
    },
    {
        word: "vermitteln",
        preposition: "",
        example: "Als Lehrer ist es wichtig, komplexe Konzepte einfach zu vermitteln, damit die Schüler sie verstehen können. Sie konnte ihre Begeisterung für das Thema durch ihre lebendige Präsentation vermitteln.",
        translation: "to convey, to communicate"
    },
    {
        word: "vorübergehend",
        preposition: "",
        example: "Die Baustelle wird vorübergehend den Verkehr beeinträchtigen. Aufgrund von Renovierungsarbeiten wurde die Bibliothek vorübergehend geschlossen.",
        translation: "temporary"
    },
    {
        word: "einwandfrei",
        preposition: "",
        example: "Die Arbeit des Technikers war einwandfrei, und das Problem wurde behoben. Die Qualität ihrer Arbeit ist einwandfrei, sie liefert immer Ergebnisse von höchster Güte.",
        translation: "flawless, perfect"
    },
    {
        word: "Verführung",
        preposition: "",
        example: "Die Verführung durch das Angebot war zu groß, um widerstehen zu können.",
        translation: "temptation, seduction"
    },
    {
        word: "zunächst",
        preposition: "",
        example: "Zunächst sollten wir die Grundlagen verstehen, bevor wir in die Details gehen.",
        translation: "initially, at first"
    },
    {
        word: "gelangen",
        preposition: "",
        example: "Nach einer langen Wanderung gelangen wir endlich zum Gipfel. Wie kann man am schnellsten zum Flughafen gelangen?",
        translation: "to arrive, to reach"
    },
    {
        word: "ausbrechen",
        preposition: "",
        example: "Der Brand brach in der Nacht aus und griff schnell auf benachbarte Gebäude über.",
        translation: "to break out, to erupt"
    },
    {
        word: "übergreifen",
        preposition: "",
        example: "Das Feuer griff schnell auf die umliegenden Wälder über. Die Unruhen in der Stadt griffen auf andere Stadtteile über und führten zu weiteren Ausschreitungen.",
        translation: "to spread, to extend"
    },
    {
        word: "vernichten",
        preposition: "",
        example: "Das Feuer vernichtete über 200 Wohn- und Geschäftshäuser rings um den Marktplatz. Der Wirbelsturm hat ganze Stadtviertel vernichtet und zahlreiche Häuser zerstört.",
        translation: "to destroy, to annihilate"
    },
    {
        word: "unterbringen",
        preposition: "",
        example: "Die Flüchtlinge wurden in einem Notquartier untergebracht. Der Manager wird Sie in einem Hotel unterbringen, während Ihr Haus renoviert wird.",
        translation: "to accommodate, to house"
    },
    {
        word: "kichern",
        preposition: "",
        example: "Die Kinder konnten nicht aufhören zu kichern, als der Clown seine witzigen Tricks vorführte.",
        translation: "to giggle, to chuckle"
    },
    {
        word: "nachvollziehen",
        preposition: "",
        example: "Ich kann seine Entscheidung nicht nachvollziehen. Es ist wichtig, die Gefühle anderer Menschen nachzuvollziehen.",
        translation: "to understand, to comprehend"
    },
    {
        word: "herzzerreißend",
        preposition: "",
        example: "Die herzzerreißende Geschichte des verlorenen Hundes ließ viele Menschen weinen. Der Film erzählt eine herzzerreißende Liebesgeschichte, die noch lange in Erinnerung bleibt.",
        translation: "heartbreaking, heart-wrenching"
    },
    {
        word: "in etwas geraten sein",
        preposition: "in+akk",
        example: "Er ist in finanzielle Schwierigkeiten geraten. Die Präsidentin erklärte ihren Rücktritt, nachdem sie wegen Aussagen zum Umgang mit Antisemitismus massiv in die Kritik geraten war. Der Wanderer war in einen Schneesturm geraten und verlor die Orientierung.",
        translation: "to have gotten into, to have ended up in"
    },
    {
        word: "belassen",
        preposition: "",
        example: "Ich habe die Möbel im Wohnzimmer so belassen, wie sie waren. Wir haben die Diskussion belassen und sind zu einem Kompromiss gekommen. Der Gärtner beschloss, den Baum in seinem natürlichen Zustand zu belassen und keine zusätzlichen Schnitte vorzunehmen.",
        translation: "to leave, to leave as is"
    },
    {
        word: "besessen",
        preposition: "",
        example: "Er ist besessen von der Idee, das Rätsel zu lösen. Er war besessen von seinem Ziel, die Welt zu bereisen, und opferte dafür seine gesamten Ersparnisse. Seine Besessenheit für das Sammeln von Briefmarken kannte keine Grenzen; er hatte eine riesige Sammlung in seinem Haus.",
        translation: "obsessed"
    },
    {
        word: "tüfteln",
        preposition: "an+dat",
        example: "Er tüftelt gerne an elektronischen Geräten herum. Der Ingenieur tüftelte stundenlang an der Konstruktion, um das Problem zu lösen.",
        translation: "to tinker, to work on meticulously"
    },
    {
        word: "umfangreich",
        preposition: "",
        example: "Das Handbuch enthält eine umfangreiche Anleitung zur Nutzung des Programms. Sie hat eine umfangreiche Sammlung von Kunstwerken aus verschiedenen Epochen.",
        translation: "extensive, comprehensive"
    },
    {
        word: "Vergütung",
        preposition: "",
        example: "Die Vergütung für Überstunden sollte im Arbeitsvertrag festgelegt sein. Die Firma bietet ihren Mitarbeitern eine angemessene Vergütung für ihre Arbeit.",
        translation: "remuneration, compensation"
    },
    {
        word: "sich auf etwas festlegen",
        preposition: "auf+akk",
        example: "Nach langen Überlegungen hat er sich darauf festgelegt, sein eigenes Unternehmen zu gründen. Wir sollten uns jetzt auf einen konkreten Plan festlegen.",
        translation: "to decide on, to commit to"
    },
    {
        word: "in die Tat umsetzen",
        preposition: "",
        example: "Ideen sind wichtig, aber es ist entscheidend, sie auch in die Tat umzusetzen. Die Fähigkeit, Pläne effektiv in die Tat umzusetzen, ist eine Schlüsselqualifikation für Führungskräfte.",
        translation: "to implement, to put into action"
    },
    {
        word: "über Bord werfen",
        preposition: "",
        example: "In schwierigen Zeiten sollten wir nicht sofort unsere Pläne über Bord werfen, sondern nach alternativen Lösungen suchen. Es wäre unklug, bewährte Praktiken ohne gründliche Überlegung einfach über Bord zu werfen. Nachdem er seine Pläne mehrmals geändert hatte, beschloss er schließlich, alle bisherigen Entwürfe über Bord zu werfen und von Grund auf neu anzufangen.",
        translation: "to throw overboard, to abandon"
    },
    {
        word: "ohne Rücksicht auf",
        preposition: "auf+akk",
        example: "Er handelte ohne Rücksicht auf die Konsequenzen, was zu unerwarteten Problemen führte. Der Manager handelte ohne Rücksicht auf die Bedürfnisse seiner Mitarbeiter und setzte die neuen Richtlinien ohne Konsultation um. Sie entschied sich, ihren eigenen Weg zu gehen, ohne Rücksicht auf die Warnungen ihrer Freunde und Familie.",
        translation: "without regard to"
    },
    {
        word: "aus den Augen verlieren",
        preposition: "",
        example: "In der Hektik des Alltags dürfen wir nicht die wichtigen Ziele aus den Augen verlieren. In dem hektischen Arbeitsalltag verliert man oft die wichtigen Details aus den Augen. Sie hat ihre Freunde aus den Augen verloren, seit sie in eine andere Stadt gezogen ist.",
        translation: "to lose sight of, to lose track of, to overlook"
    },
        {
        word: "klappen",
        preposition: "",
        example: "Ich hoffe, dass das Treffen morgen wie geplant klappt. Die Präsentation hat gut geklappt, und das Team war mit den Ergebnissen zufrieden. Das Treffen mit dem Kunden ist klasse geklappt, und wir haben einen neuen Auftrag erhalten.",
        translation: "to succeed, to work out"
    },
    {
        word: "Absprache",
        preposition: "",
        example: "Die genaue Uhrzeit für das Treffen war eine Absprache zwischen den Teammitgliedern. Wir hatten eine Absprache darüber, wer welche Aufgaben im Projekt übernimmt.",
        translation: "arrangement, agreement, understanding"
    },
    {
        word: "Entwurf",
        preposition: "",
        example: "Der Architekt präsentierte den ersten Entwurf für das neue Gebäude. Bevor wir das endgültige Produkt herstellen, erstellen wir zunächst einen Entwurf.",
        translation: "draft, design, blueprint"
    },
    {
        word: "Neugier",
        preposition: "",
        example: "Kinder zeigen oft eine natürliche Neugier gegenüber ihrer Umgebung.",
        translation: "curiosity"
    },
    {
        word: "Treue",
        preposition: "",
        example: "Die Treue der Mitarbeiter zum Unternehmen trug wesentlich zum langfristigen Erfolg bei. Der Hund zeigte seine Treue, indem er seinem Besitzer überallhin folgte.",
        translation: "loyalty, faithfulness"
    },
    {
        word: "Vorgabe",
        preposition: "",
        example: "Die Vorgaben für das Projekt wurden sorgfältig definiert, um klare Richtlinien für das Team festzulegen. Die Vorgabe des Lehrers war klar: Die Schüler sollten ihre Aufsätze bis zum Ende der Woche abgeben.",
        translation: "guideline, directive, instruction"
    },
    {
        word: "abstimmen",
        preposition: "über+akk",
        example: "Die Mitglieder werden über die Änderung der Satzung abstimmen. Wir müssen über den Vorschlag des Projektleiters abstimmen. Die Parteien im Parlament müssen sich abstimmen, um über Gesetzesänderungen zu entscheiden.",
        translation: "to vote, to decide, to agree upon"
    },
    {
        word: "sich aufteilen",
        preposition: "in+dat",
        example: "Der Kuchen lässt sich in gleich große Stücke aufteilen. Die Gruppe wird sich aufteilen, um die verschiedenen Aufgaben effizient zu erledigen. Wir sollten die Ressourcen gerecht aufteilen, damit jeder davon profitiert.",
        translation: "to divide, to split up"
    },
    {
        word: "zukommen",
        preposition: "",
        example: "Schwierigkeiten können uns im Leben zukommen. Diese Aufgabe wird in Zukunft auf dich zukommen. Ein großes Erbe wird dem jüngsten Sohn zukommen.",
        translation: "to befall, to come, to be assigned"
    },
    {
        word: "ausschließlich",
        preposition: "",
        example: "Das Produkt wird ausschließlich online verkauft. Dieser Raum ist ausschließlich für Mitarbeiter zugänglich.",
        translation: "exclusively, solely"
    },
    {
        word: "gelassen",
        preposition: "",
        example: "Sie blieb gelassen, auch in stressigen Situationen. Sie nahm die Kritik gelassen entgegen und reagierte gelassen darauf. Er ist bekannt für seine gelassene Art, mit Stress umzugehen.",
        translation: "calm, composed"
    },
    {
        word: "unvoreingenommen",
        preposition: "",
        example: "Die Jury sollte unvoreingenommen über die Bewerbungen entscheiden. Als Richter muss er unvoreingenommen bleiben und die Fakten objektiv bewerten.",
        translation: "unbiased, impartial, unprejudiced"
    },
    {
        word: "voreilig",
        preposition: "",
        example: "Es wäre voreilig, jetzt schon Schlussfolgerungen zu ziehen. Voreilige Entscheidungen können zu Problemen führen. Er traf eine voreilige Entscheidung, ohne alle Fakten zu berücksichtigen.",
        translation: "premature, hasty"
    },
    {
        word: "befürworten",
        preposition: "",
        example: "Der Bürgermeister befürwortet das Projekt zur Verbesserung der Verkehrssituation. Die Lehrer befürworteten die Einführung neuer Unterrichtsmethoden in der Schule.",
        translation: "to advocate, to support, to endorse"
    },
    {
        word: "für etwas halten",
        preposition: "für+akk",
        example: "Ich halte ihn für einen talentierten Künstler. Ich halte ihn für einen klugen und vertrauenswürdigen Freund. Viele Menschen halten den Klimawandel für eine ernsthafte Bedrohung für die Zukunft der Erde.",
        translation: "to consider, to regard as"
    },
    {
        word: "nachahmenswert",
        preposition: "",
        example: "Sein Engagement für soziale Projekte ist nachahmenswert. Für wen ist das Beispiel Englands nachahmenswert?",
        translation: "worthy of imitation, commendable"
    },
    {
        word: "zuhauf",
        preposition: "",
        example: "Die Besucher kamen zuhauf zur Veranstaltung. Bei dem Festival gab es Essen und Getränke zuhauf.",
        translation: "in large quantities, in abundance"
    },
    {
        word: "strömen",
        preposition: "",
        example: "Die Besucher sind zuhauf in die Ausstellungshalle geströmt. Die Menschen strömen zum Bahnhof, um den Zug zu erwischen.",
        translation: "to stream, to flow"
    },
    {
        word: "schlendern",
        preposition: "",
        example: "An einem sonnigen Tag kann man wunderbar durch die Altstadt schlendern. Am Sonntagnachmittag schlenderten sie gemeinsam durch den Park.",
        translation: "to stroll, to wander leisurely"
    },
    {
        word: "allerlei",
        preposition: "",
        example: "Im Laden gibt es allerlei interessante Produkte. Auf dem Markt gibt es allerlei frisches Gemüse und Obst.",
        translation: "all sorts of, various"
    },
    {
        word: "abwegig",
        preposition: "",
        example: "Seine abwegigen Behauptungen wurden von den Experten widerlegt. Seine Theorie wurde von den meisten als abwegig angesehen. Die Idee, dass Katzen fliegen können, erscheint vielen Menschen abwegig.",
        translation: "absurd, unreasonable"
    },
    {
        word: "begünstigen",
        preposition: "",
        example: "Die neuen Regelungen begünstigen die frühere Einschulung von hochbegabten Kindern. Die milden Temperaturen begünstigen das Wachstum der Pflanzen in dieser Region. Die Regierung hat Maßnahmen ergriffen, um den Bau neuer Unternehmen zu begünstigen.",
        translation: "to favor, to promote"
    },
    {
        word: "belegen",
        preposition: "",
        example: "Die Studien belegen den Zusammenhang zwischen Rauchen und Gesundheitsrisiken. Der Historiker konnte seine These mit zahlreichen archäologischen Funden belegen.",
        translation: "to provide evidence or proof"
    },
    {
        word: "ausschlaggebend",
        preposition: "",
        example: "Ihre Erfahrung war ausschlaggebend für die Auswahl des Teams. Nach Ansicht von Experten ist das Alter eines Kindes nicht das ausschlaggebende Kriterium.",
        translation: "determining, crucial, decisive"
    },
    {
        word: "spüren",
        preposition: "",
        example: "Ich spüre die Wärme der Sonne auf meiner Hand. Sie spürte einen leichten Schmerz in ihrem Rücken.",
        translation: "to feel, to sense"
    },
    {
        word: "umwandeln",
        preposition: "",
        example: "Der Ingenieur konnte die Daten in ein anderes Format umwandeln. Die Fabrik wandelt Rohstoffe in fertige Produkte um.",
        translation: "to convert, to transform"
    },
    {
        word: "vermuten",
        preposition: "",
        example: "Ich vermute, dass er den Zug verpasst hat. Ich vermute, dass er heute Abend zu spät kommen wird, weil er oft in Verkehrsstaus gerät.",
        translation: "to assume, to suspect, to presume"
    },
    {
        word: "Stiftung",
        preposition: "",
        example: "Die Stiftung setzt sich für den Umweltschutz ein. Die Stiftung unterstützt bedürftige Familien mit Bildungsstipendien.",
        translation: "foundation"
    },
    {
        word: "verfügen",
        preposition: "",
        example: "Über diese Mittel verfügt die Organisation für gemeinnützige Projekte. Einige Tiere verfügen über Fähigkeiten, die der Mensch nicht besitzt. Der Manager kann über das Budget der Abteilung verfügen. Er verfügt über ausgezeichnete Führungsqualitäten.",
        translation: "to have, to command, to have at one's disposal"
    },
    {
        word: "ausbauen",
        preposition: "",
        example: "Die Firma plant, ihre Geschäftstätigkeiten im Ausland auszubauen. Unter Bodyhacking versteht man eine technische Methode, um die menschlichen Fähigkeiten auszubauen. Die Firma plant, ihre Produktionskapazitäten auszubauen, um der steigenden Nachfrage gerecht zu werden.",
        translation: "to expand, to develop, to improve"
    },
    {
        word: "erzeugen",
        preposition: "",
        example: "Diese Maschine kann saubere Energie erzeugen. Diese Maschine erzeugt saubere Energie aus Sonnenlicht.",
        translation: "to generate, to produce, to create"
    },
         {
        word: "verweisen",
        preposition: "",
        example: "Der Lehrer konnte auf das Nachschlagewerk verweisen. Die Menschen, denen er begegnet, verweisen ihn aus dem Geschäft oder Kino. Der Artikel verweist auf frühere Studien, die ähnliche Ergebnisse gezeigt haben.",
        translation: "to direct, to point out, to refer"
    },
    {
        word: "zuschieben",
        preposition: "",
        example: "Man kann nicht alle Probleme einfach dem Chef zuschieben. Er versuchte, mir die Schuld für den Fehler zuzuschieben. Der Chef hat ihm die Verantwortung für das Projekt zugeschoben.",
        translation: "to blame, to assign"
    },
    {
        word: "den Schwarzen Peter zuschieben",
        preposition: "",
        example: "Nach dem Fehler im Projekt versuchten sie, sich gegenseitig den Schwarzen Peter zuzuschieben. Statt die Verantwortung zu übernehmen, versuchte er, den Schwarzen Peter seinem Kollegen zuzuschieben.",
        translation: "to pass the buck"
    },
    {
        word: "heranwachsen",
        preposition: "",
        example: "Kinder heranwachsen zu sehen, ist eine faszinierende Erfahrung. Sie ist zu einer selbstbewussten jungen Frau herangewachsen.",
        translation: "to grow up, to mature"
    },
    {
        word: "anspruchsvoll",
        preposition: "",
        example: "Die Aufgabe war sehr anspruchsvoll, aber sie hat sie erfolgreich gemeistert. Diese Aufgabe ist sehr anspruchsvoll und erfordert viel Konzentration.",
        translation: "demanding, challenging"
    },
    {
        word: "ansprechen",
        preposition: "",
        example: "Er sprach seinen Kollegen höflich an, als er das Büro betrat. Die Werbung soll die jüngere Zielgruppe ansprechen. Bitte sprich das nicht in meiner Gegenwart an.",
        translation: "to address, to speak to, to appeal to, to attract, to mention"
    },
    {
        word: "Anregung",
        preposition: "",
        example: "Vielen Dank für deine Anregungen zur Verbesserung des Projekts. Er erhielt viele Anregungen von Freunden für sein neues Buchprojekt. Die Diskussion im Meeting führte zu vielen kreativen Anregungen für das zukünftige Projekt.",
        translation: "suggestion, inspiration, stimulus"
    },
    {
        word: "zur Verfügung stellen",
        preposition: "",
        example: "Die Firma wird alle notwendigen Ressourcen zur Verfügung stellen, um das Projekt zu unterstützen. Die Firma stellt ihren Mitarbeitern kostenloses Mittagessen zur Verfügung. Der Lehrer stellt den Schülern zusätzliches Übungsmaterial zur Verfügung.",
        translation: "to make available, to provide"
    },
    {
        word: "Auszeichnung",
        preposition: "",
        example: "Sie erhielt eine Auszeichnung für ihre herausragenden Leistungen in der Wissenschaft. Die Auszeichnung für den besten Film wurde an das Drama verliehen.",
        translation: "award, distinction"
    },
    {
        word: "Weltall",
        preposition: "",
        example: "Das Weltall fasziniert die Menschheit schon seit Jahrhunderten. Die Astronauten erforschen das Weltall auf der Internationalen Raumstation.",
        translation: "space, cosmos"
    },
    {
        word: "pendeln",
        preposition: "",
        example: "Ich pendle jeden Tag mit dem Zug zur Arbeit. Er pendelt täglich mit dem Zug zwischen seinem Wohnort und seinem Arbeitsplatz.",
        translation: "to commute"
    },
    {
        word: "bedauern",
        preposition: "",
        example: "Sie bedauerte es zutiefst, dass sie ihn nicht rechtzeitig gewarnt hatte. Sie bedauerte es, dass sie sich nicht für den Job beworben hatte.",
        translation: "to regret, to sorrow"
    },
    {
        word: "unverhältnismäßig",
        preposition: "",
        example: "Die Strafe für das vergleichsweise kleine Vergehen erschien ihm unverhältnismäßig. Die Reaktion der Regierung auf die Demonstrationen wurde von vielen als unverhältnismäßig angesehen.",
        translation: "disproportionate, out of proportion"
    },
    {
        word: "gelegentlich",
        preposition: "",
        example: "Gelegentlich gehe ich am Wochenende ins Kino. Gelegentlich treffe ich mich mit alten Freunden zum Kaffee.",
        translation: "occasionally, sometimes"
    },
    {
        word: "auf etwas pochen",
        preposition: "auf+akk",
        example: "Er pochte darauf, dass sein Standpunkt gehört wurde. Die Gewerkschaften pochen auf bessere Arbeitsbedingungen für ihre Mitglieder.",
        translation: "to insist on"
    },
    {
        word: "Missmut",
        preposition: "",
        example: "Sein Missmut war offensichtlich, als er die Nachricht erhielt. Sie konnte ihren Missmut über die Entscheidung des Chefs nicht verbergen.",
        translation: "displeasure, discontent"
    },
    {
        word: "eben",
        preposition: "",
        example: "Ich habe ihn eben gesehen. Das ist eben das Problem. Dann machen wir das eben so.",
        translation: "just, right now, exactly, well, well then"
    },
    {
        word: "mit etwas durchkommen",
        preposition: "mit+dat",
        example: "Er dachte, er könnte mit seinen Lügen durchkommen, aber irgendwann wurde die Wahrheit aufgedeckt. Sie versuchte, mit ihrem betrügerischen Verhalten durchzukommen, wurde aber schließlich erwischt.",
        translation: "to get away with"
    },
    {
        word: "durchkommen",
        preposition: "",
        example: "Trotz der Herausforderungen gelang es ihr, die Prüfung durchzukommen. Der Rettungsdienst musste durch den dichten Verkehr kommen, um rechtzeitig am Unfallort anzukommen. Es war schwierig, mit dem lauten Hintergrundlärm durchzukommen, um den Gesprächspartner am Telefon zu verstehen.",
        translation: "to get through, to pass, to overcome"
    },
    {
        word: "sich aufhalten",
        preposition: "",
        example: "Sie halten sich oft im Park auf, um frische Luft zu schnappen. Er hält sich oft in der Bibliothek auf, um zu studieren. Die Touristen halten sich normalerweise in der Altstadt auf, um die Sehenswürdigkeiten zu besichtigen.",
        translation: "to stay, to be, to linger"
    },
    {
        word: "unentgeltlich",
        preposition: "",
        example: "Die Broschüren können unentgeltlich am Eingang abgeholt werden. Der Zugang zum Park ist unentgeltlich für alle Besucher.",
        translation: "free, free of charge"
    },
    {
        word: "empfangen",
        preposition: "",
        example: "Ich habe gestern einen Brief von BAMF empfangen. Das Mobiltelefon kann Signale empfangen, auch wenn es sich im Flugmodus befindet.",
        translation: "to receive, to get"
    },
    {
        word: "ausführlich",
        preposition: "",
        example: "Der Bericht enthält eine ausführliche Analyse der Marktrends. Die Lehrerin gab den Schülern eine ausführliche Anleitung zur Durchführung des Experiments.",
        translation: "detailed, comprehensive"
    },
    {
        word: "abwechslungsreich",
        preposition: "",
        example: "Das Restaurant bietet eine abwechslungsreiche Auswahl an Gerichten aus verschiedenen Ländern. Das Buffet bot eine abwechslungsreiche Auswahl an Speisen aus verschiedenen Ländern. Ihr Job ist sehr abwechslungsreich, jeden Tag macht sie etwas anderes.",
        translation: "varied, diverse"
    },
    {
        word: "einschenken",
        preposition: "",
        example: "Schenk mir auch ein Glas ein. Kannst du mir bitte noch ein Glas Wasser einschenken? Sie schenkte sich einen Becher heißen Tee ein, um sich aufzuwärmen.",
        translation: "to pour a drink"
    },
    {
        word: "ausrichten",
        preposition: "",
        example: "Die Veranstalter richteten das Event sorgfältig aus, um sicherzustellen, dass alles reibungslos verläuft. Er musste die Antenne neu ausrichten, um besseren Empfang zu bekommen.",
        translation: "to organize, to align"
    },
    {
        word: "sich begeben",
        preposition: "",
        example: "Nach dem Abendessen begaben sie sich in den Garten, um den Sonnenuntergang zu genießen. Der König und seine Gefolgschaft begaben sich feierlich in die große Halle. Sobald die Sirene ertönte, begaben sich alle Angestellten zum Notausgang.",
        translation: "to proceed, to go, to make one's way"
    },
    {
        word: "sich an etwas festhalten",
        preposition: "an+dat",
        example: "In schwierigen Zeiten halten wir uns oft an unseren Freunden fest, um Unterstützung zu finden. Während des Sturms hielt er sich an einem Baum fest, um nicht umgeworfen zu werden.",
        translation: "to hold on to, to cling to"
    },
    {
        word: "drüben",
        preposition: "",
        example: "Das Geschäft drüben hat die besten Croissants in der Stadt. Der Supermarkt drüben ist immer gut besucht. Ich habe gehört, dass drüben ein neues Cafe eröffnet wurde.",
        translation: "over there, across, on the other side"
    },
         {
        word: "sich berauschen",
        preposition: "",
        example: "Er berauschte sich am Wochenende mit seinen Freunden. Jugendliche, die sich berauschen, sind anfälliger für riskantes Verhalten.",
        translation: "to get intoxicated, to get high"
    },
    {
        word: "anfällig",
        preposition: "",
        example: "Kinder sind anfällig für Erkältungen. Alte Gebäude sind oft anfällig für Schäden durch Feuchtigkeit und Schimmel.",
        translation: "susceptible, vulnerable, prone"
    },
    {
        word: "teilhaben",
        preposition: "",
        example: "Wir möchten, dass jeder Mitarbeiter an der Entscheidungsfindung teilhaben kann. Die Kinder durften an dem Experiment teilhaben und lernten dabei viel über die Natur.",
        translation: "to participate in, to be involved in"
    },
    {
        word: "demnach",
        preposition: "",
        example: "Der Bericht zeigt einen deutlichen Anstieg der Nachfrage, demnach sollten wir unsere Produktion erhöhen. Sie hat alle Voraussetzungen erfüllt, demnach können wir das Projekt wie geplant fortführen.",
        translation: "thus, therefore, consequently"
    },
    {
        word: "aufweisen",
        preposition: "",
        example: "Die Studie wies signifikante Unterschiede zwischen den beiden Gruppen auf. Diese Region weist eine hohe Artenvielfalt auf.",
        translation: "to exhibit, to demonstrate"
    },
    {
        word: "beauftragen",
        preposition: "",
        example: "Die Firma hat mich damit beauftragt, die Marktforschung für ihr neues Produkt durchzuführen. Wir werden ein Bauunternehmen beauftragen, um das neue Bürogebäude zu errichten. Ich habe meine Schwester damit beauftragt, mir ein neues Buch zu kaufen.",
        translation: "to assign, to commission, to instruct"
    },
    {
        word: "Ruf",
        preposition: "",
        example: "Sein Ruf als zuverlässiger Geschäftsmann hat ihm geholfen, neue Kunden zu gewinnen. Der Ruf dieser Universität als führende Einrichtung für Forschung und Innovation ist weltweit bekannt.",
        translation: "reputation, standing"
    },
    {
        word: "ebenso wie",
        preposition: "",
        example: "Kindern und Jugendlichen sollten Musik-, Theater-, und Kunstprojekte angeboten werden ebenso wie flexible Hilfen bei Schulproblemen. Die Mitarbeiter arbeiten hart ebenso wie das Management. Die Sonne scheint heute genauso hell wie gestern.",
        translation: "just like, similarly to, just as, as well as"
    },
    {
        word: "Anregung",
        preposition: "",
        example: "Die Diskussionen im Seminar lieferten viele gute Anregungen für meine Forschungsarbeit. Ein Spaziergang im Park kann eine erfrischende Anregung für den Geist sein. Die Anregung meiner Freunde hat mich dazu inspiriert, ein neues Hobby auszuprobieren.",
        translation: "stimulus, inspiration"
    },
    {
        word: "sich auseinandersetzen",
        preposition: "mit+dat",
        example: "Die Politiker müssen sich mit den aktuellen Herausforderungen der Gesellschaft auseinandersetzen. Als Lehrer müssen wir uns mit den unterschiedlichen Lernbedürfnissen unserer Schüler auseinandersetzen.",
        translation: "to deal with, to grapple with, to engage with"
    },
    {
        word: "auffallen",
        preposition: "",
        example: "Die Fehler im Bericht fielen dem Professor sofort auf. Ihr außergewöhnlicher Stil ließ sie unter den anderen Kandidaten für die Rolle auffallen. Sein auffälliges rotes Haar lässt ihn in der Menschenmenge leicht auffallen.",
        translation: "to stand out, to catch the eye"
    },
    {
        word: "aufnahmefähig",
        preposition: "",
        example: "Kinder sind oft sehr aufnahmefähig für neue Sprache. Der Student zeigte sich als äußerst aufnahmefähig für komplexe mathematische Konzepte. Ein aufnahmefähiges Gedächtnis kann beim Erlernen neuer Fähigkeiten von Vorteil sein.",
        translation: "receptive, capable of learning, open-minded"
    },
    {
        word: "in erster Linie",
        preposition: "",
        example: "Bei der Entscheidung für ein neues Auto sind für mich in erster Linie Sicherheit und Zuverlässigkeit wichtig. Der Erfolg dieses Projekts hängt in erster Linie von ihrer Fähigkeit zur Zusammenarbeit ab.",
        translation: "above all, primarily"
    },
    {
        word: "Übergang",
        preposition: "",
        example: "Der Übergang von der Grundschule zur weiterführenden Schule kann für Kinder eine Herausforderung sein. Die Regierung plant den Bau einer Brücke, um den Übergang über den Fluss zu erleichtern. Der Übergang von der Nacht zum Tag ist in dieser Stadt besonders beeindruckend.",
        translation: "transition"
    },
    {
        word: "widerlegen",
        preposition: "",
        example: "Der Forscher konnte die Theorie mithilfe neuer Beweise widerlegen. Die Anwältin konnte die Aussagen des Zeugen erfolgreich widerlegen.",
        translation: "to refute"
    },
    {
        word: "sich verständigen",
        preposition: "",
        example: "Obwohl sie verschiedene Muttersprachen hatten, konnten sie sich gut verständigen. Die Delegationen mussten sich auf eine gemeinsame Lösung verständigen, um den Konflikt beizulegen.",
        translation: "to communicate, to reach an understanding, agreement"
    },
    {
        word: "sich vornehmen",
        preposition: "",
        example: "Ich habe mir vorgenommen, dieses Jahr mehr zu reisen. Sie hat sich vorgenommen, regelmäßig Sport zu treiben, um fit zu bleiben. Wir haben uns vorgenommen, unser Haus umzubauen.",
        translation: "to plan to do, to intend to do"
    },
    {
        word: "büffeln",
        preposition: "",
        example: "Ich muss heute den ganzen Tag büffeln, um mich auf die Prüfung vorzubereiten. Er hat die ganze Nacht durchgebüffelt, um für die Präsentation morgen vorbereitet zu sein. Sie sitzt seit Stunden im Büro und büffelt für die wichtige Prüfung nächste Woche.",
        translation: "to cram, to swot up"
    },
    {
        word: "Vorsatz",
        preposition: "",
        example: "Mein Vorsatz für das neue Jahr ist, gesünder zu leben. Er fasste den Vorsatz, jeden Tag eine Stunde zu lesen.",
        translation: "resolution, intent"
    },
    {
        word: "festlegen",
        preposition: "",
        example: "Wir müssen das Datum für das nächste Treffen festlegen. Er hat sich darauf festgelegt, jeden Tag eine Stunde zu trainieren.",
        translation: "to set, to determine"
    },
    {
        word: "sich entschließen",
        preposition: "",
        example: "Nach langem Überlegen hat sie sich entschlossen, das Angebot anzunehmen. Er entschloss sich, einen neuen Weg in seinem Leben einzuschlagen.",
        translation: "to decide, to resolve to"
    },
    {
        word: "vernünftig",
        preposition: "",
        example: "Es ist vernünftig, einen Regenschirm mitzunehmen, wenn es draußen regnet. Es wäre vernünftig, vor wichtigen Entscheidungen alle verfügbaren Informationen zu sammeln.",
        translation: "logical, reasonable"
    },
    {
        word: "verlässlich",
        preposition: "",
        example: "Er ist sehr verlässlich und erledigt seine Arbeit immer pünktlich. Ein verlässlicher Freund ist jemand, auf den man sich in guten und schlechten Zeiten verlassen kann. Dieses Auto ist sehr verlässlich und hat uns noch nie im Stich gelassen.",
        translation: "reliable, dependable"
    },
    {
        word: "einstehen",
        preposition: "",
        example: "Er ist bereit, für seine Fehler einzustehen. Als Eltern müssen wir für das Wohlergehen unserer Kinder einstehen. Ich stehe für seine Ehrlichkeit ein, er hat noch nie gelogen. Der Arbeitgeber steht für die Kosten des Arbeitsunfalls ein.",
        translation: "to stand up for, to take responsibility for, to guarantee, to cover the costs"
    },
    {
        word: "eingestehen",
        preposition: "",
        example: "Er konnte nicht länger leugnen und musste seine Schuld eingestehen. Sie hat endlich eingestanden, dass sie Hilfe benötigt. Sie gestand ein, dass sie die Aufgabe vergessen hatte.",
        translation: "to admit, to acknowledge"
    },
    {
        word: "bewältigen",
        preposition: "",
        example: "Ich kann jedes Problem bei der Arbeit bewältigen. Es kommen vielleicht Schwierigkeiten auf, aber wir werden sie bewältigen. Er arbeitet hart daran, seine Ängste zu überwinden und sie zu bewältigen.",
        translation: "to cope with, to overcome, to handle, to manage"
    },
        {
        word: "sich aufreiben",
        preposition: "",
        example: "Sie reibt sich an ihrem stressigen Job auf und hat keine Zeit für Entspannung. Er hat sich jahrelang an seiner Arbeit aufgerieben, ohne dass es ihm wirklich etwas gebracht hat. Ständige Sorgen um ihre Kinder reiben sie emotional auf.",
        translation: "to wear oneself out, to exhaust oneself"
    },
    {
        word: "restlich",
        preposition: "",
        example: "Die restlichen Kekse sind im Glas auf der Küchentheke. Wir haben noch genug Zeit, um die restlichen Aufgaben zu erledigen.",
        translation: "remaining, leftover"
    },
    {
        word: "sich von etwas erholen",
        preposition: "von+dat",
        example: "Nach der Grippe brauchte er einige Tage, um sich vollständig zu erholen. Die Wanderer machten eine Pause, um sich von dem steilen Aufstieg zu erholen. Sie hoffte, sich während ihres Urlaubs von den stressigen Arbeitswochen zu erholen.",
        translation: "to recover from"
    },
    {
        word: "klarkommen",
        preposition: "",
        example: "Ich muss lernen, mit meinem neuen Arbeitsplan klarzukommen. Trotz einiger Schwierigkeiten kam sie gut mit den neuen Kollegen klar. Es dauerte eine Weile, bis er mit dem Verlust seines Haustiers klarkam.",
        translation: "to manage, to cope, to get along"
    },
    {
        word: "Verlockung",
        preposition: "",
        example: "Die Verlockung des schnellen Geldes führte ihn dazu, riskante Investitionen zu tätigen. Trotz seiner guten Vorsätze konnte er der Verlockung des Nachtischs nicht widerstehen.",
        translation: "temptation, enticement, allure, appeal"
    },
    {
        word: "scheitern",
        preposition: "",
        example: "Trotz all seiner Bemühungen scheiterte das Projekt letztendlich. Sie scheiterte an der Prüfung, aber sie gab nicht auf und versuchte es erneut.",
        translation: "to fail, to be unsuccessful, to fall short, to come to nothing"
    },
    {
        word: "sich aufraffen",
        preposition: "",
        example: "Obwohl sie müde war, raffte sie sich auf und begann mit dem Haushalt. Er musste sich erst dazu aufraffen, ins Fitnessstudio zu gehen, aber danach fühlte er sich besser. Manchmal muss man sich einfach aufraffen und die Dinge erledigen, auch wenn man keine Lust dazu hat.",
        translation: "to motivate oneself, to gather one's strength, to muster up the energy"
    },
    {
        word: "anschließend",
        preposition: "",
        example: "Er ging einkaufen und anschließend zum Friseur. Zuerst musst du die Zutaten vorbereiten, anschließend kannst du mit dem Backen beginnen.",
        translation: "subsequently, afterwards, following that, then"
    },
    {
        word: "zurechtkommen",
        preposition: "",
        example: "Trotz der Herausforderungen des neuen Jobs kam er gut zurecht. Sie ist eine starke und unabhängige Frau, die mit allen Lebenssituationen zurechtkommt. Es ist wichtig, dass Kinder lernen, mit ihren Emotionen zurechtzukommen.",
        translation: "to cope, to manage, to handle, to deal with"
    },
    {
        word: "eigensinnig",
        preposition: "",
        example: "Er ist bekannt dafür, eigensinnig zu sein und sich nur schwer von seinen Überzeugungen abbringen zu lassen. Der Junge ist sehr eigensinnig und will immer seinen Willen durchsetzen. Sie blieb eigensinnig bei ihrer Meinung, obwohl alle anderen dagegen waren.",
        translation: "stubborn, headstrong, willful, determined"
    },
    {
        word: "grübeln",
        preposition: "",
        example: "Sie verbrachte Stunden damit, über ihr Leben zu grübeln und sich Sorgen zu machen. Sie saß stundenlang da und grübelte über ihre Zukunft nach.",
        translation: "to brood, to worry, to ponder, to think about intensively"
    },
    {
        word: "maßgeblich",
        preposition: "",
        example: "Seine Erfahrung in diesem Bereich war maßgeblich für den Erfolg des Projekts. Die Entscheidung des Richters hatte maßgeblichen Einfluss auf den Ausgang des Verfahrens.",
        translation: "significant, decisive"
    },
    {
        word: "auf einen Schlag",
        preposition: "",
        example: "Er hat sein gesamtes Geld auf einen Schlag verloren. Mit dem Lottogewinn waren all ihre finanziellen Sorgen auf einen Schlag verschwunden.",
        translation: "at one blow, at one stroke"
    },
    {
        word: "sich wenden",
        preposition: "an+akk",
        example: "In einer schwierigen Situation können Sie sich an mich wenden. Die Situation hat sich plötzlich gewendet, als neue Informationen auftauchten.",
        translation: "to turn to, to contact, to change direction"
    },
    {
        word: "angewöhnen",
        preposition: "",
        example: "Ich habe mir angewöhnt, jeden Morgen eine halbe Stunde früher aufzustehen, um Sport zu treiben. Er hat es sich angewöhnt, vor dem Schlafengehen ein Buch zu lesen. Es ist wichtig, Kindern gute Manieren anzugewöhnen.",
        translation: "to get into the habit of, to develop the habit of"
    },
    {
        word: "sich gewöhnen",
        preposition: "an+akk",
        example: "Es dauert eine Weile, bis man sich an das neue Klima gewöhnt hat. Die Kinder müssen sich erst an die neue Schule gewöhnen.",
        translation: "to get used to, to become accustomed to"
    },
    {
        word: "unterlassen",
        preposition: "",
        example: "Bitte unterlassen Sie solche Kommentare. Er hat es unterlassen, mir Bescheid zu geben.",
        translation: "to refrain, to omit"
    },
    {
        word: "endgültig",
        preposition: "",
        example: "Das endgültige Ergebnis wird bald bekannt gegeben. Nach langen Diskussionen haben sie eine endgültige Entscheidung getroffen. Die Entscheidung des Gerichts ist endgültig und kann nicht mehr angefochten werden.",
        translation: "final, definitive"
    },
    {
        word: "zulasten",
        preposition: "",
        example: "Die Kosten gehen zulasten des Unternehmens. Die Entscheidung ging zulasten der Umwelt. Will Moskau die Seegrenzen zulasten Litauens und Finnlands verändern?",
        translation: "at the expense of, to the disadvantage of"
    },
    {
        word: "selbstsüchtig",
        preposition: "",
        example: "Sein selbstsüchtiges Verhalten führte dazu, dass er seine Freunde vernachlässigte. Selbstsüchtiges Handeln kann zu Spannungen in zwischenmenschlichen Beziehungen führen.",
        translation: "selfish"
    },
    {
        word: "Unzulänglichkeit",
        preposition: "",
        example: "Die Unzulänglichkeit des Produkts führte zu Kundenbeschwerden. Er fühlte sich wegen seiner Unzulänglichkeiten unsicher. Er fühlte sich von einer ständigen Unzulänglichkeit geplagt, weil er die hohen Erwartungen seiner Eltern nicht erfüllen konnte.",
        translation: "inadequacy, shortcoming"
    },
    {
        word: "abwerten",
        preposition: "",
        example: "Die Währung des Landes wurde gegenüber anderen Währungen abgewertet. Die kontinuierliche Kritik hat das Selbstvertrauen des Schülers abgewertet.",
        translation: "to devalue, to depreciate"
    },
    {
        word: "neigen",
        preposition: "",
        example: "Er neigt dazu, zu spät zu kommen. Man neigt dazu, mehr zu essen, wenn man gestresst ist. Die Blumen neigen sich zur Sonne hin.",
        translation: "to tend to"
    },
    {
        word: "versagen",
        preposition: "",
        example: "Er hatte Angst vor dem Versagen bei der Prüfung. Das Unternehmen versagte aufgrund von finanziellen Problemen.",
        translation: "to fail"
    },
    {
        word: "heranrücken",
        preposition: "",
        example: "Die Truppen begannen, sich dem feindlichen Lager heranzurücken. Sie rückten langsam näher, um die Bühne besser sehen zu können. Kannst du den Stuhl bitte näher an den Tisch heranrücken?",
        translation: "to move closer, to approach"
    },
    {
        word: "wahrhaft",
        preposition: "",
        example: "Seine wahrhaften Gefühle waren offensichtlich in seinen Worten und Gesten. Die Geschichte des Buches war so faszinierend, dass es sich anfühlte, als wäre sie wahrhaftig passiert.",
        translation: "truly, genuinely"
    },
        {
        word: "göttlich",
        preposition: "",
        example: "Die Landschaft am See sah bei Sonnenuntergang einfach göttlich aus. Der Kuchen, den sie gebacken hat, schmeckte göttlich.",
        translation: "divine, heavenly"
    },
    {
        word: "unablässig",
        preposition: "",
        example: "Trotz der Schwierigkeiten arbeitete er unablässig an seinem Ziel. Der unermüdliche Arbeiter arbeitete unablässig, um die Fertigstellung des Projekts sicherzustellen.",
        translation: "unceasing, incessant"
    },
    {
        word: "Vorkommen",
        preposition: "",
        example: "Das Vorkommen von Goldminen ist in dieser Region sehr häufig. Die natürlichen Vorkommen dieses Rohstoffs nehmen unablässig ab.",
        translation: "presence, existence"
    },
    {
        word: "unweigerlich",
        preposition: "",
        example: "Bei starkem Regen ist ein nasser Boden unweigerlich. Die zunehmende Automatisierung führt unweigerlich zu Veränderungen in der Arbeitswelt.",
        translation: "inevitable"
    },
    {
        word: "Verfall",
        preposition: "",
        example: "Der Verfall des alten Gebäudes war offensichtlich, als die Wände begannen, Risse zu zeigen. Der Verfall der Währung führte zu einer Inflation und wirtschaftlichen Problemen im Land.",
        translation: "deterioration, decay"
    },
    {
        word: "fettleibig",
        preposition: "",
        example: "Aufgrund seiner schlechten Ernährungsgewohnheiten ist er fettleibig geworden. Fettleibigkeit kann zu verschiedenen gesundheitlichen Problemen wie Diabetes und Herzerkrankungen führen.",
        translation: "obese"
    },
    {
        word: "Getreide",
        preposition: "",
        example: "In vielen Ländern ist Getreide eine wichtige Grundnahrungsmittelquelle. Die Bauern ernten im Herbst ihr Getreide.",
        translation: "grain"
    },
    {
        word: "ausnutzen",
        preposition: "",
        example: "Er nutzte die Gelegenheit aus, als sein Konkurrent nicht aufpasste. Es ist nicht fair, dass er die Arbeitskräfte ausnutzt, um seinen eigenen Profit zu steigern.",
        translation: "to exploit"
    },
    {
        word: "zögern",
        preposition: "",
        example: "Sie zögerte einen Moment, bevor sie die Tür öffnete. Er zögerte, die riskante Entscheidung zu treffen.",
        translation: "to hesitate"
    },
    {
        word: "sich als jemand anderes ausgeben",
        preposition: "",
        example: "Er gab sich am Telefon als mein Bruder aus, um an meine persönlichen Informationen zu gelangen. Sie hat sich online als berühmte Schauspielerin ausgegeben.",
        translation: "to pretend to be, to pose as"
    },
    {
        word: "eingehen auf",
        preposition: "auf+akk",
        example: "Der Redner ging in seiner Präsentation auf die wichtigsten Punkte ein. Ich möchte gerne auf Ihre Frage eingehen. In unserem Gespräch sind wir auf verschiedene Aspekte des Problems eingegangen.",
        translation: "to address, to mention, to discuss, to touch upon, to respond to"
    },
    {
        word: "sich erkundigen",
        preposition: "bei+dat nach+dat",
        example: "Ich werde mich bei einem Arzt nach den Details des Behandlungsplans erkundigen. Sie sollten sich vor der Reise bei der Fluggesellschaft nach den aktuellen Bestimmungen erkundigen. Er erkundigte sich bei seinen Kollegen nach deren Meinung zu dem neuen Projekt.",
        translation: "to inquire with, to ask about"
    },
    {
        word: "raten zu",
        preposition: "zu+dat",
        example: "Ich rate dir zu mehr Bewegung und einer ausgewogenen Ernährung, um deine Gesundheit zu verbessern. Der Lehrer rät den Schülern dazu, regelmäßig zu üben, um gute Ergebnisse zu erzielen. Die Experten raten zu Vorsicht bei der Verwendung dieser Software.",
        translation: "to recommend, to advise"
    },
    {
        word: "liegen an",
        preposition: "an+dat",
        example: "Die Verspätung liegt an einem technischen Problem mit dem Zug. Seine schlechte Laune liegt an seinen privaten Problemen. Der Erfolg des Projekts liegt an der harten Arbeit des Teams.",
        translation: "to be caused by, to be due to"
    },
    {
        word: "schusselig",
        preposition: "",
        example: "Entschuldigung, ich habe meine Schlüssel schon wieder vergessen. Ich bin heute so schusselig. Sie ist so schusselig, dass sie ständig ihre Brille verlegt. Sei nicht so schusselig und achte besser auf deine Sachen!",
        translation: "absent-minded, forgetful"
    },
    {
        word: "verfluchen",
        preposition: "",
        example: "Er verfluchte seinen Feind und wünschte ihm alles Schlechte. Die Hexe verfluchte das Königreich und prophezeite eine düstere Zukunft. Manche glauben, dass das Haus verflucht ist, weil so viele unglückliche Ereignisse darin passiert sind.",
        translation: "to curse"
    },
    {
        word: "spucken",
        preposition: "",
        example: "Der Junge spuckte auf den Boden, um zu zeigen, dass er wütend war. Das Kamel spuckte auf den Boden, um seine Unzufriedenheit auszudrücken.",
        translation: "to spit"
    },
    {
        word: "schlucken",
        preposition: "",
        example: "Sie schluckte den Bissen Brot herunter. Er musste hart schlucken, als er die schlechte Nachricht hörte. Der Arzt forderte ihn auf, das Medikament mit Wasser zu schlucken.",
        translation: "to swallow"
    },
    {
        word: "himmlisch",
        preposition: "",
        example: "Das Abendessen war einfach himmlisch. Sie genossen einen himmlischen Tag am Strand.",
        translation: "heavenly, divine, wonderful"
    },
    {
        word: "Ruhe",
        preposition: "",
        example: "In der ländlichen Gegend genossen sie die Stille und die Ruhe. Nach einem langen Arbeitstag suchte er Ruhe in der Natur.",
        translation: "peace, calm"
    },
    {
        word: "senkrecht",
        preposition: "",
        example: "Die Säule stand senkrecht zum Boden. Die Regentropfen fielen senkrecht auf den Boden. Der Lichtstrahl fiel senkrecht auf die Oberfläche des Spiegels.",
        translation: "vertical"
    },
    {
        word: "auf etwas zugehen",
        preposition: "auf+akk",
        example: "Er ging langsam auf das Gebäude zu, um es genauer zu untersuchen. Sie ging auf ihre Freundin zu und umarmte sie herzlich. Die Verhandlungen gehen auf ein Ende zu.",
        translation: "to approach"
    },
    {
        word: "bekannt vorkommen",
        preposition: "",
        example: "Der Name des Films kommt mir bekannt vor, ich glaube, ich habe schon davon gehört. Als ich das Gebäude betrat, kam mir die Architektur bekannt vor. Die Melodie dieses Liedes kommt mir bekannt vor, ich habe es schon einmal gehört.",
        translation: "to seem familiar, to ring a bell"
    },
    {
        word: "Vorrat",
        preposition: "",
        example: "Wir haben immer einen Vorrat an Lebensmitteln für den Notfall. Der Vorrat an Brennholz reicht uns für den ganzen Winter. Der Arzt verschrieb ihr einen Vorrat an Medikamenten für zwei Wochen.",
        translation: "supply, stock"
    },
    {
        word: "erkennen",
        preposition: "",
        example: "Sie konnte ihn trotz der Dunkelheit erkennen, als er näher kam. Nach langem Studium erkannte sie endlich die Bedeutung des Textes. Der Detektiv erkannte den Täter anhand der Spuren am Tatort.",
        translation: "to recognize"
    },
    {
        word: "zügig",
        preposition: "",
        example: "Der Zug fuhr zügig durch die Landschaft. Bitte erledigen Sie diese Aufgabe so zügig wie möglich.",
        translation: "swift, prompt"
    },
    {
        word: "Absatz",
        preposition: "",
        example: "Der Absatz dieses Buches beschreibt die Geschichte des Zweiten Weltkriegs. Die Absatzraten der Firma stiegen im letzten Quartal. Die Absätze meiner Schuhe sind abgenutzt und müssen repariert werden.",
        translation: "paragraph, section, sales, turnover, heel"
    },
    {
        word: "gelten",
        preposition: "",
        example: "Die Geschwindigkeitsbegrenzung von 50 km/h gilt auf dieser Straße. Die neue Datenschutzverordnung gilt ab dem 25. Mai. In diesem Unternehmen gelten strenge Sicherheitsvorschriften.",
        translation: "to be valid, to apply"
    },
    {
        word: "abgleichen",
        preposition: "",
        example: "Bitte gleichen Sie die Lieferliste mit den tatsächlich erhaltenen Waren ab. Wir müssen die Ergebnisse der beiden Studien abgleichen, um eine genaue Analyse zu erhalten. Der Techniker hat die Einstellungen der Maschinen abgeglichen, um sicherzustellen, dass sie optimal arbeiten.",
        translation: "to crosscheck, to compare, to match, to align"
    },
        {
        word: "Eingebung",
        preposition: "",
        example: "Die Lösung des Rätsels kam ihr wie eine plötzliche Eingebung. Die Melodie kam ihm in einer Eingebung, als er durch den Park spazierte. Ihre besten Ideen kommen ihr oft in Eingebungen, wenn sie am wenigsten damit rechnet.",
        translation: "inspiration, intuition, sudden idea"
    },
    {
        word: "das Für und Wider abwägen",
        preposition: "",
        example: "Bevor er sich entschied, das neue Jobangebot anzunehmen, wog er das Für und Wider gründlich ab.",
        translation: "to weigh pros and cons, to consider the advantages and disadvantages"
    },
    {
        word: "schwerer Kater",
        preposition: "",
        example: "Nach der Party hatte er einen schweren Kater und konnte kaum aus dem Bett aufstehen. Sie schwor, nie wieder so viel zu trinken, nachdem sie am nächsten Tag mit einem schweren Kater aufwachte.",
        translation: "hangover"
    },
    {
        word: "in Fleisch und Blut übergehen",
        preposition: "",
        example: "Nach jahrelanger Erfahrung ging das Klavierspielen in Fleisch und Blut über, und sie konnte spielen, ohne darüber nachzudenken. Durch tägliches Training ging das Skifahren in Fleisch und Blut über, und er konnte die Abfahrten mühelos bewältigen. Das Sprechen einer Fremdsprache geht in Fleisch und Blut über, wenn man regelmäßig übt und sich mit der Sprache umgibt.",
        translation: "to become second nature"
    },
    {
        word: "vorkommen",
        preposition: "",
        example: "Diese Pflanzenart kommt nur in tropischen Regionen vor. Es kommt oft vor, dass Menschen ihre Schlüssel verlegen. Solche Fehler kommen in Mathematik häufig vor. Das kommt mir sehr komisch vor.",
        translation: "to occur, to happen, to appear, to exist"
    },
    {
        word: "nachvollziehen",
        preposition: "",
        example: "Ich kann gut nachvollziehen, warum du dich über diese Entscheidung ärgerst. Es ist wichtig, dass wir versuchen, die Perspektive des anderen nachzuvollziehen, um Konflikte zu lösen.",
        translation: "to comprehend, to understand"
    },
    {
        word: "verabscheuen",
        preposition: "",
        example: "Sie verabscheute die Grausamkeit, die sie in dem Film sah, und konnte ihn deshalb nicht bis zum Ende ansehen. Die meisten Menschen verabscheuen Ungerechtigkeit und setzen sich für Gleichbehandlung ein.",
        translation: "to abhor, to detest, to loathe"
    },
    {
        word: "angesagt",
        preposition: "",
        example: "Diese Musikband ist momentan sehr angesagt. In dieser Bar sind Cocktails mit exotischen Zutaten besonders angesagt.",
        translation: "popular, trendy"
    },
    {
        word: "als nichts mehr half",
        preposition: "",
        example: "Er hatte bereits verschiedene Medikamente ausprobiert, aber als nichts mehr half, musste er sich einer Operation unterziehen. Trotz intensiver Bemühungen und zahlreicher Versuche, das Problem zu lösen, blieb die Situation unverändert. Als nichts mehr half, musste er die Zusammenarbeit mit einem Experten in Betracht ziehen.",
        translation: "when nothing worked anymore, when all else failed"
    },
    {
        word: "sich einleben",
        preposition: "",
        example: "Nachdem sie in die neue Stadt gezogen waren, brauchte es einige Zeit, bis sie sich eingelebt hatten. Die Kinder hatten Schwierigkeiten, sich in der neuen Schule einzuleben, aber nach ein paar Wochen fühlten sie sich schon viel besser.",
        translation: "to settle in, to adapt"
    },
    {
        word: "ein für allemal",
        preposition: "",
        example: "Lass uns das Problem ein für allemal lösen, damit es nicht wieder auftaucht. Ich habe mich ein für allemal entschieden, mit dem Rauchen aufzuhören. Wir müssen diese Missverständnisse ein für allemal aus der Welt schaffen.",
        translation: "once and for all"
    },
    {
        word: "sich auflehnen",
        preposition: "",
        example: "Die Arbeiter haben sich gegen die schlechten Arbeitsbedingungen aufgelehnt. Die Jugendlichen lehnen sich oft gegen die Regeln ihrer Eltern auf.",
        translation: "to rebel, to resist"
    },
    {
        word: "Gehorsam",
        preposition: "",
        example: "Der Hund zeigt einen ausgeprägten Gehorsam gegenüber seinem Herrchen. In autoritären Regimen wird oft blinder Gehorsam gefordert.",
        translation: "obedience, compliance"
    },
    {
        word: "sich veranlasst sehen",
        preposition: "",
        example: "Aufgrund der steigenden Nachfrage sehen wir uns veranlasst, unsere Produktion zu erhöhen. Angesichts der aktuellen Lage sehen wir uns veranlasst, zusätzliche Sicherheitsmaßnahmen zu ergreifen. Nachdem er die schlechten Ergebnisse gesehen hatte, sah er sich veranlasst, seine Strategie zu ändern.",
        translation: "to feel compelled to do, to feel obliged to do"
    },
    {
        word: "beruhen auf",
        preposition: "auf+dat",
        example: "Der Erfolg dieses Projekts beruht auf einer gründlichen Marktanalyse. Seine Entscheidung, zu kündigen, beruhte auf seinem Unmut über die Arbeitsbedingungen. Die Wirksamkeit dieser Medizin beruht auf jahrelanger Forschung und Entwicklung.",
        translation: "to be based on, to rely on, to stem from"
    },
    {
        word: "sich aufhalten",
        preposition: "",
        example: "Wir haben uns gestern Abend im Park aufgehalten und die Sterne betrachtet. Bitte halten Sie sich nicht länger als nötig im Warteraum auf.",
        translation: "to stay, to linger, to be, to remain"
    },
    {
        word: "hinkriegen",
        preposition: "",
        example: "Es war schwierig, aber am Ende haben wir es irgendwie hingekriegt. Ich bin nicht sicher, wie ich es machen soll, aber ich werde es schon irgendwie hinkriegen.",
        translation: "to manage, to pull off, to accomplish, to get done"
    },
    {
        word: "verzeichnen",
        preposition: "",
        example: "Das Unternehmen hat im letzten Quartal einen Anstieg des Umsatzes verzeichnet. In den letzten Jahren haben wir einen stetigen Anstieg der Besucherzahlen auf unserer Website verzeichnet.",
        translation: "to record, to register, to note, to document"
    },
    {
        word: "verzeihen",
        preposition: "",
        example: "Sie entschied sich, ihm zu verzeihen, und versuchte, die Vergangenheit hinter sich zu lassen. Es ist wichtig, zu verzeihen, um Frieden und Versöhnung zu finden.",
        translation: "to forgive"
    },
    {
        word: "Auskunft",
        preposition: "",
        example: "Könnten Sie mir bitte Auskunft darüber geben, wie ich zu Ihrem Büro gelange? Der Reiseführer bot umfassende Auskünfte über die Sehenswürdigkeiten der Stadt.",
        translation: "information"
    },
    {
        word: "dementsprechend",
        preposition: "",
        example: "Das Unternehmen verzeichnete einen Gewinnanstieg im letzten Quartal. Dementsprechend werden wir unsere Investitionen in neue Projekte erhöhen. Die Prüfung war sehr schwer, und dementsprechend waren die Ergebnisse nicht besonders gut.",
        translation: "accordingly, that's why"
    },
    {
        word: "abgefahren",
        preposition: "",
        example: "Das Konzert gestern Abend war abgefahren! Der neue Film von Q. Tarantino ist echt abgefahren!",
        translation: "awesome, cool, amazing"
    },
    {
        word: "beibringen",
        preposition: "",
        example: "Als Lehrer ist es seine Aufgabe, den Schülern mathematische Konzepte beizubringen. Sie brachte sich selbst das Klavierspielen bei, indem sie Tutorials online ansah und regelmäßig übte. Die Eltern versuchten, ihren Kindern Werte wie Respekt und Ehrlichkeit beizubringen.",
        translation: "to teach, to instruct"
    },
    {
        word: "anschließen",
        preposition: "an+akk",
        example: "Er schloss den neuen Drucker an den Computer an, um ihn in Betrieb zu nehmen. Nachdem er das Gerät zusammengebaut hatte, schloss er es an die Steckdose an, um zu sehen, ob es funktioniert.",
        translation: "to connect, to plug in, to attach"
    },
    {
        word: "klopfen",
        preposition: "",
        example: "Sie hörte ein leises Klopfen an der Tür und ging, um zu sehen, wer da war. Bevor er die Tür öffnete, klopfte er an, um höflich anzukündigen, dass er hereinkommt. Der Handwerker klopfte mit einem Hammer an die Wand, um herauszufinden, wo er bohren sollte.",
        translation: "to knock, to tap"
    },
    {
        word: "einbeziehen",
        preposition: "",
        example: "Wir sollten alle Teammitglieder in die Entscheidungsfindung einbeziehen, um ihre Perspektiven zu berücksichtigen. Der Lehrer ermutigte die Schüler, verschiedene Ansichten in ihre Argumente einzubeziehen.",
        translation: "to include"
    },
    {
        word: "sich auseinandersetzen",
        preposition: "mit+dat",
        example: "Als Wissenschaftler müssen wir uns mit den komplexen Fragen des Universums auseinandersetzen. Er setzte sich mit seinen eigenen Ängsten und Unsicherheiten auseinander, um persönliches Wachstum zu erreichen.",
        translation: "to engage with, to deal with"
    },
         {
        word: "verfassen",
        preposition: "",
        example: "Er verfasste einen Artikel über die Geschichte der Stadt. Die Schüler sollten eine kurze Geschichte verfassen.",
        translation: "to write, to compose"
    },
    {
        word: "bezeichnen",
        preposition: "",
        example: "Die Blume wird oft als Symbol für Liebe und Schönheit bezeichnet. Der Fachmann bezeichnete das Phänomen als unerklärlich.",
        translation: "to describe, to designate"
    },
    {
        word: "sich beziehen auf",
        preposition: "auf+akk",
        example: "Diese Diskussion bezieht sich auf das Thema Umweltschutz. Er bezog sich in seiner Rede auf die aktuellen politischen Ereignisse.",
        translation: "to refer to, to relate to"
    },
    {
        word: "in Kauf nehmen",
        preposition: "",
        example: "Er musste lange Arbeitszeiten in Kauf nehmen, um seine Karriere voranzutreiben. Sie war sich der Risiken bewusst, aber sie nahm sie in Kauf, um ihre Träume zu verwirklichen.",
        translation: "to accept, to tolerate"
    },
    {
        word: "sich Gedanken machen",
        preposition: "über+akk",
        example: "Ich mache mir Gedanken über meine berufliche Zukunft. Wenn man an die Zukunft unserer Kinder denkt, sollte man sich zum Verbrauch der Ressourcen Gedanken machen.",
        translation: "to think about, to consider"
    },
    {
        word: "sich behaupten",
        preposition: "",
        example: "Er konnte sich in der neuen Firma schnell behaupten und stieg bald in eine Führungsposition auf. Die Mannschaft hat sich gegen starke Gegner behauptet und das Turnier gewonnen.",
        translation: "to assert oneself, to hold one's ground"
    },
    {
        word: "unzureichend",
        preposition: "",
        example: "Die Informationen waren unzureichend, um eine fundierte Entscheidung zu treffen. Ihre Englischkenntnisse sind für den Job leider unzureichend.",
        translation: "inadequate, insufficient"
    },
    {
        word: "beständig",
        preposition: "",
        example: "Das Material ist sehr beständig gegen Hitze und Feuchtigkeit. Er zeigte eine beständige Leistung während des gesamten Wettbewerbs.",
        translation: "consistent, stable, durable"
    },
    {
        word: "vergeblich",
        preposition: "",
        example: "Er versuchte vergeblich, das Schloss zu öffnen. Alle ihre Bemühungen, ihn zu erreichen, waren vergeblich.",
        translation: "in vain, unsuccessful"
    },
    {
        word: "mager",
        preposition: "",
        example: "Nach der Krankheit war er sehr mager geworden. Mageres Fleisch ist gesünder als fettes Fleisch. Das Ergebnis der Ernte war in diesem Jahr leider sehr mager.",
        translation: "lean, thin"
    },
    {
        word: "bislang",
        preposition: "",
        example: "Bislang hat er noch keine Antwort auf seine Bewerbung erhalten. Die Ergebnisse der Studie sind bislang sehr vielversprechend.",
        translation: "so far, up to now"
    },
    {
        word: "auf Ablehnung stoßen",
        preposition: "auf+akk",
        example: "Sein Vorschlag für die neue Marketingstrategie ist auf Ablehnung gestoßen. Die Pläne für den Bau des Einkaufszentrums sind bei den Anwohnern auf Ablehnung gestoßen.",
        translation: "to be met with rejection, to face rejection"
    },
    {
        word: "im Hinblick auf",
        preposition: "auf+akk",
        example: "Im Hinblick auf die steigenden Kosten müssen wir unsere Ausgaben reduzieren. Im Hinblick auf die Gesundheit der Mitarbeiter wurden neue Sicherheitsmaßnahmen eingeführt.",
        translation: "with regard to, in view of"
    },
    {
        word: "versauen",
        preposition: "",
        example: "Er hat das ganze Projekt mit seinem Fehler versaut. Du hast das Essen wirklich versaut, es ist ungenießbar.",
        translation: "to mess up, to ruin, to screw up"
    },
    {
        word: "blass",
        preposition: "",
        example: "Sie sah nach der Krankheit sehr blass aus. Der Himmel war an diesem Morgen blassgrau.",
        translation: "pale, wan"
    },
    {
        word: "verpennen",
        preposition: "",
        example: "Er hat heute Morgen seinen Zug verpennt. Wenn du nicht rechtzeitig aufstehst, wirst du die Prüfung verpennen.",
        translation: "to oversleep"
    },
    {
        word: "ernsthaft",
        preposition: "",
        example: "Sie sprach ernsthaft über ihre Zukunftspläne. Es ist Zeit, ernsthaft über diese Angelegenheit nachzudenken.",
        translation: "seriously"
    },
    {
        word: "sich einschalten",
        preposition: "",
        example: "Der Lehrer musste sich einschalten, um den Streit zwischen den Schülern zu schlichten. Die Regierung hat sich in die Verhandlungen eingeschaltet, um eine Lösung zu finden.",
        translation: "to intervene, to step in, to get involved"
    },
    {
        word: "Vorstoß",
        preposition: "",
        example: "Der neue Vorstoß des Unternehmens in den asiatischen Markt war erfolgreich. Die Grünen sehen den Vorstoß mit großer Skepsis. Der General plante einen Vorstoß, um das feindliche Gebiet zu erobern.",
        translation: "advance, initiative, push"
    },
    {
        word: "verüben",
        preposition: "",
        example: "Die Täter haben in der Nacht einen Raubüberfall verübt. Er wurde beschuldigt, einen Mord verübt zu haben.",
        translation: "to commit, to perpetrate"
    },
    {
        word: "büßen",
        preposition: "",
        example: "Er musste seine Taten teuer büßen. Sie hat ihre Fehler eingesehen und war bereit, dafür zu büßen.",
        translation: "to atone, to pay for"
    },
    {
        word: "schulden",
        preposition: "",
        example: "Er schuldet mir noch 50 Euro. Sie schulden uns eine Erklärung für dieses Verhalten.",
        translation: "to owe"
    },
    {
        word: "sich abstimmen",
        preposition: "",
        example: "Die Teammitglieder müssen sich abstimmen, um das Projekt rechtzeitig abzuschließen. Vor der Besprechung sollten wir uns noch einmal abstimmen.",
        translation: "to coordinate, to align"
    },
    {
        word: "von etwas ausgehen",
        preposition: "von+dat",
        example: "Die Ermittler gehen von einem Einzeltäter aus. Ich gehe davon aus, dass der Zug pünktlich ankommen wird. Die Untersuchung geht von der Hypothese aus, dass Stress die Leistung beeinflusst.",
        translation: "to assume, to presume, to be based on"
    },
    {
        word: "im Vorfeld",
        preposition: "",
        example: "Wir müssen im Vorfeld der Veranstaltung alle Details klären. Im Vorfeld des Treffens sollten wir uns über das Thema informieren.",
        translation: "prior to, beforehand, in advance"
    },
    {
        word: "anhand",
        preposition: "",
        example: "Anhand dieser Diagramme können wir den Trend analysieren. Wir können das Problem anhand dieser Beispiele besser verstehen.",
        translation: "by means of, using, based on"
    },
    {
        word: "sich anmaßen",
        preposition: "",
        example: "Es ist nicht richtig, sich das Recht anzumaßen, über das Leben anderer zu entscheiden. Sie maßt sich an, immer im Recht zu sein, auch wenn sie falsch liegt.",
        translation: "to arrogate, to presume"
    },
    {
        word: "Schatten",
        preposition: "",
        example: "Das Zusammenspiel von Licht und Schatten war faszinierend. Der Weidenbaum wirft einen großen Schatten.",
        translation: "shadow"
    },
    {
        word: "ausrotten",
        preposition: "",
        example: "Die Regierung unternahm große Anstrengungen, um die Seuche auszurotten. Die invasive Pflanzenart muss ausgerottet werden, um die einheimischen Arten zu schützen.",
        translation: "to eradicate, to exterminate"
    },
    {
        word: "niederschmetternd",
        preposition: "",
        example: "Die Nachricht vom plötzlichen Tod ihres Freundes war für sie niederschmetternd. Das Ergebnis der Prüfung war niederschmetternd und nahm ihm jegliche Hoffnung auf ein Bestehen.",
        translation: "devastating, crushing"
    },
    {
        word: "mir ist nach",
        preposition: "",
        example: "Mir ist nach essen. Nach dem langen Tag ist mir nach einem heißen Bad. Mir ist nicht nach Schokolade.",
        translation: "I feel like, I'm in the mood for"
    },
    {
        word: "anstreben",
        preposition: "",
        example: "Er strebt eine Karriere als Arzt an. Sie strebt danach, die beste Schülerin in ihrer Klasse zu sein. Das Unternehmen strebt an, seine Marktposition zu stärken.",
        translation: "to strive for, to aim for, to seek"
    },
        {
        word: "rechnen mit",
        preposition: "mit+dat",
        example: "Wir müssen damit rechnen, dass es morgen regnen wird, also nehmen wir einen Regenschirm mit. Sie rechnen mit einem starken Anstieg der Besucherzahlen während des Festivals und haben zusätzliches Personal eingestellt.",
        translation: "to expect, to anticipate, to prepare for"
    },
    {
        word: "abschmieren",
        preposition: "",
        example: "Mein Computer ist gerade abgeschmiert, und ich habe alle meine Arbeit verloren. Nicht überall schmieren die Grünen ab.",
        translation: "to crash, to fail"
    },
    {
        word: "zulegen",
        preposition: "",
        example: "Er überlegt, sich ein neues Auto zuzulegen. Sie hat entschlossen, sich ein paar neue Kleidungsstücke zuzulegen. Um wettbewerbsfähig zu bleiben, müssen Unternehmen ständig neue Fähigkeiten zulegen.",
        translation: "to acquire, to purchase, to obtain"
    },
    {
        word: "spießig",
        preposition: "",
        example: "Sie findet seinen Kleidungstil zu spießig für die heutige Zeit. Manche Leute halten das Leben auf dem Land für spießig, während andere es als idyllisch empfinden.",
        translation: "stuffy, square, conservative"
    },
    {
        word: "Übelkeit",
        preposition: "",
        example: "Nach der Achterbahnfahrt litt sie unter Übelkeit. Die Übelkeit war so stark, dass er nicht einmal Wasser bei sich behalten konnte.",
        translation: "nausea"
    },
    {
        word: "sich scheiden lassen",
        preposition: "",
        example: "Sie haben beschlossen, sich scheiden zu lassen, nachdem sie jahrelang unglücklich verheiratet waren. Das Paar ließ sich vor Gericht scheiden und teilte die gemeinsamen Vermögenswerte auf.",
        translation: "to get divorced, to file for divorce"
    },
    {
        word: "verweigern",
        preposition: "",
        example: "Sie verweigerte die Annahme des Pakets, da sie den Absender nicht kannte. Der Spieler wurde disqualifiziert, weil er sich weigerte, den Anweisungen des Schiedsrichters zu folgen.",
        translation: "to refuse, to deny"
    },
    {
        word: "sich auskennen",
        preposition: "",
        example: "Er kennt sich gut mit Computern aus. Kannst du mir helfen? - Ich kenne mich nicht gut in der Stadt aus. Sie kennt sich hervorragend mit Kunstgeschichte aus und kann Ihnen viel über verschiedene Epochen erzählen.",
        translation: "to be familiar with, to know one's way around"
    },
    {
        word: "bescheren",
        preposition: "",
        example: "Weihnachten beschert uns viele Geschenke. Das neue Jahr hat uns Glück und Gesundheit beschert.",
        translation: "to bestow, to grant"
    },
    {
        word: "nützen",
        preposition: "",
        example: "Ich halte immer noch Kontakt zu meinen Studienkollegen, sie können mir vielleicht einmal nützen.",
        translation: "to benefit, to be useful, to serve"
    },
    {
        word: "am ehesten",
        preposition: "",
        example: "Wenn das Wetter so bleibt, werden wir am ehesten draußen grillen. Sie wird am ehesten diejenige sein, die das Projekt leitet. Welche Anzeige weckt am ehesten dein Interesse?",
        translation: "most likely"
    },
    {
        word: "verfassen",
        preposition: "",
        example: "Der Schriftsteller verfasste einen Roman über das Leben im alten Ägypten. Kannst du bitte einen formellen Brief an den Kunden verfassen?",
        translation: "to compose, to write, to draft"
    },
    {
        word: "sich zusammenraufen",
        preposition: "",
        example: "Nach anfänglichen Streitigkeiten mussten sich die Teammitglieder zusammenraufen, um das Projekt erfolgreich abzuschließen. Nachdem sie sich eine Weile gestritten hatten, beschlossen die Geschwister, sich zusammenzuraufen und wieder ein gutes Verhältnis zueinander aufzubauen.",
        translation: "to patch things up, to make amends, to reconcile"
    },
    {
        word: "großzügig",
        preposition: "",
        example: "Er war immer großzügig und half gerne denen, die in Not waren. Sie spendete großzügig genug, um seinen Mitarbeitern Bonuszahlungen zu gewähren.",
        translation: "generous, benevolent, liberal"
    },
    {
        word: "durchfallen",
        preposition: "",
        example: "Ich muss unbedingt eine gute Note in diesem Text bekommen, sonst falle ich durch. Wenn er nicht genug lernt, wird er in der Prüfung durchfallen.",
        translation: "to fail, to not pass"
    },
    {
        word: "vergammeln",
        preposition: "",
        example: "Wenn du das Obst nicht rechtzeitig isst, wird es im Kühlschrank vergammeln. Die alten Möbel im Keller sind vergammelt und müssen entsorgt werden.",
        translation: "to rot, to spoil, to decay"
    },
    {
        word: "weichen",
        preposition: "",
        example: "Wenige Tage vor der EM 2024 äußert Ter Stegen seinen Unmut. Der Grund: Er muss erneut für Manuel Neuer weichen. Der Fahrer musste dem entgegenkommenden Auto weichen. Sie musste ihren Standpunkt weichen, als sie die besseren Argumente hörte.",
        translation: "to give way, to retreat"
    },
    {
        word: "sich ein Ziel setzen",
        preposition: "",
        example: "Das Unternehmen hat sich das Ziel gesetzt, bis Ende des Jahres die Umsätze um 20% zu steigern. Sie hat sich das Ziel gesetzt, in einem Jahr fließend Spanisch zu sprechen.",
        translation: "to set a goal"
    },
    {
        word: "hinsichtlich",
        preposition: "",
        example: "Hinsichtlich der neuen Regelungen gibt es noch viele offene Fragen. Hinsichtlich deiner Anfrage kann ich dir leider noch keine endgültige Antwort geben.",
        translation: "regarding, concerning"
    },
    {
        word: "gemäß",
        preposition: "",
        example: "Gemäß den Anweisungen des Arztes soll er sich eine Woche schonen. Gemäß dem Vertrag sind wir verpflichtet, die Lieferung bis Ende des Monats abzuschließen.",
        translation: "according to, as per"
    },
    {
        word: "mangels",
        preposition: "",
        example: "Mangels Beweisen musste der Verdächtige freigelassen werden. Das Treffen wurde mangels Teilnehmer abgesagt. Mangels finanzieller Mittel konnte das Projekt nicht weitergeführt werden.",
        translation: "due to lack of"
    },
    {
        word: "es bedarf",
        preposition: "",
        example: "Es bedarf einer gründlichen Vorbereitung, um dieses Projekt erfolgreich abzuschließen. Für diese Aufgabe bedarf es großer Konzentration und Genauigkeit.",
        translation: "it requires, it needs"
    },
    {
        word: "namhaft",
        preposition: "",
        example: "Er wurde von einer namhaften Universität eingeladen, einen Vortrag zu halten. Viele namhafte Wissenschaftler haben an dieser Konferenz teilgenommen.",
        translation: "renowned, well-known, notable"
    },
    {
        word: "verfallen",
        preposition: "",
        example: "Das alte Schloss ist im Laufe der Jahre verfallen. Die Gültigkeit des Gutscheins ist bereits verfallen.",
        translation: "to decay, to deteriorate"
    },
    {
        word: "vereinheitlichen",
        preposition: "",
        example: "Die Firma hat beschlossen, ihre internen Prozesse zu vereinheitlichen, um effizienter zu arbeiten. Das Ziel der Reform ist es, die Bildungssysteme in den verschiedenen Bundesländern zu vereinheitlichen.",
        translation: "to standardize, to unify"
    },
    {
        word: "erstrebenswert",
        preposition: "",
        example: "Ein guter Job mit angemessener Bezahlung ist für viele Menschen erstrebenswert. In einer Partnerschaft ist Vertrauen und Respekt oft erstrebenswert.",
        translation: "desirable, worthwhile, aspirational"
    },
    {
        word: "verflacht",
        preposition: "",
        example: "Nach ein paar Stunden Smalltalk wurde das Gespräch zunehmend verflacht. Die Fernsehsendung hatte zu Beginn interessante Themen, wurde aber später eher verflacht.",
        translation: "shallow, superficial, banal"
    },
    {
        word: "restlos",
        preposition: "",
        example: "Nach der Party war der Kuchen restlos aufgegessen. Die Ermittler haben die Akten restlos durchgesehen.",
        translation: "completely, entirely"
    },
    {
        word: "Hemmung",
        preposition: "",
        example: "Sie zeigte keine Hemmung, als sie ihre Meinung äußerte. Seine Schüchternheit war eine Hemmung für seine berufliche Entwicklung.",
        translation: "inhibition, restraint, constraint"
    },
        {
        word: "sich abzeichnen",
        preposition: "",
        example: "Es zeichnet sich ab, dass die Verhandlungen erfolgreich sein könnten. Die Trends der letzten Monate zeichnen sich deutlich ab. Ein Mangel an Fachkräften zeichnet sich ab.",
        translation: "to emerge, to take shape, to become apparent"
    },
    {
        word: "Kritik üben",
        preposition: "",
        example: "Er übte Kritik an der neuen Regelung. Die Mitarbeiterin hat offen Kritik an den Arbeitsbedingungen geübt. Es ist wichtig, konstruktive Kritik zu üben, um Verbesserungen zu ermöglichen.",
        translation: "to criticize, to offer criticism, to provide feedback"
    },
    {
        word: "unterbreiten",
        preposition: "",
        example: "Sie unterbreitete dem Chef einen neuen Vorschlag zur Verbesserung der Arbeitsprozesse. Er hat ihnen ein Angebot unterbreitet, das sie nicht ablehnen konnten.",
        translation: "to submit, to propose, to present, to offer"
    },
    {
        word: "einen Antrag stellen",
        preposition: "",
        example: "Er hat einen Antrag auf Baugenehmigung gestellt. Sie stellte einen Antrag auf Verlängerung ihres Visums.",
        translation: "to submit an application, to file a request, to make a formal request"
    },
    {
        word: "jemanden von etwas in Kenntnis setzen",
        preposition: "von+dat",
        example: "Bitte setzen Sie mich von den Änderungen in Kenntnis. Er wurde von den neuen Regelungen in Kenntnis gesetzt.",
        translation: "to inform someone of something"
    },
    {
        word: "hervorgehen aus",
        preposition: "aus+dat",
        example: "Aus den Gesprächen ging hervor, dass die Mehrheit der Teilnehmer mit den vorgeschlagenen Änderungen einverstanden war. Die neuen Richtlinien gingen aus intensiven Verhandlungen zwischen den Parteien hervor.",
        translation: "to emerge from, to result from, to arise from"
    },
    {
        word: "zuversichtlich",
        preposition: "",
        example: "Er ist zuversichtlich, dass er die Prüfung bestehen wird. Trotz der Herausforderungen bleibt sie zuversichtlich. Die Firma ist zuversichtlich, dass das neue Produkt ein Erfolg wird.",
        translation: "confident, optimistic, hopeful, positive"
    },
    {
        word: "gut aufgelegt",
        preposition: "",
        example: "Heute Morgen war sie besonders gut aufgelegt und hat die ganze Zeit gelacht. Nach dem erfolgreichen Meeting war der Chef gut aufgelegt. Er ist immer gut aufgelegt, wenn die Sonne scheint.",
        translation: "to be in a good mood, cheerful, in high spirits, happy"
    },
    {
        word: "Verdrängung",
        preposition: "",
        example: "Die Verdrängung von kleineren Geschäften durch große Supermärkte ist ein bekanntes Phänomen. Durch die Verdrängung ihrer Ängste konnte sie sich auf ihre Arbeit konzentrieren.",
        translation: "displacement, repression, suppression"
    },
    {
        word: "sich wehren",
        preposition: "",
        example: "Er wehrte sich gegen die ungerechtfertigten Anschuldigungen. Die Dorfbewohner wehren sich gegen den Bau der neuen Autobahn.",
        translation: "to defend oneself, to resist, to fight back"
    },
    {
        word: "eindämmen",
        preposition: "",
        example: "Die Regierung ergriff Maßnahmen, um die Ausbreitung des Virus einzudämmen. Es ist wichtig, Waldbrände schnell einzudämmen, um größere Schäden zu vermeiden.",
        translation: "to curb, to control"
    },
    {
        word: "Umwandlung",
        preposition: "",
        example: "Die Umwandlung des alten Fabrikgebäudes in moderne Wohnungen war ein großer Erfolg. Durch die Umwandlung von Sonnenenergie in Strom können wir erneuerbare Energiequellen nutzen.",
        translation: "transformation, conversion"
    },
    {
        word: "Zweckentfremdung",
        preposition: "",
        example: "Die Zweckentfremdung von Mietwohnungen als Ferienwohnungen ist in vielen Städten ein rechtliches Problem. Die Zweckentfremdung von Fördergeldern kann zu rechtlichen Konsequenzen führen.",
        translation: "misuse, abuse, misapplication"
    },
    {
        word: "zutreffend",
        preposition: "",
        example: "Deine Analyse ist zutreffend und entspricht den aktuellen Daten. Die Beschreibung des Problems war zutreffend, daher konnte der Techniker schnell eine Lösung finden.",
        translation: "correct, accurate"
    },
    {
        word: "abrufen",
        preposition: "",
        example: "Du kannst die E-Mails jederzeit von deinem Server abrufen. Die neuesten Nachrichten lassen sich online abrufen. Er musste seine Erinnerungen an das Ereignis abrufen, um den Brief zu schreiben.",
        translation: "to retrieve, to fetch, to call up"
    },
    {
        word: "angegeben",
        preposition: "",
        example: "Die Höhe der Kosten wurde im Vortrag angegeben. Auf dem Formular müssen die persönlichen Daten angegeben werden.",
        translation: "specified, indicated, declared, stated"
    },
    {
        word: "nachverfolgen",
        preposition: "",
        example: "Wir können das Paket online nachverfolgen. Die Polizei versucht, die Bewegungen des Verdächtigen nachzuverfolgen. Er hat alle Änderungen im Projekt sorgfältig nachverfolgt.",
        translation: "to track, to trace, to monitor, to follow up"
    },
    {
        word: "verwerten",
        preposition: "",
        example: "Die alten Zeitungen wurden gesammelt und zu neuem Papier verwertet. In der Küche versucht sie, alle Lebensmittelreste kreativ zu verwerten.",
        translation: "to utilize, to exploit"
    },
    {
        word: "gnadenlos",
        preposition: "",
        example: "Der gnadenlose Richter verhängte die härteste Strafe, die möglich war. Die gnadenlose Hitze des Sommers machte das Arbeiten im Freien unerträglich.",
        translation: "ruthless, merciless"
    },
    {
        word: "sich verausgaben",
        preposition: "",
        example: "Er hat sich beim Marathonlauf völlig verausgabt und brauchte mehrere Tage, um sich zu erholen. Sie verausgabte sich in der Vorbereitung auf die Prüfung, sodass sie danach sehr erschöpft war.",
        translation: "to wear oneself out"
    },
    {
        word: "bis zum Gehtnichtmehr",
        preposition: "",
        example: "Er hat bis zum Gehtnichtmehr gearbeitet, um das Projekt rechtzeitig fertigzustellen.",
        translation: "until you're blue in the face"
    },
    {
        word: "glänzend",
        preposition: "",
        example: "Die Sonne spiegelte sich glänzend auf der Wasseroberfläche des Sees. Sie hat die Prüfung mit glänzenden Ergebnissen bestanden.",
        translation: "shiny, glossy, bright"
    },
    {
        word: "zünden",
        preposition: "",
        example: "Der Mechaniker musste die Zündkerze austauschen, damit der Motor wieder richtig zünden konnte. Beim Feuerwerk zündeten die Raketen nacheinander und erleuchteten den Nachthimmel.",
        translation: "to ignite, to light, to start, to trigger"
    },
    {
        word: "brüllen",
        preposition: "",
        example: "Die Menge brüllte vor Begeisterung, als die Band die Bühne betrat. Der Löwe brüllte so laut, dass es im ganzen Zoo zu hören war.",
        translation: "to shout, to roar"
    },
    {
        word: "merkwürdig",
        preposition: "",
        example: "Das Verhalten des neuen Kollegen ist wirklich merkwürdig. Ich habe gestern einen merkwürdigen Vogel im Park gesehen.",
        translation: "strange, odd"
    },
    {
        word: "Eigentum",
        preposition: "",
        example: "Dieses Haus ist mein Eigentum. Geistiges Eigentum ist in der heutigen digitalen Welt sehr wichtig.",
        translation: "property, assets"
    },
    {
        word: "kurz vor etwas sein",
        preposition: "vor+dat",
        example: "Wir sind kurz vor dem Ziel. Er ist kurz davor, einen neuen Job einzunehmen. Das Projekt steht kurz vor dem Abschluss.",
        translation: "to be on the verge of something, to be about to do something"
    },
    {
        word: "widerlich",
        preposition: "",
        example: "Der Geruch aus der Mülltonne war einfach widerlich. Sein Verhalten auf der Party war widerlich und unangemessen. Diese Suppe schmeckt widerlich, ich kann sie nicht essen.",
        translation: "disgusting, repulsive"
    },
    {
        word: "Zugriff",
        preposition: "",
        example: "Der Administrator hat vollen Zugriff auf das Netzwerk. Ohne das Passwort erhältst du keinen Zugriff auf diese Datei. Der Polizei gelang ein überraschender Zugriff auf das Versteck der Verdächtigen.",
        translation: "access"
    },
    {
        word: "einleiten",
        preposition: "",
        example: "Die Regierung will neue Maßnahmen zur Bekämpfung der Arbeitslosigkeit einleiten. Der Arzt wird die Behandlung sofort einleiten. Um die Verhandlungen zu einleiten, hielt der Vorsitzende eine kurze Rede.",
        translation: "to initiate"
    },
    {
        word: "verklemmt",
        preposition: "",
        example: "Sie wirkt immer so verklemmt, wenn es um persönliche Themen geht. Er ist zu verklemmt, um über seine Gefühle zu sprechen.",
        translation: "uptight, jammed"
    },
        {
        word: "das Aus drohen",
        preposition: "",
        example: "Der Firma droht das Aus, wenn sie keine neuen Investoren findet. Wenn sie keine Einigung erzielen, droht der Partnerschaft das Aus.",
        translation: "to face closure, to be on the brink of ending, to be at risk of ending"
    },
    {
        word: "auftauchen",
        preposition: "",
        example: "Plötzlich tauchte ein altes Fotoalbum auf, das sie jahrelang vermisst hatten. Der Schauspieler tauchte überraschend bei der Premiere auf. Es tauchten neue Beweise im Fall auf, die alles veränderten.",
        translation: "to appear, to emerge"
    },
    {
        word: "sich aufdrängen",
        preposition: "",
        example: "Er drängte sich aufdringlich ins Gespräch, obwohl er nicht eingeladen war. Die Probleme, die sich bei der Arbeit aufdrängten mussten sofort gelöst werden. Ihre Idee drängte sich immer mehr in den Vordergrund, als die beste Lösung für das Problem.",
        translation: "to impose itself, to intrude, to force oneself upon"
    },
    {
        word: "sich aufregen",
        preposition: "",
        example: "Er regte sich über die unzuverlässige Lieferung auf. Du brauchst dich nicht über Kleinigkeiten aufzuregen. Sie regte sich über die ungerechte Behandlung im Meeting auf.",
        translation: "to get upset, to get angry"
    },
    {
        word: "Hinwendung",
        preposition: "",
        example: "Die Hinwendung zur Natur hat in den letzten Jahren zugenommen, da immer mehr Menschen das Bedürfnis nach Ruhe und Erholung verspüren. Ihre Hinwendung zur Kunst begann schon in ihrer Kindheit.",
        translation: "turning towards, focus, attention"
    },
    {
        word: "bei sich ankommen",
        preposition: "",
        example: "Nach jahrelanger Suche und vielen Reisen hat er endlich das Gefühl, bei sich angekommen zu sein. Meditation hilft ihr, bei sich anzukommen und den Stress des Alltags zu vergessen.",
        translation: "to arrive at oneself, to find inner peace"
    },
    {
        word: "ungeachtet",
        preposition: "",
        example: "Ungeachtet der Warnungen ging er dennoch in die gefährliche Gegend. Ungeachtet ihrer Zweifel entschied sie sich, das Projekt fortzusetzen.",
        translation: "regardless of, despite"
    },
    {
        word: "Erreger",
        preposition: "",
        example: "Der Arzt erklärte, dass der Erreger der Krankheit ein Virus sei. Hygiene ist wichtig, um die Ausbreitung von Erregern zu vermindern.",
        translation: "pathogen, germ"
    },
    {
        word: "schmeißen",
        preposition: "",
        example: "Er hat den Ball über den Zaun geschmissen. Sie schmeißt die Party am Wochenende und lädt alle Freunde ein.",
        translation: "to throw, to chuck"
    },
    {
        word: "vormals",
        preposition: "",
        example: "Das Gebäude war vormals eine alte Fabrik, bevor es in ein Bürogebäude umgewandelt wurde. Er lebte vormals in Berlin, bevor er nach München zog.",
        translation: "formerly, previously"
    },
    {
        word: "vermögen",
        preposition: "",
        example: "Das Unternehmen vermag es, in schwierigen Zeiten erfolgreich zu bleiben.",
        translation: "to be able to, to be capable of"
    },
    {
        word: "untermauern",
        preposition: "",
        example: "Der Forscher untermauert seine Theorie mit zahlreichen Beweisen und Experimenten. Ihre Argumentation wird durch historische Fakten untermauert.",
        translation: "to substantiate, to support, to back up"
    },
    {
        word: "derartig",
        preposition: "",
        example: "Derartig hohe Temperaturen sind für diese Jahreszeit ungewöhnlich. Ihre derartige Unpünktlichkeit ist mir bisher noch nicht aufgefallen.",
        translation: "such, of this kind, this sort of"
    },
    {
        word: "zuteilwerden",
        preposition: "",
        example: "Ihm ist die Ehre zuteilgeworden, den Preis für sein Lebenswerk zu erhalten. Dieser Preis wird nun den besten Schülern zuteil, die sich besonders angestrengt haben.",
        translation: "to be granted, to be allocated, to be awarded"
    },
    {
        word: "sich einreihen",
        preposition: "",
        example: "Die Gäste reihten sich nach der Ankunft in die Warteschlange ein. Er hat sich in die Reihe der engagierten Freiwilligen eingereiht. Viele Länder reihten sich in die internationale Bewegung für den Umweltschutz ein.",
        translation: "to join in, to line up, to align oneself"
    },
    {
        word: "sich sträuben",
        preposition: "",
        example: "Der Hund sträubte sich gegen den Tierarztbesuch und wollte nicht ins Auto steigen. Er sträubte sich, das Angebot anzunehmen, obwohl es eine gute Gelegenheit gewesen wäre.",
        translation: "to resist, to rebel, to resist against"
    },
    {
        word: "landläufig",
        preposition: "",
        example: "Der Begriff 'Landläufig' ist landläufig für einen Begriff, den jeder kennt. Die landläufige Meinung ist, dass Schokolade glücklich macht.",
        translation: "commonly known, popular, widespread"
    },
    {
        word: "erwürgen",
        preposition: "",
        example: "Der Täter versuchte, sein Opfer zu erwürgen. In dem Thriller wird ein Detektiv von einem Unbekannten erwürgt.",
        translation: "to strangle, to choke, to suffocate"
    },
    {
        word: "sich herausstellen",
        preposition: "",
        example: "Es hat sich herausgestellt, dass er die ganze Zeit gelogen hat. Die Untersuchung stellt heraus, dass das Produkt sicher ist. Es stellte sich heraus, dass sie die beste Kandidatin für den Job war.",
        translation: "to emerge, to prove, to reveal"
    },
    {
        word: "anfassen",
        preposition: "",
        example: "Bitte fass die Ausstellungsstücke nicht an. Er hat die Probleme am Arbeitsplatz falsch angefasst. Sie fasste das Buch vorsichtig an, um es nicht zu beschädigen.",
        translation: "to touch, to handle"
    },
    {
        word: "sich trauen",
        preposition: "",
        example: "Ich traue mich nicht, vor vielen Leuten zu sprechen. Er hat sich getraut, seine Meinung zu sagen, obwohl er wusste, dass es unbeliebt sein würde.",
        translation: "to dare to do something"
    }
        
    ];
    
    // DOM elementleri
    const flashcard = document.getElementById('flashcard');
    const wordTitle = document.getElementById('wordTitle');
    const preposition = document.getElementById('preposition');
    const example = document.getElementById('example');
    const translation = document.getElementById('translation');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const flipBtn = document.getElementById('flipBtn');
    const currentCardElement = document.getElementById('currentCard');
    const totalCardsElement = document.getElementById('totalCards');
    const progressBar = document.getElementById('progressBar');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const easyBtn = document.getElementById('easyBtn');
    const mediumBtn = document.getElementById('mediumBtn');
    const hardBtn = document.getElementById('hardBtn');
    
    // Durum değişkenleri
    let currentIndex = 0;
    let isFlipped = false;
    let wordList = [...words];
    
    // Zorluk seviyelerine göre kelime grupları
    let easyWords = [];
    let mediumWords = [];
    let hardWords = [];
    
    // LocalStorage'dan zorluk seviyelerini yükle
    function loadDifficultyLevels() {
        const savedEasy = localStorage.getItem('easyWords');
        const savedMedium = localStorage.getItem('mediumWords');
        const savedHard = localStorage.getItem('hardWords');
        
        easyWords = savedEasy ? JSON.parse(savedEasy) : [];
        mediumWords = savedMedium ? JSON.parse(savedMedium) : [];
        hardWords = savedHard ? JSON.parse(savedHard) : [];
    }
    
    // Zorluk seviyelerini kaydet
    function saveDifficultyLevels() {
        localStorage.setItem('easyWords', JSON.stringify(easyWords));
        localStorage.setItem('mediumWords', JSON.stringify(mediumWords));
        localStorage.setItem('hardWords', JSON.stringify(hardWords));
    }
    
    // Başlangıç ayarları
    function init() {
        loadDifficultyLevels();
        totalCardsElement.textContent = wordList.length;
        updateCard();
        updateProgressBar();
    }
    
    // Kartı güncelle
    function updateCard() {
        const currentWord = wordList[currentIndex];
        wordTitle.textContent = currentWord.word;
        preposition.textContent = currentWord.preposition;
        example.textContent = currentWord.example;
        translation.textContent = currentWord.translation;
        currentCardElement.textContent = currentIndex + 1;
        
        // Önceki/sonraki butonlarını güncelle
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === wordList.length - 1;
        
        // Kartı ön yüze çevir
        isFlipped = false;
        flashcard.classList.remove('flipped');
    }
    
    // İlerleme çubuğunu güncelle
    function updateProgressBar() {
        const progress = ((currentIndex + 1) / wordList.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Kartı çevir
    function flipCard() {
        flashcard.classList.toggle('flipped');
        isFlipped = !isFlipped;
    }
    
    // Sonraki karta geç
    function nextCard() {
        if (currentIndex < wordList.length - 1) {
            currentIndex++;
            updateCard();
            updateProgressBar();
        }
    }
    
    // Önceki karta dön
    function prevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
            updateProgressBar();
        }
    }
    
    // Kelimeleri karıştır
    function shuffleWords() {
        wordList = [...words].sort(() => Math.random() - 0.5);
        currentIndex = 0;
        updateCard();
        updateProgressBar();
    }
    
    // Mevcut kelimeyi zorluk seviyesine ekle
    function addToDifficultyLevel(level) {
        const currentWord = wordList[currentIndex].word;
        
        // Önce diğer zorluk seviyelerinden kaldır
        easyWords = easyWords.filter(word => word !== currentWord);
        mediumWords = mediumWords.filter(word => word !== currentWord);
        hardWords = hardWords.filter(word => word !== currentWord);
        
        // Seçilen zorluk seviyesine ekle
        if (level === 'easy') {
            easyWords.push(currentWord);
        } else if (level === 'medium') {
            mediumWords.push(currentWord);
        } else if (level === 'hard') {
            hardWords.push(currentWord);
        }
        
        saveDifficultyLevels();
        
        // Görsel geri bildirim
        const btn = level === 'easy' ? easyBtn : level === 'medium' ? mediumBtn : hardBtn;
        btn.classList.add('active');
        setTimeout(() => {
            btn.classList.remove('active');
            nextCard();
        }, 300);
    }
    
    // Event listeners
    flashcard.addEventListener('click', flipCard);
    flipBtn.addEventListener('click', flipCard);
    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);
    shuffleBtn.addEventListener('click', shuffleWords);
    
    easyBtn.addEventListener('click', () => addToDifficultyLevel('easy'));
    mediumBtn.addEventListener('click', () => addToDifficultyLevel('medium'));
    hardBtn.addEventListener('click', () => addToDifficultyLevel('hard'));
    
    // Klavye kısayolları
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === ' ' || e.key === 'Spacebar') {
            flipCard();
            e.preventDefault(); // Sayfanın aşağı kaymasını engelle
        }
    });
    
    // Uygulamayı başlat
    init();
});
