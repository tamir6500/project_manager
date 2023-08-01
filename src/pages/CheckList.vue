<template>
  <div class="container">
    <!-- Header -->
    <h1 id="main-header">Project Name</h1>

    <!-- Designed text inside a div -->
    <div class="designed-text">
      <p>פתיחת תיק ביצוע בעותק קשיח - בוצע?</p>
      <!-- Checkbox -->
      <input type="checkbox" v-model="isChecked" />
    </div>
    <button>הבא</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 40px;
  direction: rtl;
}

#main-header {
  font-size: 36px;
  margin-bottom: 20px;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.designed-text {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
}

.designed-text p {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Style the checkbox */
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  border: 2px solid #4caf50;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

input[type="checkbox"]:checked {
  background-color: #4caf50;
}
</style>