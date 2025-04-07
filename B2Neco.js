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
