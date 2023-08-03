<template>
  <div class="container">
    <h1 id="main-header">פרוייקטים מוכנים להתנעה</h1>
    <div class="input-container">
      <input v-model="newProject.name" placeholder="שם" />
      <input v-model="newProject.number" placeholder="מספר" />
      <button @click="addProject">+</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>שם</th>
          <th>מספר</th>
          <th>פעולות</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(project, index) in projects" :key="index">
          <td>{{ project.name }}</td>
          <td>{{ project.number }}</td>
          <td style="display: flex; justify-content: space-evenly;">
            <router-link :to="`/project/${project.id}/contacts`">
            <button @click="startProject(index)">התנעה</button>
            </router-link>
            <button style="background-color:red" @click="deleteProject(index)">מחק</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import { sendRequest } from '../api/main.js';
export default {
  data() {
    return {
      projects: [],
      // for debug
      newProject: {
        name: "",
        number: "",
        id: ""
      },
      Http: ""
    };
  },
  methods: {
    // for debug
    generateTimestampId() {
    this.newProject.id = Date.now().toString();
    },
    addProject() {
      if (this.newProject.name && this.newProject.number) {
        this.generateTimestampId()
        this.projects.push({ ...this.newProject });
        this.newProject.name = "";
        this.newProject.number = "";
      }
    },
    startProject(index) {
      alert(`מתניע: ${this.projects[index].name}`);
    },
    deleteProject(index) {
      this.projects.splice(index, 1);
   },
  },
  //   mounted() {
  //   // Make a GET request when the component is mounted
  //   sendRequest('GET', '/projects')
  //     .then(response => {
  //       this.projects = response;
  //     })
  //     .catch(error => {
  //       console.error('Error fetching projects:', error);
  //     });
  // },
  };
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
}

#main-header {
  font-size: 18px;
  border: none;
  border-radius: 5px;
  font-size: 45px;
  margin-bottom: 45px;
}


.input-container {
  direction: rtl;
  background-color: #f2f2f2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
}


input {
  padding: 8px;
  margin: 8px;
  font-size: 16px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

table {
  direction: rtl;
  margin: 20px auto;
  border-collapse: collapse;
  width: 80%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>