# Credifit frontend challenge

In this exercise, you’re buiding a feature to a Loan Approval WEB platform (named credichallenge) written in React.

We are providing you the following artifacts:

- A codebase in React using Typescript
- Three interfaces made on Figma: [Front-End Challenge](https://www.figma.com/file/bTWvsMWwUYz5qMJtTdN6Aq/Front-End-Challenge)
- A [users.json](https://github.com/credifit-br/credichallenge/blob/master/src/users.json) file that contains the list of users to be showed on data-table at "Solicitações de Empréstimo" screen ()
- A [companies.json](https://github.com/credifit-br/credichallenge/blob/master/src/companies.json) file that contains the list of companies

Your task is to enhance this codebase to the closest Figma interfaces as possible, following the requirements below:

- Show company's name on upper menu that have "selected" field as true (see companies.json).
- Show only users that have companyId of the selected company. E.g if the selected company have id equals 3, show only users that have "companyId" equals "3".
- Ordering the users by Name field.
- Implement "Approve / Reject" actions.
  - Both Approve/Reject will "remove" user from the list, but with different status update.
- Show the "Você não tem nenhuma solicitação de empréstimo" page when there are no loans to approve/reject anymore.

This problem is designed to give you some flavor of the work we do here at Credifit.
Please if you have any questions, just make your assumptions, comment on the code and follow along. Unfortunatelly we'll have no time to answer the questions. If you need to change any code already written, do so.

## Additional Requirements

- We love code quality! Be careful with the details.
- When in doubt, make a decision, comment the code and go ahead.
- Organize your code, including components, data structures, and state management - the way you would in a real project.
- At the end, we should be able to run `npm start` and run successfully, or else document any new way to run the app.

## Getting started

To get started with the app, clone the repository by:

- By SSH: `git clone git@github.com:credifit-br/credichallenge.git`
- By HTTPS: `git clone https://github.com/credifit-br/credichallenge.git`

Then build the app:

- `cd credichallenge/`
- `npm install`
- `npm start`

Then you open up the app in your browser at http://localhost:3000.

P.S. when you execute `npm start` you'll receive an error. So you need to fix it to continue.

The project was created using create-react-app. It uses plain TS and React state, with no third-party state management or data model libraries. Note that the assignment is designed to be doable without introducing any third-party libraries, but feel free to use any libraries you wish. Besides that, we recommend the use of [ant design](https://ant.design/). The componentes of the interface are based on it. But, feel free to use your favorite ui-showcase library.

## Submitting

To submit your project, please push your code to a private repo on Github, and then share it with us:

- On Github: add credifit users [isorensen](https://github.com/isorensen), [victorjatoba](https://github.com/victorjatoba) and [lucas123ho](https://github.com/lucas123ho) as a collaborator.

For instance, to push your code from this existing repo to a brand new empty Github project, replace the ALLCAPS parts below:

- git remote rename origin old-origin
- git remote add origin git@github.com:YOURNAME/YOURPROJECT.git
- git push -u origin --all
- git push -u origin --tags

Alternatively (but **not** preferrable), feel free to email us (oportunidades@credifit.com.br) a tar/zip, but without the node_modules/ or .git directory as follows:

- `tar -cvzf credichallenge.tar.gz --exclude *node_modules* --exclude .git/* credichallenge/`
