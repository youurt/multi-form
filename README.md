# Coding Challange Frontend-Developer HRF 
## Project dist run
```
yarn global add serve
serve -s dist  
```

## Project dev run
```
yarn install
yarn serve
```

### Description

- Multi-Step-Form SPA with vue.js (2), bootstrap-vue. 
  
- For the WYSIWYGEditor "tiptap" is used.

- MainPage.vue is the main component which renders the Containers based on the current page number. The user can go back and forth and the user input should be saved in an object called "state". This could be optimized with vuex, since now it is mutable!

- For the form validation simple regex is used (see services/validationService.js).

- The mappings/pagesMappings.js file is for data modification. Each field can be changed with this file.



### To-Do

- General: use vuex for immutable state management
- Containers: render input fields with v-for
