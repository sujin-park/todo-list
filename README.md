# TO DO LIST

[![typescript](https://img.shields.io/badge/typescript-v.3.9.3-blue)](https://www.typescriptlang.org/)
[![react](https://img.shields.io/badge/react-v.16.13.1-blue)](https://reactjs.org/)
[![redux](https://img.shields.io/badge/redux-v.4.0.5-purple)](https://redux.js.org/)

## URL

[https://todo-sinsa.netlify.app/](https://todo-sinsa.netlify.app/)

## Prerequisites

- [Node.js](https://nodejs.org/ko/)
- [Yarn](https://yarnpkg.com/)

## Installation

### 1. Clone the project

```bash
$ git clone https://github.com/sujin-park/todo-list.git
```

### 2. Install Packages

```bash
$ yarn (install)
```

### 3. Start Application

```bash
$ yarn start
```

### Structure

boilerplate 프로젝트인 create-react-app 으로 구성하였습니다.

```
src
├── components
│   ├── common
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Datepicker.tsx
│   │   ├── DraggedItem.tsx
│   │   ├── Input.tsx
│   │   ├── Switch.tsx
│   │   └── Textarea.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── hooks
│   ├── useTheme.ts
│   └── useTodoState.ts
├── pages
│   └── TodoApp.tsx
├── modules
│   ├── todos
│   │   ├── actions.ts
│   │   ├── reducer.ts
│   │   ├── types.ts
│   │   └── index.ts
│   └── index.ts
├── style
│   ├── Theme.ts
│   └── GlobalStyle.ts
├── pages
│   └── TodoApp.tsx
├── index.tsx
└── App.tsx
```

1. `components` : Presentational Components

2. `pages` : Container Components

3. `hooks` : Custom made hooks

4. `modules` : Redux Actions & Action Types & Reducers

5. `style` : Global Style & Theme (light & dark)

### Dependencies

- [Styled Components](https://styled-components.com/)
- [React drag&drop API](https://react-dnd.github.io/react-dnd/about)
- [Ant design](https://ant.design)
- [Day.js](https://github.com/iamkun/dayjs)
