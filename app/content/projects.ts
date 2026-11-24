export type ProjectStatus = "live" | "wip" | "archived"

type TranslatedText = { en: string; ro: string }
type TranslatedList = { en: string[]; ro: string[] }

export type Project = {
    slug: string;
    title: string;
    version: string;
    year: string;
    status: ProjectStatus;
    summary: TranslatedText;
    stack: string[];
    liveUrl?: string;
    repoUrl: string;
    featured?: boolean;
    highlights?: TranslatedList;
    group?: string;
    demoPath?: string;
    whatItDoes?: TranslatedList;
    howItsBuilt?: TranslatedList;
}

export const projects: Project[] = [
    {
        slug: "crate",
        title: "Crate",
        version: "1.0.0",
        year: "2026",
        status: "live",
        summary: {
            en: "Search, filter and collect music from the open MusicBrainz database.",
            ro: "Cauti, filtrezi si colectionezi muzica din baza de date deschisa MusicBrainz.",
        },
        stack: ["React", "TypeScript", "Tailwind v4", "React Router", "Vitest", "Testing Library"],
        liveUrl: "https://musiccrate-adil.netlify.app",
        repoUrl: "https://github.com/Annubiss/Music-Crate",
        featured: true,
        highlights: {
            en: [
                "Search albums and songs with 4 combinable filters",
                "Save a personal collection and build playlists",
                "Written fully in TypeScript, tested before every deploy",
            ],
            ro: [
                "Cauti albume si piese cu 4 filtre combinabile",
                "Iti salvezi colectia si iti faci playlisturi",
                "Scrisa integral in TypeScript, testata inainte de fiecare deploy",
            ],
        },
        whatItDoes: {
            en: [
                "Search albums and songs, then narrow them down by genre, type, decade and length",
                "Save albums to your collection and sort them by date, title or artist",
                "Build playlists from anywhere in the app, kept after a refresh",
                "Light and dark theme that follows your system until you pick one",
            ],
            ro: [
                "Cauti albume si piese, apoi le restrangi dupa gen, tip, deceniu si durata",
                "Salvezi albume in colectie si le sortezi dupa data, titlu sau artist",
                "Faci playlisturi din orice loc din aplicatie, pastrate dupa refresh",
                "Tema deschisa si inchisa, care urmeaza sistemul pana alegi tu",
            ],
        },
        howItsBuilt: {
            en: [
                "The search lives in the URL. Refresh, share the link or hit Back and you land on the same results.",
                "Every MusicBrainz request waits its turn in a small queue, so the app stays under the API's limit of one request per second.",
                "One pure function turns the filters into the search query. It knows nothing about React and has the most tests in the project.",
                "Modals keep focus inside and hand it back on close, icon buttons say what they do, and every animation respects reduced motion.",
                "Tests run before every deploy. If one fails, the live site stays on the last working version.",
            ],
            ro: [
                "Cautarea sta in URL. Dai refresh, trimiti linkul sau apesi Back si ajungi la aceleasi rezultate.",
                "Fiecare cerere spre MusicBrainz isi asteapta randul intr-o coada mica, ca aplicatia sa ramana sub limita API-ului de o cerere pe secunda.",
                "O singura functie pura transforma filtrele in cautarea trimisa la API. Nu stie nimic de React si are cele mai multe teste din proiect.",
                "Modalele tin focusul inauntru si il dau inapoi la inchidere, butoanele cu iconite spun ce fac, iar toate animatiile respecta reduced motion.",
                "Testele ruleaza inainte de fiecare deploy. Daca unul pica, site-ul live ramane pe ultima versiune care merge.",
            ],
        },
    },

    {
        slug: "gametrack",
        title: "GameTrack",
        version: "1.0.0",
        year: "2026",
        status: "live",
        summary: {
            en: "Browse top-rated game deals from the CheapShark API and save the ones you like to a personal collection. My first React app.",
            ro: "Cele mai bine cotate oferte la jocuri, din API-ul CheapShark, cu o colectie personala pentru cele care iti plac. Prima mea aplicatie React.",
        },
        stack: ["React", "Vite", "Tailwind v4", "React Router", "Vitest"],
        liveUrl: "https://gametrack-adil.netlify.app",
        repoUrl: "https://github.com/Annubiss/gametrack",
        whatItDoes: {
            en: [
                "The 12 best-rated game deals right now, pulled live from CheapShark",
                "A page for each deal with retail and sale price, publisher and Steam rating",
                "Save games to your collection, kept after a refresh",
                "A “Must play” badge on games with 90% or more positive reviews",
            ],
            ro: [
                "Cele mai bine cotate 12 oferte la jocuri din acest moment, aduse live din CheapShark",
                "O pagina pentru fiecare oferta, cu pretul intreg si redus, publisher si rating Steam",
                "Salvezi jocuri in colectie, pastrate dupa refresh",
                "O eticheta “Must play” pe jocurile cu 90% sau mai multe recenzii pozitive",
            ],
        },
        howItsBuilt: {
            en: [
                "Every request has its own loading and error state, so a failed call shows a message instead of a blank page.",
                "The deal ID lives in the URL, so every game page has its own link.",
                "The collection is saved in localStorage and checked by deal ID, so the same game can't be saved twice.",
                "Component tests check the game card, including when the “Must play” badge shows up.",
            ],
            ro: [
                "Fiecare cerere are propria stare de incarcare si de eroare, asa ca un apel esuat arata un mesaj, nu o pagina goala.",
                "ID-ul ofertei sta in URL, deci fiecare pagina de joc are linkul ei.",
                "Colectia e salvata in localStorage si verificata dupa ID-ul ofertei, deci acelasi joc nu poate fi salvat de doua ori.",
                "Teste de componente verifica cardul jocului, inclusiv cand apare eticheta “Must play”.",
            ],
        },
    },

    {
        slug: "fantastic-beings",
        title: "Fantastic Beings",
        version: "1.0.0",
        year: "2025",
        status: "live",
        summary: {
            en: "Harry Potter-themed match-3 on a 5×5 grid, with scoring, win and lose conditions and sound effects.",
            ro: "Joc match-3 in universul Harry Potter, pe o tabla de 5×5, cu scor, conditii de castig si pierdere si efecte sonore.",
        },
        stack: ["JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/fantastic-beings-and-how-to-match-them-Annubiss",
        group: "vanilla",
        demoPath: "/demos/fantastyc-beings/index.html",
        whatItDoes: {
            en: [
                "Swap creatures to line up three or more of a kind",
                "15 moves to catch the creatures you need, or you lose",
                "Sound effects on every click and every match",
            ],
            ro: [
                "Schimbi creaturile intre ele ca sa aliniezi trei sau mai multe de acelasi fel",
                "15 mutari ca sa prinzi creaturile de care ai nevoie, altfel pierzi",
                "Efecte sonore la fiecare click si la fiecare potrivire",
            ],
        },
    },

    {
        slug: "random-user-generator",
        title: "Random User Generator",
        version: "1.0.0",
        year: "2025",
        status: "live",
        summary: {
            en: "Pulls random profiles from the randomuser.me API. Pick which fields to show and save users that stay after a refresh.",
            ro: "Aduce profiluri aleatorii din API-ul randomuser.me. Alegi ce campuri apar si salvezi utilizatori care raman dupa refresh.",
        },
        stack: ["JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/random-user-generator-Annubiss",
        group: "vanilla",
        demoPath: "/demos/random-user-generator/index.html",
        whatItDoes: {
            en: [
                "A new random profile with one click",
                "Choose what each card shows: name, email, photo, location, phone, birthday and more",
                "Saved users stay after a refresh",
            ],
            ro: [
                "Un profil nou, la intamplare, dintr-un click",
                "Alegi ce apare pe fiecare card: nume, email, poza, locatie, telefon, data nasterii si altele",
                "Utilizatorii salvati raman dupa refresh",
            ],
        },
    },

    {
        slug: "dog-glossary",
        title: "Dog Glossary",
        version: "1.0.0",
        year: "2025",
        status: "live",
        summary: {
            en: "Search dog breeds and sub-breeds from the Dog CEO API, or get a random dog.",
            ro: "Cauti rase si subrase de caini din API-ul Dog CEO, sau primesti un caine la intamplare.",
        },
        stack: ["JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/dog-glossary-Annubiss",
        group: "vanilla",
        demoPath: "/demos/dog-glossary/index.html",
        whatItDoes: {
            en: [
                "A random dog photo, or one of the breed you type",
                "The sub-breeds of any breed",
                "Every breed in the database, listed at once",
                "Clear messages for empty searches and unknown breeds",
            ],
            ro: [
                "O poza cu un caine la intamplare, sau cu rasa pe care o scrii",
                "Subrasele oricarei rase",
                "Toate rasele din baza de date, intr-o singura lista",
                "Mesaje clare pentru cautari goale si rase necunoscute",
            ],
        },
    },

    {
        slug: "accessibility-panel",
        title: "Website for the Visually Impaired",
        version: "1.0.0",
        year: "2025",
        status: "live",
        summary: {
            en: "A control panel that changes text size and color theme across the whole page.",
            ro: "Un panou de control care schimba marimea textului si tema de culori pe toata pagina.",
        },
        stack: ["JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/website-for-the-visually-impaired-Annubiss",
        group: "vanilla",
        demoPath: "/demos/website-for-the-visually-impaired/index.html",
        whatItDoes: {
            en: [
                "Four text sizes, from small to larger",
                "Three high-contrast color themes",
                "Hide every image and show its alt text instead",
            ],
            ro: [
                "Patru marimi de text, de la mic la foarte mare",
                "Trei teme de culori cu contrast mare",
                "Ascunzi toate imaginile si vezi in locul lor textul alternativ",
            ],
        },
    },

    {
        slug: "url-shortener",
        title: "URL Shortener",
        version: "1.0.0",
        year: "2025",
        status: "live",
        summary: {
            en: "Turns long links into short codes you can edit, and counts the clicks on each one.",
            ro: "Transforma linkurile lungi in coduri scurte pe care le poti edita si numara click-urile pe fiecare.",
        },
        stack: ["JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/url-shortener-Annubiss",
        group: "vanilla",
        demoPath: "/demos/url-shortener/index.html",
        whatItDoes: {
            en: [
                "Turn any link into a random 5-character code",
                "Edit the code by hand and save it with Enter",
                "Count the clicks on each short link",
            ],
            ro: [
                "Transformi orice link intr-un cod aleatoriu de 5 caractere",
                "Editezi codul de mana si il salvezi cu Enter",
                "Numeri click-urile pe fiecare link scurt",
            ],
        },
    },

    {
        slug: "virtual-piano",
        title: "Virtual Piano",
        version: "1.0.0",
        year: "2025",
        status: "live",
        summary: {
            en: "Play the piano from your keyboard, with real sounds for the white and black keys.",
            ro: "Canti la pian de la tastatura, cu sunete reale pentru clapele albe si negre.",
        },
        stack: ["JavaScript", "HTML", "CSS"],
        repoUrl: "https://github.com/Annubiss/Portfolio/tree/main/Projects/virtual-piano-Annubiss",
        group: "vanilla",
        demoPath: "/demos/virtual-piano/index.html",
        whatItDoes: {
            en: [
                "7 white and 5 black keys, played with A to J and W to U on your keyboard",
                "A real recorded note for every key",
            ],
            ro: [
                "7 clape albe si 5 negre, cantate cu tastele A pana la J si W pana la U",
                "O nota inregistrata pentru fiecare clapa",
            ],
        },
    },
]