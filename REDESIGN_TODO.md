# Redesign TODO — Nowy Relax

Kolejność jest od najwyższego priorytetu (wpływ na konwersję) do najniższego (estetyka/polish).
Każda zmiana jest opisana: co zmienić, gdzie w kodzie szukać, i jak powinno wyglądać po zmianie.

---

## 1. Interaktywna mapa na `/lokalizacja`

- [ ] **1a. Embedded mapa Google Maps lub Mapbox**
  - Gdzie: `src/app/lokalizacja/page.tsx` — znajdź sekcję poniżej hero, dodaj nową sekcję `<section>` przed stopką.
  - Co zrobić: Dodaj `<iframe>` z Google Maps Embed API wycentrowany na Cicibór Duży (koordynaty: `52.0456, 23.1189`). Mapa powinna mieć `width: 100%`, `height: 500px`, bez UI chrome (parametr `&output=embed`). Otocz `<iframe>` kontenerem z `overflow: hidden; border-radius: 12px`.
  - Alternatywa premium: użyj Mapbox GL JS z niestandardowym dark stylem (`mapbox://styles/mapbox/dark-v11`) i pinezką z logo Filipek Investment.
  - Mapa powinna pokazywać pin inwestycji + promień 1 km zaznaczony jako okrąg.

- [ ] **1b. Lista punktów POI obok mapy**
  - Gdzie: ta sama sekcja co mapa, układ `grid-cols-2` (lewa: mapa, prawa: lista) na desktop, `grid-cols-1` na mobile.
  - Co zrobić: dodaj listę z ikonkami (szkoła, sklep, centrum, węzeł A2) i konkretnymi odległościami. Zamień "kilka km" na faktyczną wartość — sprawdź w Google Maps i wpisz np. "3,2 km do węzła Cicibór (A2)".
  - Styl: każdy punkt to `flex items-center gap-3`, ikona SVG w złotym kolorze (`#C9A96E`), odległość pogrubiona, opis szary.

---

## 2. Timeline budowy (sekcja postępu inwestycji)

- [ ] **2a. Nowa sekcja "Harmonogram realizacji" na stronie głównej**
  - Gdzie: `src/app/page.tsx` — wstaw między sekcją z kartami opisowymi (opis inwestora) a sekcją CTA na dole.
  - Co zrobić: Utwórz komponent `src/components/BuildingTimeline.tsx`.
  - Układ: pozioma linia z 5 krokami na desktop, pionowa na mobile.
  - Kroki (przykładowe, dostosuj do rzeczywistości):
    1. "Pozwolenie na budowę" — ✅ Uzyskane
    2. "Prace fundamentowe" — ✅ Zakończone
    3. "Stan surowy otwarty" — 🔄 W trakcie (Q2 2026)
    4. "Stan deweloperski+" — ⏳ Q3 2026
    5. "Odbiory i przekazanie" — ⏳ Q4 2026
  - Aktywny krok ma złoty kolor akcentu i pulse animation (`animate-pulse` na wskaźniku).
  - Tło sekcji: ciemne (`#1a1a1a`), tekst biały — kontynuacja stylistyki dark sections.

- [ ] **2b. Badge statusu na hero `/oferta`**
  - Gdzie: `src/app/oferta/page.tsx` — w floating price card po prawej stronie hero.
  - Co zrobić: Dodaj jedną linię nad ceną: małą labkę `ETAP 1 · W TRAKCIE BUDOWY` z żółto-złotym kółkiem (pulsującym) jako wskaźnik statusu. Font-size `10px`, letter-spacing `0.15em`, kolor `#C9A96E`.

---

## 3. Scroll animations na sekcjach poza hero

- [ ] **3a. Instalacja Framer Motion (jeśli nie ma)**
  - Sprawdź `package.json` — czy jest `framer-motion`. Jeśli nie: `npm install framer-motion`.
  - Alternatywa bez biblioteki: użyj natywnego Intersection Observer API w custom hooku `src/hooks/useInView.ts`.

- [ ] **3b. Fade-in + slide-up na nagłówkach sekcji**
  - Gdzie: wszystkie `<section>` na `src/app/page.tsx` i podstronach.
  - Co zrobić: owiń każdy `<h2>` i pierwszy `<p>` w komponent `<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>`.
  - Karty w gridzie (`01`, `02`, `03`, `04`) powinny mieć `staggerChildren: 0.1` — każda karta wchodzi 100ms po poprzedniej.

