// ============================================================
// questions.js — Football Quiz Question Bank
// 3 difficulty levels × 3 languages (EN, FR, AR)
// Add or edit questions here easily.
// ============================================================

const QUESTIONS = {
  en: {
    easy: [
      {
        q: "Which country won the 2022 FIFA World Cup?",
        options: ["France", "Brazil", "Argentina", "Germany"],
        answer: 2
      },
      {
        q: "How many players are on a standard football team on the pitch?",
        options: ["9", "10", "11", "12"],
        answer: 2
      },
      {
        q: "Which club is known as 'The Red Devils'?",
        options: ["Arsenal", "Liverpool", "Manchester United", "AC Milan"],
        answer: 2
      },
      {
        q: "Who is the all-time top scorer in FIFA World Cup history?",
        options: ["Pelé", "Miroslav Klose", "Ronaldo (Brazil)", "Just Fontaine"],
        answer: 1
      },
      {
        q: "In which country is the 'Santiago Bernabéu' stadium located?",
        options: ["Portugal", "Argentina", "Spain", "Italy"],
        answer: 2
      },
      {
        q: "Which player is nicknamed 'CR7'?",
        options: ["Ronaldinho", "Cristiano Ronaldo", "Carlos Roa", "Carlos Valderrama"],
        answer: 1
      },
      {
        q: "How long is a standard football match (excluding extra time)?",
        options: ["80 minutes", "85 minutes", "90 minutes", "95 minutes"],
        answer: 2
      },
      {
        q: "Which country has won the most FIFA World Cup titles?",
        options: ["Germany", "Argentina", "Italy", "Brazil"],
        answer: 3
      }
    ],
    medium: [
      {
        q: "Which club did Lionel Messi join after leaving Barcelona in 2021?",
        options: ["Juventus", "PSG", "Manchester City", "Bayern Munich"],
        answer: 1
      },
      {
        q: "What year was FIFA founded?",
        options: ["1900", "1904", "1910", "1920"],
        answer: 1
      },
      {
        q: "Which nation hosted the 2018 FIFA World Cup?",
        options: ["Brazil", "Germany", "Russia", "France"],
        answer: 2
      },
      {
        q: "Who won the Ballon d'Or in 2023?",
        options: ["Kylian Mbappé", "Erling Haaland", "Lionel Messi", "Karim Benzema"],
        answer: 2
      },
      {
        q: "Which club has won the most UEFA Champions League titles?",
        options: ["Barcelona", "Bayern Munich", "Real Madrid", "AC Milan"],
        answer: 2
      },
      {
        q: "What is the maximum number of substitutions allowed in a standard match?",
        options: ["3", "4", "5", "6"],
        answer: 2
      },
      {
        q: "Who scored the 'Hand of God' goal in 1986?",
        options: ["Pelé", "Diego Maradona", "Michel Platini", "Gary Lineker"],
        answer: 1
      },
      {
        q: "Which English club is nicknamed 'The Gunners'?",
        options: ["Chelsea", "Tottenham", "Arsenal", "West Ham"],
        answer: 2
      }
    ],
    hard: [
      {
        q: "Which goalkeeper holds the record for most clean sheets in Premier League history?",
        options: ["Peter Schmeichel", "David Seaman", "Petr Čech", "Edwin van der Sar"],
        answer: 2
      },
      {
        q: "In what year did AFC Ajax win their last UEFA Champions League title?",
        options: ["1992", "1995", "1997", "1999"],
        answer: 1
      },
      {
        q: "Who scored the winning goal for France in the 1998 World Cup final?",
        options: ["Zinedine Zidane", "Thierry Henry", "Emmanuel Petit", "David Trezeguet"],
        answer: 0
      },
      {
        q: "Which player has won the most Ballon d'Or awards as of 2024?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Michel Platini"],
        answer: 1
      },
      {
        q: "What nationality is the legendary goalkeeper Lev Yashin?",
        options: ["Ukrainian", "German", "Soviet/Russian", "Hungarian"],
        answer: 2
      },
      {
        q: "Which club did Zinedine Zidane play for before joining Real Madrid?",
        options: ["Marseille", "Monaco", "Juventus", "Lyon"],
        answer: 2
      },
      {
        q: "How many times has Brazil won the FIFA World Cup?",
        options: ["4", "5", "6", "3"],
        answer: 1
      },
      {
        q: "Who was the top scorer (Golden Boot) at the 2014 FIFA World Cup?",
        options: ["Lionel Messi", "Neymar", "Thomas Müller", "James Rodríguez"],
        answer: 2
      }
    ]
  },

  fr: {
    easy: [
      {
        q: "Quel pays a remporté la Coupe du Monde FIFA 2022 ?",
        options: ["France", "Brésil", "Argentine", "Allemagne"],
        answer: 2
      },
      {
        q: "Combien de joueurs composent une équipe de football sur le terrain ?",
        options: ["9", "10", "11", "12"],
        answer: 2
      },
      {
        q: "Quel club est surnommé 'Les Diables Rouges' ?",
        options: ["Arsenal", "Liverpool", "Manchester United", "AC Milan"],
        answer: 2
      },
      {
        q: "Qui est le meilleur buteur de tous les temps en Coupe du Monde ?",
        options: ["Pelé", "Miroslav Klose", "Ronaldo (Brésil)", "Just Fontaine"],
        answer: 1
      },
      {
        q: "Dans quel pays se trouve le stade 'Santiago Bernabéu' ?",
        options: ["Portugal", "Argentine", "Espagne", "Italie"],
        answer: 2
      },
      {
        q: "Quel joueur est surnommé 'CR7' ?",
        options: ["Ronaldinho", "Cristiano Ronaldo", "Carlos Roa", "Carlos Valderrama"],
        answer: 1
      },
      {
        q: "Quelle est la durée normale d'un match de football ?",
        options: ["80 min", "85 min", "90 min", "95 min"],
        answer: 2
      },
      {
        q: "Quel pays a remporté le plus de Coupes du Monde ?",
        options: ["Allemagne", "Argentine", "Italie", "Brésil"],
        answer: 3
      }
    ],
    medium: [
      {
        q: "Quel club Lionel Messi a-t-il rejoint après avoir quitté Barcelone en 2021 ?",
        options: ["Juventus", "PSG", "Manchester City", "Bayern Munich"],
        answer: 1
      },
      {
        q: "En quelle année la FIFA a-t-elle été fondée ?",
        options: ["1900", "1904", "1910", "1920"],
        answer: 1
      },
      {
        q: "Quelle nation a organisé la Coupe du Monde FIFA 2018 ?",
        options: ["Brésil", "Allemagne", "Russie", "France"],
        answer: 2
      },
      {
        q: "Qui a remporté le Ballon d'Or en 2023 ?",
        options: ["Kylian Mbappé", "Erling Haaland", "Lionel Messi", "Karim Benzema"],
        answer: 2
      },
      {
        q: "Quel club a remporté le plus de titres en Ligue des Champions de l'UEFA ?",
        options: ["Barcelone", "Bayern Munich", "Real Madrid", "AC Milan"],
        answer: 2
      },
      {
        q: "Quel est le nombre maximum de remplaçants autorisés dans un match officiel ?",
        options: ["3", "4", "5", "6"],
        answer: 2
      },
      {
        q: "Qui a marqué le but de la 'Main de Dieu' en 1986 ?",
        options: ["Pelé", "Diego Maradona", "Michel Platini", "Gary Lineker"],
        answer: 1
      },
      {
        q: "Quel club anglais est surnommé 'Les Gunners' ?",
        options: ["Chelsea", "Tottenham", "Arsenal", "West Ham"],
        answer: 2
      }
    ],
    hard: [
      {
        q: "Quel gardien détient le record du plus grand nombre de clean sheets en Premier League ?",
        options: ["Peter Schmeichel", "David Seaman", "Petr Čech", "Edwin van der Sar"],
        answer: 2
      },
      {
        q: "En quelle année l'Ajax a-t-il remporté son dernier titre en Ligue des Champions ?",
        options: ["1992", "1995", "1997", "1999"],
        answer: 1
      },
      {
        q: "Qui a marqué le but décisif pour la France en finale de la Coupe du Monde 1998 ?",
        options: ["Zinedine Zidane", "Thierry Henry", "Emmanuel Petit", "David Trezeguet"],
        answer: 0
      },
      {
        q: "Quel joueur a remporté le plus de Ballons d'Or en 2024 ?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Michel Platini"],
        answer: 1
      },
      {
        q: "Quelle est la nationalité du légendaire gardien Lev Yachine ?",
        options: ["Ukrainienne", "Allemande", "Soviétique/Russe", "Hongroise"],
        answer: 2
      },
      {
        q: "Quel club Zinedine Zidane a-t-il quitté pour rejoindre le Real Madrid ?",
        options: ["Marseille", "Monaco", "Juventus", "Lyon"],
        answer: 2
      },
      {
        q: "Combien de fois le Brésil a-t-il remporté la Coupe du Monde ?",
        options: ["4", "5", "6", "3"],
        answer: 1
      },
      {
        q: "Qui était le meilleur buteur (Soulier d'Or) à la Coupe du Monde 2014 ?",
        options: ["Lionel Messi", "Neymar", "Thomas Müller", "James Rodríguez"],
        answer: 2
      }
    ]
  },

  ar: {
    easy: [
      {
        q: "أي منتخب فاز بكأس العالم FIFA 2022؟",
        options: ["فرنسا", "البرازيل", "الأرجنتين", "ألمانيا"],
        answer: 2
      },
      {
        q: "كم عدد لاعبي فريق كرة القدم في الملعب؟",
        options: ["9", "10", "11", "12"],
        answer: 2
      },
      {
        q: "أي نادٍ يُعرف بـ'الشياطين الحمر'؟",
        options: ["أرسنال", "ليفربول", "مانشستر يونايتد", "ميلان"],
        answer: 2
      },
      {
        q: "من هو الهداف التاريخي في كأس العالم؟",
        options: ["بيليه", "ميروسلاف كلوزي", "رونالدو البرازيلي", "جوست فونتين"],
        answer: 1
      },
      {
        q: "في أي بلد يقع ملعب 'سانتياغو برنابيو'؟",
        options: ["البرتغال", "الأرجنتين", "إسبانيا", "إيطاليا"],
        answer: 2
      },
      {
        q: "أي لاعب يُلقّب بـ'CR7'؟",
        options: ["رونالدينيو", "كريستيانو رونالدو", "كارلوس روا", "كارلوس فالديراما"],
        answer: 1
      },
      {
        q: "ما مدة مباراة كرة القدم الاعتيادية؟",
        options: ["80 دقيقة", "85 دقيقة", "90 دقيقة", "95 دقيقة"],
        answer: 2
      },
      {
        q: "أي دولة فازت بأكبر عدد من كؤوس العالم؟",
        options: ["ألمانيا", "الأرجنتين", "إيطاليا", "البرازيل"],
        answer: 3
      }
    ],
    medium: [
      {
        q: "أي نادٍ انضم إليه ميسي بعد مغادرة برشلونة عام 2021؟",
        options: ["يوفنتوس", "باريس سان جيرمان", "مانشستر سيتي", "بايرن ميونخ"],
        answer: 1
      },
      {
        q: "في أي عام تأسست FIFA؟",
        options: ["1900", "1904", "1910", "1920"],
        answer: 1
      },
      {
        q: "أي دولة استضافت كأس العالم FIFA 2018؟",
        options: ["البرازيل", "ألمانيا", "روسيا", "فرنسا"],
        answer: 2
      },
      {
        q: "من فاز بجائزة الكرة الذهبية 2023؟",
        options: ["كيليان مبابي", "إيرلينغ هالاند", "ليونيل ميسي", "كريم بنزيمة"],
        answer: 2
      },
      {
        q: "أي نادٍ فاز بأكبر عدد من ألقاب دوري أبطال أوروبا؟",
        options: ["برشلونة", "بايرن ميونخ", "ريال مدريد", "ميلان"],
        answer: 2
      },
      {
        q: "ما الحد الأقصى لعدد التبديلات المسموح بها في المباراة؟",
        options: ["3", "4", "5", "6"],
        answer: 2
      },
      {
        q: "من سجل هدف 'يد الله' عام 1986؟",
        options: ["بيليه", "دييغو مارادونا", "ميشيل بلاتيني", "غاري لينيكر"],
        answer: 1
      },
      {
        q: "أي نادٍ إنجليزي يُلقّب بـ'المدافعون'؟",
        options: ["تشيلسي", "توتنهام", "أرسنال", "وست هام"],
        answer: 2
      }
    ],
    hard: [
      {
        q: "أي حارس مرمى يحمل رقم قياسي في أكثر شباك نظيفة بالدوري الإنجليزي؟",
        options: ["شمايكل", "سيمان", "بيتر تشيك", "فان دير سار"],
        answer: 2
      },
      {
        q: "في أي عام فاز أياكس بآخر لقب له في دوري أبطال أوروبا؟",
        options: ["1992", "1995", "1997", "1999"],
        answer: 1
      },
      {
        q: "من سجل هدف التأهل لفرنسا في نهائي كأس العالم 1998؟",
        options: ["زيدان", "هنري", "بيتي", "تريزيغيه"],
        answer: 0
      },
      {
        q: "من فاز بأكبر عدد من جوائز الكرة الذهبية حتى 2024؟",
        options: ["رونالدو", "ميسي", "رونالدينيو", "بلاتيني"],
        answer: 1
      },
      {
        q: "ما جنسية الحارس الأسطوري ليف ياشين؟",
        options: ["أوكرانية", "ألمانية", "سوفيتية/روسية", "مجرية"],
        answer: 2
      },
      {
        q: "أي نادٍ غادره زيدان للانضمام لريال مدريد؟",
        options: ["مارسيليا", "موناكو", "يوفنتوس", "ليون"],
        answer: 2
      },
      {
        q: "كم مرة فازت البرازيل بكأس العالم؟",
        options: ["4", "5", "6", "3"],
        answer: 1
      },
      {
        q: "من كان الهداف الأعلى في كأس العالم 2014؟",
        options: ["ميسي", "نيمار", "توماس مولر", "جيمس رودريغيز"],
        answer: 2
      }
    ]
  }
};
