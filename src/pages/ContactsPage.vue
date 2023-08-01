<template>
  <div class="container">
    <h1 id="main-header">Project Name</h1>
    <h1>Table of customer mail list</h1>

    <!-- Plus sign to add new rows -->
    <button @click="showInputs = !showInputs" class="plus-btn">+</button>

    <!-- Inputs to add a new row -->
    <div v-if="showInputs" class="input-container">
      <input v-model="newCustomer.fullName" placeholder="שם מלא" />
      <input v-model="newCustomer.role" placeholder="תפקיד" />
      <input v-model="newCustomer.phone" placeholder="טלפון" />
      <input v-model="newCustomer.email" placeholder="אימייל" />
      <button @click="addCustomer">הוסף</button>
    </div>

    <!-- Table of customer mail list -->
    <table>
      <thead>
        <tr>
          <th>שם מלא</th>
          <th>תפקיד</th>
          <th>טלפון</th>
          <th>אימייל</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.role }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <button class="delete-btn" @click="deleteCustomer(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

     <!-- Internal mail list header -->
    <h1>Internal mail list</h1>

    <!-- Input to insert email and button to add -->
    <div class="input-container">
      <input v-model="newEmail" placeholder="Insert email" />
      <button @click="addEmailToList">הוסף</button>
    </div>

    <!-- List of internal emails with option to delete -->
    <table>
      <thead>
        <tr>
          <th>אימייל</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(email, index) in internalEmails" :key="index">
          <td>{{ email }}</td>
          <td>
            <button class="delete-btn" @click="deleteEmail(index)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <router-link to="/checklist">
    <button>הבא</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInputs: false,
      newCustomer: {
        fullName: "",
        role: "",
        phone: "",
        email: "",
      },
      customers: [],
      newEmail: "",
      internalEmails: [],
    };
  },
  methods: {
    addCustomer() {
      if (
        this.newCustomer.fullName ||
        this.newCustomer.role ||
        this.newCustomer.phone ||
        this.newCustomer.email
      ) {
        this.customers.push({ ...this.newCustomer });
        this.newCustomer.fullName = "";
        this.newCustomer.role = "";
        this.newCustomer.phone = "";
        this.newCustomer.email = "";
        this.showInputs = false;
      }
    },
    deleteCustomer(index) {
      this.customers.splice(index, 1);
    },

     // New methods for internal mail list
    addEmailToList() {
      if (this.newEmail.trim() !== "") {
        this.internalEmails.push(this.newEmail.trim());
        this.newEmail = "";
      }
    },
    deleteEmail(index) {
      this.internalEmails.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
}

#main-header {
  font-size: 36px;
  margin-bottom: 20px;
}

.plus-btn {
  background-color: #ff4500;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.input-container {
  direction: rtl;
  background-color: #f2f2f2;
  display: flex;
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

ul {
  direction: rtl;
   list-style: none; /* Remove default list styles */
  padding: 0; /* Remove default padding */
}

.delete-btn {
  background-color: #ff4500;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


</style>