- [ ] **3c. Animacja liczb w karcie inwestora ("25", "4")**
  - Gdzie: sekcja "Poznaj inwestora" na `src/app/page.tsx`.
  - Co zrobić: użyj Framer Motion `useMotionValue` + `useTransform` lub prostego `useEffect` z `setInterval` który inkrementuje licznik od 0 do docelowej wartości gdy element wejdzie w viewport.
  - Czas animacji: 1.2s, easing `easeOut`.

---

## 4. Galeria preview na stronie głównej

- [ ] **4a. Nowa sekcja galerii na homepage**
  - Gdzie: `src/app/page.tsx` — wstaw przed sekcją "Poznaj inwestora".
  - Co zrobić: Utwórz komponent `src/components/GalleryPreview.tsx`.
  - Układ: asymetryczna siatka 3 zdjęcia — jedno duże po lewej (2 kolumny, pełna wysokość), dwa mniejsze po prawej (1 kolumna każde, stacked). Na mobile: poziomy scroll (`overflow-x: scroll`, `scroll-snap-type: x mandatory`, każde zdjęcie `scroll-snap-align: start`).
  - Pod siatką: przycisk "Zobacz całą galerię →" linkujący do `/galeria`.
  - Zdjęcia: weź 3 najlepsze z istniejącego zasobu w `public/images/` (wybierz: widok ogrodu, widok z ulicy, wnętrze / salon).
  - Hover effect: delikatne `scale(1.03)` z `transition: transform 0.4s ease` na każdym zdjęciu.

---

## 5. Sekcja "Dom to więcej niż adres" — większa typografia

- [ ] **5a. Zwiększenie rozmiaru nagłówka tej sekcji**
  - Gdzie: `src/app/page.tsx` — znajdź sekcję z tekstem "Dom to więcej niż adres. To początek historii."
  - Co zrobić: Zmień `font-size` nagłówka z obecnego (prawdopodobnie ~32–40px) na `clamp(56px, 7vw, 96px)`. Przesuń tekst z bottom-left na center (zarówno poziomo jak i pionowo w obrębie full-screen sekcji) lub zostaw bottom-left ale z większym typem.
  - Fraza "To początek historii." wyróżnij jako osobną linię z `font-style: italic` i złotym kolorem (`#C9A96E`).

---

## 6. Sekcja 01/02/03 — poprawa hierarchii i kontrastu

- [ ] **6a. Zmniejszenie gap między numerem a labelką**
  - Gdzie: sekcja "Dom, który dobrze działa na co dzień" w `src/app/page.tsx`.
  - Co zrobić: Zmniejsz `margin-bottom` lub `gap` między elementem z numerem (np. `<span>01</span>`) a labelką (`PARTER`) z ~32px do ~8px. Numer i labelka powinny być traktowane jako jedna jednostka wizualna.

- [ ] **6b. Poprawa kontrastu body text na ciemnym tle**
  - Gdzie: ta sama sekcja — paragrafy opisowe pod każdym z trzech kolumn.
  - Co zrobić: Zmień kolor tekstu z obecnego (prawdopodobnie `text-gray-400` lub `rgba(255,255,255,0.5)`) na minimum `rgba(255,255,255,0.75)`. Sprawdź kontrast w Chrome DevTools → Accessibility → Color Contrast. Cel: minimum 4.5:1 dla WCAG AA.

---

## 7. Rzut kondygnacji — interaktywne hotspoty

- [ ] **7a. Klikalne obszary na rzucie**
  - Gdzie: sekcja z rzutem w `src/app/page.tsx` (lub komponent `FloorPlan`).
  - Co zrobić: Nad obrazem rzutu dodaj element `<div style={{ position: 'relative' }}>`. Wewnątrz umieść `<img>` rzutu, a na nim absolutnie pozycjonowane `<button>` elementy (małe kółka `24px`, złoty border, białe tło) w przybliżonych miejscach: salon, kuchnia, sypialnia główna, garaż, ogród.
  - Po hover/click: pojawia się tooltip z nazwą pomieszczenia i powierzchnią m² (`Salon + jadalnia · 34,5 m²`).
  - Na mobile: hotspoty zastąp listą poniżej obrazu.

- [ ] **7b. Przełącznik Parter / Piętro w sekcji rzutu na homepage**
  - Gdzie: ta sama sekcja.
  - Co zrobić: Dodaj dwa przyciski toggle (styl jak w `/oferta` — pill buttons "Parter" / "1. piętro") które przełączają wyświetlany obraz rzutu. Stan zarządzaj przez `useState`.

