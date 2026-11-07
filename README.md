# Life is a Road! Let's draw it together!

A cross-platform mobile app (iOS & Android) built with **React Native** for the Erasmus+ school partnership project **"Life is a Road! Let's draw it together!" (2018–2020)**.

The app collects the results of two years of collaboration between partner schools in **Greece, Poland, Italy, Spain (Tenerife) and France (Martinique)**: a travel guide written by teens, a best-practices guide for teachers, the project hymn, a digital calendar, a cookbook, and a record of the five transnational meetings.

---

## Features

The home screen shows a short introduction and a color-coded button for each section:

| Section | What it contains |
|---|---|
| **Who we are** | Links to the websites of the five partner schools (Arethousa GR — coordinator, Mikołów PL, La Laguna ES, Le Marigot FR, Carmagnola IT) |
| **Travel Guide "Teens to Teens"** | Students' favorite places to visit in the five countries |
| **Best Practices** | Two guides with ideas teachers can reuse in lessons and projects |
| **Project Hymn** | The project's official song |
| **Digital Calendar "4 Seasons in 5 Regions"** | A two-part video calendar on YouTube |
| **Cook Book "Taste of Home"** | Traditional recipes from the partner regions |
| **Meetings** | A page per meeting with its dates, goals and a link to its Twinspace page |
| **Twinspace** | The project's official eTwinning Twinspace |
| **GDPR** | The app's privacy policy |

### The five meetings

| # | Location | Dates |
|---|---|---|
| 1 | Arethousa, Thessaloniki — Greece | 25 Nov – 2 Dec 2018 |
| 2 | Carmagnola — Italy | 17 – 24 Mar 2019 |
| 3 | Mikołów — Poland | 6 – 10 May 2019 |
| 4 | La Laguna, Tenerife — Spain | 14 – 18 Oct 2019 |
| 5 | Le Marigot, Martinique — France | 17 – 21 Feb 2020 |

Most content is hosted externally (Google Drive, Google Sites, YouTube, Yumpu, eTwinning). The app opens it in the device browser with React Native's `Linking` API.

---

## Tech stack

- [React Native](https://reactnative.dev/) 0.63
- [React Navigation](https://reactnavigation.org/) 5 (stack navigator)
- Jest and ESLint (React Native community config)

---

## Project structure

```
.
├── index.js                  # Entry point: registers the app component
├── app.json                  # App name / display name
├── Source/
│   ├── App.js                # NavigationContainer, theme and stack of screens
│   ├── mainScreen.js         # Home screen: intro text + one button per section
│   └── Screens/
│       ├── Route.js          # Central registry of screens (name, component, title, color)
│       ├── header.js         # Shared header with the project and IKY logos
│       ├── footer.js         # Shared footer: CC BY-NC-SA, source link, EU funding logo
│       ├── about.js          # "Who we are": partner schools
│       ├── travelGuide.js
│       ├── bestPactices.js
│       ├── projectHymn.js
│       ├── digitalCalendar.js
│       ├── cookBook.js
│       ├── meetings.js       # Meetings index + one screen per meeting
│       ├── twinspace.js
│       └── res/img/          # Logos and license badge
├── android/                  # Native Android project
├── ios/                      # Native iOS project (CocoaPods)
└── __tests__/                # Jest tests
```

### How navigation works

All sections are declared in one place, [`Source/Screens/Route.js`](Source/Screens/Route.js). Each entry looks like this:

```js
{
  name: "About",                       // route name
  component: AboutScreen,              // React component
  options: {
    title: "Who we are",               // header and home-button label
    headerStyle: { backgroundColor: "#66B3FF" },  // header and button color
    headerTintColor: '#fff',
  },
}
```

[`App.js`](Source/App.js) registers a `Stack.Screen` for every entry, plus each nested screen in the `meetings` array of the **Meetings** entry. [`mainScreen.js`](Source/mainScreen.js) builds the home-screen buttons from the same list, so its titles and colors always match the screen headers.

### Adding a new section

1. Create a component in `Source/Screens/`, e.g. `myScreen.js`. Wrap its content in a `ScrollView` with `<Header/>` at the top and `<Footer/>` at the bottom so it matches the other screens.
2. Import it in `Route.js` and add an entry to the `Screens` array with a `name`, `component` and `options` (`title` and `headerStyle.backgroundColor`).

The new section appears on the home screen and in the navigator automatically.

---

## Getting started

### Prerequisites

Set up a React Native development environment as described in the [React Native CLI guide](https://reactnative.dev/docs/environment-setup) (choose the **React Native CLI** tab):

- Node.js and npm
- **iOS:** macOS, Xcode and CocoaPods
- **Android:** Android Studio, the Android SDK and a JDK

> This project uses React Native 0.63 (2020). Recent versions of Xcode, Gradle or Node may need older toolchains or extra configuration to build it.

### Install

```bash
git clone https://github.com/alextsigilis/Life-is-a-Road.git
```

```bash
cd Life-is-a-Road && npm install
```

For iOS, also install the native pods:

```bash
cd ios && pod install && cd ..
```

### Run

Start the Metro bundler:

```bash
npm start
```

Then, in another terminal:

```bash
npm run ios
```

```bash
npm run android
```

### Test and lint

```bash
npm test
```

```bash
npm run lint
```

---

## Partner schools

- **Gymnasio Arethousas** — Arethousa, Greece *(coordinator)*
- **Szkoła Podstawowa nr 8 im. Wojciecha Korfantego** — Mikołów, Poland
- **IES Domingo Pérez Minik** — San Cristóbal de La Laguna, Tenerife, Spain
- **Collège Eugène Mona** — Le Marigot, Martinique, France
- **IC Carmagnola I** — Carmagnola, Italy

---

## License & funding

The app's content is shared under the **Creative Commons BY-NC-SA** license (badge in the app footer).

This project was co-funded by the **Erasmus+ Programme of the European Union** and supported by **IKY**, the Greek State Scholarships Foundation and Erasmus+ National Agency. The European Commission's support does not constitute an endorsement of the contents, which reflect only the views of the authors. The Commission cannot be held responsible for any use of the information they contain.