---

## 8. CTA buttons — kontrast na hero images

- [ ] **8a. Backdrop i shadow na przyciskach CTA w hero**
  - Gdzie: `src/app/page.tsx` hero section — blok z dwoma przyciskami ("Zapytaj o dostępność domu", "Zobacz ofertę").
  - Co zrobić: Do kontenera przycisków dodaj `backdrop-filter: blur(4px)` lub do każdego przycisku: `box-shadow: 0 2px 16px rgba(0,0,0,0.3)`. Biały wypełniony przycisk powinien mieć `border: 1.5px solid rgba(255,255,255,0.8)` aby być widoczny nawet na białym fragmencie zdjęcia.
  - Sprawdź wszystkie stany slideshowa — przycisk musi być czytelny na każdym z przełączanych zdjęć.

---

## 9. Sekcja inwestora — wzmocnienie social proof

- [ ] **9a. Dodanie roku założenia i cytatu**
  - Gdzie: sekcja "Poznaj inwestora" na `src/app/page.tsx`.
  - Co zrobić: W karcie z liczbami (25, 4) dodaj trzecią metrykę: "Rok założenia · 20XX" (sprawdź rzeczywisty rok z KRS lub zapytaj klienta). Opcjonalnie: czwarta metryka "Lata doświadczenia".
  - Poniżej karty lub obok tekstu dodaj krótki cytat od właściciela (1–2 zdania w `<blockquote>`) z imieniem i nazwiskiem oraz małym zdjęciem/avatarem. Styl: `border-left: 3px solid #C9A96E`, padding-left, italic.

---

## 10. Footer — social media i logotyp

- [ ] **10a. Dodanie ikon social media**
  - Gdzie: `src/components/Footer.tsx` (lub odpowiedni plik).
  - Co zrobić: W kolumnie KONTAKT lub jako osobny rząd nad disclaimerem dodaj linki do:
    - Facebook (obowiązkowo dla nieruchomości PL)
    - Instagram (opcjonalnie, jeśli klient ma konto)
  - Styl: SVG ikony `20px`, kolor `rgba(255,255,255,0.6)`, hover → `rgba(255,255,255,1)`, `transition: color 0.2s`.

- [ ] **10b. Logotyp SVG w stopce zamiast samego tekstu**
  - Gdzie: ta sama sekcja — lewa kolumna stopki z "Nowy Relax" i "INWESTYCJA FILIPEK INVESTMENT SP. Z O.O."
  - Co zrobić: Użyj komponentu logo (`<Logo />` lub `<Image>`) zamiast czystego tekstu, tak jak w nawigacji. Rozmiar: ~120px szerokość. Pod logo tagline "Dom to więcej niż adres. To początek historii." już jest — zostaw.

---

## 11. Strona `/lokalizacja` — konkretne odległości

- [ ] **11a. Zastąpienie "kilka km" rzeczywistą wartością**
  - Gdzie: `src/app/lokalizacja/page.tsx` — floating card z odległościami po prawej stronie hero.
  - Co zrobić: Zmierz w Google Maps odległość od inwestycji do węzła autostradowego Cicibór i zastąp "kilka km" konkretną liczbą, np. "3,2 km". To małe zmianie, ale buduje wiarygodność.
  - Sprawdź też pozostałe wartości — czy "ok. 1 km do granicy Białej Podlaskiej" i "ok. 170 km do Warszawy (A2)" są aktualne i precyzyjne.

---

## 12. Sticky header — zmiana stylu po wyjściu z hero

- [ ] **12a. Weryfikacja i poprawa scroll-aware navbar**
  - Gdzie: `src/components/Navbar.tsx` (lub podobna nazwa).
  - Co zrobić: Sprawdź czy navbar zmienia swój wygląd gdy użytkownik przewinie poza hero. Powinien:
    - Na hero: `background: transparent` lub `background: rgba(0,0,0,0.3)` z `backdrop-filter: blur(8px)`
    - Po wyjściu z hero: `background: rgba(15,10,5,0.95)` z `box-shadow: 0 1px 0 rgba(255,255,255,0.08)`
  - Jeśli już działa — sprawdź czy transition między trybami jest płynny (`transition: background 0.3s ease`).
  - Jeśli nie działa — dodaj `useEffect` nasłuchujący `window.scroll` i ustawiający klasę CSS po przekroczeniu `window.innerHeight * 0.9`.
